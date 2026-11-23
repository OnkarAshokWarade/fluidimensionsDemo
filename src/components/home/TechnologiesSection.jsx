import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import Reveal from './Reveal';
import { technologiesSection as content } from '../../data/home';

export default function TechnologiesSection() {
  return (
    <section id="technologies" aria-labelledby="technologies-heading" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="site-container">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 id="technologies-heading" className="font-heading text-[clamp(1.75rem,5vw,2.5rem)] font-black leading-tight text-primary">{content.heading}</h2>
              {content.body.map((paragraph) => <p key={paragraph} className="mt-4 font-body text-base leading-relaxed text-slate-600">{paragraph}</p>)}
              <Link to={content.to} className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-heading text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent">
                {content.cta} <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
            <ul className="flex flex-wrap gap-3" aria-label="Technology areas">
              {content.areas.map((area) => (
                <li key={area} className="rounded-full border border-slate-200 bg-brand-bg px-5 py-3 font-heading text-sm font-semibold text-secondary">{area}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
