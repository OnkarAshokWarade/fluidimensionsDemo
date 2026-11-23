import { Link } from 'react-router-dom';
import { HiArrowSmRight } from 'react-icons/hi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { industriesSection as content } from '../../data/home';
import chemical from '../../assets/industries/chemical.webp';
import cement from '../../assets/industries/cement-mining.webp';
import pharma from '../../assets/industries/pharmaceutical.webp';
import oilGas from '../../assets/industries/oil-gas.webp';

// TODO(assets): replace with approved real industrial/project imagery (blueprint section 5).
const images = {
  '/industries/chemical-process/': chemical,
  '/industries/cement/': cement,
  '/industries/pharmaceuticals/': pharma,
  '/industries/oil-gas/': oilGas,
};

export default function IndustriesSection() {
  return (
    <section id="industries" aria-labelledby="industries-heading" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="site-container">
        <SectionHeading id="industries-heading" title={content.heading} intro={content.intro} />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {content.cards.map((card, index) => (
            <li key={card.path}>
              <Reveal delay={index * 0.05} className="h-full">
                <Link to={card.path} className="group relative flex min-h-[22rem] h-full flex-col justify-end overflow-hidden rounded-2xl bg-primary p-6 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img src={images[card.path]} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/20" aria-hidden="true" />
                  <div className="relative">
                    <h3 className="font-heading text-xl font-bold">{card.label}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-slate-200">{card.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 font-heading text-xs font-bold text-orange-300">
                      Explore {card.label} <HiArrowSmRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
