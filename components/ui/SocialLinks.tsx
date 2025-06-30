import type { LucideIcon } from "lucide-react"

interface SocialLink {
  href: string
  icon: LucideIcon
}

interface SocialLinksProps {
  links: SocialLink[]
  animationDelay?: string
}

export function SocialLinks({ links, animationDelay = "0.8s" }: SocialLinksProps) {
  return (
    <div className="flex justify-center space-x-8 animate-fade-in-up" style={{ animationDelay }}>
      {links.map(({ href, icon: Icon }, index) => (
        <a
          key={index}
          href={href}
          className="group relative p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/50 text-slate-400 hover:text-amber-400 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 backdrop-blur-sm border border-slate-700/50 hover:border-amber-400/30 shadow-lg hover:shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          <Icon className="h-6 w-6 relative z-10" />
        </a>
      ))}
    </div>
  )
}
