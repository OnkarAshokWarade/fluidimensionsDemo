import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiArrowRight, HiOutlineChartBar, HiOutlineCheckCircle, HiOutlineChip, HiOutlineClipboardCheck, HiOutlineCube, HiOutlineDocumentText } from 'react-icons/hi';

const steps = [
  { number: '01', eyebrow: 'Define', title: 'Problem Framing', icon: HiOutlineClipboardCheck, summary: 'We translate the operating challenge into measurable engineering objectives, constraints, and acceptance criteria.', activities: ['Technical discovery', 'Scope & assumptions', 'Success criteria'], output: 'Approved simulation brief' },
  { number: '02', eyebrow: 'Prepare', title: 'Data & Geometry', icon: HiOutlineCube, summary: 'CAD, material properties, operating data, and boundary conditions are cleaned, checked, and made analysis-ready.', activities: ['CAD preparation', 'Property validation', 'Boundary conditions'], output: 'Analysis-ready model' },
  { number: '03', eyebrow: 'Resolve', title: 'Physics & Simulation', icon: HiOutlineChip, summary: 'Fit-for-purpose physics, mesh strategy, and solver controls are applied with convergence monitored throughout.', activities: ['Model selection', 'Mesh independence', 'Solver convergence'], output: 'Verified solution field' },
  { number: '04', eyebrow: 'Improve', title: 'Design Optimization', icon: HiOutlineChartBar, summary: 'Design variants and operating scenarios are compared to expose trade-offs and identify the highest-value changes.', activities: ['Parametric studies', 'Performance ranking', 'Risk trade-offs'], output: 'Optimized design direction' },
  { number: '05', eyebrow: 'Prove', title: 'Validation & QA', icon: HiOutlineCheckCircle, summary: 'Results are challenged against plant, pilot, or published data and reviewed for sensitivity and uncertainty.', activities: ['Data correlation', 'Sensitivity analysis', 'Engineering review'], output: 'Evidence-backed confidence' },
  { number: '06', eyebrow: 'Deliver', title: 'Decision Support', icon: HiOutlineDocumentText, summary: 'Complex results become clear engineering recommendations, visual evidence, and an implementation-ready roadmap.', activities: ['Design recommendations', 'Technical reporting', 'Implementation plan'], output: 'Actionable engineering package' },
];

export default function Workflow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];

  return (
    <section id="workflow" className="relative overflow-hidden bg-[#061a38] py-12 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />

      <div className="site-container relative z-10">
        <div className="mb-6 grid gap-4 sm:mb-8 sm:gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-400"><span className="h-px w-8 bg-orange-400" /> Engineering methodology</div>
            <h2 className="max-w-[18ch] font-heading text-[clamp(1.75rem,8vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-white">From engineering question to confident decision.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-300 lg:text-right">A gated, traceable workflow built around sound physics, measurable quality, and practical outcomes.</p>
        </div>

        <div className="relative mb-3 sm:mb-4">
          <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-white/15 lg:block" />
          <div className="hide-scrollbar -mx-4 flex touch-pan-x snap-x snap-mandatory scroll-px-4 gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:px-0 lg:grid-cols-6 lg:gap-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeIndex;
              return (
                <button key={step.number} type="button" onClick={() => setActiveIndex(index)} aria-pressed={isActive} className={`group relative min-h-28 min-w-[148px] snap-start rounded-xl border p-3 text-left transition duration-200 sm:min-w-0 sm:p-3.5 ${isActive ? 'border-orange-400 bg-white text-primary shadow-xl shadow-black/20' : 'border-white/10 bg-white/[0.055] text-white hover:border-white/25 hover:bg-white/[0.09]'}`}>
                  <div className="mb-3 flex items-center justify-between sm:mb-5">
                    <span className={`text-[10px] font-bold tracking-[0.16em] ${isActive ? 'text-accent' : 'text-slate-400'}`}>{step.number}</span>
                    <span className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-lg ${isActive ? 'bg-accent text-white' : 'bg-white/10 text-slate-300'}`}><Icon size={17} aria-hidden="true" /></span>
                  </div>
                  <span className={`block text-[9px] font-bold uppercase tracking-[0.18em] ${isActive ? 'text-slate-500' : 'text-slate-400'}`}>{step.eyebrow}</span>
                  <span className="mt-1 block break-words font-heading text-[13px] font-semibold leading-tight sm:text-sm">{step.title}</span>
                  {index < steps.length - 1 && <HiArrowRight className="absolute -right-2.5 top-6 z-20 hidden text-orange-400 lg:block" size={16} aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeStep.number} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }} className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.065] backdrop-blur-sm lg:grid-cols-[1.4fr_1fr_auto]">
            <div className="min-w-0 p-4 sm:p-6">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-orange-400">Stage {activeStep.number} · {activeStep.eyebrow}</div>
              <h3 className="mb-2 break-words font-heading text-xl font-semibold text-white sm:text-2xl">{activeStep.title}</h3>
              <p className="max-w-2xl text-sm leading-6 text-slate-300">{activeStep.summary}</p>
            </div>
            <div className="border-t border-white/10 p-4 sm:p-6 lg:border-l lg:border-t-0">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Core controls</div>
              <div className="flex flex-wrap gap-2">{activeStep.activities.map((activity) => <span key={activity} className="rounded-md border border-white/10 bg-black/10 px-2.5 py-1.5 text-xs font-medium text-slate-200">{activity}</span>)}</div>
            </div>
            <div className="flex min-w-0 items-center gap-3 border-t border-white/10 bg-white/[0.045] p-4 sm:p-6 lg:min-w-56 lg:border-l lg:border-t-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300"><HiOutlineCheckCircle size={20} aria-hidden="true" /></span>
              <div><div className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">Stage output</div><div className="mt-1 text-sm font-semibold text-white">{activeStep.output}</div></div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-3 flex items-center justify-between gap-3 text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-500 sm:mt-4 sm:text-[10px] sm:tracking-[0.14em]"><span>Traceable inputs</span><span className="hidden sm:inline">Quality gate at every stage</span><span className="text-right">Decision-ready outputs</span></div>
      </div>
    </section>
  );
}
