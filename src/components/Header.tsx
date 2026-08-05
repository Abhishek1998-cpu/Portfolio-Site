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
    { name: t('header.nav.accessibility'), href: '#accessibility' },
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
    link.href = `${import.meta.env.BASE_URL}Abhishek_Verma_AI_Frontend_Engineering.pdf`;
    link.download = 'Abhishek_Verma_AI_Frontend_Engineering.pdf';
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
      <nav className='container-max px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-3 sm:py-4'>
          {/* Logo */}
          <div
            onClick={() => scrollToSection('#home')}
            className='flex items-center space-x-2 sm:space-x-2.5 cursor-pointer group flex-shrink-0'
          >
            <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-red-500 via-primary-600 to-red-800 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 ring-1 ring-white/20 select-none flex-shrink-0'>
              <span className='text-white font-extrabold text-sm sm:text-base tracking-tight leading-none'>
                AV
              </span>
            </div>
            <span
              className={`text-sm sm:text-base font-medium transition-colors duration-300 ${
                theme === 'dark'
                  ? 'text-white group-hover:text-primary-400'
                  : 'text-gray-800 group-hover:text-primary-600'
              }`}
            >
              You're Welcome
            </span>
          </div>

          {/* Desktop Navigation (Laptops & Desktops) */}
          <div className='hidden lg:flex items-center space-x-5 xl:space-x-8'>
            {navItems.map(item => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-primary-400'
                    : 'text-gray-700 hover:text-primary-600'
                } text-sm xl:text-base font-medium transition-colors duration-300 relative group`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                    theme === 'dark' ? 'bg-primary-400' : 'bg-primary-600'
                  } transition-all duration-300 group-hover:w-full`}
                ></span>
              </button>
            ))}
            <button
              onClick={handleDownloadResume}
              className='btn-primary text-sm xl:text-base py-2.5 px-4 xl:py-3 xl:px-6'
            >
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

          {/* Mobile & Tablet Controls */}
          <div className='lg:hidden flex items-center space-x-1 sm:space-x-2'>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label='Toggle theme'
            >
              {theme === 'dark' ? <LightMode className='w-5 h-5' /> : <DarkMode className='w-5 h-5' />}
            </button>
            <button
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label='Toggle navigation menu'
            >
              {isMenuOpen ? (
                <Close
                  className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Navigation */}
        {isMenuOpen && (
          <div
            className={`lg:hidden ${
              theme === 'dark'
                ? 'bg-gray-900/98 border-gray-800 shadow-2xl'
                : 'bg-white/98 border-gray-200 shadow-2xl'
            } border-t py-4 px-4 sm:px-6 rounded-b-2xl backdrop-blur-lg animate-fadeIn`}
          >
            <div className='flex flex-col space-y-3'>
              {navItems.map(item => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-primary-400 hover:bg-gray-800/60'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100/60'
                  } font-medium py-2.5 px-3 rounded-lg text-left transition-colors duration-200`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={handleDownloadResume}
                className='btn-primary w-full mt-2 py-3'
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
