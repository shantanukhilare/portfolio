import { forwardRef } from "react"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { projects } from "@/data/portfolio-data"

interface ProjectsSectionProps {
  isInView: boolean
}

export const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(
  ({ isInView }, ref) => {
    return (
      <section ref={ref} id="projects" className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 tracking-tight ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} projectsInView={isInView} />
            ))}
          </div>
        </div>
      </section>
    )
  }
)

ProjectsSection.displayName = "ProjectsSection"
