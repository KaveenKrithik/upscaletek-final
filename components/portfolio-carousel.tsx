"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const portfolioItems = [
  {
    id: 1,
    title: "Akash Mega Mart",
    description: "A modern e-commerce platform with advanced features and seamless user experience.",
    image: "/akash.webp",
    category: "App Development",
  },
  {
    id: 2,
    title: "VETLAB",
    description: "Introducing our customer app - your ultimate healthcare companion! Seamlessly connect with healthcare professionals through high-definition video consultations, ensuring expert guidance from anywhere, anytime.",
    image: "/vetlab.webp",
    category: "AI Development",
  },
  {
    id: 3,
    title: "DAVISGRILL",
    description: "A modern e-commerce platform with advanced features and seamless user experience.",
    image: "/davi.png",
    category: "E-commerce",
  },
  {
    id: 4,
    title: "AutoPilot",
    description: "Autopilot is a free app to manage business processes.",
    image: "/auto.png",
    category: "Web Development",
  },
]

export default function PortfolioCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const nextSlide = () => {
    setAutoplay(false)
    setCurrentSlide((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setAutoplay(false)
    setCurrentSlide((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setAutoplay(false)
    setCurrentSlide(index)
  }

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {portfolioItems.map((item) => (
            <div key={item.id} className="carousel-item">
              <div className="relative h-[500px] w-full">
                <Image
                  src={item.image || "/placeholder.svg?height=500&width=1000"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <div className="text-sm font-medium text-primary mb-2">{item.category}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground max-w-2xl mb-4">{item.description}</p>
                  <Button
                    variant="outline"
                    className="w-fit border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/50 border-white/10 hover:bg-black/70 z-10"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/50 border-white/10 hover:bg-black/70 z-10"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        <div className="carousel-controls">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
