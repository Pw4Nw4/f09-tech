"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Import case study metadata
import { metadata as retailerRansomwareProtection } from "./case-study-posts/retailer-ransomware-protection"
import { metadata as ecommerceSecurityMonitoring } from "./case-study-posts/ecommerce-security-monitoring"
// Add more imports as case studies are created

// Combine all case studies
const allCaseStudies = [
  retailerRansomwareProtection,
  ecommerceSecurityMonitoring,
  // Add more case studies as they are created
]

export function CaseStudyList() {
  const [visibleCount, setVisibleCount] = useState(6)

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, allCaseStudies.length))
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allCaseStudies.slice(0, visibleCount).map((study, index) => (
          <Card key={index} className="overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src={study.image || `/placeholder.svg?height=400&width=600&query=${study.industry} ${study.service}`}
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

      {visibleCount < allCaseStudies.length && (
        <div className="flex justify-center">
          <Button variant="outline" onClick={loadMore}>
            Load More Case Studies
          </Button>
        </div>
      )}
    </div>
  )
}
