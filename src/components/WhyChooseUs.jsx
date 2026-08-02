import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineUserGroup, 
  HiOutlineLightningBolt, 
  HiOutlineChartBar, 
  HiOutlineCog, 
  HiOutlineDatabase, 
  HiOutlineAdjustments,
  HiOutlineGlobeAlt,
  HiOutlineCheckCircle,
  HiOutlineTrendingUp
} from 'react-icons/hi';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const featuresData = [
  {
    icon: <HiOutlineUserGroup size={24} />,
    title: 'Elite Engineering Team',
    desc: 'Ph.D. and post-graduate engineers with 20+ years of combined expertise in fluid dynamics, heat transfer, and multiphase flow modeling.',
    metric: '12+ Ph.D. specialists',
  },
  {
    icon: <HiOutlineLightningBolt size={24} />,
    title: 'Rapid Prototyping Cycles',
    desc: 'Parallel HPC clusters and optimized solver pipelines reduce simulation turnaround by up to 60%, enabling swift design iterations.',
    metric: '60% faster delivery',
  },
  {
    icon: <HiOutlineChartBar size={24} />,
    title: 'Industry‑Leading Accuracy',
    desc: 'Rigorous grid‑independence studies, turbulence model validation, and boundary condition audits ensure prediction errors below 2%.',
    metric: '< 2% deviation',
  },
  {
    icon: <HiOutlineCog size={24} />,
    title: 'Simulation‑Driven Innovation',
    desc: 'We embed physics‑based simulation directly into the conceptual phase, eliminating trial‑and‑error and reducing physical prototyping costs.',
    metric: '40% less R&D spend',
  },
  {
    icon: <HiOutlineDatabase size={24} />,
    title: 'Cross‑Industry Mastery',
    desc: 'Proven solutions across chemical, pharmaceutical, metallurgical, and energy sectors – each with unique rheological and thermal challenges.',
    metric: '9 industries served',
  },
  {
    icon: <HiOutlineAdjustments size={24} />,
    title: 'Tailored Solver Customization',
    desc: 'We develop custom UDFs, macro scripts, and user‑defined boundary profiles to adapt commercial and open‑source solvers to your exact process equations.',
    metric: '100% bespoke',
  },
  {
    icon: <HiOutlineGlobeAlt size={24} />,
    title: 'Global Project Footprint',
    desc: 'Executed over 300 successful simulation projects across 5 continents, with a track record of repeat engagements from Fortune 500 firms.',
    metric: '300+ projects',
  },
  {
    icon: <HiOutlineCheckCircle size={24} />,
    title: 'Proven ROI Impact',
    desc: 'Every project includes a quantitative value‑added assessment – we guarantee that simulation insights translate directly to measurable operational gains.',
    metric: '15% avg. savings',
  },
  {
    icon: <HiOutlineTrendingUp size={24} />,
    title: 'Future‑Ready Methodologies',
    desc: 'We continuously adopt AI‑driven surrogate modeling, digital twins, and machine learning to push the boundaries of predictive engineering.',
    metric: 'Next‑gen tools',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 12 },
  },
};

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

export default function WhyChooseUs() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  // Refs for custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Update navigation when swiper is ready and refs are available
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-brand-bg relative overflow-hidden">
      {/* Dynamic background accents */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <span className="inline-block text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
            Why Choose Fluidimensions
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-5xl text-primary mt-4 mb-4 leading-tight">
            Engineering Excellence, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Delivered with Precision
            </span>
          </h2>
          <p className="font-body text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
            We don't just run simulations – we engineer solutions. Our approach combines deep theoretical knowledge, cutting‑edge computational methods, and a relentless focus on your operational outcomes.
          </p>
        </div>

        {/* Desktop: Grid Layout */}
        {!isMobile && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuresData.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group text-left relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center text-secondary group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all duration-300 mb-5">
                  {feature.icon}
                </div>

                <h3 className="font-heading font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors duration-200">
                  {feature.title}
                </h3>

                <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                  {feature.desc}
                </p>

                <div className="inline-block bg-gray-50 border border-gray-200 text-xs font-heading font-bold text-secondary px-3 py-1.5 rounded-full group-hover:bg-accent/10 group-hover:border-accent transition-all duration-300">
                  {feature.metric}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              {featuresData.map((feature, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-3xl shadow-sm transition-all duration-300 group text-left relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center text-secondary group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all duration-300 mb-5">
                      {feature.icon}
                    </div>

                    <h3 className="font-heading font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors duration-200">
                      {feature.title}
                    </h3>

                    <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                      {feature.desc}
                    </p>

                    <div className="inline-block bg-gray-50 border border-gray-200 text-xs font-heading font-bold text-secondary px-3 py-1.5 rounded-full group-hover:bg-accent/10 group-hover:border-accent transition-all duration-300">
                      {feature.metric}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons using refs */}
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

        {/* Bottom Call to Action */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 font-heading font-semibold text-sm rounded-xl bg-accent text-white shadow-lg hover:shadow-xl hover:bg-accent-dark transition-all duration-300 hover:-translate-y-0.5"
          >
            Let's Discuss Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}