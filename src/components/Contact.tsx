import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronDown, Loader2, Send } from 'lucide-react';

export const Contact = () => {
  const projectTypes = [
    'Custom Software Development',
    'Fintech & Payment Systems',
    'Enterprise Cloud/DevOps',
    'WiFi/ISP Management',
  ];

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: projectTypes[0]
  });

  const benefits = [
    'Free Technical Roadmap Audit',
    'Scalability Analysis & Cost Estimation',
    'Direct Access to Senior Architects'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus('success');
  };

  return (
    <section id="contact" className="px-12 py-24 lg:py-32 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-50 dark:bg-slate-800 rounded-[3rem] border border-border p-8 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row gap-16 shadow-sleek">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
          
          <div className="w-full lg:w-1/2 space-y-10 relative z-10">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-7xl font-display font-extrabold leading-[0.9] tracking-tighter">
                Start Your <br/>
                <span className="text-primary italic">Digital</span> 
                <br/> Renaissance
              </h2>
              <p className="text-xl text-muted max-w-md font-medium">
                Ready to scale your enterprise with custom engineering? Let's discuss your roadmap today.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-4 text-foreground font-semibold">
                  <div className="p-1 rounded-full bg-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-[2.5rem] relative z-10 border border-border shadow-sleek"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Request Received</h3>
                    <p className="text-muted font-medium">
                      One of our senior architects will reach out to you within 24 hours to discuss your roadmap.
                    </p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-primary font-bold hover:underline"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-muted ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-border rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-muted ml-1">Business Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-border rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-muted ml-1">Project Type</label>
                    <div className="relative">
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full h-14 bg-slate-50 dark:bg-slate-800 border border-border rounded-2xl px-4 pr-12 text-sm font-medium text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-muted absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <button 
                    disabled={status === 'loading'}
                    className="w-full bg-primary text-white font-bold h-16 rounded-2xl flex items-center justify-center gap-3 hover:bg-primary-hover active:scale-[0.98] transition-all shadow-indigo-glow disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>Processing Request <Loader2 className="w-5 h-5 animate-spin" /></>
                    ) : (
                      <>Request a Project Quote <Send className="w-5 h-5" /></>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
