'use client';

import React, { JSX, useState } from 'react';
import { Sun, Moon, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Award, Calendar, GraduationCap, Briefcase, Code, Brain } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
}

interface Experience {
  company: string;
  position: string;
  location: string;
  duration: string;
  achievements: string[];
}

interface Project {
  title: string;
  description: string;
  tech: string;
  image: string;
}

type PageType = 'about' | 'projects';

const Portfolio: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('about');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  const skills: Record<string, Skill[]> = {
    frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Redux', icon: '🔄' }
    ],
    backend: [
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'Spring Boot', icon: '🍃' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'C#', icon: '#️⃣' },
      { name: 'PostgreSQL', icon: '🐘' }
    ],
    aiml: [
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'PyTorch', icon: '🔥' },
      { name: 'HuggingFace', icon: '🤗' },
      { name: 'OpenAI API', icon: '🤖' },
      { name: 'scikit-learn', icon: '📊' }
    ],
    tools: [
      { name: 'Docker', icon: '🐳' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Git', icon: '📚' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Photoshop', icon: '🎭' }
    ]
  };

  const experiences: Experience[] = [
    {
      company: 'Emirates Group IT',
      position: 'Software Engineer - Intern',
      location: 'Dubai, U.A.E',
      duration: 'June 2024 – August 2024',
      achievements: [
        'Migrated chatbot services to Azure Bot Service, integrating 350+ documentation sources using Python (Flask, NLTK)',
        'Developed Performance Engineering portal with responsive UI components using React and Node.js',
        'Collaborated in an Agile team, participating in sprints, daily stand-ups, and code reviews using Git',
        'Managed a PostgreSQL database, performing data normalization and optimization'
      ]
    }
  ];

  const aiProjects: Project[] = [
    {
      title: 'Multilingual AI Text Detector',
      description: 'Fine-tuned multilingual encoder using LoRA for binary classification achieving 98% accuracy',
      tech: 'Python, Transformers, HuggingFace, PEFT, Flask',
      image: '🔍'
    },
    {
      title: 'Equivalent Mutant Detection via LLMs',
      description: 'Evaluated PLBart, UniXCoder, and Longformer for semantic equivalence detection',
      tech: 'Python, Transformers',
      image: '🧬'
    },
    {
      title: 'Contrastive Learning Study',
      description: 'Compared SupCon, SimCLR, and cross-entropy loss on medical image dataset',
      tech: 'Python, PyTorch, scikit-learn',
      image: '🏥'
    },
    {
      title: 'Asteroid Hazard Prediction',
      description: 'Built ML models to predict asteroid hazard and size with 100% F1 score',
      tech: 'Python, scikit-learn, Pandas',
      image: '🌌'
    },
    {
      title: 'Audio Transcription System',
      description: 'Voice-to-text system integrating Whisper API with Spring Boot interface',
      tech: 'Spring AI, Whisper API, Spring Boot',
      image: '🎤'
    }
  ];

  const fullStackProjects: Project[] = [
    {
      title: 'E-Commerce Application',
      description: 'Scalable full-stack application with RESTful APIs, JWT authentication, and AWS deployment',
      tech: 'ReactJS, Redux, Java, Spring Boot, PostgreSQL, AWS',
      image: '🛒'
    },
    {
      title: 'Quiz Web Application',
      description: 'Responsive quiz platform with dynamic questions and real-time results',
      tech: 'ReactJS, MUI, ASP.NET 6, SQL Server',
      image: '📝'
    }
  ];

  const achievements: string[] = [
    '6th Place (out of 22 teams) – AI Hackathon II, GOTECH 2025 (SPE, Dubai)',
    'Artificial Intelligence Course – Samsung Innovation Campus',
    'Najim Appreciation Award – Emirates Group IT',
    'JavaScript Algorithms and Data Structures – freeCodeCamp',
    'Dean\'s List (x4), Chancellor\'s List (x1) – American University of Sharjah'
  ];

  const themeClasses: string = isDarkMode 
    ? 'bg-slate-900 text-white' 
    : 'bg-white text-gray-900';

  const cardClasses: string = isDarkMode 
    ? 'bg-slate-800 border-slate-700' 
    : 'bg-white border-gray-200 shadow-sm';

  const renderAbout = (): JSX.Element => (
    <div className="space-y-12">
    {/* Hero Section */}
    <section className="text-center py-16">
      <div className="relative w-48 h-48 mx-auto mb-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-6xl">👨‍💻</div>
      </div>
      <h1 className="text-4xl font-bold mb-4">Mohamed Raiyan Rizwan</h1>
      <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-900'} mb-6`}>React | Spring Boot | .NET(C#) | Natural Language Processing | Computer Vision</p>
      
      {/* Enhanced Social Links - Moved into hero section */}
      <div className="flex justify-center space-x-6 text-sm text-white mt-8">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4" />
          <span>Dubai, UAE</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4" />
          <span>raiyanriz11@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4" />
          <span>+971 56 324 8990</span>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <a 
          href="https://github.com/Raiyan-R11" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Github className="w-5 h-5" />
        </a>
        <a 
          href="https://linkedin.com/in/raiyan-rizwan/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-gray-900 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </section>

    {/* About Summary */}
    <section className={`p-8 rounded-xl border ${cardClasses}`}>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="text-2xl mr-3">👋</span>
        About Me
      </h2>
      <p className="text-lg leading-relaxed">
        Fresh BSc Computer Science graduate from the American University of Sharjah with a Minor in Data Science.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        My expertise spans full-stack development and Artificial Intelligence, with hands-on 
        experience in modern web technologies (Spring Boot and .NET) and machine learning frameworks.
      </p>
      <p className="text-lg leading-relaxed mt-4"> 
        I've successfully completed internships at Emirates Group IT and have built numerous projects ranging from a multilingual AI text detector to scalable 
        e-commerce applications. 
      </p>
      <p className="text-lg leading-relaxed mt-4">
        I'm driven by the challenge of solving complex problems and creating innovative 
        solutions that bridge the gap between cutting-edge AI research and practical applications.
      </p>
    </section>

      {/* Skills Section */}
      <section className={`p-8 rounded-xl border ${cardClasses}`}>
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <Code className="w-6 h-6 mr-3" />
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-blue-500">Frontend</h3>
            <div className="space-y-3">
              {skills.frontend.map((skill: Skill, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-green-500">Backend</h3>
            <div className="space-y-3">
              {skills.backend.map((skill: Skill, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-purple-500">AI/ML</h3>
            <div className="space-y-3">
              {skills.aiml.map((skill: Skill, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-orange-500">Tools</h3>
            <div className="space-y-3">
              {skills.tools.map((skill: Skill, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`p-8 rounded-xl border ${cardClasses}`}>
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <Briefcase className="w-6 h-6 mr-3" />
          Experience
        </h2>
        {experiences.map((exp: Experience, index: number) => (
          <div key={index} className="mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="text-blue-500 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.location}</p>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                {exp.duration}
              </div>
            </div>
            <ul className="space-y-2">
              {exp.achievements.map((achievement: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-2">•</span>
                  <span className="text-sm leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className={`p-8 rounded-xl border ${cardClasses}`}>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <GraduationCap className="w-6 h-6 mr-3" />
          Education
        </h2>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">American University of Sharjah</h3>
            <p className="text-blue-500 font-medium">B.Sc. Major in Computer Science, Minor in Data Science</p>
            <p className="text-sm text-gray-500 mt-2">GPA: 3.5/4.0</p>
            <p className="text-sm mt-4 font-medium">Relevant Coursework:</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Neural Networks and Deep Learning, Computer Vision, Machine Learning and Data Mining, 
              Foundations of Statistics for Data Science, Data Structures and Algorithms, Software Engineering, 
              Software Testing
            </p>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            Sep 2021 - June 2025
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className={`p-8 rounded-xl border ${cardClasses}`}>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Award className="w-6 h-6 mr-3" />
          Achievements & Certifications
        </h2>
        <div className="space-y-4">
          {achievements.map((achievement: string, index: number) => (
            <div key={index} className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">🏆</span>
              <span className="text-sm leading-relaxed">{achievement}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderProjects = (): JSX.Element => (
    <div className="space-y-12">
      {/* AI Projects */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <Brain className="w-8 h-8 mr-4" />
          AI Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiProjects.map((project: Project, index: number) => (
            <div key={index} className={`p-6 rounded-xl border ${cardClasses} hover:shadow-lg transition-shadow`}>
              <div className="text-4xl mb-4">{project.image}</div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="text-xs text-blue-500 font-medium">{project.tech}</div>
              <div className="mt-4 flex space-x-2">
                <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-500 transition-colors">
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </button>
                <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-500 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-Stack Projects */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <Code className="w-8 h-8 mr-4" />
          Full-Stack Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fullStackProjects.map((project: Project, index: number) => (
            <div key={index} className={`p-6 rounded-xl border ${cardClasses} hover:shadow-lg transition-shadow`}>
              <div className="text-4xl mb-4">{project.image}</div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="text-xs text-blue-500 font-medium mb-4">{project.tech}</div>
              <div className="flex space-x-2">
                <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-500 transition-colors">
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </button>
                <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-500 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 border-b backdrop-blur-sm ${isDarkMode ? 'bg-slate-900/80 border-slate-700' : 'bg-white/80 border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                MR
              </div>
              <span className="font-bold text-lg">Mohamed Raiyan Rizwan</span>
            </div>
            
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setCurrentPage('about')}
                className={`hover:text-blue-500 transition-colors ${currentPage === 'about' ? 'text-blue-500 font-semibold' : ''}`}
              >
                About
              </button>
              <button
                onClick={() => setCurrentPage('projects')}
                className={`hover:text-blue-500 transition-colors ${currentPage === 'projects' ? 'text-blue-500 font-semibold' : ''}`}
              >
                Projects
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {currentPage === 'about' && renderAbout()}
        {currentPage === 'projects' && renderProjects()}
      </main>

      {/* Footer */}
      <footer className={`border-t mt-16 ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2025 Mohamed Raiyan Rizwan. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/raiyan-rizwan/" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Raiyan-R11" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:raiyanriz11@gmail.com" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;