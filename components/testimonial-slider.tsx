"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    content:
      "UpscaleTek transformed our outdated website into a modern, user-friendly platform that has significantly increased our online conversions. Their team was professional, responsive, and delivered beyond our expectations.",
    author: "ABC",
    role: "Marketing Director, TechGrowth Inc.",
    avatar: "/images/testimonials/avatar1.jpg",
  },
  {
    id: 2,
    content:
      "The mobile application developed by UpscaleTek has revolutionized how we interact with our customers. The intuitive design and seamless functionality have received overwhelmingly positive feedback.",
    author: "ABC",
    role: "CEO, InnovateMobile",
    avatar: "/images/testimonials/avatar2.jpg",
  },
  {
    id: 3,
    content:
      "Working with UpscaleTek on our AI-powered analytics platform was a game-changer for our business. Their expertise in artificial intelligence and data science helped us gain valuable insights that drive our strategic decisions.",
    author: "ABC",
    role: "CTO, DataSmart Solutions",
    avatar: "/images/testimonials/avatar3.jpg",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-none bg-white/5 backdrop-blur-sm">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <p className="text-lg mb-6 italic text-white/80">{testimonial.content}</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage
                        src={testimonial.avatar || "/placeholder.svg?height=48&width=48"}
                        alt={testimonial.author}
                      />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.author}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === current ? "bg-primary" : "bg-white/20"}`}
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 rounded-full bg-black/50 border-white/10 hover:bg-black/70 md:-translate-x-full"
        onClick={prev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-black/50 border-white/10 hover:bg-black/70 md:translate-x-full"
        onClick={next}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
