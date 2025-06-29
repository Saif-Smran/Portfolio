import React from 'react';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGit,
    FaGithub,
    FaNpm,
    FaCode,
    FaLaptopCode,
    FaTools,
    FaServer,
    FaFileCode
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiC, SiCplusplus, SiVite } from 'react-icons/si';
import { useTheme } from '../../contexts/ThemeContext';

const TechStack = () => {
    const { isDark } = useTheme();

    const techCategories = [
        {
            title: "Frontend Development",
            icon: FaLaptopCode,
            color: "text-blue-500",
            techs: [
                { name: "HTML5", icon: FaHtml5, color: "text-orange-600", level: 90 },
                { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600", level: 85 },
                { name: "JavaScript", icon: FaJs, color: "text-yellow-400", level: 75 },
                { name: "React", icon: FaReact, color: "text-cyan-400", level: 70 },
                { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-400", level: 80 }
            ]
        },
        {
            title: "Backend Development",
            icon: FaServer,
            color: "text-green-500",
            techs: [
                { name: "Node.js", icon: FaNodeJs, color: "text-green-600", level: 65 },
                { name: "Express.js", icon: SiExpress, color: "text-gray-600", level: 60 },
                { name: "MongoDB", icon: SiMongodb, color: "text-green-500", level: 60 },
                { name: "Firebase", icon: SiFirebase, color: "text-yellow-400", level: 55 }
            ]
        },
        {
            title: "Programming Languages",
            icon: FaCode,
            color: "text-purple-500",
            techs: [
                { name: "C", icon: SiC, color: "text-blue-700", level: 75 },
                { name: "C++", icon: SiCplusplus, color: "text-blue-700", level: 55 },
                { name: "JavaScript", icon: FaJs, color: "text-yellow-400", level: 75 }
            ]
        },
        {
            title: "Tools & Platforms",
            icon: FaTools,
            color: "text-orange-500",
            techs: [
                { name: "Git", icon: FaGit, color: "text-red-500", level: 70 },
                { name: "GitHub", icon: FaGithub, color: "text-gray-800", level: 70 },
                { name: "VSCode", icon: FaFileCode, color: "text-blue-500", level: 90 },
                { name: "npm", icon: FaNpm, color: "text-red-500", level: 75 },
                { name: "Vite", icon: SiVite, color: "text-purple-500", level: 70 }
            ]
        }
    ];

    return (
        <section id="techstack" className={`py-20 transition-all duration-300 ${
            isDark 
                ? 'bg-gradient-to-br from-gray-800 via-purple-900 to-gray-900' 
                : 'bg-gradient-to-br from-purple-50 via-blue-50 to-gray-50'
        }`}>
            <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Tech</span> Stack
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {techCategories.map((category, categoryIndex) => {
                        const CategoryIcon = category.icon;
                        return (
                            <div 
                                key={category.title}
                                className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                                    isDark 
                                        ? 'bg-gray-800/60 border-gray-600/50' 
                                        : 'bg-white/60 border-gray-200/50'
                                }`}
                                style={{
                                    animationDelay: `${categoryIndex * 200}ms`
                                }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-full ${
                                        isDark ? 'bg-gray-700' : 'bg-gray-100'
                                    }`}>
                                        <CategoryIcon className={`w-6 h-6 ${category.color}`} />
                                    </div>
                                    <h3 className={`text-2xl font-bold ${
                                        isDark ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="space-y-6">
                                    {category.techs.map((tech, techIndex) => {
                                        const TechIcon = tech.icon;
                                        return (
                                            <div key={tech.name} className="space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <TechIcon className={`w-6 h-6 ${tech.color}`} />
                                                        <span className={`font-medium ${
                                                            isDark ? 'text-gray-200' : 'text-gray-700'
                                                        }`}>
                                                            {tech.name}
                                                        </span>
                                                    </div>
                                                    <span className={`text-sm font-medium ${
                                                        isDark ? 'text-gray-400' : 'text-gray-500'
                                                    }`}>
                                                        {tech.level}%
                                                    </span>
                                                </div>
                                                
                                                <div className={`w-full rounded-full h-2 ${
                                                    isDark ? 'bg-gray-700' : 'bg-gray-200'
                                                }`}>
                                                    <div 
                                                        className={`h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000 ease-out`}
                                                        style={{ 
                                                            width: `${tech.level}%`,
                                                            animationDelay: `${(categoryIndex * 4 + techIndex) * 300}ms`
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Quick Stats */}
                {/* <div className="mt-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { number: "10+", label: "Technologies", color: "text-blue-500" },
                            { number: "5+", label: "Tools Mastered", color: "text-green-500" },
                            { number: "2+", label: "Years Experience", color: "text-purple-500" },
                            { number: "∞", label: "Learning Journey", color: "text-orange-500" }
                        ].map((stat) => (
                            <div 
                                key={stat.label}
                                className={`text-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                                    isDark 
                                        ? 'bg-gray-800/60 border-gray-600/50' 
                                        : 'bg-white/60 border-gray-200/50'
                                }`}
                            >
                                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                                    {stat.number}
                                </div>
                                <div className={`text-sm font-medium ${
                                    isDark ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default TechStack;
