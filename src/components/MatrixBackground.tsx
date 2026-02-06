'use client';
import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    const columns = Math.floor(width / 20);
    const drops: number[] = new Array(columns).fill(1);
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789";

    const draw = () => {
      // Slower fade (0.05 -> 0.03) makes trails longer
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)'; 
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#00ff41'; // Bright Matrix Green
      ctx.font = '16px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none" // Increased Opacity
    />
  );
}