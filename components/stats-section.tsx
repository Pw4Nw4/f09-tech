"use client"

import { useEffect } from "react"

import { useState } from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, Users, Award, Clock } from "lucide-react"

const stats = [
  {
    id: 1,
    value: 99.9,
    symbol: "%",
    label: "Uptime Guarantee",
    description: "For our managed services clients",
    icon: Clock,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    value: 200,
    symbol: "+",
    label: "Clients Protected",
    description: "Across various industries",
    icon: Shield,
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 3,
    value: 15,
    symbol: "+",
    label: "Years Experience",
    description: "In IT and cybersecurity",
    icon: Award,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    value: 24,
    symbol: "/7",
    label: "Support Available",
    description: "For enterprise clients",
    icon: Users,
    color: "from-emerald-500 to-teal-500",
  },
]

export function StatsSection() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Trusted by Businesses Nationwide
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Our track record speaks for itself</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: stat.id * 0.1 }}
      className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950"
    >
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${stat.color}`}>
        <stat.icon className="h-6 w-6 text-white" />
      </div>
      <div className="flex items-baseline">
        <CountUp value={stat.value} className="text-4xl font-bold text-slate-900 dark:text-white" />
        <span className="text-2xl font-bold text-slate-900 dark:text-white">{stat.symbol}</span>
      </div>
      <h3 className="mb-1 text-lg font-semibold text-slate-900 dark:text-white">{stat.label}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">{stat.description}</p>
    </motion.div>
  )
}

function CountUp({ value, className }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const end = Number.parseInt(value.toString().substring(0, 3))
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      setCount(Math.min(start, end))

      if (start >= end) {
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className={className}>
      {Math.floor(count)}
    </span>
  )
}
