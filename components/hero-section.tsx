"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Server, Zap } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
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
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              <span className="block">Innovative</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                IT & Cybersecurity
              </span>
              <span className="block">Solutions</span>
            </h1>
            <p className="mb-8 text-lg text-slate-300 md:text-xl">
              Empowering businesses with cutting-edge technology and expert guidance to navigate the digital landscape
              securely and efficiently.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto h-[400px] w-full max-w-lg lg:mx-0"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-full w-full">
                <Image
                  src="/images/hero-illustration.png"
                  alt="Cybersecurity Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-6 backdrop-blur">
            <Shield className="mb-4 h-10 w-10 text-cyan-400" />
            <h3 className="mb-2 text-xl font-semibold text-white">Advanced Security</h3>
            <p className="text-slate-300">Enterprise-grade protection for businesses of all sizes.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-6 backdrop-blur">
            <Server className="mb-4 h-10 w-10 text-cyan-400" />
            <h3 className="mb-2 text-xl font-semibold text-white">Cloud Solutions</h3>
            <p className="text-slate-300">Scalable infrastructure that grows with your business.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-6 backdrop-blur">
            <Zap className="mb-4 h-10 w-10 text-cyan-400" />
            <h3 className="mb-2 text-xl font-semibold text-white">Digital Transformation</h3>
            <p className="text-slate-300">Modernize your business with cutting-edge technology.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
