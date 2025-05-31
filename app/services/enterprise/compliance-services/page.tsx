import type { Metadata } from "next"
import { DetailedServiceTemplate } from "@/components/services/enterprise/detailed-service-template"
import { FileCheck, Shield, ClipboardCheck, FileText, Users, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Compliance Services - F09 Tech",
  description:
    "Comprehensive compliance solutions for GDPR, HIPAA, SOC 2, ISO 27001, and industry-specific regulations.",
}

export default function ComplianceServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <DetailedServiceTemplate
        title="Compliance Services"
        description="Comprehensive compliance solutions for GDPR, HIPAA, SOC 2, ISO 27001, and industry-specific regulations."
        category="Security Solutions"
        icon={<FileCheck className="h-6 w-6" />}
        features={[
          {
            title: "Compliance Gap Analysis",
            description: "Thorough assessment of your current security posture against relevant compliance frameworks.",
          },
          {
            title: "GDPR Compliance",
            description: "Implementation of processes and controls to meet European data protection requirements.",
          },
          {
            title: "HIPAA Security & Privacy",
            description: "Specialized solutions for healthcare organizations to protect patient information.",
          },
          {
            title: "SOC 2 Audit Preparation",
            description:
              "Comprehensive preparation for Service Organization Control audits to demonstrate security and availability.",
          },
          {
            title: "ISO 27001 Certification",
            description:
              "Implementation of information security management systems aligned with international standards.",
          },
          {
            title: "Compliance Documentation",
            description: "Development of policies, procedures, and evidence required for compliance demonstrations.",
          },
        ]}
        benefits={[
          {
            title: "Regulatory Risk Reduction",
            description: "Minimize the risk of non-compliance penalties, fines, and regulatory actions.",
          },
          {
            title: "Enhanced Customer Trust",
            description: "Demonstrate your commitment to data protection and security to build customer confidence.",
          },
          {
            title: "Competitive Advantage",
            description:
              "Use compliance certifications as a differentiator in competitive markets and procurement processes.",
          },
          {
            title: "Improved Security Posture",
            description: "Strengthen your overall security through implementation of compliance-driven controls.",
          },
          {
            title: "Business Enablement",
            description: "Unlock new business opportunities that require specific compliance certifications.",
          },
          {
            title: "Streamlined Audit Processes",
            description:
              "Reduce the time and effort required for compliance audits through proper preparation and documentation.",
          },
        ]}
        implementation={[
          {
            title: "Compliance Assessment",
            description:
              "Evaluate current compliance status, identify gaps, and develop a roadmap for achieving compliance.",
          },
          {
            title: "Control Implementation",
            description:
              "Design and implement technical and administrative controls required by relevant compliance frameworks.",
          },
          {
            title: "Policy Development",
            description: "Create comprehensive policies and procedures aligned with compliance requirements.",
          },
          {
            title: "Staff Training",
            description:
              "Conduct training sessions to ensure all employees understand their compliance responsibilities.",
          },
          {
            title: "Audit Preparation",
            description: "Prepare documentation, evidence, and systems for compliance audits and assessments.",
          },
          {
            title: "Continuous Compliance Management",
            description: "Implement processes for ongoing compliance monitoring, maintenance, and improvement.",
          },
        ]}
        technologies={[
          {
            name: "GRC Platforms",
            description: "Integrated solutions for managing compliance requirements, controls, and documentation.",
            icon: <FileCheck className="h-6 w-6" />,
          },
          {
            name: "Security Information & Event Management",
            description:
              "Systems for collecting and analyzing security data to demonstrate compliance with monitoring requirements.",
            icon: <Shield className="h-6 w-6" />,
          },
          {
            name: "Policy Management Systems",
            description: "Tools for creating, managing, and distributing compliance policies and procedures.",
            icon: <FileText className="h-6 w-6" />,
          },
          {
            name: "Compliance Automation Tools",
            description: "Solutions that automate compliance checks, evidence collection, and reporting.",
            icon: <ClipboardCheck className="h-6 w-6" />,
          },
          {
            name: "Identity & Access Management",
            description: "Systems for controlling and documenting access to sensitive data and systems.",
            icon: <Users className="h-6 w-6" />,
          },
          {
            name: "Encryption & Data Protection",
            description: "Technologies for protecting sensitive data in compliance with regulatory requirements.",
            icon: <Lock className="h-6 w-6" />,
          },
        ]}
        useCases={[
          "Healthcare organizations requiring HIPAA compliance for patient data protection",
          "Financial services firms subject to PCI DSS, SOX, or other financial regulations",
          "SaaS providers seeking SOC 2 certification to demonstrate security to enterprise customers",
          "Organizations processing EU citizen data requiring GDPR compliance",
          "Government contractors needing CMMC or FedRAMP compliance",
          "Organizations pursuing ISO 27001 certification for international business opportunities",
        ]}
      />
    </main>
  )
}
