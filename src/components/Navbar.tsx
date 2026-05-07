import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-12 h-20 flex items-center",
        scrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border shadow-sleek" : "bg-transparent"
      )}
    >
      <div className="w-full mx-auto flex justify-between items-center">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-muted hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-muted"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          
          <button className="hidden lg:block text-sm font-semibold text-foreground hover:text-primary px-4 transition-colors">
            Insights
          </button>
          
          <button className="bg-primary text-white font-bold text-sm px-6 py-2.5 rounded-full hover:bg-primary-hover transition-all shadow-md shadow-primary/20">
            Contact Sales
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-b border-border shadow-sleek overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold hover:text-primary flex justify-between items-center transition-colors"
                >
                  {link.name}
                  <ChevronRight className="w-5 h-5 text-primary" />
                </a>
              ))}
              <div className="pt-6 border-t border-border flex flex-col gap-4">
                <button className="bg-slate-900 dark:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg">Request Quote</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
