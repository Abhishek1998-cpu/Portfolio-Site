import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GitHub,
  LinkedIn,
  Email,
  ArrowUpward,
  Language,
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage, languageNames } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang as any);
    setIsLanguageDropdownOpen(false);
  };

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
    { icon: Email, href: 'mailto:abhishekverma998@gmail.com', label: 'Email' },
  ];

  return (
    <footer
      className={`text-white ${theme === 'dark' ? 'bg-black' : 'bg-gray-800'}`}
    >
      <div className='container-max'>
        {/* Main Footer Content */}
        <div className='py-12'>
          <div
            className='grid md:grid-cols-4 gap-8'
            style={{ padding: '1rem' }}
          >
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className='flex items-center space-x-2 mb-4'>
                <div className='w-10 h-10 rounded-lg overflow-hidden'>
                  <img
                    src='https://media.licdn.com/dms/image/v2/C4D03AQGR7hBMUql5AQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1660478240430?e=1761782400&v=beta&t=z4WU2zxfybXRgDZLXo76f-pDvxW_u05idqjD2ClfN2o'
                    alt='Abhishek Verma'
                    className='w-full h-full object-cover'
                  />
                </div>
                <span className='text-xl font-bold'>Abhishek Verma</span>
              </div>
              <p
                className={`leading-relaxed ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-300'
                }`}
              >
                Full Stack Software Engineer specializing in e-commerce
                solutions, mobile applications, and browser extensions that
                drive business growth.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className='text-lg font-semibold mb-4'>{t('footer.quickLinks')}</h3>
              <ul className='space-y-2'>
                {[t('header.nav.about'), t('header.nav.skills'), t('header.nav.projects'), t('header.nav.contact')].map(link => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className='text-gray-300 hover:text-primary-400 transition-colors duration-300'
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
              <h3 className='text-lg font-semibold mb-4'>{t('footer.getInTouch')}</h3>
              <div
                className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-300'
                }`}
              >
                <p>abhishekverma998@gmail.com</p>
                <p>Uttar Pradesh, India</p>
              </div>
              <div className='flex space-x-4 mt-4'>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      theme === 'dark'
                        ? 'bg-gray-800 hover:bg-primary-600'
                        : 'bg-gray-700 hover:bg-primary-600'
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon className='w-5 h-5' />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Language Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='relative'
            >
              <h3 className='text-lg font-semibold mb-4'>
                {t('footer.language')}
              </h3>
              <div className='relative'>
                <button
                  onClick={() =>
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                  }
                  className={`w-full flex items-center justify-between px-4 py-2 rounded-lg border transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700'
                      : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <div className='flex items-center space-x-2'>
                    <Language className='w-4 h-4' />
                    <span>{languageNames[language]}</span>
                  </div>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isLanguageDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </button>

                {isLanguageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`absolute top-full left-0 right-0 mt-1 rounded-lg shadow-lg z-50 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700'
                        : 'bg-white border-gray-300'
                    } border`}
                  >
                    {Object.entries(languageNames).map(([code, name]) => (
                      <button
                        key={code}
                        onClick={() => handleLanguageChange(code)}
                        className={`w-full px-4 py-2 text-left hover:bg-primary-600 hover:text-white transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                          language === code
                            ? 'bg-primary-600 text-white'
                            : theme === 'dark'
                              ? 'text-gray-300'
                              : 'text-gray-800'
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t py-6 ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-700'
          }`}
          style={{paddingRight: "1rem", paddingLeft: "1rem"}}
        >
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-sm mb-4 md:mb-0 ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
              }`}
            >
              {t('footer.copyright')}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className='w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-all duration-300 hover:scale-110'
              aria-label='Scroll to top'
            >
              <ArrowUpward className='w-5 h-5' />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
