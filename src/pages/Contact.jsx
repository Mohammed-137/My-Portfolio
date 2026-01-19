import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import userData from '../data/userData.json';
 
const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
       <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
           className="space-y-8"
        >
            <div className="bg-white dark:bg-dark-surface p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary">
                            <FaEnvelope size={20} />
                        </div>
                        <div>
                            <p className="font-medium">Email</p>
                            <a href={userData.social.email} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">{userData.social.email.replace('mailto:', '')}</a>
                        </div>
                    </div>
                     <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary">
                            <FaMapMarkerAlt size={20} />
                        </div>
                        <div>
                            <p className="font-medium">Location</p>
                            <p className="text-gray-600 dark:text-gray-400">Kaniyur, Tiruppur District,TamilNadu, India</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-dark-surface p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Connect with Me</h3>
                 <div className="flex space-x-4">
                    <a href={userData.social.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        <FaGithub size={24} />
                    </a>
                    <a href={userData.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 transition-colors">
                        <FaLinkedin size={24} />
                    </a>
                     <a href={userData.social.whatsapp} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-500 transition-colors">
                        <FaWhatsapp size={24} />
                    </a>
                </div>
            </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.3 }}
           className="bg-white dark:bg-dark-surface p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
        >
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
