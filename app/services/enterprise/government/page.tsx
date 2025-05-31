import type { Metadata } from "next"
import { Building, Shield, Database, Lock, Users } from "lucide-react"
import { IndustrySolutionTemplate } from "@/components/services/enterprise/industry-solution-template"

export const metadata: Metadata = {
  title: "Government IT Solutions - F09 Tech",
  description:
    "Secure, compliant IT solutions for government agencies at all levels, designed to meet strict security requirements.",
}

export default function GovernmentSolutionsPage() {
  return (
    <IndustrySolutionTemplate
      industry="Government"
      title="Government Technology Solutions"
      description="Secure, compliant IT solutions designed specifically for government agencies at all levels, meeting strict security requirements and improving public service delivery."
      icon={<Building className="h-12 w-12" />}
      challenges={[
        {
          title: "Security & Compliance",
          description:
            "Meeting stringent government security requirements including FedRAMP, FISMA, and other regulations.",
        },
        {
          title: "Legacy System Modernization",
          description: "Updating outdated systems while maintaining operational continuity and data integrity.",
        },
        {
          title: "Budget Constraints",
          description:
            "Implementing effective technology solutions within fixed government budgets and procurement processes.",
        },
        {
          title: "Citizen Service Delivery",
          description: "Improving digital service delivery to citizens while maintaining security and accessibility.",
        },
      ]}
      solutions={[
        {
          title: "Government Compliance Solutions",
          description:
            "Comprehensive compliance frameworks designed specifically for government requirements, including FedRAMP, FISMA, CMMC, and other regulations.",
          icon: <Shield className="h-6 w-6" />,
        },
        {
          title: "Secure Government Cloud",
          description:
            "Secure cloud solutions that meet government security requirements while enabling modernization and improved service delivery.",
          icon: <Lock className="h-6 w-6" />,
        },
        {
          title: "Legacy System Modernization",
          description:
            "Strategic approaches to updating legacy government systems while minimizing risk and ensuring continuity of operations.",
          icon: <Database className="h-6 w-6" />,
        },
        {
          title: "Citizen Service Portals",
          description:
            "Secure, accessible digital service platforms that improve citizen interactions with government agencies.",
          icon: <Users className="h-6 w-6" />,
        },
      ]}
      benefits={[
        "Enhanced security posture meeting government requirements",
        "Improved citizen service delivery and satisfaction",
        "Reduced operational costs through modernization",
        "Better interagency data sharing and collaboration",
        "Increased transparency and accountability",
        "Scalable infrastructure that adapts to changing needs",
        "Improved disaster recovery and continuity of operations",
        "Support for remote government workforce",
      ]}
      technologies={[
        "FedRAMP Compliant Cloud",
        "Government Records Management",
        "Secure Citizen Portals",
        "Government Data Analytics",
        "Public Records Systems",
        "Secure Government Networks",
        "Identity & Access Management",
        "Government Mobile Solutions",
      ]}
      caseStudies={[
        {
          title: "Municipal IT Infrastructure Upgrade",
          description:
            "Modernizing the entire IT infrastructure for a mid-sized municipality while improving security and citizen services.",
          link: "/case-studies",
        },
        {
          title: "Government Agency Security Enhancement",
          description:
            "Implementing comprehensive security improvements for a state government agency handling sensitive data.",
          link: "/case-studies",
        },
        {
          title: "Public Records Modernization",
          description: "Creating a secure, accessible digital records system for a county government office.",
          link: "/case-studies",
        },
      ]}
      faqs={[
        {
          question: "How do you ensure compliance with government security requirements?",
          answer:
            "We implement comprehensive security frameworks aligned with specific government requirements like FedRAMP, FISMA, and CMMC. Our team stays current with government regulations and ensures all solutions meet or exceed compliance requirements.",
        },
        {
          question: "Can you work within government procurement processes?",
          answer:
            "Yes, we have experience with government contracting vehicles, procurement processes, and budget cycles. We can provide the necessary documentation and follow required procedures for government technology acquisitions.",
        },
        {
          question: "How do you approach legacy system modernization for government?",
          answer:
            "We use a phased approach that minimizes risk and disruption. This includes thorough assessment, careful planning, parallel operations during transition, comprehensive testing, and clear rollback procedures if needed.",
        },
        {
          question: "What experience do you have with government clients?",
          answer:
            "We have extensive experience working with government agencies at federal, state, and local levels. Our team understands the unique requirements, constraints, and priorities of government technology environments.",
        },
      ]}
    />
  )
}
