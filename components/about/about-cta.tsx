"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutCTA() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
            Partner with F09 Tech to leverage our expertise and experience for your business success. Let's discuss how
            we can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
