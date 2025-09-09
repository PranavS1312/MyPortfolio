import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <button 
            onClick={scrollToTop}
            className="p-4 bg-primary rounded-full text-white shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;