import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiArrowSmRight } from 'react-icons/hi';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

// Custom hook for media query
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = (event) => setMatches(event.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

export default function Projects() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  // Refs for custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-24">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Case Studies</span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary mt-2 mb-4 leading-tight">
            Featured Simulation Successes
          </h2>
          <p className="font-body text-sm sm:text-base text-gray-500 leading-relaxed px-4 sm:px-0">
            Real engineering challenges resolved using high-fidelity simulations. Inspect the qualitative and quantitative impact metrics.
          </p>
        </div>

        {/* Desktop: Grid Layout */}
        {!isMobile && (
          <div className="space-y-12">
            {projectsData.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
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
                      <div>
                        <h5 className="text-xs uppercase font-heading font-bold text-accent mb-2">Challenge</h5>
                        <p className="font-body text-sm text-gray-500 leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <h5 className="text-xs uppercase font-heading font-bold text-secondary mb-2">Simulation</h5>
                        <p className="font-body text-sm text-gray-500 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <h5 className="text-xs uppercase font-heading font-bold text-emerald-600 mb-2">Result</h5>
                        <p className="font-body text-sm text-gray-600 font-medium leading-relaxed">
                          {project.result}
                        </p>
                      </div>
                    </div>
                  </div>

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
        )}

        {/* Mobile: Swiper Carousel */}
        {isMobile && (
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="pb-12"
              onSwiper={setSwiperInstance}
            >
              {projectsData.map((project, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="bg-brand-bg border border-gray-100 rounded-3xl overflow-hidden shadow-sm transition-all duration-300 p-6 flex flex-col items-stretch gap-6 relative">
                    {/* Left Column: Visual Highlight Card */}
                    <div className={`w-full rounded-2xl bg-gradient-to-tr ${project.gradient} p-6 flex flex-col justify-between text-white relative overflow-hidden min-h-[180px] shadow-inner`}>
                      <div className="absolute inset-0 cfd-grid opacity-15 pointer-events-none" />
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
                          {project.industry}
                        </span>
                      </div>
                      <div className="relative z-10">
                        <h4 className="font-heading font-black text-3xl leading-tight">
                          {project.stats}
                        </h4>
                        <p className="font-body text-xs text-white/70 mt-1">Validated performance metric</p>
                      </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="w-full flex flex-col justify-between text-left">
                      <div>
                        <h3 className="font-heading font-extrabold text-xl text-primary mb-4">
                          {project.title}
                        </h3>

                        <div className="space-y-4 mb-6 border-b border-gray-100 pb-6">
                          <div>
                            <h5 className="text-xs uppercase font-heading font-bold text-accent mb-1">Challenge</h5>
                            <p className="font-body text-sm text-gray-500 leading-relaxed">
                              {project.challenge}
                            </p>
                          </div>
                          <div>
                            <h5 className="text-xs uppercase font-heading font-bold text-secondary mb-1">Simulation</h5>
                            <p className="font-body text-sm text-gray-500 leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                          <div>
                            <h5 className="text-xs uppercase font-heading font-bold text-emerald-600 mb-1">Result</h5>
                            <p className="font-body text-sm text-gray-600 font-medium leading-relaxed">
                              {project.result}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1 text-xs font-heading font-bold text-primary hover:text-accent transition-colors cursor-pointer"
                        >
                          Request Case Study Details <HiArrowSmRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              ref={prevRef}
              className="group absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-primary hover:bg-accent hover:text-white hover:border-accent hover:scale-105 -ml-3.5"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              ref={nextRef}
              className="group absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-primary hover:bg-accent hover:text-white hover:border-accent hover:scale-105 -mr-3.5"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <style jsx>{`
              .swiper-pagination-bullet {
                background: #D1D5DB;
                opacity: 1;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                transition: all 0.3s ease;
              }
              .swiper-pagination-bullet-active {
                background: #FF6B00;
                width: 24px;
                border-radius: 4px;
              }
              @media (max-width: 480px) {
                .swiper-button-prev-custom,
                .swiper-button-next-custom {
                  width: 36px;
                  height: 36px;
                }
                .swiper-button-prev-custom svg,
                .swiper-button-next-custom svg {
                  width: 16px;
                  height: 16px;
                }
                .swiper-button-prev-custom {
                  margin-left: -8px;
                }
                .swiper-button-next-custom {
                  margin-right: -8px;
                }
              }
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
}