import type { Metadata } from "next"
import { EnterpriseServicesHero } from "@/components/services/enterprise/enterprise-services-hero"
import { EnterpriseServicesList } from "@/components/services/enterprise/enterprise-services-list"
import { EnterpriseServicesFeatures } from "@/components/services/enterprise/enterprise-services-features"
import { EnterpriseServicesSolutions } from "@/components/services/enterprise/enterprise-services-solutions"
import { ServiceCTA } from "@/components/services/service-cta"

export const metadata: Metadata = {
  title: "Enterprise IT Services - F09 Tech",
  description:
    "Enterprise-grade IT solutions including cloud services, cybersecurity, network infrastructure, and server management for businesses of all sizes.",
}

export default function EnterpriseServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <EnterpriseServicesHero />
      <EnterpriseServicesList />
      <EnterpriseServicesFeatures />
      <EnterpriseServicesSolutions />
      <ServiceCTA />
    </main>
  )
}
