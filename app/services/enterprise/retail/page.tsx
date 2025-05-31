import type { Metadata } from "next"
import { ShoppingBag, Database, CreditCard, BarChart3, Smartphone } from "lucide-react"
import { IndustrySolutionTemplate } from "@/components/services/enterprise/industry-solution-template"

export const metadata: Metadata = {
  title: "Retail IT Solutions - F09 Tech",
  description:
    "Omnichannel retail technology solutions that connect in-store and online experiences for modern retailers.",
}

export default function RetailSolutionsPage() {
  return (
    <IndustrySolutionTemplate
      industry="Retail"
      title="Retail Technology Solutions"
      description="Omnichannel retail technology solutions that connect in-store and online experiences, optimize inventory management, and enhance customer experiences."
      icon={<ShoppingBag className="h-12 w-12" />}
      challenges={[
        {
          title: "Omnichannel Integration",
          description:
            "Creating seamless customer experiences across physical stores, e-commerce, and mobile platforms.",
        },
        {
          title: "Payment Security",
          description: "Protecting customer payment data while providing convenient checkout experiences.",
        },
        {
          title: "Inventory Management",
          description: "Maintaining accurate inventory visibility across multiple locations and sales channels.",
        },
        {
          title: "Customer Data Utilization",
          description: "Leveraging customer data to personalize experiences while maintaining privacy and compliance.",
        },
      ]}
      solutions={[
        {
          title: "Omnichannel Retail Platforms",
          description:
            "Integrated solutions that connect physical stores, e-commerce, mobile apps, and marketplaces into a cohesive customer experience.",
          icon: <Smartphone className="h-6 w-6" />,
        },
        {
          title: "Secure Payment Processing",
          description:
            "PCI-compliant payment solutions that protect customer data while enabling convenient in-store and online transactions.",
          icon: <CreditCard className="h-6 w-6" />,
        },
        {
          title: "Inventory Management Systems",
          description:
            "Real-time inventory tracking and optimization across all sales channels and locations, reducing stockouts and overstock situations.",
          icon: <Database className="h-6 w-6" />,
        },
        {
          title: "Retail Analytics & Personalization",
          description:
            "Data analytics solutions that provide actionable insights into customer behavior and enable personalized shopping experiences.",
          icon: <BarChart3 className="h-6 w-6" />,
        },
      ]}
      benefits={[
        "Seamless customer experience across all shopping channels",
        "Enhanced protection of customer payment data",
        "Improved inventory accuracy and reduced carrying costs",
        "Better customer insights leading to increased sales",
        "Reduced operational costs through automation",
        "Faster checkout processes and improved customer satisfaction",
        "Scalable infrastructure that grows with your business",
        "Compliance with retail industry regulations and standards",
      ]}
      technologies={[
        "POS Integration Systems",
        "E-commerce Platforms",
        "Mobile Shopping Apps",
        "Retail Analytics Tools",
        "Inventory Management Systems",
        "Customer Data Platforms",
        "Digital Signage Solutions",
        "RFID and IoT Retail Technology",
      ]}
      caseStudies={[
        {
          title: "Local Retailer Ransomware Protection",
          description:
            "How we protected a multi-location retailer from ransomware while improving their overall security posture.",
          link: "/case-studies/local-retailer-ransomware-protection",
        },
        {
          title: "Retail POS System Upgrade",
          description: "Modernizing point-of-sale systems across a retail chain while maintaining business continuity.",
          link: "/case-studies",
        },
        {
          title: "Omnichannel Retail Implementation",
          description:
            "Creating a seamless shopping experience across in-store, online, and mobile channels for a specialty retailer.",
          link: "/case-studies",
        },
      ]}
      faqs={[
        {
          question: "How do you ensure payment security in retail environments?",
          answer:
            "We implement PCI DSS compliant payment solutions with point-to-point encryption, tokenization, and secure payment processing. Our approach protects customer payment data throughout the entire transaction process.",
        },
        {
          question: "Can you integrate with our existing POS system?",
          answer:
            "Yes, we have experience integrating with all major retail POS systems. We use secure API connections and follow retail industry standards to ensure seamless data flow between systems.",
        },
        {
          question: "How do you help retailers create an omnichannel experience?",
          answer:
            "We implement integrated platforms that share customer, inventory, and order data across all channels. This creates a unified view of your business and enables consistent customer experiences regardless of how they shop.",
        },
        {
          question: "What kind of support do you provide for retail businesses?",
          answer:
            "We offer flexible support options including extended hours during peak retail periods, rapid response for critical issues, and preventative maintenance scheduled during off-hours to minimize business disruption.",
        },
      ]}
    />
  )
}
