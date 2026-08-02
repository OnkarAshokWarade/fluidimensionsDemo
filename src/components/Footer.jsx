import React from 'react';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-primary text-white border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 cfd-grid opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Logo & Newsletter */}
          <div className="lg:col-span-2 text-left pr-0 lg:pr-8">
            <div className="flex items-center space-x-3 mb-6">
              {/* Logo – original colors (no filter) */}
              <img
                src="/logo.png"
                alt="Fluidimensions"
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-heading font-black text-base text-white tracking-tight leading-none">
                  FLUIDIMENSIONS
                </span>
                <span className="text-[9px] text-accent font-bold tracking-widest uppercase mt-0.5">
                  Simulation & Consulting
                </span>
              </div>
            </div>
            
            <p className="font-body text-sm text-gray-400 leading-relaxed mb-6 max-w-sm">
              Providing premium, high-fidelity engineering simulations and thermodynamic designs to streamline industrial hardware scales worldwide.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3 max-w-sm">
              <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                Subscribe to Simulation Insights
              </label>
              <div className="flex">
                <input
                  type="email"
                  required
                  placeholder="newsletter@company.com"
                  className="flex-grow px-4 py-2.5 rounded-l-xl bg-white/5 border border-white/10 text-xs font-body text-white focus:outline-none focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-r-xl bg-accent hover:bg-accent-dark text-xs font-heading font-bold transition-colors cursor-pointer"
                >
                  Join
                </button>
              </div>
            </form>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="text-left">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-accent mb-6">Company</h4>
            <ul className="space-y-3 font-body text-sm text-gray-400">
              {['Home', 'About', 'Services', 'Industries', 'Workflow', 'Projects'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => handleScrollTo(e, link.toLowerCase())}
                    className="hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="text-left">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-accent mb-6">Services</h4>
            <ul className="space-y-3 font-body text-sm text-gray-400">
              <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-white transition-colors">CFD Analysis</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-white transition-colors">Heat Transfer</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-white transition-colors">Reaction Engineering</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-white transition-colors">Mixing Vessels</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-white transition-colors">Equipment Design</a></li>
            </ul>
          </div>

          {/* Col 4: Industries Links */}
          <div className="text-left">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-accent mb-6">Industries</h4>
            <ul className="space-y-3 font-body text-sm text-gray-400">
              <li><a href="#industries" onClick={(e) => handleScrollTo(e, 'industries')} className="hover:text-white transition-colors">Chemical Processing</a></li>
              <li><a href="#industries" onClick={(e) => handleScrollTo(e, 'industries')} className="hover:text-white transition-colors">Pharmaceuticals</a></li>
              <li><a href="#industries" onClick={(e) => handleScrollTo(e, 'industries')} className="hover:text-white transition-colors">Metallurgy</a></li>
              <li><a href="#industries" onClick={(e) => handleScrollTo(e, 'industries')} className="hover:text-white transition-colors">Oil & Gas</a></li>
              <li><a href="#industries" onClick={(e) => handleScrollTo(e, 'industries')} className="hover:text-white transition-colors">Cement & Rotary Kilns</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & socials */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-body text-xs text-gray-500 text-left">
            © {new Date().getFullYear()} Fluidimensions. All rights reserved. Designed for elite industrial consulting.
          </span>
          
          <div className="flex space-x-4">
            {[
              { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com' },
              { icon: <FaTwitter size={18} />, href: 'https://twitter.com' },
              { icon: <FaYoutube size={18} />, href: 'https://youtube.com' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}