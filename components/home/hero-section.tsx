"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Server, Monitor, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
      </div>

      {/* Animated orbs */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              <span className="block">Modern IT Solutions</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                For The Digital Age
              </span>
            </h1>
            <p className="mb-8 text-lg text-slate-300 md:text-xl">
              Providing expert IT infrastructure, cybersecurity, and software solutions since 2020. From POS systems to
              network installations, we build technology that powers your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0"
                asChild
              >
                <Link href="/get-started">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 hover:text-white"
              >
                Our Services
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[500px]">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: "Cybersecurity", color: "from-blue-500 to-blue-700" },
                  { icon: Server, title: "Network Installation", color: "from-cyan-500 to-cyan-700" },
                  { icon: Monitor, title: "POS Systems", color: "from-indigo-500 to-indigo-700" },
                  { icon: Network, title: "PC Building", color: "from-purple-500 to-purple-700" },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex flex-col items-center justify-center rounded-xl bg-slate-800/50 backdrop-blur-sm p-6 border border-slate-700"
                  >
                    <div className={`rounded-full p-3 mb-3 bg-gradient-to-br ${service.color}`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-medium">{service.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
