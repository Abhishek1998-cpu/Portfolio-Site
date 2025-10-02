import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.categories.frontend'),
      skills: [
        { name: 'React', level: 75 },
        { name: 'React Native', level: 60 },
        { name: 'TypeScript', level: 40 },
        { name: 'Vue.js', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 70 },
      ],
    },
    {
      title: t('skills.categories.backend'),
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 90 },
        { name: 'Python', level: 65 },
        { name: 'MongoDB', level: 40 },
        { name: 'PostgreSQL', level: 40 },
        { name: 'REST APIs', level: 95 },
      ],
    },
    {
      title: t('skills.categories.tools'),
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Firebase', level: 55 },
        { name: 'AWS', level: 50 },
        { name: 'Software Extensions', level: 90 },
        { name: 'Web Scraping', level: 75 },
        { name: 'Machine Learning', level: 35 },
      ],
    },
  ];

  return (
    <section
      id='skills'
      className={`section-padding relative ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-8 left-20 sm:left-48 w-44 sm:w-64 h-44 sm:h-64 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse'></div>
        <div className='absolute top-56 right-12 sm:right-28 w-36 sm:w-52 h-36 sm:h-52 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-3000'></div>
        <div className='absolute bottom-8 left-4 sm:left-12 w-40 sm:w-56 h-40 sm:h-56 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1500'></div>
        <div className='absolute top-24 right-4 sm:right-8 w-32 sm:w-44 h-32 sm:h-44 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2500'></div>
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
            {t('skills.title')}{' '}
            <span
              className={
                theme === 'dark' ? 'gradient-text-dark' : 'gradient-text'
              }
            >
              {t('skills.highlight')}
            </span>
          </h2>
          <div className='w-24 h-1 bg-primary-600 mx-auto mb-8'></div>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 text-center ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}
              >
                {category.title}
              </h3>
              <div className='space-y-4'>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className='space-y-2'
                  >
                    <div className='flex justify-between items-center'>
                      <span
                        className={`font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className='text-primary-600 font-semibold'>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full rounded-full h-2 ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className='bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full'
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className='mt-16'
        >
          <h3
            className={`text-3xl font-bold mb-8 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
          >
            {t('skills.additionalSkills')}
          </h3>
          <div className='flex flex-wrap justify-center gap-4'>
            {[
              'E-commerce Development',
              'Platform Extensions',
              'Mobile App Development',
              'API Integration',
              'Data Analytics',
              'User Experience Design',
              'Performance Optimization',
              'Payment Gateway Integration',
              'Real-time Applications',
              'Cross-platform Development',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'bg-primary-900 text-primary-300 hover:bg-primary-800'
                    : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                }`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
