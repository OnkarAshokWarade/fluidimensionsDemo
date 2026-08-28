import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import IconBadge from './IconBadge';

const companyLinks = [['Home', '/'], ['About', '/#about'], ['Services', '/#services'], ['Industries', '/#industries'], ['Workflow', '/#workflow'], ['Projects', '/#projects']];
const serviceLinks = [['CFD Analysis', '/services/cfd-analysis'], ['Heat Transfer', '/services/heat-transfer'], ['Reaction Engineering', '/services/reaction-engineering'], ['Mixing Vessels', '/services/mixing-optimization'], ['Equipment Design', '/services/equipment-design']];
const industryLinks = [['Chemical Processing', '/industries/chemical'], ['Pharmaceuticals', '/industries/pharmaceutical'], ['Metallurgy', '/industries/metallurgy'], ['Oil & Gas', '/industries/oil-gas'], ['Cement & Mining', '/industries/cement-mining']];

function FooterLinks({ title, links }) {
  return <div><h2 className="mb-5 font-heading text-xs font-bold uppercase tracking-widest text-accent">{title}</h2><ul className="space-y-1 font-body text-sm text-slate-400">{links.map(([label, to]) => <li key={label}><Link to={to} className="inline-flex min-h-11 items-center transition hover:text-white">{label}</Link></li>)}</ul></div>;
}

export default function Footer() {
  const socials = [
    { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn', tone: 'social.linkedin' },
    { icon: <FaTwitter size={18} />, href: 'https://twitter.com', label: 'Twitter', tone: 'social.twitter' },
    { icon: <FaYoutube size={18} />, href: 'https://youtube.com', label: 'YouTube', tone: 'social.youtube' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-primary text-white">
      <div className="pointer-events-none absolute inset-0 cfd-grid opacity-5" />
      <div className="site-container relative z-10 pb-10 pt-16 sm:pb-12 sm:pt-20">
        <div className="mb-12 grid grid-cols-1 gap-10 min-[480px]:grid-cols-2 lg:mb-16 lg:grid-cols-5 lg:gap-8">
          <div className="min-w-0 min-[480px]:col-span-2 lg:pr-8">
            <Link to="/" className="mb-6 flex w-fit items-center gap-3 rounded-lg"><img src="/logo.png" alt="" className="h-10 w-auto" /><div><span className="block font-heading text-base font-black leading-none">FLUIDIMENSIONS</span><span className="mt-1 block text-[9px] font-bold uppercase tracking-widest text-accent">Simulation & Consulting</span></div></Link>
            <p className="mb-6 max-w-sm text-sm leading-6 text-slate-400">High-fidelity engineering simulation and thermodynamic design for safer, more efficient industrial processes.</p>
            <form onSubmit={(event) => event.preventDefault()} className="max-w-sm" aria-label="Newsletter subscription">
              <label htmlFor="newsletter-email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">Simulation insights</label>
              <div className="flex min-w-0"><input id="newsletter-email" type="email" autoComplete="email" required placeholder="you@company.com" className="min-h-12 min-w-0 flex-1 rounded-l-xl border border-white/10 bg-white/5 px-3 text-base text-white focus:border-accent focus:outline-none" /><button type="submit" className="min-h-12 shrink-0 rounded-r-xl bg-accent px-4 font-heading text-xs font-bold transition hover:bg-accent-dark sm:px-5">Join</button></div>
            </form>
          </div>
          <FooterLinks title="Company" links={companyLinks} />
          <FooterLinks title="Services" links={serviceLinks} />
          <FooterLinks title="Industries" links={industryLinks} />
        </div>
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-center sm:flex-row sm:text-left">
          <span className="text-xs leading-5 text-slate-500">© {new Date().getFullYear()} Fluidimensions. All rights reserved.</span>
          <div className="flex gap-3">{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={`Visit Fluidimensions on ${social.label}`} className="transition hover:-translate-y-0.5"><IconBadge tone={social.tone} size="sm">{social.icon}</IconBadge></a>)}</div>
        </div>
      </div>
    </footer>
  );
}
