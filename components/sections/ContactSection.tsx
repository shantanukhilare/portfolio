import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { personalInfo } from "@/data/portfolio-data"

interface ContactSectionProps {
  isInView: boolean
}

export const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(
  ({ isInView }, ref) => {
    return (
      <section ref={ref} id="contact" className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 tracking-tight ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Let's Create Something Amazing
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full mb-8"></div>
            <p
              className={`text-xl text-slate-400 max-w-3xl mx-auto transition-all duration-1000 leading-relaxed ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              Ready to bring your vision to life? I'm always excited to discuss new opportunities, innovative projects,
              and strategic partnerships. Let's connect and build the future together.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center space-x-4 px-8 py-4 bg-slate-800/30 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 hover:border-amber-400/30 text-slate-300 hover:text-amber-400 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm shadow-xl"
            >
              <Mail className="h-6 w-6" />
              <span className="text-lg font-medium">{personalInfo.email}</span>
            </a>
          </div>

          <Button
            size="lg"
            className={`group relative overflow-hidden bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-bold px-12 py-6 rounded-xl shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-1000 transform hover:scale-110 hover:-translate-y-2 border-0 text-lg ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Mail className="mr-3 h-6 w-6" />
            Start a Conversation
          </Button>
        </div>
      </section>
    )
  }
)

ContactSection.displayName = "ContactSection"
