"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Server, Shield, Cloud, Globe, Network } from "lucide-react"
import { ResponsiveContainer } from "@/components/layout/responsive-container"

export function EnterpriseServicesHero() {
  const { theme } = useTheme()

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-900 dark:to-gray-800 -z-10"></div>

      {/* Animated circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400/20 dark:bg-amber-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-300/20 dark:bg-amber-500/10 rounded-full blur-2xl -z-10"></div>

      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 pattern-dots pattern-amber-500 pattern-bg-white pattern-size-4 pattern-opacity-10 dark:pattern-opacity-5"></div>

      <ResponsiveContainer className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise IT <span className="text-amber-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology services designed for the complex needs of modern enterprises. From cloud
              infrastructure to cybersecurity, we deliver scalable solutions that drive business growth and operational
              excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                Schedule Consultation
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
              <a
                href="#solutions"
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Explore Solutions
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Service Icon Cards */}
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg inline-flex mb-4">
                  <Cloud className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">Cloud Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  AWS, Azure, and GCP managed services with expert migration and optimization.
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg inline-flex mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">Cybersecurity</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Enterprise-grade protection against evolving threats and vulnerabilities.
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg inline-flex mb-4">
                  <Server className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">Server Management</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Virtualization, clustering, and high-availability configurations.
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg inline-flex mb-4">
                  <Network className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">Network Infrastructure</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Enterprise WAN/LAN design, implementation, and management.
                </p>
              </motion.div>
            </div>

            {/* Enterprise clients badge */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 py-3 px-5 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hidden md:flex items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Globe className="h-6 w-6 text-amber-600 mr-2" />
              <span className="font-medium">Trusted by 100+ Enterprise Clients</span>
            </motion.div>
          </motion.div>
        </div>
      </ResponsiveContainer>
    </section>
  )
}
