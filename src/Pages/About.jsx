import React from 'react';
import Picture from '../assets/Ahmad.png';
import { FaGraduationCap, FaTools, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  },
});

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 py-20 px-4 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl mb-10 text-center font-extrabold text-indigo-600 dark:text-indigo-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn(0)}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Profile Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn(0.2)}
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={1000}>
              <div className="relative w-[260px] h-[370px] group">
                <div className="absolute top-5 left-5 w-full h-full bg-indigo-300/20 dark:bg-indigo-500/10 blur-2xl rounded-xl -z-10"></div>
                <motion.div className="relative z-30 overflow-hidden rounded-xl bg-white dark:bg-gray-900 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                  <img
                    src={Picture}
                    alt="Ahmad Mobeen"
                    className="w-[260px] h-[370px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center text-sm font-semibold py-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Frontend Web Developer
                  </div>
                </motion.div>
              </div>
            </Tilt>
          </motion.div>

          {/* Text and Cards */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Paragraphs */}
            <motion.div
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeIn(0.3)}
            >
              <p className="text-base leading-relaxed text-center md:text-left text-gray-700 dark:text-gray-300">
                I'm{' '}
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  Ahmad Mobeen
                </span>
                , a frontend developer who builds responsive, clean, and
                user-friendly websites using HTML, CSS, JavaScript, React, and
                Tailwind CSS. I convert Figma, PSD, and XD designs into
                interactive websites with smooth animations and high
                performance.
              </p>
              <p className="text-base leading-relaxed text-center md:text-left text-gray-700 dark:text-gray-300">
                I work with both individuals and businesses to turn ideas into
                modern digital experiences. I care about detail, code quality,
                and mobile-first design and I’m always learning.
              </p>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              {[{
                icon: <FaTools className="text-2xl text-green-600 mb-1" />,
                title: 'Tools I Use',
                content: <>VS Code • Figma<br />Vercel • Git<br />Photoshop</>,
              }, {
                icon: <FaGraduationCap className="text-2xl text-black dark:text-white mb-1" />,
                title: 'Education',
                content: <>BSCS - NUML<br />(2023 – 2027)</>,
              }, {
                icon: <FaCode className="text-2xl text-purple-600 mb-1" />,
                title: 'Experience',
                content: <>10+ Projects<br />Freelance & Practice</>,
              }].map(({ icon, title, content }, i) => (
                <motion.div
                  key={i}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl w-full h-[120px] text-center flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 dark:hover:border-indigo-400 shadow-md"
                  variants={fadeIn(i * 0.2)}
                  whileHover={{ scale: 1.06, boxShadow: '0px 10px 20px rgba(99, 102, 241, 0.2)' }}
                >
                  {icon}
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-white">{title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-tight">{content}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="pt-4 text-center md:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeIn(0.7)}
            >
              <motion.a
                href="#contact"
                className="inline-block bg-gradient-to-br from-[#6366f1] to-[#0f172a] hover:from-[#4f46e5] hover:to-[#0e131f] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                Let’s Build Something Amazing →
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;