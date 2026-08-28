import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    // Particle flow setup (CFD Simulation)
    const particleCount = 70;
    const particles = [];
    const obstacle = {
      x: width * 0.55,
      y: height * 0.5,
      r: 60,
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width * 0.2; // Start from left
        this.y = Math.random() * height;
        this.vx = 2 + Math.random() * 3; // Horizontal velocity
        this.vy = 0;
        this.history = [];
        this.maxHistory = 15;
        // Color maps from blue (slow/start) to orange (fast/compressed)
        this.color = Math.random() > 0.5 ? '#0F4C81' : '#FF6B00';
      }

      update() {
        // Obstacle avoidance physics (potential flow simulation approximation)
        obstacle.x = width * 0.55; // Re-align with responsive screen width
        obstacle.y = height * 0.5;

        const dx = this.x - obstacle.x;
        const dy = this.y - obstacle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Save position history for trail
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > this.maxHistory) {
          this.history.shift();
        }

        if (dist < obstacle.r + 120) {
          // Calculate potential flow deflection
          const force = (obstacle.r * obstacle.r) / (dist * dist);
          const angle = Math.atan2(dy, dx);
          
          this.vx += Math.cos(angle) * force * 1.5;
          this.vy += Math.sin(angle) * force * 1.5;
        } else {
          // Return to laminar velocity
          this.vx += (3 - this.vx) * 0.05;
          this.vy += (0 - this.vy) * 0.05;
        }

        // Apply friction/limits to avoid infinite acceleration
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxSpeed = 6;
        if (speed > maxSpeed) {
          this.vx = (this.vx / speed) * maxSpeed;
          this.vy = (this.vy / speed) * maxSpeed;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Color based on local velocity
        const normalizedSpeed = (speed - 2) / 4; // 0 to 1
        this.color = `hsla(${210 + normalizedSpeed * 120}, 90%, 55%, 0.65)`; // Blue to Orange/Greenish

        // Reset if offscreen
        if (this.x > width || this.y < 0 || this.y > height) {
          this.reset();
        }
      }

      draw() {
        if (this.history.length < 2) return;
        
        ctx.beginPath();
        ctx.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 1; i < this.history.length; i++) {
          ctx.lineTo(this.history[i].x, this.history[i].y);
        }
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
      // Scatter start positions along screen length initially
      particles[i].x = Math.random() * width;
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(7, 27, 58, 0.08)'; // Deep Navy background persistence for glow trails
      ctx.fillRect(0, 0, width, height);

      // Draw structural flow mesh lines (engineering grid)
      ctx.strokeStyle = 'rgba(15, 76, 129, 0.1)';
      ctx.lineWidth = 1;
      
      // Draw grid
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw CFD obstacle
      const gradient = ctx.createRadialGradient(
        obstacle.x - 10, obstacle.y - 10, 10,
        obstacle.x, obstacle.y, obstacle.r
      );
      gradient.addColorStop(0, '#FF6B00');
      gradient.addColorStop(0.3, '#0F4C81');
      gradient.addColorStop(1, '#071B3A');

      ctx.beginPath();
      ctx.arc(obstacle.x, obstacle.y, obstacle.r, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.shadowBlur = 30;
      ctx.shadowColor = 'rgba(15, 76, 129, 0.4)';
      ctx.fill();
      ctx.shadowBlur = 0; // Reset shadow

      // Draw obstacle outline
      ctx.beginPath();
      ctx.arc(obstacle.x, obstacle.y, obstacle.r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Render and update particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id) => {
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
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary">
      {/* Dynamic Simulation Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Decorative Gradient Overlay Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-accent/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Content Container */}
      <div className="site-container relative z-10 flex w-full flex-col items-center pb-16 pt-28 sm:pt-32 lg:min-h-[48rem] lg:flex-row lg:py-32">
        {/* Left side text column */}
        <div className="w-full text-left lg:w-[56%] lg:pr-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline Badge */}
            <span className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-accent backdrop-blur-md sm:mb-6 sm:px-4 sm:text-xs">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Next-Gen Engineering Simulation
            </span>

            {/* Main Title */}
            <h1 className="mb-5 max-w-3xl font-heading text-[clamp(2.25rem,9.5vw,4.5rem)] font-black leading-[1.08] text-white sm:mb-6">
              Delivering <span className="hidden sm:inline"><br /></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                Innovation
              </span>{' '}
              Through <span className="hidden sm:inline"><br /></span>
              Simulation
            </h1>

            {/* Subtitle / Bullet Points */}
            <p className="mb-7 max-w-xl font-body text-[15px] leading-7 text-gray-300 sm:mb-8 sm:text-base lg:text-lg">
              We empower global manufacturers with advanced Computational Fluid Dynamics (CFD), process optimization, and custom equipment designs to boost reliability, efficiency, and scale.
            </p>

            {/* Bullet grid */}
            <div className="mb-8 grid grid-cols-1 gap-3 min-[430px]:grid-cols-2 sm:gap-4">
              {[
                'Computational Fluid Dynamics',
                'Process Optimization',
                'Equipment Design',
                'CFD Automation',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="font-body text-sm font-medium text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 min-[480px]:flex-row sm:gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 font-heading text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-xl min-[480px]:w-auto sm:px-8"
              >
                Explore Services <HiArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/20 px-6 font-heading text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 min-[480px]:w-auto sm:px-8"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right side floating industrial cards & animation focus */}
        <div className="relative mt-10 hidden h-72 w-full justify-end min-[480px]:flex sm:mt-12 sm:h-80 lg:mt-0 lg:h-[450px] lg:w-[44%]">
          {/* Overlay Tech Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-0 top-4 max-w-[min(78vw,220px)] rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-md sm:right-8 sm:top-8 sm:p-5 lg:right-0"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold text-accent tracking-widest uppercase">Solver Status</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="text-left">
              <h4 className="font-heading font-extrabold text-white text-lg leading-tight">99.8% Accuracy</h4>
              <p className="font-body text-xs text-gray-400 mt-1">Laminar to turbulent flow field convergence achieved.</p>
            </div>
          </motion.div>

          {/* Overlay Tech Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-4 left-0 max-w-[min(82vw,240px)] rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-md sm:bottom-8 sm:left-8 sm:p-5 lg:left-0"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold text-sky-400 tracking-widest uppercase">Flow Vectors</span>
              <span className="text-[10px] text-gray-300 font-semibold px-2 py-0.5 rounded bg-white/10">Re = 24,000</span>
            </div>
            <div className="text-left">
              <h4 className="font-heading font-extrabold text-white text-lg leading-tight">Boundary Layer</h4>
              <p className="font-body text-xs text-gray-400 mt-1">Real-time mesh adaptation & vortex shedding simulation.</p>
            </div>
          </motion.div>

          {/* Animated decorative grid rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dashed border-white/10 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-dashed border-white/5 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center lg:flex">
        <span className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex h-11 w-7 cursor-pointer justify-center rounded-full border-2 border-white/25 pt-2"
          onClick={() => scrollToSection('stats')}
        >
          <div className="h-2.5 w-1.5 rounded-full bg-accent" />
        </motion.div>
      </div>
    </section>
  );
}
