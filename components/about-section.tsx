"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    "Lua",
    "Luau",
    "JavaScript",
    "Web Development",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-sm uppercase tracking-wider text-muted-foreground mb-16 transition-all duration-700 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div
            className={`space-y-6 transition-all duration-700 delay-100 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a developer based in Dubai, UAE, focused on web development and creating engaging Roblox games. I
              love building things with Lua, Luau, and JavaScript.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether I'm building a web app or designing a game world in Roblox Studio, I focus on creating things
              that are both technically solid and genuinely fun to use.
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-200 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">Skills & Services</h3>
            <ul className="space-y-3">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-foreground justify-center md:justify-start">
                  <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
