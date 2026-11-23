# Launch checklist

Follows the SEO Master Blueprint (sections 6, 7 and 10). Items marked **you** need your accounts or decisions.

## Already in the codebase
- [x] Responsive layouts, crawlable `<a>` navigation
- [x] Static HTML for every page (Astro), custom 404
- [x] Per-page title, description, canonical, Open Graph / Twitter tags
- [x] Organization, WebSite, BreadcrumbList and BlogPosting structured data
- [x] `sitemap-index.xml` and `robots.txt` (draft pages are `noindex` and excluded from the sitemap)
- [x] Self-hosted fonts (no Google Fonts requests), optimised images
- [x] Security headers and long-term caching for built assets (`vercel.json`)
- [x] Redirect map from old URLs (`src/data/redirects.js`, 23 entries, **illustrative**)
- [x] CI: lint, build and internal-link check (`.github/workflows/ci.yml`, `npm run check`)

## Before launch
- [ ] **you** Replace `src/data/redirects.js` with the real old-site URL list and a Search Console "pages" export, then run `npm run redirects` and commit `vercel.json`
- [ ] **you** Test redirects on a Vercel preview deployment (status codes, no chains or loops). They have not been tested on Vercel yet
- [ ] **you** Vercel: connect the repo, framework preset Astro, set `PUBLIC_SITE_URL` to the real domain, add the domain (HTTPS is automatic)
- [ ] **you** Contact forms: set `PUBLIC_FORM_ENDPOINT` (and confirm `PUBLIC_CONTACT_EMAIL`); send a test enquiry for each of the four routes, including a resume
- [ ] **you** Sanity: create the Vercel deploy hook and Sanity webhook (see `docs/blog-and-sanity.md`); publish a test post
- [ ] **you** Review the draft pages (`docs/content-review-checklist.md`), then delete each page's `draft: true` in `src/data/site.js` to publish it
- [~] Privacy policy page added and linked from forms and footer; **you** review it with legal and publish (see content-review-checklist)
- [ ] **you** Confirm the company details: legal name, address, email, real social profile URLs (footer uses placeholders). Then add them to the Organization structured data in `src/data/home.js`
- [ ] **you** Analytics: create a GA4 property, set `PUBLIC_GA_MEASUREMENT_ID` (a `generate_lead` event fires on each successful enquiry). Decide whether you need a cookie-consent banner for your visitors' regions
- [ ] **you** Search Console: add the property, set `PUBLIC_GSC_VERIFICATION`, submit `/sitemap-index.xml`
- [ ] Run Lighthouse / PageSpeed on the preview URL and review Core Web Vitals

## After launch
- [ ] Confirm indexing and the sitemap in Search Console; check old URLs redirect
- [ ] Review queries, clicks, and enquiries monthly (blueprint section 9)
