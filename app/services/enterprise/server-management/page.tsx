import type { Metadata } from "next"
import { DetailedServiceTemplate } from "@/components/services/enterprise/detailed-service-template"
import { Server, HardDrive, RefreshCw, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Server Management - F09 Tech",
  description:
    "Complete server infrastructure setup, maintenance, virtualization, clustering, and high-availability configurations.",
}

export default function ServerManagementPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <DetailedServiceTemplate
        title="Server Management"
        description="Complete server infrastructure setup, maintenance, virtualization, clustering, and high-availability configurations."
        category="Infrastructure"
        icon={<Server className="h-6 w-6" />}
        features={[
          {
            title: "Server Virtualization",
            description:
              "Consolidate physical servers into virtual machines to improve resource utilization and reduce costs.",
          },
          {
            title: "High-Availability Clustering",
            description:
              "Configure server clusters to eliminate single points of failure and ensure continuous service availability.",
          },
          {
            title: "Disaster Recovery Planning",
            description:
              "Develop and implement comprehensive disaster recovery strategies to minimize downtime during outages.",
          },
          {
            title: "Server Monitoring",
            description:
              "Implement 24/7 monitoring of server health, performance, and availability with automated alerting.",
          },
          {
            title: "Performance Optimization",
            description: "Tune server configurations to maximize performance for specific workloads and applications.",
          },
          {
            title: "Capacity Planning",
            description:
              "Analyze usage trends and forecast future resource requirements to plan for growth effectively.",
          },
        ]}
        benefits={[
          {
            title: "Improved Reliability",
            description:
              "Minimize unplanned downtime through proactive monitoring, maintenance, and high-availability configurations.",
          },
          {
            title: "Cost Efficiency",
            description:
              "Optimize hardware utilization and reduce power consumption through virtualization and consolidation.",
          },
          {
            title: "Enhanced Performance",
            description:
              "Ensure applications run at peak performance through proper server configuration and resource allocation.",
          },
          {
            title: "Simplified Management",
            description: "Streamline server administration with centralized management tools and automated processes.",
          },
          {
            title: "Scalable Infrastructure",
            description: "Easily scale server resources to accommodate business growth and changing workload demands.",
          },
          {
            title: "Reduced Recovery Time",
            description:
              "Minimize business disruption with rapid recovery capabilities in the event of hardware failures or disasters.",
          },
        ]}
        implementation={[
          {
            title: "Infrastructure Assessment",
            description:
              "Evaluate current server infrastructure, workloads, and business requirements to identify improvement opportunities.",
          },
          {
            title: "Architecture Design",
            description:
              "Design server architecture that balances performance, reliability, scalability, and cost considerations.",
          },
          {
            title: "Implementation & Migration",
            description:
              "Deploy new server infrastructure and migrate existing workloads with minimal disruption to operations.",
          },
          {
            title: "Monitoring Configuration",
            description:
              "Set up comprehensive monitoring systems to track server health, performance metrics, and resource utilization.",
          },
          {
            title: "Documentation & Knowledge Transfer",
            description:
              "Create detailed documentation and provide training to ensure your team can effectively manage the environment.",
          },
          {
            title: "Ongoing Management & Support",
            description:
              "Provide continuous management, maintenance, and support to ensure optimal server performance and reliability.",
          },
        ]}
        technologies={[
          {
            name: "VMware vSphere",
            description:
              "Enterprise virtualization platform for transforming data centers into cloud computing infrastructures.",
            icon: <Server className="h-6 w-6" />,
          },
          {
            name: "Microsoft Hyper-V",
            description: "Native hypervisor for creating and managing virtual machines on Windows Server environments.",
            icon: <Server className="h-6 w-6" />,
          },
          {
            name: "Windows Server",
            description: "Microsoft's server operating system with extensive enterprise features and capabilities.",
            icon: <HardDrive className="h-6 w-6" />,
          },
          {
            name: "Linux (Various Distributions)",
            description:
              "Open-source operating systems known for stability, security, and flexibility in server environments.",
            icon: <HardDrive className="h-6 w-6" />,
          },
          {
            name: "Monitoring Solutions",
            description: "Enterprise-class monitoring solutions for servers, networks, and applications.",
            icon: <BarChart3 className="h-6 w-6" />,
          },
          {
            name: "Backup & Recovery",
            description: "Comprehensive data protection and disaster recovery solution for virtual environments.",
            icon: <RefreshCw className="h-6 w-6" />,
          },
        ]}
        useCases={[
          "Enterprise application hosting requiring high reliability and performance",
          "Database server optimization for mission-critical business applications",
          "Consolidation of legacy physical servers into a virtualized environment",
          "Implementation of disaster recovery solutions for business continuity",
          "Server infrastructure modernization to support digital transformation initiatives",
          "High-performance computing clusters for data-intensive applications",
        ]}
      />
    </main>
  )
}
