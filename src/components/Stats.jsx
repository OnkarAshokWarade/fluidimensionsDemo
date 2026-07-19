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
    <span ref={ref} className="font-heading font-black text-3xl md:text-5xl text-primary">
      {count}
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative z-20 -mt-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 py-10 px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100"
        >
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center ${
                idx > 1 ? 'pt-6 md:pt-0' : idx > 0 ? 'pt-0' : ''
              }`}
            >
              <div className="flex items-baseline mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className="font-body font-semibold text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
