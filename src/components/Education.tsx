import React from 'react';
import { BookOpen, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Savitribai Phule Pune University",
      location: "Pune, Maharashtra, India",
      period: "2022 - 2026 (Ongoing)",
      description:
        "Currently pursuing a degree in Computer Engineering with a strong focus on Data Structures & Algorithms (Java), Web Development (MERN Stack), Cloud Computing, and Core Computer Science subjects.",
      achievements: [
        "Completed core Java and practicing intermediate concepts",
        "Solving 30+ DSA problems on LeetCode",
        "Actively learning MERN stack (React, Node.js, MongoDB, Express.js)",
        "Participating in coding competitions and hackathons"
      ]
    },
    {
      degree: "Professional Certifications",
      institution: "Coursera, Google & Other Platforms",
      location: "Online",
      period: "2022 - Present",
      description:
        "Continuously improving skills through certifications and self-learning to stay industry-ready in software development and cloud computing.",
      achievements: [
        "Google Cybersecurity Certification",
        "Coursera Certifications in Cloud & Web Development",
        "Hands-on projects in Web Development and DSA"
      ]
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "Maharashtra State Board",
      location: "Maharashtra, India",
      period: "2021 - 2022",
      description:
        "Completed Higher Secondary Education in Science stream with focus on Mathematics and Computer Science.",
      achievements: ["Strong foundation in Mathematics and Problem-Solving"]
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Maharashtra State Board",
      location: "Maharashtra, India",
      period: "2020 - 2021",
      description:
        "Completed Secondary School education with distinction and interest in computers, technology and mathematics.",
      achievements: ["Consistently good academic performance"]
    }
  ];  


return (
    <section id="education" className="section">
      <div className="container mx-auto">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Education items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>
                
                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <BookOpen className="text-primary mr-2" size={20} />
                      <h3 className="text-xl font-semibold">{item.degree}</h3>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                      <Award className="mr-2" size={16} />
                      <span>{item.institution}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                      <MapPin className="mr-2" size={16} />
                      <span>{item.location}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                      <Calendar className="mr-2" size={16} />
                      <span>{item.period}</span>
                    </div>
                    
                    <p className="mb-4">{item.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="/resume.jpg" download="Pranav_Resume.jpg" className="btn btn-outline">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;