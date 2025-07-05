import React from 'react';
import { motion } from 'framer-motion';
import Portfolio from '../assets/portfolio.jpeg';
import FitClub from '../assets/fitclub-starter.png';
import WeatherApp from '../assets/WeatherApp.png';
import Todo from '../assets/todo.png';
import Ecommerce from '../assets/ecommerce.png';
import Loruki from '../assets/loruki.jpg';

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A clean and responsive portfolio made to show my skills, projects, and contact details in one place.',
    tech: ['React', 'Tailwind CSS'],
    image: Portfolio,
    link: 'https://your-portfolio.vercel.app/',
  },
  {
    title: 'FitClub-Starter Website',
    description:
      'A modern fitness landing page featuring smooth scroll, animations, and a mobile-friendly layout.',
    tech: ['React', 'CSS'],
    image: FitClub,
    link: 'https://fit-club-starter-amber.vercel.app/',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A simple weather app that shows real-time data using OpenWeatherMap API and custom styles.',
    tech: ['React', 'Axios', 'OpenWeatherMap API', 'CSS'],
    image: WeatherApp,
    link: 'https://weather-dashboard-react-gamma.vercel.app/',
  },
  {
    title: 'To-Do List App',
    description:
      'A clean and interactive task manager with dark mode, editable tasks, and persistent storage using localStorage.',
    tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    image: Todo,
    link: 'https://todo-app-omega-red.vercel.app/',
  },
  {
    title: 'E-Commerce Website',
    description:
      'A fully responsive online store with product pages, a shopping cart, and a smooth user experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: Ecommerce,
    link: 'https://e-commerce-puce-sigma.vercel.app/',
  },
  {
    title: 'Loruki Website',
    description:
      'A simple hosting company website made with HTML and CSS to practice layout and clean design.',
    tech: ['HTML', 'CSS'],
    image: Loruki,
    link: 'https://loruki-website-ivory.vercel.app/',
  },
];

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  },
});

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-indigo-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-20 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0)}
        >
          <h2 className="text-4xl font-extrabold mb-4 text-indigo-600 dark:text-indigo-400">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-white">
            A selection of my recent work, showcasing my passion for clean code and user-friendly experiences.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn(index * 0.2)}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4 transition-transform duration-500 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white px-2 py-1 rounded"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline transition-all duration-200"
              >
                View Project &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;