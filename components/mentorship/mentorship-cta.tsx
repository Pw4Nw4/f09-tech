"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export function MentorshipCTA() {
  const benefits = [
    "Hands-on experience with real projects",
    "One-on-one mentorship from industry professionals",
    "Clear pathway to certifications and career advancement",
    "Access to professional tools and resources",
    "Networking opportunities with industry partners",
    "Potential for job placement after program completion",
  ]

  return (
    <section id="apply" className="py-16 bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 text-white sm:py-20">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                Ready to Launch Your IT Career?
              </h2>
              <p className="mt-3 text-sm text-slate-300 sm:mt-4 sm:text-base md:text-lg">
                Apply to our mentorship program today and take the first step toward a rewarding career in IT and
                cybersecurity.
              </p>

              <ul className="mt-6 space-y-2 sm:mt-8 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-cyan-400 sm:mr-3 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    <span className="text-xs sm:text-sm md:text-base">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 backdrop-blur-sm sm:p-6 md:p-8"
            >
              <h3 className="text-xl font-bold sm:text-2xl">Application Process</h3>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                Our application process is simple and straightforward. Get started today!
              </p>

              <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
                {[
                  { step: "1", text: "Complete the online application form" },
                  { step: "2", text: "Submit your resume and background information" },
                  { step: "3", text: "Schedule an interview with our team" },
                  { step: "4", text: "Receive your acceptance decision" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white sm:h-7 sm:w-7 md:h-8 md:w-8">
                      <span className="text-xs sm:text-sm">{item.step}</span>
                    </div>
                    <p className="ml-3 pt-0.5 text-xs sm:ml-4 sm:text-sm md:text-base">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs sm:text-sm"
                >
                  <Link href="/mentorship/apply">
                    Apply Now
                    <ArrowRight className="ml-1 h-3 w-3 sm:ml-2 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-slate-600 bg-transparent text-white hover:bg-slate-700 text-xs sm:text-sm"
                >
                  <Link href="/contact">Contact Us for More Information</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
