import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  category: string
  icon: LucideIcon
  skills: Skill[]
}

interface SkillCardProps {
  category: SkillCategory
  categoryIndex: number
  skillsInView: boolean
}

export function SkillCard({ category, categoryIndex, skillsInView }: SkillCardProps) {
  const IconComponent = category.icon

  return (
    <Card
      className={`group relative overflow-hidden bg-slate-800/30 hover:bg-slate-700/50 border-slate-700/50 hover:border-amber-400/30 transition-all duration-1000 transform hover:-translate-y-6 hover:scale-105 shadow-2xl hover:shadow-amber-500/10 backdrop-blur-sm ${
        skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <CardHeader className="text-center pb-6 relative z-10">
        <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-slate-600/50">
          <IconComponent className="w-10 h-10 text-amber-400" />
        </div>
        <CardTitle className="text-white text-2xl font-bold mb-2">{category.category}</CardTitle>
        <CardDescription className="text-slate-400">Building with modern technologies</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 relative z-10">
        {category.skills.map((skill, skillIndex) => (
          <div key={skillIndex} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-300 font-medium">{skill.name}</span>
              <span className="text-amber-400 font-bold text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-2000 ease-out shadow-lg shadow-amber-500/30"
                style={{
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
}
