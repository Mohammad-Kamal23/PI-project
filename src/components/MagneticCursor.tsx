'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticCursor() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  // Physics: stiffness = tension, damping = friction
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    }
  }, []);

  return (
    <motion.div 
      style={{
        left: smoothMouse.x, 
        top: smoothMouse.y,
      }}
      className="fixed z-[9999] w-4 h-4 bg-green-400 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
    />
  );
}