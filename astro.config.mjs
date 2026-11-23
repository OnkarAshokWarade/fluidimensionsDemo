import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import { contentPages } from './src/data/site.js';

// TODO(confirm): production domain. Set PUBLIC_SITE_URL in Vercel to override.
const site = (process.env.PUBLIC_SITE_URL || 'https://www.fluidimensions.com').replace(/\/$/, '');

// Pages flagged draft/stub are noindex, so keep them out of the sitemap too.
const unpublished = new Set(
  contentPages.filter((page) => page.draft || page.stub).map((page) => `${site}${page.path}`),
);

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [icon(), sitemap({ filter: (page) => !unpublished.has(page) && !page.endsWith('/404/') })],
  vite: { plugins: [tailwindcss()] },
});
