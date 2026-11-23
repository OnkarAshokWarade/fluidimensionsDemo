// Content drawn from websitecentral_aboutus_vision.docx (condensed for the site; confirm each project claim before publishing).
export const CAPS=[
 {id:"simulation",t:"Engineering Simulation",ic:"sim",d:"CFD, FEA, multiphase flow, combustion, heat and mass transfer, and other specialisations, applied to understand and improve equipment performance."},
 {id:"process",t:"Chemical Engineering & Process Consulting",ic:"flask",d:"Process troubleshooting, root-cause analysis, optimisation and engineering consulting for process industries."},
 {id:"design",t:"Engineering Design",ic:"ruler",d:"Process and equipment design, design evaluation and simulation-led optimisation."},
 {id:"ml",t:"Machine Learning & Data Intelligence",ic:"nodes",d:"Predictive modelling, soft sensors, process monitoring and physics-and-data integration."},
 {id:"software",t:"Software & Automation",ic:"code",d:"Custom engineering applications, automated simulation workflows and integrated engineering solutions."},
 {id:"software",t:"Digital Engineering",ic:"layers",d:"Digital twins and integrated models that connect simulation, process models and operational data.",hash:"software"}
];
export const INDS=[
 {id:"chemical",t:"Chemical & Process",tag:"Engineering Better Processes. Driving Performance."},
 {id:"pharma",t:"Pharmaceuticals",tag:"Improving Process Understanding. Enabling Better Manufacturing Decisions."},
 {id:"cement",t:"Cement",tag:"Improving Plant Performance. Reducing Energy Consumption and Emissions."},
 {id:"steel",t:"Steel & Metals",tag:"Engineering Smarter Production. Strengthening Performance."},
 {id:"oil-gas",t:"Oil & Gas",tag:"Understanding Complex Engineering Challenges. Improving Equipment and Process Performance."},
 {id:"automotive",t:"Automotive",tag:"Engineering Innovation. Advancing Product Performance."},
 {id:"aerospace",t:"Aerospace",tag:"Engineering Precision. Advancing Performance & Reliability."},
 {id:"marine",t:"Marine",tag:"Advancing Marine Engineering. Enhancing Vessel Performance."},
 {id:"food",t:"Food & Beverage",tag:"Improving Production Efficiency. Ensuring Product Consistency."}
];
export const APPROACH=[
 ["Understand the challenge","We start with the customer’s requirements: an operating issue, an equipment concern, a design challenge or an improvement opportunity."],
 ["Identify the real problem","Often the underlying issue needs further investigation. We clarify it and define the problem appropriately."],
 ["Choose the right methods","We agree objectives and deliverables, select suitable engineering methodologies and explain the proposed approach."],
 ["Analyse and translate","Our teams analyse and develop the solution, then interpret the findings into practical engineering recommendations."]
];
export const PROOF=[
 {sec:"Cement",cap:"Process & equipment",big:"53% · 10% · 15%",t:"Predicted pressure-drop reductions across three duct sections",d:"A duct network optimisation study for a cement plant identified modifications with predicted pressure-drop reductions of 53%, 10% and 15%, and improved flow distribution.",to:"cement"},
 {sec:"Cement",cap:"Software & Automation",big:"Automated",t:"Cyclone design and CFD application for a cement R&D team",d:"A custom application let plant engineers evaluate cyclone design parameters and automate simulation workflows without specialist CFD knowledge.",to:"software"},
 {sec:"Pharmaceuticals",cap:"Simulation + Data",big:"CFD to ROM",t:"Reactor performance prediction without a new simulation each time",d:"Detailed reactor simulations were converted into reduced-order models that predict average shear, mixing time and power consumption in a custom interface.",to:"pharma"},
 {sec:"Oil & Gas",cap:"Simulation",big:"Tank mixing",t:"Rotating jet mixing analysis for heavy-oil storage tanks",d:"Modelling of tank circulation and jet configuration, alongside work on separators, inline mixers, roasters and pool-fire consequence analysis.",to:"oil-gas"},
 {sec:"Cement",cap:"Simulation + Design",big:"Cyclones",t:"Cyclone redesign aimed at lower pressure drop and sustained collection performance",d:"CFD predictions were validated against experimental data, and in several projects recommendations for inlet and dip-tube changes were implemented by cement plants.",to:"cement"},
 {sec:"Pharmaceuticals",cap:"Data Intelligence · Demonstration",big:"Ferment IQ",t:"A process-intelligence demonstration for fermentation",d:"Shows how monitoring, Golden Batch comparison, machine learning and an AI process assistant can work together. Presented as a demonstration, not a validated product.",to:"pharma"}
];
export const VALUES=[
 ["Passion","Driven by curiosity. Inspired by engineering.","We enjoy exploring challenging engineering problems, questioning conventional approaches and discovering better ways to solve them."],
 ["Integrity","Honesty in our words. Integrity in our work.","Trust is earned through transparency, honest communication and sound professional judgement. We stand by our recommendations."],
 ["Commitment","Taking ownership. Delivering with purpose.","We take responsibility for understanding our customers’ challenges, value long-term relationships and stand behind the quality of our work."]
];
export const SIEMENS=[
 ["Computational Fluid Dynamics","Software for analysing fluid flow, heat transfer, multiphase systems, combustion and other complex flow phenomena.","Siemens Simcenter STAR-CCM+"],
 ["FEA & Multiphysics","Structural, thermal and multiphysics analysis of component and system behaviour under different loading and operating conditions.","Siemens Simcenter 3D"],
 ["Molecular Modelling","Molecular-level modelling and simulation to investigate molecular properties and material behaviour.","Siemens Simcenter portfolio"],
 ["Process Modelling","Technologies for simulation, analysis and optimisation of complex process systems.","Discuss options with our team"],
 ["System Simulation","System-level simulation of component and subsystem behaviour and interaction.","Siemens Simcenter Amesim"],
 ["Design Engineering Tools","Tools that support product development, design evaluation and integrated engineering workflows.","Siemens engineering simulation portfolio"]
];
export const ENGAGE=[
 ["Software licensing & technology enquiries","We help customers explore relevant Siemens engineering software and how different solutions may address their requirements."],
 ["Technical training","Training in engineering software, structured around fundamentals, specialised topics or application-oriented needs."],
 ["Proof-of-concept studies","Define a relevant technical problem, demonstrate the technology and evaluate its value before a wider commitment."],
 ["Engineering application support","Beyond software menus: modelling approaches, workflow development and interpretation of engineering results."],
 ["Technology integration","How simulation, process modelling, data-driven methods and custom applications can work together in one workflow."]
];

