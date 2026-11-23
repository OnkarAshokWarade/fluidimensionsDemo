// Single source of truth for site-wide config, page inventory, SEO metadata and navigation.
// Structure, URLs and homepage copy follow the FluiDimensions SEO Master Blueprint and
// Homepage Content & Design Blueprint. Page-level titles/descriptions other than the
// homepage are DRAFTS (see `stub: true`) pending review and keyword validation.

export const SITE = {
  name: 'FluiDimensions',
  // TODO(confirm): production domain. Override with PUBLIC_SITE_URL at build time.
  url: (import.meta.env?.PUBLIC_SITE_URL || (typeof process !== 'undefined' ? process.env.PUBLIC_SITE_URL : '') || 'https://www.fluidimensions.com').replace(/\/$/, ''),
  tagline: 'Understand. Optimise. Innovate.',
  home: {
    title: 'FluiDimensions | Engineering Consulting & Solutions',
    description:
      'FluiDimensions provides integrated engineering consulting, simulation, process modelling, equipment design and technology-driven solutions for industrial challenges.',
  },
};

export const CONTACT_PATH = '/contact/';

const suffix = ` | ${SITE.name}`;

// Engineering capability pages (the "Engineering" dropdown).
export const capabilityPages = [
  {
    path: '/engineering-simulation/',
    label: 'Engineering Simulation',
    h1: 'Engineering Simulation',
    title: `Engineering Simulation Services: CFD & FEA${suffix}`,
    description:
      'CFD, FEA and multiphysics analysis to understand complex flow, thermal, structural and equipment behaviour in industrial processes.',
    intro:
      'CFD, FEA and multiphysics analysis to understand complex flow, thermal, structural and equipment behaviour.',
    draft: true,
  },
  {
    path: '/machine-learning-data-intelligence/',
    label: 'Machine Learning & Data Intelligence',
    h1: 'Machine Learning & Data Intelligence',
    title: `Industrial Machine Learning & Data Intelligence${suffix}`,
    description:
      'Data-driven modelling and predictive methods that extract insight from industrial process and engineering data.',
    intro: 'Data-driven modelling and predictive methods to extract insight from process and engineering data.',
    draft: true,
  },
  {
    path: '/engineering-design/',
    label: 'Engineering Design',
    h1: 'Engineering Design',
    title: `Engineering Equipment Design & Evaluation${suffix}`,
    description:
      'Engineering design and evaluation to improve equipment performance and support practical design decisions.',
    intro:
      'Engineering design and evaluation to improve equipment performance and support practical design decisions.',
    draft: true,
  },
  {
    path: '/software-automation/',
    label: 'Software & Automation',
    h1: 'Software & Automation',
    title: `Engineering Software Development & Automation${suffix}`,
    description:
      'Custom engineering software, workflow automation and integration that make engineering methods more accessible and efficient.',
    intro:
      'Custom engineering software, workflow automation and integration to make engineering methods more accessible and efficient.',
    draft: true,
  },
  {
    path: '/chemical-engineering-process-consulting/',
    label: 'Chemical Engineering & Process Consulting',
    h1: 'Chemical Engineering & Process Consulting',
    title: `Chemical Engineering & Process Consulting${suffix}`,
    description:
      'Process understanding, modelling, troubleshooting and optimisation to support better process and operating decisions.',
    intro:
      'Process understanding, modelling, troubleshooting and optimisation to support better process and operating decisions.',
    draft: true,
  },
];

