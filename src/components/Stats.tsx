import React from 'react';
import { motion } from 'motion/react';

export const Stats = () => {
  const stats = [
    { label: 'Projects Delivered', value: '250+' },
    { label: 'Tech Stacks', value: '19+' },
    { label: 'API Requests', value: '50M+' },
    { label: 'Data Security', value: '100%' },
    { label: 'Satisfaction Rate', value: '4.9/5' },
  ];

  return (
    <section className="px-12 py-20 border-y border-border bg-slate-50/50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-12 text-center lg:text-left">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <div className="text-4xl font-bold text-primary">{stat.value}</div>
            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted whitespace-nowrap">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
