"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Mail, Star } from "lucide-react"
import { SocialLinks } from "@/components/ui/SocialLinks"
import { personalInfo, socialLinks } from "@/data/portfolio-data"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-24 px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Luxury Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Premium Geometric Elements */}
        <div className="absolute top-40 right-1/4 w-2 h-32 bg-gradient-to-b from-amber-400/20 to-transparent rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-32 h-2 bg-gradient-to-r from-amber-400/20 to-transparent rotate-12 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div
          className={`mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="relative w-40 h-40 rounded-full mx-auto border-4 border-amber-400/50 shadow-2xl shadow-amber-500/20 hover:scale-110 hover:rotate-6 transition-all duration-700 backdrop-blur-sm"
            />
            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-amber-400 to-yellow-500 shadow-lg shadow-amber-500/50 animate-bounce">
              <Star className="w-6 h-6 text-slate-900 animate-spin" style={{ animationDuration: "4s" }} />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up tracking-tight">
            Hi, I'm{" "}
            <span
              className="text-transparent bg-clip-text animate-gradient-x bg-gradient-to-r from-amber-400 via-yellow-500 via-amber-400 to-yellow-500"
              style={{ backgroundSize: "400% 400%" }}
            >
              {personalInfo.name}
            </span>
          </h1>

          <p
            className="text-2xl md:text-3xl text-slate-300 mb-6 font-light animate-fade-in-up tracking-wide"
            style={{ animationDelay: "0.2s" }}
          >
            {personalInfo.title}
          </p>

          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
            <p className="text-lg text-amber-400 font-medium tracking-widest uppercase">{personalInfo.technologies}</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>

          <p
            className="text-xl text-slate-400 mb-12 max-w-4xl mx-auto animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            {personalInfo.description}
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-semibold px-8 py-4 rounded-xl shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Download className="mr-3 h-5 w-5" />
              Download Resume
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group relative overflow-hidden bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-amber-400 font-semibold px-8 py-4 rounded-xl border-2 border-slate-600 hover:border-amber-400/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Mail className="mr-3 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </section>
  )
}
