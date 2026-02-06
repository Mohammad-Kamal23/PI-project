'use client';

import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Lenis settings for the "Luxury" feel
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: true, // Smooth scrolling on mobile too
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}