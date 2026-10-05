'use client';

import { useState } from 'react';
import { CircleAlert, CircleCheck, Github, Linkedin, Mail, Send } from 'lucide-react';
import { site } from '@/data/site';
import { ExternalLink, Reveal, Section } from './ui';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const r = await fetch(site.formspreeEndpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error(String(r.status));
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  const input = 'w-full rounded-lg border border-line bg-bg/60 px-3.5 py-2.5 text-text placeholder:text-faint outline-none transition focus:border-accent/60';

  return (
    <Section
      id="contact"
      eyebrow="06 - Contact"
      title="Let’s talk"
      intro="Open to AI engineering roles, research collaborations and commercial licences for APEX."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-line bg-surface/80 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="text-muted">Name</span>
                <input name="name" autoComplete="name" className={`mt-1.5 ${input}`} placeholder="Your name" />
              </label>
              <label className="block text-sm">
                <span className="text-muted">Email</span>
                <input name="email" type="email" required autoComplete="email" className={`mt-1.5 ${input}`} placeholder="you@company.com" />
              </label>
            </div>
            <label className="block text-sm">
              <span className="text-muted">Message</span>
              <textarea name="message" required rows={5} className={`mt-1.5 resize-none ${input}`} placeholder="What would you like to talk about?" />
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 font-semibold text-bg transition hover:brightness-110 disabled:opacity-60"
              >
                <Send size={16} aria-hidden /> {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              <p role="status" className="text-sm">
                {status === 'sent' && <span className="inline-flex items-center gap-1.5 text-accent"><CircleCheck size={16} aria-hidden /> Thanks - I will reply soon.</span>}
                {status === 'error' && (
                  <span className="inline-flex items-center gap-1.5 text-red-400">
                    <CircleAlert size={16} aria-hidden /> Could not send. Email me at {site.email}.
                  </span>
                )}
              </p>
            </div>
          </form>
        </Reveal>

        <Reveal className="lg:col-span-2" delay={0.08}>
          <ul className="space-y-3">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-2xl border border-line bg-surface/60 p-4 transition hover:border-accent/50">
                <Mail size={18} className="text-accent" aria-hidden />
                <span><span className="block text-sm text-muted">Email</span>{site.email}</span>
              </a>
            </li>
            <li>
              <ExternalLink href={site.linkedin} className="flex items-center gap-3 rounded-2xl border border-line bg-surface/60 p-4 transition hover:border-accent/50">
                <Linkedin size={18} className="text-accent" aria-hidden />
                <span><span className="block text-sm text-muted">LinkedIn</span>{site.linkedin.replace('https://www.', '')}</span>
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={site.github} className="flex items-center gap-3 rounded-2xl border border-line bg-surface/60 p-4 transition hover:border-accent/50">
                <Github size={18} className="text-accent" aria-hidden />
                <span><span className="block text-sm text-muted">GitHub</span>{site.github.replace('https://', '')}</span>
              </ExternalLink>
            </li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
