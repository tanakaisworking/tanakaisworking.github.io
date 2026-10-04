import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import assert from 'node:assert/strict';
const root = resolve('dist');
const files = [];
function walk(dir) { for (const entry of readdirSync(dir, { withFileTypes: true })) { const path = join(dir, entry.name); if (entry.isDirectory()) walk(path); else files.push(path); } }
walk(root);
const pages = files.filter(file => file.endsWith('.html'));
assert(pages.length >= 7, 'Expected home, projects, about, archive, posts and 404');
for (const file of ['index.html', 'projects/index.html', 'about/index.html', 'archive/index.html', '404.html', 'rss.xml', 'sitemap-index.xml', 'robots.txt', 'pagefind/pagefind.js', 'og.png', 'favicon.svg']) assert(existsSync(join(root, file)), `Missing ${file}`);
assert(!files.some(file => file.includes('development-log-template')), 'A draft was published');
let checkedLinks = 0;
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  assert(html.includes('lang="ja"'), `${file}: language missing`);
  assert(/rel="canonical"[^>]+href="https?:/.test(html), `${file}: canonical missing`);
  assert(!/Lorem Ipsum|Demo Site|This Is a Fake Search Result|fuwari\.vercel\.app|開発ログの下書きテンプレート/.test(html), `${file}: demo/draft leaked`);
  for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    const link = match[1].replaceAll('&amp;', '&');
    if (!link.startsWith('/') || link.startsWith('//')) continue;
    const pathname = decodeURIComponent(new URL(link, 'https://test.invalid').pathname);
    const target = join(root, pathname);
    const candidates = [target, join(target, 'index.html'), `${target}.html`];
    assert(candidates.some(candidate => existsSync(candidate) && statSync(candidate).isFile()), `${file}: broken link ${link}`);
    checkedLinks++;
  }
}
assert(!readFileSync(join(root, 'rss.xml'), 'utf8').includes('development-log-template'), 'Draft leaked in RSS');
console.log(`Verified ${pages.length} HTML pages, ${checkedLinks} local references, RSS, sitemap, OGP, search assets, and draft exclusion.`);
