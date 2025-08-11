import React from 'react';
import { HiOutlineDownload, HiOutlineEye } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiMysql, SiTypescript } from 'react-icons/si';
import { useTheme } from '../../contexts/ThemeContext';

const Hero = () => {
    const { isDark } = useTheme();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center py-20 transition-all duration-300 ${isDark
                ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'
                : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
            }`}>
            <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left Side - Content */}
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <p className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                👋 Hello, I'm
                            </p>
                            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                                A H M Saif Smran
                            </h1>
                            <h2 className={`text-xl lg:text-3xl font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'
                                }`}>
                                Aspiring <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Full-Stack Developer</span>
                            </h2>
                        </div>

                        <p className={`text-lg leading-relaxed max-w-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            CSE Student at IUBAT passionate about building modern, efficient, and scalable web applications.
                            Strong foundation in C/C++, growing JavaScript skills. Focused on clean, reusable, and testable code.
                        </p>

                        {/* Tech Stack */}
                        <div className="space-y-4">
                            <p className={`text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                Tech Stack
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <div className={`flex items-center space-x-2 px-4 py-2 backdrop-blur-sm rounded-full border transition-all duration-300 hover:scale-105 group ${isDark
                                        ? 'bg-gray-800/60 border-gray-600/50 hover:border-blue-400/50'
                                        : 'bg-white/60 border-gray-200/50 hover:border-blue-300/50'
                                    }`}>
                                    <FaReact className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                                    <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'
                                        }`}>React</span>
                                </div>
                                <div className={`flex items-center space-x-2 px-4 py-2 backdrop-blur-sm rounded-full border transition-all duration-300 hover:scale-105 group ${isDark
                                        ? 'bg-gray-800/60 border-gray-600/50 hover:border-blue-400/50'
                                        : 'bg-white/60 border-gray-200/50 hover:border-blue-300/50'
                                    }`}>
                                    <SiNextdotjs className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'} group-hover:scale-110 transition-transform duration-300`} />
                                    <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'
                                        }`}>Next.js</span>
                                </div>
                                <div className={`flex items-center space-x-2 px-4 py-2 backdrop-blur-sm rounded-full border transition-all duration-300 hover:scale-105 group ${isDark
                                        ? 'bg-gray-800/60 border-gray-600/50 hover:border-blue-400/50'
                                        : 'bg-white/60 border-gray-200/50 hover:border-blue-300/50'
                                    }`}>
                                    <FaNodeJs className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                                    <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'
                                        }`}>Node.js</span>
                                </div>
                                <div className={`flex items-center space-x-2 px-4 py-2 backdrop-blur-sm rounded-full border transition-all duration-300 hover:scale-105 group ${isDark
                                        ? 'bg-gray-800/60 border-gray-600/50 hover:border-blue-400/50'
                                        : 'bg-white/60 border-gray-200/50 hover:border-blue-300/50'
                                    }`}>
                                    <FaJs className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                                    <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'
                                        }`}>JavaScript</span>
                                </div>
                                <div className={`flex items-center space-x-2 px-4 py-2 backdrop-blur-sm rounded-full border transition-all duration-300 hover:scale-105 group ${isDark
                                        ? 'bg-gray-800/60 border-gray-600/50 hover:border-blue-400/50'
                                        : 'bg-white/60 border-gray-200/50 hover:border-blue-300/50'
                                    }`}>
                                    <SiTypescript className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                                    <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'
                                        }`}>TypeScript</span>
                                </div>
                                <div className={`flex items-center space-x-2 px-4 py-2 backdrop-blur-sm rounded-full border transition-all duration-300 hover:scale-105 group ${isDark
                                        ? 'bg-gray-800/60 border-gray-600/50 hover:border-blue-400/50'
                                        : 'bg-white/60 border-gray-200/50 hover:border-blue-300/50'
                                    }`}>
                                    <SiMongodb className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                                    <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'
                                        }`}>MongoDB</span>
                                </div>
                                <div className={`flex items-center space-x-2 px-4 py-2 backdrop-blur-sm rounded-full border transition-all duration-300 hover:scale-105 group ${isDark
                                        ? 'bg-gray-800/60 border-gray-600/50 hover:border-blue-400/50'
                                        : 'bg-white/60 border-gray-200/50 hover:border-blue-300/50'
                                    }`}>
                                    <SiMysql className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                                    <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'
                                        }`}>MySQL</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="https://drive.google.com/uc?export=download&id=1tweaUqAIBuzMmPBPtkuMDsKsuxiyq7ma"
                                download="Saif_Smran_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <HiOutlineDownload className="w-5 h-5" />
                                <span>Download Resume</span>
                            </a>

                            <button
                                onClick={() => scrollToSection('projects')}
                                className={`inline-flex items-center space-x-2 px-8 py-4 backdrop-blur-sm font-semibold rounded-full border transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${isDark
                                        ? 'bg-gray-800/80 text-gray-200 border-gray-600/50 hover:border-blue-400/50 hover:bg-gray-700/90'
                                        : 'bg-white/80 text-gray-700 border-gray-200/50 hover:border-blue-300/50 hover:bg-white/90'
                                    }`}>
                                <HiOutlineEye className="w-5 h-5" />
                                <span>View My Work</span>
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start space-x-4">
                            <a href="https://github.com/Saif-Smran" target="_blank" rel="noopener noreferrer" className={`p-3 backdrop-blur-sm rounded-full border transition-all duration-300 hover:scale-110 ${isDark
                                    ? 'bg-gray-800/60 border-gray-600/50 text-gray-300 hover:text-gray-100 hover:border-blue-400/50'
                                    : 'bg-white/60 border-gray-200/50 text-gray-600 hover:text-gray-400 hover:border-blue-300/50'
                                }`}>
                                <FaGithub className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/a-h-m-saif-smran" target="_blank" rel="noopener noreferrer" className={`p-3 backdrop-blur-sm rounded-full border transition-all duration-300 hover:scale-110 ${isDark
                                    ? 'bg-gray-800/60 border-gray-600/50 text-gray-300 hover:text-blue-400 hover:border-blue-400/50'
                                    : 'bg-white/60 border-gray-200/50 text-gray-600 hover:text-blue-400 hover:border-blue-300/50'
                                }`}>
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                            <a href="https://x.com/Soron_Hosain" target="_blank" rel="noopener noreferrer" className={`p-3 backdrop-blur-sm rounded-full border transition-all duration-300 hover:scale-110 ${isDark
                                    ? 'bg-gray-800/60 border-gray-600/50 text-gray-300 hover:text-blue-300 hover:border-blue-400/50'
                                    : 'bg-white/60 border-gray-200/50 text-gray-600 hover:text-blue-300 hover:border-blue-300/50'
                                }`}>
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            <a href="mailto:smrangb@gmail.com" className={`p-3 backdrop-blur-sm rounded-full border transition-all duration-300 hover:scale-110 ${isDark
                                    ? 'bg-gray-800/60 border-gray-600/50 text-gray-300 hover:text-red-400 hover:border-blue-400/50'
                                    : 'bg-white/60 border-gray-200/50 text-gray-600 hover:text-red-400 hover:border-blue-300/50'
                                }`}>
                                <FaEnvelope className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                                <div className={`w-full h-full rounded-full p-2 ${isDark ? 'bg-gray-800' : 'bg-white'
                                    }`}>
                                    <img
                                        src="https://avatars.githubusercontent.com/u/168345747?v=4"
                                        alt="A H M Saif Smran portrait"
                                        className="w-full h-full rounded-full object-cover shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
