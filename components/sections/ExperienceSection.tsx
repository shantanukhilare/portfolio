import { forwardRef } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/data/portfolio-data"

interface ExperienceSectionProps {
  isInView: boolean
}

export const ExperienceSection = forwardRef<HTMLElement, ExperienceSectionProps>(
  ({ isInView }, ref) => {
    return (
      <section ref={ref} id="experience" className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 tracking-tight ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card
              className={`group relative overflow-hidden bg-slate-800/30 hover:bg-slate-700/50 border-slate-700/50 hover:border-amber-400/30 transition-all duration-1000 transform hover:-translate-y-4 hover:scale-105 shadow-2xl hover:shadow-amber-500/10 backdrop-blur-sm ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-4 md:space-y-0">
                  <div>
                    <CardTitle className="text-white text-2xl font-bold mb-2">{experience.title}</CardTitle>
                    <CardDescription className="text-xl text-amber-400 font-semibold">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <Badge className="self-start px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-bold rounded-full shadow-lg">
                    {experience.year}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-4 text-slate-300">
                  {experience.responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-start space-x-3 transition-all duration-1000 ${
                        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                      }`}
                      style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }
)

ExperienceSection.displayName = "ExperienceSection"
