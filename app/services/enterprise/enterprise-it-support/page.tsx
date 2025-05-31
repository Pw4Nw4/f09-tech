import type { Metadata } from "next"
import { DetailedServiceTemplate } from "@/components/services/enterprise/detailed-service-template"
import { HeadsetIcon, Clock, BarChart3, CheckCircle, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "Enterprise IT Support - F09 Tech",
  description: "24/7 enterprise support with dedicated account management, SLA guarantees, and rapid response times.",
}

export default function EnterpriseITSupportPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <DetailedServiceTemplate
        title="Enterprise IT Support"
        description="24/7 enterprise support with dedicated account management, SLA guarantees, and rapid response times."
        category="Enterprise Support"
        icon={<HeadsetIcon className="h-6 w-6" />}
        features={[
          {
            title: "24/7 Technical Support",
            description:
              "Round-the-clock support for critical systems and infrastructure to ensure business continuity.",
          },
          {
            title: "Dedicated Account Management",
            description:
              "Assigned account managers who understand your business and IT environment for personalized service.",
          },
          {
            title: "Service Level Agreements (SLAs)",
            description: "Guaranteed response and resolution times based on incident severity and business impact.",
          },
          {
            title: "Proactive Monitoring",
            description:
              "Continuous monitoring of systems to identify and address issues before they impact your business.",
          },
          {
            title: "IT Helpdesk",
            description: "Comprehensive support for end-users across your organization for day-to-day IT issues.",
          },
          {
            title: "Regular System Health Checks",
            description:
              "Scheduled reviews of your IT infrastructure to identify potential issues and optimization opportunities.",
          },
        ]}
        benefits={[
          {
            title: "Minimized Downtime",
            description: "Reduce business disruption through rapid incident response and resolution.",
          },
          {
            title: "Predictable IT Costs",
            description: "Convert variable IT support expenses into predictable monthly costs for better budgeting.",
          },
          {
            title: "Focus on Core Business",
            description:
              "Free your internal resources to focus on strategic initiatives rather than day-to-day IT issues.",
          },
          {
            title: "Access to Specialized Expertise",
            description:
              "Leverage our team of specialists across various technology domains without having to hire them full-time.",
          },
          {
            title: "Improved End-User Productivity",
            description:
              "Minimize the impact of IT issues on employee productivity through rapid support and resolution.",
          },
          {
            title: "Strategic IT Guidance",
            description:
              "Receive expert advice on technology decisions to align your IT investments with business goals.",
          },
        ]}
        implementation={[
          {
            title: "Support Needs Assessment",
            description:
              "Evaluate your organization's IT support requirements, critical systems, and business priorities.",
          },
          {
            title: "Service Level Definition",
            description:
              "Define appropriate service levels, response times, and escalation procedures based on your needs.",
          },
          {
            title: "Onboarding & Documentation",
            description:
              "Document your IT environment, access requirements, and support procedures for seamless service delivery.",
          },
          {
            title: "Monitoring Implementation",
            description:
              "Deploy monitoring tools and configure alerts to enable proactive support and issue detection.",
          },
          {
            title: "Knowledge Transfer",
            description:
              "Conduct knowledge transfer sessions to familiarize our support team with your specific environment.",
          },
          {
            title: "Continuous Service Improvement",
            description:
              "Regularly review support metrics and feedback to identify and implement service improvements.",
          },
        ]}
        technologies={[
          {
            name: "IT Service Management",
            description:
              "ITIL-aligned service management platforms for efficient incident, problem, and change management.",
            icon: <Settings className="h-6 w-6" />,
          },
          {
            name: "Remote Monitoring & Management",
            description: "Tools for proactive monitoring and management of IT infrastructure and endpoints.",
            icon: <BarChart3 className="h-6 w-6" />,
          },
          {
            name: "Help Desk Systems",
            description: "Ticketing and knowledge management systems for efficient support request handling.",
            icon: <HeadsetIcon className="h-6 w-6" />,
          },
          {
            name: "Remote Support Tools",
            description: "Secure remote access solutions for providing hands-on support without on-site visits.",
            icon: <Settings className="h-6 w-6" />,
          },
          {
            name: "SLA Management",
            description: "Systems for tracking and reporting on service level agreement compliance and performance.",
            icon: <Clock className="h-6 w-6" />,
          },
          {
            name: "Knowledge Base Systems",
            description: "Centralized repositories of technical information and solutions for common issues.",
            icon: <CheckCircle className="h-6 w-6" />,
          },
        ]}
        useCases={[
          "24/7 support for mission-critical systems and infrastructure",
          "End-user support for organizations with limited internal IT resources",
          "Specialized support for complex technologies beyond internal expertise",
          "After-hours and weekend coverage to supplement internal IT teams",
          "Multi-location support for businesses with distributed offices",
          "Comprehensive IT support during business transformation or growth phases",
        ]}
      />
    </main>
  )
}
