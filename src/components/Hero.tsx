import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-primary">Pranav Shinde</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            I build exceptional and accessible digital experiences for the web. Focused on creating intuitive and performant applications.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/PranavS1312" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/pranav-shinde-326261291/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://x.com/Pranav13120" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
            <div className="absolute inset-1 rounded-full overflow-hidden bg-light-bg dark:bg-dark-bg">
              <img 
                src="/myPic.jpg" 
                alt="Pranav Shinde" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="text-primary" size={24} />
      </a>
    </section>
  );
};

export default Hero;