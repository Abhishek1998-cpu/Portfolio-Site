import React from 'react';
import { motion } from 'framer-motion';
import { Code, Web, Storage, Cloud } from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const skills = [
    {
      icon: Code,
      title: t('about.skills.frontend.title'),
      description: 'React, React Native, TypeScript, Vue.js, JavaScript',
    },
    {
      icon: Storage,
      title: t('about.skills.backend.title'),
      description: 'Node.js, Express.js, Python, MongoDB, PostgreSQL',
    },
    {
      icon: Web,
      title: 'E-commerce Solutions',
      description: 'Payment Integration, Platform Extensions, Mobile Apps',
    },
    {
      icon: Cloud,
      title: 'Tools & Platforms',
      description: 'Firebase, AWS, Chrome APIs, Git, Web Scraping',
    },
  ];

  return (
    <section
      id='about'
      className={`section-padding relative ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-32 right-8 sm:right-32 w-40 sm:w-56 h-40 sm:h-56 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse'></div>
        <div className='absolute top-16 left-12 sm:left-24 w-32 sm:w-48 h-32 sm:h-48 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000'></div>
        <div className='absolute bottom-16 right-16 sm:right-40 w-36 sm:w-52 h-36 sm:h-52 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000'></div>
        <div className='absolute top-48 left-8 sm:left-16 w-28 sm:w-40 h-28 sm:h-40 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1000'></div>
      </div>

      <div className='container-max relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
          >
            {t('about.title')}{' '}
            <span
              className={
                theme === 'dark' ? 'gradient-text-dark' : 'gradient-text'
              }
            >
              {t('about.highlight')}
            </span>
          </h2>
          <div className='w-24 h-1 bg-primary-600 mx-auto mb-8'></div>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-3xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}
            >
              {t('about.role')}
            </h3>
            <div
              className={`space-y-4 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              <p>
                {t('about.description1')}
              </p>
              <p>
                {t('about.description2')}
              </p>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-2 gap-6 mt-8'>
              <div
                className={`text-center p-6 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <div className='text-3xl font-bold text-primary-600 mb-2'>
                  7+
                </div>
                <div
                  className={
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }
                >
                  {t('about.stats.projects')}
                </div>
              </div>
              <div
                className={`text-center p-6 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <div className='text-3xl font-bold text-primary-600 mb-2'>
                  3+
                </div>
                <div
                  className={
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }
                >
                  {t('about.stats.experience')}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='grid grid-cols-1 sm:grid-cols-2 gap-6'
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-100'
                }`}
              >
                <div className='w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4'>
                  <skill.icon className='w-6 h-6 text-primary-600' />
                </div>
                <h4
                  className={`text-lg font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {skill.title}
                </h4>
                <p
                  className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
