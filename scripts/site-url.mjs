// Called only by Astro's build configuration, never shipped as client code.
export function resolveSiteUrl(env = process.env) {
  const raw = env.SITE_URL?.trim() || env.CF_PAGES_URL?.trim() || 'http://localhost:4321';
  const parsed = new URL(raw);
  if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password || parsed.search || parsed.hash || parsed.pathname !== '/') {
    throw new Error('SITE_URL must be an http(s) origin without credentials, path, query or hash.');
  }
  if (env.CF_PAGES && ['localhost', '127.0.0.1'].includes(parsed.hostname)) {
    throw new Error('Cloudflare builds require a public SITE_URL or CF_PAGES_URL.');
  }
  return parsed.href;
}
