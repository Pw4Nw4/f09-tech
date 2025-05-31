"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute right-1/3 top-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.2'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.07l2.83-2.83 1.41 1.41L1.41 4.48H0V3.07zM17.76 40l2.83-2.83 1.41 1.41L19.17 40h-1.41zM17.76 22.24l2.83-2.83 1.41 1.41L19.17 22.24h-1.41zM17.76 4.48l2.83-2.83 1.41 1.41L19.17 4.48h-1.41zM35.52 40l2.83-2.83 1.41 1.41L37.93 40h-2.41zM35.52 22.24l2.83-2.83 1.41 1.41L37.93 22.24h-2.41zM35.52 4.48l2.83-2.83 1.41 1.41L37.93 4.48h-2.41zM1.41 19.17l2.83 2.83-1.41 1.41L0 20.59v-1.42h1.41zM19.17 19.17l2.83 2.83-1.41 1.41-2.83-2.83v-1.42h1.41zM36.93 19.17l2.83 2.83-1.41 1.41-2.83-2.83v-1.42h1.41zM1.41 36.93l2.83 2.83-1.41 1.41L0 38.34v-1.41h1.41zM19.17 36.93l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41zM36.93 36.93l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41zM1.41 1.41l2.83 2.83-1.41 1.41L0 2.83V1.41h1.41zM19.17 1.41l2.83 2.83-1.41 1.41-2.83-2.83V1.41h1.41zM36.93 1.41l2.83 2.83-1.41 1.41-2.83-2.83V1.41h1.41z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="mb-8 text-lg text-slate-300 md:text-xl">
            Partner with F09 Tech for innovative solutions that drive growth, enhance security, and optimize your
            technology investments.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg hover:shadow-xl dark:shadow-cyan-700/20 transition-all duration-300 border-0 group"
            >
              <Link href="/contact">
                Schedule a Consultation{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
