import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt,
  FaLaptopCode, FaMobileAlt, FaPenNib, FaGithub
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Responsive Design', icon: <FaMobileAlt className="text-green-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" /> },
  { name: 'Bootstrap', icon: <FaCss3Alt className="text-purple-600" /> },
  { name: 'Redux', icon: <FaReact className="text-purple-400" /> },
  { name: 'VS Code', icon: <FaLaptopCode className="text-blue-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Figma', icon: <FaPenNib className="text-pink-500" /> },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {skills.map((skill, i) => (
            <motion.div key={skill.name} variants={item} whileHover={{ y: -6 }}>
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                scale={1.05}
                transitionSpeed={500}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="rounded-xl"
              >
                <motion.div
                  className="flex flex-col items-center gap-3 p-6 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl"
                  whileHover={{ scale: 1.08 }}
                >
                  <div className="text-5xl">{skill.icon}</div>
                  <p className="text-lg font-semibold">{skill.name}</p>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;