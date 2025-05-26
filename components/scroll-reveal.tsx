"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animation?: "fade" | "left" | "right" | "scale"
  delay?: number
  threshold?: number
  once?: boolean
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade",
  delay = 0,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Set animation class based on type
    let animationClass = "reveal-animation"
    if (animation === "left") animationClass = "reveal-left"
    if (animation === "right") animationClass = "reveal-right"
    if (animation === "scale") animationClass = "reveal-scale"

    element.classList.add(animationClass)

    // Add delay if specified
    if (delay > 0) {
      element.style.transitionDelay = `${delay}ms`
    }

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("active")

            if (once) {
              observer.unobserve(element)
            }
          } else if (!once) {
            element.classList.remove("active")
          }
        })
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [animation, delay, once, threshold])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
