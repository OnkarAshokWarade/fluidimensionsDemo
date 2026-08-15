import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowSmRight } from 'react-icons/hi';
import { servicesData, iconMap } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 cfd-grid opacity-20" />
      <div className="site-container relative z-10">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Engineering Capabilities</span>
          <h2 className="mt-2 font-heading text-[clamp(1.875rem,5vw,2.75rem)] font-black leading-tight text-primary">Advanced Simulation Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">From high-fidelity fluid modeling to complete equipment optimization, our specialists turn complex physics into confident design decisions.</p>
        </header>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }} className="hide-scrollbar -mx-4 grid snap-x snap-mandatory grid-flow-col auto-cols-[84%] gap-4 overflow-x-auto px-4 pb-5 min-[480px]:auto-cols-[62%] sm:mx-0 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 xl:gap-8" tabIndex="0" aria-label="Engineering services">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article key={service.id} variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }} className="group flex h-full min-w-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl sm:rounded-3xl sm:p-7 xl:p-8">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr ${service.color} text-white shadow-md sm:h-14 sm:w-14`}><Icon size={25} /></div>
                <h3 className="mt-6 font-heading text-lg font-bold text-primary sm:text-xl">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">{service.shortDesc}</p>
                <Link to={`/services/${service.id}`} className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-lg font-heading text-xs font-bold text-secondary transition group-hover:text-accent">Explore service <HiArrowSmRight size={17} /></Link>
              </motion.article>
            );
          })}
        </motion.div>
        <p className="mt-3 text-center text-[11px] text-slate-400 sm:hidden">Swipe to explore services</p>
      </div>
    </section>
  );
}
