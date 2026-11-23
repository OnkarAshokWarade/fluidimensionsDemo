import { Link } from 'react-router-dom';
import { HiArrowSmRight } from 'react-icons/hi';
import {
  IoAnalyticsOutline, IoFlaskOutline, IoConstructOutline,
  IoStatsChartOutline, IoCodeSlashOutline, IoGitNetworkOutline,
} from 'react-icons/io5';
import IconBadge from '../IconBadge';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { capabilitiesSection as content } from '../../data/home';

const icons = { IoAnalyticsOutline, IoFlaskOutline, IoConstructOutline, IoStatsChartOutline, IoCodeSlashOutline, IoGitNetworkOutline };

export default function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-heading" className="bg-brand-bg py-20 sm:py-24 lg:py-28">
      <div className="site-container">
        <SectionHeading id="capabilities-heading" title={content.heading} intro={content.intro} />
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {content.cards.map((card, index) => {
            const Icon = icons[card.icon];
            return (
              <li key={card.title}>
                <Reveal delay={index * 0.05} className="h-full">
                  <Link to={card.to} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl sm:p-7">
                    <IconBadge tone={card.tone} size="lg" className="mb-5"><Icon size={26} aria-hidden="true" /></IconBadge>
                    <h3 className="font-heading text-lg font-bold text-primary transition-colors group-hover:text-accent">{card.title}</h3>
                    <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-slate-600">{card.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1 font-heading text-xs font-bold text-secondary transition-colors group-hover:text-accent">
                      Learn more <HiArrowSmRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
