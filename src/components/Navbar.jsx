import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import LightLogo from "../assets/logo-light.png"; // for light mode
import DarkLogo from "../assets/logo-dark.png";   // for dark mode

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300" role="navigation" aria-label="Main Navigation">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo and Name */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={darkMode ? DarkLogo : LightLogo}
            alt="Logo"
            className="h-7 w-7 object-contain"
          />
          <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">
            Ahmad Mobeen
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-800 dark:text-white font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleLinkClick(href)}
                className={`transition-colors duration-200 hover:text-indigo-500 ${
                  activeLink === href ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu Icon */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hover:text-indigo-500 transition text-xl"
            aria-label="Toggle Theme"
            title="Toggle Theme"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 dark:text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[300px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <ul className="flex flex-col space-y-4 px-4 text-gray-800 dark:text-gray-200 font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleLinkClick(href)}
                className={`block transition-colors hover:text-indigo-500 ${
                  activeLink === href ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;