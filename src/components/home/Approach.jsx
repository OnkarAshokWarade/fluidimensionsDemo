import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { approachSection as content } from '../../data/home';

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="relative overflow-hidden bg-primary py-20 sm:py-24 lg:py-28">
      <div className="cfd-grid pointer-events-none absolute inset-0 opacity-5" aria-hidden="true" />
      <div className="site-container relative">
        <SectionHeading id="approach-heading" title={content.heading} intro={content.intro} dark />
        <ol className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {content.steps.map((step, index) => (
            <li key={step.n}>
              <Reveal delay={index * 0.08} className="h-full">
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <span className="font-heading text-4xl font-black text-accent/80" aria-hidden="true">{step.n}</span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-slate-300">{step.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
