"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Lightbulb, Shield, Cpu } from "lucide-react"

export function InnovationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute right-1/3 top-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">
              Driving Innovation in Technology
            </h2>
            <p className="text-lg text-slate-300">
              Leveraging cutting-edge solutions to solve complex business challenges
            </p>
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div style={{ y, opacity }} className="relative mx-auto h-[500px] w-full max-w-lg lg:mx-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-full w-full">
                <Image
                  src="/images/innovation-illustration.png"
                  alt="Innovation Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">AI-Powered Solutions</h3>
                <p className="text-slate-300">
                  Implementing artificial intelligence to automate processes, gain insights, and enhance
                  decision-making.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Zero-Trust Architecture</h3>
                <p className="text-slate-300">
                  Implementing advanced security frameworks that verify every user and device before granting access.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-orange-500">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Edge Computing</h3>
                <p className="text-slate-300">
                  Bringing computation and data storage closer to the location where it's needed to improve response
                  times.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  <Link href="/about#innovation">
                    Discover Our Approach <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
