'use client';
import { motion } from 'framer-motion';

const skills = [
  "PYTHON 3.12", "TENSORFLOW", "PYTORCH", "CUDA OPTIMIZATION", "FASTAPI", 
  "FLUTTER", "GOOGLE CLOUD", "POSTGRESQL", "APACHE SPARK", "NLP/TRANSFORMERS", "RAG PIPELINES"
];

export default function SkillsMarquee() {
  return (
    <div className="relative w-full py-12 bg-black border-y border-green-900/30 overflow-hidden">
      
      {/* Background Grid for Tech Feel */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ff411a_1px,transparent_1px),linear-gradient(to_bottom,#00ff411a_1px,transparent_1px)] bg-[size:10px_10px]" />

      {/* Side Fades */}
      <div className="absolute top-0 left-0 w-20 h-full z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-20 h-full z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

      {/* The Data Stream */}
      <div className="flex">
        <motion.div 
          initial={{ x: "0%" }} 
          animate={{ x: "-50%" }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 px-4 min-w-max items-center"
        >
          {/* Repeat 4 times for seamless loop */}
          {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
            <div key={i} className="flex items-center gap-4 group">
               {/* blinking dot */}
               <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
               
               {/* Tech Text */}
               <span className="text-sm md:text-base font-mono font-medium text-green-500/70 group-hover:text-green-400 transition-colors tracking-widest">
                 {skill}
               </span>
               
               {/* Separator */}
               <span className="text-green-900/50 font-mono text-xs">
                 //
               </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}