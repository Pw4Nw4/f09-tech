import { notFound } from "next/navigation"

// Import case study components and metadata
import RetailerRansomwareProtection, {
  metadata as retailerRansomwareProtectionMetadata,
} from "@/components/case-studies/case-study-posts/retailer-ransomware-protection"
import EcommerceSecurityMonitoring, {
  metadata as ecommerceSecurityMonitoringMetadata,
} from "@/components/case-studies/case-study-posts/ecommerce-security-monitoring"
import HealthcareSecurityAssessment, {
  metadata as healthcareSecurityAssessmentMetadata,
} from "@/components/case-studies/case-study-posts/healthcare-security-assessment"
import FinancialComplianceImplementation, {
  metadata as financialComplianceImplementationMetadata,
} from "@/components/case-studies/case-study-posts/financial-compliance-implementation"

// Map of slug to component and metadata
const caseStudies = {
  "local-retailer-ransomware-protection": {
    component: RetailerRansomwareProtection,
    metadata: retailerRansomwareProtectionMetadata,
  },
  "ecommerce-startup-security-monitoring": {
    component: EcommerceSecurityMonitoring,
    metadata: ecommerceSecurityMonitoringMetadata,
  },
  "healthcare-security-assessment": {
    component: HealthcareSecurityAssessment,
    metadata: healthcareSecurityAssessmentMetadata,
  },
  "financial-compliance-implementation": {
    component: FinancialComplianceImplementation,
    metadata: financialComplianceImplementationMetadata,
  },
  // Add more as they are created
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  // Find the case study by slug
  const caseStudy = caseStudies[params.slug]

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | F09 Tech",
      description: "The requested case study could not be found.",
    }
  }

  const { metadata } = caseStudy

  return {
    title: `${metadata.title} | F09 Tech Case Studies`,
    description: metadata.excerpt,
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // Find the case study by slug
  const caseStudy = caseStudies[params.slug]

  if (!caseStudy) {
    notFound()
  }

  const { component: CaseStudy } = caseStudy

  return (
    <main className="min-h-screen">
      <div className="container py-12">
        <CaseStudy />
      </div>
    </main>
  )
}
