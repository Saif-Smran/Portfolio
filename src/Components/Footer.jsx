import React from 'react';
import { 
  FaCode, 
  FaHeart, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaUser,
  FaProjectDiagram
} from 'react-icons/fa';
// import { useTheme } from '../contexts/ThemeContext'; // Footer uses dark theme by default

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // const { isDark } = useTheme(); // Footer uses dark theme by default

  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/Saif-Smran', color: 'hover:text-gray-900' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/a-h-m-saif-smran', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://x.com/Soron_Hosain', color: 'hover:text-blue-400' },
    { name: 'Email', icon: FaEnvelope, href: 'mailto:smrangb@gmail.com', color: 'hover:text-red-500' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about', icon: FaUser },
    { name: 'Education', href: '#education', icon: FaProjectDiagram },
    { name: 'Tech Stack', href: '#techstack', icon: FaCode },
    { name: 'Projects', href: '#projects', icon: FaProjectDiagram },
    { name: 'Contact', href: '#contact', icon: FaEnvelope },
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: 'smrangb@gmail.com', href: 'mailto:smrangb@gmail.com' },
    { icon: FaMapMarkerAlt, text: 'Dhaka, Bangladesh', href: '#' },
    { icon: FaLinkedin, text: 'linkedin.com/in/a-h-m-saif-smran', href: 'https://www.linkedin.com/in/a-h-m-saif-smran' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (href) => {
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
    <>
      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <FaCode className="text-blue-400 text-2xl hover:rotate-12 transition-transform duration-300" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  MyPortfolio
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Passionate developer creating amazing digital experiences with modern technologies and creative solutions.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`p-3 rounded-full bg-white/10 backdrop-blur-sm ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20 group`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 group"
                      >
                        <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <li key={index}>
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-all duration-300 group"
                      >
                        <div className="p-2 rounded-lg bg-white/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-sm">{contact.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Newsletter/CTA */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white">Stay Connected</h3>
              <p className="text-gray-300 text-sm mb-4">
                Get updates about my latest projects and blog posts.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                />
                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-white/20"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {currentYear} Made with</span>
              <FaHeart className="text-red-400 animate-pulse" />
              <span>by A.H.M. Saif Smran</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      </div>
    </footer>
    </>
  );
};

export default Footer;