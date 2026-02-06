'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import SkillsMarquee from '@/components/SkillsMarquee';
import NeuralBackground from '@/components/NeuralBackground';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { Github, Linkedin, X, Cpu, Sprout, ShieldCheck, Zap, Globe, Radio, Database, Layers, Server, Fingerprint, Network, Brain } from 'lucide-react';

// --- EXPANDED DATA: Technical Specs for Popups ---
const PROJECT_DETAILS: any = {
  "AlMusiun": {
    title: "The Al-Musi'un Continuum",
    subtitle: "Theoretical Framework for Infinite Contextual Intelligence",
    content: (
      <div className="space-y-8 font-mono text-sm text-neutral-300 leading-relaxed">
         
         <div className="p-6 border border-green-500/20 bg-green-900/10 rounded-xl">
           <h4 className="text-green-400 font-bold mb-4 text-lg flex items-center gap-2">
             <Zap size={20}/> I. The Entropy Problem
           </h4>
           <p className="mb-4">
             Current silicon-based computing faces an inevitable "Entropy Death." As transistor shrinking approaches the physical limits of quantum tunneling, the traditional method of increasing intelligence through "more hardware" is no longer viable. We are hitting a density wall where adding more memory linearly increases heat and energy consumption to unsustainable levels.
           </p>
           <p>
             The Al-Musi'un Continuum proposes a paradigm shift from <strong>Discrete Spatial Storage</strong> (bits on a chip) to <strong>Recursive Frequency Domains</strong>. Instead of storing data in "places," we store it as "waves" within a self-regenerating field.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-white/10 bg-black/40 rounded-xl">
               <h5 className="text-white font-bold mb-3 flex items-center gap-2"><Globe size={18}/> Hyperbolic Geometry</h5>
               <p className="text-xs text-neutral-400 leading-6">
                 We map data onto a <strong>Non-Euclidean Hyperbolic Manifold</strong> (specifically the Poincaré Ball model). In Euclidean space, capacity is limited by volume. In Hyperbolic space, the internal volume expands exponentially relative to its boundary. This allows us to create an "infinite" internal data space that fits within a finite physical boundary, effectively decoupling storage capacity from physical size.
               </p>
            </div>
             <div className="p-6 border border-white/10 bg-black/40 rounded-xl">
               <h5 className="text-white font-bold mb-3 flex items-center gap-2"><Radio size={18}/> Resonance Retrieval</h5>
               <p className="text-xs text-neutral-400 leading-6">
                 Traditional retrieval is $O(\log N)$—it gets slower as you add data. Our architecture uses <strong>Resonance Tuning</strong>. The AI sends a specific "Query Pulse" into the dome. If that pulse matches the frequency of a stored "Standing Soliton," a constructive interference spike occurs instantly. This grants <strong>$O(1)$ Instant Access</strong> regardless of whether the database holds one megabyte or one yottabyte.
               </p>
            </div>
        </div>

        <div className="p-6 border border-white/10 bg-black/40 rounded-xl">
           <h5 className="text-white font-bold mb-3 text-lg">II. The "Protected Ceiling" (Boundary Conditions)</h5>
           <p className="mb-4">
             To prevent signal degradation, the architecture utilizes a <strong>Dirichlet Boundary Condition</strong> that acts as a perfect thermodynamic mirror.
           </p>
           <ul className="list-disc pl-4 space-y-2 text-neutral-400 text-xs">
             <li>
               <strong>The Reflection Mechanism:</strong> When a data frequency expands to the physical limit of the dome, it does not dissipate. Instead, the boundary reflects it inward with zero energy loss.
             </li>
             <li>
               <strong>Standing Solitons:</strong> This reflection creates a "Standing Wave" pattern. The data becomes a self-sustaining soliton that requires near-zero energy to maintain, solving the power consumption crisis of modern data centers.
             </li>
             <li>
               <strong>Orthogonal Encoding:</strong> By using Orthogonal Phase-Encoding, trillions of these unique wave patterns can occupy the exact same physical volume without interfering with each other, much like how multiple radio stations exist in the same air space.
             </li>
           </ul>
        </div>
      </div>
    )
  },

  "CropEye": {
    title: "CropEye: Smart Agriculture Assistant",
    subtitle: "Full-Stack Agronomic Platform & Robotics Roadmap",
    content: (
      <div className="space-y-8 font-mono text-sm text-neutral-300 leading-relaxed">
        
        {/* --- SECTION 1: ARCHITECTURE --- */}
        <div className="p-6 border border-green-500/20 bg-green-900/10 rounded-xl">
          <h4 className="text-green-400 font-bold mb-4 text-lg flex items-center gap-2">
            <Cpu size={20}/> System Architecture & AI Pipeline
          </h4>
          <p className="mb-4">
            CropEye is not just a simple classification app; it is a complex <strong>Multi-Stage Inference System</strong> designed to operate in low-connectivity rural environments. The pipeline transforms raw camera input into actionable agronomic advice through three distinct stages:
          </p>
          <div className="space-y-4">
            <div className="bg-black/30 p-4 rounded border border-white/5">
                <strong className="text-white block mb-1">Stage 1: Precision Detection (YOLOv8s)</strong>
                <p className="text-xs text-neutral-400">
                    We implemented <strong>YOLOv8s</strong> (You Only Look Once, Small) as the primary object detection engine. Unlike standard classifiers that look at an entire image, YOLOv8s isolates specific leaves and regions of interest (ROI) within a complex field background. It achieved a high mAP@50 on our custom dataset of Tomato and Potato blight, ensuring that the background noise (soil, sky, weeds) does not confuse the diagnosis.
                </p>
            </div>
            <div className="bg-black/30 p-4 rounded border border-white/5">
                <strong className="text-white block mb-1">Stage 2: Efficient Classification (ShuffleNet V2)</strong>
                <p className="text-xs text-neutral-400">
                    Once a leaf is detected and cropped, it is passed to <strong>ShuffleNet V2</strong>. We chose ShuffleNet over ResNet because of its "Channel Shuffle" operation, which drastically reduces computational cost (FLOPs) while maintaining accuracy. This allows the model to grade the severity of the disease (Early, Middle, Late stage) directly on the user's mobile device without needing a heavy cloud server.
                </p>
            </div>
            <div className="bg-black/30 p-4 rounded border border-white/5">
                <strong className="text-white block mb-1">Stage 3: Generative Advisory (Gemini 1.5 Flash)</strong>
                <p className="text-xs text-neutral-400">
                    The structured data (Disease Type + Severity Score) is sent to the <strong>Gemini 1.5 Flash API</strong>. We use a specialized prompt engineering framework to force the LLM to act as an "Agronomic Expert," generating precise chemical treatment plans, organic alternatives, and irrigation adjustments based on the specific diagnosis.
                </p>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: FULL STACK --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="p-6 border border-white/10 bg-black/40 rounded-xl">
              <h5 className="text-white font-bold mb-3 flex items-center gap-2"><Layers size={18}/> Mobile Engineering</h5>
              <p className="text-xs text-neutral-400 leading-6">
                 The frontend is built with <strong>Flutter</strong> to ensure cross-platform compatibility (iOS/Android). Key features include:
                 <br/>• <strong>Offline-First Architecture:</strong> Using local SQLite caching so farmers can use the app even without internet.
                 <br/>• <strong>GPS Tagging:</strong> Automatically geotags every scan to create a "Heatmap" of disease spread across the farm.
                 <br/>• <strong>Firebase Auth:</strong> Secure user management and cloud syncing when connectivity is restored.
              </p>
           </div>
           <div className="p-6 border border-white/10 bg-black/40 rounded-xl">
              <h5 className="text-white font-bold mb-3 flex items-center gap-2"><Server size={18}/> Backend Infrastructure</h5>
              <p className="text-xs text-neutral-400 leading-6">
                 The inference engine is hosted on a high-performance <strong>FastAPI</strong> server. We utilize asynchronous non-blocking code to handle multiple farmer requests simultaneously. The backend orchestrates the handoff between the YOLO detection model, the ShuffleNet classifier, and the Gemini API, returning a unified JSON response to the app in under 2 seconds.
              </p>
           </div>
        </div>

        {/* --- SECTION 3: ROBOTICS --- */}
         <div className="p-6 border border-white/10 bg-black/40 rounded-xl">
           <h5 className="text-white font-bold mb-3 text-lg flex items-center gap-2"><Sprout size={18}/> Future: Autonomous Robotics Integration</h5>
           <p className="mb-4">
             The current app is just the "Brain." The next phase involves giving it a "Body." We are developing a prototype for a <strong>Self-Deployed Rover Unit</strong> that can navigate fields autonomously.
           </p>
           <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-neutral-400">
               <li className="bg-green-900/10 p-3 rounded border border-green-500/10">
                   <strong className="text-green-400 block mb-1">Swarm Intelligence</strong>
                   Multiple rovers communicating via a local mesh network to cover large hectares efficiently without a central commander.
               </li>
               <li className="bg-green-900/10 p-3 rounded border border-green-500/10">
                   <strong className="text-green-400 block mb-1">Precision Treatment</strong>
                   Using the YOLO coordinates to target specific leaves with micro-nozzles, reducing pesticide usage by up to 40%.
               </li>
               <li className="bg-green-900/10 p-3 rounded border border-green-500/10">
                   <strong className="text-green-400 block mb-1">Resource Mgmt</strong>
                   Integrating soil moisture sensors to automate irrigation valves, ensuring optimal water usage per crop zone.
               </li>
           </ul>
        </div>
      </div>
    )
  },

  "OncoEdge": {
    title: "Onco-Edge Automata",
    subtitle: "Privacy-First Cancer Detection Network",
    content: (
      <div className="space-y-8 font-mono text-sm text-neutral-300 leading-relaxed">
         <div className="p-6 border border-green-500/20 bg-green-900/10 rounded-xl">
          <h4 className="text-green-400 font-bold mb-4 text-lg flex items-center gap-2"><ShieldCheck size={20}/> The "Edge" Philosophy</h4>
          <p className="mb-4">
            Medical AI often fails in the real world because it relies on massive cloud servers. This creates two problems: <strong>Latency</strong> (slow diagnosis) and <strong>Privacy Risks</strong> (sending sensitive patient photos to the cloud).
          </p>
          <p>
            Onco-Edge Automata solves this by moving the intelligence <strong>directly to the device</strong>. By compressing deep learning models using advanced quantization techniques, we can run clinical-grade diagnostic tools on cheap, low-power microcontrollers available in developing nations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="p-6 border border-white/10 bg-black/40 rounded-xl">
              <h5 className="text-white font-bold mb-3 flex items-center gap-2"><Network size={18}/> Federated Learning</h5>
              <p className="text-xs text-neutral-400 leading-6">
                 To improve the model without violating patient privacy, we use Federated Learning. Instead of uploading patient images to a central server, the training happens <strong>locally on the device</strong>. Only the mathematical "weight updates" (what the model learned) are encrypted and sent to the global model. This ensures that no raw patient data ever leaves the clinic.
              </p>
           </div>
           <div className="p-6 border border-white/10 bg-black/40 rounded-xl">
              <h5 className="text-white font-bold mb-3 flex items-center gap-2"><Brain size={18}/> 8-Bit Quantization</h5>
              <p className="text-xs text-neutral-400 leading-6">
                 We utilize Post-Training Quantization (PTQ) to convert 32-bit floating-point weights into 8-bit integers. This reduces the model size by 4x and speeds up inference by 3x, allowing complex CNNs to run on battery-powered ARM processors without overheating or draining power.
              </p>
           </div>
        </div>
      </div>
    )
  },

  "GISLC": {
    title: "Research Spotlight: GISLC",
    subtitle: "Gated-Inception for Skin Lesion Classification",
    content: (
      <div className="space-y-8 font-mono text-sm text-neutral-300 leading-relaxed">
        
        {/* --- SECTION 1: METHODOLOGY --- */}
        <div className="p-6 border border-green-500/20 bg-green-900/10 rounded-xl">
           <h4 className="text-green-400 font-bold mb-4 text-lg flex items-center gap-2"><Brain size={20}/> Methodology: The "Gated" Approach</h4>
           <p className="mb-4">
             The core hypothesis of this research was that standard Convolutional Neural Networks (CNNs) "look at everything" equally, treating hair, skin, and rulers with the same importance as the lesion itself. This leads to false positives.
           </p>
           <p className="mb-4">
             We engineered a solution called <strong>Adaptive Spatial Gating</strong>. Instead of blindly concatenating features, we introduced a custom module called <strong>GateCell2D</strong>. Inspired by LSTM logic but applied to spatial vision, this module acts as a smart filter:
           </p>
           <ul className="list-disc pl-4 space-y-2 text-neutral-300 text-xs">
             <li><strong>Input Gate ($\sigma$):</strong> Analyzes incoming pixels and decides "Is this pixel relevant to a lesion?"</li>
             <li><strong>Forget Gate ($\sigma$):</strong> Actively suppresses noise features (hair strands, surgical marker ink, ruler lines).</li>
             <li><strong>Output Gate ($\tanh$):</strong> Amplifies the texture and border irregularity features that are clinically significant for melanoma detection.</li>
           </ul>
        </div>

        {/* --- SECTION 2: ARCHITECTURE & TRAINING --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-6 border border-white/10 bg-black/40 rounded-xl">
                <h5 className="text-white font-bold mb-3">Hybrid Architecture</h5>
                <p className="text-xs text-neutral-400 leading-6">
                   We utilized a <strong>Frozen Backbone Strategy</strong>. We took a pre-trained Inception-V3 network (trained on ImageNet) and froze its early feature extraction layers. We then attached our custom Gated-Inception Head. This drastically reduced the trainable parameters to just <strong>12.9M</strong> (compared to 25M+ for ResNet50), making the model lightweight enough for edge deployment while maintaining SOTA accuracy.
                </p>
             </div>
             <div className="p-6 border border-white/10 bg-black/40 rounded-xl">
                <h5 className="text-white font-bold mb-3">Training Pipeline</h5>
                <p className="text-xs text-neutral-400 leading-6">
                   The model was trained on the <strong>MASLD</strong> dataset using the Adam optimizer with a dynamic learning rate scheduler. To combat class imbalance (benign moles are far more common than melanoma), we applied:
                   <br/>• <strong>Geometric Augmentation:</strong> Random rotations, flips, and zooms.
                   <br/>• <strong>Color Jitter:</strong> Simulating different lighting conditions in clinics.
                   <br/>• <strong>Weighted Cross-Entropy Loss:</strong> Penalizing the model more heavily for missing a malignant case.
                </p>
             </div>
        </div>
        
        {/* --- SECTION 3: VALIDATION --- */}
         <div className="p-6 border border-white/10 bg-black/40 rounded-xl">
            <h5 className="text-white font-bold mb-3 text-lg flex items-center gap-2"><ShieldCheck size={18}/> Forensic Validation (Grad-CAM)</h5>
            <p className="mb-3">
               Accuracy numbers can be misleading. To prove the model effectively "learned" dermatology, we used <strong>Grad-CAM (Gradient-weighted Class Activation Mapping)</strong> to visualize the decision-making process.
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed">
               The heatmaps confirmed our hypothesis: Standard models often highlighted the ruler or the dark corners of the image. The <strong>GISLC model</strong>, thanks to the Gating mechanism, showed heatmaps tightly contoured around the lesion's border and internal texture, proving it was ignoring environmental artifacts and focusing strictly on biological pathology.
            </p>
         </div>
      </div>
    )
  },

  "ComingSoon": {
      title: "Project Classified",
      subtitle: "Documentation Pending",
      content: (
          <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full border-2 border-green-500/30 flex items-center justify-center mb-4 animate-pulse">
                  <ShieldCheck size={32} className="text-green-500" />
              </div>
              <h4 className="text-xl font-bold text-white font-mono mb-2">ACCESS DENIED</h4>
              <p className="text-neutral-400 font-mono text-sm max-w-xs">
                  Detailed documentation for this project is currently being compiled and declassified. Check back soon.
              </p>
          </div>
      )
  }
};

