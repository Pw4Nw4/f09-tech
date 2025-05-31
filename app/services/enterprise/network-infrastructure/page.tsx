import type { Metadata } from "next"
import { DetailedServiceTemplate } from "@/components/services/enterprise/detailed-service-template"
import { Network, Wifi, Globe, Lock, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Network Infrastructure - F09 Tech",
  description:
    "Enterprise networking solutions including WAN/LAN design, implementation, VPN, SD-WAN, and network monitoring.",
}

export default function NetworkInfrastructurePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <DetailedServiceTemplate
        title="Network Infrastructure"
        description="Enterprise networking solutions including WAN/LAN design, implementation, VPN, SD-WAN, and network monitoring."
        category="Infrastructure"
        icon={<Network className="h-6 w-6" />}
        features={[
          {
            title: "Network Design & Implementation",
            description:
              "Custom network architecture design and deployment tailored to your organization's specific requirements.",
          },
          {
            title: "Software-Defined Networking (SDN)",
            description:
              "Implementation of programmable network architectures that separate control and data planes for greater flexibility.",
          },
          {
            title: "VPN & Secure Remote Access",
            description:
              "Secure remote access solutions that enable employees to connect to corporate resources from anywhere.",
          },
          {
            title: "Network Security & Segmentation",
            description:
              "Implementation of security measures and network segmentation to protect against threats and contain breaches.",
          },
          {
            title: "Quality of Service (QoS)",
            description:
              "Traffic prioritization to ensure critical applications receive the bandwidth they need for optimal performance.",
          },
          {
            title: "Network Monitoring & Troubleshooting",
            description:
              "Comprehensive monitoring and diagnostic tools to identify and resolve network issues quickly.",
          },
        ]}
        benefits={[
          {
            title: "Enhanced Performance",
            description: "Optimize network performance to support business-critical applications and services.",
          },
          {
            title: "Improved Reliability",
            description: "Minimize network downtime through redundant designs and proactive monitoring.",
          },
          {
            title: "Increased Security",
            description: "Protect your organization's data and resources from unauthorized access and cyber threats.",
          },
          {
            title: "Scalable Architecture",
            description: "Build networks that can grow with your business without requiring complete redesigns.",
          },
          {
            title: "Cost Optimization",
            description: "Reduce operational costs through efficient network design and management practices.",
          },
          {
            title: "Support for Digital Transformation",
            description:
              "Create network infrastructure that enables cloud adoption, remote work, and digital innovation.",
          },
        ]}
        implementation={[
          {
            title: "Network Assessment",
            description:
              "Evaluate current network infrastructure, identify bottlenecks, security gaps, and improvement opportunities.",
          },
          {
            title: "Design & Planning",
            description:
              "Develop comprehensive network architecture designs based on business requirements and industry best practices.",
          },
          {
            title: "Implementation",
            description: "Deploy network infrastructure with minimal disruption to business operations.",
          },
          {
            title: "Security Integration",
            description: "Implement security controls, policies, and monitoring to protect network resources.",
          },
          {
            title: "Testing & Validation",
            description:
              "Thoroughly test network performance, security, and reliability to ensure it meets all requirements.",
          },
          {
            title: "Documentation & Knowledge Transfer",
            description:
              "Provide detailed documentation and training to ensure your team can effectively manage the network.",
          },
        ]}
        technologies={[
          {
            name: "Cisco Networking",
            description: "Enterprise-grade networking equipment and software for routing, switching, and security.",
            icon: <Network className="h-6 w-6" />,
          },
          {
            name: "Juniper Networks",
            description: "High-performance networking solutions for routing, switching, and security.",
            icon: <Network className="h-6 w-6" />,
          },
          {
            name: "SD-WAN",
            description: "Software-defined wide area networking for simplified management and improved performance.",
            icon: <Globe className="h-6 w-6" />,
          },
          {
            name: "Wireless Networking",
            description: "Enterprise Wi-Fi solutions for secure, high-performance wireless connectivity.",
            icon: <Wifi className="h-6 w-6" />,
          },
          {
            name: "Network Security",
            description: "Dedicated security devices including firewalls, IPS/IDS, and secure web gateways.",
            icon: <Lock className="h-6 w-6" />,
          },
          {
            name: "Network Monitoring",
            description: "Solutions for monitoring network performance, availability, and security in real-time.",
            icon: <BarChart3 className="h-6 w-6" />,
          },
        ]}
        useCases={[
          "Enterprise campus network modernization for improved performance and security",
          "Multi-site connectivity for businesses with distributed locations",
          "Secure remote access solutions for hybrid and remote work environments",
          "Network segmentation for improved security and compliance",
          "High-density wireless deployments for corporate offices and facilities",
          "SD-WAN implementation for optimized cloud application performance",
        ]}
      />
    </main>
  )
}
