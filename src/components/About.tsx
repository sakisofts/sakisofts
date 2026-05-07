import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Globe, Award } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      desc: 'To empower global innovators with bespoke digital architectures that drive independence and exponential growth.',
    },
    {
      icon: Users,
      title: 'Team Excellence',
      desc: 'A collective of senior engineers and visionary architects dedicated to pushing the boundaries of what is possible.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      desc: 'Engineering solutions that scale across borders, supporting high-traffic platforms and enterprise ecosystems.',
    },
    {
      icon: Award,
      title: 'Built to Last',
      desc: 'We prioritize technical debt reduction and long-term maintainability in every line of code we write.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah K.',
      role: 'Chief Architect',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'James Mwangi',
      role: 'Head of Fintech',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Cloud Operations',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Michael Chen',
      role: 'AI Strategy',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <section id="about" className="px-12 py-24 lg:py-32 bg-slate-50 dark:bg-slate-800/20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-display font-extrabold tracking-tighter leading-none">
                The SakiSofts <br/>
                <span className="text-primary italic">Legacy</span>
              </h2>
              <p className="text-xl text-muted font-medium leading-relaxed">
                Founded on the principles of engineering rigors and creative ingenuity, SakiSofts Tech Hub Limited has evolved from a boutique agency into a powerhouse of digital transformation.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted/80 leading-relaxed">
                We don't just build software; we engineer the future. Our approach combines deep technical expertise with a profound understanding of business logic, ensuring that every solution we deliver is not only functional but strategically vital.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-4xl font-extrabold text-primary tracking-tighter">150+</div>
                  <div className="text-[10px] font-bold text-muted uppercase tracking-widest mt-1">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-primary tracking-tighter">12+</div>
                  <div className="text-[10px] font-bold text-muted uppercase tracking-widest mt-1">Global Locations</div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-border">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Corporate Office"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-border shadow-sleek hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-sm text-muted font-medium leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
