import type { Metadata } from "next"
import { DetailedServiceTemplate } from "@/components/services/enterprise/detailed-service-template"
import { Layout, Network, Cloud, Server, Shield, RefreshCw } from "lucide-react"

export const metadata: Metadata = {
  title: "IT Infrastructure Design - F09 Tech",
  description:
    "Custom enterprise architecture planning, design, and implementation for optimal performance and scalability.",
}

export default function ITInfrastructureDesignPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <DetailedServiceTemplate
        title="IT Infrastructure Design"
        description="Custom enterprise architecture planning, design, and implementation for optimal performance and scalability."
        category="Infrastructure"
        icon={<Layout className="h-6 w-6" />}
        features={[
          {
            title: "Enterprise Architecture Planning",
            description: "Comprehensive planning that aligns IT infrastructure with business goals and future growth.",
          },
          {
            title: "Infrastructure Assessment",
            description:
              "Thorough evaluation of existing infrastructure to identify improvement opportunities and gaps.",
          },
          {
            title: "Scalable Infrastructure Design",
            description: "Future-proof designs that can grow with your business without requiring complete rebuilds.",
          },
          {
            title: "Hybrid Cloud Architecture",
            description:
              "Optimal combination of on-premises, private cloud, and public cloud resources for your specific needs.",
          },
          {
            title: "Disaster Recovery Infrastructure",
            description: "Resilient designs that ensure business continuity during and after disruptive events.",
          },
          {
            title: "Technology Roadmap Development",
            description: "Strategic planning for technology adoption and infrastructure evolution over time.",
          },
        ]}
        benefits={[
          {
            title: "Optimized Performance",
            description: "Infrastructure designed specifically for your workloads and performance requirements.",
          },
          {
            title: "Cost Efficiency",
            description:
              "Avoid overprovisioning and unnecessary expenditure through right-sized infrastructure design.",
          },
          {
            title: "Business Agility",
            description:
              "Create infrastructure that enables rapid response to changing business needs and opportunities.",
          },
          {
            title: "Reduced Technical Debt",
            description: "Avoid accumulating outdated or problematic technology through strategic planning.",
          },
          {
            title: "Enhanced Security",
            description: "Security built into the infrastructure design rather than added as an afterthought.",
          },
          {
            title: "Simplified Management",
            description: "Streamlined infrastructure that reduces operational complexity and management overhead.",
          },
        ]}
        implementation={[
          {
            title: "Discovery & Assessment",
            description: "Gather information about current infrastructure, business requirements, and future goals.",
          },
          {
            title: "Architecture Planning",
            description:
              "Develop comprehensive architecture designs based on business needs and industry best practices.",
          },
          {
            title: "Design Validation",
            description: "Validate designs through modeling, proof of concepts, and stakeholder reviews.",
          },
          {
            title: "Implementation Planning",
            description: "Create detailed implementation plans that minimize business disruption during transitions.",
          },
          {
            title: "Deployment & Migration",
            description:
              "Execute the implementation plan with careful attention to testing and validation at each stage.",
          },
          {
            title: "Knowledge Transfer & Documentation",
            description:
              "Provide comprehensive documentation and training to ensure effective management of the new infrastructure.",
          },
        ]}
        technologies={[
          {
            name: "Enterprise Servers & Storage",
            description:
              "High-performance computing and storage solutions from leading vendors like Dell, HPE, and NetApp.",
            icon: <Server className="h-6 w-6" />,
          },
          {
            name: "Networking Infrastructure",
            description: "Enterprise-grade networking equipment for high-performance, secure connectivity.",
            icon: <Network className="h-6 w-6" />,
          },
          {
            name: "Cloud Platforms",
            description:
              "Public, private, and hybrid cloud solutions from providers like AWS, Azure, and Google Cloud.",
            icon: <Cloud className="h-6 w-6" />,
          },
          {
            name: "Virtualization Technologies",
            description: "Server, network, and storage virtualization solutions for resource optimization.",
            icon: <Server className="h-6 w-6" />,
          },
          {
            name: "Security Infrastructure",
            description: "Comprehensive security solutions integrated throughout the infrastructure design.",
            icon: <Shield className="h-6 w-6" />,
          },
          {
            name: "Disaster Recovery Solutions",
            description: "Backup, replication, and recovery technologies for business continuity.",
            icon: <RefreshCw className="h-6 w-6" />,
          },
        ]}
        useCases={[
          "Complete IT infrastructure modernization for aging environments",
          "Data center consolidation and optimization projects",
          "Infrastructure design for new business locations or expansions",
          "Cloud migration and hybrid cloud architecture implementation",
          "High-performance computing infrastructure for data-intensive applications",
          "Disaster recovery and business continuity infrastructure design",
        ]}
      />
    </main>
  )
}
