import React, { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
  {
    id: 1,
    title: "Encyclopedia System (ISKCON NVCC)",
    description: "A spiritual encyclopedia website built for ISKCON NVCC using React, Node.js, Express, and PostgreSQL. The system enables users to browse categorized spiritual content with a responsive interface.",
    image: "/iskcon.jpg",
    technologies: ["React","HTML", "CSS", "JavaScript", "PostgreSQL"],
    liveUrl: "https://pranavs1312.github.io/LIVE-PROJECT/", // Replace with deployed link
    githubUrl: "https://github.com/PranavS1312/LIVE-PROJECT", // Replace with actual repo
    category: "fullstack"
  },
  {
    id: 2,
    title: "AI-Powered SMART LMS",
    description: "A Learning Management System (LMS) enhanced with AI features to provide personalized learning experiences. Built using React for the frontend and Node.js for the backend, it includes course management, user authentication, and AI-driven recommendations.",
    image: "/lms.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "AI"],
    liveUrl: "https://smart-lms-1.onrender.com/", // Replace if hosted
    githubUrl: "https://github.com/PranavS1312/Smart-LMS", // Replace with actual repo
    category: "fullstack"
  },
  {
    id: 3,
    title: "Amazon Clone UI",
    description: "A static clone of Amazon's home page designed using pure HTML and CSS. It mimics the layout and responsiveness of the original site for learning UI design fundamentals.",
    image: "/amazon.jpg",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://pranavs1312.github.io/AmazoneClone/", // Replace if hosted
    githubUrl: "https://github.com/PranavS1312/AmazoneClone", // Replace with actual repo
    category: "frontend"
  },
  { 
    id: 4,
    title: "Mini Projects Collection",
    description: "A set of small but impactful web mini projects using HTML, CSS, and JavaScript — such as calculators, to-do apps, animated buttons, and more for front-end practice.",
    image: "/miniProjects.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://pranavs1312.github.io/Mini_projects/", // Replace with deployment link
    githubUrl: "https://github.com/PranavS1312/Mini_projects", // Replace with actual repo
    category: "frontend"
  },

];


  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === category.id 
                  ? 'bg-primary text-white' 
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end space-x-3">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary transition-colors duration-300"
                        aria-label="View source code"
                      >
                        <Github size={18} className="text-white" />
                      </a>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary transition-colors duration-300"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={18} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  >
                    <Code size={16} className="mr-1" />
                    Source Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/PranavS1312" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center"
          >
            <Github className="mr-2" size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;