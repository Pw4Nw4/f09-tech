"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFilter } from "@/contexts/filter-context"

// Updated case studies with the new topics
const caseStudies = [
  {
    id: 1,
    title: "How F09 Tech Protected a Local Retailer from Ransomware",
    excerpt:
      "A detailed walkthrough of the client's initial vulnerabilities, the layered security solution implemented, and how we stopped a live ransomware attack.",
    image: "/placeholder.svg?height=400&width=600&query=retail store cybersecurity ransomware protection",
    industry: "retail",
    service: "cybersecurity",
    results: ["Ransomware attack prevented", "Data secured", "Business continuity maintained"],
    challenges: ["security", "legacy-systems", "data-management"],
    technologies: ["endpoint-protection", "backup-solutions", "security-training"],
    projectSize: 35,
    projectDuration: 3,
    slug: "local-retailer-ransomware-protection",
    clientName: "Urban Style Boutique",
    clientSize: "Small (15 employees)",
    location: "Portland, OR",
    businessImpact: [
      "Prevented potential data loss valued at $75,000+",
      "Maintained business continuity during active attack",
      "Improved overall security posture",
      "Implemented automated backup system",
      "Trained staff on security best practices",
    ],
  },
  {
    id: 2,
    title: "From Zero to SOC: Building Security Monitoring for an E-Commerce Startup",
    excerpt:
      "How we deployed a lightweight SIEM, set up alerts, and onboarded the founder's remote workforce—all on a bootstrap budget.",
    image: "/placeholder.svg?height=400&width=600&query=ecommerce security operations center monitoring",
    industry: "e-commerce",
    service: "security-monitoring",
    results: ["24/7 security monitoring", "Threat detection", "Remote workforce security"],
    challenges: ["security", "cost-optimization", "remote-work"],
    technologies: ["siem", "alert-system", "remote-access"],
    projectSize: 25,
    projectDuration: 2,
    slug: "ecommerce-startup-security-monitoring",
    clientName: "GreenLeaf Marketplace",
    clientSize: "Startup (8 employees)",
    location: "Austin, TX",
    businessImpact: [
      "Established 24/7 security monitoring on a startup budget",
      "Detected and prevented 3 potential breaches in first month",
      "Secured remote workforce across 5 different states",
      "Achieved PCI DSS compliance for e-commerce operations",
      "Enabled secure scaling of business operations",
    ],
  },
  {
    id: 3,
    title: "Affordable 24/7 Managed Security for a Family-Owned Café Chain",
    excerpt:
      "Details of our process: vulnerability assessment, policy creation, continuous monitoring, and annual compliance audit—keeping their customers' payment data safe.",
    image: "/placeholder.svg?height=400&width=600&query=cafe restaurant chain payment security PCI",
    industry: "food-service",
    service: "managed-security",
    results: ["PCI DSS compliance", "Payment data protection", "Continuous monitoring"],
    challenges: ["compliance", "security", "cost-optimization"],
    technologies: ["payment-security", "monitoring-tools", "compliance-automation"],
    projectSize: 30,
    projectDuration: 4,
    slug: "cafe-chain-managed-security",
    clientName: "Sunrise Café Chain",
    clientSize: "Small (30 employees across 5 locations)",
    location: "Denver, CO",
    businessImpact: [
      "Achieved and maintained PCI DSS compliance",
      "Protected customer payment data across all locations",
      "Reduced security management costs by 40%",
      "Implemented standardized security policies",
      "Established continuous security monitoring system",
    ],
  },
  {
    id: 4,
    title: "Securing Remote Healthcare Workers: Endpoint Protection for a Small Clinic",
    excerpt:
      "How we rolled out disk encryption, VPN access, and phishing simulations to protect patient records and meet HIPAA requirements.",
    image: "/placeholder.svg?height=400&width=600&query=healthcare clinic remote workers HIPAA security",
    industry: "healthcare",
    service: "endpoint-security",
    results: ["HIPAA compliance", "Secure remote access", "Protected patient data"],
    challenges: ["compliance", "remote-work", "data-management"],
    technologies: ["disk-encryption", "vpn", "phishing-simulation"],
    projectSize: 40,
    projectDuration: 3,
    slug: "healthcare-remote-endpoint-protection",
    clientName: "Westside Medical Clinic",
    clientSize: "Small (12 employees)",
    location: "Seattle, WA",
    businessImpact: [
      "Ensured HIPAA compliance for remote operations",
      "Protected sensitive patient records from unauthorized access",
      "Reduced phishing susceptibility by 85% through training",
      "Enabled secure telehealth services during pandemic",
      "Implemented secure remote access for all staff",
    ],
  },
  {
    id: 5,
    title: "Cloud Migration & Cost Savings: Modernizing an Accounting Firm's IT",
    excerpt:
      "How we moved local servers to a hybrid-cloud setup, optimized licensing costs, and implemented automated backups—reducing downtime and IT spend by 30%.",
    image: "/placeholder.svg?height=400&width=600&query=accounting firm cloud migration cost savings",
    industry: "financial-services",
    service: "cloud-migration",
    results: ["30% cost reduction", "Improved reliability", "Automated backups"],
    challenges: ["legacy-systems", "cost-optimization", "data-management"],
    technologies: ["hybrid-cloud", "automated-backup", "license-optimization"],
    projectSize: 45,
    projectDuration: 5,
    slug: "accounting-firm-cloud-migration",
    clientName: "Peterson Accounting Services",
    clientSize: "Small (20 employees)",
    location: "Chicago, IL",
    businessImpact: [
      "Reduced IT costs by 30% through cloud migration",
      "Decreased system downtime by 95%",
      "Implemented automated daily backups",
      "Optimized software licensing costs",
      "Enabled secure remote work capabilities",
    ],
  },
]

