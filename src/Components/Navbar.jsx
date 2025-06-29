import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCode, FaUser, FaProjectDiagram, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", icon: FaUser },
    { name: "Education", href: "#education", icon: FaProjectDiagram },
    { name: "Tech Stack", href: "#techstack", icon: FaCode },
    { name: "Projects", href: "#projects", icon: FaProjectDiagram },
    { name: "Contact", href: "#contact", icon: FaEnvelope },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    // Smooth scroll to section
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? isDark 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-700/20' 
          : 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/20'
        : isDark
          ? 'bg-gradient-to-r from-gray-900/80 to-blue-900/80 backdrop-blur-sm'
          : 'bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="flex items-center text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            >
              <img 
                src="/Logo.png" 
                alt="Saif's Portfolio Logo" 
                className="w-15 h-15 hover:scale-110 transition-transform duration-300" 
              />
              <span>Saif's Portfolio</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center justify-center space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`group relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isDark 
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>{item.name}</span>
                    </div>
                    {/* Hover underline effect */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                  </a>
                );
              })}
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`theme-toggle theme-glow ml-4 relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isDark 
                    ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20 text-yellow-400 hover:from-yellow-400/30 hover:to-orange-400/30 hover:shadow-lg hover:shadow-yellow-400/30' 
                    : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-600 hover:from-blue-500/30 hover:to-purple-500/30 hover:shadow-lg hover:shadow-blue-500/30'
                } border border-current/30 hover:border-current/50 backdrop-blur-sm`}
                aria-label="Toggle theme"
              >
                <div className="theme-icon relative w-5 h-5">
                  {isDark ? (
                    <FaSun className={`w-5 h-5 absolute inset-0 transform transition-all duration-500 ${
                      isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-180 scale-0 opacity-0'
                    }`} />
                  ) : (
                    <FaMoon className={`w-5 h-5 absolute inset-0 transform transition-all duration-500 ${
                      !isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'
                    }`} />
                  )}
                </div>
                {/* Animated background particles */}
                <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                  isDark 
                    ? 'bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-yellow-400/10' 
                    : 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10'
                } animate-pulse`}></div>
              </button>
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`theme-toggle theme-glow relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isDark 
                  ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20 text-yellow-400 hover:from-yellow-400/30 hover:to-orange-400/30 hover:shadow-lg hover:shadow-yellow-400/30' 
                  : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-600 hover:from-blue-500/30 hover:to-purple-500/30 hover:shadow-lg hover:shadow-blue-500/30'
              } border border-current/30 hover:border-current/50 backdrop-blur-sm`}
              aria-label="Toggle theme"
            >
              <div className="theme-icon relative w-5 h-5">
                {isDark ? (
                  <FaSun className={`w-5 h-5 absolute inset-0 transform transition-all duration-500 ${
                    isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-180 scale-0 opacity-0'
                  }`} />
                ) : (
                  <FaMoon className={`w-5 h-5 absolute inset-0 transform transition-all duration-500 ${
                    !isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'
                  }`} />
                )}
              </div>
              {/* Animated background particles */}
              <div className={`absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-all duration-500 ${
                isDark 
                  ? 'bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-yellow-400/10' 
                  : 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10'
              } animate-pulse`}></div>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ${
                isDark 
                  ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6 transform rotate-180 transition-transform duration-300" />
              ) : (
                <FaBars className="block h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className={`px-2 pt-2 pb-3 space-y-1 border-t shadow-lg ${
          isDark 
            ? 'bg-gray-900/95 backdrop-blur-md border-gray-700/20' 
            : 'bg-white/95 backdrop-blur-md border-gray-200/20'
        }`}>
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`group flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-2 ${
                  isDark 
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                } ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms' 
                }}
              >
                <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
