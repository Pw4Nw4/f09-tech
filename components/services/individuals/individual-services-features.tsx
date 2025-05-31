"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const features = [
  {
    title: "Expert Technicians",
    description: "Our certified technicians have years of experience solving complex technical issues",
    icon: CheckCircle2,
  },
  {
    title: "Fast Response Times",
    description: "We respond quickly to service requests, often same-day for urgent issues",
    icon: CheckCircle2,
  },
  {
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden fees or surprise charges",
    icon: CheckCircle2,
  },
  {
    title: "Satisfaction Guarantee",
    description: "We're not satisfied until you're completely happy with our service",
    icon: CheckCircle2,
  },
  {
    title: "Convenient Scheduling",
    description: "Flexible appointment times including evenings and weekends",
    icon: CheckCircle2,
  },
  {
    title: "Quality Parts",
    description: "We use only high-quality, reliable components for all repairs and builds",
    icon: CheckCircle2,
  },
]

export function IndividualServicesFeatures() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Why Choose F09 Tech
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We deliver exceptional service with a focus on quality, reliability, and customer satisfaction
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900/30">
                <feature.icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
