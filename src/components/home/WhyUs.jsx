import { IoLayersOutline, IoExtensionPuzzleOutline, IoBulbOutline, IoOptionsOutline } from 'react-icons/io5';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { whySection as content } from '../../data/home';

const icons = { IoLayersOutline, IoExtensionPuzzleOutline, IoBulbOutline, IoOptionsOutline };

export default function WhyUs() {
  return (
    <section id="why-fluidimensions" aria-labelledby="why-heading" className="bg-brand-bg py-20 sm:py-24 lg:py-28">
      <div className="site-container">
        <SectionHeading id="why-heading" eyebrow="Why FluiDimensions" title={content.heading} />
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {content.items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.title}>
                <Reveal delay={index * 0.05} className="h-full">
                  <div className="flex h-full gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary"><Icon size={24} aria-hidden="true" /></span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-primary">{item.title}</h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
