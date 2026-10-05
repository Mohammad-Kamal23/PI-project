'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/** A page section with an eyebrow label, a title and an optional intro line. */
export function Section({
  id, eyebrow, title, intro, children,
}: { id: string; eyebrow: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 max-w-2xl text-muted">{intro}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}

/** Fades content in once when it scrolls into view. */
export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-muted">{children}</span>
  );
}

export function Pill({ children, tone = 'accent' }: { children: React.ReactNode; tone?: 'accent' | 'warn' | 'neutral' }) {
  const tones = {
    accent: 'border-accent/30 bg-accent-soft text-accent',
    warn: 'border-warn/30 bg-warn/10 text-warn',
    neutral: 'border-line bg-white/[0.04] text-muted',
  };
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>{children}</span>;
}

/** External link that opens in a new tab and says so to screen readers. */
export function ExternalLink({
  href, children, className = '',
}: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function LinkButton({ href, label, primary = false }: { href: string; label: string; primary?: boolean }) {
  const cls = primary
    ? 'bg-accent text-bg hover:brightness-110'
    : 'border border-line-strong text-text hover:border-accent/60 hover:text-accent';
  return (
    <ExternalLink href={href} className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition ${cls}`}>
      {label} <ArrowUpRight size={14} aria-hidden />
    </ExternalLink>
  );
}
