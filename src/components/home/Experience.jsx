import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { experienceSection as content } from '../../data/home';
import { CONTACT_BUSINESS } from '../../data/site';

function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {project.image && <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" />}
      <dl className="space-y-3 p-6 font-body text-sm leading-relaxed text-slate-600">
        {content.format.map(([label]) => (
          <div key={label}>
            <dt className="font-heading text-xs font-bold uppercase tracking-wider text-accent">{label}</dt>
            <dd>{project[label.toLowerCase()]}</dd>
          </div>
        ))}
      </dl>
      {project.to && <Link to={project.to} className="mt-auto px-6 pb-6 font-heading text-xs font-bold text-secondary hover:text-accent">Read more</Link>}
    </article>
  );
}

export default function Experience() {
  const hasProjects = content.projects.length > 0;
  return (
    <section id="experience" aria-labelledby="experience-heading" className="bg-brand-bg py-20 sm:py-24 lg:py-28">
      <div className="site-container">
        <SectionHeading id="experience-heading" title={content.heading} intro={content.intro} />
        {hasProjects ? (
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.projects.map((project) => (
              <li key={project.challenge}><Reveal className="h-full"><ProjectCard project={project} /></Reveal></li>
            ))}
          </ul>
        ) : (
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-2xl border border-dashed border-slate-300 bg-white p-6 sm:p-8">
              <p className="font-body text-sm leading-relaxed text-slate-600">Selected project highlights are being prepared. Each will describe:</p>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                {content.format.map(([label, text]) => (
                  <div key={label}>
                    <dt className="font-heading text-xs font-bold uppercase tracking-wider text-accent">{label}</dt>
                    <dd className="mt-1 font-body text-sm text-slate-600">{text}</dd>
                  </div>
                ))}
              </dl>
              <Link to={CONTACT_BUSINESS} className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-secondary hover:text-accent">
                Discuss an engineering challenge <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
