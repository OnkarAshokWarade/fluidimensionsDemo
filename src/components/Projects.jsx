import { motion } from 'framer-motion';
import { HiArrowRight, HiOutlineClock } from 'react-icons/hi';
import reactorImage from '../assets/case-studies/reactor-mixing.jpg';
import cycloneImage from '../assets/case-studies/cyclone-separator.jpg';
import bioreactorImage from '../assets/case-studies/bioreactor-mixing.jpg';

const projects = [
  {
    id: 'reactor-yield',
    title: 'Stirred-Tank Reactor Yield Optimization',
    industry: 'Chemical Processing',
    image: reactorImage,
    alt: 'Stainless-steel stirred-tank reactor with CFD flow-path visualization',
    objective: 'Improve reaction conversion while removing thermal non-uniformity and excessive shaft power demand.',
    challenge: 'Plant data indicated persistent reagent accumulation above the lower impeller and localized temperature excursions near the feed zone. The existing configuration produced weak axial circulation and inconsistent residence time.',
    approach: 'A transient multiphase CFD model compared impeller diameter, blade pitch, spacing, feed location, and rotational speed. Grid independence and torque predictions were checked against operating measurements before design screening.',
    outcome: 'The selected dual-stage hydrofoil configuration strengthened top-to-bottom circulation, eliminated the principal stagnation region, and lowered the required operating speed.',
    metrics: [
      { value: '+18%', label: 'Conversion yield' },
      { value: '-12%', label: 'Motor power' },
      { value: '0', label: 'Critical hot spots' },
    ],
    methods: ['Transient CFD', 'Multiphase flow', 'Design sweep'],
    duration: '6-week study',
  },
  {
    id: 'cyclone-separator',
    title: 'Cyclone Separator Performance Upgrade',
    industry: 'Cement & Minerals',
    image: cycloneImage,
    alt: 'Industrial cyclone separator with airflow and particle-trajectory visualization',
    objective: 'Increase fine-particle capture while controlling pressure loss and high-wear regions.',
    challenge: 'Uneven inlet loading and a short-circuiting gas path allowed fine dust to reach the clean-gas outlet. High near-wall velocities also accelerated erosion along the cone and inlet transition.',
    approach: 'Eulerian-Lagrangian particle tracking was used to evaluate inlet volute shape, vortex-finder penetration, cone angle, and operating flow rate across the measured particle-size distribution.',
    outcome: 'The optimized inlet and vortex finder stabilized the internal vortex, improved particle residence time, and reduced localized wall shear without an unacceptable pressure-drop penalty.',
    metrics: [
      { value: '-87%', label: 'Particle escape' },
      { value: '-45%', label: 'Peak wall shear' },
      { value: '+2 yr', label: 'Service interval' },
    ],
    methods: ['Particle tracking', 'Erosion mapping', 'Geometry optimization'],
    duration: '8-week study',
  },
  {
    id: 'bioreactor-mixing',
    title: 'Low-Shear Bioreactor Mixing Validation',
    industry: 'Pharmaceutical & Biotech',
    image: bioreactorImage,
    alt: 'Pharmaceutical bioreactor with smooth low-shear flow visualization',
    objective: 'Achieve uniform nutrient distribution while protecting shear-sensitive biological material.',
    challenge: 'The original high-speed impeller created narrow high-shear zones linked to loss of cell viability, while low-speed operation produced unacceptable blend times and dissolved-oxygen gradients.',
    approach: 'A non-Newtonian mixing model mapped shear exposure, circulation time, and species uniformity for multiple low-shear impellers. The preferred design was checked against mixing-time and power-number correlations.',
    outcome: 'A low-speed anchor configuration delivered uniform bulk circulation with substantially lower peak shear, supporting stable scale-up and repeatable batch performance.',
    metrics: [
      { value: '99.4%', label: 'Cell viability' },
      { value: '<3%', label: 'Concentration variation' },
      { value: '-31%', label: 'Peak shear' },
    ],
    methods: ['Non-Newtonian CFD', 'Species transport', 'Scale-up study'],
    duration: '5-week study',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 cfd-grid opacity-[0.025]" />
      <div className="site-container relative z-10">
        <motion.header initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={reveal} transition={{ duration: 0.6 }} className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Engineering case studies</span>
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight text-primary sm:text-4xl lg:text-5xl">From complex physics to measurable plant impact</h2>
          <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">A closer look at how validated simulation, design exploration, and engineering judgment turn operating challenges into practical improvements.</p>
        </motion.header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="hide-scrollbar -mx-4 grid snap-x snap-mandatory grid-flow-col auto-cols-[86%] gap-4 overflow-x-auto px-4 pb-5 min-[480px]:auto-cols-[64%] sm:mx-0 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 xl:gap-8"
          tabIndex="0"
          aria-label="Engineering case studies"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={reveal}
              className="group flex min-w-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-200 bg-brand-bg shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-xl sm:rounded-3xl"
            >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={project.image} alt={project.alt} loading="lazy" width="1600" height="1067" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                    <span className="rounded-full border border-white/20 bg-primary/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest backdrop-blur">{project.industry}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400"><HiOutlineClock /> {project.duration}</div>
                  <h3 className="mt-3 font-heading text-lg font-black leading-snug text-primary sm:text-xl">{project.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">{project.objective}</p>

                  <div className="mt-5 grid grid-cols-3 gap-2 border-y border-slate-200 py-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="min-w-0">
                        <strong className="block font-heading text-base font-black text-accent sm:text-lg">{metric.value}</strong>
                        <span className="mt-1 block text-[9px] font-semibold uppercase leading-3 tracking-wide text-slate-400">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-3 text-center text-[11px] text-slate-400 sm:hidden">Swipe to explore case studies</p>

        <div className="mt-8 flex justify-center sm:mt-10">
          <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-heading text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent">
            Discuss a project <HiArrowRight />
          </a>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-[11px] leading-5 text-slate-400 sm:mt-10">Project descriptions are representative. Commercially sensitive geometry, operating data, and client identities are generalized.</p>
      </div>
    </section>
  );
}
