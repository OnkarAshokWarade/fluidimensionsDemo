import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/', isInternal: true },
  { name: 'About', href: '/#about', isInternal: false },    // ← hash links
  { name: 'Services', href: '/#services', isInternal: false },
  { name: 'Industries', href: '/#industries', isInternal: false },
  { name: 'Workflow', href: '/#workflow', isInternal: false },
  { name: 'Projects', href: '/#projects', isInternal: false },
];

export default function NavbarLight() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Detect scroll to update navbar style and active section (only on homepage)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isHome) {
        const sections = ['home', 'about', 'services', 'industries', 'workflow', 'projects'];
        let currentSection = 'home';
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              currentSection = section;
              break;
            }
          }
        }
        setActiveSection(currentSection);
      } else {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 py-4"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsOpen(false)}
          >
            <img src="/logo.png" alt="Fluidimensions" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="font-heading font-black text-lg tracking-tight leading-none text-primary">
                FLUIDIMENSIONS
              </span>
              <span className="text-[10px] text-accent font-bold tracking-widest uppercase">
                Simulation & Consulting
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links – All use Link with hash for non‑internal */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = isHome && !link.isInternal
                ? activeSection === link.href.substring(2) // remove "/#"
                : false;

              if (link.isInternal) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="font-body font-medium text-sm transition-colors duration-200 relative py-1 text-primary hover:text-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-body font-medium text-sm transition-colors duration-200 relative py-1 ${
                    isActive ? 'text-accent' : 'text-gray-600 hover:text-accent'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button – also uses Link to /#contact */}
          <div className="hidden md:block">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 font-heading text-sm font-semibold rounded-full text-white bg-accent hover:bg-accent-dark shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none transition-colors text-primary hover:bg-gray-100"
          >
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[76px] z-40 bg-white shadow-xl border-b border-gray-100 py-6 px-8 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                if (link.isInternal) {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="font-body font-semibold text-lg py-2 border-b border-gray-50 transition-colors text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`font-body font-semibold text-lg py-2 border-b border-gray-50 transition-colors ${
                      activeSection === link.href.substring(2) ? 'text-accent' : 'text-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/#contact"
                className="w-full text-center px-6 py-3 font-heading text-base font-semibold rounded-xl text-white bg-accent hover:bg-accent-dark shadow-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}