import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowSmRight } from 'react-icons/hi';

const projectsData = [
  {
    title: 'Stirred Tank Reactor Yield Optimization',
    industry: 'Chemical Process',
    challenge: 'Inefficient impeller shear distribution caused high reagent accumulation, creating hotspots and reducing active conversion yields.',
    solution: 'Engineered a dual-stage pitched-blade hydrofoil configuration, optimizing radial flow fields and impeller clearance via velocity sweep models.',
    result: '18% increase in overall reaction conversion yield; eliminated thermal hotspots and reduced drive motor electrical power draw by 12%.',
    gradient: 'from-blue-600 to-indigo-900',
    stats: '+18% Yield'
  },
  {
    title: 'Cyclonic Separator Particulate Extraction',
    industry: 'Cement & Mining',
    challenge: 'High velocity dust carrier flows caused rapid localized casing wear and particulate escape rates exceeding environmental thresholds.',
    solution: 'Designed custom inlet volutes and extended vortex finders to control axial velocity distributions and maximize centrifugal force containment.',
    result: 'Reduced particulate escape by 87%; reduced boundary casing shear stress by 45%, extending operating maintenance cycles by 2 years.',
    gradient: 'from-accent to-amber-700',
    stats: '-87% Escapes'
  },
  {
    title: 'Bioreactor Laminar Mixing Audit',
    industry: 'Pharmaceuticals',
    challenge: 'Shear-sensitive microbial cells suffered high mortality rates from conventional high-speed blending impeller configurations.',
    solution: 'Configured a gentle low-shear anchor impeller with customized scraping walls, auditing shear rates across all flow boundary layers.',
    result: 'Cell viability increased to 99.4%; achieved uniform nutrient concentration distribution without local cell-wall rupture.',
    gradient: 'from-teal-600 to-emerald-900',
    stats: '99.4% Viability'
  }
];

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Case Studies</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-primary mt-2 mb-4 leading-tight">
            Featured Simulation Successes
          </h2>
          <p className="font-body text-base text-gray-500 leading-relaxed">
            Real engineering challenges resolved using high-fidelity simulations. Inspect the qualitative and quantitative impact metrics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="bg-brand-bg border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 p-8 md:p-12 flex flex-col lg:flex-row items-stretch gap-8 relative"
            >
              {/* Left Column: Visual Highlight Card */}
              <div className={`w-full lg:w-1/3 rounded-2xl bg-gradient-to-tr ${project.gradient} p-8 flex flex-col justify-between text-white relative overflow-hidden min-h-[220px] lg:min-h-auto shadow-inner`}>
                <div className="absolute inset-0 cfd-grid opacity-15 pointer-events-none" />
                
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    {project.industry}
                  </span>
                </div>

                <div className="relative z-10">
                  <h4 className="font-heading font-black text-4xl leading-tight">
                    {project.stats}
                  </h4>
                  <p className="font-body text-xs text-white/70 mt-1">Validated performance metric</p>
                </div>
              </div>

              {/* Right Column: Challenge, Solution, Result Detail */}
              <div className="w-full lg:w-2/3 flex flex-col justify-between text-left">
                <div>
                  <h3 className="font-heading font-extrabold text-xl md:text-2xl text-primary mb-6">
                    {project.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 border-b border-gray-100 pb-8">
                    {/* Challenge */}
                    <div>
                      <h5 className="text-xs uppercase font-heading font-bold text-accent mb-2">Challenge</h5>
                      <p className="font-body text-sm text-gray-500 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h5 className="text-xs uppercase font-heading font-bold text-secondary mb-2">Simulation</h5>
                      <p className="font-body text-sm text-gray-500 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Result */}
                    <div>
                      <h5 className="text-xs uppercase font-heading font-bold text-emerald-600 mb-2">Result</h5>
                      <p className="font-body text-sm text-gray-600 font-medium leading-relaxed">
                        {project.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom link */}
                <div className="flex justify-end">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-heading font-bold text-primary hover:text-accent transition-colors cursor-pointer"
                  >
                    Request Case Study Details <HiArrowSmRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
