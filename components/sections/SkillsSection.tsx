import { forwardRef } from "react"
import { SkillCard } from "@/components/ui/SkillCard"
import { skills } from "@/data/portfolio-data"

interface SkillsSectionProps {
  isInView: boolean
}

export const SkillsSection = forwardRef<HTMLElement, SkillsSectionProps>(
  ({ isInView }, ref) => {
    return (
      <section ref={ref} id="skills" className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 tracking-tight ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full mb-6"></div>
            <p
              className={`text-xl text-slate-400 max-w-3xl mx-auto transition-all duration-1000 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              Mastering cutting-edge technologies to deliver exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => (
              <SkillCard
                key={categoryIndex}
                category={category}
                categoryIndex={categoryIndex}
                skillsInView={isInView}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
)

SkillsSection.displayName = "SkillsSection"
