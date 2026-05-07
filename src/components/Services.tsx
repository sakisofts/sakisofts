import React from 'react';
import { motion } from 'motion/react';
import { 
  AppWindow, 
  Smartphone, 
  CreditCard, 
  Cloud, 
  Wifi, 
  Bot, 
  ShieldCheck, 
  Network,
  Plus
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Services = () => {
  const services = [
    {
      title: 'Cloud Strategy',
      desc: 'Optimizing infrastructure for seamless scalability and security with global-grade cloud patterns.',
      icon: Cloud,
    },
    {
      title: 'AI Integration',
      desc: 'Deploying proprietary LLMs and custom automation tailored for enterprise-specific business needs.',
      icon: Bot,
    },
    {
      title: 'Product Labs',
      desc: 'Rapid prototyping and MVP development for visionary startups and high-growth innovators.',
      icon: Smartphone,
    },
    {
      title: 'Data Engineering',
      desc: 'Transforming raw signals into high-fidelity actionable insights and robust data ecosystems.',
      icon: Network,
    },
    {
      title: 'Custom Software',
      desc: 'Bespoke applications tailored to unique enterprise scale architectures and high-performance needs.',
      icon: AppWindow,
    },
    {
      title: 'Fintech Systems',
      desc: 'Seamless integration of localized and international payment architectures for secure commerce.',
      icon: CreditCard,
    },
    {
      title: 'WiFi Billing',
      desc: 'Automated ISP and hotspot management using FreeRADIUS for scalable digital distribution.',
      icon: Wifi,
    },
    {
      title: 'Cyber Security',
      desc: 'Advanced threat detection and end-to-end data encryption to safeguard your digital presence.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="services" className="px-12 py-24 lg:py-32 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-5xl lg:text-6xl font-display font-extrabold text-foreground tracking-tighter leading-none">
            Comprehensive <br/>
            <span className="text-primary italic">Engineering</span>
          </h2>
          <p className="text-lg text-muted max-w-md font-medium">
            End-to-end digital infrastructure built for high performance and global reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 border border-border p-8 rounded-3xl shadow-sleek hover:shadow-indigo-glow hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">{s.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
