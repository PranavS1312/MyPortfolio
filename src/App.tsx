import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = document.documentElement.scrollTop;
      const scrollPercentage = (currentScroll / totalScroll) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative">
        <div 
          className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-300 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
           <Footer /> 
        </main>
  
      </div>
    </ThemeProvider>
  );
};

export default App;