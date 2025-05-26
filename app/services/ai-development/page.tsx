import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "AI Development Services | UpscaleTek",
  description:
    "Intelligent solutions powered by artificial intelligence to automate processes and gain valuable insights.",
}

export default function AIDevelopmentPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-4">
              <div className="text-primary font-medium">AI Development</div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Harnessing the Power of Artificial Intelligence
              </h1>
              <p className="text-xl text-muted-foreground">
                We build intelligent solutions powered by artificial intelligence to automate processes, gain valuable
                insights, and drive innovation for your business.
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
              <Image src="/images/about/ai.png" alt="AI Development" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our AI Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of AI development services to meet your business needs
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Machine Learning Solutions</h3>
              <p className="text-muted-foreground">
                We develop custom machine learning models that learn from data to make predictions, identify patterns,
                and automate decision-making processes.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Language Processing</h3>
              <p className="text-muted-foreground">
                We build NLP solutions that enable computers to understand, interpret, and generate human language for
                applications like chatbots and sentiment analysis.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Computer Vision</h3>
              <p className="text-muted-foreground">
                We create computer vision systems that can analyze, understand, and interpret visual information from
                the world, enabling applications like object detection and facial recognition.
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
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="text-muted-foreground">
                We develop predictive analytics solutions that use historical data to forecast future trends, behaviors,
                and outcomes, enabling proactive decision-making.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Recommendation Systems</h3>
              <p className="text-muted-foreground">
                We build recommendation engines that analyze user behavior and preferences to suggest relevant products,
                content, or services, enhancing user engagement and satisfaction.
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
              <h3 className="text-xl font-semibold mb-3">AI Integration & Deployment</h3>
              <p className="text-muted-foreground">
                We help integrate AI solutions into your existing systems and workflows, ensuring seamless deployment
                and adoption across your organization.
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
              We leverage the latest AI technologies and frameworks to build intelligent, scalable, and high-performance
              solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "Keras",
              "NLTK",
              "OpenCV",
              "Pandas",
              "NumPy",
              "Hugging Face",
              "Spark MLlib",
              "Azure ML",
              "AWS SageMaker",
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our AI Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure the success of your AI development project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/images/logos/upscaletek-primary-contrast.png" alt="AI Development Process" fill className="object-cover" />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Problem Definition & Data Collection</h3>
                  <p className="text-muted-foreground">
                    We start by clearly defining the problem and collecting relevant data to train and validate our AI
                    models.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Preprocessing & Model Development</h3>
                  <p className="text-muted-foreground">
                    We clean and prepare the data, then develop and train AI models using appropriate algorithms and
                    techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Model Evaluation & Refinement</h3>
                  <p className="text-muted-foreground">
                    We rigorously test and evaluate the models, refining them to improve accuracy and performance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Deployment & Monitoring</h3>
                  <p className="text-muted-foreground">
                    We deploy the AI solution to production and implement continuous monitoring and maintenance to
                    ensure optimal performance.
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
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl opacity-90 mb-6">
                Let's collaborate to bring your AI vision to life with pioneering technology and innovative solutions.
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
