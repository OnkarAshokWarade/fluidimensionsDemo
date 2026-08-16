import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoCheckmarkCircleOutline,
  IoFlashOutline,
  IoLayersOutline,
  IoShieldCheckmarkOutline,
} from 'react-icons/io5';
import NavbarLight from './NavbarLight';
import Footer from './Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function cleanOverview(text) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .filter((paragraph) => !paragraph.trim().startsWith('Key capabilities:'))
    .filter((paragraph) => !paragraph.trim().startsWith('•'))
    .slice(0, 3);
}

export default function DetailPageLayout({
  item,
  items,
  iconMap,
  type,
  basePath,
  sectionHash,
  colorKey,
  technicalPoints,
  backgroundImage,
}) {
  const [activeTab, setActiveTab] = useState('overview');
  const relatedItems = items.filter((entry) => entry.id !== item.id).slice(0, 4);
  const Icon = iconMap[item.icon];
  const gradient = item[colorKey];
  useEffect(() => {
    setActiveTab('overview');
  }, [item.id]);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'benefits', label: 'Business impact' },
    { id: 'technical', label: 'Technical approach' },
  ];

  const handleTabKeyDown = (event, index) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;
    setActiveTab(tabs[nextIndex].id);
    event.currentTarget.parentElement.children[nextIndex]?.focus();
  };

  return (
    <div className="min-h-screen bg-brand-bg text-primary">
      <NavbarLight />

      <main>
        <section className="relative overflow-hidden bg-primary pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28 text-white">
          {backgroundImage && <img src={backgroundImage} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />}
          {backgroundImage && <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(4,18,39,.97)_0%,rgba(4,18,39,.84)_42%,rgba(4,18,39,.48)_100%)]" />}
          {backgroundImage && <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(249,115,22,.20),transparent_30%),linear-gradient(0deg,rgba(4,18,39,.38),transparent_45%)]" />}
          <div className="absolute inset-0 cfd-grid opacity-10" />
          <motion.div
            className={`absolute -right-24 top-16 h-80 w-80 rounded-full bg-gradient-to-br ${gradient} opacity-30 blur-[100px] sm:h-[30rem] sm:w-[30rem]`}
            animate={{ scale: [1, 1.12, 1], x: [0, -20, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-xs text-white/55 sm:text-sm">
              <Link to="/" className="transition hover:text-white">Home</Link>
              <span>/</span>
              <Link to={`/${sectionHash}`} className="transition hover:text-white">{type === 'Service' ? 'Services' : 'Industries'}</Link>
              <span>/</span>
              <span className="text-white">{item.title}</span>
            </nav>

            <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }} className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-4xl">
                <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="mb-6 flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-xl sm:h-16 sm:w-16`}>
                    <Icon size={30} aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent">{type} expertise</span>
                </motion.div>
                <motion.h1 variants={fadeUp} transition={{ duration: 0.55 }} className="font-heading text-4xl font-black leading-[1.08] sm:text-5xl lg:text-7xl">
                  {item.title}
                </motion.h1>
                <motion.p variants={fadeUp} transition={{ duration: 0.55 }} className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
                  {item.shortDesc}
                </motion.p>
              </div>

              <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur sm:gap-3 sm:p-4 lg:w-[25rem]">
                {[
                  ['Validated', 'Models'],
                  ['Actionable', 'Insights'],
                  ['Scalable', 'Results'],
                ].map(([value, label]) => (
                  <div key={value} className="rounded-xl bg-white/[0.06] px-2 py-4 text-center">
                    <strong className="block font-heading text-xs text-white sm:text-sm">{value}</strong>
                    <span className="mt-1 block text-[10px] uppercase tracking-wider text-white/45">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="relative z-20 -mt-6 pb-20 sm:-mt-8 sm:pb-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid min-w-0 gap-7 lg:grid-cols-[minmax(0,1fr)_22rem] xl:gap-10">
              <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="min-w-0 overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-xl shadow-slate-900/5">
                <div className="overflow-x-auto border-b border-slate-100 px-4 sm:px-8">
                  <div className="flex min-w-max gap-2" role="tablist" aria-label={`${type} information`}>
                    {tabs.map((tab, index) => (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={activeTab === tab.id}
                        tabIndex={activeTab === tab.id ? 0 : -1}
                        onKeyDown={(event) => handleTabKeyDown(event, index)}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative px-3 py-5 font-heading text-xs font-semibold transition sm:px-5 sm:text-sm ${activeTab === tab.id ? 'text-accent' : 'text-slate-400 hover:text-primary'}`}
                      >
                        {tab.label}
                        {activeTab === tab.id && <motion.span layoutId="detail-tab" className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-accent" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="min-h-[25rem] p-6 sm:p-9 lg:p-12">
                  <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                      {activeTab === 'overview' && (
                        <div>
                          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent">How we help</p>
                          <h2 className="font-heading text-2xl font-black sm:text-3xl">Engineering clarity for complex decisions</h2>
                          <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
                            {cleanOverview(item.fullDesc).map((paragraph) => <p key={paragraph}>{paragraph.trim()}</p>)}
                          </div>
                        </div>
                      )}

                      {activeTab === 'benefits' && (
                        <div>
                          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent">Measurable value</p>
                          <h2 className="font-heading text-2xl font-black sm:text-3xl">Built around your business outcomes</h2>
                          <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {item.benefits.map((benefit, index) => (
                              <motion.div key={benefit} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                                <IoCheckmarkCircleOutline className="mt-0.5 shrink-0 text-xl text-emerald-500" />
                                <span className="text-sm font-semibold leading-6 text-slate-700">{benefit}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeTab === 'technical' && (
                        <div>
                          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent">Simulation workflow</p>
                          <h2 className="font-heading text-2xl font-black sm:text-3xl">Rigorous from model to recommendation</h2>
                          <div className="mt-8 space-y-3">
                            {technicalPoints.map((point, index) => (
                              <motion.div key={point} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }} className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 sm:p-5">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary font-heading text-xs font-bold text-white">0{index + 1}</span>
                                <span className="text-sm font-medium text-slate-700 sm:text-base">{point}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.article>

              <aside className="space-y-6 lg:pt-8">
                <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl bg-primary p-6 text-white shadow-xl sm:p-8 lg:sticky lg:top-28">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Start a conversation</span>
                  <h2 className="mt-3 font-heading text-2xl font-black">Have a similar engineering challenge?</h2>
                  <p className="mt-4 text-sm leading-6 text-white/65">Share your operating conditions and objectives. Our team will help define a practical simulation scope.</p>
                  <Link to="/#contact" className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 font-heading text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent-dark">
                    Request consultation <IoArrowForwardOutline />
                  </Link>
                  <div className="mt-7 grid gap-3 border-t border-white/10 pt-6 text-xs text-white/65">
                    <span className="flex items-center gap-2"><IoShieldCheckmarkOutline className="text-accent" /> Confidential project review</span>
                    <span className="flex items-center gap-2"><IoLayersOutline className="text-accent" /> Physics-led scope definition</span>
                    <span className="flex items-center gap-2"><IoFlashOutline className="text-accent" /> Clear deliverables and timeline</span>
                  </div>
                </motion.div>
              </aside>
            </div>

            <section className="mt-20 sm:mt-28">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Explore more</span>
                  <h2 className="mt-2 font-heading text-2xl font-black sm:text-3xl">Related {type === 'Service' ? 'services' : 'industries'}</h2>
                </div>
                <Link to={`/${sectionHash}`} className="hidden items-center gap-2 text-sm font-semibold text-secondary hover:text-accent sm:flex">View all <IoArrowForwardOutline /></Link>
              </div>
              <div className="hide-scrollbar -mx-4 mt-8 grid snap-x snap-mandatory grid-flow-col auto-cols-[82%] gap-4 overflow-x-auto px-4 pb-4 min-[480px]:auto-cols-[58%] sm:mx-0 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
                {relatedItems.map((related) => {
                  const RelatedIcon = iconMap[related.icon];
                  return (
                    <Link key={related.id} to={`${basePath}/${related.id}`} className="group min-w-0 snap-start rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${related[colorKey]} text-white`}><RelatedIcon size={21} /></div>
                      <h3 className="mt-5 font-heading text-sm font-bold group-hover:text-accent">{related.title}</h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">{related.shortDesc}</p>
                    </Link>
                  );
                })}
              </div>
              <p className="mt-3 text-center text-[11px] text-slate-400 sm:hidden">Swipe to explore {type === 'Service' ? 'services' : 'industries'}</p>
            </section>

            <Link to={`/${sectionHash}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-accent"><IoArrowBackOutline /> Back to all {sectionHash}</Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
