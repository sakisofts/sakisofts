import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Code2, Rocket, CloudLightning } from 'lucide-react';
import { cn } from '../lib/utils';

export const Workflow = () => {
  const steps = [
    {
      id: '01',
      title: 'Discovery',
      desc: 'We dive deep into your business logic, constraints, and long-term vision to define the blueprint.',
      icon: Search,
    },
    {
      id: '02',
      title: 'Planning & Architecture',
      desc: 'Defining the tech stack, data models, and infrastructure setup for maximum scalability.',
      icon: PenTool,
    },
    {
      id: '03',
      title: 'Development & Testing',
      desc: 'Agile Sprints with continuous QA and automated testing to ensure bug-free production code.',
      icon: Code2,
    },
    {
      id: '04',
      title: 'Deployment & Support',
      desc: 'Rolling out to production with 24/7 monitoring and post-launch optimization support.',
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="px-12 py-24 lg:py-32 relative overflow-hidden bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-1/2 space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-display font-extrabold tracking-tighter leading-none">
              Our Engineering <br/>
              <span className="text-primary italic">Workflow</span>
            </h2>
            <p className="text-lg text-muted font-medium">
              A rigorous, transparent process that guarantees product quality and project timeliness.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl border border-border flex items-center justify-center font-bold text-primary bg-slate-50 dark:bg-slate-800 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    {step.id}
                  </div>
                  {i !== steps.length - 1 && (
                    <div className="w-px h-full bg-border my-4" />
                  )}
                </div>
                <div className="pb-8">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-muted leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] group">
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-border">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200" 
              alt="Data Center" 
              className="w-full h-full object-cover opacity-60 dark:opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent" />
          </div>

          {/* Deployment Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-sm glass p-8 rounded-3xl shadow-2xl border-primary/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-500/20 rounded-2xl">
                <CloudLightning className="w-6 h-6 text-primary animate-pulse" />
              </div>
              <h3 className="text-xl font-bold">Cloud Deployment</h3>
            </div>
            
            <div className="space-y-4">
              <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '92%' }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-primary"
                />
              </div>
              <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-muted">
                <span>Optimizing Infrastructure</span>
                <span className="text-primary">92%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
