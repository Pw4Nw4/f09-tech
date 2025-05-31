"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  Users,
  Store,
  Building2,
  Laptop,
  Shield,
  Wifi,
  HardDrive,
  ShoppingCart,
  BarChart,
  Cloud,
  Lock,
  Server,
  Bot,
  Home,
  PieChart,
  Code,
  ClipboardCheck,
  GitBranch,
  LineChart,
  Briefcase,
  ShieldCheck,
} from "lucide-react"

const categories = [
  {
    id: "individuals",
    title: "For Individuals",
    icon: Users,
    description: "Comprehensive technology solutions for personal and home use",
    services: [
      {
        id: "pc-repair",
        title: "PC Repair & Maintenance",
        description: "Expert diagnostics and repair services for desktops and laptops",
        icon: Laptop,
        link: "/services/individuals/pc-repair",
      },
      {
        id: "virus-removal",
        title: "Virus & Malware Removal",
        description: "Complete removal of viruses, malware, and other security threats",
        icon: Shield,
        link: "/services/individuals/virus-removal",
      },
      {
        id: "home-network",
        title: "Home Network Setup",
        description: "Secure and reliable wireless network installation for your home",
        icon: Wifi,
        link: "/services/individuals/home-network",
      },
      {
        id: "data-recovery",
        title: "Data Recovery & Backup",
        description: "Recovery of lost data and implementation of backup solutions",
        icon: HardDrive,
        link: "/services/individuals/data-recovery",
      },
      {
        id: "personal-cybersecurity",
        title: "Personal Cybersecurity",
        description: "Comprehensive digital protection for your personal devices and data",
        icon: Lock,
        link: "/services/individuals/personal-cybersecurity",
      },
      {
        id: "remote-work-setup",
        title: "Remote Work Solutions",
        description: "Secure and productive home office setup and support",
        icon: Home,
        link: "/services/individuals/remote-work",
      },
      {
        id: "personal-ai",
        title: "Personal AI Assistants",
        description: "Custom AI solutions to enhance your digital lifestyle",
        icon: Bot,
        link: "/services/individuals/personal-ai",
      },
      {
        id: "personal-analytics",
        title: "Personal Data Analytics",
        description: "Insights from your personal data for better decision making",
        icon: BarChart,
        link: "/services/individuals/personal-analytics",
      },
    ],
  },
  {
    id: "retail",
    title: "For Retail",
    icon: Store,
    description: "Specialized IT solutions for retail businesses",
    services: [
      {
        id: "pos-installation",
        title: "POS System Installation",
        description: "Complete point-of-sale system setup and configuration",
        icon: ShoppingCart,
        link: "/services/retail/pos-installation",
      },
      {
        id: "retail-network",
        title: "Retail Network Security",
        description: "Secure network solutions to protect customer and business data",
        icon: Shield,
        link: "/services/retail/network-security",
      },
      {
        id: "inventory-systems",
        title: "Inventory Management Systems",
        description: "Digital inventory tracking and management solutions",
        icon: BarChart,
        link: "/services/retail/inventory-systems",
      },
      {
        id: "retail-it-support",
        title: "Retail IT Support",
        description: "Ongoing technical support for all your retail technology needs",
        icon: Laptop,
        link: "/services/retail/it-support",
      },
      {
        id: "retail-ai",
        title: "AI & Automation",
        description: "Customer service chatbots and automated inventory management",
        icon: Bot,
        link: "/services/retail/ai-automation",
      },
      {
        id: "retail-compliance",
        title: "Retail Compliance",
        description: "PCI DSS compliance and customer data protection frameworks",
        icon: ClipboardCheck,
        link: "/services/retail/compliance",
      },
      {
        id: "retail-analytics",
        title: "Customer Insights",
        description: "Data analytics for customer behavior and inventory optimization",
        icon: PieChart,
        link: "/services/retail/customer-insights",
      },
      {
        id: "retail-software",
        title: "Custom Software",
        description: "Tailored applications and e-commerce integrations",
        icon: Code,
        link: "/services/retail/custom-software",
      },
    ],
  },
  {
    id: "enterprise",
    title: "For Enterprises",
    icon: Building2,
    description: "Enterprise-grade IT solutions for businesses of all sizes",
    services: [
      {
        id: "cloud-solutions",
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and migration services",
        icon: Cloud,
        link: "/services/enterprise/cloud-solutions",
      },
      {
        id: "cybersecurity",
        title: "Cybersecurity",
        description: "Comprehensive security solutions to protect your business",
        icon: Lock,
        link: "/services/enterprise/cybersecurity",
      },
      {
        id: "network-infrastructure",
        title: "Network Infrastructure",
        description: "Design and implementation of robust network systems",
        icon: Wifi,
        link: "/services/enterprise/network-infrastructure",
      },
      {
        id: "server-management",
        title: "Server Management",
        description: "Proactive server monitoring, maintenance, and support",
        icon: Server,
        link: "/services/enterprise/server-management",
      },
      {
        id: "enterprise-ai",
        title: "AI Integration",
        description: "Enterprise AI solutions for workflow automation and efficiency",
        icon: Bot,
        link: "/services/enterprise/ai-integration",
      },
      {
        id: "devops",
        title: "DevOps & Cloud Optimization",
        description: "CI/CD pipelines, containerization, and infrastructure as code",
        icon: GitBranch,
        link: "/services/enterprise/devops",
      },
      {
        id: "enterprise-analytics",
        title: "Data Analytics",
        description: "Advanced business intelligence and predictive analytics",
        icon: LineChart,
        link: "/services/enterprise/data-analytics",
      },
      {
        id: "enterprise-software",
        title: "Custom Software Development",
        description: "Enterprise application development and system integration",
        icon: Code,
        link: "/services/enterprise/custom-software",
      },
      {
        id: "virtual-cio",
        title: "Virtual CIO Services",
        description: "Strategic technology advisory and digital transformation",
        icon: Briefcase,
        link: "/services/enterprise/virtual-cio",
      },
      {
        id: "compliance",
        title: "Compliance & Risk Management",
        description: "Comprehensive compliance programs and risk assessment",
        icon: ShieldCheck,
        link: "/services/enterprise/compliance",
      },
      {
        id: "managed-security",
        title: "Managed Security Services",
        description: "24/7 security monitoring and incident response",
        icon: Shield,
        link: "/services/enterprise/managed-security",
      },
      {
        id: "remote-workforce",
        title: "Remote Workforce Solutions",
        description: "Secure infrastructure for distributed teams",
        icon: Users,
        link: "/services/enterprise/remote-workforce",
      },
    ],
  },
]

