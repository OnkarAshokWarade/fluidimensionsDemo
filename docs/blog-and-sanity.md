# Blog and Sanity

The site is built with Astro (static output, hosted on Vercel). Blog posts are written in
**Sanity Studio** and pulled into the site at build time.

- Sanity project ID: `wwt4wlxz`, dataset: `production`
- Posts appear at `/blog/` and `/blog/<slug>/`; `/rss.xml` lists them.

## Publish the Studio (one time)
From the `studio/` folder:

```
npm install
npx sanity login
npx sanity deploy
```

The Studio is then available at https://fluidimensions.sanity.studio. Invite editors in the
Sanity project settings (Members).

## Make publishing rebuild the site (one time)
1. In Vercel: Project > Settings > Git > Deploy Hooks > create a hook (e.g. `sanity-publish`) and copy its URL.
2. In Sanity (manage > project > API > Webhooks > Create webhook):
   - URL: the Vercel deploy hook URL
   - Dataset: `production`
   - Trigger on: Create, Update, Delete
   - Filter: `_type == "post"`
   - HTTP method: POST
3. Publishing a post now triggers a Vercel build; the post is live after the build (about a minute).

## Vercel settings
- Framework preset: Astro (build command `npm run build`, output `dist`).
- Environment variables: `PUBLIC_SITE_URL` (the real domain). The Sanity variables have working defaults.

## Current setup (done)
- Vercel project: `fluidimensions-demo-oozu` (Astro preset, build command `npm run build`), connected to `OnkarAshokWarade/fluidimensionsDemo`.
- Deploy hook `sanity-publish` currently targets branch **`astro-migration`**. When the Astro branch is merged to `main`, change the hook's branch to `main` (Vercel > Settings > Git > Deploy Hooks).
- Sanity webhook "Rebuild site on post change" (filter `_type == "post"`, create/update/delete) calls that hook.
- `PUBLIC_SITE_URL` is not set yet: set it once the real domain is chosen, otherwise canonical links and the sitemap use `https://www.fluidimensions.com`.
