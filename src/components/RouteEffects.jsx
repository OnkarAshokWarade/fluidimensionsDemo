import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PAGE_TITLES = {
  '/': 'Fluidimensions | CFD Simulation & Engineering Consulting',
  '/services': 'Engineering Simulation Services | Fluidimensions',
};

export default function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = PAGE_TITLES[pathname] || 'Fluidimensions | Engineering Simulation';
    let frame;
    let attempts = 0;
    const scrollToRoute = () => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) {
        target.scrollIntoView({ block: 'start' });
        return;
      }
      if (hash && attempts < 30) {
        attempts += 1;
        frame = window.requestAnimationFrame(scrollToRoute);
        return;
      }
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    frame = window.requestAnimationFrame(scrollToRoute);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
