import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown, Menu, X, Code2, Database, Blocks, Brain } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const bgColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = darkMode ? 'text-gray-100' : 'text-gray-900';
  const secondaryText = darkMode ? 'text-gray-400' : 'text-gray-600';
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';

  const projects = [
    {
      title: "Saarie – E-Commerce Platform",
      period: "October 2025",
      challenge: "Modern online shoppers expect seamless experiences across all devices, with instant cart updates and secure checkout processes.",
      approach: [
        "Architected Next.js-based platform with TypeScript for type safety",
        "Engineered custom React hooks for real-time cart management",
        "Implemented Supabase authentication with role-based access control",
        "Designed mobile-first responsive interface using Tailwind CSS"
      ],
      impact: "Delivered production-ready e-commerce platform with instant UI updates, secure authentication, and consistent cross-device experience.",
      tech: ["Next.js", "TypeScript", "React", "Supabase", "Tailwind CSS"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "Bank Appointment Booking with Smart Contracts",
      period: "January 2025 – April 2025",
      challenge: "Traditional bank appointment systems lack transparency and require multiple verification steps that frustrate users.",
      approach: [
        "Integrated blockchain using MetaMask for transparent booking records",
        "Built full-stack solution with React, Node.js, and MongoDB Atlas",
        "Created smart contract functionality to automate verification",
        "Implemented real-time notifications for 100+ concurrent users"
      ],
      impact: "Reduced booking time by 40% while ensuring data integrity through blockchain verification with JWT authentication.",
      tech: ["React", "Node.js", "MongoDB Atlas", "Web3.js", "MetaMask", "JWT"],
      links: { github: "#" }
    },
    {
      title: "Human Posture Detection System",
      period: "Academic Project",
      challenge: "Poor posture during desk work leads to health issues, but most people lack real-time feedback for correction.",
      approach: [
        "Developed computer vision app using OpenCV and Python",
        "Trained pose estimation algorithms for 10+ posture categories",
        "Optimized processing pipeline to 30 FPS with sub-100ms latency",
        "Built intuitive desktop interface with visual correction cues"
      ],
      impact: "Achieved 95% classification accuracy, providing reliable health monitoring with immediate feedback for desk workers.",
      tech: ["Python", "OpenCV", "Computer Vision", "Pose Estimation"],
      links: { github: "#" }
    }
  ];

  const skills = [
    {
      category: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      items: ["React.js & Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      items: ["Node.js", "Supabase", "MongoDB Atlas", "RESTful APIs"]
    },
    {
      category: "Emerging Tech",
      icon: <Blocks className="w-6 h-6" />,
      items: ["Blockchain (Web3.js)", "Smart Contracts", "Computer Vision", "OpenCV"]
    },
    {
      category: "Tools & Practices",
      icon: <Brain className="w-6 h-6" />,
      items: ["Git & GitHub", "Vercel", "JWT Auth", "Agile Development"]
    }
  ];

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${cardBg} border-b ${borderColor} backdrop-blur-lg bg-opacity-90 z-50`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            TJ
          </div>

          <div className="hidden md:flex gap-8">
            {['Projects', 'Skills', 'About', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-cyan-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-cyan-400' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden ${cardBg} border-t ${borderColor} py-4`}>
            {['Projects', 'Skills', 'About', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-6 py-2 hover:text-cyan-400"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full ${cardBg} border ${borderColor} ${secondaryText} text-sm mb-4`}>
              Software Developer Intern
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Building Scalable Web Solutions &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Blockchain Applications
            </span>
          </h1>

          <p className={`text-xl ${secondaryText} mb-8 max-w-2xl mx-auto`}>
            Full-Stack Developer specializing in React, Next.js, and modern web technologies.
            From e-commerce platforms to blockchain integrations, I create applications that solve real problems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              View Projects
            </button>
            <button className={`px-8 py-3 ${cardBg} border ${borderColor} rounded-lg font-semibold hover:border-cyan-400 transition-all`}>
              Download Resume
            </button>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com/tarunteja" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/tarunteja" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:tarunt462@gmail.com" className="hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button onClick={() => scrollToSection('projects')} className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Work</h2>
          <p className={`text-center ${secondaryText} mb-12`}>
            Production-ready applications showcasing full-stack expertise
          </p>

          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div key={idx} className={`${cardBg} rounded-xl p-8 border ${borderColor} hover:border-cyan-400 transition-all`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className={`${secondaryText} text-sm`}>{project.period}</p>
                  </div>
                  <div className="flex gap-3 mt-4 md:mt-0">
                    {project.links.demo && (
                      <a href={project.links.demo} className="p-2 hover:text-cyan-400 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    <a href={project.links.github} className="p-2 hover:text-cyan-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">The Challenge</h4>
                    <p className={secondaryText}>{project.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-emerald-400 mb-2">My Approach</h4>
                    <ul className={`${secondaryText} space-y-1`}>
                      {project.approach.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">The Impact</h4>
                    <p className={secondaryText}>{project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`px-3 py-1 ${cardBg} border ${borderColor} rounded-full text-sm`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Technical Expertise</h2>
          <p className={`text-center ${secondaryText} mb-12`}>
            Full-stack capabilities with emerging technologies
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className={`${cardBg} rounded-xl p-6 border ${borderColor} hover:border-cyan-400 transition-all`}>
                <div className="text-cyan-400 mb-4">{skill.icon}</div>
                <h3 className="font-bold mb-4">{skill.category}</h3>
                <ul className={`${secondaryText} space-y-2 text-sm`}>
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="font-semibold mb-4">Languages & Tools</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Python', 'JavaScript', 'TypeScript', 'Java', 'HTML5', 'CSS3', 'Git', 'VS Code', 'Vercel', 'Stripe'].map((tech) => (
                <span key={tech} className={`px-4 py-2 ${cardBg} border ${borderColor} rounded-lg text-sm hover:border-cyan-400 transition-all`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

          <div className={`${cardBg} rounded-xl p-8 border ${borderColor}`}>
            <p className={`${secondaryText} text-lg leading-relaxed mb-6`}>
              I'm a recent Computer Science graduate from CMR College of Engineering & Technology with a passion
              for building applications that bridge traditional web development with emerging technologies like
              blockchain and AI.
            </p>

            <p className={`${secondaryText} text-lg leading-relaxed mb-6`}>
              My journey into software development started with curiosity about how applications work behind the scenes.
              Today, I combine full-stack expertise with a focus on user experience, creating solutions that are both
              technically robust and delightfully intuitive.
            </p>

            <p className={`${secondaryText} text-lg leading-relaxed mb-6`}>
              When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects,
              or researching the latest in web3 and computer vision technologies.
            </p>

            <div className={`mt-8 pt-8 border-t ${borderColor}`}>
              <h3 className="font-semibold text-cyan-400 mb-4">Education</h3>
              <div>
                <p className="font-semibold">Bachelor of Technology</p>
                <p className={secondaryText}>Computer Science & Engineering</p>
                <p className={secondaryText}>CMR College of Engineering & Technology</p>
                <p className={`${secondaryText} text-sm mt-1`}>Graduating: July 2025</p>
              </div>
            </div>

            <div className={`mt-8 p-6 rounded-lg ${darkMode ? 'bg-cyan-900/20' : 'bg-cyan-50'} border border-cyan-400/30`}>
              <p className="text-cyan-400 font-semibold mb-2">Currently Seeking</p>
              <p className={secondaryText}>
                Software Developer Intern positions where I can contribute to meaningful projects
                while growing alongside experienced engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className={`${secondaryText} mb-12`}>
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:tarunt462@gmail.com" className={`${cardBg} rounded-xl p-6 border ${borderColor} hover:border-cyan-400 transition-all`}>
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="font-semibold mb-1">Email</p>
              <p className={`${secondaryText} text-sm`}>tarunt462@gmail.com</p>
            </a>

            <a href="tel:+916303288472" className={`${cardBg} rounded-xl p-6 border ${borderColor} hover:border-cyan-400 transition-all`}>
              <Phone className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="font-semibold mb-1">Phone</p>
              <p className={`${secondaryText} text-sm`}>+91 6303288472</p>
            </a>

            <div className={`${cardBg} rounded-xl p-6 border ${borderColor}`}>
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <p className="font-semibold mb-1">Location</p>
              <p className={`${secondaryText} text-sm`}>Hyderabad, Telangana</p>
            </div>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com/tarunteja" target="_blank" rel="noopener noreferrer" className={`p-4 ${cardBg} rounded-full border ${borderColor} hover:border-cyan-400 transition-all`}>
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/tarunteja" target="_blank" rel="noopener noreferrer" className={`p-4 ${cardBg} rounded-full border ${borderColor} hover:border-cyan-400 transition-all`}>
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${borderColor}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={secondaryText}>
            © 2025 Tarun Teja Jogu. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
