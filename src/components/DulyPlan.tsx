import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  Close,
  PlayArrow,
  ChatBubbleOutline,
  Bolt,
  BarChart,
  Shield,
  AccessTime,
  People,
  Star,
  ExpandMore,
  ExpandLess,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
  KeyboardArrowDown,
  AutoAwesome,
  ArrowForward,
} from '@mui/icons-material';
import ShimmerLoader, { ShimmerBox } from './ShimmerLoader';

const DulyPlan: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Show shimmer for at least 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const clientLogos = ['msj', 'Circoolas', 'Schibang', 'Catalog', 'Amway', 'Hourglass'];

  const features = [
    {
      icon: <ChatBubbleOutline />,
      title: 'Share team inboxes',
      description: 'Unified inbox for all your social media messages across platforms.',
    },
    {
      icon: <Bolt />,
      title: 'Deliver instant answers',
      description: 'Automate replies and provide instant support to your audience.',
    },
    {
      icon: <BarChart />,
      title: 'Manage your team with reports',
      description: 'Monitor team performance and track contributions with detailed reports.',
    },
  ];

  const differentiators = [
    {
      icon: <ChatBubbleOutline />,
      title: 'Share team inboxes',
      description: 'Collaborate seamlessly with your team on social media management.',
    },
    {
      icon: <Bolt />,
      title: 'Deliver instant answers',
      description: 'Automated responses that keep your audience engaged 24/7.',
    },
    {
      icon: <BarChart />,
      title: 'Manage your team with reports',
      description: 'Comprehensive analytics to optimize your social media strategy.',
    },
    {
      icon: <Shield />,
      title: 'Trusted with millions',
      description: 'Secure platform trusted by millions of users worldwide.',
    },
    {
      icon: <AccessTime />,
      title: '24/7 with you always',
      description: 'Round-the-clock support whenever you need assistance.',
    },
    {
      icon: <People />,
      title: 'The people you love to work',
      description: 'Work with a team that understands your business needs.',
    },
  ];

  const testimonials = [
    {
      quote:
        "We've been using DulyPlan's enterprise plan to improve our digital marketing with new projects and it is totally a game changer for us.",
      name: 'Jon Steven',
      role: 'CEO, DulyPlan',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      quote:
        "DulyPlan has transformed how we manage our social media presence. The analytics and team collaboration features are outstanding.",
      name: 'Sarah Johnson',
      role: 'Marketing Director, TechCorp',
      avatar: 'https://i.pravatar.cc/150?img=47',
    },
    {
      quote:
        'The automation features save us hours every week. Our engagement rates have increased significantly since we started using DulyPlan.',
      name: 'Michael Chen',
      role: 'Founder, StartupXYZ',
      avatar: 'https://i.pravatar.cc/150?img=33',
    },
  ];

  const achievements = [
    { number: '2,400+', label: 'Total clients' },
    { number: '300%', label: 'Return on investment' },
    { number: '100K+', label: 'Total posts per month' },
    { number: '500+', label: '5-star reviews' },
  ];

  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, we offer a 14-day free trial with full access to all features. No credit card required.',
    },
    {
      question: 'Can I change my plan?',
      answer:
        'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
    },
    {
      question: 'What are your cancellation policies?',
      answer:
        'You can cancel your subscription at any time. There are no cancellation fees, and you can continue using the service until the end of your billing period.',
    },
    {
      question: 'Do you offer any discounts for students?',
      answer:
        'Yes, we offer a 50% discount for students with a valid student ID. Contact our support team to apply.',
    },
    {
      question: 'How does DulyPlan work?',
      answer:
        'DulyPlan connects to your social media accounts and provides a unified dashboard to schedule posts, manage messages, analyze performance, and collaborate with your team.',
    },
    {
      question: 'How do I create an account?',
      answer:
        'Simply click the "Sign Up" button in the header, enter your email address, and follow the setup wizard to connect your social media accounts.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing! We'll send updates to ${email}`);
    setEmail('');
  };

  // Shimmer Loading Component
  if (isLoading) {
    return (
      <div className='min-h-screen bg-white'>
        {/* Navigation Shimmer */}
        <nav className='bg-white sticky top-0 z-50 shadow-sm'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
              <div className='flex items-center space-x-2'>
                <ShimmerBox width='w-8' height='h-8' className='rounded' />
                <ShimmerLoader width='w-24' height='h-6' />
              </div>
              <div className='hidden md:flex items-center space-x-6'>
                {[...Array(5)].map((_, i) => (
                  <ShimmerLoader key={i} width='w-20' height='h-4' />
                ))}
                <ShimmerLoader width='w-16' height='h-9' className='rounded-lg' />
                <ShimmerLoader width='w-20' height='h-9' className='rounded-lg' />
              </div>
              <ShimmerBox width='w-8' height='h-8' className='md:hidden rounded' />
            </div>
          </div>
        </nav>

        {/* Hero Section Shimmer */}
        <section
          className='text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'
          style={{ backgroundColor: '#0F87FF' }}
        >
          <div className='absolute bottom-0 left-0 right-0'>
            <svg
              viewBox='0 0 1440 120'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-full h-24'
              preserveAspectRatio='none'
            >
              <path
                d='M0 120 L0 100 Q720 40 1440 100 L1440 120 Z'
                fill='white'
              />
            </svg>
          </div>
          <div className='container mx-auto max-w-5xl text-center relative z-10'>
            <div className='mb-6 mx-auto max-w-4xl'>
              <ShimmerLoader height='h-12' className='mb-4 bg-white/20' />
              <ShimmerLoader height='h-12' className='mb-4 bg-white/20' />
              <ShimmerLoader height='h-12' width='w-3/4' className='mx-auto bg-white/20' />
            </div>
            <div className='mb-10 mx-auto max-w-3xl'>
              <ShimmerLoader height='h-6' className='mb-2 bg-white/20' />
              <ShimmerLoader height='h-6' className='mb-2 bg-white/20' />
              <ShimmerLoader height='h-6' width='w-5/6' className='mx-auto bg-white/20' />
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
              <ShimmerLoader width='w-40' height='h-12' className='rounded-lg bg-white/20' />
              <ShimmerLoader width='w-40' height='h-12' className='rounded-lg bg-white/20' />
            </div>
            <div className='mt-12 mb-8'>
              <ShimmerBox
                width='w-full'
                height='h-96'
                className='bg-white/10 border-2 border-white/20'
              />
            </div>
          </div>
        </section>

        {/* Client Logos Shimmer */}
        <section className='py-12 px-4 sm:px-6 lg:px-8 bg-white'>
          <div className='container mx-auto'>
            <ShimmerLoader height='h-5' width='w-64' className='mx-auto mb-8' />
            <div className='flex flex-wrap justify-center items-center gap-8 md:gap-12'>
              {[...Array(6)].map((_, i) => (
                <ShimmerLoader key={i} width='w-24' height='h-8' />
              ))}
            </div>
          </div>
        </section>

        {/* Features Shimmer */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
          <div className='container mx-auto max-w-6xl'>
            <ShimmerLoader height='h-10' width='w-96' className='mx-auto mb-4' />
            <div className='grid md:grid-cols-3 gap-8 mt-12'>
              {[...Array(3)].map((_, i) => (
                <div key={i} className='text-center p-6'>
                  <ShimmerBox width='w-16' height='h-16' className='mx-auto mb-4 rounded-full' />
                  <ShimmerLoader height='h-6' width='w-3/4' className='mx-auto mb-3' />
                  <ShimmerLoader height='h-4' className='mb-2' />
                  <ShimmerLoader height='h-4' width='w-5/6' className='mx-auto' />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer Shimmer */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
          <div className='container mx-auto max-w-6xl'>
            <ShimmerLoader height='h-10' width='w-96' className='mx-auto mb-4' />
            <ShimmerLoader height='h-5' width='w-2/3' className='mx-auto mb-12' />
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12 mb-16`}
              >
                <div className='flex-1'>
                  <ShimmerLoader height='h-8' width='w-64' className='mb-4' />
                  <div className='space-y-3'>
                    <ShimmerLoader height='h-4' />
                    <ShimmerLoader height='h-4' />
                    <ShimmerLoader height='h-4' width='w-5/6' />
                  </div>
                </div>
                <div className='flex-1'>
                  <ShimmerBox height='h-64' />
                </div>
              </div>
            ))}
            <div className='text-center mt-12'>
              <ShimmerLoader width='w-32' height='h-12' className='mx-auto rounded-lg' />
            </div>
          </div>
        </section>

        {/* AI Hashtag Generator Shimmer */}
        <section className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white'>
          <div className='container mx-auto max-w-7xl'>
            <div className='text-center mb-8 md:mb-12'>
              <ShimmerLoader height='h-6' width='w-32' className='mx-auto mb-4 rounded-full' />
              <ShimmerLoader height='h-10' width='w-96' className='mx-auto' />
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-8 md:gap-12'>
              <div className='w-full lg:w-1/2 flex justify-center'>
                <ShimmerBox width='w-full' height='h-96' className='max-w-md rounded-lg' />
              </div>
              <div className='w-full lg:w-1/2'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className='bg-white border border-gray-200 rounded-lg p-4 md:p-6'>
                      <ShimmerBox width='w-16' height='h-16' className='mx-auto mb-4 rounded-full' />
                      <ShimmerLoader height='h-6' width='w-3/4' className='mx-auto mb-2' />
                      <ShimmerLoader height='h-4' className='mb-4' />
                      <ShimmerLoader height='h-10' width='w-full' className='rounded-lg' />
                    </div>
                  ))}
                </div>
                <div className='mt-6 md:mt-8 flex flex-col items-center gap-4'>
                  <div className='flex gap-2'>
                    {[...Array(3)].map((_, i) => (
                      <ShimmerBox key={i} width='w-2' height='h-2' className='rounded-full' />
                    ))}
                  </div>
                  <ShimmerLoader width='w-32' height='h-10' className='rounded-lg' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Are We Different Shimmer */}
        <section className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white'>
          <div className='container mx-auto max-w-6xl'>
            <ShimmerLoader height='h-10' width='w-80' className='mx-auto mb-4' />
            <ShimmerLoader height='h-5' width='w-2/3' className='mx-auto mb-12' />
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[...Array(6)].map((_, i) => (
                <div key={i} className='p-6 bg-gray-50 rounded-lg'>
                  <ShimmerBox width='w-12' height='h-12' className='mb-4 rounded' />
                  <ShimmerLoader height='h-6' width='w-3/4' className='mb-3' />
                  <ShimmerLoader height='h-4' />
                  <ShimmerLoader height='h-4' width='w-5/6' className='mt-2' />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Shimmer */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
          <div className='container mx-auto max-w-6xl'>
            <ShimmerLoader height='h-10' width='w-80' className='mx-auto mb-4' />
            <ShimmerLoader height='h-5' width='w-96' className='mx-auto mb-12' />
            <div className='grid md:grid-cols-3 gap-8'>
              {[...Array(3)].map((_, i) => (
                <div key={i} className='bg-white border border-gray-200 rounded-lg p-6'>
                  <div className='flex mb-4'>
                    {[...Array(5)].map((_, j) => (
                      <ShimmerBox key={j} width='w-5' height='h-5' className='mr-1' />
                    ))}
                  </div>
                  <ShimmerLoader height='h-4' className='mb-2' />
                  <ShimmerLoader height='h-4' className='mb-2' />
                  <ShimmerLoader height='h-4' width='w-5/6' className='mb-6' />
                  <div className='flex items-center gap-3'>
                    <ShimmerBox width='w-12' height='h-12' className='rounded-full' />
                    <div>
                      <ShimmerLoader width='w-24' height='h-4' className='mb-2' />
                      <ShimmerLoader width='w-32' height='h-3' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Shimmer */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
          <div className='container mx-auto max-w-6xl'>
            <ShimmerLoader height='h-10' width='w-96' className='mx-auto mb-4' />
            <ShimmerLoader height='h-5' width='w-2/3' className='mx-auto mb-12' />
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              {[...Array(4)].map((_, i) => (
                <div key={i} className='text-center p-6 bg-blue-50 rounded-lg'>
                  <ShimmerLoader height='h-12' width='w-24' className='mx-auto mb-2' />
                  <ShimmerLoader height='h-5' width='w-32' className='mx-auto' />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Shimmer */}
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
          <div className='container mx-auto max-w-4xl'>
            <ShimmerLoader height='h-10' width='w-80' className='mx-auto mb-4' />
            <ShimmerLoader height='h-5' width='w-full' className='mb-12' />
            <div className='space-y-4'>
              {[...Array(6)].map((_, i) => (
                <div key={i} className='border border-gray-200 rounded-lg overflow-hidden'>
                  <div className='px-6 py-4 flex items-center justify-between'>
                    <ShimmerLoader height='h-5' width='w-3/4' />
                    <ShimmerBox width='w-6' height='h-6' className='rounded' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Shimmer */}
        <section
          className='py-20 px-4 sm:px-6 lg:px-8 text-white'
          style={{ backgroundColor: '#0F87FF' }}
        >
          <div className='container mx-auto max-w-2xl text-center'>
            <ShimmerLoader height='h-10' width='w-full' className='mb-4 bg-white/20' />
            <ShimmerLoader height='h-5' width='w-3/4' className='mx-auto mb-8 bg-white/20' />
            <div className='flex flex-col sm:flex-row gap-4'>
              <ShimmerLoader height='h-12' className='flex-1 rounded-lg bg-white/20' />
              <ShimmerLoader width='w-40' height='h-12' className='rounded-lg bg-white/20' />
            </div>
          </div>
        </section>

        {/* Footer Shimmer */}
        <footer className='bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200'>
          <div className='container mx-auto max-w-6xl'>
            <div className='grid md:grid-cols-5 gap-8 mb-8'>
              {[...Array(5)].map((_, i) => (
                <div key={i}>
                  <ShimmerLoader height='h-6' width='w-24' className='mb-4' />
                  <div className='space-y-2'>
                    {[...Array(4)].map((_, j) => (
                      <ShimmerLoader key={j} height='h-4' width='w-20' />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className='border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center'>
              <ShimmerLoader height='h-4' width='w-48' />
              <div className='flex gap-4 mt-4 md:mt-0'>
                {[...Array(5)].map((_, i) => (
                  <ShimmerBox key={i} width='w-6' height='h-6' className='rounded' />
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <nav className='bg-white sticky top-0 z-50 shadow-sm'>
        <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-12'>
          <div className='flex items-center justify-between h-16 md:h-20'>
            <div className='flex items-center space-x-2'>
              <div className='w-8 h-8 md:w-10 md:h-10 bg-[#0F87FF] rounded flex items-center justify-center'>
                <span className='text-white font-bold text-lg md:text-xl'>D</span>
              </div>
              <span className='text-xl md:text-2xl font-bold text-gray-900'>DulyPlan</span>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-4 lg:space-x-6'>
              <a
                href='#features'
                className='text-gray-900 hover:text-[#0F87FF] transition-colors flex items-center gap-1 text-sm lg:text-base'
              >
                Features
                <KeyboardArrowDown className='text-sm' />
              </a>
              <a
                href='#resources'
                className='text-gray-900 hover:text-[#0F87FF] transition-colors flex items-center gap-1 text-sm lg:text-base'
              >
                Resources
                <KeyboardArrowDown className='text-sm' />
              </a>
              <a
                href='#blogs'
                className='text-gray-900 hover:text-[#0F87FF] transition-colors flex items-center gap-1 text-sm lg:text-base'
              >
                Blogs
                <KeyboardArrowDown className='text-sm' />
              </a>
              <a
                href='#pricing'
                className='text-gray-900 hover:text-[#0F87FF] transition-colors flex items-center gap-1 text-sm lg:text-base'
              >
                Pricing
                <KeyboardArrowDown className='text-sm' />
              </a>
              <a
                href='#support'
                className='text-gray-900 hover:text-[#0F87FF] transition-colors flex items-center gap-1 text-sm lg:text-base'
              >
                Support
                <KeyboardArrowDown className='text-sm' />
              </a>
              <button className='px-3 py-2 md:px-4 md:py-2 border-2 border-[#0F87FF] text-[#0F87FF] rounded-lg hover:bg-[#0F87FF] hover:text-white transition-colors font-medium text-sm lg:text-base'>
                Log In
              </button>
              <button className='px-3 py-2 md:px-4 md:py-2 bg-[#0F87FF] text-white rounded-lg hover:bg-[#0D6FE6] transition-colors font-medium text-sm lg:text-base'>
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden p-2 text-gray-900'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <Close /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className='md:hidden py-4 border-t border-gray-200'>
              <div className='flex flex-col space-y-4'>
                <a href='#features' className='text-gray-900 hover:text-[#0F87FF]'>
                  Features
                </a>
                <a href='#resources' className='text-gray-900 hover:text-[#0F87FF]'>
                  Resources
                </a>
                <a href='#blogs' className='text-gray-900 hover:text-[#0F87FF]'>
                  Blogs
                </a>
                <a href='#pricing' className='text-gray-900 hover:text-[#0F87FF]'>
                  Pricing
                </a>
                <a href='#support' className='text-gray-900 hover:text-[#0F87FF]'>
                  Support
                </a>
                <button className='text-left py-2 border-2 border-[#0F87FF] text-[#0F87FF] px-4 rounded-lg'>
                  Log In
                </button>
                <button className='bg-[#0F87FF] text-white px-4 py-2 rounded-lg font-medium'>
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className='text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden'
        style={{ backgroundColor: '#0F87FF' }}
      >
        {/* Arc transition at bottom */}
        <div className='absolute bottom-0 left-0 right-0'>
          <svg
            viewBox='0 0 1440 120'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-full h-20 md:h-24'
            preserveAspectRatio='none'
          >
            <path
              d='M0 120 L0 100 Q720 40 1440 100 L1440 120 Z'
              fill='white'
            />
          </svg>
        </div>

        <div className='container mx-auto max-w-5xl text-center relative z-10'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2'
          >
            Plan, Schedule and Manage your Social Media Presence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed px-2'
          >
            Redefine the social media presence with our powerful AI-powered planning
            and post scheduling platform that helps you reach, engage, and retain more
            users.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 md:mb-12 px-4'
          >
            <button className='px-6 py-3 md:px-8 md:py-3 bg-white text-[#0F87FF] rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg text-sm md:text-base'>
              Sign Up for Free
            </button>
            <button className='px-6 py-3 md:px-8 md:py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm md:text-base'>
              <PlayArrow className='w-5 h-5' />
              Watch Demo
            </button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='mt-8 md:mt-12 mb-4 md:mb-8 px-2'
          >
            <div className='rounded-lg overflow-hidden shadow-2xl'>
              <img
                src='https://fastly.picsum.photos/id/309/800/424.jpg?hmac=zcf-Z4WqmHT7uHVMVNMya4cNvG19yYz4bcrMpxJceCM'
                alt='Social Media Management'
                className='w-full h-auto'
                style={{ aspectRatio: '800/424' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className='py-8 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-white'>
        <div className='container mx-auto'>
          <p className='text-center text-gray-600 mb-6 md:mb-8 text-sm md:text-base'>
            Trusted by agencies who are already partnering with us.
          </p>
          <div className='flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12'>
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-lg md:text-xl lg:text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors'
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Analytics Features */}
      <section className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white' id='features'>
        <div className='container mx-auto max-w-6xl'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-gray-900 px-4'>
            Get the cutting-edge features for advanced analytics.
          </h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12'>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center p-4 md:p-6'
              >
                <div className='text-blue-600 mb-4 flex justify-center'>
                  <div className='w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center'>
                    {React.cloneElement(feature.icon, { sx: { fontSize: { xs: 28, md: 32 } } })}
                  </div>
                </div>
                <h3 className='text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900'>
                  {feature.title}
                </h3>
                <p className='text-sm md:text-base text-gray-600'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white'>
        <div className='container mx-auto max-w-6xl'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-gray-900 px-4'>
            What we offer for your social growth?
          </h2>
          <p className='text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base px-4'>
            DulyPlan is a social media management platform that helps you to grow
            your social media presence, engage with your audience, and save time.
          </p>

          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12 mb-12 md:mb-16`}
            >
              <div className='flex-1 w-full md:w-auto'>
                <h3 className='text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900'>
                  {feature.title}
                </h3>
                <ul className='space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base'>
                  <li className='flex items-start'>
                    <span className='text-blue-600 mr-2'>•</span>
                    {feature.description}
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-600 mr-2'>•</span>
                    Streamline your workflow with powerful automation tools
                  </li>
                  <li className='flex items-start'>
                    <span className='text-blue-600 mr-2'>•</span>
                    Collaborate seamlessly with your entire team
                  </li>
                </ul>
              </div>
              <div className='flex-1 w-full md:w-auto'>
                <div className='bg-blue-50 rounded-lg p-4 md:p-8'>
                  <img
                    src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop'
                    alt={feature.title}
                    className='w-full h-auto rounded-lg'
                  />
                </div>
              </div>
            </div>
          ))}

          <div className='text-center mt-8 md:mt-12'>
            <button
              className='px-6 md:px-8 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm md:text-base'
              style={{ backgroundColor: '#0F87FF' }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* AI Social Media Hashtag Generator */}
      <section className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white'>
        <div className='container mx-auto max-w-7xl'>
          {/* Header */}
          <div className='text-center mb-8 md:mb-12'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span
                className='inline-block px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-4'
                style={{ backgroundColor: '#E3F2FD', color: '#0F87FF' }}
              >
                Open for All
              </span>
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4'>
                AI Social Media Hashtag Generator
              </h2>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className='flex flex-col gap-8 md:gap-12'>
            {/* Image and Cards Container - These should match heights */}
            <div className='flex flex-col lg:flex-row items-stretch gap-8 md:gap-12'>
              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='w-full lg:w-1/2 flex justify-center'
              >
                <div
                  className='rounded-lg overflow-hidden shadow-lg w-full max-w-md h-full'
                  style={{ backgroundColor: '#E3F2FD' }}
                >
                  <img
                    src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop'
                    alt='Professional working on laptop'
                    className='w-full h-full object-cover'
                  />
                </div>
              </motion.div>

              {/* Right Side - Cards Grid */}
              <div className='w-full lg:w-1/2'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 h-full'>
                {[
                  {
                    platform: 'Facebook',
                    icon: <Facebook />,
                    description: 'Generate content specific hashtags to increase reach for Facebook',
                  },
                  {
                    platform: 'Instagram',
                    icon: <Instagram />,
                    description: 'Generate content specific hashtags to increase reach for Instagram',
                  },
                  {
                    platform: 'LinkedIn',
                    icon: <LinkedIn />,
                    description: 'Generate content specific hashtags to increase reach for LinkedIn',
                  },
                  {
                    platform: 'Pinterest',
                    icon: <span className='text-white font-bold text-xl'>P</span>,
                    description: 'Generate content specific hashtags to increase reach for Pinterest',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.platform}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow'
                  >
                    {/* Icon */}
                    <div className='mb-4 flex justify-center'>
                      <div
                        className='w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center'
                        style={{ backgroundColor: '#0F87FF' }}
                      >
                        <div className='text-white text-2xl md:text-3xl'>
                          {item.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className='text-lg md:text-xl font-bold text-gray-900 mb-2 text-center'>
                      {item.platform} Hashtags
                    </h3>

                    {/* Description */}
                    <p className='text-xs md:text-sm text-gray-600 mb-4 text-center min-h-[3rem]'>
                      {item.description}
                    </p>

                    {/* Try Now Button */}
                    <button
                      className='w-full px-4 py-2 rounded-lg font-semibold text-sm md:text-base flex items-center justify-center gap-2 transition-colors'
                      style={{
                        backgroundColor: '#0F87FF',
                        color: 'white',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#0D6FE6';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#0F87FF';
                      }}
                    >
                      <AutoAwesome className='w-4 h-4' />
                      Try Now
                    </button>
                  </motion.div>
                ))}
                </div>
              </div>
            </div>

            {/* Pagination and See All - Separate from height matching */}
            <div className='flex flex-col items-center gap-4'>
                {/* Pagination Dots */}
                <div className='flex gap-2'>
                  <div
                    className='w-2 h-2 rounded-full'
                    style={{ backgroundColor: '#0F87FF' }}
                  ></div>
                  <div
                    className='w-2 h-2 rounded-full'
                    style={{ backgroundColor: '#E3F2FD' }}
                  ></div>
                  <div
                    className='w-2 h-2 rounded-full'
                    style={{ backgroundColor: '#E3F2FD' }}
                  ></div>
                </div>

                {/* See All Button */}
                <button
                  className='px-6 py-2 border-2 rounded-lg font-semibold text-sm md:text-base flex items-center gap-2 transition-colors'
                  style={{
                    borderColor: '#0F87FF',
                    color: '#0F87FF',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#E3F2FD';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  See All
                  <ArrowForward className='w-4 h-4' />
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* How Are We Different */}
      <section className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white'>
        <div className='container mx-auto max-w-6xl'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-gray-900 px-4'>
            How are we different?
          </h2>
          <p className='text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base px-4'>
            DulyPlan is a social media management platform that helps you to grow
            your social media presence, engage with your audience, and save time.
            Trusted by over 2,000+ startups.
          </p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='p-4 md:p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow'
              >
                <div className='text-blue-600 mb-3 md:mb-4'>
                  {React.cloneElement(item.icon, { sx: { fontSize: { xs: 28, md: 32 } } })}
                </div>
                <h3 className='text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900'>
                  {item.title}
                </h3>
                <p className='text-sm md:text-base text-gray-600'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white'>
        <div className='container mx-auto max-w-6xl'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-gray-900 px-4'>
            What our clients say?
          </h2>
          <p className='text-center text-gray-600 mb-8 md:mb-12 text-sm md:text-base px-4'>
            Hear from our trusted users using DulyPlan globally, across 10 countries.
          </p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow'
              >
                <div className='flex mb-3 md:mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='text-yellow-400 w-4 h-4 md:w-5 md:h-5' />
                  ))}
                </div>
                <p className='text-sm md:text-base text-gray-700 mb-4 md:mb-6'>{testimonial.quote}</p>
                <div className='flex items-center gap-3'>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className='w-10 h-10 md:w-12 md:h-12 rounded-full'
                  />
                  <div>
                    <p className='font-semibold text-gray-900 text-sm md:text-base'>
                      {testimonial.name}
                    </p>
                    <p className='text-xs md:text-sm text-gray-600'>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white'>
        <div className='container mx-auto max-w-6xl'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-gray-900 px-4'>
            What have we achieved for customers?
          </h2>
          <p className='text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base px-4'>
            We've done a lot of things that you can't believe. Get all the data you
            need to grow your social media presence and make it a success.
          </p>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center p-4 md:p-6 bg-blue-50 rounded-lg'
              >
                <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-2'>
                  {achievement.number}
                </div>
                <div className='text-xs md:text-sm lg:text-base text-gray-700 font-medium'>
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white'>
        <div className='container mx-auto max-w-4xl'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-gray-900 px-4'>
            Have any questions?
          </h2>
          <p className='text-center text-gray-600 mb-8 md:mb-12 text-sm md:text-base px-4'>
            Everything you need to know about our services, products, features, and
            billing. You can also refer to our detailed documentation.
          </p>
          <div className='space-y-3 md:space-y-4'>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className='border border-gray-200 rounded-lg overflow-hidden'
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className='w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors'
                >
                  <span className='font-semibold text-gray-900 text-sm md:text-base pr-4'>
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ExpandLess className='text-gray-600 flex-shrink-0' />
                  ) : (
                    <ExpandMore className='text-gray-600 flex-shrink-0' />
                  )}
                </button>
                {openFaq === index && (
                  <div className='px-4 md:px-6 py-3 md:py-4 bg-gray-50 text-gray-700 text-sm md:text-base'>
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 text-white'
        style={{ backgroundColor: '#0F87FF' }}
      >
        <div className='container mx-auto max-w-2xl text-center'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-4'>
            Join the hands! Subscribe to Dulyplan Newsletter
          </h2>
          <form onSubmit={handleSubscribe} className='mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 px-4'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              required
              className='flex-1 px-4 md:px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-sm md:text-base'
            />
            <button
              type='submit'
              className='px-6 md:px-8 py-3 bg-white rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm md:text-base'
              style={{ color: '#0F87FF' }}
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-white py-8 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-gray-200'>
        <div className='container mx-auto max-w-6xl'>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 mb-6 md:mb-8'>
            {/* Brand */}
            <div className='col-span-2 sm:col-span-3 md:col-span-1'>
              <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4'>DulyPlan</h3>
              <p className='text-gray-600 text-xs md:text-sm mb-3 md:mb-4'>
                Social media management platform that helps you grow your presence
                and engage with your audience.
              </p>
              <select className='border border-gray-300 rounded px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm'>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>

            {/* Product */}
            <div>
              <h4 className='font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base'>Product</h4>
              <ul className='space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600'>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    Features
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    Integrations
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    API
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className='font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base'>Company</h4>
              <ul className='space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600'>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className='font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base'>Resources</h4>
              <ul className='space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600'>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    Community
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className='font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base'>Legal</h4>
              <ul className='space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600'>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-blue-600 transition-colors'>
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-gray-200 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-600 text-xs md:text-sm text-center md:text-left'>
              © 2023 DulyPlan. All rights reserved.
            </p>
            <div className='flex gap-3 md:gap-4'>
              <a
                href='#'
                className='text-gray-600 hover:text-blue-600 transition-colors'
                aria-label='Facebook'
              >
                <Facebook className='w-5 h-5 md:w-6 md:h-6' />
              </a>
              <a
                href='#'
                className='text-gray-600 hover:text-blue-600 transition-colors'
                aria-label='Instagram'
              >
                <Instagram className='w-5 h-5 md:w-6 md:h-6' />
              </a>
              <a
                href='#'
                className='text-gray-600 hover:text-blue-600 transition-colors'
                aria-label='LinkedIn'
              >
                <LinkedIn className='w-5 h-5 md:w-6 md:h-6' />
              </a>
              <a
                href='#'
                className='text-gray-600 hover:text-blue-600 transition-colors'
                aria-label='Twitter'
              >
                <Twitter className='w-5 h-5 md:w-6 md:h-6' />
              </a>
              <a
                href='#'
                className='text-gray-600 hover:text-blue-600 transition-colors'
                aria-label='YouTube'
              >
                <YouTube className='w-5 h-5 md:w-6 md:h-6' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DulyPlan;

