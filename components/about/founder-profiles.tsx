"use client"

import { motion } from "framer-motion"
import { Shield, Code, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FounderProfiles() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
          >
            Meet Our Leadership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            The visionary founders behind F09 Tech bringing expertise in IT, cybersecurity, and software engineering
          </motion.p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Rock Frederic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md"
          >
            <div className="p-8">
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 mb-6 flex items-center justify-center">
                  <Shield className="h-20 w-20 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Rock Frederic</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Co-Founder, IT/Cyber Security</p>

                <div className="text-center mb-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    With 3 years of specialized experience in IT infrastructure and cybersecurity, Rock ensures that all
                    client systems are secure, efficient, and reliable. His expertise in network security and
                    infrastructure design has helped numerous businesses protect their digital assets.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Rock's hands-on approach to IT problem-solving and his commitment to staying current with the latest
                    security trends make him an invaluable asset to the F09 Tech team.
                  </p>
                </div>

                <div className="flex space-x-4">
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Karl M Frederic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md"
          >
            <div className="p-8">
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700 mb-6 flex items-center justify-center">
                  <Code className="h-20 w-20 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Karl M Frederic</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">Co-Founder, Software Engineer</p>

                <div className="text-center mb-6">
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    With nearly a decade of software engineering experience, Karl brings technical expertise to develop
                    custom solutions that drive business growth. His deep knowledge of software architecture and
                    development processes enables F09 Tech to deliver robust, scalable applications for clients.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Karl's passion for innovation and problem-solving through technology has been instrumental in
                    expanding F09 Tech's service offerings and establishing the company as a trusted technology partner.
                  </p>
                </div>

                <div className="flex space-x-4">
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
