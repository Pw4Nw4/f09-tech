import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export const metadata: Metadata = {
  title: "Portfolio | F09 Tech",
  description: "Explore our technical projects and implementations",
}

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: "university-chatbot",
      title: "AI Chatbot for University Help Desk",
      industry: "Higher Education",
      description: "Developed a 24/7 virtual assistant for student support",
      technologies: ["React", "Flask", "PostgreSQL", "AI/NLP API"],
      results: [
        "1,200+ inquiries handled monthly",
        "Reduced help desk response time by 70%",
        "Fully integrated with internal ticketing and academic systems",
      ],
    },
    {
      id: "healthcare-cloud",
      title: "Cloud Migration for Healthcare Provider",
      industry: "Healthcare & Wellness",
      description: "Migrated on-premise servers to secure cloud infrastructure with compliance protocols",
      technologies: ["AWS", "Azure", "VPN", "MFA", "Automated Backups"],
      results: [
        "Achieved full compliance with industry data standards",
        "30% reduction in infrastructure costs",
        "Zero downtime during and after migration",
      ],
    },
    {
      id: "bi-dashboard",
      title: "BI Dashboard for Multi-Location Business",
      industry: "Food & Beverage",
      description: "Created a real-time dashboard for sales, inventory, and staffing across multiple locations",
      technologies: ["Power BI", "SQL", "ETL", "Data Warehouse"],
      results: [
        "Full visibility into KPIs",
        "Identified $12K/month in waste and inefficiencies",
        "Automated scheduling and performance reporting",
      ],
    },
    {
      id: "cloud-infrastructure",
      title: "Enterprise Cloud Infrastructure Migration",
      industry: "Financial Services",
      description:
        "Migrated a financial services firm from legacy on-premises infrastructure to a secure, scalable cloud environment.",
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
      technologies: ["VMware", "Veeam", "Azure Site Recovery", "Immutable Backups"],
      results: [
        "Recovery time reduced from days to hours",
        "Successfully passed multiple disaster simulation tests",
        "Achieved compliance with healthcare data regulations",
      ],
    },
  ]

  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Portfolio</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Explore our technical projects and implementations across various industries
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <Card key={item.id} className="flex flex-col h-full">
            <div className="relative h-48 w-full">
              <IconPlaceholder
                title={item.title}
                category={item.industry}
                variant="portfolio"
                iconType={item.id}
                className="rounded-t-lg"
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

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to transform your technology?</h2>
        <p className="mx-auto max-w-[600px] text-gray-500 mb-6">
          Let's discuss how we can help your organization achieve its technology goals with custom solutions tailored to
          your needs.
        </p>
        <Button asChild size="lg" className="bg-gradient-primary text-white">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  )
}
