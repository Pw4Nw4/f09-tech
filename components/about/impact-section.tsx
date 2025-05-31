"use client"

import { motion } from "framer-motion"
import { Shield, Server, Clock, Users, Award, Globe } from "lucide-react"

const impactStats = [
  {
    icon: Shield,
    value: "500+",
    label: "Security Incidents Prevented",
    description: "Proactively protecting our clients from cyber threats",
  },
  {
    icon: Server,
    value: "1,200+",
    label: "Servers Managed",
    description: "Ensuring optimal performance and reliability",
  },
  {
    icon: Clock,
    value: "99.9%",
    label: "Uptime Guaranteed",
    description: "Keeping your business running smoothly",
  },
  {
    icon: Users,
    value: "15,000+",
    label: "End Users Supported",
    description: "Providing responsive technical assistance",
  },
  {
    icon: Award,
    value: "25+",
    label: "Industry Certifications",
    description: "Maintaining the highest standards of expertise",
  },
  {
    icon: Globe,
    value: "12+",
    label: "Countries Served",
    description: "Supporting businesses around the world",
  },
]

export function ImpactSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Our Impact</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            We measure our success by the tangible results we deliver to our clients and the positive impact we make in
            the technology landscape.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{stat.label}</p>
              <p className="text-slate-700 dark:text-slate-300">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Community Involvement</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Beyond our client work, we're committed to giving back to the community and advancing the technology
                field:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 text-cyan-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Sponsoring STEM education programs in local schools
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 text-cyan-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Providing pro bono IT services to non-profit organizations
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 text-cyan-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Hosting free cybersecurity workshops for small businesses
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 text-cyan-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Contributing to open-source security projects</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Sustainability Initiatives</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                We're committed to reducing our environmental impact and helping our clients do the same:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 text-cyan-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Carbon-neutral cloud infrastructure recommendations
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 text-cyan-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Energy-efficient IT infrastructure design</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 text-cyan-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Responsible e-waste recycling programs</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 text-cyan-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Remote work solutions that reduce commuting impact
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
