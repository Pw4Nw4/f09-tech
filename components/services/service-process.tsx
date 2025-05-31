"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { PhoneCall, ClipboardList, Wrench, CheckCircle2, CreditCard } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Initial Consultation",
    description:
      "We begin with a thorough discussion of your needs and requirements to understand your specific situation.",
    icon: PhoneCall,
  },
  {
    id: 2,
    title: "Assessment & Diagnosis",
    description:
      "Our technicians perform a comprehensive assessment to identify issues and determine the best solution.",
    icon: ClipboardList,
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "We execute the agreed-upon solution with precision and attention to detail, ensuring minimal disruption.",
    icon: Wrench,
  },
  {
    id: 4,
    title: "Testing & Quality Assurance",
    description:
      "Every implementation undergoes rigorous testing to ensure everything works perfectly before completion.",
    icon: CheckCircle2,
  },
  {
    id: 5,
    title: "Support & Follow-up",
    description: "We provide ongoing support and follow up to ensure your continued satisfaction with our services.",
    icon: CreditCard,
  },
]

export function ServiceProcess() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section className="bg-white py-24 dark:bg-slate-950" ref={containerRef}>
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Our Service Process
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A systematic approach to delivering exceptional results for every client
          </p>
        </div>

        <motion.div style={{ opacity, y }} className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-500 to-blue-500"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                <div
                  className={`mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 ${
                    index % 2 === 0 ? "ml-auto" : ""
                  }`}
                >
                  <step.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  {step.id}. {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
              </div>

              <div className="absolute left-1/2 top-0 flex -translate-x-1/2 transform items-center justify-center">
                <div className="h-6 w-6 rounded-full border-4 border-white bg-gradient-to-r from-cyan-500 to-blue-500 dark:border-slate-950"></div>
              </div>

              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
