"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const featuredServices = [
  {
    id: "pc-building",
    title: "Custom PC Building",
    description: "High-performance custom PCs built to your exact specifications and budget",
    category: "individuals",
    benefits: [
      "Tailored to your specific needs and budget",
      "High-quality, tested components",
      "Expert assembly and cable management",
      "Performance optimization",
      "Warranty and ongoing support",
    ],
    color: "from-cyan-500 to-blue-500",
    link: "/services/individuals/pc-building",
  },
  {
    id: "pos-installation",
    title: "POS System Installation",
    description: "Complete point-of-sale system setup and configuration for retail businesses",
    category: "retail",
    benefits: [
      "Seamless integration with existing systems",
      "Staff training included",
      "Inventory management setup",
      "Payment processing configuration",
      "Ongoing technical support",
    ],
    color: "from-purple-500 to-indigo-500",
    link: "/services/retail/pos-installation",
  },
  {
    id: "network-installation",
    title: "Network Installation",
    description: "Professional network cabling and infrastructure setup for businesses",
    category: "enterprise",
    benefits: [
      "Structured cabling system design",
      "High-speed data transmission",
      "Scalable for future growth",
      "Reduced network downtime",
      "Compliance with industry standards",
    ],
    color: "from-amber-500 to-orange-500",
    link: "/services/enterprise/network-installation",
  },
]

export function FeaturedServices() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Our Featured Services
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Discover our most popular services that have helped hundreds of clients
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
            >
              <div className={`h-2 w-full rounded-t-xl bg-gradient-to-r ${service.color}`}></div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mb-6 text-slate-600 dark:text-slate-400">{service.description}</p>

                <div className="mb-6 flex-1">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2
                          className={cn(
                            "mr-2 mt-0.5 h-4 w-4 flex-shrink-0",
                            service.category === "individuals"
                              ? "text-cyan-500"
                              : service.category === "retail"
                                ? "text-purple-500"
                                : "text-amber-500",
                          )}
                        />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className={cn(
                    "mt-auto w-full border transition-colors",
                    service.category === "individuals"
                      ? "border-cyan-200 text-cyan-600 hover:bg-cyan-50 dark:border-cyan-900 dark:text-cyan-400 dark:hover:bg-cyan-950"
                      : service.category === "retail"
                        ? "border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-900 dark:text-purple-400 dark:hover:bg-purple-950"
                        : "border-amber-200 text-amber-600 hover:bg-amber-50 dark:border-amber-900 dark:text-amber-400 dark:hover:bg-amber-950",
                  )}
                >
                  <Link href={service.link} className="flex w-full items-center justify-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
