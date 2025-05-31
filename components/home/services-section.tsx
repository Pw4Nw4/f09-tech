"use client"

import { motion } from "framer-motion"
import { Monitor, Server, Shield, Cpu, Network, Lock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Monitor,
    title: "POS Installation",
    description:
      "Complete point-of-sale system setup, configuration, and staff training for retail and hospitality businesses.",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    icon: Cpu,
    title: "PC Building",
    description:
      "Custom PC building services for individuals and businesses, tailored to your specific performance needs.",
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
  {
    icon: Network,
    title: "Network Installation",
    description: "Professional cable installation and network setup to ensure reliable, high-speed connectivity.",
    color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
  },
  {
    icon: Shield,
    title: "Firewall Setup",
    description: "Robust firewall configuration to protect your business from cyber threats and unauthorized access.",
    color: "bg-gradient-to-br from-red-500 to-red-600",
  },
  {
    icon: Server,
    title: "Server Management",
    description:
      "Comprehensive server setup, maintenance, and monitoring to keep your business operations running smoothly.",
    color: "bg-gradient-to-br from-amber-500 to-amber-600",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Advanced security solutions to protect your digital assets, data, and infrastructure from threats.",
    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Comprehensive IT solutions to power your business with cutting-edge technology and security
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