export function CaseStudiesGrid() {
  const { filters, searchQuery, isFiltering } = useFilter()
  const [filteredStudies, setFilteredStudies] = useState(caseStudies)
  const [visibleCount, setVisibleCount] = useState(6)

  useEffect(() => {
    let result = [...caseStudies]

    // Filter by industry
    if (filters.industry && filters.industry !== "all") {
      result = result.filter((study) => study.industry === filters.industry)
    }

    // Filter by service
    if (filters.service && filters.service !== "all") {
      result = result.filter((study) => study.service === filters.service)
    }

    // Filter by challenges
    if (filters.challenges && filters.challenges.length > 0) {
      result = result.filter((study) => study.challenges.some((challenge) => filters.challenges.includes(challenge)))
    }

    // Filter by technologies
    if (filters.technologies && filters.technologies.length > 0) {
      result = result.filter((study) => study.technologies.some((tech) => filters.technologies.includes(tech)))
    }

    // Filter by project size
    if (filters.projectSize) {
      const [min, max] = filters.projectSize
      result = result.filter((study) => study.projectSize >= min && (max === 100 || study.projectSize <= max))
    }

    // Filter by project duration
    if (filters.projectDuration) {
      const [min, max] = filters.projectDuration
      result = result.filter((study) => study.projectDuration >= min && (max === 24 || study.projectDuration <= max))
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (study) =>
          study.title.toLowerCase().includes(query) ||
          study.excerpt.toLowerCase().includes(query) ||
          study.industry.toLowerCase().includes(query) ||
          study.service.toLowerCase().includes(query) ||
          study.results.some((result) => result.toLowerCase().includes(query)) ||
          study.challenges.some((challenge) => challenge.toLowerCase().includes(query)) ||
          study.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
          study.clientName.toLowerCase().includes(query) ||
          study.location.toLowerCase().includes(query) ||
          study.businessImpact.some((impact) => impact.toLowerCase().includes(query)),
      )
    }

    setFilteredStudies(result)
    // Reset visible count when filters change
    setVisibleCount(6)
  }, [filters, searchQuery])

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredStudies.length))
  }

  return (
    <div className="space-y-8">
      {filteredStudies.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No case studies found</h3>
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
            {filteredStudies.slice(0, visibleCount).map((study) => (
              <Card key={study.id} className="overflow-hidden flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={
                      study.image || `/placeholder.svg?height=400&width=600&query=${study.industry} ${study.service}`
                    }
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-gradient-to-t from-black/80 to-transparent p-4">
                    <Badge className="bg-brand-500 text-white" style={{ backgroundColor: "var(--brand-500)" }}>
                      {study.industry
                        .split("-")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")}
                    </Badge>
                    <Badge variant="outline" className="bg-black/50 text-white">
                      {study.service
                        .split("-")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="mb-3">
                    <p className="text-sm text-muted-foreground">
                      {study.clientName} | {study.location}
                    </p>
                  </div>
                  <Link href={`/case-studies/${study.slug}`} className="group">
                    <h3
                      className="mb-2 text-xl font-bold group-hover:text-brand-500"
                      style={{ color: "inherit", transition: "color 0.2s" }}
                    >
                      {study.title}
                    </h3>
                  </Link>
                  <p className="mb-4 line-clamp-3 text-muted-foreground">{study.excerpt}</p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Business Impact:</p>
                    <ul className="space-y-1">
                      {study.businessImpact.slice(0, 2).map((impact, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span
                            className="mr-2 h-1.5 w-1.5 rounded-full bg-brand-500"
                            style={{ backgroundColor: "var(--brand-500)" }}
                          ></span>
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="border-t p-6 pt-4">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="text-sm font-medium text-brand-500 hover:underline"
                    style={{ color: "var(--brand-500)" }}
                  >
                    Read full case study <ArrowRight className="ml-1 inline-block h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {visibleCount < filteredStudies.length && (
            <div className="flex justify-center">
              <Button variant="outline" onClick={loadMore}>
                Load More Case Studies
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
