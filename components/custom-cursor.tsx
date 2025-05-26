"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    // Only enable custom cursor on desktop
    if (window.innerWidth < 1024) return

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)

      // Add hover effect for links and buttons
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", onLinkMouseEnter)
        el.addEventListener("mouseleave", onLinkMouseLeave)
      })
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)

      const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onLinkMouseEnter)
        el.removeEventListener("mouseleave", onLinkMouseLeave)
      })
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const onLinkMouseEnter = () => {
      setLinkHovered(true)
    }

    const onLinkMouseLeave = () => {
      setLinkHovered(false)
    }

    // Add class to body for cursor styling
    document.body.classList.add("custom-cursor")

    addEventListeners()
    return () => {
      removeEventListeners()
      document.body.classList.remove("custom-cursor")
    }
  }, [])

  // Don't render on mobile
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null
  }

  return (
    <>
      <div
        className={`cursor-dot ${hidden ? "opacity-0" : "opacity-100"} ${clicked ? "scale-50" : "scale-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`cursor-outline ${hidden ? "opacity-0" : "opacity-100"} ${clicked ? "scale-75" : "scale-100"} ${linkHovered ? "w-20 h-20 bg-primary/10" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}
