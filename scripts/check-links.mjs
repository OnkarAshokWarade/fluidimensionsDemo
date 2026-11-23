// Post-build link checker: every internal href/src in dist/*.html must resolve to a built file.
// Usage: npm run build && npm run check-links
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const full = join(dir, name);
  return statSync(full).isDirectory() ? walk(full) : [full];
});

const resolves = (path) => {
  const clean = decodeURIComponent(path.split('#')[0].split('?')[0]);
  if (clean === '') return true;
  const candidates = [join(dist, clean), join(dist, clean, 'index.html'), join(dist, `${clean}.html`)];
  return candidates.some((candidate) => existsSync(candidate) && (statSync(candidate).isFile()));
};

const redirectSources = new Set(
  JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8')).redirects.map((r) => r.source.replace('{/}?', '').replace(/\/$/, '')),
);

let checked = 0;
const problems = [];
for (const file of walk(dist).filter((f) => extname(f) === '.html')) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (/^(https?:|mailto:|tel:|data:|#|\/\/)/.test(url)) continue;
    checked += 1;
    if (!resolves(url) && !redirectSources.has(url.split('#')[0].replace(/\/$/, ''))) problems.push(`${file.replace(dist, '/')}: ${url}`);
  }
}

if (problems.length) {
  console.error(`Broken internal links (${problems.length}):\n${problems.join('\n')}`);
  process.exit(1);
}
console.log(`Checked ${checked} internal links: all resolve.`);

// Redirect loops: a redirect that points to its own source would loop forever on Vercel.
const vercel = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
const selfRedirects = vercel.redirects.filter((r) => r.source.replace('{/}?', '').replace(/\/$/, '') === r.destination.split('#')[0].replace(/\/$/, ''));
if (selfRedirects.length) {
  console.error(`Redirect loops in vercel.json: ${selfRedirects.map((r) => r.source).join(', ')}`);
  process.exit(1);
}
console.log(`No redirect loops (${vercel.redirects.length} redirects checked).`);
