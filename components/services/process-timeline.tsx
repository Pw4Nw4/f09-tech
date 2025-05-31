"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Clipboard, Lightbulb, Cog, BarChart4, CheckCircle2 } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Discovery & Assessment",
    description:
      "We begin by understanding your business objectives, current technology landscape, and challenges to identify opportunities for improvement.",
    icon: Clipboard,
  },
  {
    id: 2,
    title: "Strategy Development",
    description:
      "Based on our assessment, we develop a tailored strategy that aligns with your business goals and addresses your specific needs.",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Our expert team executes the strategy with precision, ensuring minimal disruption to your operations during the transition.",
    icon: Cog,
  },
  {
    id: 4,
    title: "Monitoring & Optimization",
    description:
      "We continuously monitor performance and make data-driven adjustments to optimize results and ensure maximum ROI.",
    icon: BarChart4,
  },
  {
    id: 5,
    title: "Ongoing Support",
    description:
      "Our relationship continues with proactive support, regular reviews, and strategic guidance to adapt to evolving needs.",
    icon: CheckCircle2,
  },
]

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900" ref={containerRef}>
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Our Proven Process
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A systematic approach to delivering exceptional results for your business
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
                <div className="h-6 w-6 rounded-full border-4 border-white bg-gradient-to-r from-cyan-500 to-blue-500 dark:border-slate-900"></div>
              </div>

              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
