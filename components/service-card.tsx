import Link from "next/link"
import {
  Globe,
  Smartphone,
  Brain,
  Shield,
  Code,
  ArrowRight,
  TrendingUp,
  Palette,
  Cloud,
  BarChart,
  Wifi,
  LinkIcon,
  Glasses,
  ShoppingCart,
  GitBranch,
  CheckCircle,
  Briefcase,
  PenToolIcon as Tool,
  Database,
  MessageSquare,
  type LucideIcon,
} from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
  isViewAll?: boolean
}

export default function ServiceCard({ title, description, icon, href, isViewAll = false }: ServiceCardProps) {
  const IconMap: Record<string, LucideIcon> = {
    Globe,
    Smartphone,
    Brain,
    Shield,
    Code,
    ArrowRight,
    TrendingUp,
    Palette,
    Cloud,
    BarChart,
    Wifi,
    Link: LinkIcon,
    Glasses,
    ShoppingCart,
    GitBranch,
    CheckCircle,
    Briefcase,
    Tool,
    Database,
    MessageSquare,
  }

  const Icon = IconMap[icon] || Globe

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105 group",
        isViewAll
          ? "bg-primary text-primary-foreground"
          : "bg-white/5 backdrop-blur-sm border-white/10 hover:border-primary/30",
      )}
    >
      <CardContent className="p-6">
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110",
            isViewAll ? "bg-primary-foreground/20" : "bg-primary/10",
          )}
        >
          <Icon className={cn("h-6 w-6", isViewAll ? "text-primary-foreground" : "text-primary")} />
        </div>
        <h3 className={cn("text-xl font-semibold mb-3", isViewAll ? "text-primary-foreground" : "text-white")}>
          {title}
        </h3>
        <p className={cn("text-muted-foreground", isViewAll ? "text-primary-foreground/80" : "text-white/70")}>
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          variant={isViewAll ? "secondary" : "ghost"}
          className={cn(
            "px-0 hover:px-2 transition-all group/btn",
            isViewAll
              ? "bg-primary-foreground/20 hover:bg-primary-foreground/30"
              : "hover:bg-transparent text-primary hover:text-primary/80",
          )}
          asChild
        >
          <Link href={href}>
            Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
