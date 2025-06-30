import { useScrollEffects } from "@/hooks/useScrollEffects"

interface NavigationProps {
  navItems: string[]
}

export function Navigation({ navItems }: NavigationProps) {
  const { scrolled, scrollProgress } = useScrollEffects()

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-xl border-b z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-slate-900/90 shadow-2xl shadow-black/20 border-amber-500/30"
          : "bg-slate-900/80 shadow-2xl shadow-black/30 border-amber-400/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex justify-between items-center ${scrolled ? "h-16" : "h-20"} transition-all duration-700`}>
          <div
            className={`font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-500 cursor-pointer ${
              scrolled ? "text-xl" : "text-2xl"
            } tracking-tight`}
          >
            Shantanu Khilare
          </div>
          <div className="hidden md:flex h-full">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-slate-300 hover:text-amber-400 transition-all duration-500 group flex items-center px-8 border-r border-slate-700/50 h-full hover:bg-slate-800/30 font-medium tracking-wide"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-500"></span>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className={`text-slate-300 hover:text-amber-400 transition-all duration-500 rounded-xl hover:bg-slate-800/50 ${
                scrolled ? "p-2" : "p-3"
              }`}
            >
              <svg className={`fill-none stroke-current ${scrolled ? "w-6 h-6" : "w-7 h-7"}`} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Premium Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent">
<div
  className="h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 transition-all duration-300 ease-out shadow-lg shadow-amber-500/50"
style={{ width: `${scrollProgress}%` }}
></div>
      </div>
    </nav>
  )
}
