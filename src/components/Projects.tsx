import React from 'react';
import { motion } from 'framer-motion';
import { GitHub, Launch, Code } from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const Projects: React.FC = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: 'Product Recommendation Extension',
      description:
        'A sophisticated product recommendation system built for Fynd platform, featuring AI-powered suggestions, user behavior analysis, and seamless integration with e-commerce workflows.',
      image: '/api/placeholder/600/400',
      technologies: [
        'React',
        'Node.js',
        'Machine Learning',
        'MongoDB',
        'REST APIs',
      ],
      github: 'https://github.com/Abhishek1998-cpu',
      live: 'https://extensions.fynd.com/extensions/product-recommendation',
      featured: true,
    },
    {
      title: 'Fynd Coupons Platform',
      description:
        'A comprehensive coupon management and distribution platform with real-time validation, user analytics, and merchant dashboard integration.',
      image: '/api/placeholder/600/400',
      technologies: [
        'Vue.js',
        'Express',
        'PostgreSQL',
        'Redis',
        'Payment Gateway',
      ],
      github: 'https://github.com/Abhishek1998-cpu',
      live: 'https://www.fyndcoupons.com/',
      featured: true,
    },
    {
      title: 'Frolic Extension',
      description:
        'A browser extension for enhanced shopping experience with price comparison, deal alerts, and seamless checkout integration.',
      image: '/api/placeholder/600/400',
      technologies: [
        'JavaScript',
        'Chrome APIs',
        'Web Scraping',
        'React',
        'Firebase',
      ],
      github: 'https://github.com/Abhishek1998-cpu',
      live: 'https://extensions.fynd.com/extensions/frolic',
      featured: true,
    },
    {
      title: 'Fynd Mobile App',
      description:
        'A cross-platform mobile application for the Fynd platform with offline capabilities, push notifications, and smooth user experience.',
      image: '/api/placeholder/600/400',
      technologies: [
        'React Native',
        'Redux',
        'Firebase',
        'AWS',
        'Push Notifications',
      ],
      github: 'https://github.com/Abhishek1998-cpu',
      live: 'https://play.google.com/store/apps/details?id=co.go.fynd&hl=en&gl=US',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations and interactive elements.',
      image: '/api/placeholder/600/400',
      technologies: [
        'React',
        'TypeScript',
        'Framer Motion',
        'Tailwind CSS',
        'Vite',
      ],
      github: 'https://github.com/Abhishek1998-cpu',
      live: '#',
      featured: false,
    },
    {
      title: 'E-commerce Analytics Dashboard',
      description:
        'A comprehensive analytics platform for tracking sales, user behavior, and business metrics with real-time data visualization.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      github: 'https://github.com/Abhishek1998-cpu',
      live: '#',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section
      id='projects'
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
            Featured{' '}
            <span
              className={
                theme === 'dark' ? 'gradient-text-dark' : 'gradient-text'
              }
            >
              Projects
            </span>
          </h2>
          <div className='w-24 h-1 bg-primary-600 mx-auto mb-8'></div>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            A showcase of my recent work and technical achievements
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className='grid lg:grid-cols-2 gap-8 mb-16'>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className='h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center'>
                <Code className='w-16 h-16 text-primary-600' />
              </div>
              <div className='p-6'>
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        theme === 'dark'
                          ? 'bg-primary-900 text-primary-300'
                          : 'bg-primary-100 text-primary-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex space-x-4'>
                  <a
                    href={project.github}
                    className={`flex items-center space-x-2 transition-colors duration-300 ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-primary-400'
                        : 'text-gray-600 hover:text-primary-600'
                    }`}
                  >
                    <GitHub className='w-5 h-5' />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className={`flex items-center space-x-2 transition-colors duration-300 ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-primary-400'
                        : 'text-gray-600 hover:text-primary-600'
                    }`}
                  >
                    <Launch className='w-5 h-5' />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3
            className={`text-3xl font-bold mb-8 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}
          >
            Other Projects
          </h3>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className='h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                  <Code className='w-12 h-12 text-gray-600' />
                </div>
                <div className='p-4'>
                  <h4
                    className={`text-lg font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    {project.title}
                  </h4>
                  <p
                    className={`text-sm mb-3 line-clamp-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-1 mb-3'>
                    {project.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded text-xs ${
                          theme === 'dark'
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          theme === 'dark'
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className='flex space-x-3'>
                    <a
                      href={project.github}
                      className={`transition-colors duration-300 ${
                        theme === 'dark'
                          ? 'text-gray-500 hover:text-primary-400'
                          : 'text-gray-500 hover:text-primary-600'
                      }`}
                    >
                      <GitHub className='w-4 h-4' />
                    </a>
                    <a
                      href={project.live}
                      className={`transition-colors duration-300 ${
                        theme === 'dark'
                          ? 'text-gray-500 hover:text-primary-400'
                          : 'text-gray-500 hover:text-primary-600'
                      }`}
                    >
                      <Launch className='w-4 h-4' />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <p
            className={`mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Interested in seeing more of my work?
          </p>
          <a
            href='https://github.com/Abhishek1998-cpu'
            target='_blank'
            rel='noopener noreferrer'
            className='btn-primary inline-block'
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
