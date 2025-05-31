"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_0.5px,_transparent_1px)] bg-[length:20px_20px]" />
          </div>

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
              >
                Ready to Transform Your IT Infrastructure?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-lg text-white/90 md:text-xl"
              >
                Partner with F09 Tech for expert IT solutions tailored to your business needs. From network installation
                to cybersecurity, we've got you covered.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                  <Link href="/contact">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
