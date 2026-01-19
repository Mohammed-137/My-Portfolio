import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaGraduationCap } from 'react-icons/fa';
import userData from '../data/userData.json';

const About = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-center">
        {/* Profile Image Section */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 lg:col-span-4 flex justify-center md:justify-start"
        >
            <div className="relative w-64 h-80 md:w-full md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                <img 
                    src="/images/profile-about.jpg" 
                    alt="About Me" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
            {...fadeIn} 
            className="md:col-span-8 lg:col-span-8 text-center md:text-left"
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {userData.bio}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond coding, I'm passionate about continuous learning and staying updated with the latest industry trends. I believe in writing clean, maintainable code and building user interfaces that are delightful to use.
            </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
        >
            <h3 className="text-2xl font-bold flex items-center">
                <FaCode className="mr-3 text-primary" /> Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
                {['React', 'Vite', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Framer Motion'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 rounded-md text-sm font-medium">
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6"
        >
             <h3 className="text-2xl font-bold flex items-center">
                <FaServer className="mr-3 text-secondary" /> Backend & Tools
            </h3>
             <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub', 'VS Code', 'Postman'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 rounded-md text-sm font-medium">
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-dark-surface rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm"
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FaGraduationCap className="mr-3 text-gray-700 dark:text-gray-300" /> Education
        </h3>
        <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 space-y-8">
            <div className="relative">
                <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-primary border-4 border-white dark:border-dark-surface"></div>
                <h4 className="text-lg font-bold">MERN Stack Development</h4>
                <p className="text-gray-500 text-sm">Present</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Specializing in full-stack web development.</p>
            </div>
            <div className="relative">
                <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 border-4 border-white dark:border-dark-surface"></div>
                 <h4 className="text-lg font-bold">Bachelor of Commerce (B.Com)</h4>
                 <p className="text-gray-500 text-sm">Graduated</p>
                 <p className="text-gray-600 dark:text-gray-400 mt-1">Strong foundation in business principles, now leveraged in building user-centric solutions.</p>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
