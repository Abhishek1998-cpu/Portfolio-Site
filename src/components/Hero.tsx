import React from 'react';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Email, Download, Twitter } from '@mui/icons-material';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: GitHub, href: 'https://github.com/Abhishek1998-cpu', label: 'GitHub' },
    { icon: LinkedIn, href: 'https://www.linkedin.com/in/abhishek-verma-b790921a0/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/abhishek998v', label: 'Twitter' },
    { icon: Email, href: 'mailto:abhishekverma998@gmail.com', label: 'Email' },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Abhishek_Verma_CSE_31_June_2025 (1).pdf';
    link.download = 'Abhishek_Verma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container-max text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-primary-600">
              <img 
                src="https://media.licdn.com/dms/image/v2/C4D03AQGR7hBMUql5AQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1660478240430?e=1761782400&v=beta&t=z4WU2zxfybXRgDZLXo76f-pDvxW_u05idqjD2ClfN2o" 
                alt="Abhishek Verma" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Abhishek</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            Full Stack Software Engineer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I specialize in building innovative e-commerce solutions, browser extensions, and mobile applications 
            that enhance user experiences and drive business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button onClick={handleDownloadResume} className="btn-primary flex items-center space-x-2">
              <Download />
              <span>Download Resume</span>
            </button>
            <button className="btn-secondary">
              View My Work
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary-50"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-600 hover:text-primary-600 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary-600 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
