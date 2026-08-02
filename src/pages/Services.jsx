import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData, iconMap } from '../data/services';
import { HiArrowSmRight } from 'react-icons/hi';

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading font-black text-4xl md:text-5xl text-primary">Our Services</h1>
          <p className="font-body text-base text-gray-500 leading-relaxed mt-4">
            Explore our comprehensive range of CFD and engineering simulation services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || iconMap.IoAnalyticsOutline;
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white shadow-md mb-5`}>
                  <IconComponent size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  {service.shortDesc}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-heading font-bold text-secondary group-hover:text-accent transition-colors">
                  Learn More <HiArrowSmRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}