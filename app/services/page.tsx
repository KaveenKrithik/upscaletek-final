import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"
import ServiceCard from "@/components/service-card"

export const metadata: Metadata = {
  title: "Services | UpscaleTek",
  description: "Explore our comprehensive range of digital services designed to transform your business.",
}

const featuredServices = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.",
    icon: "Globe",
    href: "/services/web-development",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications designed to engage users and drive business growth.",
    icon: "Smartphone",
    href: "/services/mobile-development",
  },
  {
    id: "ai-development",
    title: "AI Development",
    description:
      "Intelligent solutions powered by artificial intelligence to automate processes and gain valuable insights.",
    icon: "Brain",
    href: "/services/ai-development",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description: "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
    icon: "Shield",
    href: "/services/cyber-security",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description: "Bespoke software solutions designed to address your unique business challenges and requirements.",
    icon: "Code",
    href: "/services/custom-software",
  },
  {
    id: "view-all",
    title: "View All Services",
    description: "Explore our full range of digital services designed to help your business thrive in the digital age.",
    icon: "ArrowRight",
    href: "#all-services",
    isViewAll: true,
  },
]

const allServices = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.",
    icon: "Globe",
    href: "/services/web-development",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications designed to engage users and drive business growth.",
    icon: "Smartphone",
    href: "/services/mobile-development",
  },
  {
    id: "ai-development",
    title: "AI Development",
    description:
      "Intelligent solutions powered by artificial intelligence to automate processes and gain valuable insights.",
    icon: "Brain",
    href: "/services/ai-development",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description: "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
    icon: "Shield",
    href: "/services/cyber-security",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description: "Bespoke software solutions designed to address your unique business challenges and requirements.",
    icon: "Code",
    href: "/services/custom-software",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to boost your online presence and drive business growth.",
    icon: "TrendingUp",
    href: "/services/digital-marketing",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance user experience and drive engagement.",
    icon: "Palette",
    href: "/services/ui-ux-design",
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Scalable cloud solutions to optimize your infrastructure and reduce operational costs.",
    icon: "Cloud",
    href: "/services/cloud-services",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Advanced data analytics solutions to extract valuable insights and drive informed decision-making.",
    icon: "BarChart",
    href: "/services/data-analytics",
  },
  {
    id: "iot-development",
    title: "IoT Development",
    description: "Connected device solutions that bridge the physical and digital worlds for enhanced efficiency.",
    icon: "Wifi",
    href: "/services/iot-development",
  },
  {
    id: "blockchain",
    title: "Blockchain Development",
    description: "Secure and transparent blockchain solutions for various industries and use cases.",
    icon: "Link",
    href: "/services/blockchain",
  },
  {
    id: "ar-vr",
    title: "AR/VR Development",
    description: "Immersive augmented and virtual reality experiences for various applications.",
    icon: "Glasses",
    href: "/services/ar-vr",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    description: "Comprehensive e-commerce solutions to help you sell products and services online.",
    icon: "ShoppingCart",
    href: "/services/ecommerce",
  },
  {
    id: "devops",
    title: "DevOps Services",
    description: "Streamlined development and operations processes for faster and more reliable software delivery.",
    icon: "GitBranch",
    href: "/services/devops",
  },
 
  {
    id: "it-consulting",
    title: "IT Consulting",
    description: "Expert IT consulting services to help you navigate the complex technology landscape.",
    icon: "Briefcase",
    href: "/services/it-consulting",
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    description: "Ongoing maintenance and support services to ensure the optimal performance of your digital assets.",
    icon: "Tool",
    href: "/services/maintenance-support",
  },
  {
    id: "crm-erp",
    title: "CRM & ERP Solutions",
    description: "Custom CRM and ERP solutions to streamline your business processes and improve efficiency.",
    icon: "Database",
    href: "/services/crm-erp",
  },
  {
    id: "chatbot-development",
    title: "Chatbot Development",
    description: "Intelligent chatbot solutions to enhance customer service and automate routine tasks.",
    icon: "MessageSquare",
    href: "/services/chatbot-development",
  },
]

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full py-32 bg-black">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">Our Services</h1>
              <p className="text-xl text-white/70 max-w-3xl">
                We offer a comprehensive range of digital services designed to help businesses thrive in the digital
                age.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="w-full py-24 bg-black">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-white">Featured Services</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Explore our core services designed to transform your business and drive growth
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 100}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={service.href}
                  isViewAll={service.isViewAll}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section id="all-services" className="w-full py-24 bg-black">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-white">All Services</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our comprehensive range of services to meet all your digital needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ScrollReveal key={service.id} delay={(index % 6) * 100}>
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{service.description}</p>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" asChild>
                    <Link href={service.href}>
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
