// Sample articles shown on the blog until real posts are published in Sanity.
// They are general engineering explainers (no client or project claims). Replace or remove once real content exists.
export interface SamplePost {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  author: string;
  category: string;
  icon: string;
  tone: string;
  readMins: number;
  html: string;
  sample: true;
}

export const samplePosts: SamplePost[] = [
  {
    title: 'What CFD can, and cannot, tell you about your equipment',
    slug: 'what-cfd-can-and-cannot-tell-you',
    publishedAt: '2026-03-12T09:00:00Z',
    excerpt: 'Simulation shows how flow, heat and mixing behave inside equipment. Knowing its limits is what makes the results useful.',
    author: 'FluiDimensions team',
    category: 'Simulation',
    icon: 'ion:water-outline',
    tone: 'sky',
    readMins: 4,
    sample: true,
    html: `<p>Computational Fluid Dynamics (CFD) lets engineers look inside equipment that cannot easily be instrumented: a reactor, a cyclone, a furnace or a duct. It shows velocity, temperature and concentration fields, and how they respond when geometry or operating conditions change.</p>
<h2>What it is good at</h2>
<ul><li>Comparing design options before anything is built or modified</li><li>Finding dead zones, short-circuiting and poor flow distribution</li><li>Explaining why a measured result differs from the design intent</li><li>Showing the direction and size of an improvement, not only the fact of one</li></ul>
<h2>Where care is needed</h2>
<p>A CFD result is only as good as its inputs: geometry, boundary conditions, material properties and the physical models chosen. Multiphase flow, combustion and particle behaviour need models that are validated for the situation being studied.</p>
<h2>A practical rule</h2>
<p>Treat the first simulation as a question, not an answer. Compare it with any plant data you have, check sensitivity to the main assumptions, and then use it to rank options rather than to promise exact numbers.</p>`,
  },
  {
    title: 'Five signs a process bottleneck is really a flow problem',
    slug: 'five-signs-a-bottleneck-is-a-flow-problem',
    publishedAt: '2026-02-24T09:00:00Z',
    excerpt: 'Before adding capacity, check whether the limit comes from how fluids and solids move through the equipment.',
    author: 'FluiDimensions team',
    category: 'Process',
    icon: 'ion:flask-outline',
    tone: 'emerald',
    readMins: 3,
    sample: true,
    html: `<p>When a plant cannot reach its rated throughput, the first instinct is often to add capacity. Sometimes the real limit is hidden in how material flows through existing equipment.</p>
<h2>Signs worth checking</h2>
<ol><li><strong>Pressure drop higher than expected</strong> across a vessel, duct or distributor.</li><li><strong>Uneven temperature</strong> across a bed, tube bank or furnace section.</li><li><strong>Performance that changes with load</strong> in a way the design did not predict.</li><li><strong>Fouling or erosion in the same place</strong> every time, which often points to local velocity or recirculation.</li><li><strong>Scale-up that behaves differently</strong> from the pilot unit.</li></ol>
<h2>What to do next</h2>
<p>Collect the operating data you already have, note where behaviour departs from design, and use a focused simulation to test whether flow distribution explains it. That is usually cheaper than guessing at a modification.</p>`,
  },
  {
    title: 'From CFD to reduced-order models: making simulation fast enough to use daily',
    slug: 'from-cfd-to-reduced-order-models',
    publishedAt: '2026-02-05T09:00:00Z',
    excerpt: 'Detailed simulations can take hours. Reduced-order models keep the key physics and answer in seconds.',
    author: 'FluiDimensions team',
    category: 'Digital',
    icon: 'ion:git-network-outline',
    tone: 'violet',
    readMins: 4,
    sample: true,
    html: `<p>A detailed CFD or multiphysics model is excellent for understanding, but it can take hours or days to run. That makes it hard to use for day-to-day decisions or for operators who need an answer now.</p>
<h2>The idea</h2>
<p>A reduced-order model (ROM) is a fast approximation built from a set of detailed simulations or measurements. It keeps the behaviour that matters for a decision and drops the rest.</p>
<h2>Where this helps</h2>
<ul><li>Exploring many operating conditions quickly</li><li>Connecting a physics-based model to live plant data</li><li>Putting a validated calculation inside a simple application for a wider team</li></ul>
<h2>The trade-off</h2>
<p>A ROM is only trustworthy inside the range it was built for. Good practice is to state that range clearly and to check results against the full model from time to time.</p>`,
  },
  {
    title: 'CFD, process modelling or machine learning: choosing the right tool',
    slug: 'choosing-between-cfd-process-modelling-and-ml',
    publishedAt: '2026-01-15T09:00:00Z',
    excerpt: 'Each method answers a different kind of question. A short guide to matching the method to the problem.',
    author: 'FluiDimensions team',
    category: 'Guide',
    icon: 'ion:analytics-outline',
    tone: 'amber',
    readMins: 3,
    sample: true,
    html: `<p>Engineering teams now have several modelling options. Choosing well saves time and avoids confident answers to the wrong question.</p>
<h2>Match the question to the method</h2>
<ul><li><strong>CFD or FEA</strong> when the question is about what happens inside a specific piece of equipment: flow, heat, stress or mixing.</li><li><strong>Process modelling</strong> when the question is about the whole plant: mass and energy balances, sensitivity and operating decisions.</li><li><strong>Machine learning</strong> when you have plenty of reliable process data and want prediction or monitoring, even if the physics is hard to write down.</li></ul>
<h2>Often the answer is a combination</h2>
<p>Detailed simulation can explain behaviour, a process model can show its plant-wide effect, and a data-driven model can keep watching it afterwards. Starting from the problem, rather than the software, keeps the work focused.</p>`,
  },
];
