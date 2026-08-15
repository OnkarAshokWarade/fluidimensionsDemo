export const servicesData = [
  {
    id: 'cfd-analysis',
    title: 'CFD Analysis',
    icon: 'IoAnalyticsOutline',
    color: 'from-blue-500 to-sky-400',
    shortDesc: 'Numerical simulation of fluid flow patterns, velocity distributions, and vortex shedding for complex geometry profiles.',
    fullDesc: `
      Our CFD Analysis service provides deep insights into fluid behaviour using advanced numerical methods. We model laminar, turbulent, and transitional flows to predict pressure drops, heat transfer coefficients, and mixing efficiencies. We utilise state‑of‑the‑art solvers (ANSYS Fluent, OpenFOAM, COMSOL) with custom meshing strategies to capture boundary layer effects and wake regions.
      
      Key capabilities:
      • Steady-state and transient simulations
      • Multi-phase and reacting flows
      • Conjugate heat transfer
      • Aeroacoustics and fluid‑structure interaction
      • Validation against experimental data
      
      Our team delivers comprehensive reports with visualisations, animations, and actionable recommendations to optimise your designs.
    `,
    benefits: [
      'Reduced prototyping costs',
      'Faster time‑to‑market',
      'Improved performance and efficiency',
      'Risk mitigation through virtual testing',
    ],
    applications: [
      'Chemical reactors',
      'Heat exchangers',
      'Turbomachinery',
      'Aerospace components',
      'Automotive aerodynamics',
    ],
  },
  {
    id: 'cfd-modeling',
    title: 'CFD Modeling',
    icon: 'IoCubeOutline',
    color: 'from-accent to-amber-500',
    shortDesc: 'Creation of high-fidelity mathematical representations for multi-phase interfaces, granular phases, and boundary flow fields.',
    fullDesc: `
      CFD Modeling is the foundation of our simulation work. We build high‑fidelity mathematical models that accurately represent your physical system. Our experts handle complex multi‑phase flows, granular materials, non‑Newtonian fluids, and porous media with precision.
      
      We use advanced meshing techniques (structured, unstructured, hybrid) and custom boundary conditions to ensure your model captures the essential physics. Our models are validated against experimental data to guarantee reliability.
      
      Key capabilities:
      • Multi‑phase flow (Eulerian‑Eulerian, Eulerian‑Lagrangian)
      • DEM‑CFD coupling for granular flows
      • Porous media and packed beds
      • Non‑Newtonian rheology
      • Custom UDFs and user‑defined scalars
      
      We deliver models that are ready for parametric studies and optimisation.
    `,
    benefits: [
      'Accurate representation of complex physics',
      'Reduced experimental testing',
      'Predictive capabilities for scale‑up',
    ],
    applications: [
      'Fluidised beds',
      'Cyclone separators',
      'Mixing tanks',
      'Pipeline flows',
    ],
  },
  {
    id: 'heat-transfer',
    title: 'Heat Transfer',
    icon: 'IoFlameOutline',
    color: 'from-rose-500 to-orange-400',
    shortDesc: 'Analysis of conduction, convection, and radiation flows inside furnaces, cooling jackets, and high-temperature thermal zones.',
    fullDesc: `
      Our Heat Transfer service covers all modes of thermal energy transfer. We analyse conduction in solids, convection in fluids, and radiation in high‑temperature systems. Our simulations help you optimise thermal management, improve energy efficiency, and prevent overheating or thermal stress.
      
      We perform steady‑state and transient thermal analyses, conjugate heat transfer (CHT) with fluid flow, and thermal‑structural coupling to assess mechanical integrity. Our team has extensive experience with industrial furnaces, heat exchangers, cooling systems, and electronics cooling.
      
      Key capabilities:
      • Conduction, convection, radiation
      • Conjugate heat transfer (CHT)
      • Thermal stress and deformation
      • Phase change (melting, solidification)
      • Thermal optimisation
      
      We provide detailed temperature maps, heat flux distributions, and recommendations for design improvements.
    `,
    benefits: [
      'Improved energy efficiency',
      'Extended equipment life',
      'Enhanced safety',
      'Cost savings through optimisation',
    ],
    applications: [
      'Furnaces and kilns',
      'Heat exchangers',
      'Electronics cooling',
      'Automotive thermal management',
    ],
  },
  {
    id: 'reaction-engineering',
    title: 'Reaction Engineering',
    icon: 'IoColorFilterOutline',
    color: 'from-emerald-500 to-teal-400',
    shortDesc: 'Coupling chemical reaction kinetics with transport models to optimize spatial conversions inside catalytic and packed beds.',
    fullDesc: `
      Reaction Engineering combines chemical kinetics with transport phenomena to optimise reactor performance. We simulate homogeneous and heterogeneous reactions, catalytic systems, and packed‑bed reactors. Our models account for species transport, heat generation/consumption, and mass transfer limitations.
      
      We use CFD coupled with detailed kinetic mechanisms or simplified reaction schemes to predict conversion, selectivity, and yield. We also perform parametric studies to identify optimal operating conditions and reactor configurations.
      
      Key capabilities:
      • Species transport with reactions
      • Catalytic and non‑catalytic reactions
      • Porous media with reactions
      • Micro‑reactor modelling
      • Scale‑up from lab to pilot to industrial
      
      Our simulations help you maximise productivity while minimising by‑products and energy consumption.
    `,
    benefits: [
      'Increased yield and selectivity',
      'Reduced by‑products',
      'Optimised operating conditions',
      'Faster scale‑up',
    ],
    applications: [
      'Catalytic converters',
      'Fischer‑Tropsch synthesis',
      'Bioreactors',
      'Polymerisation reactors',
    ],
  },
  {
    id: 'mixing-optimization',
    title: 'Mixing Optimization',
    icon: 'IoSyncOutline',
    color: 'from-purple-500 to-violet-400',
    shortDesc: 'Simulation of impellers, draft tubes, and baffled tanks to maximize blending rates and avoid stagnant dead zones.',
    fullDesc: `
      Mixing is a critical operation in many industries. We simulate stirred tanks, static mixers, and impeller systems to evaluate mixing performance. Our analyses include flow patterns, shear rate distributions, and mixing time predictions.
      
      We use advanced turbulence models (k‑epsilon, SST, LES) to capture the complex flow structures induced by impellers. We also model solid‑liquid suspensions, gas‑liquid dispersions, and liquid‑liquid emulsions.
      
      Key capabilities:
      • Stirred tank simulation
      • Impeller design and optimisation
      • Mixing time and homogeneity
      • Solid suspension and dissolution
      • Power consumption and scale‑up
      
      We provide recommendations for impeller type, speed, baffle design, and tank geometry to achieve optimal mixing.
    `,
    benefits: [
      'Improved product quality',
      'Reduced mixing time',
      'Energy savings',
      'Elimination of dead zones',
    ],
    applications: [
      'Chemical reactors',
      'Pharmaceutical blending',
      'Food processing',
      'Wastewater treatment',
    ],
  },
  {
    id: 'equipment-design',
    title: 'Equipment Design',
    icon: 'IoHardwareChipOutline',
    color: 'from-sky-500 to-indigo-400',
    shortDesc: 'Customized geometry layout optimization for cyclonic separators, headers, distributors, nozzles, and spray dryers.',
    fullDesc: `
      Our Equipment Design service focuses on geometric optimisation of industrial equipment. We use CFD to evaluate and improve the performance of cyclonic separators, spray dryers, headers, distributors, nozzles, and other custom equipment.
      
      We perform parametric studies to optimise geometric parameters such as inlet dimensions, vortex finder length, cone angle, and outlet sizes. We also assess erosion, corrosion, and thermal stresses to ensure durability and reliability.
      
      Key capabilities:
      • Cyclone and hydrocyclone design
      • Spray dryer and nozzle design
      • Header and distributor design
      • Erosion and corrosion prediction
      • Structural and thermal integrity
      
      Our designs are validated against empirical correlations and experimental data to ensure robust performance.
    `,
    benefits: [
      'Improved separation efficiency',
      'Reduced pressure drop',
      'Extended equipment life',
      'Lower maintenance costs',
    ],
    applications: [
      'Cyclonic separators',
      'Spray dryers',
      'Distillation columns',
      'Nozzles and injectors',
    ],
  },
  {
    id: 'cfd-automation',
    title: 'CFD Automation',
    icon: 'IoCodeWorkingOutline',
    color: 'from-orange-500 to-accent',
    shortDesc: 'Custom macro scripts and software pipelines to automate mesh generation, solver runs, and report exports.',
    fullDesc: `
      CFD Automation accelerates your simulation workflow by automating repetitive and time‑consuming tasks. We develop custom scripts and pipelines that integrate meshing, solving, and post‑processing into a seamless, efficient process.
      
      Our automation solutions reduce human error, ensure consistency, and free your engineers to focus on analysis and innovation. We support various software platforms (ANSYS Fluent, OpenFOAM, STAR‑CCM+) and can interface with your existing infrastructure.
      
      Key capabilities:
      • Automated meshing and mesh refinement
      • Batch solver runs for parametric studies
      • Automated report and plot generation
      • Integration with CAD and PLM systems
      • Custom UDFs and user‑defined functions
      
      We help you achieve faster turnaround times and more comprehensive design exploration.
    `,
    benefits: [
      'Significant time savings',
      'Reduced manual errors',
      'Scalable workflows',
      'Better design space exploration',
    ],
    applications: [
      'Parametric optimisation',
      'Design of Experiments (DoE)',
      'Digital twin development',
      'High‑throughput simulations',
    ],
  },
  {
    id: 'process-optimization',
    title: 'Process Optimization',
    icon: 'IoTrendingUpOutline',
    color: 'from-teal-500 to-emerald-400',
    shortDesc: 'Applying design of experiments (DoE) and numerical optimization bounds to identify ideal setpoints and feed locations.',
    fullDesc: `
      Process Optimization leverages advanced numerical techniques to find the optimal operating conditions for your processes. We combine CFD with Design of Experiments (DoE) and surrogate modelling to explore the design space efficiently.
      
      We identify key process parameters, perform sensitivity analyses, and construct response surfaces to predict process performance. Our optimisations target yield, energy consumption, product quality, and other critical metrics.
      
      Key capabilities:
      • Design of Experiments (DoE)
      • Response surface methodology
      • Multi‑objective optimisation
      • Surrogate modelling and machine learning
      • Robustness and uncertainty quantification
      
      We deliver clear, actionable recommendations that lead to significant improvements in your process performance.
    `,
    benefits: [
      'Maximised throughput',
      'Reduced operating costs',
      'Improved product quality',
      'Process robustness',
    ],
    applications: [
      'Chemical process optimisation',
      'Energy systems',
      'Supply chain logistics',
      'Manufacturing operations',
    ],
  },
  {
    id: 'industrial-training',
    title: 'Industrial Training',
    icon: 'IoSchoolOutline',
    color: 'from-indigo-500 to-purple-400',
    shortDesc: 'Tailored courses on CFD modeling, open-source OpenFOAM solvers, and physical validation methodologies for engineering teams.',
    fullDesc: `
      Our Industrial Training service equips your engineering teams with the skills and knowledge to perform CFD simulations effectively. We offer customised training programs that cover fundamentals, practical workflows, and advanced topics.
      
      We cover theory, software usage (commercial and open‑source), meshing strategies, solver selection, and validation methodologies. Our trainers are experienced practitioners who use real‑world examples and case studies.
      
      Key topics:
      • CFD fundamentals and best practices
      • Meshing and grid generation
      • Turbulence modelling
      • Multi‑phase and reacting flows
      • Validation and verification
      • OpenFOAM and open‑source tools
      • Scripting and automation
      
      We provide hands‑on sessions and comprehensive course materials to ensure lasting learning outcomes.
    `,
    benefits: [
      'Enhanced team capability',
      'Reduced dependency on external consultants',
      'Faster internal problem solving',
      'Improved simulation quality',
    ],
    applications: [
      'Engineering teams',
      'R&D departments',
      'Academic institutions',
      'Specialised workshops',
    ],
  },
];

