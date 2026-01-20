"use client"

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown, Menu, X, Code2, Database, Blocks, Brain, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['hero', 'experience', 'projects', 'skills', 'about', 'contact'];
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };


  const navItems = ['Experience', 'Projects', 'Skills', 'About', 'Contact'];

  const experience = [
    {
        role: "SWE1 (workflows | testing)",
        company: "AlphaX",
        period: "August 2025 – January 2026",
        description: "Designed and built event-driven workflows using n8n to automate lead capture, routing, and trigger-based actions for an AI-powered Instagram DM lead-generation product.",
        achievements: [
            "Implemented complex n8n workflows with HTTP nodes, webhook triggers, conditional logic nodes, and data transformation.",
            "Built automated sequences using n8n’s scheduling nodes and delay functions for multi-stage lead nurturing.",
            "Integrated AI capabilities using HTTP Request nodes to connect with local LLM setups via Ollama (Meta LLaMA 3).",
            "Developed and executed Playwright-based automated tests to validate critical workflow execution paths.",
            "Configured n8n database nodes for lead storage and developed SQL queries for duplicate detection."
        ],
        skills: ["n8n", "Python", "SQL", "Playwright", "Ollama", "LLMs"]
    }
  ];

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
      title: "Bank Appointment Booking",
      period: "Jan 2025 – Apr 2025",
      challenge: "Traditional bank appointment systems lack transparency and require multiple verification steps that frustrate users.",
      approach: [
        "Integrated blockchain using MetaMask for transparent booking records",
        "Built full-stack solution with React, Node.js, and MongoDB Atlas",
        "Created smart contract functionality to automate verification",
        "Implemented real-time notifications for 100+ concurrent users"
      ],
      impact: "Reduced booking time by 40% while ensuring data integrity through blockchain verification with JWT authentication.",
      tech: ["React", "Node.js", "MongoDB", "Web3.js", "MetaMask"],
      links: { github: "#" }
    },
    {
      title: "Human Posture Detection",
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

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full border-b backdrop-blur-md z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 border-border/40 shadow-sm' : 'bg-transparent border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            TJ
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-muted-foreground'
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-10">
                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`text-lg font-medium text-left transition-colors hover:text-cyan-400 ${
                        activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-muted-foreground'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/50 border border-secondary text-secondary-foreground text-sm font-medium backdrop-blur-sm">
              Software Developer Intern
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Building Scalable <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Web Solutions
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Full-Stack Developer specializing in React, Next.js, and modern web technologies.
            Creating robust applications that solve real-world problems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-0 shadow-lg shadow-cyan-500/25"
              onClick={() => scrollToSection('experience')}
            >
              View Experience
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-input hover:bg-secondary/50"
              asChild
            >
              <a href="/resume.pdf" download="Tarun_Teja_Resume.pdf">
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 justify-center mt-16"
          >
            {[
              { icon: Github, href: "https://github.com/txrunteja" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/tarun-teja-jogu" },
              { icon: Mail, href: "mailto:tarunt462@gmail.com" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyan-400 transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('experience')}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and contributions to engineering teams.
            </p>
          </motion.div>

          <div className="relative border-l border-border/50 ml-3 md:ml-6 space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 ring-4 ring-background" />
                
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-cyan-400/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                           {exp.role}
                           <span className="text-muted-foreground font-normal text-base">at</span>
                           <span className="text-cyan-500">{exp.company}</span>
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Briefcase className="w-4 h-4" />
                          {exp.period}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-cyan-500 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-cyan-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-medium border border-cyan-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Production-ready applications showcasing full-stack expertise and problem-solving skills.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-cyan-400/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                        <CardDescription>{project.period}</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        {project.links.demo && (
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          </Button>
                        )}
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className='space-y-4'>
                        <div>
                          <h4 className="font-semibold text-cyan-500 mb-2">The Challenge</h4>
                          <p className="text-muted-foreground text-sm">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-500 mb-2">The Impact</h4>
                          <p className="text-muted-foreground text-sm">{project.impact}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-emerald-500 mb-2">My Approach</h4>
                        <ul className="space-y-2">
                          {project.approach.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-emerald-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground">
              A comprehensive toolset for building modern web applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-cyan-400/50 transition-colors bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-4">
                      {skill.icon}
                    </div>
                    <CardTitle className="text-xl">{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {skill.items.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-8">
              <div className="prose dark:prose-invert max-w-none space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I'm a recent Computer Science graduate from CMR College of Engineering & Technology with a passion
                  for building applications that bridge traditional web development with emerging technologies like
                  blockchain and AI.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey into software development started with curiosity about how applications work behind the scenes.
                  Today, I combine full-stack expertise with a focus on user experience, creating solutions that are both
                  technically robust and delightfully intuitive.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 pt-8 mt-8 border-t border-border">
                  <div>
                    <h3 className="font-semibold text-foreground text-xl mb-4">Education</h3>
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">Bachelor of Technology</p>
                      <p>Computer Science & Engineering</p>
                      <p>CMR College of Engineering & Technology</p>
                      <p className="text-sm mt-2 text-cyan-500">Graduating: July 2025</p>
                    </div>
                  </div>
                  
                  <div className="bg-cyan-500/5 p-6 rounded-xl border border-cyan-500/20">
                    <h3 className="font-semibold text-cyan-500 mb-2">Currently Seeking</h3>
                    <p className="text-sm">
                      Software Developer Intern positions where I can contribute to meaningful projects
                      while growing alongside experienced engineers.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-12">
              I'm always open to discussing new projects, opportunities, or collaborations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, label: "Email", value: "tarunt462@gmail.com", href: "mailto:tarunt462@gmail.com", color: "text-cyan-500" },
              { icon: Phone, label: "Phone", value: "+91 6303288472", href: "tel:+916303288472", color: "text-emerald-500" },
              { icon: MapPin, label: "Location", value: "Hyderabad, Telangana", href: "#", color: "text-purple-500" }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full hover:border-cyan-400/50 transition-colors flex flex-col items-center p-6 text-center">
                  <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                  <h3 className="font-semibold mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </Card>
              </motion.a>
            ))}
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2025 Tarun Teja Jogu. Built with Next.js, Tailwind & shadcn/ui.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
