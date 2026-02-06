'use client';
import { motion } from 'framer-motion';
import { 
  Globe, Zap, ShieldCheck, Sprout, Stethoscope, 
  Cpu, ChevronRight, Radio, FileText, Download, Layers
} from 'lucide-react';

interface AboutProps {
  onOpenProject: (projectKey: string) => void;
}

export default function About({ onOpenProject }: AboutProps) {
  
  const experiences = [
    {
      year: "Nov 11, 2025 – Dec 15, 2025",
      role: "AI Research Engineer",
      company: "Globitel",
      description: "Orchestrated remote model training and engineered automated data pipelines. Upgraded emotion detection models using enterprise-grade deep learning architectures.",
    },
    {
      year: "2022 - 2026",
      role: "B.Sc. Data Science",
      company: "University of Jordan",
      description: "Specialized in Computer Vision & Deep Learning. Graduated with a focus on Medical AI and hybrid CNN-LSTM architectures.",
    }
  ];

  return (
    <section id="about" className="relative py-32 px-6 border-t border-green-900/30">
      <div className="max-w-7xl mx-auto">

        {/* --- 1. CURRENT RESEARCH: THE AL-MUSI'UN CONTINUUM --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded border border-green-500/30 bg-green-900/20 text-xs text-green-400 font-mono tracking-widest uppercase animate-pulse">
                    Active Research
                </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono leading-tight">
              The Al-Musi'un <br/> <span className="text-green-500">Continuum</span>
            </h2>
            
            <div className="space-y-6 text-neutral-400 text-lg font-mono leading-relaxed">
                <p>
                  A theoretical framework tackling the <span className="text-white">"Entropy Death"</span> of data. We propose a <span className="text-green-400">Self-Regenerating Frequency Domain</span>.
                </p>
                <p>
                  Imagine a <span className="text-white">Dome of Energy</span> that naturally expands and compresses. As data (solitons) travels through this hyperbolic curve, the compression phase injects energy back into the wave.
                </p>
                <p className="text-sm border-l-2 border-green-500/50 pl-4 italic text-green-100/60">
                    "This allows information to exist as <span className="text-green-400">Standing Solitons</span> indefinitely without degradation."
                </p>
                
                <div className="grid grid-cols-1 gap-3 mt-4 text-sm">
                    <div className="flex items-center gap-3 text-neutral-300">
                        <Zap size={16} className="text-green-500" />
                        <span><strong>Thermodynamic Loop:</strong> Zero-loss energy recycling.</span>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-300">
                        <Radio size={16} className="text-green-500" />
                        <span><strong>Hyperbolic Storage:</strong> Infinite capacity via curvature.</span>
                    </div>
                </div>

                <button 
                  onClick={() => onOpenProject('AlMusiun')}
                  className="mt-8 inline-flex items-center gap-3 bg-green-500/10 text-green-400 px-6 py-3 rounded border border-green-500/20 hover:bg-green-500 hover:text-black transition-all font-mono text-sm font-bold uppercase group"
                >
                  <FileText size={16} className="group-hover:scale-110 transition-transform"/> 
                  Review Theoretical Plan
                </button>
            </div>
          </motion.div>

          {/* Visual: The Realistic Energy Dome */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative h-[500px] w-full flex items-center justify-center"
          >
            <div className="absolute w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px]" />

            <motion.div 
               animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute w-[450px] h-[450px] rounded-full border border-green-500/30 shadow-[0_0_50px_rgba(0,255,65,0.1)]"
            />
            
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[350px] h-[350px] rounded-full border border-green-500/20 border-dashed"
            />
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
                className="absolute w-[250px] h-[250px] rounded-full border border-green-400/30 border-dotted"
            />
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-[150px] h-[150px] rounded-full border-2 border-green-400/50"
            />

            <motion.div 
               animate={{ scale: [1, 1.3, 1], filter: ["brightness(1)", "brightness(2)", "brightness(1)"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-20"
            >
                <Globe className="text-green-500 drop-shadow-[0_0_30px_rgba(0,255,65,1)]" size={60} strokeWidth={0.5} />
            </motion.div>
          </motion.div>
        </div>


        {/* --- 2. FUTURE PROJECTS --- */}
        <div className="mb-40">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-[1px] bg-green-500/30 w-12" />
                <h3 className="text-2xl font-bold text-white font-mono tracking-widest">[ FUTURE_ROADMAP ]</h3>
                <div className="h-[1px] bg-green-500/30 flex-1" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Project A: Agriculture */}
                <motion.div 
                    onClick={() => onOpenProject('CropEye')}
                    whileHover={{ scale: 1.02 }}
                    className="p-8 border border-green-500/20 rounded-2xl bg-black/40 backdrop-blur-md cursor-pointer group hover:border-green-500/50 transition-all"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <Sprout className="text-green-500" size={32} />
                            <h4 className="text-xl font-bold text-white font-mono">Agri-Tech Automata</h4>
                        </div>
                        <ChevronRight className="text-green-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        Replacing manual labor with self-deployed edge robotics utilizing Swarm Intelligence.
                    </p>
                    <span className="text-xs font-mono text-green-500 border-b border-green-500/30 pb-0.5">CLICK_TO_EXPAND_SPECS</span>
                </motion.div>

                {/* Project B: Medical */}
                <motion.div 
                    onClick={() => onOpenProject('OncoEdge')}
                    whileHover={{ scale: 1.02 }}
                    className="p-8 border border-green-500/20 rounded-2xl bg-black/40 backdrop-blur-md cursor-pointer group hover:border-green-500/50 transition-all"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <Stethoscope className="text-green-500" size={32} />
                            <h4 className="text-xl font-bold text-white font-mono">Onco-Edge Automata</h4>
                        </div>
                        <ChevronRight className="text-green-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        Privacy-first diagnostic network running entirely on edge devices to preserve anonymity.
                    </p>
                    <span className="text-xs font-mono text-green-500 border-b border-green-500/30 pb-0.5">CLICK_TO_EXPAND_SPECS</span>
                </motion.div>

            </div>
        </div>


        {/* --- 3. RESEARCH SPOTLIGHT: GISLC --- */}
        <motion.div className="mb-32">
             <div className="flex items-center gap-4 mb-10">
                <div className="h-[1px] bg-green-500/30 w-12" />
                <h3 className="text-2xl font-bold text-white font-mono tracking-widest">[ RESEARCH_SPOTLIGHT ]</h3>
                <div className="h-[1px] bg-green-500/30 flex-1" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 space-y-8">
                    <div className="p-6 rounded-xl border border-green-500/10 bg-black/40 backdrop-blur-md">
                        <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3 font-mono">
                            <Zap size={18} className="text-green-400" /> The Core Innovation
                        </h4>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Standard models use static concatenation. GISLC introduces a <span className="text-green-400">ConvLSTM-inspired GateCell2D</span>. 
                            This mechanism actively regulates feature flow, asking: <i>"Is this pixel relevant?"</i> It suppresses noise (hair, rulers) before fusion.
                        </p>
                        <button 
                            onClick={() => onOpenProject('GISLC')}
                            className="mt-4 text-xs font-mono text-green-500 hover:text-white transition-colors flex items-center gap-1"
                        >
                            VIEW_METHODOLOGY <ChevronRight size={12}/>
                        </button>
                    </div>

                    <div className="p-6 rounded-xl border border-green-500/10 bg-black/40 backdrop-blur-md">
                        <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3 font-mono">
                            <ShieldCheck size={18} className="text-green-400" /> Forensic Validity
                        </h4>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Validated via Grad-CAM. While baseline models confuse surgical markers for lesions, GISLC ignores artifacts and locks onto biological pathology.
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <div className="bg-black/80 border border-green-500/30 rounded-xl overflow-hidden backdrop-blur-md">
                         <div className="bg-green-900/20 px-6 py-4 border-b border-green-500/20 flex justify-between items-center">
                            <h4 className="text-green-400 font-mono text-sm font-bold">BENCHMARKS (MASLD)</h4>
                            <span className="text-[10px] text-green-500/50">LIVE DATA</span>
                        </div>
                        <div className="p-6">
                            <table className="w-full text-left text-sm font-mono">
                                <thead className="text-neutral-500 border-b border-white/10">
                                    <tr><th className="pb-2">Metric</th><th className="pb-2 text-right">Inception</th><th className="pb-2 text-right text-green-400">GISLC</th></tr>
                                </thead>
                                <tbody className="text-neutral-300">
                                    <tr className="border-b border-white/5"><td className="py-3">Accuracy</td><td className="py-3 text-right text-neutral-500">82.73%</td><td className="py-3 text-right font-bold text-white">98.23%</td></tr>
                                    <tr className="border-b border-white/5"><td className="py-3">F1-Macro</td><td className="py-3 text-right text-neutral-500">82.49%</td><td className="py-3 text-right font-bold text-white">98.23%</td></tr>
                                    <tr><td className="py-3">Params</td><td className="py-3 text-right text-neutral-500">6.1M</td><td className="py-3 text-right text-green-400">12.9M</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* --- 4. EXPERIENCE & ACCOMPLISHMENTS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] bg-green-500/30 w-8" />
                <h3 className="text-xl font-bold text-white font-mono tracking-widest">[ EXPERIENCE_LOG ]</h3>
            </div>
            <div className="space-y-8 border-l border-green-500/20 pl-8 ml-3">
              {experiences.map((exp, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border border-green-500 bg-black" />
                  <span className="text-xs text-green-500 font-mono mb-1 block">{exp.year}</span>
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-green-400/60 text-sm mb-2">{exp.company}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
             <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] bg-green-500/30 w-8" />
                <h3 className="text-xl font-bold text-white font-mono tracking-widest">[ ACHIEVEMENTS ]</h3>
            </div>
            
            <div className="bg-black/40 border border-white/10 p-6 rounded-lg mb-8 hover:border-green-500/50 transition-colors backdrop-blur-md">
              <h4 className="text-lg font-bold text-white mb-2">Conference Speaker</h4>
              <p className="text-neutral-400 text-sm mb-4">
                Presented research at the <span className="text-green-400">Al Ain University Student Research Conference (UAE, 2026)</span>.
              </p>
            </div>

            <a 
              href="/CV.pdf"
              download="Mohammad_Kamal_CV.pdf"
              className="inline-flex items-center gap-3 bg-green-500 text-black px-6 py-3 rounded font-bold font-mono hover:bg-green-400 transition-colors w-full justify-center md:w-auto"
            >
              <Download size={20} />
              DOWNLOAD_CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}