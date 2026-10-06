'use client';

import { Award, GraduationCap } from 'lucide-react';
import { achievements, education, experience } from '@/data/profile';
import { ExternalLink, Reveal, Section } from './ui';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 - Experience" title="Where I have worked">
      <div className="grid gap-10 lg:grid-cols-3">
        <ol className="relative space-y-10 border-l border-line pl-6 lg:col-span-2">
          {experience.map((e, i) => (
            <Reveal key={e.org} delay={i * 0.05}>
              <li className="relative">
                <span className="absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-accent bg-bg" aria-hidden />
                <p className="font-mono text-xs text-accent">{e.period}</p>
                <h3 className="mt-1 text-lg font-semibold">{e.role}</h3>
                <p className="text-muted">{e.org}</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5"><span className="mt-2 size-1 shrink-0 rounded-full bg-faint" aria-hidden />{b}</li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="space-y-4">
          <Reveal>
            <div className="rounded-2xl border border-line bg-surface/80 p-6">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-faint">
                <GraduationCap size={15} className="text-accent" aria-hidden /> Education
              </p>
              <h3 className="mt-3 font-semibold">{education.school}</h3>
              <p className="mt-1 text-sm text-muted">{education.degree}</p>
              <p className="mt-1 font-mono text-xs text-accent">{education.period}</p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="rounded-2xl border border-line bg-surface/80 p-6">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-faint">
                <Award size={15} className="text-accent" aria-hidden /> Recognition
              </p>
              <ul className="mt-3 space-y-3">
                {achievements.map((a) => (
                  <li key={a.title}>
                    <p className="font-medium">{a.title}</p>
                    <p className="text-sm text-muted">{a.text}</p>
                    {a.link && (
                      <ExternalLink href={a.link.href} className="mt-1 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline">
                        {a.link.label} ↗
                      </ExternalLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
