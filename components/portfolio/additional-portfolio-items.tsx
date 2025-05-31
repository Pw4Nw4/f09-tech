import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface PortfolioItem {
  id: string
  title: string
  industry: string
  description: string
  image: string
  technologies: string[]
  results: string[]
}

export function AdditionalPortfolioItems() {
  const portfolioItems: PortfolioItem[] = [
    {
      id: "cloud-infrastructure",
      title: "Enterprise Cloud Infrastructure Migration",
      industry: "Financial Services",
      description:
        "Migrated a financial services firm from legacy on-premises infrastructure to a secure, scalable cloud environment.",
      image: "/images/portfolio/cloud-infrastructure.png",
      technologies: ["AWS", "Azure", "Terraform", "Kubernetes", "Docker"],
      results: [
        "40% reduction in operational costs",
        "99.99% uptime achieved",
        "Improved disaster recovery capabilities",
      ],
    },
    {
      id: "network-security",
      title: "Advanced Network Security Implementation",
      industry: "Government",
      description: "Designed and implemented a comprehensive network security solution for a government agency.",
      image: "/images/portfolio/network-security.png",
      technologies: ["Cisco", "Palo Alto", "Splunk", "Zero Trust Architecture"],
      results: [
        "Zero security breaches since implementation",
        "Achieved compliance with federal security standards",
        "Real-time threat monitoring and response",
      ],
    },
    {
      id: "data-analytics",
      title: "Predictive Analytics Platform",
      industry: "Retail",
      description: "Built a predictive analytics platform that helps retailers forecast demand and optimize inventory.",
      image: "/images/portfolio/data-analytics.png",
      technologies: ["Python", "TensorFlow", "Power BI", "SQL", "Azure ML"],
      results: [
        "15% reduction in inventory costs",
        "8% increase in sales through targeted recommendations",
        "Automated reporting saving 20+ hours per week",
      ],
    },
    {
      id: "custom-software",
      title: "Custom CRM Development",
      industry: "Professional Services",
      description:
        "Developed a tailored CRM solution for a professional services firm with unique workflow requirements.",
      image: "/images/portfolio/custom-software.png",
      technologies: ["React", "Node.js", "MongoDB", "GraphQL"],
      results: [
        "35% increase in client retention",
        "Streamlined client onboarding process",
        "Integrated billing and project management",
      ],
    },
    {
      id: "mobile-app",
      title: "Field Service Mobile Application",
      industry: "Utilities",
      description:
        "Created a mobile application for field technicians to manage service calls and access technical documentation.",
      image: "/images/portfolio/mobile-app.png",
      technologies: ["React Native", "Firebase", "Offline-first", "GPS Integration"],
      results: [
        "Reduced service call time by 25%",
        "Eliminated paper-based processes",
        "Real-time status updates for customers",
      ],
    },
    {
      id: "disaster-recovery",
      title: "Comprehensive Disaster Recovery Solution",
      industry: "Healthcare",
      description: "Implemented a robust disaster recovery solution for a healthcare provider with critical systems.",
      image: "/images/portfolio/disaster-recovery.png",
      technologies: ["VMware", "Veeam", "Azure Site Recovery", "Immutable Backups"],
      results: [
        "Recovery time reduced from days to hours",
        "Successfully passed multiple disaster simulation tests",
        "Achieved compliance with healthcare data regulations",
      ],
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {portfolioItems.map((item) => (
        <Card key={item.id} className="flex flex-col h-full">
          <div className="relative h-48 w-full">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <CardHeader>
            <Badge className="w-fit mb-2">{item.industry}</Badge>
            <CardTitle className="text-xl">{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2 mb-4">
              {item.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Key Results:</h4>
              <ul className="space-y-1">
                {item.results.map((result, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href={`/portfolio/${item.id}`}>View Project Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
