import { Target, Zap, Award, Star } from "lucide-react"
import { personalInfo } from "@/data/portfolio-data"
import React, { forwardRef } from "react"

interface AboutSectionProps {
  isInView: boolean
}

// Use forwardRef so the parent can pass ref correctly
export const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(
  ({ isInView }, ref) => {
    const features = [
      { icon: Target, title: "Problem Solver", desc: "Strategic thinking" },
      { icon: Zap, title: "Quick Learner", desc: "Rapid adaptation" },
      { icon: Award, title: "Detail Oriented", desc: "Precision focused" },
      { icon: Star, title: "Team Player", desc: "Collaborative spirit" },
    ]

    return (
      <section ref={ref} id="about" className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 tracking-tight ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              {personalInfo.aboutText.map((paragraph, index) => (
                <p key={index} className="text-xl text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="grid grid-cols-2 gap-6">
                {features.map(({ icon: Icon, title, desc }, index) => (
                  <div
                    key={title}
                    className={`group p-6 rounded-xl bg-slate-800/30 hover:bg-slate-700/50 border border-slate-700/50 hover:border-amber-400/30 transition-all duration-500 backdrop-blur-sm ${
                      isInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                    style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <Icon className="w-8 h-8 text-amber-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold mb-1">{title}</h3>
                    <p className="text-slate-400 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-2xl blur-2xl transform rotate-6"></div>
              <div className="relative bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm shadow-2xl">
                <img
                  src="/images/profile.jpg"
                  alt="About me"
                  className="w-full rounded-xl shadow-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
)

AboutSection.displayName = "AboutSection"
