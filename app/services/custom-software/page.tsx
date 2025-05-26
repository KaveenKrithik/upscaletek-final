import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Custom Software Development | UpscaleTek",
  description: "Bespoke software solutions designed to address your unique business challenges and requirements.",
}

export default function CustomSoftwarePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-4">
              <div className="text-primary font-medium">Custom Software Development</div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Tailored Software Solutions for Your Unique Business Needs
              </h1>
              <p className="text-xl text-muted-foreground">
                We build bespoke software solutions designed to address your specific business challenges, streamline
                operations, and drive growth.
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
              <Image
                src="/images/about/custom.png"
                alt="Custom Software Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Our Custom Software Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of custom software development services to meet your business needs
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
              <h3 className="text-xl font-semibold mb-3">Enterprise Software Development</h3>
              <p className="text-muted-foreground">
                We develop enterprise-grade software solutions that streamline business processes, improve efficiency,
                and drive growth.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">SaaS Application Development</h3>
              <p className="text-muted-foreground">
                We build scalable and secure Software-as-a-Service (SaaS) applications that deliver value to your
                customers and generate recurring revenue.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Legacy System Modernization</h3>
              <p className="text-muted-foreground">
                We help modernize legacy systems to improve performance, security, and user experience while preserving
                valuable business logic.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom CRM & ERP Solutions</h3>
              <p className="text-muted-foreground">
                We develop tailored Customer Relationship Management (CRM) and Enterprise Resource Planning (ERP)
                solutions to meet your specific business requirements.
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
              <h3 className="text-xl font-semibold mb-3">Business Process Automation</h3>
              <p className="text-muted-foreground">
                We create custom automation solutions that streamline workflows, reduce manual tasks, and improve
                operational efficiency.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Database Development & Integration</h3>
              <p className="text-muted-foreground">
                We design and develop custom database solutions and integrate them with your existing systems to ensure
                seamless data flow.
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
              We leverage the latest technologies and frameworks to build modern, scalable, and high-performance
              software solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Java",
              "C#",
              "Python",
              "Node.js",
              "React",
              "Angular",
              "Vue.js",
              "Spring",
              ".NET",
              "Django",
              "SQL",
              "NoSQL",
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Our Custom Software Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure the success of your custom software development project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/logos/upscaletek-primary-contrast.png"
                alt="Software Development Process"
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
                  <h3 className="text-xl font-semibold mb-2">Requirements Analysis</h3>
                  <p className="text-muted-foreground">
                    We work closely with you to understand your business needs, goals, and requirements to create a
                    detailed project specification.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Design & Architecture</h3>
                  <p className="text-muted-foreground">
                    We create a detailed design and architecture plan that outlines the structure, components, and
                    interactions of your software solution.
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
                    Our team of experts develops your software solution using the latest technologies and best
                    practices, followed by rigorous testing to ensure quality.
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
                    We deploy your software solution and provide ongoing support and maintenance to ensure its continued
                    success and evolution.
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Ready to Start Your Custom Software Project?
              </h2>
              <p className="text-xl opacity-90 mb-6">
                Let's collaborate to bring your software vision to life with pioneering technology and innovative
                solutions.
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