export const servicesList = [
  { name: 'CFD Analysis', id: 'cfd-analysis' },
  { name: 'CFD Modeling', id: 'cfd-modeling' },
  { name: 'Heat Transfer', id: 'heat-transfer' },
  { name: 'Reaction Engineering', id: 'reaction-engineering' },
  { name: 'Mixing Optimization', id: 'mixing-optimization' },
  { name: 'Equipment Design', id: 'equipment-design' },
  { name: 'CFD Automation', id: 'cfd-automation' },
  { name: 'Process Optimization', id: 'process-optimization' },
  { name: 'Industrial Training', id: 'industrial-training' },
];

// Icon mapping for ServiceDetail page
import * as Icons from 'react-icons/io5';
export const iconMap = {
  IoAnalyticsOutline: Icons.IoAnalyticsOutline,
  IoCubeOutline: Icons.IoCubeOutline,
  IoFlameOutline: Icons.IoFlameOutline,
  IoColorFilterOutline: Icons.IoColorFilterOutline,
  IoSyncOutline: Icons.IoSyncOutline,
  IoHardwareChipOutline: Icons.IoHardwareChipOutline,
  IoCodeWorkingOutline: Icons.IoCodeWorkingOutline,
  IoTrendingUpOutline: Icons.IoTrendingUpOutline,
  IoSchoolOutline: Icons.IoSchoolOutline,
};
