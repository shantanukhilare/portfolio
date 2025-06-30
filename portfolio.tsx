"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { RoyalBackground } from "@/components/background/RoyalBackground"
import { Navigation } from "@/components/layout/Navigation"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { ContactSection } from "@/components/sections/ContactSection"

const navItems = ["About", "Skills", "Projects", "Experience", "Contact"]

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [skillsInView, setSkillsInView] = useState(false)
  const [aboutInView, setAboutInView] = useState(false)
  const [projectsInView, setProjectsInView] = useState(false)
  const [experienceInView, setExperienceInView] = useState(false)
  const [contactInView, setContactInView] = useState(false)
  const [scrollY, setScrollY] = useState(0)

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

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <RoyalBackground />
      <Navigation navItems={navItems} />
      <HeroSection />
<AboutSection ref={aboutRef} isInView={aboutInView} />
      <SkillsSection ref={skillsRef} isInView={skillsInView} />
      <ProjectsSection ref={projectsRef} isInView={projectsInView} />
      <ExperienceSection ref={experienceRef} isInView={experienceInView} />
      <ContactSection ref={contactRef} isInView={contactInView} />

      {/* Premium Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-black border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-lg animate-fade-in-up">
            &copy; 2024 Shantanu Khilare. Crafted with precision and passion.
          </p>
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
        .animate-gradient-x { animation: gradient-x 4s ease infinite; }
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
