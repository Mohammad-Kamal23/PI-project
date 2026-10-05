'use client';

import { skills, workflow } from '@/data/profile';
import { Reveal, Section, Tag } from './ui';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="04 - Skills" title="Skills and tools">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.name} delay={(i % 3) * 0.05}>
            <div className="h-full rounded-2xl border border-line bg-surface/70 p-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{g.name}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">{g.items.map((s) => <Tag key={s}>{s}</Tag>)}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <h3 className="text-xl font-semibold tracking-tight">AI-augmented workflow</h3>
      </Reveal>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {workflow.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-accent/15 bg-accent-soft/40 p-5">
              <h4 className="font-semibold">{w.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{w.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
