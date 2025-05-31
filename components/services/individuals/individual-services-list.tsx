"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Laptop, Shield, Wifi, HardDrive, Cpu, Wrench, Monitor, Headphones } from "lucide-react"

const services = [
  {
    id: "pc-repair",
    title: "PC Repair & Maintenance",
    description: "Expert diagnostics and repair services for desktops and laptops",
    icon: Laptop,
    features: [
      "Hardware troubleshooting and repair",
      "Software issue resolution",
      "Performance optimization",
      "Operating system reinstallation",
      "Component upgrades",
    ],
    price: "From $75",
    link: "/services/individuals/pc-repair",
  },
  {
    id: "virus-removal",
    title: "Virus & Malware Removal",
    description: "Complete removal of viruses, malware, and other security threats",
    icon: Shield,
    features: [
      "Comprehensive system scan",
      "Malware and virus removal",
      "Security software installation",
      "System cleanup and optimization",
      "Preventative security measures",
    ],
    price: "From $89",
    link: "/services/individuals/virus-removal",
  },
  {
    id: "home-network",
    title: "Home Network Setup",
    description: "Secure and reliable wireless network installation for your home",
    icon: Wifi,
    features: [
      "Router installation and configuration",
      "Network security setup",
      "Device connection and testing",
      "Wi-Fi optimization",
      "Network troubleshooting",
    ],
    price: "From $129",
    link: "/services/individuals/home-network",
  },
  {
    id: "data-recovery",
    title: "Data Recovery & Backup",
    description: "Recovery of lost data and implementation of backup solutions",
    icon: HardDrive,
    features: [
      "Data recovery from damaged drives",
      "Backup solution implementation",
      "Cloud backup setup",
      "Automated backup scheduling",
      "Data transfer services",
    ],
    price: "From $99",
    link: "/services/individuals/data-recovery",
  },
  {
    id: "pc-building",
    title: "Custom PC Building",
    description: "High-performance custom PCs built to your exact specifications",
    icon: Cpu,
    features: [
      "Custom component selection",
      "Professional assembly",
      "Performance testing",
      "Software installation",
      "Warranty and support",
    ],
    price: "From $199 + parts",
    link: "/services/individuals/pc-building",
  },
  {
    id: "hardware-upgrade",
    title: "Hardware Upgrades",
    description: "Upgrade your existing computer with the latest components",
    icon: Wrench,
    features: [
      "RAM upgrades",
      "Storage upgrades (SSD/HDD)",
      "Graphics card installation",
      "Processor upgrades",
      "Cooling system improvements",
    ],
    price: "From $49 + parts",
    link: "/services/individuals/hardware-upgrade",
  },
  {
    id: "smart-home",
    title: "Smart Home Setup",
    description: "Integration and configuration of smart home devices and systems",
    icon: Monitor,
    features: [
      "Smart device installation",
      "Voice assistant setup",
      "Home automation configuration",
      "Smart security system setup",
      "Troubleshooting and support",
    ],
    price: "From $149",
    link: "/services/individuals/smart-home",
  },
  {
    id: "tech-support",
    title: "Remote Tech Support",
    description: "Expert technical support for all your technology needs",
    icon: Headphones,
    features: [
      "Remote troubleshooting",
      "Software assistance",
      "Email and account setup",
      "Printer and peripheral setup",
      "General tech guidance",
    ],
    price: "From $59/hour",
    link: "/services/individuals/tech-support",
  },
]

export function IndividualServicesList() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950" id="services-list">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Our Services for Individuals
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Comprehensive technology solutions to solve your personal computing challenges
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-xl border border-slate-200 bg-white transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="border-b border-slate-100 p-6 dark:border-slate-800">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <ul className="mb-6 flex-1 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900 dark:text-white">{service.price}</span>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-cyan-200 text-cyan-600 hover:bg-cyan-50 dark:border-cyan-900 dark:text-cyan-400 dark:hover:bg-cyan-950"
                >
                  <Link href={service.link} className="flex items-center justify-center">
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
