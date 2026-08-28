import React from 'react';
import { HiStar } from 'react-icons/hi';

const testimonialsData = [
  {
    name: 'Dr. Anirudh Mehta',
    role: 'Chief Process Engineer',
    company: 'Aarav Process Technologies',
    text: 'Fluidimensions resolved a multi-phase column bypass issue in 3 weeks that had puzzled our design team for almost a year. Their validation accuracy is exceptional.',
    rating: 5,
  },
  {
    name: 'Dr. Priya Nair',
    role: 'Director of R&D Operations',
    company: 'Sanjeevani Biotech Labs',
    text: 'The low-shear bioreactor impeller model custom-designed by Fluidimensions tripled our active batch cell yields. Their numerical validation is rock solid.',
    rating: 5,
  },
  {
    name: 'Rajesh Kulkarni',
    role: 'VP of Engineering',
    company: 'Bharat Alloy Systems',
    text: 'Their automation macro scripts for our CFD parametric sweeps halved our internal furnace model simulation design cycles. Highly recommended partner.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Lead Turbine Architect',
    company: 'Pragati Turbomachinery',
    text: 'The boundary layer shear analysis and grid-independence audits provided by Fluidimensions gave us the confidence to proceed to turbine casting manufacturing.',
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-brand-bg py-20 sm:py-24 lg:py-32">
      {/* Decorative accent blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="site-container relative z-10">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <span className="text-sm font-bold text-accent uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-2 mb-4 font-heading text-[clamp(1.875rem,5vw,2.75rem)] font-black leading-tight text-primary">
            Trusted by Engineering Leaders
          </h2>
          <p className="font-body text-base text-gray-500 leading-relaxed">
            Here is what technical directors, research leads, and process managers say about our predictive modeling accuracies.
          </p>
        </div>

        <div className="hide-scrollbar -mx-4 grid snap-x snap-mandatory grid-flow-col auto-cols-[86%] gap-4 overflow-x-auto px-4 pb-5 min-[480px]:auto-cols-[65%] sm:mx-0 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 xl:grid-cols-4" tabIndex="0" aria-label="Client testimonials">
            {testimonialsData.map((test, idx) => (
              <article key={idx} className="flex h-full min-w-0 snap-start flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-md sm:rounded-3xl sm:p-7 lg:p-8">

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
                      <p className="font-body text-xs leading-5 text-gray-400">
                        {test.role}, <span className="font-semibold text-secondary">{test.company}</span>
                      </p>
                    </div>
                  </div>

              </article>
            ))}
        </div>
        <p className="mt-3 text-center text-[11px] text-slate-400 sm:hidden">Swipe to read more testimonials</p>

      </div>
    </section>
  );
}
