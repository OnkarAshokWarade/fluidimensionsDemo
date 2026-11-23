import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import Hero from '../components/home/Hero';
import Capabilities from '../components/home/Capabilities';
import IndustriesSection from '../components/home/IndustriesSection';
import Approach from '../components/home/Approach';
import Experience from '../components/home/Experience';
import TechnologiesSection from '../components/home/TechnologiesSection';
import WhyUs from '../components/home/WhyUs';
import CafeSection from '../components/home/CafeSection';
import FinalCta from '../components/home/FinalCta';
import JsonLd from '../components/JsonLd';
import { SITE } from '../data/site';
import { organizationJsonLd } from '../data/home';

// Section order follows the Homepage Content & Design Blueprint.
export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-brand-bg antialiased selection:bg-accent selection:text-white">
      <Seo title={SITE.home.title} description={SITE.home.description} path="/" />
      <JsonLd data={organizationJsonLd(SITE.url)} />
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <IndustriesSection />
        <Approach />
        <Experience />
        <TechnologiesSection />
        <WhyUs />
        <CafeSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
