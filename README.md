# Saif Smran - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional journey as a full-stack developer. Built with React, Vite, and Tailwind CSS, now featuring a dark/light theme toggle and scroll-triggered animations powered by AOS.

## 🌐 Live Demo

**[Visit Portfolio](https://saif-smran-portfolio.netlify.app/)**

## ✨ Features

- **Modern Responsive Design**: Fully responsive across all devices with mobile-first approach
- **Dark/Light Theme Toggle**: Seamless theme switching with smooth transitions
- **Smooth Animations**: Engaging micro-interactions and scroll animations (AOS)
- **Section Navigation**: Quick navigation with smooth scrolling to all sections
- **Interactive Project Showcase**: Detailed project cards with modal views
- **Contact Integration**: Multiple contact methods with social media links
- **Performance Optimized**: Fast loading and optimized for search engines

## 🎯 Sections

- **Hero**: Professional introduction with social links and tech stack showcase
- **About Me**: Personal background and professional journey
- **Education**: Academic background and certifications
- **Tech Stack**: Comprehensive overview of technologies and tools
- **Projects**: Featured projects with detailed descriptions, tech stacks, and live demos
- **Contact**: Multiple ways to get in touch with integrated social media

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React features and performance improvements
- **Next.js** - React framework for hybrid SSR/SSG (recently added to stack)
- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe development (recently added to stack)
- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI** - Beautiful UI components
- **React Router DOM** - Client-side routing
- **React Icons** - Comprehensive icon library
- **AOS** - Animate On Scroll library

### Backend & Database (Projects)
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **MySQL** - Relational database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication and authorization

### Development Tools
- **ESLint** - Code linting and quality
- **Vite Plugin React** - React integration
- **Git** - Version control
- **Netlify** - Deployment and hosting

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Saif-Smran/Portfolio.git
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── Components/
│   ├── Navbar.jsx          # Navigation with theme toggle
│   └── Footer.jsx          # Footer with contact links
├── Layouts/
│   └── MainLayout.jsx      # Main layout wrapper
├── Pages/
│   └── Home/
│       ├── Home.jsx        # Main home page component
│       ├── Hero.jsx        # Hero section
│       ├── AboutMe.jsx     # About section
│       ├── Education.jsx   # Education section
│       ├── TeckStack.jsx   # Tech stack showcase
│       ├── Contact.jsx     # Contact section
│       └── Projects/
│           ├── Projects.jsx    # Projects listing
│           ├── ProjectCard.jsx # Individual project cards
│           └── ProjectModal.jsx # Project detail modal
├── Routes/
│   └── Router.jsx          # Application routing
└── assets/                 # Static assets
```

## � Animations

Scroll-triggered animations are implemented using AOS (Animate On Scroll):
- Initialized once in `src/main.jsx`.
- Sections/components use `data-aos` attributes, e.g., `data-aos="fade-up"`, `data-aos-delay="150"`.
- You can customize duration, easing, offset in the AOS init, and per-element delays via attributes.

## �🎨 Design Features

- **Custom Logo**: Personalized branding throughout the site
- **Consistent Theme**: Cohesive color scheme and typography
- **Smooth Transitions**: Elegant animations and hover effects
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Accessibility**: ARIA labels and keyboard navigation support

## 📧 Contact Information

- **Email**: smrangb@gmail.com
- **Phone**: +8801521468295
- **LinkedIn**: [A H M Saif Smran](https://www.linkedin.com/in/a-h-m-saif-smran)
- **Location**: Dhaka, Bangladesh

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
