"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Settings, Star } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [skillsInView, setSkillsInView] = useState(false)
  const [aboutInView, setAboutInView] = useState(false)
  const [projectsInView, setProjectsInView] = useState(false)
  const [experienceInView, setExperienceInView] = useState(false)
  const [contactInView, setContactInView] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0);
  const skillsRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 50)
      setScrollY(scrollTop)

      // Check if sections are in view
      const checkInView = (
        ref: React.RefObject<HTMLElement>,
        setter: (value: boolean) => void,
        currentState: boolean,
      ) => {
        if (ref.current && !currentState) {
          const rect = ref.current.getBoundingClientRect()
          const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0
          if (isInView) {
            setter(true)
          }
        }
      }

      checkInView(aboutRef, setAboutInView, aboutInView)
      checkInView(skillsRef, setSkillsInView, skillsInView)
      checkInView(projectsRef, setProjectsInView, projectsInView)
      checkInView(experienceRef, setExperienceInView, experienceInView)
      checkInView(contactRef, setContactInView, contactInView)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [aboutInView, skillsInView, projectsInView, experienceInView, contactInView])

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, progress));
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // set initial value

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const skills = [
    {
      category: "Frontend",
      icon: Code,
      skills: [
        { name: "React", level: 90 },
        { name: "Angular", level: 85 },
        { name: "React Native", level: 80 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
      ],
    },
    {
      category: "Backend",
      icon: Database,
      skills: [
        { name: "Java", level: 95 },
        { name: "Spring Boot", level: 90 },
        { name: ".NET", level: 85 },
        { name: "Python", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
      ],
    },
    {
      category: "Tools & Others",
      icon: Settings,
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "IntelliJ", level: 85 },
        { name: "Postman", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full backdrop-blur-md border-b-2 z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-[#001a4d]/95 shadow-2xl border-[#D4AF37]"
            : "bg-gradient-to-r from-[#001a4d] via-[#002d66] to-[#001a4d] shadow-2xl border-[#D4AF37]"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center ${scrolled ? "h-14" : "h-20"} transition-all duration-500`}
          >
            <div
              className={`font-bold bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent hover:scale-105 transition-all duration-300 cursor-pointer ${
                scrolled ? "text-lg" : "text-xl"
              }`}
            >
              Shantanu Khilare
            </div>
            <div className="hidden md:flex h-full">
              <a
                href="#about"
                className="relative text-white hover:text-[#FFD700] transition-all duration-300 group flex items-center px-6 border-r border-white/20 h-full hover:bg-white/5"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#skills"
                className="relative text-white hover:text-[#FFD700] transition-all duration-300 group flex items-center px-6 border-r border-white/20 h-full hover:bg-white/5"
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#projects"
                className="relative text-white hover:text-[#FFD700] transition-all duration-300 group flex items-center px-6 border-r border-white/20 h-full hover:bg-white/5"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#experience"
                className="relative text-white hover:text-[#FFD700] transition-all duration-300 group flex items-center px-6 border-r border-white/20 h-full hover:bg-white/5"
              >
                Experience
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#contact"
                className="relative text-white hover:text-[#FFD700] transition-all duration-300 group flex items-center px-6 h-full hover:bg-white/5"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className={`text-white hover:text-[#FFD700] transition-all duration-300 rounded-lg hover:bg-white/10 ${
                  scrolled ? "p-1" : "p-2"
                }`}
              >
                <svg className={`fill-none stroke-current ${scrolled ? "w-5 h-5" : "w-6 h-6"}`} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30">
          <div
            className="h-full bg-gradient-to-r from-[#FFD700] to-[#D4AF37] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #000d2b, #002d66)" }}
      >
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Layer 1 - Slowest parallax */}
          <div
            className="absolute top-20 left-10 w-20 h-20 bg-[#D4AF37]/10 rounded-full animate-bounce"
            style={{
              animationDelay: "0s",
              animationDuration: "3s",
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#D4AF37]/10 rounded-full animate-bounce"
            style={{
              animationDelay: "2s",
              animationDuration: "5s",
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          ></div>

          {/* Layer 2 - Medium parallax */}
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-[#FFD700]/10 rounded-full animate-bounce"
            style={{
              animationDelay: "1s",
              animationDuration: "4s",
              transform: `translateY(${scrollY * 0.2}px) translateX(${scrollY * 0.05}px)`,
            }}
          ></div>
          <div
            className="absolute top-60 left-1/3 w-14 h-14 bg-[#D4AF37]/10 rounded-full animate-bounce"
            style={{
              animationDelay: "1.5s",
              animationDuration: "3.5s",
              transform: `translateY(${scrollY * 0.25}px) translateX(${-scrollY * 0.03}px)`,
            }}
          ></div>

          {/* Layer 3 - Fastest parallax */}
          <div
            className="absolute top-1/3 right-1/3 w-8 h-8 bg-[#FFD700]/10 rounded-full animate-pulse"
            style={{
              animationDelay: "0.5s",
              transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.1}px)`,
            }}
          ></div>
          <div
            className="absolute bottom-40 right-1/4 w-10 h-10 bg-[#FFD700]/10 rounded-full animate-bounce"
            style={{
              animationDelay: "2.5s",
              animationDuration: "4.5s",
              transform: `translateY(${scrollY * 0.35}px) translateX(${-scrollY * 0.08}px)`,
            }}
          ></div>
          <div
            className="absolute top-1/4 left-1/2 w-6 h-6 bg-[#D4AF37]/10 rounded-full animate-pulse"
            style={{
              animationDelay: "3s",
              transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.1}deg)`,
            }}
          ></div>
          <div
            className="absolute bottom-60 left-20 w-18 h-18 bg-[#FFD700]/10 rounded-full animate-bounce"
            style={{
              animationDelay: "0.8s",
              animationDuration: "3.8s",
              transform: `translateY(${scrollY * 0.45}px) scale(${1 + scrollY * 0.0001})`,
            }}
          ></div>

          {/* Additional Geometric Shapes with Parallax */}
          <div
            className="absolute top-32 right-1/4 w-4 h-16 bg-[#D4AF37]/5 rotate-45"
            style={{
              transform: `translateY(${scrollY * 0.2}px) rotate(${45 + scrollY * 0.05}deg)`,
            }}
          ></div>
          <div
            className="absolute bottom-32 left-1/3 w-12 h-4 bg-[#FFD700]/5 rotate-12"
            style={{
              transform: `translateY(${scrollY * 0.3}px) rotate(${12 + scrollY * 0.08}deg)`,
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative inline-block mb-6">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto border-4 shadow-xl hover:scale-110 hover:rotate-6 transition-all duration-500"
                style={{ borderColor: "#D4AF37" }}
              />
              <div
                className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center animate-pulse"
                style={{ backgroundColor: "#D4AF37" }}
              >
                <Star className="w-4 h-4 animate-spin" style={{ color: "#001a4d", animationDuration: "3s" }} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
              Hi, I'm{" "}
              <span
                className="text-transparent bg-clip-text animate-gradient-x"
                style={{
                  backgroundImage: "linear-gradient(45deg, #FFD700, #B8860B, #FFD700, #D4AF37)",
                  backgroundSize: "300% 300%",
                }}
              >
                Shantanu Khilare
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-blue-50 mb-4 font-medium animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Full Stack Developer | Java • React • .NET
            </p>
            <p
              className="text-lg text-blue-50 mb-8 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Passionate Full Stack Developer from Thane, Mumbai, specializing in building scalable web applications
              with modern technologies
            </p>
            <div className="flex justify-center space-x-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <Button
                size="lg"
                className="text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border-0 animate-pulse-slow"
                style={{
                  background: "linear-gradient(45deg, #FFD700, #B8860B)",
                  color: "#001a4d",
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white hover:text-[#001a4d] shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
                style={{
                  borderColor: "#D4AF37",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#D4AF37"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                }}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
            <div className="flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <a
                href="https://github.com/shantanukhilare"
                className="text-blue-100 hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/shantanu-khilare-b2a825259/"
                className="text-blue-100 hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:shantanu.khilare.16@gmail.com"
                className="text-blue-100 hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-10 right-10 w-32 h-32 bg-[#D4AF37]/5 rounded-full"
            style={{
              transform: `translateY(${(scrollY - 800) * 0.1}px) translateX(${(scrollY - 800) * 0.05}px)`,
            }}
          ></div>
          <div
            className="absolute bottom-20 left-20 w-24 h-24 bg-[#FFD700]/5 rounded-full"
            style={{
              transform: `translateY(${(scrollY - 800) * 0.15}px) translateX(${-(scrollY - 800) * 0.03}px)`,
            }}
          ></div>
          <div
            className="absolute top-1/2 left-10 w-16 h-16 bg-[#D4AF37]/5 rounded-full"
            style={{
              transform: `translateY(${(scrollY - 800) * 0.2}px) scale(${1 + (scrollY - 800) * 0.0001})`,
            }}
          ></div>
          <div
            className="absolute top-20 left-1/3 w-8 h-20 bg-[#FFD700]/3 rotate-12"
            style={{
              transform: `translateY(${(scrollY - 800) * 0.25}px) rotate(${12 + (scrollY - 800) * 0.02}deg)`,
            }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-amber-50/30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
              aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ color: "#001a4d" }}
          >
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transition-all duration-1000 ${
                aboutInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer based in Thane, Mumbai, with experience in building robust web
                applications. I specialize in Java, Spring Boot, React, and .NET technologies, always striving to create
                efficient and user-friendly solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you can find me playing chess, analyzing game strategies, or exploring new
                programming concepts. I'm always eager to learn cutting-edge technologies and take on challenging
                projects that push my development skills to the next level.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Problem Solver", "Team Player", "Quick Learner", "Detail Oriented"].map((badge, index) => (
                  <Badge
                    key={badge}
                    className={`hover:opacity-80 transition-all duration-500 transform hover:scale-110 ${
                      aboutInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#F5DEB3" : "#D4AF37",
                      color: "#001a4d",
                      transitionDelay: `${0.4 + index * 0.1}s`,
                    }}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
            <div
              className={`relative transition-all duration-1000 ${
                aboutInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div
                className="absolute inset-0 rounded-lg transform rotate-6 animate-pulse"
                style={{ background: "linear-gradient(45deg, #007BFF, #D4AF37)" }}
              ></div>
              <img
                src="/images/profile.jpg"
                alt="About me"
                className="relative rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 hover:-rotate-2 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section
        ref={skillsRef}
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: "#F5DEB3" }}
      >
        {/* Parallax Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-10 left-10 w-32 h-32 bg-[#D4AF37]/20 rounded-full animate-float"
            style={{
              animationDelay: "0s",
              transform: `translateY(${(scrollY - 1600) * 0.1}px) translateX(${(scrollY - 1600) * 0.03}px)`,
            }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-24 h-24 bg-[#FFD700]/20 rounded-full animate-float"
            style={{
              animationDelay: "2s",
              transform: `translateY(${(scrollY - 1600) * 0.15}px) translateX(${-(scrollY - 1600) * 0.05}px)`,
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#D4AF37]/20 rounded-full animate-float"
            style={{
              animationDelay: "4s",
              transform: `translateY(${(scrollY - 1600) * 0.2}px) rotate(${(scrollY - 1600) * 0.02}deg)`,
            }}
          ></div>
          <div
            className="absolute top-20 right-1/3 w-20 h-20 bg-[#FFD700]/20 rounded-full animate-float"
            style={{
              animationDelay: "1s",
              transform: `translateY(${(scrollY - 1600) * 0.25}px) scale(${1 + (scrollY - 1600) * 0.0001})`,
            }}
          ></div>
          <div
            className="absolute bottom-40 left-1/3 w-28 h-28 bg-[#D4AF37]/20 rounded-full animate-float"
            style={{
              animationDelay: "3s",
              transform: `translateY(${(scrollY - 1600) * 0.3}px) translateX(${(scrollY - 1600) * 0.02}px)`,
            }}
          ></div>
          <div
            className="absolute top-40 left-1/2 w-12 h-12 bg-[#FFD700]/20 rounded-full animate-float"
            style={{
              animationDelay: "5s",
              transform: `translateY(${(scrollY - 1600) * 0.35}px) translateX(${-(scrollY - 1600) * 0.04}px)`,
            }}
          ></div>

          {/* Additional Parallax Elements */}
          <div
            className="absolute top-60 right-10 w-6 h-24 bg-[#D4AF37]/10 rotate-45"
            style={{
              transform: `translateY(${(scrollY - 1600) * 0.18}px) rotate(${45 + (scrollY - 1600) * 0.03}deg)`,
            }}
          ></div>
          <div
            className="absolute bottom-60 left-10 w-20 h-6 bg-[#FFD700]/10 rotate-12"
            style={{
              transform: `translateY(${(scrollY - 1600) * 0.22}px) rotate(${12 + (scrollY - 1600) * 0.04}deg)`,
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-4 transition-all duration-1000 ${
              skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ color: "#001a4d" }}
          >
            Skills & Technologies
          </h2>
          <p
            className={`text-center text-gray-600 mb-12 max-w-2xl mx-auto transition-all duration-1000 ${
              skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Here's a breakdown of my technical expertise across different domains
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={categoryIndex}
                  className={`group hover:shadow-2xl transition-all duration-1000 transform hover:-translate-y-4 hover:rotate-1 border-0 shadow-lg bg-white/90 backdrop-blur-sm ${
                    skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
                      style={{ backgroundColor: "#001a4d" }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle style={{ color: "#001a4d" }}>{category.category}</CardTitle>
                    <CardDescription>Building with modern technologies</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm font-semibold" style={{ color: "#001a4d" }}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className="h-3 rounded-full transition-all duration-1500 ease-out"
                            style={{
                              backgroundColor: "#D4AF37",
                              width: skillsInView ? `${skill.level}%` : "0%",
                              transitionDelay: `${categoryIndex * 300 + skillIndex * 150}ms`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-20 w-28 h-28 bg-[#D4AF37]/5 rounded-full"
            style={{
              transform: `translateY(${(scrollY - 2400) * 0.12}px) translateX(${(scrollY - 2400) * 0.04}px)`,
            }}
          ></div>
          <div
            className="absolute bottom-32 right-32 w-20 h-20 bg-[#FFD700]/5 rounded-full"
            style={{
              transform: `translateY(${(scrollY - 2400) * 0.18}px) translateX(${-(scrollY - 2400) * 0.06}px)`,
            }}
          ></div>
          <div
            className="absolute top-1/2 right-10 w-12 h-12 bg-[#D4AF37]/5 rounded-full"
            style={{
              transform: `translateY(${(scrollY - 2400) * 0.25}px) scale(${1 + (scrollY - 2400) * 0.0002})`,
            }}
          ></div>
          <div
            className="absolute top-40 left-1/3 w-16 h-4 bg-[#FFD700]/3 rotate-30"
            style={{
              transform: `translateY(${(scrollY - 2400) * 0.2}px) rotate(${30 + (scrollY - 2400) * 0.03}deg)`,
            }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-4 h-24 bg-[#D4AF37]/3 rotate-60"
            style={{
              transform: `translateY(${(scrollY - 2400) * 0.15}px) rotate(${60 + (scrollY - 2400) * 0.02}deg)`,
            }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-amber-50/30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
              projectsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ color: "#001a4d" }}
          >
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multiplayer Chess Application",
                description:
                  "Real-time multiplayer chess game with live gameplay, move validation, and game state management",
                tags: ["React", "Node.js", "Socket.io"],
              },
              {
                title: "E-Commerce Application",
                description:
                  "Full-featured e-commerce platform with user authentication, product management, and secure payment processing",
                tags: ["Java", "Spring Boot", "React"],
              },
              {
                title: "Web Application",
                description: "Modern web application with responsive design and optimized performance",
                tags: ["Python", "Flask", "PostgreSQL"],
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-1000 transform hover:-translate-y-6 hover:rotate-2 border-0 shadow-lg overflow-hidden ${
                  projectsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=200&fit=crop"
                    alt={`Project ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(to top, rgba(0, 26, 77, 0.8), transparent)" }}
                  ></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between" style={{ color: "#001a4d" }}>
                    {project.title}
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        className={`text-xs transition-all duration-500 transform hover:scale-110 ${
                          projectsInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
                        }`}
                        style={{
                          backgroundColor: tagIndex % 2 === 0 ? "#F5DEB3" : "#D4AF37",
                          color: "#001a4d",
                          transitionDelay: `${index * 0.2 + tagIndex * 0.1}s`,
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={experienceRef}
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: "#F5DEB3" }}
      >
        {/* Parallax Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full animate-pulse"
            style={{
              transform: `translateY(${(scrollY - 3200) * 0.1}px) translateX(${-(scrollY - 3200) * 0.03}px)`,
            }}
          ></div>
          <div
            className="absolute bottom-10 left-20 w-32 h-32 bg-[#FFD700]/10 rounded-full animate-pulse"
            style={{
              animationDelay: "1s",
              transform: `translateY(${(scrollY - 3200) * 0.15}px) translateX(${(scrollY - 3200) * 0.05}px)`,
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#D4AF37]/10 rounded-full"
            style={{
              transform: `translateY(${(scrollY - 3200) * 0.2}px) scale(${1 + (scrollY - 3200) * 0.0001})`,
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
              experienceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ color: "#001a4d" }}
          >
            Experience
          </h2>
          <div className="space-y-8">
            <Card
              className={`hover:shadow-2xl transition-all duration-1000 transform hover:-translate-y-2 hover:scale-105 border-0 shadow-lg bg-white/90 backdrop-blur-sm ${
                experienceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle style={{ color: "#001a4d" }}>Software Development Intern</CardTitle>
                    <CardDescription className="text-lg text-gray-600">Mahindra Teqo</CardDescription>
                  </div>
                  <Badge className="animate-pulse" style={{ backgroundColor: "#D4AF37", color: "#001a4d" }}>
                    2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {[
                    "Developed and maintained web applications using Java and Spring Boot",
                    "Collaborated with cross-functional teams on software development projects",
                    "Gained hands-on experience with full-stack development practices",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className={`transition-all duration-1000 ${
                        experienceInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                      }`}
                      style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden"
        style={{ backgroundColor: "#001a4d" }}
      >
        {/* Parallax Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-10 left-1/4 w-20 h-20 bg-[#D4AF37]/20 rounded-full animate-float"
            style={{
              transform: `translateY(${(scrollY - 4000) * 0.1}px) translateX(${(scrollY - 4000) * 0.02}px)`,
            }}
          ></div>
          <div
            className="absolute bottom-20 right-1/4 w-16 h-16 bg-[#FFD700]/20 rounded-full animate-float"
            style={{
              animationDelay: "2s",
              transform: `translateY(${(scrollY - 4000) * 0.15}px) translateX(${-(scrollY - 4000) * 0.04}px)`,
            }}
          ></div>
          <div
            className="absolute top-1/2 right-10 w-12 h-12 bg-[#D4AF37]/20 rounded-full animate-float"
            style={{
              animationDelay: "4s",
              transform: `translateY(${(scrollY - 4000) * 0.2}px) rotate(${(scrollY - 4000) * 0.02}deg)`,
            }}
          ></div>
          <div
            className="absolute top-32 left-10 w-8 h-32 bg-[#FFD700]/10 rotate-45"
            style={{
              transform: `translateY(${(scrollY - 4000) * 0.18}px) rotate(${45 + (scrollY - 4000) * 0.03}deg)`,
            }}
          ></div>
          <div
            className="absolute bottom-32 right-20 w-24 h-8 bg-[#D4AF37]/10 rotate-30"
            style={{
              transform: `translateY(${(scrollY - 4000) * 0.22}px) rotate(${30 + (scrollY - 4000) * 0.04}deg)`,
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-8 transition-all duration-1000 ${
              contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Let's Work Together
          </h2>
          <p
            className={`text-xl text-blue-50 mb-8 max-w-2xl mx-auto transition-all duration-1000 ${
              contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            I'm always interested in new opportunities and exciting projects. Whether you need a full-stack developer or
            want to discuss chess strategies, let's connect!
          </p>
          <div
            className={`flex justify-center space-x-6 mb-8 transition-all duration-1000 ${
              contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <a
              href="mailto:shantanu.khilare.16@gmail.com"
              className="flex items-center space-x-2 text-blue-100 hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-5 w-5" />
              <span>shantanu.khilare.16@gmail.com</span>
            </a>
          </div>
          <Button
            size="lg"
            className={`font-semibold shadow-lg hover:shadow-2xl transition-all duration-1000 transform hover:scale-110 hover:-translate-y-2 border-0 animate-pulse-slow ${
              contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              background: "linear-gradient(45deg, #FFD700, #B8860B)",
              color: "#001a4d",
              transitionDelay: "0.6s",
            }}
          >
            <Mail className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#000d2b", color: "#D4AF37" }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="animate-fade-in-up">&copy; 2024 Shantanu Khilare. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        /* Custom Cursor */
        * {
          cursor: url('/images/cursor.png'), auto !important;
        }

        a, button, [role="button"], input[type="submit"], input[type="button"] {
          cursor: url('/images/cursor.png'), pointer !important;
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out forwards; }
        .animate-bounce-in { animation: bounce-in 0.6s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
