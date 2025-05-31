"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { LayoutGrid, Shield, Cloud, Server, Network, Headset, BadgeCheck, BarChart3 } from "lucide-react"
import { useTheme } from "next-themes"

export function EnterpriseServicesList() {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState("all")

  const services = [
    {
      id: 1,
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud solutions for enterprise applications, storage, and computing needs with AWS, Azure, and GCP integration.",
      icon: <Cloud className="h-8 w-8" />,
      category: "cloud",
    },
    {
      id: 2,
      title: "Cybersecurity",
      description:
        "Enterprise-grade security solutions including threat detection, prevention, compliance management, and security audits.",
      icon: <Shield className="h-8 w-8" />,
      category: "security",
    },
    {
      id: 3,
      title: "Server Management",
      description:
        "Complete server infrastructure setup, maintenance, virtualization, clustering, and high-availability configurations.",
      icon: <Server className="h-8 w-8" />,
      category: "infrastructure",
    },
    {
      id: 4,
      title: "Network Infrastructure",
      description:
        "Enterprise networking solutions including WAN/LAN design, implementation, VPN, SD-WAN, and network monitoring.",
      icon: <Network className="h-8 w-8" />,
      category: "infrastructure",
    },
    {
      id: 5,
      title: "Enterprise IT Support",
      description:
        "24/7 enterprise support with dedicated account management, SLA guarantees, and rapid response times.",
      icon: <Headset className="h-8 w-8" />,
      category: "support",
    },
    {
      id: 6,
      title: "Compliance Services",
      description:
        "Comprehensive compliance solutions for GDPR, HIPAA, SOC 2, ISO 27001, and industry-specific regulations.",
      icon: <BadgeCheck className="h-8 w-8" />,
      category: "security",
    },
    {
      id: 7,
      title: "Business Intelligence",
      description:
        "Data analytics, visualization, and reporting solutions to transform enterprise data into actionable insights.",
      icon: <BarChart3 className="h-8 w-8" />,
      category: "cloud",
    },
    {
      id: 8,
      title: "IT Infrastructure Design",
      description:
        "Custom enterprise architecture planning, design, and implementation for optimal performance and scalability.",
      icon: <LayoutGrid className="h-8 w-8" />,
      category: "infrastructure",
    },
  ]

  const filteredServices = activeTab === "all" ? services : services.filter((service) => service.category === activeTab)

  return (
    <section className="py-20" id="services-list">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Enterprise-Grade Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to meet the complex needs of modern enterprises and
            organizations.
          </p>

          <div className="flex flex-wrap justify-center mt-8 gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "all"
                  ? "bg-amber-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab("cloud")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "cloud"
                  ? "bg-amber-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Cloud Services
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "security"
                  ? "bg-amber-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Security Solutions
            </button>
            <button
              onClick={() => setActiveTab("infrastructure")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "infrastructure"
                  ? "bg-amber-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Infrastructure
            </button>
            <button
              onClick={() => setActiveTab("support")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "support"
                  ? "bg-amber-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Enterprise Support
            </button>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl flex flex-col"
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: service.id * 0.1 }}
            >
              <div className="p-3 mb-4 rounded-lg bg-amber-100 dark:bg-amber-900/30 w-fit text-amber-600 dark:text-amber-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{service.description}</p>
              <div className="mt-auto">
                <a
                  href={`/services/enterprise/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
