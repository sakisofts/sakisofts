import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { cn } from '../lib/utils';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'Kojo Mensah',
      role: 'CEO, FintechAfrica',
      content: 'SakiSofts transformed our manual payment processing into a seamless, automated gateway. Their engineering precision is unmatched in the region.',
      size: 'large',
    },
    {
      name: 'Sarah Okafor',
      role: 'CTO, LinkUp ISP',
      content: 'The WiFi Billing system they built for us using FreeRADIUS has scaled to 10,000+ users without a single hitch. Exceptional performance.',
    },
    {
      name: 'David Zulu',
      role: 'Operations Lead, LogiTrade',
      content: 'Their ERP solution for our supply chain management reduced operational costs by 30% within the first quarter. Truly transformative.',
    },
    {
      name: 'Amara Diallo',
      role: 'Founder, EduTech Hub',
      content: 'From mobile apps to robust backends, SakiSofts is our go-to partner for all complex engineering needs. They understand the African market and global standards.',
      size: 'wide',
      stars: 5,
    },
  ];

  return (
    <section className="px-12 py-24 lg:py-32 bg-slate-50 dark:bg-slate-800/30 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <h2 className="text-5xl lg:text-6xl font-display font-extrabold text-center tracking-tighter leading-none">
          Trusted by <span className="text-primary italic">Innovators</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "bg-white dark:bg-slate-900 p-10 rounded-3xl flex flex-col justify-between group shadow-sleek hover:border-primary/30 border border-border transition-all duration-500",
                r.size === 'large' && "md:row-span-2",
                r.size === 'wide' && "md:col-span-2"
              )}
            >
              <div className="space-y-6">
                <Quote className="w-10 h-10 text-primary opacity-10 group-hover:opacity-100 transition-opacity" />
                <p className={cn(
                  "text-foreground italic leading-relaxed",
                  r.size === 'large' ? "text-2xl font-medium" : "text-lg"
                )}>
                  "{r.content}"
                </p>
              </div>

              <div className="mt-12 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 border border-border" />
                  <div>
                    <div className="font-bold text-foreground">{r.name}</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-muted">{r.role}</div>
                  </div>
                </div>
                
                {r.stars && (
                   <div className="flex gap-1">
                    {[...Array(r.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
