import React, { useState, useEffect } from 'react';
import { Menu, Close } from '@mui/icons-material';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
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
          ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img 
                src="https://media.licdn.com/dms/image/v2/C4D03AQGR7hBMUql5AQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1660478240430?e=1761782400&v=beta&t=z4WU2zxfybXRgDZLXo76f-pDvxW_u05idqjD2ClfN2o" 
                alt="Abhishek Verma" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-gray-800">Abhishek Verma</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button onClick={handleDownloadResume} className="btn-primary">
              Download Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <Close className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-primary-600 font-medium py-2 text-left transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <button onClick={handleDownloadResume} className="btn-primary w-full mt-4">
                Download Resume
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
