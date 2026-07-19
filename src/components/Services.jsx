import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowSmRight } from 'react-icons/hi';
import { 
  IoAnalyticsOutline, 
  IoCubeOutline, 
  IoFlameOutline, 
  IoColorFilterOutline, 
  IoSyncOutline, 
  IoHardwareChipOutline, 
  IoCodeWorkingOutline, 
  IoTrendingUpOutline, 
  IoSchoolOutline 
} from 'react-icons/io5';

const servicesData = [
  {
    icon: <IoAnalyticsOutline size={24} />,
    title: 'CFD Analysis',
    desc: 'Numerical simulation of fluid flow patterns, velocity distributions, and vortex shedding for complex geometry profiles.',
    color: 'from-blue-500 to-sky-400'
  },
  {
    icon: <IoCubeOutline size={24} />,
    title: 'CFD Modeling',
    desc: 'Creation of high-fidelity mathematical representations for multi-phase interfaces, granular phases, and boundary flow fields.',
    color: 'from-accent to-amber-500'
  },
  {
    icon: <IoFlameOutline size={24} />,
    title: 'Heat Transfer',
    desc: 'Analysis of conduction, convection, and radiation flows inside furnaces, cooling jackets, and high-temperature thermal zones.',
    color: 'from-rose-500 to-orange-400'
  },
  {
    icon: <IoColorFilterOutline size={24} />,
    title: 'Reaction Engineering',
    desc: 'Coupling chemical reaction kinetics with transport models to optimize spatial conversions inside catalytic and packed beds.',
    color: 'from-emerald-500 to-teal-400'
  },
  {
    icon: <IoSyncOutline size={24} />,
    title: 'Mixing Optimization',
    desc: 'Simulation of impellers, draft tubes, and baffled tanks to maximize blending rates and avoid stagnant dead zones.',
    color: 'from-purple-500 to-violet-400'
  },
  {
    icon: <IoHardwareChipOutline size={24} />,
    title: 'Equipment Design',
    desc: 'Customized geometry layout optimization for cyclonic separators, headers, distributors, nozzles, and spray dryers.',
    color: 'from-sky-500 to-indigo-400'
  },
  {
    icon: <IoCodeWorkingOutline size={24} />,
    title: 'CFD Automation',
    desc: 'Custom macro scripts and software pipelines to automate mesh generation, solver runs, and report exports.',
    color: 'from-orange-500 to-accent'
  },
  {
    icon: <IoTrendingUpOutline size={24} />,
    title: 'Process Optimization',
    desc: 'Applying design of experiments (DoE) and numerical optimization bounds to identify ideal setpoints and feed locations.',
    color: 'from-teal-500 to-emerald-400'
  },
  {
    icon: <IoSchoolOutline size={24} />,
    title: 'Industrial Training',
    desc: 'Tailored courses on CFD modeling, open-source OpenFOAM solvers, and physical validation methodologies for engineering teams.',
    color: 'from-indigo-500 to-purple-400'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
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

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white relative">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 cfd-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Our Services</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-primary mt-2 mb-4 leading-tight">
            High-Performance Simulation Solutions
          </h2>
          <p className="font-body text-base text-gray-500 leading-relaxed">
            From granular multiphase models to thermal boundary simulations, we deliver precise predictive engineering outputs to refine designs before hardware prototyping.
          </p>
        </div>

        {/* Services Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Top gradient glow overlay */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              <div>
                {/* Icon Container with colorful gradient backing */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.color} p-0.5 flex items-center justify-center text-white shadow-md mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <div className="w-full h-full bg-white/10 rounded-[14px] flex items-center justify-center backdrop-blur-sm">
                    {service.icon}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-heading font-bold text-xl text-primary mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="font-body text-sm text-gray-500 leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Learn More link */}
              <div className="border-t border-gray-50 pt-4 flex items-center justify-between mt-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-heading font-bold text-secondary group-hover:text-accent transition-colors"
                >
                  Request Consultation <HiArrowSmRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="text-[10px] font-heading font-black text-gray-200 group-hover:text-accent/20 transition-colors">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
