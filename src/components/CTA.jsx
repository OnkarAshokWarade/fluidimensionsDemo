import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineLocationMarker, HiArrowRight } from 'react-icons/hi';
import IconBadge from './IconBadge';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: 'chemical',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API submit
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', industry: 'chemical', message: '' });
    }, 4000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-primary py-20 sm:py-24 lg:py-32">
      {/* Background blobs and grid */}
      <div className="absolute inset-0 cfd-grid opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">
          
          {/* Left Column: CTA Pitch */}
          <div className="w-full lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold text-accent uppercase tracking-widest">Connect With Us</span>
              <h2 className="mt-2 mb-5 font-heading text-[clamp(1.875rem,6vw,3rem)] font-black leading-tight text-white sm:mb-6">
                Ready to Optimize Your Industrial Process?
              </h2>
              <p className="font-body text-base text-gray-300 leading-relaxed mb-8 max-w-xl">
                Get in touch with our engineering leads to schedule a technical walkthrough. We will review your geometric parameters and provide a scoping simulation estimate.
              </p>

              {/* Direct Info Links */}
              <div className="space-y-4">
  <a
    href="mailto:vivek@fluidimensions.com"
    className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-colors"
  >
    <IconBadge tone="contact.email" size="sm"><HiOutlineMail size={20} /></IconBadge>
    <div className="flex flex-col">
      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
        Email Inquiry
      </span>
      <span className="break-all font-body text-sm font-semibold text-white">
        vivek@fluidimensions.com
      </span>
    </div>
  </a>

  <div className="flex items-start space-x-3 text-gray-300">
    <IconBadge tone="contact.location" size="sm" className="mt-0.5"><HiOutlineLocationMarker size={20} /></IconBadge>
    <div className="flex flex-col">
      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
        Engineering Center
      </span>
      <address className="not-italic font-body text-sm font-semibold text-white leading-relaxed">
        66, Gulmohar,<br />
        off Pancard Club Road,<br />
        Veerbhadra Nagar, Baner,<br />
        Pune, Maharashtra 411069
      </address>
    </div>
  </div>
</div>
            </motion.div>
          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="rounded-2xl border border-white/10 bg-white p-5 shadow-2xl min-[480px]:p-7 sm:rounded-3xl md:p-10"
            >
              <h3 className="font-heading font-black text-xl md:text-2xl text-primary text-left mb-6">
                Request Engineering Scoping
              </h3>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="font-heading font-bold text-lg text-primary">Scoping Request Sent</h4>
                  <p className="font-body text-sm text-gray-500 mt-2">
                    Our lead simulation engineer will review your parameters and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-heading font-bold text-primary uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Onkar Warade"
                      className="min-h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-body text-base text-primary transition-colors focus:border-accent focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-heading font-bold text-primary uppercase tracking-wider mb-2">
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="o.warade@company.com"
                      className="min-h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-body text-base text-primary transition-colors focus:border-accent focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Industry Select */}
                  <div>
                    <label htmlFor="industry" className="block text-xs font-heading font-bold text-primary uppercase tracking-wider mb-2">
                      Industry Sector
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="min-h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-body text-base text-primary transition-colors focus:border-accent focus:bg-white focus:outline-none"
                    >
                      <option value="chemical">Chemicals & Mixing</option>
                      <option value="pharma">Pharmaceuticals</option>
                      <option value="metals">Metallurgy & Furnaces</option>
                      <option value="oilgas">Oil & Gas / Pipeline</option>
                      <option value="other">Other Industrial Flow</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-heading font-bold text-primary uppercase tracking-wider mb-2">
                      Brief Problem / Scope
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe mixing volumes, nozzle parameters, or temperature bottlenecks..."
                      className="min-h-28 w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-body text-base text-primary transition-colors focus:border-accent focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 font-heading text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-accent-dark hover:shadow-lg"
                  >
                    Send Scoping Request <HiArrowRight size={14} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
