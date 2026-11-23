import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { hero } from '../../data/home';
import { CONTACT_BUSINESS } from '../../data/site';

const PARTICLES = 70;
const BLUE = 210;

// Decorative flow-field backdrop. TODO(assets): the blueprint prefers an authentic
// project visual or team/engineering composition here; swap this canvas for one when approved.
function FlowBackdrop() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let frame;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const obstacle = () => ({ x: width * 0.68, y: height * 0.52, r: Math.min(width, height) * 0.09 });
    const spawn = (scatter) => ({ x: scatter ? Math.random() * width : 0, y: Math.random() * height, vx: 2 + Math.random() * 2, vy: 0, trail: [], hue: BLUE });
    const particles = Array.from({ length: PARTICLES }, () => spawn(true));

    const step = (p) => {
      const o = obstacle();
      const dx = p.x - o.x;
      const dy = p.y - o.y;
      const dist = Math.hypot(dx, dy) || 1;
      p.trail.push({ x: p.x, y: p.y });
      if (p.trail.length > 15) p.trail.shift();
      if (dist < o.r + 110) {
        const force = (o.r * o.r) / (dist * dist);
        const angle = Math.atan2(dy, dx);
        p.vx += Math.cos(angle) * force * 1.5;
        p.vy += Math.sin(angle) * force * 1.5;
      } else {
        p.vx += (3 - p.vx) * 0.05;
        p.vy *= 0.95;
      }
      const speed = Math.hypot(p.vx, p.vy);
      if (speed > 6) { p.vx = (p.vx / speed) * 6; p.vy = (p.vy / speed) * 6; }
      p.x += p.vx;
      p.y += p.vy;
      p.hue = BLUE + Math.max(0, Math.min(1, (speed - 2) / 4)) * 120;
      if (p.x > width || p.y < 0 || p.y > height) Object.assign(p, spawn(false));
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(7, 27, 58, 0.1)';
      ctx.fillRect(0, 0, width, height);
      const o = obstacle();
      const gradient = ctx.createRadialGradient(o.x - 10, o.y - 10, 10, o.x, o.y, o.r);
      gradient.addColorStop(0, '#FF6B00');
      gradient.addColorStop(0.3, '#0F4C81');
      gradient.addColorStop(1, '#071B3A');
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 2;
      ctx.stroke();
      particles.forEach((p) => {
        step(p);
        if (p.trail.length < 2) return;
        ctx.beginPath();
        ctx.moveTo(p.trail[0].x, p.trail[0].y);
        p.trail.forEach((pt) => ctx.lineTo(pt.x, pt.y));
        ctx.strokeStyle = `hsla(${p.hue}, 90%, 55%, 0.55)`;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();
      });
    };

    if (reduceMotion) {
      ctx.fillStyle = '#071B3A';
      ctx.fillRect(0, 0, width, height);
      for (let i = 0; i < 120; i += 1) draw();
    } else {
      const loop = () => { draw(); frame = requestAnimationFrame(loop); };
      loop();
    }
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(frame); };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />;
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary">
      <FlowBackdrop />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" aria-hidden="true" />
      <div className="site-container relative z-10 w-full pb-20 pt-32 sm:pt-36 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">{hero.tagline}</p>
          <h1 id="hero-heading" className="font-heading text-[clamp(2.25rem,7vw,4.25rem)] font-black leading-[1.08] text-white">{hero.h1}</h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-7 text-gray-300 sm:text-lg">{hero.body}</p>
          <div className="mt-9 flex flex-col gap-3 min-[480px]:flex-row sm:gap-4">
            <Link to={CONTACT_BUSINESS} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 font-heading text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-accent-dark min-[480px]:w-auto sm:px-8">
              Discuss an Engineering Challenge <HiArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/#capabilities" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/25 px-6 font-heading text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 min-[480px]:w-auto sm:px-8">
              Explore Our Capabilities
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
