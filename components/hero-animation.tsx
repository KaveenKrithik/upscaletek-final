"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 120
    const isDark = theme === "dark"
    let mouseX = 0
    let mouseY = 0
    let isMouseMoving = false

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      isMouseMoving = true

      // Add extra particles on mouse move
      if (particles.length < 200) {
        for (let i = 0; i < 3; i++) {
          const particle = new Particle()
          particle.x = mouseX
          particle.y = mouseY
          particle.size = Math.random() * 4 + 2
          particle.speedX = (Math.random() - 0.5) * 3
          particle.speedY = (Math.random() - 0.5) * 3
          particles.push(particle)
        }
      }

      setTimeout(() => {
        isMouseMoving = false
      }, 100)
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      glowing: boolean
      glowIntensity: number
      originalSize: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.originalSize = this.size
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.glowing = Math.random() > 0.8
        this.glowIntensity = Math.random() * 0.5 + 0.5

        // Create a gradient color
        if (isDark) {
          const hue = Math.random() * 60 + 240 // Blue to purple range
          this.color = `hsla(${hue}, 80%, 60%, ${Math.random() * 0.3 + 0.2})`
        } else {
          const hue = Math.random() * 60 + 240 // Blue to purple range
          this.color = `hsla(${hue}, 80%, 60%, ${Math.random() * 0.2 + 0.1})`
        }
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Boundary check with bounce effect
        if (this.x > canvas.width) {
          this.x = canvas.width
          this.speedX = -this.speedX
        } else if (this.x < 0) {
          this.x = 0
          this.speedX = -this.speedX
        }

        if (this.y > canvas.height) {
          this.y = canvas.height
          this.speedY = -this.speedY
        } else if (this.y < 0) {
          this.y = 0
          this.speedY = -this.speedY
        }

        // Mouse interaction
        if (isMouseMoving) {
          const dx = mouseX - this.x
          const dy = mouseY - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            // Repel particles
            const angle = Math.atan2(dy, dx)
            const force = (100 - distance) / 100
            this.speedX -= Math.cos(angle) * force * 0.5
            this.speedY -= Math.sin(angle) * force * 0.5

            // Increase size temporarily
            this.size = this.originalSize * (1 + force)
          } else {
            // Return to original size
            if (this.size > this.originalSize) {
              this.size -= 0.1
            }
          }
        }
      }

      draw() {
        if (!ctx) return

        if (this.glowing) {
          // Create glowing effect
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2)

          // Parse the color to extract components
          const colorMatch = this.color.match(/hsla$$([^,]+),\s*([^,]+),\s*([^,]+),\s*([^)]+)$$/)
          if (colorMatch) {
            const [_, hue, saturation, lightness, alpha] = colorMatch
            // Create new color strings with modified alpha
            const innerColor = `hsla(${hue}, ${saturation}, ${lightness}, 0.8)`
            const outerColor = `hsla(${hue}, ${saturation}, ${lightness}, 0)`

            gradient.addColorStop(0, innerColor)
            gradient.addColorStop(1, outerColor)
          } else {
            // Fallback if color parsing fails
            gradient.addColorStop(0, this.color)
            gradient.addColorStop(1, this.color.replace(/[^,]+\)$/, "0)"))
          }

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    const init = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    // Connect particles with lines
    const connect = () => {
      if (!ctx) return
      const maxDistance = 150
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = isDark ? `rgba(120, 87, 255, ${opacity * 0.3})` : `rgba(120, 87, 255, ${opacity * 0.15})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      connect()
      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
