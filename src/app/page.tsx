'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import { Sun, Moon } from 'lucide-react'; // Using lucide-react for theme toggle icons

// Create a Theme Context
const ThemeContext = createContext();

// ThemeProvider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark'); // Default to dark theme

  useEffect(() => {
    // Apply theme class to the document root
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme context
function useTheme() {
  return useContext(ThemeContext);
}

// Navbar Component
function Navbar({ setActiveTab }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm shadow-md rounded-b-xl py-4 transition-colors duration-300">
      {/* Container to limit the width of navbar content to 60% and center it */}
      <div className="max-w-[60vw] mx-auto flex justify-between items-center px-6 md:px-0"> {/* Added px-6 for small screens if needed, md:px-0 to remove it at wider screens */}
        <div className="flex items-center space-x-4">
          {/* Logo Placeholder */}
          <div className="text-2xl font-bold text-gray-900 dark:text-white rounded-md p-2 bg-gradient-to-r from-blue-500 to-purple-600">
            <span className="text-white">MR</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Mohamed Raiyan Rizwan</h1>
        </div>
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setActiveTab('about')}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 focus:outline-none"
          >
            About
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 focus:outline-none"
          >
            Projects
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

// About Section Component
function AboutSection() {
  const skills = [
    { name: 'HTML/CSS', icon: '📄' },
    { name: 'JavaScript', icon: '💻' },
    { name: 'TypeScript', icon: '📜' },
    { name: 'React', icon: '⚛️' },
    { name: 'Redux', icon: '🔴' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'MUI', icon: '🎨' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'Python (Flask)', icon: '🐍' },
    { name: 'Java (Spring Boot)', icon: '☕' },
    { name: 'Node.js', icon: '🌳' },
    { name: 'C# (.NET)', icon: '🔷' },
    { name: 'SQL', icon: '📊' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'HuggingFace', icon: '🤗' },
    { name: 'Transformers', icon: '🤖' },
    { name: 'scikit-learn', icon: '🧪' },
    { name: 'NumPy', icon: '🔢' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'Git', icon: '🌿' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Azure', icon: '☁️' },
    { name: 'AWS', icon: '📦' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Oracle SQL', icon: '🟠' },
    { name: 'Firebase', icon: '🔥' },
  ];

  return (
    <div className="pt-28 pb-8 px-6 md:px-0"> {/* Adjusted padding to fit within the new max-width container. px-6 for small screens. */}
      {/* About Me */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 dark:border-purple-600">
            <img
              src="https://placehold.co/192x192/4F46E5/FFFFFF?text=Your+Image"
              alt="Mohamed Raiyan Rizwan"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left">
            Hey there! I'm Mohamed Raiyan Rizwan, a passionate Full-Stack Developer and AI Enthusiast with a strong foundation in Computer Science and Data Science. I'm currently pursuing my BSc at the American University of Sharjah, where I've gained hands-on experience in building robust applications and developing intelligent systems. I thrive on solving complex problems and am always eager to learn and apply new technologies to create impactful solutions. My journey involves crafting efficient code, exploring the depths of artificial intelligence, and contributing to innovative projects.
          </p>
        </div>
        <div className="mt-8 space-x-4 text-center">
          <a href="mailto:raiyanriz11@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">Email</a>
          <a href="https://github.com/Raiyan-R11" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/raiyan-rizwan" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full font-medium text-sm flex items-center shadow-md transition-transform transform hover:scale-105"
            >
              {skill.icon && <span className="mr-2 text-lg">{skill.icon}</span>}
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Experience</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Engineer Intern — Emirates Group IT, Dubai</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">June–Aug 2024</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Migrated chatbot services to Azure Bot Service with Python (Flask, NLTK), enhancing scalability and performance.</li>
              <li>Developed a comprehensive Performance Engineering portal with React and Node.js, improving monitoring capabilities.</li>
              <li>Optimized data handling with PostgreSQL, leading to faster data retrieval and processing.</li>
            </ul>
          </div>
          {/* Add more experience entries here if needed, following the same structure */}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Education</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">American University of Sharjah</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">BSc in Computer Science, Minor in Data Science (2021–2025)</p>
          <p className="text-gray-700 dark:text-gray-300">GPA: 3.5/4.0</p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">Relevant coursework: Deep Learning, Computer Vision, Software Engineering, Statistics for Data Science.</p>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Achievements & Certifications</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>6th Place at AI Hackathon II</strong> (2025)</li>
            <li><strong>Najim Appreciation Award</strong> (Emirates Group IT, 2024)</li>
            <li><strong>Dean's List</strong> (x4), <strong>Chancellor's List</strong> (x1), AUS</li>
            <li><strong>Certificates:</strong> AI Course at Samsung Innovation Campus, JavaScript Algorithms (freeCodeCamp)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

// Projects Section Component
function ProjectsSection() {
  const fullStackProjects = [
    {
      title: "Full-Stack E-commerce App",
      description: "A comprehensive e-commerce platform built with React, Spring Boot, PostgreSQL, and deployed on AWS.",
      image: "https://placehold.co/300x200/8B5CF6/FFFFFF?text=E-commerce",
      link: "#" // Placeholder link
    },
    {
      title: "Quiz Web Application",
      description: "An interactive quiz application developed using ReactJS, MUI for UI, ASP.NET 6 for backend, and SQL Server.",
      image: "https://placehold.co/300x200/EC4899/FFFFFF?text=Quiz+App",
      link: "#" // Placeholder link
    },
    // Add more full-stack projects here
  ];

  const aiProjects = [
    {
      title: "Multilingual AI Text Detector",
      description: "Implemented LoRA fine-tuning on mGTE model, achieving 98% in-language accuracy for text detection.",
      image: "https://placehold.co/300x200/3B82F6/FFFFFF?text=AI+Detector",
      link: "#" // Placeholder link
    },
    {
      title: "Equivalent Mutant Detection",
      description: "Fine-tuned PLBart & UniXCoder models, achieving 85.4–86.6% F1 score for equivalent mutant detection.",
      image: "https://placehold.co/300x200/06B6D4/FFFFFF?text=Mutant+Detection",
      link: "#" // Placeholder link
    },
    {
      title: "Contrastive Learning on PathMNIST",
      description: "Applied SupCon/SimCLR for contrastive learning on PathMNIST dataset, resulting in 90.2% accuracy.",
      image: "https://placehold.co/300x200/10B981/FFFFFF?text=PathMNIST",
      link: "#" // Placeholder link
    },
    {
      title: "Asteroid Hazard & Size Prediction",
      description: "Developed a model to predict asteroid hazards and sizes, achieving 100% F1 score and R²=92%.",
      image: "https://placehold.co/300x200/EF4444/FFFFFF?text=Asteroids",
      link: "#" // Placeholder link
    },
    {
      title: "Audio Transcription System",
      description: "Built an audio transcription system leveraging Spring AI and Whisper API with Spring Boot.",
      image: "https://placehold.co/300x200/F59E0B/FFFFFF?text=Audio+Transcriber",
      link: "#" // Placeholder link
    },
    // Add more AI projects here
  ];

  return (
    <div className="pt-28 pb-8 px-6 md:px-0"> {/* Adjusted padding to fit within the new max-width container. px-6 for small screens. */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">My Projects</h2>

      {/* Full-Stack Projects */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Full-Stack Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullStackProjects.map((project, index) => (
            <a key={index} href={project.link} className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* AI Projects */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">AI Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiProjects.map((project, index) => (
            <a key={index} href={project.link} className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}


// Main Portfolio Component
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about'); // Default to 'about' tab

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 font-inter">
        <Navbar setActiveTab={setActiveTab} />
        {/* Main content container, now restricted to 60% width and centered */}
        <div className="max-w-[60vw] mx-auto">
          {activeTab === 'about' && <AboutSection />}
          {activeTab === 'projects' && <ProjectsSection />}
        </div>
      </main>
    </ThemeProvider>
  );
}