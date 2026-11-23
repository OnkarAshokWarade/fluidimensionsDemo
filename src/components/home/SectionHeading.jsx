export default function SectionHeading({ id, eyebrow, title, intro, align = 'center', dark = false }) {
  const centered = align === 'center';
  return (
    <div className={`mb-12 max-w-3xl sm:mb-14 ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <span className="text-sm font-bold uppercase tracking-widest text-accent">{eyebrow}</span>}
      <h2 id={id} className={`mt-2 font-heading text-[clamp(1.75rem,5vw,2.75rem)] font-black leading-tight ${dark ? 'text-white' : 'text-primary'}`}>{title}</h2>
      {intro && <p className={`mt-4 font-body text-base leading-relaxed ${dark ? 'text-gray-300' : 'text-slate-600'}`}>{intro}</p>}
    </div>
  );
}
