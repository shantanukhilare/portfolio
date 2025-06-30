import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  gradient: string
}

interface ProjectCardProps {
  project: Project
  index: number
  projectsInView: boolean
}

export function ProjectCard({ project, index, projectsInView }: ProjectCardProps) {
  return (
    <Card
      className={`group relative overflow-hidden bg-slate-800/30 hover:bg-slate-700/50 border-slate-700/50 hover:border-amber-400/30 transition-all duration-1000 transform hover:-translate-y-8 hover:scale-105 shadow-2xl hover:shadow-amber-500/10 backdrop-blur-sm ${
        projectsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative overflow-hidden h-48">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
        <img
          src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=200&fit=crop"
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      </div>

      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center justify-between text-white text-xl font-bold">
          {project.title}
          <div className="flex space-x-3">
            <a
              href="#"
              className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-slate-400 hover:text-amber-400 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-slate-400 hover:text-amber-400 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </CardTitle>
        <CardDescription className="text-slate-400 leading-relaxed">{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="relative z-10">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              className={`px-3 py-1 bg-slate-700/50 hover:bg-amber-400/20 text-slate-300 hover:text-amber-400 border border-slate-600/50 hover:border-amber-400/30 transition-all duration-500 transform hover:scale-110 backdrop-blur-sm ${
                projectsInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: `${index * 0.2 + tagIndex * 0.1}s` }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