/* capability pages */
export const SIM=[
 {t:"Computational Fluid Dynamics (CFD)",s:"Understanding and improving fluid flow and transport phenomena.",d:"We use CFD to understand fluid flow and its interaction with heat transfer, mass transfer, chemical reactions and equipment geometry, to investigate performance limitations and identify design improvements.",ch:["Flow distribution, pressure drop and hydraulic performance","Heat and mass transfer limitations","Equipment performance and process bottlenecks","Flow-induced problems and design optimisation"],ap:"Process equipment, industrial furnaces, reactors, cyclones, separators, ducts, heat exchangers and other flow-related systems."},
 {t:"Finite Element Analysis (FEA)",s:"Understanding structural behaviour. Improving equipment integrity and reliability.",d:"FEA evaluates how equipment, components and structures respond to mechanical and thermal loads, using stresses, strains, deformation and temperature distribution to assess design adequacy and failure mechanisms.",ch:["Stresses, deformation and potential structural failure","Thermal stresses and thermal cycling","Fatigue, buckling and pressure-induced stresses","Root-cause investigation of equipment failures"],ap:"Pressure vessels, reactors, columns, heat exchangers, piping and supports, furnaces and kilns, agitators and impellers, conveyors and hoppers.",note:"FEA supports engineering assessment and design decisions. It does not by itself establish equipment safety or certify design compliance; conclusions depend on inputs, assumptions, modelling and applicable design codes."},
 {t:"Multiphase Flow & Reactor Engineering",s:"Understanding complex phase interactions. Optimising reactor performance.",d:"Modelling of gas, liquid and solid phases whose interactions govern process behaviour: phase distribution, mixing, dispersion, residence time and transport, combined with chemical engineering and equipment design.",ch:["Phase distribution, holdup and flow regimes","Bubble, droplet and particle size dynamics","Mixing, dispersion, segregation and separation","Scale-up and the influence of geometry on performance"],ap:"Bubble columns, stirred tanks, fluidised beds, slurry reactors, cyclones, separators, scrubbers, crystallisers and spray dryers."},
 {t:"Combustion Engineering & Modelling",s:"Understanding combustion. Optimising equipment design. Improving thermal performance.",d:"Analysis of combustion integrating flow, turbulence, reactions, heat transfer and species transport, from flame behaviour and emissions to burner and furnace design, combined with process modelling.",ch:["Combustion efficiency and fuel utilisation","Flame shape, stability and heat release","Hot spots, thermal loading and NOx / CO formation","Fuel composition, hydrogen and multi-fuel effects"],ap:"Cement and lime kilns, reheating furnaces, boilers, calciners, carbon black reactors, thermal oxidisers, incinerators and flares."},
 {t:"Heat & Mass Transfer",s:"Understanding transport phenomena. Improving thermal performance.",d:"Conduction, convection, radiation, diffusion and phase change analysed with CFD and process modelling, including thermal-structural coupling with FEA.",ch:["Non-uniform temperature and concentration","Heat and mass transfer limitations","Phase change and interphase transport","Thermal stresses and deformation"],ap:"Heat exchangers, condensers, evaporators, dryers, reactors, furnaces, kilns and gas-liquid contacting equipment."},
 {t:"Molecular Modelling",tagnew:"Emerging capability",s:"Molecular-level insight for material and product development.",d:"Molecular modelling investigates molecular structures, interactions and the link between molecular characteristics and material properties. Through our association with CULGI, this is an emerging area we intend to develop progressively.",ch:["Molecular exploration and design","Property prediction","Study of molecular interactions"],ap:"Material development and product innovation in chemical and process industries."}
];
export const MLCAP=[
 ["Data-driven modelling & predictive analytics","Models that relate process variables, operating conditions and equipment performance, including surrogate models for computationally intensive simulations.",["Predictive modelling of process and equipment performance","Engineering correlations from process and simulation data","Prediction of product quality and critical parameters"]],
 ["Process optimisation & intelligent operations","Machine learning and optimisation to find better operating strategies within constraints and competing objectives.",["Operating conditions, energy efficiency and throughput","Multi-objective optimisation of productivity, quality, energy and emissions","Operating windows and process constraints"]],
 ["Predictive maintenance & equipment monitoring","Using equipment data to establish normal behaviour and detect deterioration.",["Performance assessment and operating trends","Abnormal behaviour and deterioration","Degradation prediction where suitable history exists"]],
 ["Anomaly detection & fault diagnosis","Patterns across many variables that single measurements do not reveal.",["Abnormal conditions and deviations","Relationships between variables during upsets","Support for root-cause troubleshooting"]],
 ["Hybrid modelling & digital twins","Physics-based, data-driven and hybrid models combined while keeping a link to engineering principles.",["Physics-informed machine learning","Reduced-order and surrogate models from CFD","Digital twins for prediction, analysis and optimisation"]],
 ["Soft sensors, golden batch & dashboards","Estimate hard-to-measure variables and compare operations against high-performing references.",["Soft sensors and Golden Batch analysis","Golden reference periods","Integrated dashboards and operator advisory"]]
];
export const STAGES=[
 ["Offline analysis and model development","Historical data analysis, soft sensors, golden batches and reference periods, and validated predictive models."],
 ["Operator advisory mode","Models give recommendations while existing procedures and control systems stay in place and operators keep responsibility."],
 ["Parallel performance validation","Models run alongside the plant and are compared with actual decisions and outcomes over an extended period."],
 ["Supervised and assisted automation","With confidence established, control actions are introduced with operator oversight, constraints and safety safeguards."],
 ["Autonomous process optimisation","Validated models make and implement decisions within defined operating limits, safety requirements and control-system safeguards."]
];
export const SWCAP=[
 ["Automated engineering simulation workflows","From geometry preparation and meshing to solving, post-processing and reporting, with engineering knowledge built in.",["Application-specific interfaces and meshing strategies","Automated physics, boundary conditions and solver settings","Automatic graphs, images, indicators and reports"]],
 ["Custom engineering software","Specialised applications where standard commercial software does not fit.",["Reactor design and simulation codes in Python","Design, analysis and calculation tools","Integration with commercial engineering software"]],
 ["Machine learning applications","Models deployed through interfaces that engineers and operators can use.",["Interactive applications for predictions and recommendations","Streamlit-based tools","Soft sensors, analytics and optimisation in one workflow"]],
 ["Industrial data integration","Connecting analytics to plant databases and control environments.",["Plant databases, DCS and SCADA connectivity","Data exchange between systems and analytical applications","A development path towards supervised control"]],
 ["Digital twins & software integration","Equipment-level and process-level models combined with data-driven models.",["CFD results with process models","Integration with process simulation such as gPROMS","Molecular modelling applications, including Siemens CULGI"]],
 ["Advanced software technologies","Modern frameworks applied to engineering problems.",["Python, FastAPI, Flask, Django, Java, APIs","TensorFlow, PyTorch, scikit-learn, XGBoost","Generative and agentic AI tooling"]]
];
export const INEFF=[
 ["Equipment & process design","Suboptimal geometry, configuration and sizing, causing poor performance and higher energy use.","Equipment design, CFD, FEA, process modelling"],
 ["Operating conditions","Non-optimal temperature, pressure, flow, impeller speed, residence time or utilities.","Process modelling, CFD, data-driven modelling"],
 ["Process variability & stability","Fluctuations causing instability, inconsistent quality and lower yield.","Data-driven and process modelling, CFD"],
 ["Utility & energy efficiency","Inefficient use of steam, cooling water, compressed air and electricity.","CFD, process and data-driven modelling"],
 ["Equipment integrity & reliability","Degradation, structural failures and unplanned downtime.","FEA, equipment design, CFD"],
 ["Instrumentation & control","Sensor gaps, measurement errors and weak control strategies.","Data-driven and process modelling"],
 ["Monitoring & predictive intelligence","Limited visibility, trend analysis and prediction of deviations.","Data-driven and process modelling"],
 ["Decision-making & response","Delayed or suboptimal responses to deviations, causing off-spec production.","Data-driven modelling, predictive analytics"]
];
export const EQUIP=["Bubble columns","Stirred tanks and reactors","Fluidised beds","Slurry reactors","Gas-liquid separators","Cyclones and hydrocyclones","Crystallisers","Burners and combustion chambers","Furnaces, kilns and calciners","Heat exchangers","Dryers, evaporators, condensers","Mixers and dispersers"];

