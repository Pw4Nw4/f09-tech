"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Laptop, Shield, Wifi, HardDrive } from "lucide-react"

export function IndividualServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 py-24 md:py-32">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-individual" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 0h40v40H0z" fill="none" />
              <path d="M0 0h1v1H0z" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-individual)" />
        </svg>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"></div>
        <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            IT Services for{" "}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Individuals</span>
          </h1>
          <p className="mb-8 text-lg text-cyan-100 md:text-xl">
            Professional technology solutions for your personal and home computing needs
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-blue-50">
              <Link href="#services-list">
                View Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-cyan-200 text-white hover:bg-cyan-700">
              <Link href="/contact">Request Service</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            { icon: Laptop, title: "PC Repair" },
            { icon: Shield, title: "Virus Removal" },
            { icon: Wifi, title: "Home Network" },
            { icon: HardDrive, title: "Data Recovery" },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="flex flex-col items-center rounded-xl border border-cyan-500/30 bg-white/10 p-4 text-center backdrop-blur"
            >
              <div className="mb-3 rounded-full bg-white/20 p-3">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-sm font-medium text-white md:text-base">{service.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
