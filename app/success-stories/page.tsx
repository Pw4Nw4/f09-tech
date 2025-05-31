import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight } from "lucide-react"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export const metadata: Metadata = {
  title: "Success Stories | F09 Tech",
  description: "See how we've helped our clients succeed with technology solutions",
}

export default function SuccessStoriesPage() {
  const successStories = [
    {
      id: "law-office-security",
      title: "Cybersecurity Overhaul for a Law Office",
      industry: "Legal Services",
      challenge: "Outdated antivirus, no firewall segmentation, no incident response plan",
      solution: [
        "Conducted full vulnerability assessment",
        "Deployed a SIEM solution and firewall with advanced rules",
        "Configured encrypted backups and secured remote access",
        "Delivered phishing simulations and staff security training",
      ],
      results: [
        "Zero security incidents over 12 months",
        "99% phishing test success rate",
        "Passed external compliance audit with no findings",
      ],
    },
    {
      id: "retail-pos-upgrade",
      title: "Retail POS & Inventory Upgrade",
      industry: "Retail & Apparel",
      challenge: "Frequent POS crashes, manual inventory tracking, disconnected online store",
      solution: [
        "Implemented cloud-based POS system with inventory sync",
        "Integrated barcode scanners and automated restock features",
        "Delivered hands-on staff training",
      ],
      results: ["90% reduction in stock errors", "2× faster order fulfillment", "Fully automated monthly reporting"],
    },
    {
      id: "smart-home-integration",
      title: "Smart Home Integration Project",
      industry: "Residential Technology",
      challenge: "Disparate smart devices with no central control or security",
      solution: [
        "Installed open-source home automation platform",
        "Integrated lighting, locks, climate, and security",
        "Segmented IoT traffic from personal network for added security",
      ],
      results: [
        "Unified mobile dashboard for all devices",
        "18% reduction in energy use",
        "Improved home security with automation routines",
      ],
    },
    {
      id: "manufacturing-erp",
      title: "ERP Implementation for Manufacturing Company",
      industry: "Manufacturing",
      challenge: "Disconnected systems, manual data entry, limited visibility into operations",
      solution: [
        "Implemented integrated ERP system with manufacturing modules",
        "Automated data collection from production floor",
        "Created custom dashboards for executive oversight",
        "Trained staff on new digital workflows",
      ],
      results: [
        "25% increase in production efficiency",
        "Reduced order-to-delivery time by 40%",
        "Real-time visibility into inventory and production",
      ],
    },
    {
      id: "healthcare-compliance",
      title: "Healthcare IT Compliance Overhaul",
      industry: "Healthcare",
      challenge: "Non-compliant systems, security vulnerabilities, audit failures",
      solution: [
        "Conducted comprehensive compliance assessment",
        "Implemented secure electronic health record system",
        "Established ongoing compliance monitoring",
        "Created staff training program for security awareness",
      ],
      results: [
        "Achieved full HIPAA and HITECH compliance",
        "Passed external security audit with zero findings",
        "Reduced data breach risk by implementing advanced security controls",
      ],
    },
    {
      id: "financial-security",
      title: "Financial Services Security Enhancement",
      industry: "Financial Services",
      challenge: "Outdated security infrastructure, increasing cyber threats, regulatory pressure",
      solution: [
        "Implemented multi-layered security architecture",
        "Deployed advanced threat detection systems",
        "Established 24/7 security monitoring",
        "Created incident response protocols",
      ],
      results: [
        "100% compliance with financial regulations",
        "Blocked over 10,000 attempted attacks in first quarter",
        "Reduced security incident response time by 85%",
      ],
    },
    {
      id: "education-network",
      title: "Campus-Wide Network Upgrade",
      industry: "Education",
      challenge: "Unreliable connectivity, limited bandwidth, growing digital learning needs",
      solution: [
        "Designed and implemented high-capacity network infrastructure",
        "Deployed campus-wide WiFi with seamless roaming",
        "Implemented content filtering and security measures",
        "Created separate networks for administrative and student use",
      ],
      results: [
        "99.99% network uptime achieved",
        "10x increase in available bandwidth",
        "Supported 5,000+ simultaneous device connections",
      ],
    },
  ]

  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Success Stories</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Real-world examples of how we've helped our clients overcome challenges and achieve their goals
        </p>
      </div>

      <div className="space-y-12">
        {successStories.map((story) => (
          <Card key={story.id} className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="relative h-64 lg:h-auto lg:col-span-1">
                <IconPlaceholder
                  title={story.title}
                  category={story.industry}
                  variant="success-story"
                  iconType={story.id}
                  className="h-full"
                />
              </div>
              <div className="lg:col-span-2 p-6">
                <div className="flex flex-col h-full">
                  <div>
                    <Badge className="mb-2">{story.industry}</Badge>
                    <h2 className="text-2xl font-bold mb-2">{story.title}</h2>
                  </div>

                  <div className="flex-grow">
                    <h3 className="font-semibold mb-2">Challenge:</h3>
                    <p className="mb-4">{story.challenge}</p>

                    <h3 className="font-semibold mb-2">What We Did:</h3>
                    <ul className="space-y-1 mb-4">
                      {story.solution.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-semibold mb-2">Results:</h3>
                    <ul className="space-y-1">
                      {story.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <Button asChild>
                      <Link href={`/success-stories/${story.id}`}>Read Full Case Study</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to become our next success story?</h2>
        <p className="mx-auto max-w-[600px] text-gray-500 mb-6">
          Let's discuss how we can help your organization achieve its technology goals with custom solutions tailored to
          your needs.
        </p>
        <Button asChild size="lg" className="bg-gradient-primary text-white">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
