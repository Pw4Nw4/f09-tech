"use client"

import { ArrowLeft, Construction, Calendar, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlaceholderImage } from "@/components/ui/placeholder-image"

interface ServiceDetailTemplateProps {
  title: string
  description: string
  category: string
  estimatedAvailability?: string
  features?: string[]
}

export function ServiceDetailTemplate({
  title,
  description,
  category,
  estimatedAvailability = "Coming Soon",
  features = [],
}: ServiceDetailTemplateProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back button */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/services/enterprise" className="flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Enterprise Services
          </Link>
        </Button>
      </div>

      {/* Hero section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 mb-4">
            {category}
          </div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{description}</p>
          <div className="flex items-center text-amber-600 dark:text-amber-400 mb-8">
            <Construction className="h-5 w-5 mr-2" />
            <span className="font-medium">Page Under Construction</span>
          </div>
          <div className="flex items-center mb-4">
            <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
            <span>Estimated Availability: {estimatedAvailability}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
            <span>Check back soon for detailed information</span>
          </div>
        </div>
        <div className="h-[300px] lg:h-auto">
          <PlaceholderImage
            title={title}
            category={category}
            variant="portfolio"
            seed={title.length}
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>

      {/* Features section */}
      {features.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="border border-muted">
                <CardContent className="p-4 flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <p>{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* CTA section */}
      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Interested in {title}?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          While this page is under construction, you can still contact us to learn more about our {title.toLowerCase()}{" "}
          services and how we can help your business.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/services/enterprise">View All Enterprise Services</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
