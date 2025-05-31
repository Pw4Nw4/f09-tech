"use client"

import { motion } from "framer-motion"
import { Shield, Code, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FoundersSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
          >
            Meet Our Founders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-400"
          >
            Combining expertise in cybersecurity and software engineering to deliver exceptional IT solutions
          </motion.p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Rock Frederic */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg"
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <Shield className="h-16 w-16 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Rock Frederic</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Co-Founder, IT/Cyber Security</p>
                  <p className="mt-4 text-slate-600 dark:text-slate-400">
                    With 3 years of specialized experience in IT infrastructure and cybersecurity, Rock ensures your
                    systems are secure, efficient, and reliable.
                  </p>
                  <div className="mt-4 flex gap-3 justify-center md:justify-start">
                    <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300">
                      <Shield className="mr-1 h-3 w-3" /> Security
                    </div>
                    <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300">
                      <Award className="mr-1 h-3 w-3" /> Certified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Karl M Frederic */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg"
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <Code className="h-16 w-16 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Karl M Frederic</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">Co-Founder, Software Engineer</p>
                  <p className="mt-4 text-slate-600 dark:text-slate-400">
                    With nearly a decade of software engineering experience, Karl brings technical expertise to develop
                    custom solutions that drive business growth.
                  </p>
                  <div className="mt-4 flex gap-3 justify-center md:justify-start">
                    <div className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm font-medium text-purple-800 dark:text-purple-300">
                      <Code className="mr-1 h-3 w-3" /> Development
                    </div>
                    <div className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm font-medium text-purple-800 dark:text-purple-300">
                      <Award className="mr-1 h-3 w-3" /> 10 Years
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white"
          >
            <Link href="/about">
              Learn More About Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
