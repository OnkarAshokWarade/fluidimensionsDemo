# FluiDimensions

Website for FluiDimensions engineering consulting and solutions. Built with [Astro](https://astro.build) (static output), Tailwind CSS 4, and Sanity for the blog. Hosted on Vercel.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run lint
```

Copy `.env.example` to `.env` to override environment variables.

## Structure

- `src/data/site.js`: page inventory, SEO metadata and navigation
- `src/data/home.js`, `src/data/content.js`: homepage and page copy
- `src/pages`: routes (home, generated content pages, blog, RSS, robots)
- `studio/`: Sanity Studio (blog editor). See [docs/blog-and-sanity.md](docs/blog-and-sanity.md)
- `docs/content-review-checklist.md`: draft pages awaiting review (kept `noindex` until approved)
