import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Industries from '../components/Industries';
import Workflow from '../components/Workflow';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-brand-bg antialiased selection:bg-accent selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Trust Counter Statistics */}
      <Stats />

      {/* 4. About Company Tabs Section */}
      <About />

      {/* 5. Services Solutions Cards */}
      <Services />

      {/* 6. Why Choose Us Capability Features */}
      <WhyChooseUs />

      {/* 7. Industries Cases Showcase */}
      <Industries />

      {/* 8. Methodology Process Timeline */}
      <Workflow />

      {/* 9. Success Project Studies */}
      <Projects />

      {/* 10. Testimonials Slider */}
      <Testimonials />

      {/* 11. Scoping Contact Form & CTA */}
      <CTA />

      {/* 12. Modern Footer Details */}
      <Footer />
    </div>
  );
}
