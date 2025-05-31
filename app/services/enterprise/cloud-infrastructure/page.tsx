import type { Metadata } from "next"
import { DetailedServiceTemplate } from "@/components/services/enterprise/detailed-service-template"
import { Cloud, Database, Server, Code } from "lucide-react"

export const metadata: Metadata = {
  title: "Cloud Infrastructure - F09 Tech",
  description:
    "Scalable cloud solutions for enterprise applications, storage, and computing needs with AWS, Azure, and GCP integration.",
}

export default function CloudInfrastructurePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <DetailedServiceTemplate
        title="Cloud Infrastructure"
        description="Scalable cloud solutions for enterprise applications, storage, and computing needs with AWS, Azure, and GCP integration."
        category="Cloud Services"
        icon={<Cloud className="h-6 w-6" />}
        features={[
          {
            title: "Multi-Cloud Deployment",
            description:
              "Deploy applications across multiple cloud providers to maximize reliability and avoid vendor lock-in.",
          },
          {
            title: "Cloud Migration",
            description:
              "Seamless migration of on-premises infrastructure to cloud environments with minimal disruption.",
          },
          {
            title: "Serverless Architecture",
            description:
              "Implement serverless computing models to reduce operational overhead and improve scalability.",
          },
          {
            title: "Containerization",
            description:
              "Deploy applications in containers using Docker and orchestrate with Kubernetes for consistent operations.",
          },
          {
            title: "Auto-Scaling",
            description:
              "Automatically adjust resources based on demand to ensure optimal performance and cost efficiency.",
          },
          {
            title: "Cost Optimization",
            description:
              "Implement best practices and tools to monitor and optimize cloud spending across your organization.",
          },
        ]}
        benefits={[
          {
            title: "Reduced Capital Expenditure",
            description:
              "Shift from capital expenditure to operational expenditure by eliminating the need for physical hardware investments.",
          },
          {
            title: "Improved Scalability",
            description:
              "Easily scale resources up or down based on business needs without lengthy procurement processes.",
          },
          {
            title: "Enhanced Reliability",
            description:
              "Leverage cloud providers' global infrastructure to improve application availability and disaster recovery capabilities.",
          },
          {
            title: "Accelerated Innovation",
            description:
              "Access cutting-edge technologies and services without having to build and maintain them in-house.",
          },
          {
            title: "Global Reach",
            description:
              "Deploy applications closer to your users with global cloud regions to reduce latency and improve user experience.",
          },
          {
            title: "Environmental Sustainability",
            description:
              "Reduce your carbon footprint by leveraging cloud providers' investments in renewable energy and efficient data centers.",
          },
        ]}
        implementation={[
          {
            title: "Assessment & Planning",
            description:
              "Evaluate current infrastructure, application dependencies, and business requirements to create a comprehensive cloud strategy.",
          },
          {
            title: "Architecture Design",
            description:
              "Design cloud architecture that aligns with business goals, considering security, performance, and cost optimization.",
          },
          {
            title: "Migration Execution",
            description:
              "Implement the migration plan using proven methodologies like lift-and-shift, re-platforming, or re-architecting as appropriate.",
          },
          {
            title: "Security Implementation",
            description:
              "Configure security controls, identity management, and compliance measures to protect cloud resources.",
          },
          {
            title: "Optimization & Automation",
            description:
              "Implement automation for deployment, scaling, and operations to maximize efficiency and reduce manual intervention.",
          },
          {
            title: "Monitoring & Management",
            description:
              "Set up comprehensive monitoring, alerting, and management systems to ensure optimal performance and cost control.",
          },
        ]}
        technologies={[
          {
            name: "Amazon Web Services (AWS)",
            description: "Comprehensive cloud platform with 200+ services for computing, storage, databases, and more.",
            icon: <Cloud className="h-6 w-6" />,
          },
          {
            name: "Microsoft Azure",
            description: "Enterprise-grade cloud computing platform with strong integration with Microsoft products.",
            icon: <Cloud className="h-6 w-6" />,
          },
          {
            name: "Google Cloud Platform (GCP)",
            description: "Cloud services with strengths in data analytics, machine learning, and containerization.",
            icon: <Cloud className="h-6 w-6" />,
          },
          {
            name: "Kubernetes",
            description:
              "Container orchestration platform for automating deployment, scaling, and management of applications.",
            icon: <Server className="h-6 w-6" />,
          },
          {
            name: "Terraform",
            description:
              "Infrastructure as Code tool for building, changing, and versioning infrastructure safely and efficiently.",
            icon: <Code className="h-6 w-6" />,
          },
          {
            name: "Docker",
            description: "Platform for developing, shipping, and running applications in containers.",
            icon: <Database className="h-6 w-6" />,
          },
        ]}
        useCases={[
          "Enterprise application hosting with high availability requirements",
          "Development and test environments with rapid provisioning needs",
          "Big data processing and analytics platforms",
          "Disaster recovery and business continuity solutions",
          "Global content delivery and edge computing applications",
          "Hybrid cloud deployments connecting on-premises and cloud resources",
        ]}
      />
    </main>
  )
}
