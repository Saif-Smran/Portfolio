import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaRocket } from 'react-icons/fa';
import { useTheme } from '../../../contexts/ThemeContext';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const { isDark } = useTheme();
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  return (
    <section id="projects" className={`py-20 transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800' 
        : 'bg-gradient-to-br from-indigo-50 via-blue-50 to-gray-50'
    }`}>
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A showcase of my latest work and creative solutions
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center">
            <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-full ${
              isDark ? 'bg-gray-800/50 text-gray-300' : 'bg-white/50 text-gray-600'
            }`}>
              <FaRocket className="animate-spin" />
              Loading projects...
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <ProjectCard 
                key={idx} 
                project={project} 
                onDetails={setSelected} 
                index={idx}
              />
            ))}
          </div>
        )}
      </div>
      
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
