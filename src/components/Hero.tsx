import React from 'react';
import { motion } from 'framer-motion';
import {
  GitHub,
  LinkedIn,
  Email,
  Download,
  Twitter,
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: GitHub,
      href: 'https://github.com/Abhishek1998-cpu',
      label: 'GitHub',
    },
    {
      icon: LinkedIn,
      href: 'https://www.linkedin.com/in/abhishek-verma-b790921a0/',
      label: 'LinkedIn',
    },
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
    <section
      id='home'
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 to-black'
          : 'bg-gradient-to-br from-gray-50 to-white'
      }`}
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse'></div>
        <div className='absolute top-40 right-4 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000'></div>
        <div className='absolute -bottom-8 left-8 sm:left-40 w-48 sm:w-72 h-48 sm:h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000'></div>
      </div>

      <div className='container-max text-center relative z-10 px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='max-w-4xl mx-auto'
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-8'
          >
            <div className='w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-primary-600'>
              <img
                src='https://media.licdn.com/dms/image/v2/C4D03AQGR7hBMUql5AQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1660478240430?e=1761782400&v=beta&t=z4WU2zxfybXRgDZLXo76f-pDvxW_u05idqjD2ClfN2o'
                alt='Abhishek Verma'
                className='w-full h-full object-cover'
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
          >
            {t('hero.greeting')}{' '}
            <span
              className={
                theme === 'dark' ? 'gradient-text-dark' : 'gradient-text'
              }
            >
              {t('hero.name')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {t('hero.title')}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4'
          >
            <button
              onClick={handleDownloadResume}
              className='btn-primary flex items-center space-x-2'
            >
              <Download />
              <span>{t('hero.downloadResume')}</span>
            </button>
            <button
              className={
                theme === 'dark' ? 'btn-secondary-dark' : 'btn-secondary'
              }
            >
              {t('hero.viewWork')}
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className='flex justify-center space-x-4 sm:space-x-6 px-4'
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-white hover:bg-primary-50'
                }`}
                aria-label={social.label}
              >
                <social.icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'text-gray-400 hover:text-primary-400'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                />
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
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <div
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            theme === 'dark' ? 'border-gray-600' : 'border-gray-400'
          }`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='w-1 h-3 bg-primary-600 rounded-full mt-2'
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
