import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Email,
  LocationOn,
  Send,
  LinkedIn,
  GitHub,
  Twitter,
  CheckCircle,
} from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Show success popup
    setShowSuccess(true);
    // Reset form
    reset();
    // Hide success popup after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Email,
      title: 'Email',
      value: 'abhishekverma998@gmail.com',
      href: 'mailto:abhishekverma998@gmail.com',
    },
    {
      icon: LocationOn,
      title: 'Location',
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
      className={`section-padding ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
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
            Get In{' '}
            <span
              className={
                theme === 'dark' ? 'gradient-text-dark' : 'gradient-text'
              }
            >
              Touch
            </span>
          </h2>
          <div className='w-24 h-1 bg-primary-600 mx-auto mb-8'></div>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Ready to collaborate? Let's discuss your next project or just say
            hello!
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
              Let's Connect
            </h3>
            <p
              className={`mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              I'm always interested in hearing about new opportunities in
              e-commerce development, mobile applications, and innovative web
              solutions. Whether you have a project in mind or just want to
              connect, I'd love to hear from you!
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
                Follow Me
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

          {/* Contact Form */}
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
              Send Message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    {...register('name', {
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      errors.name
                        ? 'input-error'
                        : theme === 'dark'
                          ? 'dark-input'
                          : 'light-input'
                    }`}
                    placeholder='Your Name'
                  />
                  {errors.name && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      errors.email
                        ? 'input-error'
                        : theme === 'dark'
                          ? 'dark-input'
                          : 'light-input'
                    }`}
                    placeholder='your@email.com'
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor='subject'
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  {...register('subject', {
                    required: 'Subject is required',
                    minLength: {
                      value: 5,
                      message: 'Subject must be at least 5 characters',
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    errors.subject
                      ? 'input-error'
                      : theme === 'dark'
                        ? 'dark-input'
                        : 'light-input'
                  }`}
                  placeholder='Subject'
                />
                {errors.subject && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='message'
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id='message'
                  rows={6}
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters',
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none ${
                    errors.message
                      ? 'input-error'
                      : theme === 'dark'
                        ? 'dark-input'
                        : 'light-input'
                  }`}
                  placeholder='Your message...'
                />
                {errors.message && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type='submit'
                className='w-full btn-primary flex items-center justify-center space-x-2'
              >
                <Send />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className={`p-8 rounded-xl shadow-2xl max-w-md mx-4 ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <div className='text-center'>
              <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
              <h3
                className={`text-2xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}
              >
                Message Sent!
              </h3>
              <p
                className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Thank you for your message. I'll get back to you soon!
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
