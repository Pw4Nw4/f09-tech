"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFilter } from "@/contexts/filter-context"

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
    completionDate: "2024-03-15",
    slug: "financial-services-client-portal",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    outcomes: [
      "Secure document sharing with end-to-end encryption",
      "Real-time portfolio tracking and visualization",
      "Reduced client service calls by 40%",
      "Mobile-responsive design for access anywhere",
      "Seamless integration with existing CRM system",
    ],
    clientName: "Financial Services Firm",
    clientLocation: "",
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
    completionDate: "2024-02-20",
    slug: "healthcare-hipaa-security-implementation",
    technologies: ["CrowdStrike", "Okta", "Cisco ISE", "Tenable"],
    outcomes: [
      "100% HIPAA compliance achievement",
      "75% reduction in security incidents",
      "Implementation of zero-trust architecture",
      "Streamlined access management for 2,000+ staff",
      "Comprehensive audit trail for regulatory requirements",
    ],
    clientName: "Healthcare Provider",
    clientLocation: "",
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
    completionDate: "2024-01-10",
    slug: "retail-mobile-app",
    technologies: ["React Native", "Firebase", "Node.js", "Stripe", "Redux"],
    outcomes: [
      "30% increase in repeat customer visits",
      "Real-time inventory visibility across all locations",
      "Seamless integration with e-commerce platform",
      "15% increase in customer loyalty program participation",
      "Mobile checkout reducing wait times by 40%",
    ],
    clientName: "Retail Chain",
    clientLocation: "",
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
    completionDate: "2023-12-05",
    slug: "manufacturing-erp-cloud-migration",
    technologies: ["AWS", "SAP S/4HANA Cloud", "Docker", "Kubernetes"],
    outcomes: [
      "40% reduction in IT infrastructure costs",
      "99.9% system availability",
      "Enabled remote access for 200+ employees",
      "Reduced ERP processing time by 65%",
      "Seamless integration with IoT factory systems",
    ],
    clientName: "Manufacturing Company",
    clientLocation: "",
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
    completionDate: "2023-11-15",
    slug: "university-security-framework",
    technologies: ["Palo Alto Networks", "Cloudflare", "Microsoft Defender for Endpoint", "KnowBe4"],
    outcomes: [
      "90% reduction in malware incidents",
      "Secure access for 25,000+ students and faculty",
      "Protection for sensitive research data across 5 campuses",
      "Comprehensive security awareness program with 95% participation",
      "Streamlined compliance with FERPA regulations",
    ],
    clientName: "University",
    clientLocation: "",
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
    completionDate: "2023-10-20",
    slug: "saas-startup-crm-development",
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "AWS"],
    outcomes: [
      "Unified platform for sales, marketing, and support teams",
      "Automated lead scoring increasing conversion by 35%",
      "Custom reporting reducing analysis time by 80%",
      "Integration with existing marketing automation tools",
      "Scalable architecture supporting 300% company growth",
    ],
    clientName: "SaaS Startup",
    clientLocation: "",
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
    completionDate: "2023-09-10",
    slug: "municipal-government-digital-transformation",
    technologies: ["Microsoft Azure Government", "ServiceNow", "Okta", "ArcGIS"],
    outcomes: [
      "Digitized 85% of citizen-facing services",
      "50% reduction in service request processing time",
      "Improved interdepartmental collaboration across 12 agencies",
      "Enhanced security meeting CJIS compliance requirements",
      "Implemented disaster recovery with 15-minute RTO",
    ],
    clientName: "Municipal Government",
    clientLocation: "",
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
    completionDate: "2023-08-15",
    slug: "credit-union-disaster-recovery",
    technologies: ["VMware Site Recovery", "Veeam", "Dell EMC", "Zerto"],
    outcomes: [
      "Reduced recovery time objective (RTO) from 24 hours to 1 hour",
      "Implemented 15-minute recovery point objective (RPO)",
      "Automated failover for critical banking systems",
      "Successful quarterly disaster recovery testing",
      "Full compliance with NCUA regulations",
    ],
    clientName: "Credit Union",
    clientLocation: "",
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
    completionDate: "2023-07-20",
    slug: "healthcare-patient-portal",
    technologies: ["React", "Node.js", "PostgreSQL", "Auth0", "FHIR API"],
    outcomes: [
      "Seamless access to medical records for 50,000+ patients",
      "70% reduction in appointment scheduling calls",
      "Secure messaging system between patients and providers",
      "Mobile-responsive design with 99.9% uptime",
      "Full HIPAA compliance with comprehensive audit trails",
    ],
    clientName: "Healthcare Provider",
    clientLocation: "",
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
    completionDate: "2023-06-15",
    slug: "hotel-chain-wifi-upgrade",
    technologies: ["Cisco Meraki", "Aruba Networks", "Ruckus Wireless", "SonicWall"],
    outcomes: [
      "99.99% Wi-Fi uptime across all properties",
      "Support for 1,000+ simultaneous connections per location",
      "Segmented guest and operational networks for enhanced security",
      "Centralized management system for all properties",
      "25% increase in guest satisfaction scores related to connectivity",
    ],
    clientName: "Hotel Chain",
    clientLocation: "",
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
    completionDate: "2023-05-10",
    slug: "ecommerce-security-enhancement",
    technologies: ["Cloudflare", "AWS WAF", "Akamai", "Imperva"],
    outcomes: [
      "Achieved PCI DSS Level 1 compliance",
      "Implemented advanced fraud detection reducing chargebacks by 60%",
      "Enhanced protection for 5 million+ customer records",
      "Reduced successful attack attempts by 95%",
      "Implemented secure payment processing for international transactions",
    ],
    clientName: "E-Commerce Company",
    clientLocation: "",
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
    completionDate: "2023-04-15",
    slug: "logistics-fleet-management-system",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Google Maps API", "IoT Sensors"],
    outcomes: [
      "Real-time tracking of 500+ vehicles",
      "15% reduction in fuel consumption through route optimization",
      "Predictive maintenance reducing vehicle downtime by 30%",
      "Driver performance monitoring improving safety metrics by 25%",
      "Integration with existing ERP and accounting systems",
    ],
    clientName: "Logistics Company",
    clientLocation: "",
  },
]

