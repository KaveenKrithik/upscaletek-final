"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
}

export default function ParallaxSection({ children, className = "", speed = 0.5 }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight

      // Only apply parallax when section is in view
      if (scrollY > sectionTop - window.innerHeight && scrollY < sectionTop + sectionHeight) {
        const yPos = (scrollY - sectionTop) * speed
        section.style.transform = `translateY(${yPos}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  return (
    <div ref={sectionRef} className={`parallax ${className}`}>
      {children}
    </div>
  )
}
