import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Web Development Services | UpscaleTek",
  description:
    "Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.",
}

export default function WebDevelopmentPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-4">
              <div className="text-primary font-medium">Web Development</div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Crafting Digital Experiences That Drive Results
              </h1>
              <p className="text-xl text-muted-foreground">
                We build custom websites and web applications that are not only visually stunning but also deliver
                exceptional user experiences and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="rounded-full px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/images/about/webdev.png" alt="Web Development" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Web Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of web development services to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Website Development</h3>
              <p className="text-muted-foreground">
                We create custom websites tailored to your specific business needs, ensuring a unique online presence
                that stands out from the competition.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Responsive Web Design</h3>
              <p className="text-muted-foreground">
                We ensure your website looks and functions perfectly on all devices, from desktops to smartphones,
                providing a seamless user experience.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">E-Commerce Development</h3>
              <p className="text-muted-foreground">
                We build secure and scalable e-commerce websites that provide a seamless shopping experience and drive
                sales.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Application Development</h3>
              <p className="text-muted-foreground">
                We develop custom web applications that streamline your business processes and enhance productivity.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Maintenance & Support</h3>
              <p className="text-muted-foreground">
                We provide ongoing maintenance and support to ensure your website remains secure, up-to-date, and
                performs optimally.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
              <p className="text-muted-foreground">
                We optimize your website for speed and performance, ensuring fast loading times and a smooth user
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage the latest technologies to build modern, scalable, and high-performance web solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React",
              "Next.js",
              "Vue.js",
              "Angular",
              "Node.js",
              "PHP",
              "Laravel",
              "WordPress",
              "Shopify",
              "MongoDB",
              "MySQL",
              "AWS",
            ].map((tech) => (
              <div key={tech} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 shadow-md">
                  <span className="text-primary font-bold">{tech.substring(0, 2)}</span>
                </div>
                <h3 className="font-medium">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure the success of your web development project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/logos/upscaletek-primary-contrast.png"
                alt="Web Development Process"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Discovery & Planning</h3>
                  <p className="text-muted-foreground">
                    We start by understanding your business goals, target audience, and project requirements to create a
                    detailed project plan.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Design & Prototyping</h3>
                  <p className="text-muted-foreground">
                    We create wireframes and design mockups to visualize the user interface and experience before
                    development begins.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>
                  <p className="text-muted-foreground">
                    Our team of experts develops your website using the latest technologies and best practices, followed
                    by rigorous testing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Deployment & Support</h3>
                  <p className="text-muted-foreground">
                    We deploy your website and provide ongoing support and maintenance to ensure its success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Ready to Start Your Web Project?</h2>
              <p className="text-xl opacity-90 mb-6">
                Let's collaborate to bring your vision to life with pioneering web development solutions.
              </p>
            </div>
            <Button size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
