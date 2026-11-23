import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiChevronDown, HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { NAV, NAV_CTA } from '../data/site';

const isPathActive = (pathname, to) => (to === '/' ? pathname === '/' : pathname.startsWith(to.replace(/\/$/, '')));
const isGroupActive = (pathname, item) => item.children?.some((child) => isPathActive(pathname, child.path));

function DesktopDropdown({ item, solid, pathname }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const active = isGroupActive(pathname, item);

  useEffect(() => {
    if (!open) return undefined;
    const handlePointer = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', handlePointer);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('pointerdown', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  const tone = active ? 'text-accent' : solid ? 'text-slate-700 hover:text-accent' : 'text-white/80 hover:text-white';

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className={`flex items-center gap-1 rounded-md py-2 font-body text-sm font-medium transition ${tone}`}
      >
        {item.label}
        <HiChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 pt-3">
          <ul className="w-80 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
            {item.children.map((child) => (
              <li key={child.path}>
                <Link
                  to={child.path}
                  onClick={() => setOpen(false)}
                  aria-current={isPathActive(pathname, child.path) ? 'page' : undefined}
                  className={`flex min-h-11 items-center rounded-xl px-4 font-body text-sm font-medium transition hover:bg-slate-50 hover:text-accent ${isPathActive(pathname, child.path) ? 'text-accent' : 'text-slate-700'}`}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MobileGroup({ item, pathname, onNavigate }) {
  const [open, setOpen] = useState(() => isGroupActive(pathname, item));
  const panelId = `mobile-group-${item.label.toLowerCase().replace(/\W+/g, '-')}`;
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={`flex min-h-12 w-full items-center justify-between rounded-xl px-4 font-heading text-base font-semibold transition hover:bg-slate-50 ${isGroupActive(pathname, item) ? 'text-accent' : 'text-primary'}`}
      >
        {item.label}
        <HiChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {open && (
        <ul id={panelId} className="mb-1 ml-3 border-l border-slate-200 pl-2">
          {item.children.map((child) => (
            <li key={child.path}>
              <Link
                to={child.path}
                onClick={onNavigate}
                aria-current={isPathActive(pathname, child.path) ? 'page' : undefined}
                className={`flex min-h-11 items-center rounded-lg px-3 font-body text-sm font-medium transition hover:bg-slate-50 ${isPathActive(pathname, child.path) ? 'text-accent' : 'text-slate-700'}`}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Navbar({ light = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  // The homepage hero is dark, so the header starts transparent there only.
  const solid = light || pathname !== '/' || isScrolled || isOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1280) setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const linkTone = (active) => (active ? 'text-accent' : solid ? 'text-slate-700 hover:text-accent' : 'text-white/80 hover:text-white');

  return (
    <>
      <motion.header initial={{ y: -90 }} animate={{ y: 0 }} transition={{ duration: 0.45 }} className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${solid ? 'border-slate-200/80 bg-white/95 py-3 shadow-sm backdrop-blur-xl' : 'border-transparent bg-transparent py-4 sm:py-5'}`}>
        <nav className="site-container flex items-center justify-between gap-4" aria-label="Primary navigation">
          <Link to="/" onClick={closeMenu} className="flex min-h-11 min-w-0 items-center gap-2.5 rounded-lg sm:gap-3" aria-label="FluiDimensions home">
            <img src="/logo.png" alt="" className="h-9 w-auto shrink-0 sm:h-10" />
            <div className="min-w-0">
              <span className={`block truncate font-heading text-sm font-black leading-none tracking-tight min-[380px]:text-base sm:text-lg ${solid ? 'text-primary' : 'text-white'}`}>FLUIDIMENSIONS</span>
              <span className="mt-1 block truncate text-[8px] font-bold uppercase tracking-[0.16em] text-accent min-[380px]:text-[9px] sm:text-[10px]">Understand. Optimise. Innovate.</span>
            </div>
          </Link>

          <div className="hidden items-center gap-5 xl:flex 2xl:gap-7">
            {NAV.map((item) => {
              if (item.children) return <DesktopDropdown key={item.label} item={item} solid={solid} pathname={pathname} />;
              const active = isPathActive(pathname, item.to);
              return (
                <Link key={item.to} to={item.to} aria-current={active ? 'page' : undefined} className={`relative rounded-md py-2 font-body text-sm font-medium transition ${linkTone(active)}`}>
                  {item.label}
                  {active && <motion.span layoutId="nav-active" className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-accent" />}
                </Link>
              );
            })}
          </div>

          <Link to={NAV_CTA.to} onClick={closeMenu} className="ml-auto hidden min-h-11 items-center justify-center rounded-full bg-accent px-6 font-heading text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-accent-dark xl:inline-flex">{NAV_CTA.label}</Link>
          <button type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setIsOpen((open) => !open)} className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition xl:hidden ${solid ? 'text-primary hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}>{isOpen ? <HiX size={25} /> : <HiMenu size={25} />}</button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button type="button" aria-label="Close navigation menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeMenu} className="fixed inset-0 z-40 cursor-default bg-primary/45 backdrop-blur-sm xl:hidden" />
            <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.22 }} className="fixed inset-x-3 top-[4.75rem] z-50 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl sm:inset-x-5 xl:hidden">
              {NAV.map((item) => {
                if (item.children) return <MobileGroup key={item.label} item={item} pathname={pathname} onNavigate={closeMenu} />;
                const active = isPathActive(pathname, item.to);
                return (
                  <Link key={item.to} to={item.to} onClick={closeMenu} aria-current={active ? 'page' : undefined} className={`flex min-h-12 items-center rounded-xl px-4 font-heading text-base font-semibold transition ${active ? 'bg-accent/10 text-accent' : 'text-primary hover:bg-slate-50'}`}>{item.label}</Link>
                );
              })}
              <Link to={NAV_CTA.to} onClick={closeMenu} className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-accent px-5 font-heading text-sm font-semibold text-white">{NAV_CTA.label}</Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
