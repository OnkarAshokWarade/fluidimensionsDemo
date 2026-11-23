export default function JsonLd({ data }) {
  // Content is static, first-party data; escape "<" so it can never close the script tag.
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
