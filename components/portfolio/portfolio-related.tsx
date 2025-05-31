import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Sample data - in a real app, this would come from an API or database
const portfolioItems = [
  {
    id: 1,
    title: "Financial Services Client Portal",
    excerpt:
      "Custom client portal development for a financial services firm, providing secure document sharing and real-time portfolio tracking.",
    image: "/images/portfolio/financial-portal.png",
    category: "web-development",
    categoryName: "Web Development",
    industry: "financial-services",
    industryName: "Financial Services",
    slug: "financial-services-client-portal",
  },
  {
    id: 2,
    title: "Healthcare Provider Security Implementation",
    excerpt:
      "Comprehensive cybersecurity solution for a healthcare provider, protecting sensitive patient data and ensuring full HIPAA compliance across their network.",
    image: "/images/portfolio/healthcare-security.png",
    category: "cybersecurity",
    categoryName: "Cybersecurity",
    industry: "healthcare",
    industryName: "Healthcare",
    slug: "healthcare-hipaa-security-implementation",
  },
  {
    id: 3,
    title: "Retail Chain Mobile App",
    excerpt:
      "End-to-end mobile application development for a retail chain with 15 locations, integrating inventory management, customer loyalty programs, and mobile checkout.",
    image: "/images/portfolio/retail-mobile-app.png",
    category: "mobile-app",
    categoryName: "Mobile App",
    industry: "retail",
    industryName: "Retail",
    slug: "retail-mobile-app",
  },
  {
    id: 4,
    title: "Manufacturing ERP Cloud Migration",
    excerpt:
      "Strategic migration of legacy ERP systems to cloud infrastructure for a manufacturing company, improving operational efficiency and enabling remote workforce capabilities.",
    image: "/images/portfolio/manufacturing-erp.png",
    category: "cloud-migration",
    categoryName: "Cloud Migration",
    industry: "manufacturing",
    industryName: "Manufacturing",
    slug: "manufacturing-erp-cloud-migration",
  },
  {
    id: 5,
    title: "University Campus-Wide Security Framework",
    excerpt:
      "Implementation of a comprehensive security framework for a university, protecting sensitive research data and student information across multiple campuses.",
    image: "/images/portfolio/university-security.png",
    category: "cybersecurity",
    categoryName: "Cybersecurity",
    industry: "education",
    industryName: "Education",
    slug: "university-security-framework",
  },
  {
    id: 6,
    title: "SaaS Startup Custom CRM Development",
    excerpt:
      "Development of a tailored CRM solution for a rapidly growing SaaS startup, integrating sales, marketing, and customer support workflows.",
    image: "/images/portfolio/saas-crm.png",
    category: "custom-software",
    categoryName: "Custom Software",
    industry: "technology",
    industryName: "Technology",
    slug: "saas-startup-crm-development",
  },
  {
    id: 7,
    title: "Municipal Government Digital Transformation",
    excerpt:
      "Comprehensive IT infrastructure modernization for a municipal government, improving citizen services, internal operations, and cybersecurity posture.",
    image: "/images/portfolio/government-digital.png",
    category: "it-consulting",
    categoryName: "IT Consulting",
    industry: "government",
    industryName: "Government",
    slug: "municipal-government-digital-transformation",
  },
  {
    id: 8,
    title: "Credit Union Disaster Recovery Implementation",
    excerpt:
      "Design and implementation of a robust disaster recovery solution for a credit union, ensuring business continuity and data protection.",
    image: "/images/portfolio/credit-union-dr.png",
    category: "cybersecurity",
    categoryName: "Cybersecurity",
    industry: "financial-services",
    industryName: "Financial Services",
    slug: "credit-union-disaster-recovery",
  },
  {
    id: 9,
    title: "Healthcare Provider Patient Portal",
    excerpt:
      "Development of a secure patient portal for a healthcare provider, allowing patients to access medical records, schedule appointments, and communicate with providers.",
    image: "/images/portfolio/healthcare-portal.png",
    category: "web-development",
    categoryName: "Web Development",
    industry: "healthcare",
    industryName: "Healthcare",
    slug: "healthcare-patient-portal",
  },
  {
    id: 10,
    title: "Hotel Chain Wi-Fi Infrastructure Upgrade",
    excerpt:
      "Complete overhaul of wireless infrastructure for a hotel chain, providing high-speed, secure connectivity across 12 luxury properties.",
    image: "/images/portfolio/hotel-wifi.png",
    category: "network-infrastructure",
    categoryName: "Network Infrastructure",
    industry: "hospitality",
    industryName: "Hospitality",
    slug: "hotel-chain-wifi-upgrade",
  },
  {
    id: 11,
    title: "E-Commerce Platform Security Enhancement",
    excerpt:
      "Comprehensive security audit and enhancement for an e-commerce platform, protecting customer data and ensuring PCI DSS compliance.",
    image: "/images/portfolio/ecommerce-security.png",
    category: "cybersecurity",
    categoryName: "Cybersecurity",
    industry: "retail",
    industryName: "Retail",
    slug: "ecommerce-security-enhancement",
  },
  {
    id: 12,
    title: "Logistics Company Fleet Management System",
    excerpt:
      "Custom development of an integrated fleet management system for a logistics company, optimizing routes, maintenance schedules, and driver management.",
    image: "/images/portfolio/logistics-fleet.png",
    category: "custom-software",
    categoryName: "Custom Software",
    industry: "transportation",
    industryName: "Transportation",
    slug: "logistics-fleet-management-system",
  },
]

export function PortfolioRelated({ currentId, relatedIds = [] }: { currentId: number; relatedIds: number[] }) {
  // Get related projects based on IDs
  const relatedProjects = portfolioItems.filter((item) => relatedIds.includes(item.id) && item.id !== currentId)

  // If we don't have enough related projects, add some based on the same category or industry
  if (relatedProjects.length < 3) {
    const currentProject = portfolioItems.find((item) => item.id === currentId)
    if (currentProject) {
      const sameCategory = portfolioItems.filter(
        (item) =>
          item.id !== currentId &&
          item.category === currentProject.category &&
          !relatedProjects.some((related) => related.id === item.id),
      )

      const sameIndustry = portfolioItems.filter(
        (item) =>
          item.id !== currentId &&
          item.industry === currentProject.industry &&
          !relatedProjects.some((related) => related.id === item.id) &&
          !sameCategory.some((cat) => cat.id === item.id),
      )

      // Add projects until we have 3 or run out of options
      while (relatedProjects.length < 3 && (sameCategory.length > 0 || sameIndustry.length > 0)) {
        if (sameCategory.length > 0) {
          relatedProjects.push(sameCategory.shift()!)
        } else if (sameIndustry.length > 0) {
          relatedProjects.push(sameIndustry.shift()!)
        }
      }
    }
  }

  // Limit to 3 projects
  const displayProjects = relatedProjects.slice(0, 3)

  if (displayProjects.length === 0) {
    return null
  }

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight mb-8">Related Projects</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {displayProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={project.image || `/placeholder.svg?height=400&width=600&query=${project.categoryName}`}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground line-clamp-2 mb-4">{project.excerpt}</p>
              <Link
                href={`/portfolio/${project.slug}`}
                className="text-sm font-medium text-brand-500 hover:underline inline-flex items-center"
                style={{ color: "var(--brand-500)" }}
              >
                View details <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
