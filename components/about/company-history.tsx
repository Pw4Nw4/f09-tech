"use client"

import { motion } from "framer-motion"
import { Calendar, Award, Users, Building, Rocket } from "lucide-react"

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "F09 Tech was established by brothers Rock and Karl Frederic, offering POS installation and PC building services.",
    icon: Calendar,
    color: "bg-blue-600",
  },
  {
    year: "2021",
    title: "Service Expansion",
    description: "Expanded services to include network installation and firewall setup for small businesses.",
    icon: Rocket,
    color: "bg-purple-600",
  },
  {
    year: "2022",
    title: "Team Growth",
    description: "Grew our team of IT specialists to better serve our expanding client base.",
    icon: Users,
    color: "bg-cyan-600",
  },
  {
    year: "2023",
    title: "Business Partnerships",
    description: "Established key partnerships with technology vendors to enhance our service offerings.",
    icon: Building,
    color: "bg-emerald-600",
  },
  {
    year: "2025",
    title: "Looking Forward",
    description: "Continuing to innovate and expand our services to meet the evolving technology needs of our clients.",
    icon: Award,
    color: "bg-amber-600",
  },
]

export function CompanyHistory() {
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
            Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            From our founding in 2020 to where we are today, we've been on a mission to provide exceptional IT solutions
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`relative mb-12 ${index % 2 === 0 ? "md:ml-auto md:pl-8 md:pr-0 md:text-left" : "md:mr-auto md:pr-8 md:pl-0 md:text-right"} md:w-1/2 px-6`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-1/2 md:left-auto ${index % 2 === 0 ? "md:left-0" : "md:right-0"} top-0 w-8 h-8 rounded-full ${milestone.color} flex items-center justify-center transform -translate-x-1/2 md:translate-x-0 ${index % 2 === 0 ? "md:-translate-x-1/2" : "md:translate-x-1/2"}`}
              >
                <milestone.icon className="h-4 w-4 text-white" />
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{milestone.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
