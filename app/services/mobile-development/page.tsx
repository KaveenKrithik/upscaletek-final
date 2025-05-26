import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Mobile App Development Services | UpscaleTek",
  description: "Native and cross-platform mobile applications designed to engage users and drive business growth.",
}

export default function MobileDevelopmentPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-4">
              <div className="text-primary font-medium">Mobile App Development</div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Transforming Ideas into Powerful Mobile Experiences
              </h1>
              <p className="text-xl text-muted-foreground">
                We build native and cross-platform mobile applications that engage users, drive business growth, and
                deliver exceptional user experiences across all devices.
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
                src="/images/about/mob.png"
                alt="Mobile App Development"
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
              Our Mobile App Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of mobile app development services to meet your business needs
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Native iOS Development</h3>
              <p className="text-muted-foreground">
                We create high-performance iOS applications using Swift and Objective-C that leverage the full potential
                of Apple's ecosystem.
              </p>
            </div>

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
              <h3 className="text-xl font-semibold mb-3">Native Android Development</h3>
              <p className="text-muted-foreground">
                We build robust Android applications using Kotlin and Java that deliver exceptional performance across
                the diverse Android ecosystem.
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
              <h3 className="text-xl font-semibold mb-3">Cross-Platform Development</h3>
              <p className="text-muted-foreground">
                We develop cross-platform applications using React Native and Flutter that provide native-like
                experiences while reducing development time and costs.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX Design for Mobile</h3>
              <p className="text-muted-foreground">
                We create intuitive and engaging user interfaces that follow platform-specific design guidelines and
                provide exceptional user experiences.
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
              <h3 className="text-xl font-semibold mb-3">Mobile App Security</h3>
              <p className="text-muted-foreground">
                We implement robust security measures to protect user data and ensure compliance with industry standards
                and regulations.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">App Maintenance & Updates</h3>
              <p className="text-muted-foreground">
                We provide ongoing maintenance and support to ensure your mobile application remains up-to-date, secure,
                and performs optimally.
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
              We leverage the latest mobile technologies to build modern, scalable, and high-performance applications
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Swift",
              "Kotlin",
              "React Native",
              "Flutter",
              "Firebase",
              "GraphQL",
              "Redux",
              "MobX",
              "AWS Amplify",
              "Realm",
              "SQLite",
              "Push Notifications",
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Mobile App Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure the success of your mobile app development project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/logos/upscaletek-primary-contrast.png"
                alt="Mobile App Development Process"
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
                  <h3 className="text-xl font-semibold mb-2">Discovery & Strategy</h3>
                  <p className="text-muted-foreground">
                    We start by understanding your business goals, target audience, and project requirements to create a
                    comprehensive mobile app strategy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                  <p className="text-muted-foreground">
                    We create wireframes, prototypes, and design mockups to visualize the user interface and experience
                    before development begins.
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
                    Our team of experts develops your mobile application using the latest technologies and best
                    practices, followed by rigorous testing.
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
                    We deploy your mobile application to the app stores and provide ongoing support and maintenance to
                    ensure its success.
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
                Ready to Start Your Mobile App Project?
              </h2>
              <p className="text-xl opacity-90 mb-6">
                Let's collaborate to bring your mobile app vision to life with pioneering technology and innovative
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
