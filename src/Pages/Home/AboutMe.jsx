import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaCode, FaRocket, FaHeart, FaCoffee } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const AboutMe = () => {
  const { isDark } = useTheme();

  const highlights = [
    {
      icon: FaGraduationCap,
      title: "Education",
      description: "CSE (B.Sc.) student at IUBAT — 2nd Year",
      color: "text-blue-500"
    },
    {
      icon: FaLaptopCode,
      title: "Tech Stack",
      description: "Full-stack development using React, Node.js, MongoDB",
      color: "text-green-500"
    },
    {
      icon: FaCode,
      title: "Code Quality",
      description: "Focused on writing clean, reusable, and testable code",
      color: "text-purple-500"
    },
    {
      icon: FaRocket,
      title: "Learning",
      description: "Backend architecture, deployment, and modern dev workflows",
      color: "text-orange-500"
    }
  ];

  const skills = [
    { name: "C/C++", level: 65, color: "bg-blue-500" },
    { name: "JavaScript", level: 75, color: "bg-yellow-500" },
    { name: "React", level: 70, color: "bg-cyan-500" },
    { name: "Node.js", level: 65, color: "bg-green-500" },
    { name: "MongoDB", level: 60, color: "bg-green-600" },
    { name: "Problem Solving", level: 60, color: "bg-purple-500" }
  ];

  return (
    <section id="about" className={`py-20 transition-all duration-300 ${isDark
      ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900'
      : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'
      }`}>
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
            }`}>
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
            Passionate developer with a love for creating amazing digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Story */}
          <div className="space-y-6" data-aos="fade-right">
            <div className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${isDark
              ? 'bg-gray-800/60 border-gray-600/50'
              : 'bg-white/60 border-gray-200/50'
              }`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                <FaHeart className="text-red-500" />
                My Journey
              </h3>
              <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                I'm A.H.M. Saif Smran, a curious, detail-oriented, and time-focused developer with a passion for creating efficient and impactful digital solutions. My programming journey began in my second semester of CSE when I first learned C. Mastering it was a major milestone — it gave me a strong foundation in problem-solving and logical thinking that still guides my work today.
              </p>
              <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                While I enjoy full-stack development, I’m especially drawn to backend work — building APIs, structuring databases, and ensuring everything runs smoothly behind the scenes. I love solving challenging problems and turning ideas into working applications.
              </p>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                Outside of coding, you’ll often find me reading books or listening to music to recharge my creativity. And yes — I always keep a bottle of water next to me while coding (hydration fuels good code!). In the next 2–3 years, I aim to grow into an intermediate full-stack developer, building projects that make a real difference.
              </p>

            </div>

          </div>

          {/* Right Side - Highlights */}
          <div className="space-y-6" data-aos="fade-left">
            {/* Skills Progress */}
            <div className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${isDark
              ? 'bg-gray-800/60 border-gray-600/50'
              : 'bg-white/60 border-gray-200/50'
              }`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                <FaCoffee className="text-amber-500" />
                Skills & Expertise
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'
                        }`}>{skill.name}</span>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>{skill.level}%</span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 group ${isDark
                    ? 'bg-gray-800/60 border-gray-600/50 hover:bg-gray-700/60'
                    : 'bg-white/60 border-gray-200/50 hover:bg-white/80'
                    }`}
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'
                      } group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>{item.title}</h4>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "1.5+", label: "Years Learning", color: "text-blue-500" },
              { number: "5+", label: "Projects Built", color: "text-green-500" },
              { number: "8+", label: "Technologies", color: "text-purple-500" },
              { number: "∞", label: "Passion for Code", color: "text-red-500" }
            ].map((stat) => (
              <div
                key={stat.label}
                className={`text-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${isDark
                  ? 'bg-gray-800/60 border-gray-600/50'
                  : 'bg-white/60 border-gray-200/50'
                  }`}
              >
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
