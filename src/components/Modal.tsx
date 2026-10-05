'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { DetailSection } from '@/data/types';

/** Accessible dialog: Escape or a click outside closes it, focus moves to the close button, the page stops scrolling. */
export default function Modal({
  open, onClose, title, subtitle, children,
}: { open: boolean; onClose: () => void; title: string; subtitle?: string; children: React.ReactNode }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.documentElement.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            data-lenis-prevent
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-line-strong bg-surface shadow-2xl sm:rounded-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-line bg-surface/95 p-5 backdrop-blur">
              <div>
                <h3 id="modal-title" className="text-xl font-semibold">{title}</h3>
                {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
              </div>
              <button ref={closeRef} onClick={onClose} className="rounded-lg p-1.5 text-muted hover:bg-white/5 hover:text-text" aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-6 p-5 sm:p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Details({ sections }: { sections: DetailSection[] }) {
  return (
    <>
      {sections.map((s) => (
        <div key={s.heading}>
          <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{s.heading}</h4>
          {s.paragraphs?.map((p) => (
            <p key={p.slice(0, 40)} className="mt-2 leading-relaxed text-muted">{p}</p>
          ))}
          {s.bullets && (
            <ul className="mt-2 space-y-1.5 text-muted">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-2"><span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
}
