import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowSmRight } from 'react-icons/hi';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import shared data and icon map
import { servicesData, iconMap } from '../data/services';

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export default function Services() {
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
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 cfd-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary mt-2 mb-3 sm:mb-4 leading-tight">
            High-Performance Simulation Solutions
          </h2>
          <p className="font-body text-sm sm:text-base text-gray-500 leading-relaxed px-4 sm:px-0">
            From granular multiphase models to thermal boundary simulations, we deliver precise
            predictive engineering outputs to refine designs before hardware prototyping.
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
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
                >
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                  <div>
                    {/* Icon Container */}
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.color} p-0.5 flex items-center justify-center text-white shadow-md mb-5 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <div className="w-full h-full bg-white/10 rounded-[14px] flex items-center justify-center backdrop-blur-sm">
                        <IconComponent size={24} />
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Orange "Learn More" Button – matches Navbar CTA style */}
                  <div className="border-t border-gray-50 pt-4 mt-auto">
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 font-heading text-xs font-semibold rounded-full text-white bg-accent hover:bg-accent-dark shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Learn More
                      <HiArrowSmRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Mobile: Swiper Carousel with Professional Custom Navigation */}
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
              {servicesData.map((service, index) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <SwiperSlide key={service.id} className="h-auto">
                    <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                      <div>
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.color} p-0.5 flex items-center justify-center text-white shadow-md mb-5 transition-transform duration-300 group-hover:scale-110`}
                        >
                          <div className="w-full h-full bg-white/10 rounded-[14px] flex items-center justify-center backdrop-blur-sm">
                            <IconComponent size={24} />
                          </div>
                        </div>

                        <h3 className="font-heading font-bold text-lg text-primary mb-2">
                          {service.title}
                        </h3>
                        <p className="font-body text-sm text-gray-500 leading-relaxed mb-6">
                          {service.shortDesc}
                        </p>
                      </div>

                      {/* Orange "Learn More" Button – matches Navbar CTA style */}
                      <div className="border-t border-gray-50 pt-4 mt-auto">
                        <Link
                          to={`/services/${service.id}`}
                          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 font-heading text-xs font-semibold rounded-full text-white bg-accent hover:bg-accent-dark shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                        >
                          Learn More
                          <HiArrowSmRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Custom Navigation Buttons – using refs for reliable click */}
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

            {/* Styles */}
            <style jsx>{`
              .swiper-pagination-bullet {
                background: #d1d5db;
                opacity: 1;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                transition: all 0.3s ease;
              }
              .swiper-pagination-bullet-active {
                background: #ff6b00;
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