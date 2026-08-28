import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Services', 'services'],
  ['Industries', 'industries'],
  ['Workflow', 'workflow'],
  ['Projects', 'projects'],
];

export default function Navbar({ light = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHome = location.pathname === '/';
  const solid = light || isScrolled || isOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
      if (!isHome) return;
      const current = navLinks.map(([, id]) => id).find((id) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 110 && rect.bottom >= 110;
      });
      if (current) setActiveSection(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const destination = (id) => `/#${id}`;
  const handleNavigation = (event, id) => {
    setIsOpen(false);
    if (!isHome) return;
    const target = document.getElementById(id);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `/#${id}`);
    }
  };

  return (
    <>
      <motion.header initial={{ y: -90 }} animate={{ y: 0 }} transition={{ duration: 0.45 }} className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${solid ? 'border-slate-200/80 bg-white/95 py-3 shadow-sm backdrop-blur-xl' : 'border-transparent bg-transparent py-4 sm:py-5'}`}>
        <nav className="site-container flex items-center justify-between gap-4" aria-label="Primary navigation">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex min-h-11 min-w-0 items-center gap-2.5 rounded-lg sm:gap-3" aria-label="Fluidimensions home">
            <img src="/logo.png" alt="" className="h-9 w-auto shrink-0 sm:h-10" />
            <div className="min-w-0">
              <span className={`block truncate font-heading text-sm font-black leading-none tracking-tight min-[380px]:text-base sm:text-lg ${solid ? 'text-primary' : 'text-white'}`}>FLUIDIMENSIONS</span>
              <span className="mt-1 block truncate text-[8px] font-bold uppercase tracking-[0.16em] text-accent min-[380px]:text-[9px] sm:text-[10px]">Simulation & Consulting</span>
            </div>
          </Link>

          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map(([name, id]) => {
              const active = isHome && activeSection === id;
              return <Link key={id} to={destination(id)} onClick={(event) => handleNavigation(event, id)} className={`relative rounded-md py-2 font-body text-sm font-medium transition ${active ? 'text-accent' : solid ? 'text-slate-700 hover:text-accent' : 'text-white/80 hover:text-white'}`}>{name}{active && <motion.span layoutId="nav-active" className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-accent" />}</Link>;
            })}
          </div>

          <Link to="/#contact" onClick={(event) => handleNavigation(event, 'contact')} className="ml-auto hidden min-h-11 items-center justify-center rounded-full bg-accent px-5 font-heading text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-accent-dark lg:inline-flex xl:px-6">Get in touch</Link>
          <button type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setIsOpen((open) => !open)} className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition lg:hidden ${solid ? 'text-primary hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}>{isOpen ? <HiX size={25} /> : <HiMenu size={25} />}</button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button type="button" aria-label="Close navigation menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 z-40 cursor-default bg-primary/45 backdrop-blur-sm lg:hidden" />
            <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.22 }} className="fixed inset-x-3 top-[4.75rem] z-50 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl sm:inset-x-5 lg:hidden">
              {navLinks.map(([name, id]) => <Link key={id} to={destination(id)} onClick={(event) => handleNavigation(event, id)} className={`flex min-h-12 items-center rounded-xl px-4 font-heading text-base font-semibold transition ${isHome && activeSection === id ? 'bg-accent/10 text-accent' : 'text-primary hover:bg-slate-50'}`}>{name}</Link>)}
              <Link to="/#contact" onClick={(event) => handleNavigation(event, 'contact')} className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-accent px-5 font-heading text-sm font-semibold text-white">Get in touch</Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
