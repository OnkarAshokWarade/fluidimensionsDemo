// Generates vercel.json from src/data/redirects.js. Run `npm run redirects` after editing the map.
import { writeFileSync } from 'node:fs';
import { redirects } from '../src/data/redirects.js';

const security = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

const config = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  trailingSlash: true,
  cleanUrls: true,
  // `{/}?` matches the old URL with or without a trailing slash; `permanent` sends a 308 (treated as 301 by search engines).
  redirects: redirects.map(({ from, to }) => ({ source: `${from}{/}?`, destination: to, permanent: true })),
  headers: [
    { source: '/(.*)', headers: security },
    { source: '/_astro/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
  ],
};

writeFileSync(new URL('../vercel.json', import.meta.url), `${JSON.stringify(config, null, 2)}\n`);
console.log(`vercel.json written with ${config.redirects.length} redirects`);