export function ServiceCategories() {
  const [activeTab, setActiveTab] = useState("individuals")

  return (
    <section className="bg-white py-24 dark:bg-slate-950" id="service-categories">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Services Tailored to Your Needs
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Explore our comprehensive range of IT services categorized for individuals, retail businesses, and
            enterprises
          </p>
        </div>

        <Tabs defaultValue="individuals" value={activeTab} onValueChange={setActiveTab} className="mx-auto max-w-5xl">
          <TabsList className="mb-8 grid w-full grid-cols-3 gap-4">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4 data-[state=active]:border-transparent data-[state=active]:text-white dark:border-slate-800 dark:bg-slate-950 dark:data-[state=active]:border-transparent"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 data-[state=active]:opacity-100 ${
                    category.id === "individuals"
                      ? "from-cyan-500 to-blue-500"
                      : category.id === "retail"
                        ? "from-purple-500 to-indigo-500"
                        : "from-amber-500 to-orange-500"
                  }`}
                ></div>
                <div className="relative z-10 flex items-center justify-center">
                  <category.icon className="mr-2 h-5 w-5" />
                  <span>{category.title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="focus-visible:outline-none focus-visible:ring-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-6 flex items-center">
                  <div
                    className={`mr-4 flex h-12 w-12 items-center justify-center rounded-lg ${
                      category.id === "individuals"
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                        : category.id === "retail"
                          ? "bg-gradient-to-r from-purple-500 to-indigo-500"
                          : "bg-gradient-to-r from-amber-500 to-orange-500"
                    }`}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{category.description}</p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {category.services.map((service) => (
                    <motion.div
                      key={service.id}
                      whileHover={{ y: -5 }}
                      className="rounded-lg border border-slate-200 bg-white p-5 transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
                    >
                      <div className="mb-4 flex items-center">
                        <div
                          className={`mr-3 flex h-10 w-10 items-center justify-center rounded-full ${
                            category.id === "individuals"
                              ? "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400"
                              : category.id === "retail"
                                ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                                : "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                          }`}
                        >
                          <service.icon className="h-5 w-5" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h4>
                      </div>
                      <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">{service.description}</p>
                      <Link
                        href={service.link}
                        className={`inline-flex items-center text-sm font-medium ${
                          category.id === "individuals"
                            ? "text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                            : category.id === "retail"
                              ? "text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                              : "text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                        }`}
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button
                    asChild
                    className={`${
                      category.id === "individuals"
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                        : category.id === "retail"
                          ? "bg-gradient-to-r from-purple-500 to-indigo-500"
                          : "bg-gradient-to-r from-amber-500 to-orange-500"
                    } text-white`}
                  >
                    <Link href={`/services/${category.id}`}>
                      View All {category.title} Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
