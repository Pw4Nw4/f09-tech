import type { Metadata } from "next"
import { Building2, Shield, Database, Cpu, Cog } from "lucide-react"
import { IndustrySolutionTemplate } from "@/components/services/enterprise/industry-solution-template"

export const metadata: Metadata = {
  title: "Manufacturing IT Solutions - F09 Tech",
  description:
    "IT solutions designed for manufacturing environments, supporting operational technology integration and factory floor automation.",
}

export default function ManufacturingSolutionsPage() {
  return (
    <IndustrySolutionTemplate
      industry="Manufacturing"
      title="Manufacturing Technology Solutions"
      description="IT solutions designed specifically for manufacturing environments, supporting operational technology integration, supply chain management, and factory floor automation."
      icon={<Building2 className="h-12 w-12" />}
      challenges={[
        {
          title: "OT/IT Convergence",
          description: "Securely integrating operational technology (OT) with information technology (IT) systems.",
        },
        {
          title: "Production Continuity",
          description: "Ensuring technology systems support continuous manufacturing operations with minimal downtime.",
        },
        {
          title: "Supply Chain Visibility",
          description: "Creating end-to-end visibility across complex manufacturing supply chains.",
        },
        {
          title: "Legacy Equipment Integration",
          description: "Connecting older manufacturing equipment with modern digital systems.",
        },
      ]}
      solutions={[
        {
          title: "Industrial IoT Implementation",
          description:
            "Secure and reliable Industrial Internet of Things (IIoT) solutions that connect manufacturing equipment, monitor performance, and enable predictive maintenance.",
          icon: <Cpu className="h-6 w-6" />,
        },
        {
          title: "Manufacturing Execution Systems",
          description:
            "Implementation and support for MES solutions that optimize production processes, quality control, and resource management.",
          icon: <Cog className="h-6 w-6" />,
        },
        {
          title: "OT Security Solutions",
          description:
            "Specialized security frameworks designed for operational technology environments, protecting critical manufacturing systems from cyber threats.",
          icon: <Shield className="h-6 w-6" />,
        },
        {
          title: "Supply Chain Integration",
          description:
            "End-to-end supply chain visibility solutions that connect suppliers, production, and distribution into a cohesive digital ecosystem.",
          icon: <Database className="h-6 w-6" />,
        },
      ]}
      benefits={[
        "Increased production efficiency and reduced downtime",
        "Enhanced visibility into manufacturing operations",
        "Improved product quality through better process control",
        "Reduced maintenance costs through predictive analytics",
        "Better integration between factory floor and business systems",
        "Enhanced security for operational technology",
        "Improved supply chain resilience and visibility",
        "Data-driven decision making for manufacturing operations",
      ]}
      technologies={[
        "Industrial IoT Platforms",
        "Manufacturing Execution Systems",
        "OT Security Solutions",
        "Digital Twin Technology",
        "Predictive Maintenance Systems",
        "Supply Chain Visibility Tools",
        "Industrial Edge Computing",
        "Manufacturing Analytics",
      ]}
      caseStudies={[
        {
          title: "Automotive Manufacturer IoT Implementation",
          description:
            "Implementing an Industrial IoT solution for a major automotive parts manufacturer to improve production efficiency.",
          link: "/case-studies",
        },
        {
          title: "Food Processing Plant Security",
          description:
            "Securing operational technology in a food processing facility while maintaining production continuity.",
          link: "/case-studies",
        },
        {
          title: "Manufacturing ERP Integration",
          description:
            "Integrating shop floor systems with enterprise resource planning for a complete manufacturing overview.",
          link: "/case-studies",
        },
      ]}
      faqs={[
        {
          question: "How do you secure manufacturing operational technology?",
          answer:
            "We implement specialized OT security frameworks that include network segmentation, continuous monitoring, secure remote access, and threat detection specifically designed for industrial control systems and manufacturing environments.",
        },
        {
          question: "Can you integrate older manufacturing equipment with modern systems?",
          answer:
            "Yes, we specialize in connecting legacy manufacturing equipment using industrial gateways, protocol converters, and custom integration solutions that bridge the gap between older operational technology and modern digital systems.",
        },
        {
          question: "How do you minimize production disruption during implementation?",
          answer:
            "We use phased implementation approaches, extensive testing in non-production environments, and carefully planned cutover strategies that minimize or eliminate production downtime during technology deployments.",
        },
        {
          question: "What kind of support do you provide for manufacturing environments?",
          answer:
            "We offer 24/7/365 support with rapid response times specifically designed for manufacturing operations. Our support team understands both IT and OT environments and the critical nature of production systems.",
        },
      ]}
    />
  )
}
