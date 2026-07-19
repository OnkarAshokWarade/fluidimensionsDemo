import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  HiOutlineSearch,
  HiOutlineDatabase,
  HiOutlineChip,
  HiOutlineChartPie,
  HiOutlineCheckCircle,
  HiOutlineDocumentReport,
} from 'react-icons/hi';

const steps = [
  {
    id: 0,
    num: '01',
    icon: <HiOutlineSearch size={20} />,
    title: 'Understand Problem',
    short: 'Discovery',
    desc: 'Immersive technical discussions to map process bottlenecks, operating parameters, and geometry constraints — building a complete physics‑based problem statement.',
    specs: ['Stakeholder interviews', 'Process mapping', 'Bottleneck analysis', 'Data requirements'],
    color: '#2563EB',
  },
  {
    id: 1,
    num: '02',
    icon: <HiOutlineDatabase size={20} />,
    title: 'Collect Data',
    short: 'Data Engineering',
    desc: 'Compile CAD models, physical properties, and empirical measurements — validating every boundary condition with scientific rigor.',
    specs: ['CAD geometry', 'Material properties', 'Boundary conditions', 'Validation data'],
    color: '#7C3AED',
  },
  {
    id: 2,
    num: '03',
    icon: <HiOutlineChip size={20} />,
    title: 'Simulation',
    short: 'HPC Compute',
    desc: 'Advanced meshing and HPC‑powered solver execution — delivering convergence‑verified results across laminar, turbulent, and multi‑phase regimes.',
    specs: ['Mesh generation', 'Solver configuration', 'HPC execution', 'Convergence monitoring'],
    color: '#FF6B00',
  },
  {
    id: 3,
    num: '04',
    icon: <HiOutlineChartPie size={20} />,
    title: 'Optimization',
    short: 'DoE & Sweeps',
    desc: 'Parametric sweeps and design‑of‑experiments to refine geometries, spray profiles, and vessel configurations — unlocking peak performance.',
    specs: ['Parameter sweeps', 'Design of Experiments', 'Response surfaces', 'Performance trade‑offs'],
    color: '#10B981',
  },
  {
    id: 4,
    num: '05',
    icon: <HiOutlineCheckCircle size={20} />,
    title: 'Validation',
    short: 'Empirical QA',
    desc: 'Cross‑reference simulation outputs against historical plant logs or pilot data — building unshakeable confidence in predictive accuracy.',
    specs: ['Data correlation', 'Error analysis', 'Sensitivity studies', 'Confidence metrics'],
    color: '#F43F5E',
  },
  {
    id: 5,
    num: '06',
    icon: <HiOutlineDocumentReport size={20} />,
    title: 'Implementation',
    short: 'Handoff',
    desc: 'Comprehensive engineering reports, optimized CAD exports, and actionable scale‑up recommendations — ready for manufacturing.',
    specs: ['Engineering reports', 'CAD exports', 'Recommendations', 'Scale‑up guidance'],
    color: '#64748B',
  },
];

export default function WorkflowOption5() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const handleStepClick = (idx) => {
    setActiveIndex(idx);
  };

  const activeStep = steps[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="workflow"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Background: refined blueprint grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 cfd-grid opacity-[0.03]" />
        <div className="absolute top-20 right-20 w-64 h-64 border border-gray-200/30 rounded-full" />
        <div className="absolute bottom-20 left-20 w-96 h-96 border border-gray-200/20 rounded-full" />
        <svg className="absolute top-1/4 right-1/4 w-40 h-40 opacity-[0.03]" viewBox="0 0 100 100">
          <line x1="0" y1="50" x2="100" y2="50" stroke="#071B3A" strokeWidth="0.5" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="#071B3A" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" stroke="#071B3A" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="40" stroke="#071B3A" strokeWidth="0.3" fill="none" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header – Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[11px] font-heading font-bold text-gray-400 uppercase tracking-[0.15em] mb-3">
            Engineering Methodology
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-primary leading-[1.1] mb-4">
            Precision Workflow
          </h2>
          <p className="font-body text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
            A rigorous, simulation‑driven process that transforms complex physical challenges into validated, production‑ready engineering solutions.
          </p>
        </div>

        {/* Main Content – Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Active Step Panel */}
          <div className="lg:w-[58%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
              >
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: activeStep.color }}
                />

                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[13px] font-heading font-bold text-gray-400 tracking-wider">
                          STEP {activeStep.num}
                        </span>
                        <span className="w-6 h-px bg-gray-200" />
                        <span className="text-[11px] font-heading font-medium text-black uppercase tracking-wider">
                          {activeStep.short}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary">
                        {activeStep.title}
                      </h3>
                    </div>
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${activeStep.color}10`,
                        color: activeStep.color,
                      }}
                    >
                      {activeStep.icon}
                    </div>
                  </div>

                  <p className="font-body text-base text-gray-600 leading-relaxed mb-8 max-w-2xl">
                    {activeStep.desc}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {activeStep.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-100 rounded-lg px-4 py-3 bg-gray-50/50"
                      >
                        <span className="text-[10px] font-heading font-bold text-gray-400 uppercase tracking-wider block mb-0.5">
                          Phase {idx + 1}
                        </span>
                        <span className="text-sm font-body font-medium text-gray-700">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <span className="text-[10px] font-heading font-bold text-black uppercase tracking-wider">
                      Overall Progress
                    </span>
                    <div className="flex-1 h-[2px] bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${((activeIndex + 1) / steps.length) * 100}%` }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      />
                    </div>
                    <span className="text-[11px] font-heading font-bold text-primary">
                      {Math.round(((activeIndex + 1) / steps.length) * 100)}%
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Step Navigation – all cards with background color and icons */}
          <div className="lg:w-[42%]">
            <div className="space-y-3">
              <p className="text-[10px] font-heading font-bold text-black uppercase tracking-[0.12em] mb-4">
                Process Stages
              </p>
              {steps.map((step, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className={`group flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                      isActive ? 'ring-1 ring-accent/30' : ''
                    }`}
                    style={{
                      backgroundColor: `${step.color}08`,
                      border: isActive ? `1px solid ${step.color}40` : '1px solid transparent',
                    }}
                    onClick={() => handleStepClick(idx)}
                  >
                    {/* Icon + Number combined circle */}
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center relative"
                      style={{
                        backgroundColor: isActive ? step.color : `${step.color}20`,
                        color: isActive ? '#FFFFFF' : step.color,
                      }}
                    >
                      {step.icon}
                      {/* Small number badge overlay */}
                      <span className="absolute -top-1 -right-1 text-[8px] font-heading font-bold bg-white rounded-full px-1 text-gray-500 shadow-sm">
                        {step.num}
                      </span>
                    </div>

                    {/* Title and short description */}
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`font-heading font-bold text-sm transition-colors ${
                          isActive ? 'text-primary' : 'text-gray-600 group-hover:text-gray-800'
                        }`}
                      >
                        {step.title}
                      </h4>
                      <p
                        className={`text-[11px] font-body transition-colors ${
                          isActive ? 'text-black' : 'text-gray-400'
                        }`}
                      >
                        {step.short}
                      </p>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeStepIndicator"
                        className="flex-shrink-0 w-1.5 h-6 rounded-full"
                        style={{ backgroundColor: step.color }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}