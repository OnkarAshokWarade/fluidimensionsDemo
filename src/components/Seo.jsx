import { SITE } from '../data/site';

// Per-page head tags. React 19 hoists <title>, <meta> and <link> rendered
// anywhere in the tree into <head>, so no helper library is needed.
export default function Seo({ title, description, path = '/', noindex = false }) {
  const url = `${SITE.url}${path}`;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
