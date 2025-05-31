import type { Metadata } from "next"
import { RetailServicesHero } from "@/components/services/retail/retail-services-hero"
import { RetailServicesList } from "@/components/services/retail/retail-services-list"
import { RetailServicesFeatures } from "@/components/services/retail/retail-services-features"
import { RetailServicesCaseStudy } from "@/components/services/retail/retail-services-case-study"
import { ServiceCTA } from "@/components/services/service-cta"

export const metadata: Metadata = {
  title: "Retail IT Services - F09 Tech",
  description:
    "Specialized IT solutions for retail businesses including POS installation, network security, and inventory management systems.",
}

export default function RetailServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <RetailServicesHero />
      <RetailServicesList />
      <RetailServicesFeatures />
      <RetailServicesCaseStudy />
      <ServiceCTA />
    </main>
  )
}
