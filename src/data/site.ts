// Everything about the person and the site lives here: change it once, the whole site follows.

const GITHUB_USER = 'Mohammad-Kamal23';

export const site = {
  name: 'Mohammad Kamal Abdulaziz',
  shortName: 'Mohammad Kamal',
  initials: 'MK',
  role: 'AI-Augmented Developer & AI Engineer',
  focus: 'Computer vision · Multimodal AI · MLOps',
  summary: 'Data scientist and AI engineer (B.Sc. Data Science, University of Jordan) working on computer vision, multimodal AI and MLOps.',
  location: 'Amman, Jordan',
  email: 'moh203.kamal@gmail.com',
  // Current role, shown as a badge at the top of the page; null hides the badge.
  currently: null as { role: string; org: string } | null,
  github: `https://github.com/${GITHUB_USER}`,
  linkedin: 'https://www.linkedin.com/in/mohammadabdulaziz23',
  cv: '/CV.pdf',
  // Contact form backend (https://formspree.io). Replace the id to receive messages elsewhere.
  formspreeEndpoint: 'https://formspree.io/f/xeeljbwj',
} as const;

export const repo = (name: string) => `https://github.com/${GITHUB_USER}/${name}`;

// Papers served from public/papers/ on this site
export const paper = (file: string) => `/papers/${file}`;

/**
 * Public address of the site, used for metadata, sitemap and social previews. Set NEXT_PUBLIC_SITE_URL for a custom
 * domain; on Vercel the production domain is picked up automatically.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
