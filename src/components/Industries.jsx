import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowSmRight } from 'react-icons/hi';
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

const industriesData = [
  {
    title: 'Chemical',
    desc: 'Optimization of mixing vessels, stirred reactors, catalytic beds, and multiphase gas-liquid systems.',
    gradient: 'from-blue-900 to-indigo-950',
    icon: <GiBubblingFlask size={32} />
  },
  {
    title: 'Pharmaceutical',
    desc: 'High-purity bioreactor mixing simulations, clean-room airflow dynamics, and precise tablet coating heat audits.',
    gradient: 'from-sky-900 to-blue-950',
    icon: <GiPill size={32} />
  },
  {
    title: 'Agro',
    desc: 'Simulating fertilizer granulation, grain drying silos, custom sprayer nozzles, and fluid distribution grids.',
    gradient: 'from-emerald-900 to-teal-950',
    icon: <GiSprout size={32} />
  },
  {
    title: 'Paints & Pigments',
    desc: 'Non-Newtonian shear-thinning mixing simulations, high-viscosity grinding mill analysis, and pigment dispersion dynamics.',
    gradient: 'from-rose-900 to-pink-950',
    icon: <GiSpray size={32} />
  },
  {
    title: 'Metals & Metallurgy',
    desc: 'Blast furnace thermal profiles, molten metal flow fields, steel cooling sprays, and casting solidify simulations.',
    gradient: 'from-orange-900 to-amber-950',
    icon: <GiSteelClaws size={32} />
  },
  {
    title: 'Food & Beverage',
    desc: 'Sanitary process optimization, thermal pasteurization modeling, nozzle spraying, and food extrusion rheology.',
    gradient: 'from-yellow-900 to-amber-950',
    icon: <GiHamburger size={32} />
  },
  {
    title: 'Automobile',
    desc: 'External aerodynamics lift-drag analysis, combustion cylinder heat transfer, and catalytic converter exhaust flow.',
    gradient: 'from-slate-900 to-zinc-950',
    icon: <GiCarKey size={32} />
  },
  {
    title: 'Oil & Gas',
    desc: 'Pipeline flow assurance, separator vessel efficiency modeling, riser slugs, and deepwell reservoir pressure calculations.',
    gradient: 'from-cyan-900 to-blue-950',
    icon: <GiOilPump size={32} />
  },
  {
    title: 'Cement & Mining',
    desc: 'Rotary kiln thermal convection audits, calciner coal combustion grids, and cyclone separator particulate extraction.',
    gradient: 'from-stone-900 to-slate-950',
    icon: <GiFactory size={32} />
  }
];

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

export default function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Industries We Serve</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-primary mt-2 mb-4 leading-tight">
            Consulting Tailored to Your Specific Domain
          </h2>
          <p className="font-body text-base text-gray-500 leading-relaxed">
            We adapt advanced computational templates to address unique thermodynamics, rheology, and fluid behaviors across distinct sectors.
          </p>
        </div>

        {/* Industries Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industriesData.map((industry, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative h-[280px] rounded-3xl overflow-hidden shadow-md group cursor-pointer"
            >
              {/* Colored Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${industry.gradient} transition-transform duration-500 scale-100 group-hover:scale-110`} />

              {/* Decorative Mesh Grid overlay */}
              <div className="absolute inset-0 cfd-grid opacity-10 pointer-events-none" />

              {/* Card content container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-left bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                
                {/* Top Industry Icon */}
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 group-hover:bg-accent group-hover:border-transparent transition-all duration-300">
                  {industry.icon}
                </div>

                {/* Bottom title & description */}
                <div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    {industry.title}
                  </h3>

                  {/* Slides up and expands details on hover */}
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <p className="font-body text-xs text-gray-300 leading-relaxed mb-4">
                      {industry.desc}
                    </p>
                  </div>
                  
                  <span className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-accent group-hover:text-white mt-1 transition-colors">
                    Consulting Cases <HiArrowSmRight size={14} />
                  </span>
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
