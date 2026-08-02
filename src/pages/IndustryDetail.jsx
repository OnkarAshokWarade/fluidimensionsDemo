import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import { industriesData, iconMap } from '../data/industries';
import NavbarLight from '../components/NavbarLight'; // ← Correct import
import * as Icons from 'react-icons/gi';

// Icon mapping (if not using iconMap from data)
const localIconMap = {
  GiBubblingFlask: Icons.GiBubblingFlask,
  GiPill: Icons.GiPill,
  GiSprout: Icons.GiSprout,
  GiSpray: Icons.GiSpray,
  GiSteelClaws: Icons.GiSteelClaws,
  GiHamburger: Icons.GiHamburger,
  GiCarKey: Icons.GiCarKey,
  GiOilPump: Icons.GiOilPump,
  GiFactory: Icons.GiFactory,
};

export default function IndustryDetail() {
  const { slug } = useParams();
  const currentIndex = industriesData.findIndex((s) => s.id === slug);
  const industry = industriesData[currentIndex];
  const otherIndustries = industriesData.filter((_, idx) => idx !== currentIndex);
  const [activeTab, setActiveTab] = useState('overview');

  if (!industry) {
    return (
      <>
        <NavbarLight />  {/* ← Use NavbarLight */}
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
          <h1 className="text-3xl sm:text-4xl font-heading font-black text-primary text-center">Industry Not Found</h1>
          <p className="text-gray-500 mt-4 text-center">The industry you're looking for doesn't exist.</p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-heading font-semibold rounded-lg hover:bg-accent-dark transition">
            Go Home
          </Link>
        </div>
      </>
    );
  }

  const IconComponent = localIconMap[industry.icon] || Icons.GiBubblingFlask;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="whitespace-pre-wrap text-gray-600 leading-relaxed font-body text-sm sm:text-base">
            {industry.fullDesc}
          </div>
        );
      case 'benefits':
        return (
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 text-sm sm:text-base">
            {industry.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        );
      case 'technical':
        return (
          <div className="text-gray-600 leading-relaxed text-sm sm:text-base">
            <p className="mb-4">Our technical approach for this industry includes:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2">
              <li>Custom meshing and grid generation</li>
              <li>Advanced turbulence and multiphase models</li>
              <li>High-performance computing (HPC) clusters</li>
              <li>Validation against experimental data</li>
              <li>Parametric studies and optimization</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <NavbarLight />  {/* ← Use NavbarLight */}
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-brand-bg min-h-screen">
        {/* Decorative background elements – hidden on mobile */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] hidden lg:block" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px] hidden lg:block" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-8 text-xs sm:text-sm">
            <Link to="/" className="text-gray-400 hover:text-accent transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link to="/#industries" className="text-gray-400 hover:text-accent transition-colors">Industries</Link>
            <span className="text-gray-300">/</span>
            <span className="text-primary font-medium truncate max-w-[150px] sm:max-w-xs">{industry.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left: Main Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 p-5 sm:p-6 md:p-8 lg:p-10">
                <Link
                  to="/#industries"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-body font-medium text-gray-400 hover:text-accent transition-colors mb-4 sm:mb-6"
                >
                  <IoArrowBackOutline size={14} className="sm:w-4 sm:h-4" />
                  Back to Industries
                </Link>

                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr ${industry.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                    <IconComponent size={28} className="sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h1 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary">
                      {industry.title}
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base mt-1">{industry.shortDesc}</p>
                  </div>
                </div>

                {/* Tabs */}
                <div className="overflow-x-auto border-b border-gray-200 mb-6 sm:mb-8 -mx-5 sm:mx-0 px-5 sm:px-0">
                  <div className="flex min-w-max sm:min-w-0 gap-1 sm:gap-0">
                    {['overview', 'benefits', 'technical'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 sm:px-6 py-2.5 sm:py-3 font-heading font-semibold text-xs sm:text-sm border-b-2 transition-colors whitespace-nowrap ${
                          activeTab === tab
                            ? 'border-accent text-accent'
                            : 'border-transparent text-gray-400 hover:text-primary'
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="min-h-[180px] sm:min-h-[200px] prose max-w-none prose-sm sm:prose-base">
                  {renderTabContent()}
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-100 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Link
                    to="/#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-accent to-orange-500 text-white font-heading font-semibold text-sm rounded-xl shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Request Consultation
                    <IoArrowForwardOutline size={18} className="hidden sm:inline" />
                  </Link>
                  <Link
                    to="/#industries"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gray-100 text-gray-600 font-heading font-semibold text-sm rounded-xl hover:bg-gray-200 transition-all duration-300"
                  >
                    View All Industries
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 lg:top-32">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 p-5 sm:p-6">
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-gray-400 uppercase tracking-widest mb-4 sm:mb-6">
                    Other Industries
                  </h3>
                  <div className="max-h-[300px] sm:max-h-[420px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
                    <div className="space-y-3 sm:space-y-4">
                      {otherIndustries.map((s) => {
                        const Icon = localIconMap[s.icon] || Icons.GiBubblingFlask;
                        return (
                          <Link
                            key={s.id}
                            to={`/industries/${s.id}`}
                            className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-100 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
                          >
                            <div
                              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-tr ${s.gradient} flex items-center justify-center text-white shadow-sm flex-shrink-0`}
                            >
                              <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-heading font-semibold text-xs sm:text-sm text-primary group-hover:text-accent transition-colors truncate">
                                {s.title}
                              </h4>
                              <p className="text-[10px] sm:text-xs text-gray-400 truncate">{s.shortDesc}</p>
                            </div>
                            <IoArrowForwardOutline
                              size={14}
                              className="sm:w-4 sm:h-4 text-gray-300 group-hover:text-accent transition-colors flex-shrink-0"
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 bg-gradient-to-br from-primary to-secondary rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-white shadow-lg">
                  <h4 className="font-heading font-bold text-base sm:text-lg mb-2">Ready to Transform Your Industry?</h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-3 sm:mb-4">
                    Our engineering team specializes in solving complex challenges across diverse sectors.
                  </p>
                  <Link
                    to="/#contact"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 bg-accent text-white font-heading font-semibold text-xs sm:text-sm rounded-lg hover:bg-accent-dark transition-all duration-300"
                  >
                    Contact Us
                    <IoArrowForwardOutline size={14} className="sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom scrollbar styling */}
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #d1d5db;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #9ca3af;
          }
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #d1d5db transparent;
          }
        `}</style>
      </div>
    </>
  );
}