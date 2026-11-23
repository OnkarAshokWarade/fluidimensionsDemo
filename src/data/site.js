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
  },
  {
    path: '/machine-learning-data-intelligence/',
    label: 'Machine Learning & Data Intelligence',
    h1: 'Machine Learning & Data Intelligence',
    title: `Industrial Machine Learning & Data Intelligence${suffix}`,
    description:
      'Data-driven modelling and predictive methods that extract insight from industrial process and engineering data.',
    intro: 'Data-driven modelling and predictive methods to extract insight from process and engineering data.',
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
  },
];

export const industryPages = [
  {
    path: '/industries/chemical-process/',
    label: 'Chemical & Process',
    h1: 'Chemical & Process Industry',
    title: `Chemical Process Engineering Solutions${suffix}`,
    description:
      'Engineering solutions for chemical and process industries: process and equipment design, performance improvement, quality and digital twins.',
    intro: 'Engineering Better Processes. Driving Performance.',
  },
  {
    path: '/industries/pharmaceuticals/',
    label: 'Pharmaceuticals',
    h1: 'Pharmaceutical Industry',
    title: `Pharmaceutical Process & Reactor Modelling${suffix}`,
    description:
      'Reactor and bioreactor engineering, scale-up, crystallisation, process modelling and performance prediction for pharmaceutical manufacturing.',
    intro: 'Improving Process Understanding. Enabling Better Manufacturing Decisions.',
  },
  {
    path: '/industries/cement/',
    label: 'Cement',
    h1: 'Cement Industry',
    title: `Cement Plant Optimisation & Engineering${suffix}`,
    description:
      'Pyro-process optimisation, combustion and emissions, cyclone, ESP and bag-filter improvement, duct networks and engineering software for cement plants.',
    intro: 'Improving Plant Performance. Reducing Energy Consumption and Emissions.',
  },
  {
    path: '/industries/steel-metals/',
    label: 'Steel & Metals',
    h1: 'Steel & Metals Industry',
    title: `Steel & Metals Engineering Solutions${suffix}`,
    description:
      'Engineering solutions for steel and metals: thermal process optimisation, furnaces, process monitoring and operating performance.',
    intro: 'Engineering Smarter Production. Strengthening Performance.',
  },
  {
    path: '/industries/oil-gas/',
    label: 'Oil & Gas',
    h1: 'Oil & Gas Industry',
    title: `Oil & Gas Engineering Simulation${suffix}`,
    description:
      'Separators, tank mixing, multiphase equipment, combustion, fire modelling and structural analysis for oil and gas facilities.',
    intro: 'Understanding Complex Engineering Challenges. Improving Equipment and Process Performance.',
  },
  {
    path: '/industries/automotive/',
    label: 'Automotive',
    h1: 'Automotive Industry',
    title: `Automotive Engineering Solutions${suffix}`,
    description:
      'Engineering analysis for automotive product performance, thermal management, sprays and combustion.',
    intro: 'Engineering Innovation. Advancing Product Performance.',
  },
  {
    path: '/industries/aerospace/',
    label: 'Aerospace',
    h1: 'Aerospace Industry',
    title: `Aerospace Engineering Solutions${suffix}`,
    description:
      'Engineering analysis for aerospace performance and reliability, from fuel systems to thermal and structural behaviour.',
    intro: 'Engineering Precision. Advancing Performance & Reliability.',
  },
  {
    path: '/industries/marine/',
    label: 'Marine',
    h1: 'Marine Industry',
    title: `Marine Engineering Solutions${suffix}`,
    description:
      'Engineering analysis for vessel and marine equipment performance, including hydrodynamics and thermal systems.',
    intro: 'Advancing Marine Engineering. Enhancing Vessel Performance.',
  },
  {
    path: '/industries/food-beverage/',
    label: 'Food & Beverage',
    h1: 'Food & Beverage Industry',
    title: `Food & Beverage Engineering Solutions${suffix}`,
    description:
      'Process optimisation, mixing, thermal processing and quality consistency for food and beverage production.',
    intro: 'Improving Production Efficiency. Ensuring Product Consistency.',
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
};

export const cafePage = {
  path: '/engineering-cafe/',
  label: 'Engineering Cafe',
  h1: 'Engineering Cafe',
  title: `Engineering Cafe: Technical Conversations${suffix}`,
  description:
    'A space for engineering conversations, technical questions and the exchange of ideas on process, modelling and equipment challenges.',
  intro:
    'A place for engineering conversations, technical questions and the exchange of ideas.',
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
};

export const privacyPage = {
  path: '/privacy-policy/',
  label: 'Privacy Policy',
  h1: 'Privacy Policy',
  title: `Privacy Policy${suffix}`,
  description: 'How FluiDimensions collects, uses and protects the personal information you share through this website.',
  intro: 'How we handle the personal information you share with us through this website.',
};

// Every page rendered by the generic content template (the homepage is separate).
export const contentPages = [
  aboutPage,
  ...capabilityPages,
  technologiesPage,
  ...industryPages,
  cafePage,
  contactPage,
  privacyPage,
];

// Header navigation. `children` items render as a dropdown.
export const NAV = [
  { label: 'Home', to: '/' },
  { label: aboutPage.label, to: aboutPage.path },
  { label: 'Engineering', children: capabilityPages },
  { label: technologiesPage.label, shortLabel: technologiesPage.shortLabel, to: technologiesPage.path },
  { label: 'Industries', children: industryPages },
  { label: cafePage.label, to: cafePage.path },
  { label: 'Blog', to: '/blog/' },
];

export const NAV_CTA = { label: 'Contact', to: CONTACT_PATH };

export function pageByPath(path) {
  return contentPages.find((page) => page.path === path);
}

// Primary enquiry destination used by the hero and final CTA (Contact -> Business & Engineering Enquiries).
export const CONTACT_BUSINESS = `${CONTACT_PATH}#business-enquiries`;
