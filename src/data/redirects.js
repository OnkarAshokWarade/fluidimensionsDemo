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
  'oil-gas': '/industries/oil-gas/',
  'cement-mining': '/industries/cement/',
  // No dedicated page yet: closest relevant destination is the industries section.
  'metals-metallurgy': '/#industries',
  agro: '/#industries',
  'paints-pigments': '/#industries',
  'food-beverage': '/#industries',
  automobile: '/#industries',
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