const projects = [
  {
    id: "GISLC",
    title: "GISLC",
    category: "Medical AI Research",
    year: "2026",
    description: "A hybrid Gated-Inception CNN-LSTM model for skin lesion classification. Features an Adaptive Spatial Gating mechanism that achieved 98.23% accuracy on clinical datasets.",
    stack: ["Python", "TensorFlow", "CNN-LSTM", "Computer Vision"]
  },
  {
    id: "CropEye",
    title: "CropEye",
    category: "Smart Agriculture Assistant",
    year: "2026",
    description: "Smart agronomic assistant. Uses YOLOv8 for pest detection and ShuffleNet V2 for mobile-efficient classification. Includes Gemini LLM for real-time advice.",
    stack: ["Flutter", "FastAPI", "YOLOv8", "Gemini LLM"]
  },
  {
    id: "ComingSoon",
    title: "Ensemble Analytics",
    category: "Data Science Pipelines",
    year: "2025",
    description: "Dual-pipeline system: An NLP engine for Fake News detection (99.8% accuracy) and a stacked XGBoost/CatBoost ensemble for Heart Disease prediction (93.3% accuracy).",
    stack: ["XGBoost", "NLP", "Scikit-Learn", "Data Engineering"]
  }
];

export default function Home() {
  const container = useRef(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const openModal = (key: string) => setSelectedProject(key);
  const closeModal = () => setSelectedProject(null);

  return (
    <main ref={container} className="relative min-h-screen bg-black selection:bg-green-500/30">
      
      <NeuralBackground />
      
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] opacity-80 pointer-events-none z-0" />

      {/* --- HERO --- */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center px-4"
        >
          <div className="mb-4 flex justify-center">
            <span className="px-3 py-1 rounded-full border border-green-500/30 bg-green-950/30 text-xs text-green-400 tracking-widest uppercase backdrop-blur-md shadow-[0_0_15px_rgba(0,255,0,0.2)]">
              Neural Network Online
            </span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-[0.9] mb-6 drop-shadow-2xl">
            MOHAMMAD <br /> KAMAL<span className="text-green-500">.</span>
          </h1>
          
          <p className="text-green-100/60 tracking-[0.2em] text-xs md:text-sm uppercase max-w-md mx-auto leading-loose font-mono mb-8">
            Data Scientist & Research Engineer <br/>
            <span className="text-neutral-500">Based in Amman, Jordan</span>
          </p>

          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/mohammad-abdelaziz-851107292/" target="_blank" className="text-neutral-400 hover:text-green-400 transition-colors">
                <Linkedin size={24} />
            </a>
            <a href="https://github.com/Mohammad-Kamal23" target="_blank" className="text-neutral-400 hover:text-green-400 transition-colors">
                <Github size={24} />
            </a>
          </div>

        </motion.div>
      </section>

      {/* --- SELECTED WORKS --- */}
      <section id="work" className="relative z-10 py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="mb-24"
          >
            <div className="flex items-center gap-4 mb-4">
                 <div className="h-[1px] bg-green-500/30 w-12" />
                 <h2 className="text-4xl font-bold text-white font-mono tracking-tight">SELECTED_WORKS</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-16">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project} 
                onClick={() => openModal(project.id)} 
              />
            ))}
          </div>
        </div>
      </section>

      <SkillsMarquee />
      
      {/* PASS OPEN HANDLER TO ABOUT */}
      <About onOpenProject={openModal} />
      
      <Contact />

      <footer className="relative z-10 py-12 text-center text-neutral-600 text-sm border-t border-white/5 font-mono bg-black/80 backdrop-blur-md">
        <div className="flex justify-center gap-6 mb-4">
             <a href="https://www.linkedin.com/in/mohammad-abdelaziz-851107292/" className="hover:text-green-500">LinkedIn</a>
             <a href="https://github.com/Mohammad-Kamal23" className="hover:text-green-500">GitHub</a>
        </div>
        <p>&copy; 2026 Mohammad Kamal. Signal End.</p>
      </footer>

      {/* --- GLOBAL POPUP MODAL --- */}
      <AnimatePresence>
        {selectedProject && PROJECT_DETAILS[selectedProject] && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }}
              className="bg-black border border-green-500/30 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto relative shadow-[0_0_50px_rgba(0,255,65,0.1)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-green-900/20 backdrop-blur-xl p-6 border-b border-green-500/20 flex justify-between items-start z-10">
                 <div>
                    <h3 className="text-2xl font-bold text-white font-mono">{PROJECT_DETAILS[selectedProject].title}</h3>
                    <p className="text-green-400 text-xs font-mono mt-1">{PROJECT_DETAILS[selectedProject].subtitle}</p>
                 </div>
                 <button onClick={closeModal} className="text-neutral-400 hover:text-white">
                    <X size={24} />
                 </button>
              </div>
              
              <div className="p-8">
                 {PROJECT_DETAILS[selectedProject].content}
              </div>
              
              <div className="p-4 border-t border-white/10 bg-white/5 text-center">
                 <button onClick={closeModal} className="text-xs font-mono text-neutral-400 hover:text-white uppercase">
                    [ Close Terminal ]
                 </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}