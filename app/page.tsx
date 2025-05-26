import Link from "next/link"
import Image from "next/image"
import { MoveRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"
import ParallaxSection from "@/components/parallax-section"
import PortfolioCarousel from "@/components/portfolio-carousel"
import TestimonialSlider from "@/components/testimonial-slider"
import CompanyLogos from "@/components/company-logos"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-30"></div>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-repeat opacity-5"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-32 h-32 mb-6">
                <Image
                  src="/images/logos/upscaletek-primary-contrast.png"
                  alt="UpscaleTek"
                  fill
                  className="object-contain animate-pulse"
                />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white">UpscaleTek</h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              Transforming ideas into digital reality with pioneering technology solutions.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full px-8 bg-white text-black hover:bg-white/90 transition-all duration-300 transform hover:scale-105 btn-glow"
                asChild
              >
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-white/20 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <MoveRight className="h-10 w-10 text-white rotate-90" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="left">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white">About Us</h2>
                <p className="text-xl text-white/70 mb-6">
                  Founded in 2015, UpscaleTek began with a simple mission: to help businesses leverage technology to
                  achieve their goals. What started as a small team of developers has grown into a full-service digital
                  agency with expertise across web development, mobile applications, AI, cybersecurity, and more.
                </p>
                <p className="text-xl text-white/70 mb-6">
                  Over the years, we've had the privilege of working with clients ranging from startups to Fortune 500
                  companies, helping them navigate the ever-evolving digital landscape and stay ahead of the
                  competition.
                </p>
                <Button
                  className="rounded-full px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105 btn-glow"
                  asChild
                >
                  <Link href="/services">
                    Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <ParallaxSection speed={0.2}>
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image src="/images/about/2.png" alt="Our Team" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="relative w-24 h-24">
                    <Image
                      src="/images/logos/upscaletek-icon-gradient.png"
                      alt="UpscaleTek"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Partner Companies Section */}
      <section className="w-full py-16 bg-black">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-white">Trusted By</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We're proud to work with leading companies across various industries
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <CompanyLogos />
          </ScrollReveal>
        </div>
      </section>

      {/* AI and Web Services Section */}
      <section className="w-full py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal animation="left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white">AI and Web Services</h2>
                <p className="text-xl text-white/70 mb-8">
                  We combine artificial intelligence and web technologies to create innovative solutions that drive
                  business growth and digital transformation.
                </p>
                <Button
                  className="rounded-full px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105 btn-glow"
                  asChild
                >
                  <Link href="/services">
                    View All Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </ScrollReveal>
            </div>

            <ParallaxSection speed={0.2}>
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image src="/images/about/ai.png" alt="AI and Web Services" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-6 right-6">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/images/logos/upscaletek-icon-gradient.png"
                      alt="UpscaleTek"
                      fill
                      className="object-contain opacity-80"
                    />
                  </div>
                </div>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="container px-4 md:px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white">How We Work</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our proven process ensures successful project delivery and exceptional results
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <div className="glass p-8 rounded-lg hover:border-primary/30 transition-all duration-300 transform hover:scale-105 group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Discovery</h3>
                <p className="text-white/70">
                  We start by understanding your business goals, target audience, and project requirements.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass p-8 rounded-lg hover:border-primary/30 transition-all duration-300 transform hover:scale-105 group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Planning</h3>
                <p className="text-white/70">
                  We create a detailed project plan, including timelines, milestones, and resource allocation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="glass p-8 rounded-lg hover:border-primary/30 transition-all duration-300 transform hover:scale-105 group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Development</h3>
                <p className="text-white/70">
                  Our team of experts develops your solution using the latest technologies and best practices.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="glass p-8 rounded-lg hover:border-primary/30 transition-all duration-300 transform hover:scale-105 group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <span className="text-primary font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Delivery & Support</h3>
                <p className="text-white/70">
                  We deliver your solution and provide ongoing support to ensure its success.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="w-full py-32 bg-black relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-primary/10 to-transparent"></div>
        <div className="container px-4 md:px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white">Our Portfolio</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Explore our latest projects and see how we've helped businesses achieve their digital goals
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <PortfolioCarousel />
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="rounded-full px-8 border-white/20 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/portfolio">
                  View All Projects <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5"></div>
        <div className="container px-4 md:px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-white">What Our Clients Say</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <TestimonialSlider />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 bg-gradient-to-r from-primary to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-repeat opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <ScrollReveal animation="left">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                  Ready to Transform Your Digital Presence?
                </h2>
                <p className="text-xl opacity-90 mb-6">
                  Let's collaborate to bring your vision to life with pioneering technology and innovative solutions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="right">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 btn-glow"
                asChild
              >
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
