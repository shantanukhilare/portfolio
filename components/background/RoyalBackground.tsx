import { useEffect, useState } from "react"

interface ParticleStyle {
  width: string
  height: string
  left: string
  top: string
  animationDelay: string
  animationDuration: string
}

export function RoyalBackground() {
  const [particles, setParticles] = useState<ParticleStyle[]>([])

  useEffect(() => {
    // Only runs on the client
    const generateParticles = () =>
      Array.from({ length: 20 }).map(() => ({
        width: `${Math.random() * 8 + 4}px`,
        height: `${Math.random() * 8 + 4}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${Math.random() * 4 + 6}s`,
      }))

    setParticles(generateParticles())
  }, [])

  return (
    <>
      {/* Royal Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/images/royal-background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Animated Particles */}
      <div className="fixed inset-0 z-1 pointer-events-none overflow-hidden">
        {particles.map((style, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-yellow-400/30 to-amber-400/30 animate-float"
            style={style}
          />
        ))}
      </div>
    </>
  )
}
