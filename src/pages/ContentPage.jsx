import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import JsonLd from '../components/JsonLd';
import { CONTACT_BUSINESS, CONTACT_PATH, SITE, capabilityPages, industryPages } from '../data/site';
import { pageContent, levelLabels, levelNotes } from '../data/content';

const sectionFor = (path) => {
  if (path.startsWith('/industries/')) return { name: 'Industries', to: '/#industries', siblings: industryPages };
  if (capabilityPages.some((page) => page.path === path)) return { name: 'Engineering', to: null, siblings: capabilityPages };
  return null;
};

const breadcrumbJsonLd = (page, section) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { name: 'Home', item: `${SITE.url}/` },
    ...(section?.to ? [{ name: section.name, item: `${SITE.url}${section.to}` }] : []),
    { name: page.label, item: `${SITE.url}${page.path}` },
  ].map((entry, index) => ({ '@type': 'ListItem', position: index + 1, ...entry })),
});

function Block({ id, heading, children }) {
  return (
    <section aria-labelledby={id} className="mt-14 sm:mt-16">
      <h2 id={id} className="font-heading text-xl font-bold text-primary sm:text-2xl">{heading}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

// Generic template for every blueprint page. Pages flagged `stub` (no content yet) or
// `draft` (content awaiting review) are kept out of search indexes.
export default function ContentPage({ page }) {
  const section = sectionFor(page.path);
  const content = pageContent[page.path];
  const noindex = Boolean(page.stub || page.draft);
  const siblings = section?.siblings.filter((entry) => entry.path !== page.path) ?? [];

  return (
    <div className="min-h-screen bg-brand-bg">
      <Seo title={page.title} description={page.description} path={page.path} noindex={noindex} />
      <JsonLd data={breadcrumbJsonLd(page, section)} />
      <Navbar />
      <main className="pb-20 pt-28 sm:pt-32">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs font-medium text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              {section && <li aria-hidden="true">/</li>}
              {section && <li>{section.to ? <Link to={section.to} className="hover:text-accent">{section.name}</Link> : section.name}</li>}
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-primary">{page.label}</li>
            </ol>
          </nav>

          <header className="max-w-3xl">
            {content && (
              <p className="mb-4 inline-flex rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 font-heading text-xs font-semibold text-secondary">{levelLabels[content.level]}</p>
            )}
            <h1 className="font-heading text-[clamp(2rem,6vw,3.25rem)] font-black leading-tight text-primary">{page.h1}</h1>
            <p className="mt-5 font-body text-base leading-relaxed text-slate-600 sm:text-lg">{page.intro}</p>
            {(content?.levelNote || levelNotes[content?.level]) && (
              <p className="mt-4 font-body text-sm leading-relaxed text-slate-500">{content.levelNote || levelNotes[content.level]}</p>
            )}
          </header>

          {page.stub && (
            <p role="note" className="mt-10 max-w-3xl rounded-xl border border-dashed border-slate-300 bg-white p-5 font-body text-sm leading-relaxed text-slate-500">
              Detailed content for this page is in preparation.
            </p>
          )}

          {content && (
            <>
              <Block id="focus-heading" heading={content.focusHeading}>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {content.focus.map((item) => (
                    <li key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                      <h3 className="font-heading text-base font-bold text-primary">{item.title}</h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </Block>

              {content.questions && (
                <Block id="questions-heading" heading="Questions we help answer">
                  <ul className="max-w-3xl list-disc space-y-2 pl-5 font-body text-base leading-relaxed text-slate-600 marker:text-accent">
                    {content.questions.map((question) => <li key={question}>{question}</li>)}
                  </ul>
                </Block>
              )}

              <Block id="deliverables-heading" heading="What you can expect">
                <ul className="max-w-3xl list-disc space-y-2 pl-5 font-body text-base leading-relaxed text-slate-600 marker:text-accent">
                  {content.deliverables.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Block>

              <Block id="links-heading" heading={page.path.startsWith('/industries/') ? 'Relevant capabilities' : 'Related expertise'}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {content.links.map((entry) => (
                    <li key={entry.to}>
                      <Link to={entry.to} className="group block h-full rounded-xl border border-slate-200 bg-white p-5 transition hover:border-accent/40">
                        <span className="flex items-center justify-between gap-3 font-heading text-sm font-bold text-primary group-hover:text-accent">
                          {entry.label} <HiArrowRight aria-hidden="true" />
                        </span>
                        <span className="mt-1 block font-body text-sm text-slate-500">{entry.why}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Block>
            </>
          )}

          {!content && siblings.length > 0 && (
            <Block id="related-heading" heading={`More in ${section.name}`}>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {siblings.map((entry) => (
                  <li key={entry.path}>
                    <Link to={entry.path} className="flex min-h-12 items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 font-body text-sm font-semibold text-slate-700 transition hover:border-accent/40 hover:text-accent">
                      {entry.label} <HiArrowRight aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {page.path !== CONTACT_PATH && (
            <div className="mt-16">
              <Link to={CONTACT_BUSINESS} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-6 font-heading text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent-dark">
                Discuss an Engineering Challenge <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
