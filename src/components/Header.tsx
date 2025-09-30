import React, { useState, useEffect } from 'react';
import { Menu, Close, LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('header.nav.home'), href: '#home' },
    { name: t('header.nav.about'), href: '#about' },
    { name: t('header.nav.skills'), href: '#skills' },
    { name: t('header.nav.projects'), href: '#projects' },
    { name: t('header.nav.contact'), href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Abhishek_Verma_CSE_31_June_2025 (1).pdf';
    link.download = 'Abhishek_Verma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-gray-900 shadow-lg backdrop-blur-md bg-opacity-95'
            : 'bg-white shadow-lg backdrop-blur-md bg-opacity-95'
          : 'bg-transparent'
      }`}
    >
      <nav className='container-max'>
        <div
          className='flex items-center justify-between py-4'
          style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
        >
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 rounded-lg overflow-hidden'>
              <img
                src='https://media.licdn.com/dms/image/v2/C4D03AQGR7hBMUql5AQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1660478240430?e=1761782400&v=beta&t=z4WU2zxfybXRgDZLXo76f-pDvxW_u05idqjD2ClfN2o'
                alt='Abhishek Verma'
                className='w-full h-full object-cover'
              />
            </div>
            <span
              className={`text-md font-medium ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}
            >
              You're Welcome
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map(item => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-primary-400'
                    : 'text-gray-700 hover:text-primary-600'
                } font-medium transition-colors duration-300 relative group`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                    theme === 'dark' ? 'bg-primary-400' : 'bg-primary-600'
                  } transition-all duration-300 group-hover:w-full`}
                ></span>
              </button>
            ))}
            <button onClick={handleDownloadResume} className='btn-primary'>
              {t('header.downloadResume')}
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label='Toggle theme'
            >
              {theme === 'dark' ? <LightMode /> : <DarkMode />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center space-x-2'>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label='Toggle theme'
            >
              {theme === 'dark' ? <LightMode /> : <DarkMode />}
            </button>
            <button className='p-2' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <Close
                  className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${
              theme === 'dark'
                ? 'bg-gray-900 border-gray-700'
                : 'bg-white border-gray-200'
            } border-t py-4`}
            style={{ padding: '1rem' }}
          >
            <div className='flex flex-col space-y-4'>
              {navItems.map(item => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-primary-400'
                      : 'text-gray-700 hover:text-primary-600'
                  } font-medium py-2 text-left transition-colors duration-300`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={handleDownloadResume}
                className='btn-primary w-full mt-4'
              >
                {t('header.downloadResume')}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
