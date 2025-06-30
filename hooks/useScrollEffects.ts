import { useEffect, useState } from "react"

export function useScrollEffects() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

      setScrolled(scrollTop > 10)
      setScrollProgress(Math.min(100, progress))
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // set initial values

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { scrolled, scrollProgress }
}
