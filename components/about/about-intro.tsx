"use client"

import { motion } from "framer-motion"

export function AboutIntro() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl mb-6">
              Your Trusted Technology Partner
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              At F09 Tech, we believe that technology should empower your business, not complicate it. Founded by
              brothers Rock and Karl Frederic, our company combines deep expertise in IT infrastructure, cybersecurity,
              and software engineering to deliver comprehensive technology solutions.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              What started as a small operation providing POS installations and PC building services has grown into a
              full-service IT solutions provider. We take pride in our technical expertise, attention to detail, and
              commitment to customer satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-slate-600 dark:text-slate-400">Years in business</div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100+</div>
                <div className="text-slate-600 dark:text-slate-400">Clients served</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
              <div className="relative aspect-[4/3] bg-slate-200 dark:bg-slate-800">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <div className="p-8 text-center">
                    <p className="text-lg font-medium">Office Image</p>
                    <p className="text-sm">Modern workspace with team members collaborating</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
