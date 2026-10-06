import type { Achievement, Concept, Experience, SkillGroup, WorkflowCard } from './types';

export const experience: Experience[] = [
  {
    org: 'Sager Drone',
    role: 'AI Engineer Intern',
    period: 'Jul 2026 – Present',
    bullets: [
      'VLM spatial reasoning and RAG: a deterministic Q&A engine on Qwen2.5-VL. A knowledge graph and two databases ' +
        '(spatial index, domain knowledge) add context to the prompt, and an algorithmic gate checks each answer.',
      'Perception AI pipeline: a React / FastAPI MLOps platform for training vision models, with calibration metrics, ' +
        'hardware-aware batching and group-aware cross-validation to prevent data leakage.',
    ],
  },
  {
    org: 'University of Jordan & Akdeniz University',
    role: 'Research Assistant (AI Modeler) · joint research project, remote',
    period: 'Feb 2026 – Jun 2026',
    bullets: [
      'Curated binary and multi-class clinical image datasets from the ISIC archive.',
      'Trained two models: a lightweight edge model for binary classification and a larger model for multi-class ' +
        'classification.',
    ],
  },
  {
    org: 'Globitel',
    role: 'AI Engineer',
    period: 'Nov 2025 – Dec 2025',
    bullets: [
      'Ran remote model-training workflows and validated model updates for enterprise AI services.',
      'Built data-preparation pipelines for labelling, organisation and train / validation / test splits.',
      'Upgraded classification and emotion-detection models and tested them through their APIs.',
    ],
  },
];

export const education = {
  school: 'The University of Jordan',
  degree: 'B.Sc. Data Science · King Abdullah II School of Information Technology',
  period: 'Graduated Jan 2026',
};

export const achievements: Achievement[] = [
  {
    title: 'Conference participant, Al Ain University (UAE)',
    text: 'Student Conference of the Association of Student Affairs Deanships at Arab Universities, Jan 2026. Showcased the GISLC research.',
    link: { label: 'View certificate', href: '/certificates/al-ain-university-2026.jpg' },
  },
  { title: 'Peer-reviewed publication', text: 'GISLC, Electronics (MDPI), 2026' },
];

export const skills: SkillGroup[] = [
  { name: 'Core', items: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'Git', 'Computer vision', 'Deep learning'] },
  { name: 'AI', items: ['VLMs', 'RAG', 'Object detection', 'Segmentation', 'Image classification', 'Calibration / selective prediction'] },
  { name: 'Cloud & deployment', items: ['GCP', 'AWS', 'REST APIs', 'ML pipelines', 'MLOps'] },
  { name: 'Data & geospatial', items: ['SQL', 'NoSQL', 'GeoJSON', 'QGIS', 'ETL / ELT'] },
  { name: 'Apps & automation', items: ['Flutter', 'Next.js', 'n8n', 'Streamlit'] },
  { name: 'Languages', items: ['Arabic (native)', 'English (fluent)'] },
];

export const workflow: WorkflowCard[] = [
  { title: 'AI tools', text: 'I use AI tools such as Claude and Gemini for well-defined coding tasks.' },
  { title: 'Checks', text: 'Changes are checked with tests and reproducible runs.' },
  { title: 'Focus', text: 'Most of my time goes to problem framing, data, evaluation and system design.' },
];

// Ideas I am thinking about. They are concepts, not built or peer-reviewed systems, and are labelled as such.
export const concepts: Concept[] = [
  {
    slug: 'al-musiun',
    title: 'The Al-Musi’un Continuum',
    tagline: 'A speculative framework for storing information as standing waves',
    details: [
      {
        heading: 'The question',
        paragraphs: [
          'As transistor scaling approaches physical limits, adding memory adds heat and energy cost. The concept asks ' +
            'whether information could be stored in frequency domains rather than in discrete places.',
        ],
      },
      {
        heading: 'The idea',
        bullets: [
          'Map data onto a hyperbolic (Poincaré-ball) manifold, whose volume grows exponentially relative to its boundary',
          'Keep information as standing waves ("solitons") reflected by a perfectly reflecting boundary',
          'Retrieve by resonance: a query pulse that matches a stored pattern produces a constructive-interference spike',
          'Use orthogonal phase encoding so many patterns can share one physical volume',
        ],
      },
      {
        heading: 'Status',
        paragraphs: ['A thought experiment. It has no implementation, no experiments and no peer review.'],
      },
    ],
  },
  {
    slug: 'onco-edge',
    title: 'Onco-Edge Automata',
    tagline: 'Privacy-first cancer screening on edge devices',
    details: [
      {
        heading: 'The idea',
        paragraphs: [
          'Run screening models directly on low-cost devices in clinics, so patient images never leave the building, and ' +
            'improve the shared model with federated learning: only encrypted weight updates are sent.',
        ],
      },
      {
        heading: 'Building blocks',
        bullets: [
          'Post-training 8-bit quantisation to fit CNNs on battery-powered ARM devices',
          'Federated learning across clinics instead of a central image store',
          'Selective prediction (APEX-style) so the device defers uncertain cases to a specialist',
        ],
      },
      { heading: 'Status', paragraphs: ['A concept that grows out of GISLC and APEX; not built yet.'] },
    ],
  },
  {
    slug: 'agri-tech',
    title: 'Agri-Tech Automata',
    tagline: 'Field rovers that act on CropEye’s detections',
    details: [
      {
        heading: 'The idea',
        bullets: [
          'Swarm intelligence: rovers coordinate over a local mesh network to cover large fields without a central controller',
          'Precision treatment: use detection coordinates to treat only affected leaves and cut pesticide use',
          'Resource management: soil-moisture sensors drive irrigation per crop zone',
        ],
      },
      { heading: 'Status', paragraphs: ['Long-term direction for CropEye; not built yet.'] },
    ],
  },
];