export const industryPages = [
  {
    path: '/industries/chemical-process/',
    label: 'Chemical Process',
    h1: 'Chemical Process Industry',
    title: `Chemical Process Engineering Solutions${suffix}`,
    description:
      'Engineering solutions for chemical process and equipment challenges involving flow, heat and mass transfer, combustion, separation and performance.',
    intro:
      'Process and equipment challenges involving flow, heat and mass transfer, combustion, separation and process performance.',
    draft: true,
  },
  {
    path: '/industries/cement/',
    label: 'Cement',
    h1: 'Cement Industry',
    title: `Cement Plant Optimisation & CFD${suffix}`,
    description:
      'Engineering analysis for cement pyro-process and plant equipment, including cyclones, combustion, calcination, gas distribution and pressure losses.',
    intro:
      'Pyro-process and plant equipment challenges, including cyclones, combustion, calcination, gas distribution and pressure losses.',
    draft: true,
  },
  {
    path: '/industries/pharmaceuticals/',
    label: 'Pharmaceuticals',
    h1: 'Pharmaceutical Industry',
    title: `Pharmaceutical Process & Reactor Modelling${suffix}`,
    description:
      'Engineering support for pharmaceutical process and reactor challenges involving mixing, scale-up, process consistency and performance prediction.',
    intro:
      'Process and reactor engineering challenges involving mixing, scale-up, process consistency and performance prediction.',
    draft: true,
  },
  {
    path: '/industries/oil-gas/',
    label: 'Oil & Gas',
    h1: 'Oil & Gas Industry',
    title: `Oil & Gas Engineering Simulation${suffix}`,
    description:
      'Engineering analysis of separation systems, multiphase equipment, combustion, fire scenarios and mechanical performance for oil and gas.',
    intro:
      'Engineering analysis of separation systems, multiphase equipment, combustion, fire scenarios and mechanical performance.',
    draft: true,
  },
];

export const aboutPage = {
  path: '/about-us/',
  label: 'About Us',
  h1: 'About FluiDimensions',
  title: `About Us: Engineering Expertise & Approach${suffix}`,
  description:
    'FluiDimensions is an integrated engineering services and solutions company combining engineering knowledge, process understanding, simulation, design and technology.',
  intro:
    'Our company, engineering philosophy, expertise and partnership approach.',
  draft: true,
};

export const technologiesPage = {
  path: '/engineering-technologies-software/',
  label: 'Engineering Technologies & Software',
  shortLabel: 'Technologies & Software',
  h1: 'Engineering Technologies & Software',
  title: `Engineering Technologies & Software, Siemens and Training${suffix}`,
  description:
    'Engineering software consultation, training, proof-of-concept studies, application support and integration for simulation and process-modelling platforms.',
  intro:
    'Engineering software and advanced technologies are most valuable when applied in the context of a real engineering problem.',
  draft: true,
};

export const cafePage = {
  path: '/engineering-cafe/',
  label: 'Engineering Café',
  h1: 'Engineering Café',
  title: `Engineering Café: Technical Conversations${suffix}`,
  description:
    'A space for engineering conversations, technical questions and the exchange of ideas on process, modelling and equipment challenges.',
  intro:
    'A place for engineering conversations, technical questions and the exchange of ideas.',
  draft: true,
};

export const contactPage = {
  path: CONTACT_PATH,
  label: 'Contact',
  h1: 'Contact FluiDimensions',
  title: `Contact Us: Engineering Enquiries & Training${suffix}`,
  description:
    'Contact FluiDimensions for business and engineering enquiries, software and training enquiries, careers or general questions.',
  intro:
    'Business and engineering enquiries, training enquiries, careers and general enquiries.',
  draft: true,
};

// Every page rendered by the generic content template (the homepage is separate).
export const contentPages = [
  aboutPage,
  ...capabilityPages,
  technologiesPage,
  ...industryPages,
  cafePage,
  contactPage,
];

// Header navigation. `children` items render as a dropdown.
export const NAV = [
  { label: 'Home', to: '/' },
  { label: aboutPage.label, to: aboutPage.path },
  { label: 'Engineering', children: capabilityPages },
  { label: technologiesPage.label, shortLabel: technologiesPage.shortLabel, to: technologiesPage.path },
  { label: 'Industries', children: industryPages },
  { label: cafePage.label, to: cafePage.path },
];

export const NAV_CTA = { label: 'Contact', to: CONTACT_PATH };

export function pageByPath(path) {
  return contentPages.find((page) => page.path === path);
}

// Primary enquiry destination used by the hero and final CTA (Contact -> Business & Engineering Enquiries).
export const CONTACT_BUSINESS = `${CONTACT_PATH}#business-enquiries`;
