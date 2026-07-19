import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { HiStar } from 'react-icons/hi';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsData = [
  {
    name: 'Dr. Albert Chen',
    role: 'Chief Process Engineer',
    company: 'PetroChem Global',
    text: 'Fluidimensions resolved a multi-phase column bypass issue in 3 weeks that had puzzled our design team for almost a year. Their validation accuracy is exceptional.',
    rating: 5,
  },
  {
    name: 'Sarah Jenkins',
    role: 'Director of R&D Operations',
    company: 'BioGenics Labs',
    text: 'The low-shear bioreactor impeller model custom-designed by Fluidimensions tripled our active batch cell yields. Their numerical validation is rock solid.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'VP of Engineering',
    company: 'InduSteel Ltd',
    text: 'Their automation macro scripts for our CFD parametric sweeps halved our internal furnace model simulation design cycles. Highly recommended partner.',
    rating: 5,
  },
  {
    name: 'Marcus Voigt',
    role: 'Lead Turbine Architect',
    company: 'AeroDrive Turbines',
    text: 'The boundary layer shear analysis and grid-independence audits provided by Fluidimensions gave us the confidence to proceed to turbine casting manufacturing.',
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
      {/* Decorative accent blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Testimonials</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-primary mt-2 mb-4 leading-tight">
            Trusted by Engineering Leaders
          </h2>
          <p className="font-body text-base text-gray-500 leading-relaxed">
            Here is what technical directors, research leads, and process managers say about our predictive modeling accuracies.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="px-2 py-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            className="pb-16"
          >
            {testimonialsData.map((test, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between text-left">

                  <div>
                    {/* Stars */}
                    <div className="flex text-amber-400 mb-6">
                      {[...Array(test.rating)].map((_, i) => (
                        <HiStar key={i} size={18} />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="font-body text-sm text-gray-500 leading-relaxed italic mb-8">
                      "{test.text}"
                    </p>
                  </div>

                  {/* Client info */}
                  <div className="border-t border-gray-50 pt-6 flex items-center space-x-4">
                    {/* Placeholder Avatar with Gradient */}
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-secondary to-accent flex items-center justify-center text-white font-heading font-black text-sm shadow-md">
                      {test.name.charAt(0)}
                      {test.name.split(' ')[1]?.charAt(0)}
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-sm text-primary">
                        {test.name}
                      </h4>
                      <p className="font-body text-[11px] text-gray-400">
                        {test.role}, <span className="font-semibold text-secondary">{test.company}</span>
                      </p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}