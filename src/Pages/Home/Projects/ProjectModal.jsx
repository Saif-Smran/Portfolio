import React from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaCode, FaCheckCircle, FaExclamationTriangle, FaLightbulb, FaCogs } from 'react-icons/fa';
import { useTheme } from '../../../contexts/ThemeContext';

const ProjectModal = ({ project, onClose }) => {
  const { isDark } = useTheme();

  if (!project) return null;

  const techColors = {
    'React': 'bg-blue-500',
    'Node.js': 'bg-green-500',
    'MongoDB': 'bg-green-600',
    'Firebase': 'bg-yellow-500',
    'Tailwind CSS': 'bg-teal-500',
    'Express.js': 'bg-gray-600',
    'JavaScript': 'bg-yellow-400',
    'HTML': 'bg-orange-500',
    'CSS': 'bg-blue-600',
    'React Router': 'bg-red-500',
    'Vite': 'bg-purple-500',
    'DaisyUI': 'bg-pink-500',
    'Firestore': 'bg-orange-400',
    'JWT': 'bg-indigo-500',
    'Axios': 'bg-blue-400',
    'Mongoose': 'bg-green-700',
    'Vercel': 'bg-black',
    'Firebase Hosting': 'bg-orange-500',
    'MongoDB Atlas': 'bg-green-800'
  };

  const getTechColor = (tech) => {
    return techColors[tech] || 'bg-gray-500';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl backdrop-blur-sm border ${
        isDark 
          ? 'bg-gray-800/95 border-gray-600/50' 
          : 'bg-white/95 border-gray-200/50'
      }`}>
        {/* Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-gray-200/20">
          <div>
            <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {project.name}
            </h3>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.summary}
            </p>
          </div>
          <button
            onClick={onClose}
            className={`sticky top-0 p-3 rounded-full transition-all duration-200 hover:scale-110 ${
              isDark 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Description */}
          <div>
            <h4 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Description
            </h4>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.description}
            </p>
          </div>

          {/* Meta Information */}
          <div className="grid grid-cols-1 gap-6">
            <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-3 mb-2">
                <FaCalendarAlt className="text-green-500" />
                <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                  Project Date
                </span>
              </div>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                {project.date}
              </p>
            </div>
          </div>

          {/* Main Tech Stack */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaCode className="text-purple-500" />
              <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Main Technologies
              </h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.mainTechStack.map((tech, idx) => (
                <span 
                  key={idx} 
                  className={`px-4 py-2 rounded-full text-white font-medium ${getTechColor(tech)} hover:scale-105 transition-transform duration-200`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* All Tech Stack */}
          {project.allTechStack && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaCogs className="text-blue-500" />
                <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Complete Technology Stack
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.allTechStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className={`px-3 py-1 rounded-lg text-white text-sm font-medium ${getTechColor(tech)} hover:scale-105 transition-transform duration-200`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaCheckCircle className="text-green-500" />
              <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Key Features
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-start gap-3 p-3 rounded-lg ${
                    isDark ? 'bg-gray-700/30' : 'bg-gray-50'
                  }`}
                >
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {project.challenges && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaExclamationTriangle className="text-orange-500" />
                <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Development Challenges
                </h4>
              </div>
              <div className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-3 p-4 rounded-lg border-l-4 border-orange-500 ${
                      isDark ? 'bg-orange-900/20' : 'bg-orange-50'
                    }`}
                  >
                    <FaExclamationTriangle className="text-orange-500 mt-1 flex-shrink-0" />
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                      {challenge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Future Plans */}
          {project.futurePlans && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="text-yellow-500" />
                <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Future Enhancements
                </h4>
              </div>
              <div className="space-y-3">
                {project.futurePlans.map((plan, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-3 p-4 rounded-lg border-l-4 border-yellow-500 ${
                      isDark ? 'bg-yellow-900/20' : 'bg-yellow-50'
                    }`}
                  >
                    <FaLightbulb className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                      {plan}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200/20">
            <a 
              href={project.repoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-700 text-white hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaGithub className="w-5 h-5" />
              {project.name === 'RestoEase' ? 'Frontend Code' : 'View Code'}
            </a>
            {project.name === 'RestoEase' && (
              <a 
                href="https://github.com/Saif-Smran/Restaurant-Management-Server"
                target="_blank" 
                rel="noopener noreferrer" 
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FaGithub className="w-5 h-5" />
                Backend Code
              </a>
            )}
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
