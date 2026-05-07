import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { FeaturedSolutions } from './components/FeaturedSolutions';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Workflow } from './components/Workflow';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background grid-bg selection:bg-primary/30 selection:text-primary">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <FeaturedSolutions />
          <About />
          <TechStack />
          <Workflow />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