export function PortfolioGrid() {
  const { filters, searchQuery, isFiltering } = useFilter()
  const [filteredItems, setFilteredItems] = useState(portfolioItems)
  const [visibleCount, setVisibleCount] = useState(6)

  useEffect(() => {
    let result = [...portfolioItems]

    // Filter by category
    if (filters.category && filters.category !== "all") {
      result = result.filter((item) => item.category === filters.category)
    }

    // Filter by industry
    if (filters.industry && filters.industry !== "all") {
      result = result.filter((item) => item.industry === filters.industry)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.excerpt.toLowerCase().includes(query) ||
          item.categoryName.toLowerCase().includes(query) ||
          item.industryName.toLowerCase().includes(query),
      )
    }

    setFilteredItems(result)
    // Reset visible count when filters change
    setVisibleCount(6)
  }, [filters, searchQuery])

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredItems.length))
  }

  return (
    <div className="space-y-8">
      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No portfolio items found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your filters or search query to find what you're looking for.
          </p>
          {isFiltering && (
            <Button variant="outline" onClick={() => window.location.reload()}>
              Reset all filters
            </Button>
          )}
        </div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.slice(0, visibleCount).map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image || `/placeholder.svg?height=400&width=600&query=${item.categoryName}`}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-gradient-to-t from-black/80 to-transparent p-4">
                    <Badge className="bg-brand-500 text-white" style={{ backgroundColor: "var(--brand-500)" }}>
                      {item.categoryName}
                    </Badge>
                    <Badge variant="outline" className="bg-black/50 text-white">
                      {item.industryName}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Link href={`/portfolio/${item.slug}`} className="group">
                    <h3
                      className="mb-2 text-xl font-bold group-hover:text-brand-500"
                      style={{ color: "inherit", transition: "color 0.2s" }}
                    >
                      {item.title}
                    </h3>
                  </Link>
                  <p className="mb-4 line-clamp-2 text-muted-foreground">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {new Date(item.completionDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Building className="mr-1 h-3 w-3" />
                      {item.industryName}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-6 pt-4">
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="text-sm font-medium text-brand-500 hover:underline"
                    style={{ color: "var(--brand-500)" }}
                  >
                    View project details <ArrowRight className="ml-1 inline-block h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {visibleCount < filteredItems.length && (
            <div className="flex justify-center">
              <Button variant="outline" onClick={loadMore}>
                Load More Projects
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
