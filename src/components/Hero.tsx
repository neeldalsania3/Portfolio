import { motion } from 'framer-motion';
import { ArrowDown, Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, techStack } from '../data/portfolio';
import { scrollToSection } from '../lib/utils';
import { useEffect, useState } from 'react';

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % personalInfo.rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-x-hidden pt-20"
    >
      {/* Aurora background */}
      <div className="aurora">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-bg" />

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <motion.p
              className="section-label mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              01 / Introduction
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="gradient-text whitespace-nowrap">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              className="h-14 sm:h-16 md:h-20 mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.p
                key={currentTextIndex}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0369a1] dark:text-[#38bdf8]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {personalInfo.rotatingTexts[currentTextIndex]}
              </motion.p>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {personalInfo.pitch}
            </motion.p>

            <motion.div
              className="flex flex-col items-center sm:items-stretch sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary hero-cta shimmer w-full max-w-[280px] sm:w-auto sm:max-w-none"
              >
                Contact Me
              </button>
              <a
                href={personalInfo.resumeUrl}
                className="btn-secondary hero-cta flex items-center justify-center gap-2 w-full max-w-[280px] sm:w-auto sm:max-w-none"
                download
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start mb-32 sm:mb-24 md:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:scale-110 transition-transform glow-hover"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:scale-110 transition-transform glow-hover"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-full glass-card hover:scale-110 transition-transform glow-hover"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Floating code card */}
              <motion.div
                className="glass-card p-6 glow relative z-10"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="text-sm font-mono">
                  <code className="text-slate-600 dark:text-slate-400">
                    <span className="text-accent-tertiary">const</span>{' '}
                    <span className="text-cyan-400">developer</span> = {'{\n'}
                    {'  '}name: <span className="text-green-400">'{personalInfo.name}'</span>,
                    {'\n'}
                    {'  '}role: <span className="text-green-400">'{personalInfo.title}'</span>,
                    {'\n'}
                    {'  '}skills: [<span className="text-green-400">'React'</span>,{' '}
                    <span className="text-green-400">'Node.js'</span>],
                    {'\n'}
                    {'}'};
                  </code>
                </pre>
              </motion.div>

              {/* Floating tech badges */}
              {['React', 'Node.js', 'TypeScript', 'MongoDB'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="absolute glass-card px-4 py-2 text-sm font-medium z-20"
                  style={{
                    top: `${20 + index * 20}%`,
                    left: index % 2 === 0 ? '-5%' : 'auto',
                    right: index % 2 === 1 ? '-5%' : 'auto',
                  }}
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2,
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute inset-x-0 bottom-24 sm:bottom-8 lg:bottom-28 z-20 flex justify-center pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full glass-card hover:scale-110 transition-transform pointer-events-auto"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Tech marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-8 bg-gradient-to-t from-background-light-DEFAULT dark:from-background-dark to-transparent">
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <span
                key={index}
                className="text-slate-600 dark:text-slate-400 font-medium px-4"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
