'use client';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // ---------------------------------------------------------
      // CONNECTING TO YOUR REAL FORMSPREE ENDPOINT
      // ---------------------------------------------------------
      const response = await fetch("https://formspree.io/f/xeeljbwj", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            Initialize <span className="text-green-500">Transmission</span>
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-green-500 to-transparent opacity-30" />
        </motion.div>

        {/* The Form */}
        <div className="relative bg-black/80 backdrop-blur-xl border border-green-500/30 p-8 md:p-12 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,255,65,0.05)]">
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />

            <form onSubmit={handleSubmit} className="space-y-8 font-mono">
                
                {/* TO Field */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 border-b border-green-500/20 pb-4">
                    <span className="text-green-500 font-bold min-w-[60px]">{'>'} TO:</span>
                    <span className="text-neutral-400 tracking-wider">moh203.kamal@gmail.com</span>
                    <span className="text-xs text-green-500/50 border border-green-500/20 px-2 py-0.5 rounded ml-auto animate-pulse">SECURE_CHANNEL_ACTIVE</span>
                </div>

                {/* FROM Field */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 border-b border-green-500/20 pb-4 group focus-within:border-green-500 transition-colors">
                    <label htmlFor="email" className="text-green-500 font-bold min-w-[60px]">{'>'} FROM:</label>
                    <input 
                        required
                        type="email" 
                        name="email"
                        id="email" 
                        placeholder="ENTER_YOUR_EMAIL_ADDRESS" 
                        className="bg-transparent border-none outline-none text-white w-full placeholder:text-neutral-700 focus:placeholder:text-green-900 transition-colors"
                    />
                </div>

                {/* MESSAGE Field */}
                <div className="flex flex-col gap-4 group focus-within:border-green-500 transition-colors">
                    <label htmlFor="message" className="text-green-500 font-bold">{'>'} DATA_PACKET:</label>
                    <textarea 
                        required
                        name="message"
                        id="message" 
                        rows={6} 
                        placeholder="TYPE_YOUR_MESSAGE_HERE..." 
                        className="bg-black/40 border border-green-500/10 rounded p-4 text-white outline-none focus:border-green-500/50 transition-all resize-none placeholder:text-neutral-700"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex items-center gap-6">
                    <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="group flex items-center gap-4 bg-green-500/10 hover:bg-green-500 text-green-500 hover:text-black px-8 py-4 rounded border border-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span className="font-bold tracking-widest">
                            {status === 'submitting' ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}
                        </span>
                        <Send size={18} className={`transition-transform ${status === 'submitting' ? 'animate-ping' : 'group-hover:translate-x-1'}`} />
                    </button>

                    {/* Status Messages */}
                    {status === 'success' && (
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-green-400">
                            <CheckCircle size={20} />
                            <span>TRANSMISSION RECEIVED.</span>
                        </motion.div>
                    )}
                    {status === 'error' && (
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-red-500">
                            <AlertCircle size={20} />
                            <span>CONNECTION ERROR. CHECK LOGS.</span>
                        </motion.div>
                    )}
                </div>

            </form>
        </div>
      </div>
    </section>
  );
}