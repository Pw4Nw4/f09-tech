import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServiceCategories } from "@/components/services/service-categories"
import { FeaturedServices } from "@/components/services/featured-services"
import { ServiceProcess } from "@/components/services/service-process"
import { ServiceTestimonials } from "@/components/services/service-testimonials"
import { ServiceFAQ } from "@/components/services/service-faq"
import { ServiceCTA } from "@/components/services/service-cta"

export const metadata: Metadata = {
  title: "Services - F09 Tech | IT Solutions for Individuals & Businesses",
  description:
    "Explore our comprehensive range of IT services for individuals, retail businesses, and enterprises - from PC repairs to enterprise cybersecurity solutions.",
}

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ServicesHero />
      <ServiceCategories />
      <FeaturedServices />
      <ServiceProcess />
      <ServiceTestimonials />
      <ServiceFAQ />
      <ServiceCTA />
    </main>
  )
}