/* industry pages */
export const IND={
 chemical:{intro:["Chemical process industries face challenges involving molecules, materials, chemistry, fluid flow, heat and mass transfer, reactions and equipment performance. Understanding these interactions is essential to reliable, efficient and consistent operation.","Our work spans bulk chemicals, specialty chemicals, petrochemicals and process manufacturing."],
  areas:[
  {t:"Create and develop: from molecules to industrial processes",p:["Evaluating feasibility of new products and process concepts","Developing configurations and operating conditions","Translating laboratory and pilot work to industrial scale"],d:["Process feasibility and proof-of-concept studies","Process models and engineering assessments","Scale-up studies and development recommendations"],note:"Molecular modelling is an emerging capability we intend to develop progressively."},
  {t:"Design and engineer processes and equipment",p:["Inadequate mixing, flow distribution or contacting","Reactor limitations and heat or mass transfer shortfalls","High pressure drop and poor separation"],d:["Equipment sizing and configuration recommendations","Reactor, mixing and hydraulic performance assessments","Design comparisons and optimisation recommendations"]},
  {t:"Improve performance and reduce losses",p:["Low capacity, throughput or yield","Excessive energy and utility consumption","Inefficient combustion and recurring downtime"],d:["Root-cause investigation reports","Energy and utility efficiency studies","Equipment integrity and structural analysis"]},
  {t:"Improve quality, consistency and operational intelligence",p:["Batch-to-batch variation and instability","Limited visibility into process performance","Difficulty transferring processes across sites or scales"],d:["Sensitivity and operating-window studies","Predictive models and monitoring applications","Reduced-order models and what-if tools"]},
  {t:"Digital twins for the process industries",p:["Physics-based process and equipment models","CFD, reduced-order and data-driven models","Operational data integration and decision-support applications"],d:["Predictive and integrated modelling solutions","Scenario evaluation tools","Digital-twin solutions tailored to the application"],note:"The scope can range from standalone predictive models to more connected digital-twin solutions."}]},
 cement:{intro:["Cement manufacturing is energy intensive: small improvements in efficiency, combustion, equipment performance and material handling can have a significant impact on plant operation.","We address challenges across the pyro-process and associated equipment, combining process understanding, combustion modelling, equipment design and custom software."],
  areas:[
  {t:"Process engineering and pyro-process optimisation",p:["Integrated pyro-section performance modelling","Evaluation of operating strategies for fuel, air and raw meal distribution","Assessment of combustion and calcination performance"],d:["Integrated process models","Analysis of bottlenecks and operating constraints","Recommendations for performance improvement"]},
  {t:"Combustion engineering and emissions reduction",p:["Validated coal combustion models for kiln burner design","Burner design involving coal, petcoke and alternative fuels","Calciner studies of raw meal, tertiary air and fuel splits for NOx reduction"],d:["Combustion and burner design assessments","Fuel and air distribution strategies","Recommendations for emissions-related improvements"]},
  {t:"Equipment engineering and design improvement",p:["Preheater cyclones: evaluation and redesign to reduce pressure drop while improving collection efficiency","Electrostatic precipitators: guide-vane modifications for collection efficiency","Bag filters and duct networks: design evaluation for bag life and pressure loss"],d:["Equipment performance assessments","Flow-distribution and pressure-drop assessments","Inputs for equipment upgrades and redesign"],note:"In a duct network project, proposed modifications gave predicted pressure-drop reductions of 53%, 10% and 15% across three sections. In several cyclone projects, recommendations were implemented by cement plants."},
  {t:"Modelling, simulation and analysis",p:["CFD and gas-solid and multiphase flow","Combustion and reacting-flow modelling","Heat and mass transfer and integrated system analysis"],d:["Flow, combustion and thermal performance assessments","Design comparisons and evaluation of alternatives","Engineering interpretation and recommendations"]},
  {t:"Engineering software and automation",p:["Automated cyclone design and CFD application built for a cement producer’s R&D team","Automation of design and analysis workflows","User-friendly interfaces for specialised calculations"],d:["Custom engineering applications","Automated design and analysis workflows","Tools that make methods accessible to plant and R&D teams"]}]},
 pharma:{intro:["Pharmaceutical manufacturing demands a high level of process control and consistency. Product quality depends on how processes behave inside reactors, bioreactors and other production equipment.","We combine chemical engineering, process modelling, CFD, equipment engineering and software development to connect engineering insight with manufacturing needs."],
  areas:[
  {t:"Process consistency and product quality",p:["Influence of operating conditions on performance","Mixing and temperature non-uniformity","Process sensitivity to variations in inputs"],d:["Process performance assessments","Sensitivity studies and operating-parameter evaluation","Recommendations for more consistent operation"]},
  {t:"Reactor and bioreactor engineering",p:["Mixing, shear and flow distribution","Impeller and sparger configuration","Gas-liquid mass transfer, including oxygen transfer and CO₂ stripping"],d:["Reactor and bioreactor performance assessments","Evaluation of impeller and sparger configurations","Equipment design and operating-condition recommendations"]},
  {t:"Scale-up, scale-down and technology transfer",p:["Differences in geometry, impellers and mixing across scales","Shear levels and local hydrodynamics","Heat and mass transfer limitations"],d:["Scale-up and scale-down assessments","Recommended operating windows","Modelling support for technology transfer"]},
  {t:"Crystallisation and process development",p:["Mixing and flow analysis in crystallisation equipment","Temperature and concentration distribution","Scale-up effects on mixing and process conditions"],d:["Crystalliser mixing and performance assessments","Equipment configuration and operating evaluations","Modelling support for development"],note:"Presented as an engineering capability. Dryers, granulators, blenders and tablet coating are not presented as established project experience."},
  {t:"Process modelling, continuous manufacturing and optimisation",p:["Flowsheet, steady-state and dynamic process analysis","Batch-to-continuous development","Sensitivity analysis and control strategy evaluation"],d:["Process flowsheet models","Optimisation and sensitivity studies","Inputs for monitoring and control strategies"]}]},
 "oil-gas":{intro:["Oil and gas facilities operate with complex fluids, multiphase systems, high temperatures and pressures, and demanding safety and reliability requirements.","Our experience covers separation systems, storage tank mixing, inline mixers, multiphase reactors, roasters, flue gas desulphurisation and fire modelling, supported by capabilities developed across other process industries."],
  areas:[
  {t:"Oil, gas and water separation systems",p:["Two-phase and three-phase separators","Flow distribution and separation behaviour","Separator geometry and internals"],d:["Separator performance assessments","Evaluation of alternative configurations","Recommendations for design and operating improvements"]},
  {t:"Storage tank mixing and inline mixers",p:["Rotating jet mixing in heavy-oil storage tanks","Tank circulation and jet configuration","Inline static mixer performance and pressure drop"],d:["Tank mixing assessments","Evaluation of rotating jet configurations","Inline mixer performance evaluations"]},
  {t:"Multiphase reactors and process equipment",p:["Gas-liquid and gas-liquid-solid flow","Mixing and phase distribution","Heat and mass transfer behaviour"],d:["Multiphase reactor performance assessments","Equipment design alternatives","Recommendations for improved performance"]},
  {t:"Combustion, roasters and thermal equipment",p:["Catalyst roaster and cooler performance","Fuel and air distribution, temperature fields","Flue gas desulphurisation flow-related performance"],d:["Combustion and thermal performance assessments","Flow and temperature distribution analysis","Recommendations for equipment improvement"]},
  {t:"Fire modelling and thermal consequence analysis",p:["Pool fires in storage tanks and containment areas","Jet-fire modelling","Thermal radiation and heat exposure"],d:["CFD-based pool-fire and jet-fire simulations","Thermal radiation and consequence assessments","Inputs to facility safety studies and risk assessments"],note:"Fire modelling and consequence analysis are distinct from formal regulatory or safety certification services."},
  {t:"Structural and mechanical engineering using FEA",p:["Stress and deformation analysis","Mechanical and thermal loading of equipment and supports","Design evaluation and comparison of alternatives"],d:["Structural and mechanical performance assessments","Identification of critical regions under specified loads","Design improvement recommendations"]}]}
};
export const CAFE_TOPICS=[
 ["Engineering and process challenges","Equipment performance, process bottlenecks, mixing, heat and mass transfer, multiphase flows, combustion."],
 ["Simulation and advanced modelling","CFD, multiphysics, simulation strategy, validation and interpretation of results."],
 ["Equipment design and optimisation","Design, troubleshooting, scale-up and evaluation of alternatives."],
 ["Process modelling and digital technologies","Reduced-order modelling, machine learning, industrial AI, digital twins and automation."],
 ["Research, innovation and new ideas","Emerging technologies, research problems and academic-industry collaboration."]
];
export const CAFE_WHO=[["Industry professionals","Engineering, process, manufacturing, R&D and technology teams."],["Plant and equipment engineers","People looking to understand or improve equipment and process performance."],["Researchers and academics","Modelling challenges, new applications and collaborations."],["Young engineers","Students and early-career professionals curious about simulation and emerging technology."],["Organisations","Companies exploring advanced engineering solutions and digital technologies."]];

// Application areas the document mentions for industries that have no full page yet. These describe where
// the capabilities apply; they are NOT claims of completed projects.
export const STUB_AREAS = {
  steel: ['Reheating furnaces, rotary kilns and other high-temperature processing systems (combustion and heat transfer modelling)', 'Thermal process optimisation, process monitoring and prediction of operating performance (machine learning)', 'Thermal-structural analysis of furnace components and refractory linings (FEA)'],
  automotive: ['Fuel sprays in internal combustion engines', 'Urea injection (SCR) after-treatment', 'Oil-spray cooling for electric motors'],
  aerospace: ['Fuel injection and atomisation', 'Rocket propellant management', 'Aircraft icing and droplet interactions'],
  marine: ['Ship hull hydrodynamics', 'Coastal wave mechanics', 'Thermal and fluid systems on vessels'],
  food: ['Process optimisation, product quality prediction and performance monitoring (machine learning)', 'Emulsion and foam stability in food and beverage products', 'Mixing, thermal processing and equipment performance'],
};
