import React from 'react';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email, ArrowUpward } from '@mui/icons-material';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: GitHub, href: 'https://github.com/Abhishek1998-cpu', label: 'GitHub' },
    { icon: LinkedIn, href: 'https://www.linkedin.com/in/abhishek-verma-b790921a0/', label: 'LinkedIn' },
    { icon: Email, href: 'mailto:abhishekverma998@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-xl font-bold">Abhishek Verma</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Full Stack Software Engineer specializing in e-commerce solutions, 
                mobile applications, and browser extensions that drive business growth.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-gray-300">
                <p>abhishekverma998@gmail.com</p>
                <p>Uttar Pradesh, India</p>
              </div>
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © 2024 Abhishek Verma. All rights reserved.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUpward className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
