import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight } from "lucide-react"

interface SuccessStory {
  id: string
  title: string
  industry: string
  challenge: string
  solution: string[]
  results: string[]
  image: string
}

export function AdditionalSuccessStories() {
  const successStories: SuccessStory[] = [
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
      image: "/images/success-stories/manufacturing-erp.png",
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
      image: "/images/success-stories/healthcare-compliance.png",
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
      image: "/images/success-stories/financial-security.png",
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
      image: "/images/success-stories/education-network.png",
      results: [
        "99.99% network uptime achieved",
        "10x increase in available bandwidth",
        "Supported 5,000+ simultaneous device connections",
      ],
    },
  ]

  return (
    <div className="space-y-12">
      {successStories.map((story) => (
        <Card key={story.id} className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="relative h-64 lg:h-auto lg:col-span-1">
              <Image
                src={story.image || "/placeholder.svg"}
                alt={story.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
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
  )
}
