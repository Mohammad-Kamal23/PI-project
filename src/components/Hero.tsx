'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { site } from '@/data/site';
import { ExternalLink } from './ui';

const facts = [
  { value: '−44.3%', label: 'AURC with APEX (18 configurations)' },
  { value: '98.23%', label: 'GISLC accuracy, Electronics (MDPI) 2026' },
];
// one column per fact (literal class names so Tailwind generates them)
const factCols = ['', 'sm:grid-cols-1', 'sm:grid-cols-2', 'sm:grid-cols-3', 'sm:grid-cols-4'][facts.length] ?? 'sm:grid-cols-4';

export default function Hero() {
  return (
    <section id="top" className="relative z-10 mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-center px-4 pt-28 pb-16 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-accent">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {site.currently.role} @ {site.currently.org}
          </span>
          <span className="inline-flex items-center gap-1.5"><MapPin size={14} aria-hidden /> {site.location}</span>
        </div>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
          {site.shortName}
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-4 font-mono text-sm uppercase tracking-[0.18em] text-accent/90 sm:text-base">{site.role}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{site.summary}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#work" className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 font-semibold text-bg transition hover:brightness-110">
            See my work <ArrowDown size={16} aria-hidden />
          </a>
          <a
            href={site.cv}
            download="Mohammad_Kamal_Abdulaziz_CV.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-2.5 font-medium transition hover:border-accent/60 hover:text-accent"
          >
            <Download size={16} aria-hidden /> Download CV
          </a>
          <div className="ml-1 flex items-center gap-1">
            <ExternalLink href={site.github} className="rounded-lg p-2 text-muted transition hover:bg-white/5 hover:text-text">
              <Github size={20} aria-hidden /><span className="sr-only">GitHub</span>
            </ExternalLink>
            <ExternalLink href={site.linkedin} className="rounded-lg p-2 text-muted transition hover:bg-white/5 hover:text-text">
              <Linkedin size={20} aria-hidden /><span className="sr-only">LinkedIn</span>
            </ExternalLink>
            <a href={`mailto:${site.email}`} className="rounded-lg p-2 text-muted transition hover:bg-white/5 hover:text-text">
              <Mail size={20} aria-hidden /><span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.dl
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line ${factCols}`}
      >
        {facts.map((f) => (
          <div key={f.label} className="bg-surface/90 p-5">
            <dt className="sr-only">{f.label}</dt>
            <dd>
              <span className="block text-2xl font-semibold text-text">{f.value}</span>
              <span className="mt-1 block text-sm text-muted">{f.label}</span>
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
