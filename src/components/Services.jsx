import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowSmRight } from 'react-icons/hi';
import { servicesData, iconMap } from '../data/services';
import IconBadge from './IconBadge';
import cfdAnalysisImage from '../assets/services/cfd-analysis.png';
import cfdModelingImage from '../assets/services/cfd-modeling.png';
import heatTransferImage from '../assets/services/heat-transfer.png';
import reactionEngineeringImage from '../assets/services/reaction-engineering.png';
import mixingOptimizationImage from '../assets/services/mixing-optimization.png';
import equipmentDesignImage from '../assets/services/equipment-design.png';
import cfdAutomationImage from '../assets/services/cfd-automation.png';
import processOptimizationImage from '../assets/services/process-optimization.png';
import industrialTrainingImage from '../assets/services/industrial-training.png';

const serviceImages = {
  'cfd-analysis': cfdAnalysisImage,
  'cfd-modeling': cfdModelingImage,
  'heat-transfer': heatTransferImage,
  'reaction-engineering': reactionEngineeringImage,
  'mixing-optimization': mixingOptimizationImage,
  'equipment-design': equipmentDesignImage,
  'cfd-automation': cfdAutomationImage,
  'process-optimization': processOptimizationImage,
  'industrial-training': industrialTrainingImage,
};

const primaryServiceOrder = ['cfd-analysis', 'heat-transfer', 'cfd-modeling'];
const orderedServices = [
  ...primaryServiceOrder.map((id) => servicesData.find((service) => service.id === id)).filter(Boolean),
  ...servicesData.filter((service) => !primaryServiceOrder.includes(service.id)),
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 cfd-grid opacity-20" />
      <div className="site-container relative z-10">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">Engineering Capabilities</span>
          <h2 className="mt-2 font-heading text-[clamp(1.875rem,5vw,2.75rem)] font-black leading-tight text-primary">Advanced Simulation Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">From high-fidelity fluid modeling to complete equipment optimization, our specialists turn complex physics into confident design decisions.</p>
        </header>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }} className="hide-scrollbar -mx-4 grid snap-x snap-mandatory grid-flow-col auto-cols-[84%] gap-4 overflow-x-auto px-4 pb-5 min-[480px]:auto-cols-[62%] sm:mx-0 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 xl:gap-8" tabIndex="0" aria-label="Engineering services">
          {orderedServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article key={service.id} variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }} className="group relative flex min-h-[22rem] min-w-0 snap-start flex-col justify-between overflow-hidden rounded-2xl bg-primary p-6 text-white shadow-[0_16px_40px_-20px_rgba(7,27,58,.55)] ring-1 ring-slate-900/5 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_-22px_rgba(7,27,58,.65)] sm:rounded-3xl sm:p-7 lg:min-h-[24rem] xl:p-8">
                <img src={serviceImages[service.id]} alt="" loading="lazy" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,18,39,.18)_0%,rgba(4,18,39,.16)_34%,rgba(4,18,39,.9)_72%,rgba(4,18,39,.98)_100%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(4,18,39,.12)_0%,rgba(4,18,39,.12)_34%,rgba(4,18,39,.88)_72%,rgba(4,18,39,.98)_100%)]" />
                <div className="pointer-events-none absolute inset-0 cfd-grid opacity-[0.07]" />
                <div className="relative z-10 flex items-start"><IconBadge tone={`service.${service.id}`}><Icon size={25} /></IconBadge></div>
                <div className="relative z-10">
                  <div className="mb-3 h-0.5 w-8 bg-accent transition-all duration-300 group-hover:w-14" />
                  <h3 className="font-heading text-xl font-black tracking-tight sm:text-2xl">{service.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/75">{service.shortDesc}</p>
                  <Link to={`/services/${service.id}`} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg font-heading text-xs font-bold text-white transition hover:text-orange-300">Explore service <HiArrowSmRight className="transition-transform group-hover:translate-x-1" size={17} /></Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
        <p className="mt-3 text-center text-[11px] text-slate-400 sm:hidden">Swipe to explore services</p>
      </div>
    </section>
  );
}
