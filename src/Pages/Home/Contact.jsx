import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const Contact = () => {
    const { isDark } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can integrate with EmailJS or similar service
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: "Email",
            value: "smrangb@gmail.com",
            link: "mailto:smrangb@gmail.com",
            color: "text-red-500"
        },
        {
            icon: FaPhone,
            title: "Phone",
            value: "+880 1521-468295",
            link: "tel:+8801521468295",
            color: "text-blue-500"
        },
        {
            icon: FaMapMarkerAlt,
            title: "Location",
            value: "Dhaka, Bangladesh",
            link: null,
            color: "text-green-500"
        },
        {
            icon: FaLinkedin,
            title: "LinkedIn",
            value: "linkedin.com/in/a-h-m-saif-smran",
            link: "https://www.linkedin.com/in/a-h-m-saif-smran",
            color: "text-purple-500"
        }
    ];

    const socialLinks = [
        {
            icon: FaGithub,
            name: "GitHub",
            url: "https://github.com/Saif-Smran",
            color: "hover:text-gray-600"
        },
        {
            icon: FaLinkedin,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/a-h-m-saif-smran",
            color: "hover:text-blue-500"
        },
        {
            icon: FaTwitter,
            name: "Twitter",
            url: "https://x.com/Soron_Hosain",
            color: "hover:text-blue-400"
        },
        {
            icon: FaEnvelope,
            name: "Email",
            url: "mailto:smrangb@gmail.com",
            color: "hover:text-red-500"
        }
    ];

    return (
        <section id="contact" className={`py-20 transition-all duration-300 ${
            isDark 
                ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
                : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
        }`}>
            <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                        Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        Let's discuss your next project or just say hello!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                            isDark 
                                ? 'bg-gray-800/60 border-gray-600/50' 
                                : 'bg-white/60 border-gray-200/50'
                        }`}>
                            <h3 className={`text-2xl font-bold mb-6 ${
                                isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                                Contact Information
                            </h3>
                            
                            <div className="space-y-6">
                                {contactInfo.map((info) => {
                                    const IconComponent = info.icon;
                                    return (
                                        <div key={info.title} className="flex items-center gap-4">
                                            <div className={`p-3 rounded-full ${
                                                isDark ? 'bg-gray-700' : 'bg-gray-100'
                                            }`}>
                                                <IconComponent className={`w-5 h-5 ${info.color}`} />
                                            </div>
                                            <div>
                                                <h4 className={`font-semibold ${
                                                    isDark ? 'text-gray-200' : 'text-gray-700'
                                                }`}>
                                                    {info.title}
                                                </h4>
                                                {info.link ? (
                                                    <a 
                                                        href={info.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`${
                                                            isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'
                                                        } transition-colors duration-300`}
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className={`${
                                                        isDark ? 'text-gray-300' : 'text-gray-600'
                                                    }`}>
                                                        {info.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                            isDark 
                                ? 'bg-gray-800/60 border-gray-600/50' 
                                : 'bg-white/60 border-gray-200/50'
                        }`}>
                            <h3 className={`text-2xl font-bold mb-6 ${
                                isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                                Follow Me
                            </h3>
                            
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 group ${
                                                isDark 
                                                    ? 'bg-gray-700/50 border-gray-600/50 text-gray-300 hover:bg-gray-600/60' 
                                                    : 'bg-white/50 border-gray-200/50 text-gray-600 hover:bg-white/80'
                                            } ${social.color}`}
                                        >
                                            <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                            <span className="font-medium">{social.name}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                        isDark 
                            ? 'bg-gray-800/60 border-gray-600/50' 
                            : 'bg-white/60 border-gray-200/50'
                    }`}>
                        <h3 className={`text-2xl font-bold mb-6 ${
                            isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                            Send Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaUser className={`w-5 h-5 ${
                                        isDark ? 'text-gray-400' : 'text-gray-500'
                                    }`} />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className={`w-full pl-12 pr-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                        isDark 
                                            ? 'bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400' 
                                            : 'bg-white/50 border-gray-200/50 text-gray-900 placeholder-gray-500'
                                    }`}
                                />
                            </div>

                            {/* Email Field */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaEnvelope className={`w-5 h-5 ${
                                        isDark ? 'text-gray-400' : 'text-gray-500'
                                    }`} />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className={`w-full pl-12 pr-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                        isDark 
                                            ? 'bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400' 
                                            : 'bg-white/50 border-gray-200/50 text-gray-900 placeholder-gray-500'
                                    }`}
                                />
                            </div>

                            {/* Subject Field */}
                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    required
                                    className={`w-full px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                        isDark 
                                            ? 'bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400' 
                                            : 'bg-white/50 border-gray-200/50 text-gray-900 placeholder-gray-500'
                                    }`}
                                />
                            </div>

                            {/* Message Field */}
                            <div className="relative">
                                <div className="absolute top-3 left-3 pointer-events-none">
                                    <FaComment className={`w-5 h-5 ${
                                        isDark ? 'text-gray-400' : 'text-gray-500'
                                    }`} />
                                </div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="5"
                                    required
                                    className={`w-full pl-12 pr-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                                        isDark 
                                            ? 'bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400' 
                                            : 'bg-white/50 border-gray-200/50 text-gray-900 placeholder-gray-500'
                                    }`}
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <FaPaperPlane className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
