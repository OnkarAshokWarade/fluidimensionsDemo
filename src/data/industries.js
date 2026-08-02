import {
  GiBubblingFlask,
  GiPill,
  GiSprout,
  GiSpray,
  GiSteelClaws,
  GiHamburger,
  GiCarKey,
  GiOilPump,
  GiFactory,
} from 'react-icons/gi';

export const industriesData = [
  {
    id: 'chemical',
    title: 'Chemical',
    icon: 'GiBubblingFlask',
    gradient: 'from-blue-900 to-indigo-950',
    desc: 'Optimization of mixing vessels, stirred reactors, catalytic beds, and multiphase gas-liquid systems.',
    shortDesc: 'Optimization of mixing vessels, stirred reactors, catalytic beds, and multiphase gas-liquid systems.',
    fullDesc: `
      The chemical industry relies on precise fluid dynamics to ensure efficient mixing, reaction, and separation. Our simulation expertise covers a wide range of chemical processes, from stirred tank reactors to packed bed columns.

      We model multiphase flows, chemical reactions, heat transfer, and mass transfer to optimize yield and reduce energy consumption. Our advanced CFD techniques help identify dead zones, improve residence time distributions, and scale up from pilot to production.

      Key capabilities:
      • Stirred tank and reactor modeling
      • Multi-phase flow (gas-liquid, liquid-solid)
      • Reaction kinetics and species transport
      • Heat transfer and thermal management
      • Scale-up and process intensification
    `,
    benefits: [
      'Increased reaction yield',
      'Reduced energy consumption',
      'Optimized mixing efficiency',
      'Faster scale-up from pilot to production',
    ],
  },
  {
    id: 'pharmaceutical',
    title: 'Pharmaceutical',
    icon: 'GiPill',
    gradient: 'from-sky-900 to-blue-950',
    desc: 'High-purity bioreactor mixing simulations, clean-room airflow dynamics, and precise tablet coating heat audits.',
    shortDesc: 'High-purity bioreactor mixing simulations, clean-room airflow dynamics, and precise tablet coating heat audits.',
    fullDesc: `
      In the pharmaceutical industry, precision is paramount. We simulate bioreactor mixing to ensure uniform nutrient distribution and oxygen transfer, critical for cell culture viability. Our clean-room airflow models help maintain sterile environments and prevent contamination.

      We also model tablet coating processes, drying, and granulation to optimize quality and yield. Our simulations account for shear-sensitive cells, non-Newtonian fluids, and complex geometries.

      Key capabilities:
      • Bioreactor and fermenter modeling
      • Clean-room airflow and contamination control
      • Tablet coating and drying simulations
      • Shear stress analysis for cell viability
      • Validation against USP standards
    `,
    benefits: [
      'Improved cell viability and yield',
      'Sterile environment validation',
      'Optimized coating uniformity',
      'Reduced batch failures',
    ],
  },
  {
    id: 'agro',
    title: 'Agro',
    icon: 'GiSprout',
    gradient: 'from-emerald-900 to-teal-950',
    desc: 'Simulating fertilizer granulation, grain drying silos, custom sprayer nozzles, and fluid distribution grids.',
    shortDesc: 'Simulating fertilizer granulation, grain drying silos, custom sprayer nozzles, and fluid distribution grids.',
    fullDesc: `
      Agriculture processing involves complex handling of granular materials, drying, and fluid distribution. We simulate fertilizer granulation, grain drying silos, sprayer nozzles, and irrigation systems to optimize efficiency and product quality.

      Our models capture particle dynamics, heat and mass transfer, and fluid-structure interactions. We help improve yield, reduce energy consumption, and minimize waste.

      Key capabilities:
      • Granulation and pelletization
      • Drying and cooling processes
      • Nozzle and spray distribution
      • Fluid flow in irrigation systems
      • Particle size analysis
    `,
    benefits: [
      'Improved product uniformity',
      'Reduced energy costs',
      'Optimized spray coverage',
      'Enhanced process control',
    ],
  },
  {
    id: 'paints-pigments',
    title: 'Paints & Pigments',
    icon: 'GiSpray',
    gradient: 'from-rose-900 to-pink-950',
    desc: 'Non-Newtonian shear-thinning mixing simulations, high-viscosity grinding mill analysis, and pigment dispersion dynamics.',
    shortDesc: 'Non-Newtonian shear-thinning mixing simulations, high-viscosity grinding mill analysis, and pigment dispersion dynamics.',
    fullDesc: `
      Paints and pigments are complex non-Newtonian fluids requiring careful mixing, grinding, and dispersion. We simulate shear-thinning behavior, high-viscosity flows, and pigment dispersion to ensure consistent product quality and stability.

      Our models capture the rheological properties, particle interactions, and mixing efficiency. We optimize impeller designs, milling processes, and dispersion techniques to achieve the desired color, texture, and durability.

      Key capabilities:
      • Non-Newtonian fluid modeling
      • High-viscosity mixing and blending
      • Pigment dispersion and stability
      • Grinding and milling optimization
      • Rheological property prediction
    `,
    benefits: [
      'Consistent product quality',
      'Optimized milling efficiency',
      'Reduced energy consumption',
      'Improved color stability',
    ],
  },
  {
    id: 'metals-metallurgy',
    title: 'Metals & Metallurgy',
    icon: 'GiSteelClaws',
    gradient: 'from-orange-900 to-amber-950',
    desc: 'Blast furnace thermal profiles, molten metal flow fields, steel cooling sprays, and casting solidify simulations.',
    shortDesc: 'Blast furnace thermal profiles, molten metal flow fields, steel cooling sprays, and casting solidify simulations.',
    fullDesc: `
      The metals and metallurgy industry demands high-temperature simulations of blast furnaces, molten metal flows, and casting processes. We analyze thermal profiles, fluid flow, and solidification to optimize quality and reduce defects.

      Our simulations cover all stages from ore processing to final casting. We model heat transfer, phase change, and turbulent flows to improve energy efficiency and product integrity.

      Key capabilities:
      • Blast furnace and smelter modeling
      • Molten metal flow and solidification
      • Cooling and spray quenching
      • Casting defect prediction
      • Thermal stress analysis
    `,
    benefits: [
      'Reduced defects in castings',
      'Optimized cooling patterns',
      'Improved energy efficiency',
      'Enhanced product quality',
    ],
  },
  {
    id: 'food-beverage',
    title: 'Food & Beverage',
    icon: 'GiHamburger',
    gradient: 'from-yellow-900 to-amber-950',
    desc: 'Sanitary process optimization, thermal pasteurization modeling, nozzle spraying, and food extrusion rheology.',
    shortDesc: 'Sanitary process optimization, thermal pasteurization modeling, nozzle spraying, and food extrusion rheology.',
    fullDesc: `
      The food and beverage industry requires rigorous sanitary processes and precise control of temperature, flow, and mixing. We simulate pasteurization, sterilization, mixing, and extrusion to ensure product safety and quality.

      Our models capture non-Newtonian behavior, particulate flows, and heat transfer. We help optimize recipes, reduce waste, and improve throughput.

      Key capabilities:
      • Pasteurization and sterilization
      • Mixing and blending of viscous fluids
      • Nozzle spraying and coating
      • Extrusion and rheology
      • Sanitary process design
    `,
    benefits: [
      'Enhanced food safety',
      'Optimized process parameters',
      'Reduced product waste',
      'Improved texture and quality',
    ],
  },
  {
    id: 'automobile',
    title: 'Automobile',
    icon: 'GiCarKey',
    gradient: 'from-slate-900 to-zinc-950',
    desc: 'External aerodynamics lift-drag analysis, combustion cylinder heat transfer, and catalytic converter exhaust flow.',
    shortDesc: 'External aerodynamics lift-drag analysis, combustion cylinder heat transfer, and catalytic converter exhaust flow.',
    fullDesc: `
      The automotive industry relies on aerodynamics, combustion, and thermal management to improve performance and efficiency. We simulate external aerodynamics, cylinder combustion, exhaust systems, and cooling flows to optimize vehicle design.

      Our models capture turbulent flows, chemical reactions, and heat transfer. We help reduce drag, improve fuel efficiency, and meet emission standards.

      Key capabilities:
      • External aerodynamics and lift-drag
      • Combustion and engine performance
      • Exhaust and catalytic converter flow
      • Cooling and thermal management
      • NVH and acoustic analysis
    `,
    benefits: [
      'Reduced drag and fuel consumption',
      'Optimized combustion efficiency',
      'Emission compliance',
      'Improved thermal management',
    ],
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    icon: 'GiOilPump',
    gradient: 'from-cyan-900 to-blue-950',
    desc: 'Pipeline flow assurance, separator vessel efficiency modeling, riser slugs, and deepwell reservoir pressure calculations.',
    shortDesc: 'Pipeline flow assurance, separator vessel efficiency modeling, riser slugs, and deepwell reservoir pressure calculations.',
    fullDesc: `
      The oil and gas industry faces complex multiphase flows, high pressures, and extreme conditions. We simulate pipeline flow assurance, separator efficiency, riser slugging, and reservoir pressure to optimize production and reduce risks.

      Our models capture multiphase interactions, phase changes, and fluid properties. We help improve flow assurance, increase recovery, and reduce operating costs.

      Key capabilities:
      • Pipeline flow assurance
      • Separator vessel performance
      • Riser slugging and multiphase flow
      • Reservoir pressure and flow
      • Oil-water-gas separation
    `,
    benefits: [
      'Optimized flow assurance',
      'Increased recovery rates',
      'Reduced operating risks',
      'Improved separator efficiency',
    ],
  },
  {
    id: 'cement-mining',
    title: 'Cement & Mining',
    icon: 'GiFactory',
    gradient: 'from-stone-900 to-slate-950',
    desc: 'Rotary kiln thermal convection audits, calciner coal combustion grids, and cyclone separator particulate extraction.',
    shortDesc: 'Rotary kiln thermal convection audits, calciner coal combustion grids, and cyclone separator particulate extraction.',
    fullDesc: `
      The cement and mining industry requires high-temperature processes and particulate handling. We simulate rotary kilns, calciners, cyclones, and material handling systems to optimize efficiency and reduce emissions.

      Our models capture combustion, heat transfer, and particle-laden flows. We help improve product quality, reduce energy consumption, and meet environmental standards.

      Key capabilities:
      • Rotary kiln and calciner modeling
      • Coal combustion and flame stability
      • Cyclone and particulate separation
      • Material handling and transport
      • Emission reduction strategies
    `,
    benefits: [
      'Reduced energy consumption',
      'Optimized combustion efficiency',
      'Improved product quality',
      'Lower emissions',
    ],
  },
];

// Icon map for use in detail pages and components
export const iconMap = {
  GiBubblingFlask,
  GiPill,
  GiSprout,
  GiSpray,
  GiSteelClaws,
  GiHamburger,
  GiCarKey,
  GiOilPump,
  GiFactory,
};