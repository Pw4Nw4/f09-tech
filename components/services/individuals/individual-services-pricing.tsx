"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

const pricingPlans = [
  {
    title: "Basic Diagnostics",
    price: "$49",
    description: "Initial assessment of computer issues",
    features: [
      "Hardware diagnostics",
      "Software issue identification",
      "Performance evaluation",
      "Written report of findings",
      "Repair recommendations",
    ],
    cta: "Schedule Diagnostics",
    link: "/contact",
    featured: false,
  },
  {
    title: "Complete PC Tune-Up",
    price: "$99",
    description: "Comprehensive optimization for slow computers",
    features: [
      "System cleanup and optimization",
      "Malware scan and removal",
      "Software updates",
      "Disk cleanup and defragmentation",
      "Startup optimization",
      "Basic hardware cleaning",
    ],
    cta: "Book Tune-Up",
    link: "/contact",
    featured: true,
  },
  {
    title: "Home Network Setup",
    price: "$129",
    description: "Complete wireless network installation",
    features: [
      "Router installation and setup",
      "Network security configuration",
      "Device connection (up to 5 devices)",
      "Wi-Fi optimization",
      "Basic troubleshooting training",
    ],
    cta: "Get Started",
    link: "/contact",
    featured: false,
  },
]

export function IndividualServicesPricing() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Popular Service Packages
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Choose from our most requested service packages or contact us for custom solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col rounded-xl border ${
                plan.featured ? "border-cyan-200 dark:border-cyan-800" : "border-slate-200 dark:border-slate-800"
              } bg-white dark:bg-slate-950`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
              )}

              <div
                className={`rounded-t-xl p-6 ${
                  plan.featured
                    ? "bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30"
                    : ""
                }`}
              >
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{plan.title}</h3>
                <div className="mb-2 flex items-baseline">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="ml-1 text-slate-600 dark:text-slate-400">one-time</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{plan.description}</p>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <ul className="mb-6 flex-1 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-500" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.featured
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                      : "bg-white text-slate-900 hover:bg-slate-50 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                  } ${!plan.featured && "border border-slate-200 dark:border-slate-800"}`}
                >
                  <Link href={plan.link}>{plan.cta}</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            Need a custom solution? Contact us for personalized service packages.
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">Contact for Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
