import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-8 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Ahmad Mobeen</h2>
          <p className="text-sm font-normal leading-relaxed text-gray-700 dark:text-gray-400">
            Frontend Developer crafting responsive, fast, and modern web interfaces with clean code, using React, Tailwind CSS, Bootstrap, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Quick Links</h2>
          <ul className="text-sm space-y-2 font-normal">
            {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-200 capitalize"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Contact</h2>
          <ul className="text-sm space-y-2 font-normal">
            <li>
              <span className="font-medium">Email:</span>{' '}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedmubeen045@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                ahmedmubeen045@gmail.com
              </a>
            </li>
            <li>
              <span className="font-medium">Phone:</span>{' '}
              <a href="tel:+923108034839" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                +92 310 8034839
              </a>
            </li>
            <li>
              <span className="font-medium">LinkedIn:</span>{' '}
              <a
                href="https://www.linkedin.com/in/ahmad-mobeen-ba4567277"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                linkedin.com/in/ahmad-mobeen
              </a>
            </li>
            <li>
              <span className="font-medium">GitHub:</span>{' '}
              <a
                href="https://github.com/AhmadMubee"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                github.com/AhmadMubee
              </a>
            </li>
            <li>
              <span className="font-medium">Fiverr:</span>{' '}
              <a
                href="https://www.fiverr.com/ahmadwebdev_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                fiverr.com/ahmadwebdev_
              </a>
            </li>
          </ul>
        </div>

        {/* Location + Map */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Location</h2>
          <p className="text-sm font-normal leading-relaxed text-gray-700 dark:text-gray-400 mb-3">
            Lahore, Pakistan<br />
            Open for freelance and remote work opportunities.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400 border-t pt-6 border-gray-200 dark:border-gray-700">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-indigo-600 dark:text-indigo-400">Ahmad Mobeen</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;