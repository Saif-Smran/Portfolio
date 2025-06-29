import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaCode, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { useTheme } from '../../../contexts/ThemeContext';

const ProjectCard = ({ project, onDetails, index }) => {
  const { isDark } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const techColors = {
    'React': 'bg-blue-500',
    'Node.js': 'bg-green-500',
    'MongoDB': 'bg-green-600',
    'Firebase': 'bg-yellow-500',
    'Tailwind CSS': 'bg-teal-500',
    'Express.js': 'bg-gray-600',
    'JavaScript': 'bg-yellow-400',
    'HTML': 'bg-orange-500',
    'CSS': 'bg-blue-600'
  };

  const getTechColor = (tech) => {
    return techColors[tech] || 'bg-gray-500';
  };

  return (
    <div 
      className={`group rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-[1.02] ${
        isDark 
          ? 'bg-gray-800/60 border-gray-600/50 hover:bg-gray-700/60' 
          : 'bg-white/60 border-gray-200/50 hover:bg-white/80'
      }`}
      style={{
        animationDelay: `${index * 200}ms`
      }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Project Preview */}
        <div className="lg:w-1/2 w-full relative overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
          {!imageError ? (
            <div className="relative h-64 lg:h-80">
              {!imageLoaded && (
                <div className={`absolute inset-0 flex items-center justify-center ${
                  isDark ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div className="animate-pulse text-gray-400">Loading preview...</div>
                </div>
              )}
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ) : (
            <div className={`h-64 lg:h-80 flex items-center justify-center ${
              isDark ? 'bg-gray-700' : 'bg-gray-200'
            }`}>
              <iframe
                src={project.liveLink}
                title={`${project.name} live demo`}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          )}
        </div>
        
        {/* Project Details */}
        <div className="lg:w-1/2 w-full p-8 space-y-6">
          <div>
            <h3 className={`text-2xl lg:text-3xl font-bold mb-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {project.name}
            </h3>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {project.summary}
            </p>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className={`${isDark ? 'text-green-400' : 'text-green-500'}`} />
              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                {project.date}
              </span>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaCode className={`${isDark ? 'text-purple-400' : 'text-purple-500'}`} />
              <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Tech Stack
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.mainTechStack.map((tech, idx) => (
                <span 
                  key={idx} 
                  className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getTechColor(tech)} hover:scale-105 transition-transform duration-200`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <a 
              href={project.repoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-700 text-white hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaGithub />
              Code
            </a>
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
            <button 
              onClick={() => onDetails(project)} 
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 border ${
                isDark 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <FaInfoCircle />
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
