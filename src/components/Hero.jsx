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
    <section id="home" className="relative min-h-screen bg-primary flex items-center overflow-hidden">
      {/* Dynamic Simulation Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Decorative Gradient Overlay Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-accent/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 flex flex-col md:flex-row items-center relative z-10 w-full">
        {/* Left side text column */}
        <div className="w-full md:w-1/2 text-left pr-0 md:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-accent uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Next-Gen Engineering Simulation
            </span>

            {/* Main Title */}
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Delivering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                Innovation
              </span>{' '}
              Through <br />
              Simulation
            </h1>

            {/* Subtitle / Bullet Points */}
            <p className="font-body text-base md:text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              We empower global manufacturers with advanced Computational Fluid Dynamics (CFD), process optimization, and custom equipment designs to boost reliability, efficiency, and scale.
            </p>

            {/* Bullet grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
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
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center gap-2 px-8 py-3.5 font-heading text-sm font-semibold rounded-xl text-white bg-accent hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                Explore Services <HiArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-8 py-3.5 font-heading text-sm font-semibold rounded-xl text-white border border-white/20 hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right side floating industrial cards & animation focus */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-end relative h-[380px] md:h-[450px]">
          {/* Overlay Tech Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-10 right-4 md:right-12 bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl max-w-[220px]"
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
            className="absolute bottom-10 left-4 md:left-12 bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl max-w-[240px]"
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
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-[10px] uppercase font-bold tracking-widest mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-9 rounded-full border-2 border-white/20 flex justify-center pt-1.5 cursor-pointer"
          onClick={() => scrollToSection('stats')}
        >
          <div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
