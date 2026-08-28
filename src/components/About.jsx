import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineCheckCircle, HiOutlineGlobe } from 'react-icons/hi';
import IconBadge from './IconBadge';

const tabContent = [
  {
    id: 'overview',
    title: 'Overview',
    icon: HiOutlineGlobe,
    tone: 'about.overview',
    headline: 'Engineering Simulation & Design Specialists',
    text: 'Fluidimensions is a premier engineering consulting organization specializing in advanced simulation, CFD modeling, and process optimization. We translate complex physical phenomena into mathematical insights that enable precise industrial scale-up, troubleshooting, and custom equipment designs.',
    points: [
      'Over 20 years of simulation-driven consulting expertise.',
      'Serving chemical, pharma, metallurgy, and energy sectors globally.',
      'Specialized in complex multi-phase flow and chemical reactors.',
    ]
  },
  {
    id: 'mission',
    title: 'Mission & Vision',
    icon: HiOutlineLightBulb,
    tone: 'about.mission',
    headline: 'Empowering Industry Through Simulation',
    text: 'Our mission is to minimize operational risk and maximize thermodynamic efficiency in chemical and industrial processing. We envision a future where every process layout is digitally optimized before fabrication, eliminating design bottlenecks and environmental footprint.',
    points: [
      'Accelerating project timelines through digital validation.',
      'Lowering prototyping costs using precise computer models.',
      'Delivering eco-efficient process configurations.',
    ]
  },
  {
    id: 'strengths',
    title: 'Core Strength',
    icon: HiOutlineCheckCircle,
    tone: 'about.strengths',
    headline: 'High-Fidelity Modeling & Validation',
    text: 'We combine theoretical thermodynamics, advanced numerical methods, and structural coding to build tailored custom solvers. We do not just run templates; we script custom boundary profiles, mesh algorithms, and turbulence solvers specifically tailored to your geometry.',
    points: [
      'Expertise in ANSYS Fluent, OpenFOAM, and COMSOL.',
      'Custom CFD automation scripts for automated parametric optimization.',
      'Rigorous validation against empirical experimental data.',
    ]
  }
];

export default function About() {
  const [activeTab, setActiveTab] = useState('overview');
  const activeData = tabContent.find((tab) => tab.id === activeTab);

  return (
    <section id="about" className="relative overflow-hidden bg-brand-bg py-20 sm:py-24 lg:py-32">
      {/* Background shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="site-container">
        <div className="flex flex-col items-center gap-10 sm:gap-14 lg:flex-row lg:gap-16">
          
          {/* Left Column: Visual schematic – now full width on mobile */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] w-full max-w-[480px] overflow-hidden rounded-2xl bg-gradient-to-tr from-primary to-secondary p-1 shadow-2xl sm:rounded-3xl lg:aspect-square"
            >
              <div className="absolute inset-0 cfd-grid opacity-30" />
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[14px] bg-primary/95 p-4 sm:rounded-[22px] sm:p-8">
                <svg className="w-full h-full text-white/20" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="120" y="80" width="160" height="240" rx="20" stroke="currentColor" strokeWidth="4" strokeDasharray="8 4" />
                  <line x1="200" y1="80" x2="200" y2="320" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
                  <path d="M 60 120 L 120 120" stroke="#FF6B00" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 280 280 L 340 280" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <g className="animate-[spin_10s_linear_infinite]" style={{ transformOrigin: '200px 200px' }}>
                    <circle cx="200" cy="200" r="15" fill="#FF6B00" />
                    <line x1="120" y1="200" x2="280" y2="200" stroke="#FF6B00" strokeWidth="4" />
                    <line x1="200" y1="120" x2="200" y2="280" stroke="#FF6B00" strokeWidth="4" />
                    <path d="M 120 180 L 120 220" stroke="#FF6B00" strokeWidth="4" strokeLinecap="round" />
                    <path d="M 280 180 L 280 220" stroke="#FF6B00" strokeWidth="4" strokeLinecap="round" />
                  </g>
                  <path d="M 70 120 Q 150 120 170 170 T 250 250 T 330 280" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" className="animate-[dash_4s_linear_infinite]" strokeDasharray="100" strokeDashoffset="100" />
                </svg>
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/10 p-3 text-left backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-4">
                  <div>
                    <span className="text-[10px] text-accent uppercase font-bold tracking-widest leading-none">Process Telemetry</span>
                    <h5 className="font-heading font-extrabold text-white text-sm mt-0.5">High Turbulence Model</h5>
                  </div>
                  <span className="hidden font-body text-xs font-semibold text-white/60 min-[400px]:block">k-epsilon model</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Copy & Tabs – mobile-friendly */}
          <div className="w-full lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold text-accent uppercase tracking-widest">Who We Are</span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary mt-2 mb-6 leading-tight">
                Pioneering the Future of Process Simulation
              </h2>

              {/* Tabs – wrap on mobile, reduce padding */}
              <div className="mb-7 flex gap-1 overflow-x-auto border-b border-gray-200 pb-px sm:mb-8 sm:flex-wrap sm:gap-2" role="tablist" aria-label="About Fluidimensions">
                {tabContent.map((tab) => {
                  const TabIcon = tab.icon;
                  return <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex min-h-11 shrink-0 items-center gap-1.5 border-b-2 px-3 py-2 font-heading text-xs font-semibold transition-all sm:gap-2 sm:px-4 sm:py-3 sm:text-sm ${
                      activeTab === tab.id
                        ? 'border-accent text-accent'
                        : 'border-transparent text-gray-400 hover:text-primary'
                    }`}
                  >
                    <IconBadge tone={tab.tone} size="sm" className="scale-75"><TabIcon size={18} /></IconBadge>
                    {tab.title}
                  </button>
                })}
              </div>

              {/* Tab content – ensure min-height adapts */}
              <div className="min-h-[200px] sm:min-h-[260px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-3">
                      {activeData.headline}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-gray-500 leading-relaxed mb-6">
                      {activeData.text}
                    </p>
                    
                    <div className="space-y-3">
                      {activeData.points.map((point, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="font-body text-sm font-semibold text-gray-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
