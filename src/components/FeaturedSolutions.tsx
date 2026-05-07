import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, UtensilsCrossed, Activity, CreditCard, BarChart3, Database, Shield, Pill, ShoppingCart } from 'lucide-react';
import { cn } from '../lib/utils';

export const FeaturedSolutions = () => {
  const solutions = [
    {
      title: 'Namz Entertainment',
      tag: 'React.js & CDN',
      desc: 'A high-traffic entertainment and video streaming platform engineered for low-latency content delivery across Africa.',
      icon: BarChart3,
      footer: 'Streaming Engine',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Lyte Retail Core',
      tag: 'Cloud Strategy',
      desc: 'Robust, cloud-based inventory management system designed for modern retail with real-time syncing capabilities.',
      icon: Database,
      footer: 'Retail Architecture',
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Enterprise Portal',
      tag: 'Secure Auth',
      desc: 'Managed business engine with multi-factor authentication and high-fidelity analytics dashboarding.',
      icon: Shield,
      footer: 'Encrypted Gateway',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Lyte Finance Core',
      tag: 'Fintech Architecture',
      desc: 'Next-generation digital banking and ledger ecosystem designed for high-throughput financial transactions and institutional security.',
      icon: TrendingUp,
      footer: 'Finance Engine',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Lyte Restaurant POS Core',
      tag: 'Hospitality Tech',
      desc: 'Unified service management platform for high-end hospitality, featuring real-time kitchen orchestration and global analytics.',
      icon: UtensilsCrossed,
      footer: 'POS Architecture',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800',
      accent: true,
    },
    {
      title: 'Lyte Medical Core',
      tag: 'Health Systems',
      desc: 'Enterprise-grade healthcare management system with encrypted patient records and clinical workflow automation.',
      icon: Activity,
      footer: 'Medical Gateway',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Lyte Billing Engine Core',
      tag: 'Infrastructure',
      desc: 'High-fidelity revenue management and automated billing infrastructure for multi-tenant SaaS and telecom enterprises.',
      icon: CreditCard,
      footer: 'Billing Architecture',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Lyte Pharmacy Core',
      tag: 'Healthcare Retail',
      desc: 'Specialized pharmaceutical inventory and compliance engine designed for accurate prescription management and cold-chain logistics.',
      icon: Pill,
      footer: 'Pharmacy Architecture',
      image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Lyte Supermarket Core',
      tag: 'Retail Infrastructure',
      desc: 'High-volume FMCG retail ecosystem with integrated supply chain management, automated restocking, and loyalty architecture.',
      icon: ShoppingCart,
      footer: 'Supermarket POS',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="solutions" className="px-12 py-24 lg:py-32 bg-slate-50 dark:bg-slate-800/30 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-display font-extrabold text-foreground tracking-tighter leading-none">
            Enterprise <span className="text-primary italic">Solutions</span>
          </h2>
          <p className="text-xl text-muted font-medium">
            Proven architectures engineered to drive digital independence for global innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group bg-white dark:bg-slate-900 border border-border rounded-3xl overflow-hidden flex flex-col h-full shadow-sleek transition-all duration-500",
                s.accent && "ring-2 ring-primary ring-offset-2 dark:ring-offset-slate-900"
              )}
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {s.title}
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-primary border border-indigo-100 dark:border-indigo-500/20 rounded-full">
                    {s.tag}
                  </span>
                </div>
                
                <p className="text-sm text-muted leading-relaxed flex-grow mb-6">
                  {s.desc}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-bold text-muted mb-6">
                  <s.icon className="w-4 h-4 text-primary" />
                  {s.footer}
                </div>
                
                <button className="w-full py-4 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold hover:bg-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
