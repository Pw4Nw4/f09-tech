"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Users, Store, Building2 } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 md:py-32">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-services" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 0h40v40H0z" fill="none" />
              <path d="M0 0h1v1H0z" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-services)" />
        </svg>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Tailored{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              IT Solutions
            </span>{" "}
            for Every Need
          </h1>
          <p className="mb-8 text-lg text-slate-300 md:text-xl">
            From individual PC repairs to enterprise-level cybersecurity, we provide comprehensive technology services
            customized for your specific requirements.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
              <Link href="#service-categories">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800">
              <Link href="/contact">Request Consultation</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {[
            {
              icon: Users,
              title: "For Individuals",
              description: "PC repairs, virus removal, home network setup, and more for personal technology needs.",
              link: "/services/individuals",
              color: "from-cyan-500 to-blue-500",
            },
            {
              icon: Store,
              title: "For Retail",
              description: "POS installation, network security, and IT infrastructure solutions for retail businesses.",
              link: "/services/retail",
              color: "from-purple-500 to-indigo-500",
            },
            {
              icon: Building2,
              title: "For Enterprises",
              description: "Cloud solutions, cybersecurity, and managed IT services for businesses of all sizes.",
              link: "/services/enterprise",
              color: "from-amber-500 to-orange-500",
            },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col rounded-xl border border-slate-800 bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-6 backdrop-blur transition-all hover:border-slate-700"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r p-0.5 ${category.color}`}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{category.title}</h3>
              <p className="mb-4 flex-grow text-sm text-slate-300">{category.description}</p>
              <Link
                href={category.link}
                className="inline-flex items-center text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
              >
                View Services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
