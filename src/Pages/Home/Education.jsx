import React from 'react';
import { FaUniversity, FaGraduationCap, FaStar, FaCalendarAlt, FaBook, FaTrophy } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const Education = () => {
  const { isDark } = useTheme();

  const achievements = [
    {
      icon: FaTrophy,
      title: "Academic Excellence",
      description: "Maintaining high CGPA throughout academic journey",
      color: "text-yellow-500"
    },
    {
      icon: FaBook,
      title: "Core Subjects",
      description: "Data Structures, Algorithms, OOP, Database Systems",
      color: "text-blue-500"
    },
    {
      icon: FaGraduationCap,
      title: "Current Standing",
      description: "2nd Year - Computer Science & Engineering",
      color: "text-purple-500"
    }
  ];

  return (
    <section id="education" className={`py-20 transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-gray-50'
    }`}>
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Academic journey and achievements in Computer Science & Engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Education Card */}
          <div className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
            isDark 
              ? 'bg-gray-800/60 border-gray-600/50' 
              : 'bg-white/60 border-gray-200/50'
          }`}>
            <div className="flex items-start gap-6 mb-6">
              <div className={`p-4 rounded-full ${
                isDark ? 'bg-blue-600/20' : 'bg-blue-100'
              }`}>
                <FaUniversity className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  B.Sc. in Computer Science & Engineering
                </h3>
                <p className={`text-lg mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  International University of Business Agriculture and Technology (IUBAT)
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <FaCalendarAlt className="text-green-500" />
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      2023 - 2027 (Expected)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaGraduationCap className="text-purple-500" />
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      2nd Year Student
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CGPA Section */}
            <div className={`p-6 rounded-xl border-l-4 border-yellow-500 ${
              isDark ? 'bg-gray-700/50' : 'bg-yellow-50'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaStar className="text-yellow-500 text-2xl" />
                  <div>
                    <h4 className={`text-lg font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Current CGPA
                    </h4>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Academic Performance
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-yellow-500">3.9</span>
                  <span className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}> / 4.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={achievement.title}
                  className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 group ${
                    isDark 
                      ? 'bg-gray-800/60 border-gray-600/50 hover:bg-gray-700/60' 
                      : 'bg-white/60 border-gray-200/50 hover:bg-white/80'
                  }`}
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${
                      isDark ? 'bg-gray-700' : 'bg-gray-100'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-xl font-semibold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{achievement.title}</h4>
                      <p className={`${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>{achievement.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Timeline */}
        <div className="mt-16">
          <h3 className={`text-2xl font-bold text-center mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Academic Timeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { year: "2023", title: "Started CSE", desc: "Began Computer Science journey" },
              { year: "2024", title: "1st Year", desc: "Completed foundational courses" },
              { year: "2025", title: "2nd Year", desc: "Currently studying core subjects" },
              { year: "2027", title: "Graduation", desc: "Expected completion" }
            ].map((milestone, index) => (
              <div 
                key={milestone.year}
                className={`text-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-800/60 border-gray-600/50' 
                    : 'bg-white/60 border-gray-200/50'
                }`}
              >
                <div className={`text-2xl font-bold mb-2 ${
                  index === 2 ? 'text-blue-500' : (isDark ? 'text-gray-300' : 'text-gray-600')
                }`}>
                  {milestone.year}
                </div>
                <div className={`font-semibold mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {milestone.title}
                </div>
                <div className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {milestone.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
