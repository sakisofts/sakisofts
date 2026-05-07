import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

export const Hero = () => {
  const codeString = `const engine = new DigitalArchitecture();

engine.deploy({
  scale: "global",
  security: "encrypted",
  nodes: 99.8
});

// Initializing core systems...`;

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-12">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-secondary/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-wider text-primary">
              Next-Gen Software Engineering
            </span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-display font-extrabold text-foreground leading-[0.85] tracking-tighter">
            Driven by <br/>
            <span className="text-primary italic">ingenuity.</span>
          </h1>

          <p className="text-xl text-muted max-w-md leading-relaxed font-medium">
            Sakisofts Tech Hub Limited delivers bespoke digital architectures and enterprise-scale AI solutions for global innovators.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-slate-900 dark:bg-primary text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:bg-slate-800 dark:hover:bg-primary-hover transition-all">
              Get Started
            </button>
            <button className="bg-white dark:bg-slate-800 text-foreground border border-border rounded-2xl font-bold px-8 py-4 shadow-sm hover:border-primary transition-all">
              Watch Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-8 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-border z-20 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
              <Zap className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-muted uppercase">Performance</div>
              <div className="text-xs font-extrabold">+42% Optimization</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-border z-20 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-muted uppercase">Security</div>
              <div className="text-xs font-extrabold">Enterprise Grade</div>
            </div>
          </motion.div>

          {/* Dashboard Preview Widget */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-3xl rounded-full" />
          <div className="relative bg-white dark:bg-slate-900 border border-border rounded-3xl shadow-2xl overflow-hidden">
            <div className="h-12 border-b border-border bg-slate-50/50 dark:bg-slate-800/50 px-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 h-6 w-48 bg-white dark:bg-slate-800 border border-border rounded-md" />
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-indigo-50/50 dark:bg-indigo-500/10 rounded-xl border border-indigo-100/50 dark:border-indigo-500/20">
                  <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-tighter">Active Node</div>
                  <div className="text-2xl font-bold text-indigo-900 dark:text-indigo-200">99.8%</div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-border">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Latency</div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">14ms</div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-border">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Throughput</div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">4.2TB</div>
                </div>
              </div>

              <div className="bg-slate-900 dark:bg-slate-800 rounded-xl p-6 font-mono text-xs text-indigo-200">
                {codeString.split('\n').map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-slate-500 select-none">{(i + 1).toString().padStart(2, '0')}</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 dark:text-slate-400">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700" />
                </div>
                <span>System online — Secure encrypted</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
