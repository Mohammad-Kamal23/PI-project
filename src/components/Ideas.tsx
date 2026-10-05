'use client';

import { useCallback, useState } from 'react';
import { Lightbulb } from 'lucide-react';
import { concepts } from '@/data/profile';
import type { Concept } from '@/data/types';
import Modal, { Details } from './Modal';
import { Pill, Reveal, Section } from './ui';

export default function Ideas() {
  const [open, setOpen] = useState<Concept | null>(null);
  const close = useCallback(() => setOpen(null), []);
  return (
    <Section
      id="ideas"
      eyebrow="05 - Ideas"
      title="Concepts"
      intro="Ideas I am exploring. None of them is built or peer-reviewed."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {concepts.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.06}>
            <button
              onClick={() => setOpen(c)}
              className="flex h-full w-full flex-col rounded-2xl border border-dashed border-line-strong bg-surface/50 p-5 text-left transition hover:border-accent/50"
            >
              <span className="flex items-center justify-between gap-2">
                <Lightbulb size={18} className="text-warn" aria-hidden />
                <Pill tone="neutral">Concept</Pill>
              </span>
              <span className="mt-4 font-semibold">{c.title}</span>
              <span className="mt-1 text-sm text-muted">{c.tagline}</span>
              <span className="mt-4 text-sm text-accent">Details →</span>
            </button>
          </Reveal>
        ))}
      </div>
      <Modal open={!!open} onClose={close} title={open?.title ?? ''} subtitle="Concept - not built or peer-reviewed">
        {open && <Details sections={open.details} />}
      </Modal>
    </Section>
  );
}
