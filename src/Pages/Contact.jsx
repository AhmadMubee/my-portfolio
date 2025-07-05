import React, { useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const contactMethods = [
  {
    icon: <FaEnvelope className="text-black dark:text-white" />,
    label: 'Email',
    value: 'ahmedmubeen045@gmail.com',
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=ahmedmubeen045@gmail.com',
  },
  {
    icon: <FaLinkedin className="text-[#0077b5]" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ahmad-mobeen',
    link: 'https://www.linkedin.com/in/ahmad-mobeen-ba4567277',
  },
  {
    icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgtI3lDDZ6mWtxZoFmhaGKMVSWUQWHILeIA&s" alt="Fiverr" className="w-8 h-8 rounded-2xl" />,
    label: 'Fiverr',
    value: 'fiverr.com/ahmadwebdev_',
    link: 'https://www.fiverr.com/ahmadwebdev_',
  },
  {
    icon: <FaGithub className="text-black dark:text-white" />,
    label: 'GitHub',
    value: 'github.com/AhmadMubee',
    link: 'https://github.com/AhmadMubee',
  },
];

// Animation variants
const cardsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
    },
  },
};

const formVariant = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
      delay: 0.4,
    },
  },
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_848y9jc',     
        'template_to0jmjf',    
        form.current,
        'RC4oihovpZMwBClG_'
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-indigo-100 dark:bg-gray-900 py-20 px-6 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4">Let’s Connect</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-base">
            Whether you want to collaborate or just say hello, feel free to reach out on any platform below or send a message directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={cardsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {contactMethods.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={
                  item.link.startsWith('mailto:') || item.link.startsWith('tel:')
                  ? '_self'
                  : '_blank'
                }
                rel="noopener noreferrer"
                variants={cardVariant}
                className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-indigo-500 pt-11"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-800 dark:text-white">{item.label}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 break-words">{item.value}</p>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl p-8 space-y-5 w-full max-w-md mx-auto"
            variants={formVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">Send a Message</h3>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="First Name"
                required
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 dark:text-white"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 dark:text-white"
              />
            </div>

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 dark:text-white"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 dark:text-white"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-slate-800 hover:from-indigo-700 hover:to-slate-900 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-md hover:shadow-xl transition-all duration-300"
              >
                Send Message →
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;