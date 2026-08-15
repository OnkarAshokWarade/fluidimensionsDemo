import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData, iconMap } from '../data/services';
import { HiArrowSmRight } from 'react-icons/hi';
import NavbarLight from '../components/NavbarLight';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <div className="bg-brand-bg min-h-screen">
      <NavbarLight />
      <main className="pb-20 pt-28 sm:pt-32">
      <div className="site-container">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <h1 className="font-heading text-[clamp(2.25rem,7vw,3.5rem)] font-black text-primary">Our Services</h1>
          <p className="font-body text-base text-gray-500 leading-relaxed mt-4">
            Explore our comprehensive range of CFD and engineering simulation services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || iconMap.IoAnalyticsOutline;
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-7 xl:p-8"
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
      </main>
      <Footer />
    </div>
  );
}
