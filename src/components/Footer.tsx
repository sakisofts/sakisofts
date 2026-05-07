import React from 'react';
import { Logo } from './Logo';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-border pt-20 pb-10 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6 lg:col-span-1">
            <Logo />
            <p className="text-muted leading-relaxed max-w-sm mt-4 text-sm">
              Engineering the future with high-fidelity software 
              ecosystems. Bridging current challenges with futuristic digital architectures.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-border text-muted hover:text-primary hover:border-primary transition-all shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary">Company</h5>
            <ul className="space-y-4 text-sm text-muted font-semibold">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Career Pathways</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary">Resources</h5>
            <ul className="space-y-4 text-sm text-muted font-semibold">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Strategy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security Center</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary">Compliance</h5>
            <ul className="space-y-4 text-sm text-muted font-semibold">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 dark:text-muted">
          <span>© {currentYear} SakiSofts Tech Hub Limited. All rights reserved.</span>
          <div className="flex gap-8">
            <span className="text-primary font-bold">Engineering the Future</span>
            <span>Made in Global Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
