import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" size={40} /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" size={40} /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" size={40} /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" size={40} /> },
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" size={40} /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" size={40} /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-100" size={40} /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" size={40} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" size={40} /> },
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" size={40} /> },
    { name: 'SQL', icon: <FaDatabase className="text-[#4479A1]" size={40} /> },
    { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" size={40} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            These are the technologies I've worked with and am proficient in.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6 flex flex-col items-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-lg font-medium text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;