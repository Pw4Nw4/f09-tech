"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Server, Cloud, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: Shield,
    description: "Comprehensive security solutions to protect your business from evolving threats.",
    features: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "Security Audits",
      "Incident Response",
      "Security Training",
    ],
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
  },
  {
    id: "cloud",
    title: "Cloud Services",
    icon: Cloud,
    description: "Scalable cloud solutions to optimize your infrastructure and reduce costs.",
    features: [
      "Cloud Migration",
      "Infrastructure as a Service",
      "Platform as a Service",
      "Cloud Security",
      "Hybrid Cloud Solutions",
    ],
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-gradient-to-br from-purple-500/10 to-indigo-500/10",
  },
  {
    id: "consulting",
    title: "IT Consulting",
    icon: LineChart,
    description: "Strategic guidance to align your technology with your business objectives.",
    features: [
      "IT Strategy Development",
      "Digital Transformation",
      "Technology Roadmapping",
      "Process Optimization",
      "IT Governance",
    ],
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-amber-500/10 to-orange-500/10",
  },
  {
    id: "managed",
    title: "Managed Services",
    icon: Server,
    description: "Proactive IT management to ensure your systems run smoothly and efficiently.",
    features: [
      "24/7 Monitoring",
      "Help Desk Support",
      "Network Management",
      "System Administration",
      "Backup & Recovery",
    ],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
  },
]

export function ServicesShowcase() {
  const [activeService, setActiveService] = useState(services[0].id)

  const activeServiceData = services.find((service) => service.id === activeService)

  return (
    <section className="bg-white py-24 dark:bg-slate-950" id="services">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Comprehensive IT & Cybersecurity Services
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Tailored solutions to address your most complex technology challenges
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="flex flex-col space-y-2 lg:col-span-1">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={cn(
                  "flex items-center rounded-lg border border-slate-200 p-4 text-left transition-all hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700",
                  activeService === service.id
                    ? "border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-800/50"
                    : "",
                )}
              >
                <service.icon
                  className={cn(
                    "mr-3 h-6 w-6",
                    activeService === service.id
                      ? `text-gradient bg-gradient-to-r ${service.color}`
                      : "text-slate-500 dark:text-slate-400",
                  )}
                />
                <span
                  className={cn(
                    "font-medium",
                    activeService === service.id
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-700 dark:text-slate-300",
                  )}
                >
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            {activeServiceData && (
              <motion.div
                key={activeServiceData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "rounded-xl border border-slate-200 p-8 dark:border-slate-800",
                  activeServiceData.bgColor,
                )}
              >
                <div className="mb-6 flex items-center">
                  <activeServiceData.icon
                    className={`mr-3 h-8 w-8 text-gradient bg-gradient-to-r ${activeServiceData.color}`}
                  />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{activeServiceData.title}</h3>
                </div>

                <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">{activeServiceData.description}</p>

                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  {activeServiceData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900"
                    >
                      <div
                        className={`mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r ${activeServiceData.color}`}
                      >
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="font-medium text-slate-700 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className={`bg-gradient-to-r ${activeServiceData.color} text-white`}>
                  <Link href={`/services#${activeServiceData.id}`}>Learn More</Link>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
