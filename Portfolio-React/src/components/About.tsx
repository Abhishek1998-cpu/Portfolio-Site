import React from 'react';
import { motion } from 'framer-motion';
import { Code, Web, Storage, Cloud } from '@mui/icons-material';

const About: React.FC = () => {
  const skills = [
    { icon: Code, title: 'Frontend Development', description: 'React, TypeScript, Next.js, Vue.js' },
    { icon: Storage, title: 'Backend Development', description: 'Node.js, Python, Express, FastAPI' },
    { icon: Web, title: 'Full Stack', description: 'MERN Stack, MEAN Stack, RESTful APIs' },
    { icon: Cloud, title: 'DevOps & Cloud', description: 'AWS, Docker, CI/CD, Microservices' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge the gap between 
            design and functionality
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Full Stack Software Engineer
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                With over 3+ years of experience in software development, I specialize in 
                building scalable web applications and digital solutions. My journey began 
                with a passion for problem-solving and has evolved into expertise across 
                the entire technology stack.
              </p>
              <p>
                I believe in writing clean, maintainable code and following best practices 
                to deliver high-quality software solutions. My experience spans from 
                frontend user interfaces to backend APIs and database design.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-600 text-sm">
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
