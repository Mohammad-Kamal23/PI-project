'use client';

import { useEffect, useRef } from 'react';

const RGB = '52, 211, 153';            // accent colour
const DENSITY = 16000;                 // one node per this many px²
const LINK = 140;                      // max distance for a connection, px
const MOUSE = 200;

/** Quiet network-of-nodes background. Static for reduced-motion users; stops cleanly on unmount. */
export default function NeuralBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0, h = 0, frame = 0;
    const mouse = { x: -1e4, y: -1e4 };
    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let ps: P[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ps = Array.from({ length: Math.floor((w * h) / DENSITY) }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: Math.random() * 1.4 + 0.8,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        if (!reduced) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
        for (let j = i + 1; j < ps.length; j++) {
          const q = ps[j]; const dx = p.x - q.x, dy = p.y - q.y;
          if (Math.abs(dx) > LINK || Math.abs(dy) > LINK) continue;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${RGB}, ${(1 - d / LINK) * 0.22})`;
            ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        const md = Math.hypot(mouse.x - p.x, mouse.y - p.y);
        if (md < MOUSE) {
          ctx.strokeStyle = `rgba(${RGB}, ${(1 - md / MOUSE) * 0.35})`;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.fillStyle = `rgba(${RGB}, 0.55)`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduced) frame = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onResize = () => { resize(); if (reduced) draw(); };
    resize(); draw();
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-60" />;
}
