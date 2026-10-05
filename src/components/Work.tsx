'use client';

import { useCallback, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import type { Project } from '@/data/types';
import Modal, { Details } from './Modal';
import { LinkButton, Pill, Reveal, Section, Tag } from './ui';

function statusTone(p: Project) {
  if (/development|offline/i.test(p.status)) return 'warn' as const;
  if (p.kind === 'Coursework') return 'neutral' as const;
  return 'accent' as const;
}

function ProjectCard({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-sm transition hover:border-accent/40 hover:bg-surface-2/90">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="font-mono uppercase tracking-[0.16em] text-faint">{p.kind}</span>
        <span className="text-faint">·</span>
        <span className="font-mono text-faint">{p.year}</span>
        <span className="ml-auto"><Pill tone={statusTone(p)}>{p.status}</Pill></span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight">{p.title}</h3>
      <p className="mt-1 text-accent/90">{p.tagline}</p>
      <p className="mt-4 leading-relaxed text-muted">{p.summary}</p>

      {p.metrics && (
        <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {p.metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-line bg-bg/50 p-3">
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block text-lg font-semibold text-text">{m.value}</span>
                <span className="block text-xs text-muted">{m.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      )}

      {p.highlights.length > 0 && (
        <ul className="mt-5 space-y-2 text-sm text-muted">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2.5"><span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />{h}</li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-1.5">{p.stack.map((s) => <Tag key={s}>{s}</Tag>)}</div>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
        {p.links.map((l, i) => <LinkButton key={l.href} href={l.href} label={l.label} primary={i === 0} />)}
        {p.details && (
          <button
            onClick={() => onOpen(p)}
            className="inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm text-muted transition hover:text-accent"
          >
            Details <ArrowRight size={14} aria-hidden />
          </button>
        )}
      </div>
    </article>
  );
}

export default function Work() {
  const [open, setOpen] = useState<Project | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <Section id="work" eyebrow="01 - Work" title="Projects" intro="Each project links to its code or paper.">
      <div className="grid gap-6 lg:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08} className={i === 0 || (i === featured.length - 1 && i % 2 === 1) ? 'lg:col-span-2' : ''}>
            <ProjectCard p={p} onOpen={setOpen} />
          </Reveal>
        ))}
      </div>

      {other.length > 0 && (
        <Reveal className="mt-10">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Also</h3>
          <ul className="mt-3 divide-y divide-line rounded-2xl border border-line bg-surface/60">
            {other.map((p) => (
              <li key={p.slug} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:gap-4">
                <span className="font-medium">{p.title}</span>
                <span className="text-sm text-muted">{p.summary}</span>
                <span className="text-xs text-faint sm:ml-auto sm:shrink-0">{p.kind} · {p.year}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      <Modal open={!!open} onClose={close} title={open?.title ?? ''} subtitle={open?.tagline}>
        {open?.details && <Details sections={open.details} />}
        {open && (
          <div className="flex flex-wrap gap-2 border-t border-line pt-5">
            {open.links.map((l, i) => <LinkButton key={l.href} href={l.href} label={l.label} primary={i === 0} />)}
          </div>
        )}
      </Modal>
    </Section>
  );
}
