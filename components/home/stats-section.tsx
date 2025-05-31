"use client"

import { motion } from "framer-motion"
import { Users, Building, Clock, Award } from "lucide-react"

const stats = [
  {
    icon: Clock,
    value: "5+",
    label: "Years Experience",
    description: "Providing reliable IT solutions since 2020",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    value: "100+",
    label: "Happy Clients",
    description: "Businesses and individuals served",
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
  {
    icon: Building,
    value: "250+",
    label: "Projects Completed",
    description: "From small setups to enterprise solutions",
    color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
  },
  {
    icon: Award,
    value: "99%",
    label: "Client Satisfaction",
    description: "Based on post-project client feedback",
    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
      </div>

      {/* Animated orbs */}
      <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 blur-3xl" />
      <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Our Impact By The Numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Since 2020, we've been helping businesses and individuals with their technology needs
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative"
            >
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-lg font-medium text-slate-200 mb-2">{stat.label}</p>
                <p className="text-slate-400 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
