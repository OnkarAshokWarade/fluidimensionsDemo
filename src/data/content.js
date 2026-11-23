// DRAFT page content for the capability and industry pages (Phase 3).
// Written to stay within the blueprint's credibility rules: it describes what FluiDimensions
// can offer (established / developing capabilities) and does NOT claim specific projects,
// clients, results or products. Every page is flagged `draft` in site.js and kept out of
// search indexes until reviewed; see docs/content-review-checklist.md.

const L = {
  simulation: { to: '/engineering-simulation/', label: 'Engineering Simulation' },
  ml: { to: '/machine-learning-data-intelligence/', label: 'Machine Learning & Data Intelligence' },
  design: { to: '/engineering-design/', label: 'Engineering Design' },
  software: { to: '/software-automation/', label: 'Software & Automation' },
  process: { to: '/chemical-engineering-process-consulting/', label: 'Chemical Engineering & Process Consulting' },
  tech: { to: '/engineering-technologies-software/', label: 'Engineering Technologies & Software' },
  chemical: { to: '/industries/chemical-process/', label: 'Chemical Process' },
  cement: { to: '/industries/cement/', label: 'Cement' },
  pharma: { to: '/industries/pharmaceuticals/', label: 'Pharmaceuticals' },
  oilGas: { to: '/industries/oil-gas/', label: 'Oil & Gas' },
};

const link = (key, why) => ({ ...L[key], why });

