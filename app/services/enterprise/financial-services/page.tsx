import type { Metadata } from "next"
import { Landmark, Shield, Database, Lock, FileCheck } from "lucide-react"
import { IndustrySolutionTemplate } from "@/components/services/enterprise/industry-solution-template"

export const metadata: Metadata = {
  title: "Financial Services IT Solutions - F09 Tech",
  description: "Secure, compliant, and reliable IT solutions for banks, credit unions, and financial institutions.",
}

export default function FinancialServicesSolutionsPage() {
  return (
    <IndustrySolutionTemplate
      industry="Financial Services"
      title="Financial Technology Solutions"
      description="Secure, compliant, and reliable IT solutions designed specifically for banks, credit unions, investment firms, and financial institutions."
      icon={<Landmark className="h-12 w-12" />}
      challenges={[
        {
          title: "Regulatory Compliance",
          description:
            "Meeting complex regulatory requirements including PCI DSS, GLBA, SOX, and other financial regulations.",
        },
        {
          title: "Cybersecurity Threats",
          description: "Protecting against sophisticated cyber attacks targeting financial data and transactions.",
        },
        {
          title: "Legacy System Modernization",
          description: "Updating outdated systems while maintaining operational continuity and data integrity.",
        },
        {
          title: "Digital Transformation",
          description: "Implementing modern digital banking experiences while maintaining security and compliance.",
        },
      ]}
      solutions={[
        {
          title: "Financial Compliance Solutions",
          description:
            "Comprehensive compliance frameworks and controls designed specifically for financial institutions, covering PCI DSS, GLBA, SOX, and other regulations.",
          icon: <FileCheck className="h-6 w-6" />,
        },
        {
          title: "Financial Cybersecurity",
          description:
            "Advanced security solutions tailored for financial environments, including fraud detection, secure transaction processing, and multi-layered defense systems.",
          icon: <Shield className="h-6 w-6" />,
        },
        {
          title: "Core Banking System Integration",
          description:
            "Seamless integration services connecting core banking systems with modern applications and services while maintaining data integrity and security.",
          icon: <Database className="h-6 w-6" />,
        },
        {
          title: "Secure Digital Banking Infrastructure",
          description:
            "Robust and secure infrastructure for digital banking platforms, ensuring reliable, scalable, and protected customer experiences.",
          icon: <Lock className="h-6 w-6" />,
        },
      ]}
      benefits={[
        "Enhanced protection of sensitive financial data",
        "Reduced risk of compliance violations and associated penalties",
        "Improved customer experience through modern digital solutions",
        "Better fraud detection and prevention capabilities",
        "Increased operational efficiency and reduced costs",
        "Scalable infrastructure that grows with your institution",
        "Faster time-to-market for new financial products and services",
        "24/7 support from financial technology specialists",
      ]}
      technologies={[
        "Secure Payment Processing",
        "Financial Data Analytics",
        "Blockchain for Finance",
        "AI-Powered Fraud Detection",
        "Secure API Banking",
        "Regulatory Compliance Tools",
        "Digital Banking Platforms",
        "Financial Cloud Solutions",
      ]}
      caseStudies={[
        {
          title: "Credit Union Security Upgrade",
          description:
            "How we helped a regional credit union modernize their security infrastructure while maintaining regulatory compliance.",
          link: "/case-studies",
        },
        {
          title: "Financial Compliance Implementation",
          description: "Implementing a comprehensive compliance framework for a growing investment firm.",
          link: "/case-studies/financial-compliance-implementation",
        },
        {
          title: "Digital Banking Transformation",
          description: "Helping a community bank transition to a modern, secure digital banking platform.",
          link: "/case-studies",
        },
      ]}
      faqs={[
        {
          question: "How do you ensure compliance with financial regulations?",
          answer:
            "We implement comprehensive compliance frameworks tailored to specific financial regulations. Our team stays current with regulatory changes and ensures all solutions meet or exceed compliance requirements through regular audits, documentation, and controls.",
        },
        {
          question: "What security measures do you implement for financial institutions?",
          answer:
            "We deploy multi-layered security including advanced encryption, multi-factor authentication, real-time monitoring, fraud detection systems, secure network architecture, and regular penetration testing specifically designed for financial environments.",
        },
        {
          question: "Can you integrate with our existing core banking system?",
          answer:
            "Yes, we have experience integrating with all major core banking systems. We use secure API connections and follow financial industry standards to ensure seamless data flow while maintaining the highest levels of security.",
        },
        {
          question: "How do you handle disaster recovery for financial institutions?",
          answer:
            "We implement comprehensive disaster recovery solutions with near-zero RPO/RTO targets, including redundant systems, regular testing, and documented recovery procedures that meet regulatory requirements for financial business continuity.",
        },
      ]}
    />
  )
}
