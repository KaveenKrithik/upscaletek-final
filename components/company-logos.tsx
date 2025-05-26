"use client"

import Image from "next/image"

const companyLogos = [
  { name: "Oracle", logo: "/oracle.png?height=60&width=120&text=Oracle" },
  { name: "Amazon", logo: "/amazon.webp?height=60&width=120&text=Amazon" },
  { name: "Google Cloud", logo: "/cloud.png?height=60&width=120&text=Google" },
  { name: "Microsoft", logo: "/microsoft.jpg?height=60&width=120&text=Microsoft" },
  { name: "Jira", logo: "/jira.jpg?height=60&width=120&text=Jira" },
  { name: "Salesforce", logo: "/sales.png?height=60&width=120&text=Salesforce" },
]

export default function CompanyLogos() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated scrolling logos */}
      <div className="flex animate-scroll space-x-12">
        {[...companyLogos, ...companyLogos].map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 transform hover:scale-105 min-w-[200px]"
          >
            <Image
              src={company.logo || "/placeholder.svg"}
              alt={company.name}
              width={120}
              height={60}
              className="object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
    </div>
  )
}
