import { motion } from 'framer-motion';
import { ArrowDown, Eye, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/personal';
import SocialLinks from '../components/SocialLinks';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-400/5" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl dark:bg-accent-400/5" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-sm font-semibold tracking-widest text-primary-600 uppercase dark:text-primary-400"
          >
            Welcome to my Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Hi, I'm{' '}
            <span className="gradient-text">
              {personalInfo.name.first}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-2 text-xl font-medium text-slate-700 sm:text-2xl dark:text-slate-300"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-400 mx-auto lg:mx-0"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:shadow-xl hover:brightness-110 dark:from-primary-400 dark:to-primary-500"
            >
              <Eye size={18} />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-primary-500 hover:text-primary-600 dark:border-slate-600 dark:text-slate-300 dark:hover:border-primary-400 dark:hover:text-primary-400"
            >
              <MessageCircle size={18} />
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 100 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary-500 to-accent-500 opacity-20 blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96 dark:border-slate-700">
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.name.first} ${personalInfo.name.last}`}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-2 bottom-8 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {personalInfo.location}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={20} className="text-slate-400" />
      </motion.div>
    </section>
  );
}
