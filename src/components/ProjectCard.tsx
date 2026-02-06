'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Terminal, FileText } from 'lucide-react';

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  stack: string[];
  year: string;
  onClick: () => void; // <--- This enables the click
}

export default function ProjectCard({ title, category, description, stack, year, onClick }: ProjectProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  const rotateX = useTransform(mouseY, [-200, 200], [5, -5]);
  const rotateY = useTransform(mouseX, [-200, 200], [-5, 5]);

  return (
    <motion.div 
      onMouseMove={onMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative w-full rounded-xl transition-all duration-500 perspective-1000"
    >
      <div className="relative h-full bg-black/40 backdrop-blur-md rounded-xl p-8 md:p-12 border border-white/10 group-hover:border-green-500/50 flex flex-col justify-between overflow-hidden transition-colors shadow-2xl">
        
        <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative flex justify-between items-start mb-8 z-10">
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <Terminal size={14} className="text-green-500" />
                    <span className="text-xs font-mono font-bold text-green-500 tracking-widest uppercase">
                       // {category}
                    </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-green-400 transition-colors font-mono">
                  {title}
                </h3>
            </div>
            <span className="text-green-500/60 text-sm font-mono border border-green-500/30 px-2 py-1 rounded">
              {year}
            </span>
        </div>

        <p className="relative text-neutral-300 font-mono leading-relaxed mb-8 max-w-lg z-10">
            {'>'} {description}
        </p>

        <div className="relative flex items-end justify-between mt-auto z-10">
            <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
                        {tech}
                    </span>
                ))}
            </div>
            
            <div className="flex gap-3">
                 <button 
                    onClick={(e) => { e.stopPropagation(); onClick(); }} // CLICK HANDLER
                    className="p-3 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-all z-20" 
                    title="Read Documentation"
                 >
                    <FileText size={20} />
                </button>
                <div className="p-3 bg-green-500 text-black rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer">
                    <ArrowUpRight size={20} />
                </div>
            </div>
        </div>

      </div>
    </motion.div>
  );
}