export const pageContent = {
  '/engineering-simulation/': {
    level: 'established',
    focusHeading: 'What we analyse',
    focus: [
      { title: 'Flow and multiphase behaviour', text: 'Velocity, pressure and phase distribution in equipment such as cyclones, separators, reactors and ducts.' },
      { title: 'Heat transfer and combustion', text: 'Temperature fields, heat exchange and combustion behaviour in furnaces, kilns and process equipment.' },
      { title: 'Structural and mechanical response', text: 'FEA to assess stress, deformation and mechanical performance of components and supports.' },
      { title: 'Coupled physics', text: 'Multiphysics studies where flow, thermal and structural effects interact.' },
    ],
    questions: [
      'Where are pressure losses occurring, and can they be reduced?',
      'Is flow or gas-solid distribution even across the equipment?',
      'Where are the thermal or mechanical hot spots?',
      'How would a proposed design change affect performance?',
    ],
    deliverables: [
      'Simulation models with documented set-up and assumptions',
      'Results visualisations: contours, vectors and plots',
      'Engineering interpretation and recommendations',
      'Comparison or parametric study summaries',
    ],
    links: [
      link('design', 'Simulation results feed design evaluation and option comparison.'),
      link('software', 'Repeated analyses can be automated into reusable workflows.'),
      link('cement', 'Cyclone, combustion and gas-distribution analysis in cement plants.'),
      link('oilGas', 'Separation and multiphase equipment analysis.'),
    ],
  },

  '/machine-learning-data-intelligence/': {
    level: 'developing',
    levelNote: 'This is an area we are developing. The page describes approaches we can apply, not deployed products.',
    focusHeading: 'Where data-driven methods can help',
    focus: [
      { title: 'Predictive modelling', text: 'Models that relate operating conditions to process or equipment performance, built from process and engineering data.' },
      { title: 'Reduced-order and surrogate models', text: 'Fast approximations of detailed simulations to support design exploration and decisions.' },
      { title: 'Insight from engineering data', text: 'Structuring, exploring and interpreting process and simulation data to find what influences performance.' },
    ],
    questions: [
      'What does our process data tell us about performance?',
      'Can a detailed simulation be approximated quickly enough for design exploration?',
      'Which variables influence the outcome most?',
    ],
    deliverables: [
      'Assessment of available data and a recommended approach',
      'Prototype models with documented assumptions',
      'Clear statement of validity range and limitations',
    ],
    links: [
      link('simulation', 'Simulation can generate the data that reduced-order models learn from.'),
      link('software', 'Models can be packaged into usable engineering tools.'),
      link('process', 'Process understanding guides which data and variables matter.'),
    ],
  },

  '/engineering-design/': {
    level: 'established',
    focusHeading: 'How we support design decisions',
    focus: [
      { title: 'Performance evaluation', text: 'Assessing how existing or proposed equipment behaves against its objectives.' },
      { title: 'Design comparison', text: 'Comparing options on a consistent engineering basis to support selection.' },
      { title: 'Sizing and configuration support', text: 'Engineering input to equipment sizing and layout at concept and detail stages.' },
      { title: 'Design inputs', text: 'Quantified results and recommendations ready for use by your design teams.' },
    ],
    questions: [
      'Does this equipment meet its performance objectives?',
      'Which of several design options performs best?',
      'What should change to improve efficiency or reduce losses?',
    ],
    deliverables: [
      'Design evaluations and option comparisons',
      'Recommended changes with the engineering rationale',
      'Design inputs and supporting analysis',
    ],
    links: [
      link('simulation', 'CFD and FEA provide the analysis behind design evaluation.'),
      link('software', 'Repetitive design calculations can be automated into design tools.'),
      link('cement', 'Equipment such as cyclones is a typical design focus in cement plants.'),
    ],
  },

  '/software-automation/': {
    level: 'established',
    focusHeading: 'What we build',
    focus: [
      { title: 'Custom engineering tools', text: 'Software that puts an engineering method in the hands of the people who need it.' },
      { title: 'Workflow automation', text: 'Automating repeated modelling, post-processing and reporting steps.' },
      { title: 'Integration', text: 'Connecting models, simulation tools and data sources into one workflow.' },
      { title: 'Accessible interfaces', text: 'Making specialist methods usable without specialist set-up each time.' },
    ],
    questions: [
      'Which repeated engineering steps could be automated?',
      'How can a validated method be reused across projects or teams?',
      'How can simulation results and process data be brought together?',
    ],
    deliverables: [
      'Working tools or scripts with documentation',
      'Automated workflows for recurring analyses',
      'Handover and usage guidance',
    ],
    links: [
      link('simulation', 'Automation turns repeatable simulation set-ups into workflows.'),
      link('design', 'Design calculations such as equipment sizing can become design tools.'),
      link('tech', 'Where specific software platforms are involved, see the technologies page.'),
      link('cement', 'For example, automated cyclone design workflows for plant equipment.'),
    ],
  },

  '/chemical-engineering-process-consulting/': {
    level: 'established',
    focusHeading: 'How we help',
    focus: [
      { title: 'Process understanding and modelling', text: 'Building a clear picture of how a process behaves and what governs its performance.' },
      { title: 'Troubleshooting', text: 'Investigating root causes of poor or unstable process and equipment performance.' },
      { title: 'Optimisation', text: 'Identifying improvement opportunities in operating conditions and equipment.' },
      { title: 'Scale-up and equipment performance', text: 'Engineering input when moving between scales or changing equipment.' },
    ],
    questions: [
      'Why is the process not performing as expected?',
      'What limits throughput, yield or efficiency?',
      'What changes would improve operation with acceptable risk?',
    ],
    deliverables: [
      'Process assessment and findings',
      'Models supporting operating or design decisions',
      'Prioritised engineering recommendations',
    ],
    links: [
      link('simulation', 'Detailed simulation of flow, heat and reaction in key equipment.'),
      link('ml', 'Data-driven methods can complement process understanding.'),
      link('chemical', 'Chemical process industry challenges.'),
      link('pharma', 'Mixing, scale-up and reactor challenges in pharmaceuticals.'),
    ],
  },

  '/industries/chemical-process/': {
    level: 'transferable',
    focusHeading: 'Challenges we address',
    focus: [
      { title: 'Flow and mixing', text: 'Distribution, mixing and residence behaviour in vessels, reactors and piping.' },
      { title: 'Heat and mass transfer', text: 'Thermal performance and transfer limitations in process equipment.' },
      { title: 'Combustion', text: 'Burner, furnace and heater behaviour and performance.' },
      { title: 'Separation', text: 'Performance of separation and contacting equipment.' },
    ],
    deliverables: ['Analysis of the equipment or process question', 'Engineering findings and recommendations', 'Models or tools agreed with you'],
    links: [
      link('process', 'Process understanding, troubleshooting and optimisation.'),
      link('simulation', 'CFD for flow, heat transfer, combustion and separation.'),
      link('design', 'Evaluating and improving equipment design.'),
    ],
  },

  '/industries/cement/': {
    level: 'transferable',
    focusHeading: 'Challenges we address',
    focus: [
      { title: 'Cyclones and gas-solid separation', text: 'Pressure loss and separation behaviour in preheater and process cyclones.' },
      { title: 'Combustion in kilns and calciners', text: 'Flame, temperature and mixing behaviour in the pyro-process.' },
      { title: 'Calcination', text: 'Reaction and heat-transfer behaviour in calcining equipment.' },
      { title: 'Gas distribution and pressure losses', text: 'Flow uniformity and loss sources across ducts and equipment.' },
    ],
    deliverables: ['Equipment-level analysis with visualised results', 'Pressure-loss and distribution findings', 'Recommendations for design or operating changes'],
    links: [
      link('simulation', 'CFD and multiphase flow analysis of plant equipment.'),
      link('software', 'Automated cyclone design workflows, where repeated design evaluation is needed.'),
      link('design', 'Design evaluation of cyclones and related equipment.'),
      link('tech', 'Where a specific software platform adds context.'),
    ],
  },

  '/industries/pharmaceuticals/': {
    level: 'transferable',
    focusHeading: 'Challenges we address',
    focus: [
      { title: 'Mixing and reactor behaviour', text: 'Mixing quality and flow patterns in stirred vessels and reactors.' },
      { title: 'Scale-up', text: 'Understanding how behaviour changes between lab, pilot and production scale.' },
      { title: 'Process consistency', text: 'Identifying sources of variability in process performance.' },
      { title: 'Performance prediction', text: 'Models that predict reactor and process performance for decision support.' },
    ],
    deliverables: ['Analysis of mixing or reactor behaviour', 'Scale-up and consistency findings', 'Models supporting process decisions'],
    links: [
      link('process', 'Process modelling and scale-up support.'),
      link('simulation', 'CFD of mixing and reactor flow.'),
      link('ml', 'Reduced-order models for faster performance prediction (a developing area).'),
    ],
  },

  '/industries/oil-gas/': {
    level: 'transferable',
    focusHeading: 'Challenges we address',
    focus: [
      { title: 'Separation systems', text: 'Flow and separation behaviour in separators and related equipment.' },
      { title: 'Multiphase equipment', text: 'Gas-liquid and liquid-liquid behaviour in process and piping systems.' },
      { title: 'Combustion and fire scenarios', text: 'Analysis of combustion equipment and fire or thermal-exposure cases.' },
      { title: 'Mechanical performance', text: 'Structural assessment of equipment and supports.' },
    ],
    deliverables: ['Equipment or scenario analysis', 'Findings on performance and risk drivers', 'Engineering recommendations'],
    links: [
      link('simulation', 'CFD and FEA for multiphase, combustion and structural questions.'),
      link('design', 'Design evaluation of separation and process equipment.'),
    ],
  },
};

export const levelLabels = {
  established: 'Established capability',
  developing: 'Developing capability',
  transferable: 'Transferable engineering expertise',
};

export const levelNotes = {
  transferable: 'Applications on this page describe how our engineering methods apply to this sector. Specific project examples will be added as they are approved for publication.',
};
