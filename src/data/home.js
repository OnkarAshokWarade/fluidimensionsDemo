// Homepage copy, drawn from the FluiDimensions company document (websitecentral_aboutus_vision.docx)
// and the Homepage Content & Design Blueprint. Keep claims factual; confirm project details before publishing.
import { industryPages, technologiesPage, cafePage, CONTACT_PATH } from './site';
import { APPROACH, PROOF, VALUES } from './doc';

export const hero = {
  eyebrow: 'Your engineering solutions & digital innovation partner',
  h1: 'Solving Complex Engineering Challenges. Driving Better Performance.',
  tagline: 'Understand. Optimise. Innovate.',
  body: 'We combine engineering consultancy, advanced modelling and simulation, machine learning and digital technologies to solve complex technical challenges and deliver practical engineering solutions across industries.',
};

export const capabilitiesSection = {
  heading: 'Engineering Knowledge. Integrated Solutions.',
  intro:
    'Our capabilities are not isolated services. We combine them as appropriate to address the engineering problem as a whole, from understanding the process to delivering a practical solution.',
  cards: [
    { icon: 'ion:analytics-outline', tone: 'capability.simulation', title: 'Engineering Simulation', desc: 'CFD, FEA, multiphase flow, combustion, heat and mass transfer and other specialisations, applied to understand and improve equipment performance.', to: '/engineering-simulation/' },
    { icon: 'ion:flask-outline', tone: 'capability.process', title: 'Chemical Engineering & Process Consulting', desc: 'Process troubleshooting, root-cause analysis, optimisation and engineering consulting for process industries.', to: '/chemical-engineering-process-consulting/' },
    { icon: 'ion:construct-outline', tone: 'capability.design', title: 'Engineering Design', desc: 'Process and equipment design, design evaluation and simulation-led optimisation.', to: '/engineering-design/' },
    { icon: 'ion:stats-chart-outline', tone: 'capability.data', title: 'Machine Learning & Data Intelligence', desc: 'Predictive modelling, soft sensors, process monitoring and the integration of physics and data.', to: '/machine-learning-data-intelligence/' },
    { icon: 'ion:code-slash-outline', tone: 'capability.software', title: 'Software & Automation', desc: 'Custom engineering applications, automated simulation workflows and integrated engineering solutions.', to: '/software-automation/' },
    { icon: 'ion:git-network-outline', tone: 'capability.digital', title: 'Digital Engineering', desc: 'Digital twins and integrated models that connect simulation, process models and operational data.', to: '/software-automation/' },
  ],
};

export const industriesSection = {
  heading: 'Engineering Solutions for Demanding Industries',
  intro:
    'Every industry has its own operating environment, technical priorities and performance requirements. Our approach is centred on understanding each application rather than offering standardised solutions.',
  cards: industryPages.map((page) => ({ path: page.path, label: page.label, desc: page.intro })),
};

export const approachSection = {
  heading: 'From Engineering Understanding to Practical Solutions',
  intro:
    'We stay engaged from the first question to the explanation of results and the decisions they support.',
  steps: APPROACH.map(([title, desc], index) => ({ n: String(index + 1).padStart(2, '0'), title, desc })),
};

export const experienceSection = {
  heading: 'Engineering Insight Backed by Practical Experience',
  intro:
    'Examples across industries and capabilities. Our work spans flow, thermal, combustion, multiphase and process-engineering applications, supported by engineering analysis that explains equipment and process behaviour.',
  projects: PROOF.map((p) => ({ ...p, to: { cement: '/industries/cement/', pharma: '/industries/pharmaceuticals/', 'oil-gas': '/industries/oil-gas/', software: '/software-automation/' }[p.to] })),
};

export const technologiesSection = {
  heading: 'The Right Technology, Applied with Engineering Understanding',
  body: [
    'As a Siemens software channel partner, we help organisations explore and adopt engineering software across CFD, FEA, molecular modelling, process modelling, system simulation and design engineering.',
    'Our support includes software licensing enquiries, technical training, proof-of-concept studies, application support and technology integration.',
  ],
  areas: ['CFD & FEA', 'Process modelling', 'System simulation', 'Molecular modelling', 'Machine learning', 'Custom software'],
  cta: 'Explore Engineering Technologies & Software',
  to: technologiesPage.path,
};

export const visionSection = {
  quote: 'Engineering expertise, combined with digital innovation and the right technologies, can help businesses solve complex challenges, make better decisions and continuously improve.',
  vision:
    'Our vision is to be the engineering solutions partner of choice for organisations striving to drive engineering and digital innovation, improve effectiveness, enhance efficiency and achieve sustainable performance.',
  leader: {
    heading: 'Over 25 years across industry, research and technology development',
    body: 'FluiDimensions is led by a chemical engineering professional with a Ph.D. and postdoctoral research experience, with senior technical and managerial roles at UOP India and Aditya Birla Science and Technology Centre.',
  },
};

export const valuesSection = {
  heading: 'Passion. Integrity. Commitment.',
  items: VALUES.map(([title, subtitle, text]) => ({ title, subtitle, text })),
};

export const cafeSection = {
  heading: 'Bring a Challenge. Share an Idea. Explore a Solution.',
  body: 'Engineering Cafe is an open, informal space for technical conversations, exchange of ideas and exploration of engineering possibilities. You do not need a fully defined project.',
  cta: 'Visit Engineering Cafe',
  to: cafePage.path,
};

export const finalCta = {
  heading: 'Have an Engineering Challenge to Solve?',
  body: 'Whether you need to understand a complex process, investigate equipment performance, evaluate a design or develop a technology-enabled engineering solution, FluiDimensions can work with you to find a practical way forward.',
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
      description: 'Engineering solutions and digital innovation partner for industrial process and equipment challenges.',
      // TODO(confirm): add address, email and sameAs profile URLs once confirmed.
    },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`, name: 'FluiDimensions', publisher: { '@id': `${siteUrl}/#organization` } },
  ],
});

export { CONTACT_PATH };
