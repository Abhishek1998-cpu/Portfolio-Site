import React from 'react';
import { motion } from 'framer-motion';
import {
  Email,
  LocationOn,
  Send,
  LinkedIn,
  GitHub,
  Twitter,
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Email,
      title: t('contact.info.email'),
      value: 'abhishekverma998@gmail.com',
      href: 'mailto:abhishekverma998@gmail.com',
    },
    {
      icon: LocationOn,
      title: t('contact.info.location'),
      value: 'Uttar Pradesh, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: LinkedIn,
      href: 'https://www.linkedin.com/in/abhishek-verma-b790921a0/',
      label: 'LinkedIn',
    },
    {
      icon: GitHub,
      href: 'https://github.com/Abhishek1998-cpu',
      label: 'GitHub',
    },
    { icon: Twitter, href: 'https://x.com/abhishek998v', label: 'Twitter' },
  ];

  return (
    <section
      id='contact'
      className={`section-padding relative ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-24 left-8 sm:left-24 w-48 sm:w-68 h-48 sm:h-68 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse'></div>
        <div className='absolute top-8 right-20 sm:right-40 w-32 sm:w-44 h-32 sm:h-44 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2800'></div>
        <div className='absolute bottom-20 left-12 sm:left-28 w-40 sm:w-56 h-40 sm:h-56 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1200'></div>
        <div className='absolute top-48 right-4 sm:right-12 w-36 sm:w-48 h-36 sm:h-48 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-3600'></div>
        <div className='absolute bottom-4 right-32 sm:right-56 w-24 sm:w-32 h-24 sm:h-32 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-600'></div>
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
            {t('contact.title')}{' '}
            <span
              className={
                theme === 'dark' ? 'gradient-text-dark' : 'gradient-text'
              }
            >
              {t('contact.highlight')}
            </span>
          </h2>
          <div className='w-24 h-1 bg-primary-600 mx-auto mb-8'></div>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-3xl font-bold mb-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}
            >
              {t('contact.connect.title')}
            </h3>
            <p
              className={`mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {t('contact.connect.description')}
            </p>

            <div className='space-y-6 mb-8'>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center space-x-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group ${
                    theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                  }`}
                >
                  <div className='w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300'>
                    <info.icon className='w-6 h-6 text-primary-600' />
                  </div>
                  <div>
                    <h4
                      className={`font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      {info.title}
                    </h4>
                    <p
                      className={
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }
                    >
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4
                className={`text-lg font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}
              >
                {t('contact.follow')}
              </h4>
              <div className='flex space-x-4'>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon
                      className={`w-6 h-6 transition-colors duration-300 ${
                        theme === 'dark'
                          ? 'text-gray-400 hover:text-primary-400'
                          : 'text-gray-600 hover:text-primary-600'
                      }`}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Message Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl shadow-lg ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}
            >
              Send a Quick Message
            </h3>
            
            {/* Instructional Box */}
            <div className={`p-4 rounded-lg border mb-6 ${
              theme === 'dark' 
                ? 'bg-primary-900/20 border-primary-700' 
                : 'bg-primary-50 border-primary-200'
            }`}>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                For the quickest response, please reach out via email or LinkedIn. You can click the email button below to open your default email client with my address pre-filled.
              </p>
            </div>

            {/* Primary Email Button */}
            <motion.a
              href="mailto:abhishekverma998@gmail.com?subject=Portfolio Contact"
              className={`w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                theme === 'dark' 
                  ? 'bg-primary-600 hover:bg-primary-700' 
                  : 'bg-primary-600 hover:bg-primary-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              <span>Open Email Client</span>
            </motion.a>

            {/* Separator */}
            <div className="flex items-center my-6">
              <div className={`flex-1 h-px ${
                theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
              }`}></div>
              <span className={`px-4 text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                or
              </span>
              <div className={`flex-1 h-px ${
                theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
              }`}></div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href="https://www.linkedin.com/in/abhishek-verma-998/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center space-x-3 py-3 px-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700'
                    : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LinkedIn className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com/Abhishek1998-cpu"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center space-x-3 py-3 px-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700'
                    : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GitHub className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
