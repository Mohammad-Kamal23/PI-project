'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const links = [
    { name: 'HOME', href: '/' },
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' }, // <--- ADDED THIS
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 pointer-events-none"
    >
      <nav className="pointer-events-auto flex gap-8 px-8 py-3 bg-black/80 backdrop-blur-md border border-green-500/30 rounded-sm shadow-[0_0_20px_rgba(0,255,65,0.1)]">
        {links.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            className="relative text-xs md:text-sm font-mono font-bold text-green-500/60 hover:text-green-400 transition-colors duration-300 tracking-widest group"
          >
            <span className="group-hover:hidden">// {link.name}</span>
            <span className="hidden group-hover:inline text-green-300">{'>'} {link.name}</span>
            
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-500 group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}