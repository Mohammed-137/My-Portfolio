import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import userData from '../data/userData.json';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-surface border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {userData.name}. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href={userData.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href={userData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href={userData.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
              <FaWhatsapp size={20} />
            </a>
            <a href={userData.social.email} className="text-gray-400 hover:text-red-500 transition-colors">
              <HiMail size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
