import React from 'react';
import { Code, Briefcase, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
   <section id="about" className="section">
  <div className="container mx-auto">
    <h2 className="section-title">About Me</h2>

    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-lg mb-6">
          Hi! I'm <strong>Pranav Shinde</strong>, a dedicated and curious Computer Engineering student in my final year. I’m passionate about full-stack development, and I love turning ideas into real-world projects using modern web technologies.
        </p>
        <p className="text-lg mb-6">
          I’ve been actively learning the MERN stack (MongoDB, Express, React, Node.js), and I regularly practice Data Structures and Algorithms in Java to improve my problem-solving and coding skills for interviews and placement preparation.
        </p>
        <p className="text-lg">
          When I’m not coding, I enjoy exploring Linux Operating System, Learning new technical things, and diving into cloud computing concepts. I'm driven by a constant desire to learn and grow in the world of software development.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
              <Code className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Development</h3>
              <p className="text-gray-600 dark:text-gray-300">MERN Stack Developer</p>
            </div>
          </div>
          <p>
            Building full-stack applications with a focus on clean, scalable, and maintainable code using React, Node.js, MongoDB, and Tailwind CSS.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 mr-4">
              <Briefcase className="text-secondary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">Projects & Practice</p>
            </div>
          </div>
          <p>
            Gaining hands-on experience through personal projects, coding challenges, and contributing to academic and self-initiated web development projects.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 mr-4">
              <Award className="text-purple-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">Computer Engineering</p>
            </div>
          </div>
          <p>
            Pursuing B.E. in Computer Engineering with a focus on software development, data structures, and modern technologies to prepare for a full-stack development career.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default About;