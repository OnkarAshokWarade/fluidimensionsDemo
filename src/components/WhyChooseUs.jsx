import { motion } from 'framer-motion';
import {
  HiOutlineAdjustments, HiOutlineChartBar, HiOutlineCheckCircle,
  HiOutlineCog, HiOutlineDatabase, HiOutlineGlobeAlt,
  HiOutlineLightningBolt, HiOutlineTrendingUp, HiOutlineUserGroup,
} from 'react-icons/hi';
import IconBadge from './IconBadge';

const features = [
  [HiOutlineUserGroup, 'Specialist Engineering Team', 'Advanced expertise in fluid dynamics, heat transfer, reaction engineering, and multiphase modeling.', '20+ years experience', 'why.team'],
  [HiOutlineLightningBolt, 'Efficient Delivery', 'Parallel compute workflows and focused model planning support faster, decision-ready simulation cycles.', 'Rapid iteration', 'why.delivery'],
  [HiOutlineChartBar, 'Validation-Led Accuracy', 'Grid independence, model sensitivity, and operating-data correlation are built into the workflow.', 'Evidence based', 'why.validation'],
  [HiOutlineCog, 'Simulation-Driven Design', 'Physics insight enters early enough to reduce trial-and-error and improve equipment decisions before fabrication.', 'Lower design risk', 'why.design'],
  [HiOutlineDatabase, 'Cross-Industry Knowledge', 'Experience across chemical, pharmaceutical, metallurgical, energy, food, and process industries.', '9 sectors', 'why.knowledge'],
  [HiOutlineAdjustments, 'Tailored Solver Workflows', 'Custom boundary profiles, automation scripts, and user-defined models are selected for the actual process.', 'Fit for purpose', 'why.workflow'],
  [HiOutlineGlobeAlt, 'Scalable Collaboration', 'Clear inputs, review gates, and reporting make projects effective across distributed engineering teams.', 'Global delivery', 'why.collaboration'],
  [HiOutlineCheckCircle, 'Actionable Outcomes', 'Every study connects simulation findings to operating, geometry, or scale-up recommendations.', 'Decision ready', 'why.outcomes'],
  [HiOutlineTrendingUp, 'Modern Methodologies', 'Parametric studies, surrogate models, digital twins, and automation extend traditional CFD capability.', 'Future focused', 'why.methodology'],
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-brand-bg py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent/5 blur-[90px]" />
      <div className="site-container relative z-10">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Why Fluidimensions</span>
          <h2 className="mt-2 font-heading text-[clamp(1.875rem,5vw,2.75rem)] font-black leading-tight text-primary">Engineering depth that strengthens every decision</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">A rigorous, collaborative approach designed to deliver credible models and practical recommendations.</p>
        </header>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }} className="hide-scrollbar -mx-4 grid snap-x snap-mandatory grid-flow-col auto-cols-[84%] gap-4 overflow-x-auto px-4 pb-5 min-[480px]:auto-cols-[62%] sm:mx-0 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 xl:gap-8" tabIndex="0" aria-label="Reasons to choose Fluidimensions">
          {features.map(([Icon, title, description, metric, tone]) => (
            <motion.article key={title} variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="group min-w-0 snap-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-xl sm:rounded-3xl sm:p-7 xl:p-8">
              <IconBadge tone={tone}><Icon size={24} /></IconBadge>
              <h3 className="mt-6 font-heading text-lg font-bold text-primary sm:text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
              <div className="mt-6 border-t border-slate-100 pt-4 text-xs font-bold uppercase tracking-wider text-secondary">{metric}</div>
            </motion.article>
          ))}
        </motion.div>
        <p className="mt-3 text-center text-[11px] text-slate-400 sm:hidden">Swipe to explore capabilities</p>
        <div className="mt-12 text-center"><a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 font-heading text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent">Discuss your engineering challenge</a></div>
      </div>
    </section>
  );
}
