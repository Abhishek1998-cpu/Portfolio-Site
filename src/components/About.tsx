import React from 'react';
import { motion } from 'framer-motion';
import { Code, Web, Storage, Cloud } from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();

  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, React Native, TypeScript, Vue.js, JavaScript',
    },
    {
      icon: Storage,
      title: 'Backend Development',
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
            About{' '}
            <span
              className={
                theme === 'dark' ? 'gradient-text-dark' : 'gradient-text'
              }
            >
              Me
            </span>
          </h2>
          <div className='w-24 h-1 bg-primary-600 mx-auto mb-8'></div>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Passionate about creating innovative e-commerce solutions and
            digital experiences that solve real-world problems
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
              Full Stack Software Engineer
            </h3>
            <div
              className={`space-y-4 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              <p>
                As a Computer Science Engineering graduate with expertise in
                full-stack development, I specialize in building scalable web
                applications and digital solutions. My journey in software
                development has been driven by a passion for creating innovative
                solutions that solve real-world problems.
              </p>
              <p>
                I have hands-on experience with modern web technologies and
                frameworks, focusing on creating seamless user experiences
                through robust frontend development and efficient backend
                systems. My work spans from e-commerce platforms to mobile
                applications and web extensions.
              </p>
              <p>
                I'm passionate about continuous learning and staying updated
                with the latest technologies. When I'm not coding, you can find
                me exploring new frameworks, contributing to open-source
                projects, or working on personal projects that challenge my
                technical skills.
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
                  Projects Completed
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
                  Years Experience
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
