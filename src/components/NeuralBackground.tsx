'use client';
import { useEffect, useRef } from 'react';

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true }); // Optimized context
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // PERFORMANCE TWEAK: Lower density = better FPS
    // Increased divisor from 5000 to 10000 to reduce total node count
    const particleDensity = 10000; 
    let particleCount = Math.floor((width * height) / particleDensity);
    
    const connectionDistance = 150; 
    const mouseDistance = 250; 

    let mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.0; 
        this.vy = (Math.random() - 0.5) * 1.0;
        this.size = Math.random() * 2 + 1.5; 
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse Interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseDistance) {
            const opacity = 1 - distance / mouseDistance;
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(0, 255, 65, ${opacity})`; 
            ctx!.lineWidth = 2; 
            ctx!.moveTo(this.x, this.y);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.stroke();
        }
      }

      draw() {
        // FAKE GLOW (High Performance)
        // Instead of shadowBlur, we just draw a bigger faint circle
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx!.fillStyle = 'rgba(0, 255, 65, 0.15)'; // Faint glow
        ctx!.fill();

        // Core Dot
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = '#00ff41';
        ctx!.fill();
      }
    }

    let particles: Particle[] = [];
    const init = () => {
        particles = [];
        particleCount = Math.floor((width * height) / particleDensity);
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    init();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Removed ctx.shadowBlur (This was the lag cause)

      particles.forEach((p, index) => {
        p.update();
        p.draw();

        // Optimized Connection Loop
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          
          // Quick check before expensive Sqrt
          if (Math.abs(dx) > connectionDistance || Math.abs(dy) > connectionDistance) continue;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(0, 255, 65, ${opacity * 0.4})`; 
            ctx.lineWidth = 1; 
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      // GPU Acceleration Hint
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50 z-0 will-change-transform" 
    />
  );
}