import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Accessibility: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const points = [
    t('accessibility.points.point1'),
    t('accessibility.points.point2'),
    t('accessibility.points.point3'),
    t('accessibility.points.point4'),
  ];

  return (
    <section
      id='accessibility'
      className={`section-padding relative ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-12 left-8 sm:left-24 w-36 sm:w-52 h-36 sm:h-52 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse'></div>
        <div className='absolute top-36 right-8 sm:right-24 w-40 sm:w-56 h-40 sm:h-56 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000'></div>
        <div className='absolute bottom-8 left-16 sm:left-40 w-32 sm:w-44 h-32 sm:h-44 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000'></div>
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
            {t('accessibility.title')}{' '}
            <span
              className={
                theme === 'dark' ? 'gradient-text-dark' : 'gradient-text'
              }
            >
              {t('accessibility.highlight')}
            </span>
          </h2>
          <div className='w-24 h-1 bg-primary-600 mx-auto mb-8'></div>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {t('accessibility.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`max-w-4xl mx-auto p-8 rounded-2xl shadow-lg border ${
            theme === 'dark'
              ? 'bg-gray-800 border-gray-700'
              : 'bg-gray-50 border-gray-200'
          }`}
        >
          <h3
            className={`text-2xl md:text-3xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
          >
            {t('accessibility.sectionTitle')}
          </h3>
          <ul
            className={`space-y-4 list-disc list-inside leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {points.map(point => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Accessibility;
