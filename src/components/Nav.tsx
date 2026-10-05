'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { nav, site } from '@/data/site';

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/75 backdrop-blur-xl"
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label={`${site.name} - back to top`}>
          <span className="grid size-8 place-items-center rounded-lg border border-accent/40 bg-accent-soft font-mono text-xs font-bold text-accent">
            {site.initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight md:inline">{site.shortName}</span>
        </a>
        <ul className="ml-auto flex items-center gap-0.5 overflow-x-auto text-[13px] text-muted [scrollbar-width:none] sm:gap-1 sm:text-sm">
          {nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-md px-2 py-1.5 whitespace-nowrap transition-colors hover:bg-white/5 hover:text-text sm:px-2.5">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={site.cv}
          download="Mohammad_Kamal_Abdulaziz_CV.pdf"
          className="hidden shrink-0 items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-bg transition hover:brightness-110 sm:inline-flex"
        >
          <Download size={15} aria-hidden /> CV
        </a>
      </nav>
    </motion.header>
  );
}
