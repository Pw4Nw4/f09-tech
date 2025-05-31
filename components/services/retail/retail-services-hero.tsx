"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShoppingBag, CreditCard, ShieldCheck, BarChart3 } from "lucide-react"

export function RetailServicesHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950/30" />

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, purple 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 opacity-20 blur-3xl dark:from-purple-800 dark:to-pink-800"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 8,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 opacity-20 blur-3xl dark:from-blue-800 dark:to-purple-800"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 10,
          ease: "easeInOut",
        }}
      />

      <div className="container relative px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm w-fit dark:bg-purple-800/30">
              <span className="text-purple-800 dark:text-purple-300">Retail Technology Solutions</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Elevate Your <span className="text-purple-600 dark:text-purple-400">Retail Business</span> with Modern
              Technology
            </h1>

            <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Comprehensive IT solutions designed specifically for retail businesses. From point-of-sale systems to
              inventory management, we provide the technology infrastructure to help your retail business thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Schedule a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-400 dark:hover:bg-purple-950/50"
              >
                View Service Packages
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                icon: <ShoppingBag className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                title: "POS Systems",
                description: "Modern point-of-sale solutions for efficient checkout experiences",
              },
              {
                icon: <CreditCard className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                title: "Payment Processing",
                description: "Secure and reliable payment processing integration",
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                title: "Network Security",
                description: "Protect customer data and business information",
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                title: "Inventory Management",
                description: "Real-time tracking and automated reordering systems",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 flex flex-col space-y-3 dark:bg-gray-900 dark:border-purple-800/20"
              >
                <div className="rounded-full p-2 bg-purple-50 w-fit dark:bg-purple-900/20">{item.icon}</div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
