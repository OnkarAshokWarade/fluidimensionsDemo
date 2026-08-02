import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowSmRight } from 'react-icons/hi';
import { industriesData } from '../data/industries';

import {
  GiBubblingFlask,
  GiPill,
  GiSprout,
  GiSpray,
  GiSteelClaws,
  GiHamburger,
  GiCarKey,
  GiOilPump,
  GiFactory
} from 'react-icons/gi';

const iconMap = {
  GiBubblingFlask,
  GiPill,
  GiSprout,
  GiSpray,
  GiSteelClaws,
  GiHamburger,
  GiCarKey,
  GiOilPump,
  GiFactory,
};

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

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

export default function Industries() {
  const isMobile = useMediaQuery('(max-width: 767px)');

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
    <section id="industries" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-24">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Industries We Serve</span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary mt-2 mb-4 leading-tight">
            Consulting Tailored to Your Specific Domain
          </h2>
          <p className="font-body text-sm sm:text-base text-gray-500 leading-relaxed px-4 sm:px-0">
            We adapt advanced computational templates to address unique thermodynamics, rheology, and fluid behaviors across distinct sectors.
          </p>
        </div>

        {/* Desktop Grid */}
        {!isMobile && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industriesData.map((industry) => {
              const IconComponent = iconMap[industry.icon] || GiBubblingFlask;
              return (
                <motion.div
                  key={industry.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative h-auto min-h-[360px] rounded-3xl overflow-hidden shadow-md group cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-tr ${industry.gradient} transition-transform duration-500 scale-100 group-hover:scale-110`} />
                  <div className="absolute inset-0 cfd-grid opacity-10 pointer-events-none" />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10 text-left bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 group-hover:bg-accent group-hover:border-transparent transition-all duration-300">
                      <IconComponent size={32} />
                    </div>
                    <div className="flex-1 flex flex-col justify-end mt-4">
                      <h3 className="font-heading font-bold text-xl text-white mb-2">
                        {industry.title}
                      </h3>
                      <p className="font-body text-xs text-gray-100 leading-relaxed mb-4">
                        {industry.desc || 'Industry description coming soon.'}
                      </p>
                      <Link
                        to={`/industries/${industry.id}`}
                        className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 font-heading text-xs font-semibold rounded-full text-white bg-accent hover:bg-accent-dark shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 w-fit"
                      >
                        Learn More
                        <HiArrowSmRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Mobile Swiper */}
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
              {industriesData.map((industry) => {
                const IconComponent = iconMap[industry.icon] || GiBubblingFlask;
                return (
                  <SwiperSlide key={industry.id} className="h-auto">
                    <div className="relative h-auto min-h-[360px] rounded-3xl overflow-hidden shadow-md group cursor-pointer">
                      <div className={`absolute inset-0 bg-gradient-to-tr ${industry.gradient} transition-transform duration-500 scale-100 group-hover:scale-110`} />
                      <div className="absolute inset-0 cfd-grid opacity-10 pointer-events-none" />
                      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10 text-left bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 group-hover:bg-accent group-hover:border-transparent transition-all duration-300">
                          <IconComponent size={32} />
                        </div>
                        <div className="flex-1 flex flex-col justify-end mt-4">
                          <h3 className="font-heading font-bold text-xl text-white mb-2">
                            {industry.title}
                          </h3>
                          <p className="font-body text-xs text-gray-100 leading-relaxed mb-4">
                            {industry.desc || 'Industry description coming soon.'}
                          </p>
                          <Link
                            to={`/industries/${industry.id}`}
                            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 font-heading text-xs font-semibold rounded-full text-white bg-accent hover:bg-accent-dark shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 w-fit"
                          >
                            Learn More
                            <HiArrowSmRight size={14} className="transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Navigation buttons */}
            <button
              ref={prevRef}
              className="group absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-primary hover:bg-accent hover:text-white hover:border-accent hover:scale-105 -ml-3.5"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="group absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-primary hover:bg-accent hover:text-white hover:border-accent hover:scale-105 -mr-3.5"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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