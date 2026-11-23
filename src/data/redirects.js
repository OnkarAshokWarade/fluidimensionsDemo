// Old-URL -> new-URL map (permanent redirects), written to vercel.json by `npm run redirects`.
//
// ILLUSTRATIVE: built from (a) the URLs of the earlier version of this site and (b) the examples in
// the SEO Master Blueprint. Replace/extend it with the real old-site URL list and a Search Console
// "pages" export before launch (blueprint section 7). Send each URL to its closest relevant page,
// never blindly to the homepage.

const services = {
  'cfd-analysis': '/engineering-simulation/',
  'cfd-modeling': '/engineering-simulation/',
  'heat-transfer': '/engineering-simulation/',
  'reaction-engineering': '/chemical-engineering-process-consulting/',
  'mixing-optimization': '/chemical-engineering-process-consulting/',
  'equipment-design': '/engineering-design/',
  'cfd-automation': '/software-automation/',
  'process-optimization': '/chemical-engineering-process-consulting/',
  'industrial-training': '/engineering-technologies-software/',
};

const industries = {
  chemical: '/industries/chemical-process/',
  pharmaceutical: '/industries/pharmaceuticals/',
  'cement-mining': '/industries/cement/',
  // Closest relevant destination; agro and paints have no dedicated page yet. Old URLs that already match
  // a new URL (oil-gas, food-beverage) need no redirect: redirecting a URL to itself creates an endless loop.
  'metals-metallurgy': '/industries/steel-metals/',
  agro: '/#industries',
  'paints-pigments': '/#industries',
  automobile: '/industries/automotive/',
};

export const redirects = [
  { from: '/services', to: '/#capabilities' },
  ...Object.entries(services).map(([slug, to]) => ({ from: `/services/${slug}`, to })),
  { from: '/industries', to: '/#industries' },
  ...Object.entries(industries).map(([slug, to]) => ({ from: `/industries/${slug}`, to })),
  // Blueprint examples
  { from: '/cement', to: '/industries/cement/' },
  { from: '/pharmaceuticals', to: '/industries/pharmaceuticals/' },
  { from: '/cfd', to: '/engineering-simulation/' },
];
