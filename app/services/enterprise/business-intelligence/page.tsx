import type { Metadata } from "next"
import { DetailedServiceTemplate } from "@/components/services/enterprise/detailed-service-template"
import { BarChart3, Database, PieChart, Zap, Brain } from "lucide-react"

export const metadata: Metadata = {
  title: "Business Intelligence - F09 Tech",
  description:
    "Data analytics, visualization, and reporting solutions to transform enterprise data into actionable insights.",
}

export default function BusinessIntelligencePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <DetailedServiceTemplate
        title="Business Intelligence"
        description="Data analytics, visualization, and reporting solutions to transform enterprise data into actionable insights."
        category="Cloud Services"
        icon={<BarChart3 className="h-6 w-6" />}
        features={[
          {
            title: "Data Warehouse Design",
            description: "Custom data warehouse architectures optimized for analytics and reporting performance.",
          },
          {
            title: "ETL Process Implementation",
            description: "Robust Extract, Transform, Load processes to integrate data from multiple sources.",
          },
          {
            title: "Interactive Dashboards",
            description: "Custom visualization dashboards that present complex data in intuitive, actionable formats.",
          },
          {
            title: "Predictive Analytics",
            description:
              "Advanced analytics models that forecast trends and outcomes to support proactive decision-making.",
          },
          {
            title: "Real-time Data Processing",
            description: "Stream processing solutions for analyzing and acting on data as it's generated.",
          },
          {
            title: "Custom Reporting Solutions",
            description: "Tailored reporting systems designed around your specific business metrics and KPIs.",
          },
        ]}
        benefits={[
          {
            title: "Data-Driven Decision Making",
            description:
              "Enable informed business decisions based on accurate data rather than intuition or assumptions.",
          },
          {
            title: "Operational Efficiency",
            description: "Identify inefficiencies and optimization opportunities across business processes.",
          },
          {
            title: "Competitive Intelligence",
            description: "Gain insights into market trends, customer behavior, and competitive positioning.",
          },
          {
            title: "Revenue Growth",
            description:
              "Discover new revenue opportunities and optimize existing revenue streams through data analysis.",
          },
          {
            title: "Cost Reduction",
            description: "Identify areas of unnecessary expenditure and optimize resource allocation.",
          },
          {
            title: "Improved Customer Experience",
            description: "Leverage customer data to personalize experiences and improve satisfaction and retention.",
          },
        ]}
        implementation={[
          {
            title: "Requirements Analysis",
            description: "Identify key business questions, metrics, and data sources needed to drive decision-making.",
          },
          {
            title: "Data Architecture Design",
            description: "Design data warehousing and analytics architecture optimized for your specific needs.",
          },
          {
            title: "Data Integration",
            description: "Implement ETL processes to collect, transform, and load data from various sources.",
          },
          {
            title: "Analytics & Visualization Development",
            description: "Create dashboards, reports, and analytics models tailored to your business requirements.",
          },
          {
            title: "User Training & Adoption",
            description: "Train your team on using BI tools effectively and interpreting data correctly.",
          },
          {
            title: "Continuous Improvement",
            description:
              "Regularly refine analytics models and dashboards based on feedback and changing business needs.",
          },
        ]}
        technologies={[
          {
            name: "Microsoft Power BI",
            description:
              "Business analytics service for interactive visualizations and business intelligence capabilities.",
            icon: <BarChart3 className="h-6 w-6" />,
          },
          {
            name: "Tableau",
            description: "Interactive data visualization software focused on business intelligence.",
            icon: <PieChart className="h-6 w-6" />,
          },
          {
            name: "Snowflake",
            description: "Cloud data platform that enables data storage, processing, and analytic solutions.",
            icon: <Database className="h-6 w-6" />,
          },
          {
            name: "Apache Spark",
            description: "Unified analytics engine for large-scale data processing and machine learning.",
            icon: <Zap className="h-6 w-6" />,
          },
          {
            name: "SQL Server Analysis Services",
            description: "Microsoft's OLAP and data mining tool for business intelligence and analytics applications.",
            icon: <Database className="h-6 w-6" />,
          },
          {
            name: "Machine Learning Tools",
            description:
              "Advanced analytics tools that use AI to identify patterns and make predictions from your data.",
            icon: <Brain className="h-6 w-6" />,
          },
        ]}
        useCases={[
          "Sales performance analysis and forecasting for revenue optimization",
          "Customer behavior analysis for improved marketing and retention strategies",
          "Supply chain optimization through inventory and logistics data analysis",
          "Financial analytics for budgeting, forecasting, and cost management",
          "Operational dashboards for real-time monitoring of business processes",
          "Executive dashboards providing high-level views of organizational performance",
        ]}
      />
    </main>
  )
}
