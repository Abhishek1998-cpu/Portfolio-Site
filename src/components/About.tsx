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
      description: 'Payment Integration, Browser Extensions, Mobile Apps',
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
      className={`section-padding ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className='container-max'>
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
                  50+
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
