export type Link = { label: string; href: string };

export type Metric = { value: string; label: string };

/** A block of text in a details panel: a heading with paragraphs and/or bullet points. */
export type DetailSection = { heading: string; paragraphs?: string[]; bullets?: string[] };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  kind: 'Research' | 'Publication' | 'Open source' | 'Product' | 'Coursework';
  status: string;
  year: string;
  summary: string;
  highlights: string[];
  metrics?: Metric[];
  stack: string[];
  links: Link[];
  details?: DetailSection[];
  featured?: boolean;
};

export type Experience = {
  org: string;
  role: string;
  period: string;
  place?: string;
  bullets: string[];
};

export type SkillGroup = { name: string; items: string[] };

export type Concept = {
  slug: string;
  title: string;
  tagline: string;
  details: DetailSection[];
};

export type WorkflowCard = { title: string; text: string };
