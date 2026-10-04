import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import assert from 'node:assert/strict';

const output = process.env.QA_OUTPUT || join(tmpdir(), 'tanaka-personal-site-qa');
mkdirSync(output, { recursive: true });
const server = spawn('python3', ['-u', '-c', 'import http.server,os\nos.chdir("dist")\ns=http.server.ThreadingHTTPServer(("127.0.0.1",0),http.server.SimpleHTTPRequestHandler)\nprint(s.server_port,flush=True)\ns.serve_forever()'], { stdio: ['ignore', 'pipe', 'ignore'] });
const port = await new Promise((resolve, reject) => { server.stdout.once('data', data => resolve(Number(data.toString().trim()))); server.once('error', reject); });
const origin = `http://127.0.0.1:${port}`;
let browser;
const results = [];
const errors = [];
const missing = [];
const watch = page => {
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.url().startsWith(origin) && response.status() >= 400) missing.push(response.url()); });
};
async function load(page, path) {
  await page.goto(origin + path, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.locator('#content-wrapper').waitFor();
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(700);
}
async function overflow(page, label) {
  const size = await page.evaluate(() => ({ width: window.innerWidth, body: document.body.scrollWidth, html: document.documentElement.scrollWidth }));
  assert(size.body <= size.width + 2 && size.html <= size.width + 2, `${label}: overflow ${JSON.stringify(size)}`);
}
try {
  browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/chromium', headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage', '--no-proxy-server'], timeout: 30000 });
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 1000 }, colorScheme: 'light' });
  const page = await desktop.newPage(); watch(page);
  await load(page, '/');
  await page.locator('h1').filter({ hasText: 'つくること' }).waitFor();
  await overflow(page, 'Desktop');
  await page.screenshot({ path: join(output, 'desktop.png') });
  results.push('Desktop 1440x1000: homepage and layout pass');
  await page.waitForFunction(() => Boolean(window.pagefind?.search));
  await page.locator('#search-bar input').fill('Reki');
  await page.locator('#search-panel a').filter({ hasText: 'Reki' }).first().waitFor();
  await page.locator('#search-bar input').fill('');
  await page.waitForFunction(() => document.querySelectorAll('#search-panel a').length === 0);
  results.push('Search: Reki returns results; clearing the input clears results');
  await page.locator('.intro-links a').first().click();
  await page.waitForURL('**/projects/');
  await page.locator('#miftah-ja').waitFor();
  await overflow(page, 'Projects');
  results.push('Swup navigation: homepage to projects');
  for (const path of ['/about/', '/posts/hello/', '/archive/']) await load(page, path);
  await page.getByText('個人サイトをはじめました', { exact: true }).waitFor();
  results.push('Profile, article, and archive load');
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, colorScheme: 'light' });
  const phone = await mobile.newPage(); watch(phone);
  await load(phone, '/'); await overflow(phone, 'Mobile');
  await phone.screenshot({ path: join(output, 'mobile.png') });
  await phone.locator('#nav-menu-switch').click();
  await phone.locator('#nav-menu-panel a[href="/projects/"]').click();
  await phone.waitForURL('**/projects/');
  await phone.locator('#miftah-ja').waitFor();
  await overflow(phone, 'Mobile projects');
  results.push('Mobile 390x844: no overflow; menu and page navigation work');
  await load(phone, '/');
  await phone.locator('#scheme-switch').click();
  await phone.locator('#scheme-switch').click();
  await phone.waitForFunction(() => document.documentElement.classList.contains('dark'));
  await phone.screenshot({ path: join(output, 'mobile-dark.png') });
  await load(phone, '/about/');
  assert(await phone.evaluate(() => document.documentElement.classList.contains('dark')), 'Dark preference was not retained');
  await load(page, '/');
  await page.evaluate(() => localStorage.setItem('theme', 'dark'));
  await load(page, '/');
  await page.screenshot({ path: join(output, 'desktop-dark.png') });
  results.push('Theme: switch and dark preference persist after navigation');
  assert.deepEqual(errors, [], 'Browser errors');
  assert.deepEqual(missing, [], 'Missing local assets');
  results.push('No uncaught browser errors or missing local assets');
  const report = { results, errors, missing, output };
  writeFileSync(join(output, 'results.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser?.close();
  server.kill('SIGTERM');
}
