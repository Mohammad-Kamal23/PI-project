'use client';

import { BookOpen, FlaskConical } from 'lucide-react';
import { repo } from '@/data/site';
import { ExternalLink, Reveal, Section } from './ui';

const publications = [
  {
    icon: BookOpen,
    kind: 'Journal article',
    citation: 'T. Alsarhan, M. K. Abdulaziz, A. Ali, et al.',
    title: 'GISLC: Gated-Inception Model for Skin Lesion Classification',
    venue: 'Electronics (MDPI), vol. 15, no. 4, art. 861, February 2026',
    links: [{ label: 'Paper', href: 'https://www.mdpi.com/2079-9292/15/4/861' }],
  },
  {
    icon: FlaskConical,
    kind: 'Work in progress',
    citation: 'M. K. Abdulaziz, R. Al-Sayyed',
    title: 'APEX: Latent-Space Kernel Fusion for Selective Prediction with Frozen Medical Image Classifiers',
    venue: 'Paper in preparation, for the IEEE CIS Jordan AI Research Contest (Track A)',
    links: [
      { label: 'Code', href: repo('apex-selective-prediction') },
    ],
  },
];

export default function Research() {
  return (
    <Section id="research" eyebrow="02 - Research" title="Papers">
      <div className="grid gap-6 md:grid-cols-2">
        {publications.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-surface/80 p-6">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-faint">
                <p.icon size={14} aria-hidden className="text-accent" /> {p.kind}
              </p>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.citation}</p>
              <p className="text-sm text-muted">{p.venue}</p>
              <div className="mt-auto flex flex-wrap gap-4 pt-4 text-sm">
                {p.links.map((l) => (
                  <ExternalLink key={l.href} href={l.href} className="font-medium text-accent underline-offset-4 hover:underline">
                    {l.label} ↗
                  </ExternalLink>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
