import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Portfolio | UpscaleTek",
  description:
    "Explore our portfolio of successful projects and see how we've helped businesses achieve their digital goals.",
}

const portfolioItems = [
  {
    id: 1,
    title: "Akash Mega Mart",
    description: "A modern e-commerce platform with advanced features and seamless user experience.",
    image: "/akash.webp",
    category: "Web Development",
    tags: ["E-Commerce", "React", "Node.js"],
  },
  {
    id: 2,
    title: "AutoPilot",
    description: "Autopilot is a free app to manage business processes.",
    image: "/auto.png",
    category: "AI Development",
    tags: ["AI", "Data Visualization", "Python"],
  },
  {
    id: 3,
    title: "VetLab",
    description: "Introducing our customer app - your ultimate healthcare companion!",
    image: "/vetlab.webp",
    category: "Mobile Development",
    tags: ["Banking", "React Native", "Security"],
  },
  {
    id: 4,
    title: "Mastershala",
    description: "A webtech platform for online learning and skill developement.",
    image: "/master.png",
    category: "Web Development",
    tags: ["Healthcare", "SaaS", "Cloud"],
  },
  {
    id: 5,
    title: "Spray Bluestar",
    description: "An e-commerce platform for industrial spray solutions.",
    image: "/blue.png",
    category: "Web Development",
    tags: ["Security", "Encryption", "Monitoring"],
  },
  {
    id: 6,
    title: "VetOnline",
    description: "An online platform for veterinary services and consulations",
    image: "/vet.webp",
    category: "App Development",
    tags: ["IoT", "Smart Home", "Mobile App"],
  },
]

export default function PortfolioPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full py-32 bg-black">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">Our Portfolio</h1>
              <p className="text-xl text-white/70 max-w-3xl">
                Explore our latest projects and see how we've helped businesses achieve their digital goals
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-24 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-lg">
                  <div className="relative h-[300px] w-full overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg?height=300&width=400"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="text-sm font-medium text-primary mb-2">{item.category}</div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-white/70 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-fit border-white/20 hover:bg-white/10 transition-all duration-300"
                      asChild
                    >
                      <Link href={`/portfolio/${item.id}`}>
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 bg-gradient-to-r from-primary to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <ScrollReveal animation="left">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Ready to Start Your Project?</h2>
                <p className="text-xl opacity-90 mb-6">
                  Let's collaborate to bring your vision to life with pioneering technology and innovative solutions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="right">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-white/20 transition-all duration-300"
                asChild
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
