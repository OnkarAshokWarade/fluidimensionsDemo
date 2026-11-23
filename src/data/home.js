// Homepage copy, taken from the FluiDimensions Homepage Content & Design Blueprint.
// Keep claims factual: do not add metrics, client names or product names without confirmation.
import { industryPages, technologiesPage, cafePage, CONTACT_PATH } from './site';


export const hero = {
  h1: 'Solving Complex Engineering Challenges. Driving Better Performance.',
  tagline: 'Understand. Optimise. Innovate.',
  body: 'FluiDimensions provides integrated engineering consulting and technology-driven solutions to help industries understand complex processes, improve equipment performance and solve challenging engineering problems.',
};

export const capabilitiesSection = {
  heading: 'Engineering Knowledge. Integrated Solutions.',
  intro:
    'Industrial challenges rarely fit within a single discipline. Solving them often requires an understanding of the process, the equipment, the underlying physics and the way the system operates. FluiDimensions brings these perspectives together, combining engineering expertise with simulation, design and advanced technologies to develop practical solutions.',
  cards: [
    { icon: 'IoAnalyticsOutline', tone: 'capability.simulation', title: 'Engineering Simulation', desc: 'CFD, FEA and multiphysics analysis to understand complex flow, thermal, structural and equipment behaviour.', to: '/engineering-simulation/' },
    { icon: 'IoFlaskOutline', tone: 'capability.process', title: 'Chemical Engineering & Process Consulting', desc: 'Process understanding, modelling, troubleshooting and optimisation to support better process and operating decisions.', to: '/chemical-engineering-process-consulting/' },
    { icon: 'IoConstructOutline', tone: 'capability.design', title: 'Engineering Design', desc: 'Engineering design and evaluation to improve equipment performance and support practical design decisions.', to: '/engineering-design/' },
    { icon: 'IoStatsChartOutline', tone: 'capability.data', title: 'Machine Learning & Data Intelligence', desc: 'Data-driven modelling and predictive methods to extract insight from process and engineering data.', to: '/machine-learning-data-intelligence/' },
    { icon: 'IoCodeSlashOutline', tone: 'capability.software', title: 'Software & Automation', desc: 'Custom engineering software, workflow automation and integration to make engineering methods more accessible and efficient.', to: '/software-automation/' },
    { icon: 'IoGitNetworkOutline', tone: 'capability.digital', title: 'Digital Engineering', desc: 'Connecting engineering models, simulation and operational information to support analysis, prediction and better decisions.', to: CONTACT_PATH },
  ],
};

const industryIntros = {
  '/industries/chemical-process/': 'Process and equipment challenges involving flow, heat and mass transfer, combustion, separation and process performance.',
  '/industries/cement/': 'Pyro-process and plant equipment challenges, including cyclones, combustion, calcination, gas distribution and pressure losses.',
  '/industries/pharmaceuticals/': 'Process and reactor engineering challenges involving mixing, scale-up, process consistency and performance prediction.',
  '/industries/oil-gas/': 'Engineering analysis of separation systems, multiphase equipment, combustion, fire scenarios and mechanical performance.',
};

export const industriesSection = {
  heading: 'Engineering Solutions for Demanding Industries',
  intro:
    'Different industries face different process, equipment and performance challenges. Our engineering approach is shaped around the requirements of each application, combining process knowledge, analysis and technology to address the problem that matters to the customer.',
  cards: industryPages.map((page) => ({ ...page, desc: industryIntros[page.path] })),
};

export const approachSection = {
  heading: 'From Engineering Understanding to Practical Solutions',
  intro:
    "We begin by understanding the customer's process, equipment, operating conditions and objectives. We then select the engineering methods and technologies appropriate to the challenge, analyse the system and translate the findings into practical recommendations or deliverables.",
  steps: [
    { n: '01', title: 'Understand the challenge', desc: 'Understand the process, equipment, operating conditions, constraints and desired outcome.' },
    { n: '02', title: 'Apply engineering knowledge', desc: 'Bring together relevant engineering principles, process understanding and suitable analytical methods.' },
    { n: '03', title: 'Analyse and develop solutions', desc: 'Use modelling, simulation, design evaluation and data-driven methods to investigate performance and identify improvement opportunities.' },
    { n: '04', title: 'Translate insight into action', desc: 'Provide engineering recommendations, design inputs, models, tools or other agreed deliverables that support customer decisions.' },
  ],
};

