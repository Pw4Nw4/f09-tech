import type { Metadata } from "next"
import { IndividualServicesHero } from "@/components/services/individuals/individual-services-hero"
import { IndividualServicesList } from "@/components/services/individuals/individual-services-list"
import { IndividualServicesFeatures } from "@/components/services/individuals/individual-services-features"
import { IndividualServicesPricing } from "@/components/services/individuals/individual-services-pricing"
import { ServiceCTA } from "@/components/services/service-cta"

export const metadata: Metadata = {
  title: "Individual IT Services - F09 Tech",
  description:
    "Professional IT services for individuals including PC repair, virus removal, home network setup, and custom PC building.",
}

export default function IndividualServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <IndividualServicesHero />
      <IndividualServicesList />
      <IndividualServicesFeatures />
      <IndividualServicesPricing />
      <ServiceCTA />
    </main>
  )
}
