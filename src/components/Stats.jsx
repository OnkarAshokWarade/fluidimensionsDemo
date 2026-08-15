import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const statsData = [
  { value: 20, suffix: '+', label: 'Years of Experience' },
  { value: 300, suffix: '+', label: 'Simulation Projects' },
  { value: 100, suffix: '+', label: 'Global Clients' },
  { value: 15, suffix: '+', label: 'Industries Served' },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const end = parseInt(value, 10);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 100); // dynamic step size for speed
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span ref={ref} className="font-heading text-[clamp(1.75rem,5vw,3rem)] font-black text-primary">
      {count}
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative z-20 -mt-5 sm:-mt-8">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-x-3 gap-y-0 rounded-2xl border border-gray-100 bg-white px-3 py-6 shadow-xl sm:rounded-3xl sm:px-8 sm:py-9 md:grid-cols-4 md:divide-x md:divide-gray-100 md:px-10 lg:px-16"
        >
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className={`flex min-w-0 flex-col items-center justify-center px-1 text-center sm:px-3 ${idx > 1 ? 'mt-5 border-t border-gray-100 pt-5 md:mt-0 md:border-t-0 md:pt-0' : ''}`}
            >
              <div className="flex items-baseline mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className="font-body text-[10px] font-semibold uppercase leading-4 tracking-wider text-gray-500 sm:text-xs lg:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