export const experienceSection = {
  heading: 'Engineering Insight Backed by Practical Experience',
  intro:
    'Our work spans challenging flow, thermal, combustion, multiphase and process-engineering applications. We use engineering analysis not simply to produce results, but to understand equipment and process behaviour, investigate root causes and support better engineering decisions.',
  format: [
    ['Challenge', 'The customer or engineering problem.'],
    ['Approach', 'The analysis, modelling or design method used.'],
    ['Insight', 'What the work revealed about process or equipment behaviour.'],
    ['Value', 'The improvement opportunity, design decision or recommendation it supported.'],
  ],
  // TODO(content): add 3-4 approved, anonymised project highlights here:
  // { challenge, approach, insight, value, image, imageAlt, to }
  projects: [],
};

export const technologiesSection = {
  heading: 'The Right Technology, Applied with Engineering Understanding',
  body: [
    'Engineering software and advanced technologies are most valuable when they are applied in the context of a real engineering problem. FluiDimensions works with engineering simulation, process modelling, system simulation, molecular modelling and data-driven technologies, helping customers evaluate, apply and integrate tools into their engineering workflows.',
    'Our support can include software-related consultation, training, proof-of-concept studies, application support and integration, depending on the platform and project requirements.',
  ],
  areas: ['Engineering simulation', 'Process modelling', 'System simulation', 'Molecular modelling', 'Data-driven technologies'],
  cta: 'Explore Engineering Technologies & Software',
  to: technologiesPage.path,
};

export const whySection = {
  heading: 'Engineering Perspective. Practical Outcomes.',
  items: [
    { icon: 'IoLayersOutline', title: 'Integrated engineering expertise', desc: 'We bring together process understanding, engineering principles, simulation and technology to address problems that cross traditional discipline boundaries.' },
    { icon: 'IoExtensionPuzzleOutline', title: 'Complex problem-solving', desc: 'We work on challenging flow, multiphase, combustion, thermal and equipment-related engineering problems.' },
    { icon: 'IoBulbOutline', title: 'Insight beyond the analysis', desc: 'We focus on interpreting engineering results in the context of actual process and equipment behaviour, and translating them into useful recommendations.' },
    { icon: 'IoOptionsOutline', title: 'Technology applied with purpose', desc: 'We select and combine appropriate tools and methods to serve the engineering objective, not the other way around.' },
  ],
};

export const cafeSection = {
  heading: 'Bring a Challenge. Share an Idea. Explore a Solution.',
  body: 'Engineering Café is a place for engineering conversations, technical questions and the exchange of ideas. Whether you are exploring a process challenge, considering a modelling approach or simply interested in discussing an engineering topic, we welcome the conversation.',
  cta: 'Visit Engineering Café',
  to: cafePage.path,
};

export const finalCta = {
  heading: 'Have an Engineering Challenge to Solve?',
  body: 'Whether you need to understand a complex process, investigate equipment performance, evaluate a design or develop a technology-enabled engineering solution, FluiDimensions can work with you to explore the challenge and identify a practical way forward.',
  primary: 'Discuss Your Engineering Challenge',
  secondary: 'Contact FluiDimensions',
};

export const organizationJsonLd = (siteUrl) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'FluiDimensions',
      url: `${siteUrl}/`,
      logo: `${siteUrl}/logo.png`,
      slogan: 'Understand. Optimise. Innovate.',
      description: 'Integrated engineering consulting and technology-driven solutions for industrial process and equipment challenges.',
      // TODO(confirm): add address, email and sameAs profile URLs once confirmed.
    },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`, name: 'FluiDimensions', publisher: { '@id': `${siteUrl}/#organization` } },
  ],
});

