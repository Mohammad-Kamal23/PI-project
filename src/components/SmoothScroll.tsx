'use client';

import { ReactLenis } from 'lenis/react';
import { useReducedMotion } from 'framer-motion';

/** Smooth wheel scrolling, switched off for people who ask their system for reduced motion. */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  if (reduced) return <>{children}</>;
  return (
    <ReactLenis root options={{ lerp: 0.12, anchors: { offset: -80 } }}>
      {children}
    </ReactLenis>
  );
}
