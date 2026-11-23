import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { finalCta as content } from '../../data/home';
import { CONTACT_BUSINESS, CONTACT_PATH } from '../../data/site';

export default function FinalCta() {
  return (
    <section id="start-a-conversation" aria-labelledby="final-cta-heading" className="relative overflow-hidden bg-primary py-20 sm:py-24 lg:py-28">
      <div className="cfd-grid pointer-events-none absolute inset-0 opacity-5" aria-hidden="true" />
      <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" aria-hidden="true" />
      <div className="site-container relative text-center">
        <h2 id="final-cta-heading" className="mx-auto max-w-3xl font-heading text-[clamp(1.875rem,6vw,3rem)] font-black leading-tight text-white">{content.heading}</h2>
        <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-gray-300">{content.body}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to={CONTACT_BUSINESS} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-8 font-heading text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-accent-dark sm:w-auto">
            {content.primary} <HiArrowRight aria-hidden="true" />
          </Link>
          <Link to={CONTACT_PATH} className="inline-flex min-h-12 items-center justify-center font-heading text-sm font-semibold text-white underline-offset-4 hover:text-orange-300 hover:underline">{content.secondary}</Link>
        </div>
      </div>
    </section>
  );
}
