import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: 'easeOut' },
  },
});

const roles = ['Frontend Developer', 'React.js Expert', 'UI/UX Designer'];

const RoleAnimator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timeout);
  }, []);

  return (
    <div className="text-xl md:text-2xl font-medium text-indigo-600 dark:text-indigo-400 min-h-[30px] h-[35px] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-indigo-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 transition-colors duration-300 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-indigo-100 dark:bg-indigo-500/10 rounded-full blur-3xl -z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-purple-200 dark:bg-purple-500/10 rounded-full blur-3xl -z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{ bottom: '5%', right: '10%' }}
      />

      {/* Main Content */}
      <motion.div
        className="text-center space-y-6 max-w-3xl pt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold"
          variants={fadeIn(0)}
        >
          Hi, I'm{' '}
          <span className="text-indigo-600 dark:text-indigo-400">
            Ahmad Mobeen
          </span>
        </motion.h1>

        {/* Dynamic Role Animation */}
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <RoleAnimator />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-md md:text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto"
          variants={fadeIn(0.4)}
        >
          I build fast, responsive websites using modern tools like React, JS,
          and Tailwind CSS focused on clean code and great user experience.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          variants={fadeIn(0.6)}
        >
          <motion.a
            href="/AHMAD_WEBDEV_RESUME.pdf"
            target="_blank"
            className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-3 rounded-full text-md font-semibold shadow-lg transition-all transform"
            whileHover={{ scale: 1.1 }}
            animate={{
              y: [0, -5, 0],
              opacity: [1, 0.85, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Resume
          </motion.a>

          <motion.a
            href="#contact"
            className="bg-white dark:bg-gray-800 text-indigo-600 dark:text-white border border-indigo-600 px-6 py-3 rounded-full text-md font-semibold hover:bg-indigo-100 dark:hover:bg-gray-700 transition-all transform"
            whileHover={{ scale: 1.1 }}
            animate={{
              y: [0, -5, 0],
              opacity: [1, 0.85, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center mt-6 gap-6 text-2xl"
          variants={fadeIn(0.8)}
        >
          {[
            {
              href: 'https://github.com/AhmadMubee',
              icon: <FaGithub />,
              label: 'GitHub',
            },
            {
              href: 'https://www.linkedin.com/in/ahmad-mobeen-ba4567277',
              icon: <FaLinkedin />,
              label: 'LinkedIn',
            },
            {
              href: 'mailto:ahmedmubeen045@gmail.com',
              icon: <FaEnvelope />,
              label: 'Email',
            },
          ].map(({ href, icon, label }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.3, y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll down arrow */}
        <motion.div
          className="mt-12 text-3xl text-indigo-600 dark:text-indigo-400"
          animate={{
            y: [0, 10, 0],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;