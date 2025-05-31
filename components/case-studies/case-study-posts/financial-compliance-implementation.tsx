import { ShieldCheck, Clock, DollarSign, TrendingUp } from "lucide-react"
import { CaseStudyLayout } from "../case-study-layout"

// Export the metadata for use in the case studies page
export const metadata = {
  title: "Financial Services Compliance Implementation",
  excerpt:
    "How we helped a regional financial services firm achieve regulatory compliance while enhancing their security posture.",
  industry: "financial-services",
  service: "compliance",
  clientName: "Regional Financial Services",
  location: "Northeast, USA",
  clientSize: "Mid-size (150+ employees)",
  projectDuration: 4,
  projectSize: 50,
  challenges: ["regulatory-compliance", "legacy-systems", "distributed-operations"],
  technologies: ["compliance-automation", "security-monitoring", "risk-assessment"],
  results: ["Full regulatory compliance", "Enhanced security posture", "Streamlined audit processes"],
  businessImpact: [
    "Achieved 100% compliance with applicable regulations",
    "Reduced audit preparation time by 65%",
    "Decreased compliance-related costs by 40%",
    "Improved client trust and satisfaction",
    "Enhanced ability to adapt to new regulations",
  ],
  image: "/images/case-studies/financial-compliance.png",
  slug: "financial-compliance-implementation",
}

export default function FinancialComplianceImplementation() {
  return (
    <CaseStudyLayout
      title="Financial Services Compliance Implementation"
      industry="Financial Services"
      icon="landmark"
      summary="A regional financial services firm needed to achieve compliance with multiple regulations while enhancing their security posture. Our comprehensive compliance implementation program helped them achieve 100% compliance, reduce audit preparation time by 65%, and decrease compliance-related costs by 40%."
      timeframe="16 weeks"
      companySize="Mid-size (150+ employees)"
      teamSize="6 compliance specialists"
      metrics={[
        {
          label: "Compliance Score",
          value: "100%",
          icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        },
        {
          label: "Audit Prep Reduction",
          value: "65%",
          icon: <Clock className="h-8 w-8 text-primary" />,
        },
        {
          label: "Cost Reduction",
          value: "40%",
          icon: <DollarSign className="h-8 w-8 text-primary" />,
        },
        {
          label: "Security Improvement",
          value: "85%",
          icon: <TrendingUp className="h-8 w-8 text-primary" />,
        },
      ]}
      challenge={
        <>
          <p>
            A regional financial services firm with multiple branches was struggling to keep up with evolving regulatory
            requirements while maintaining efficient operations. This case study details our comprehensive approach to
            implementing a compliance program that not only satisfied regulatory requirements but also enhanced their
            overall security posture.
          </p>
          <p>Full case study content coming soon.</p>
        </>
      }
      solution={
        <>
          <p>
            F09 Tech designed and implemented a comprehensive compliance program tailored to the financial services
            industry, addressing multiple regulatory frameworks while enhancing operational efficiency.
          </p>
          <p>Full case study content coming soon.</p>
        </>
      }
      results={
        <>
          <p>
            Our compliance implementation program delivered significant results for the financial services firm,
            including full regulatory compliance, enhanced security posture, and streamlined audit processes.
          </p>
          <p>Full case study content coming soon.</p>
        </>
      }
      testimonial={{
        quote:
          "F09 Tech transformed our approach to compliance from a necessary burden to a strategic advantage. Their team's expertise in both regulatory requirements and practical implementation was invaluable.",
        author: "Jennifer Williams",
        position: "Chief Compliance Officer, Regional Financial Services",
      }}
      additionalSections={[
        {
          id: "lessons-learned",
          title: "Lessons Learned",
          content: (
            <>
              <p>Full case study content coming soon.</p>
            </>
          ),
        },
      ]}
      resources={[
        {
          title: "Financial Services Compliance Checklist",
          description: "Comprehensive checklist for financial services compliance",
          downloadUrl: "#download-checklist",
        },
      ]}
      relatedCaseStudies={[
        {
          title: "Healthcare Security Assessment",
          slug: "healthcare-security-assessment",
          industry: "Healthcare",
          icon: "heart-pulse",
        },
        {
          title: "Ransomware Protection for Multi-Location Retailer",
          slug: "local-retailer-ransomware-protection",
          industry: "Retail",
          icon: "shopping-bag",
        },
      ]}
    />
  )
}
