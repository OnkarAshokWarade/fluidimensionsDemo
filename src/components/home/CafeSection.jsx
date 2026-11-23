import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import Reveal from './Reveal';
import { cafeSection as content } from '../../data/home';

export default function CafeSection() {
  return (
    <section id="engineering-cafe" aria-labelledby="cafe-heading" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="site-container">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-br from-amber-50 via-white to-orange-50 p-8 text-center ring-1 ring-orange-100 sm:p-12 lg:p-16">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">FluiDimensions Engineering Café</span>
            <h2 id="cafe-heading" className="mx-auto mt-2 max-w-3xl font-heading text-[clamp(1.75rem,5vw,2.5rem)] font-black leading-tight text-primary">{content.heading}</h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-slate-600">{content.body}</p>
            <Link to={content.to} className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-6 font-heading text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent-dark">
              {content.cta} <HiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
