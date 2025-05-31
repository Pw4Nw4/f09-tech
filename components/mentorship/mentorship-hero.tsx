"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { GraduationCap, Users, Award, Lightbulb } from "lucide-react"

export function MentorshipHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 py-12 text-white sm:py-20">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
      <div className="absolute h-full w-full">
        <div className="absolute -left-4 top-10 h-72 w-72 rounded-full bg-blue-500 opacity-20 blur-3xl filter"></div>
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-cyan-400 opacity-20 blur-3xl filter"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-4 sm:space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
              <GraduationCap className="mr-1 h-4 w-4" />
              Launch Your IT Career
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block">Mentorship &</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Internship Program
              </span>
            </h1>

            <p className="max-w-xl text-base text-slate-300 sm:text-lg md:text-xl">
              Gain hands-on experience, professional guidance, and a clear pathway to a successful career in IT and
              cybersecurity.
            </p>

            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <Link href="#apply">Apply Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-600 bg-slate-800/50 text-white hover:bg-slate-700"
              >
                <Link href="#learn-more">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {[
              {
                icon: Users,
                title: "Personalized Mentorship",
                description: "1-on-1 guidance from industry professionals",
              },
              {
                icon: Award,
                title: "Certification Pathways",
                description: "Support for industry-recognized certifications",
              },
              {
                icon: Lightbulb,
                title: "Hands-on Experience",
                description: "Real-world projects and practical skills",
              },
              {
                icon: GraduationCap,
                title: "Career Development",
                description: "Clear roadmap for IT career progression",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg border border-slate-700 bg-slate-800/50 p-4 backdrop-blur-sm"
              >
                <div className="mb-3 w-fit rounded-full bg-cyan-500/20 p-2">
                  <item.icon className="h-5 w-5 text-cyan-400 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300 sm:text-sm">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
