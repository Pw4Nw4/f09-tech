"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "Acme Corp", logo: "/images/partners/partner-1.png" },
  { name: "Global Tech", logo: "/images/partners/partner-2.png" },
  { name: "Innovate Inc", logo: "/images/partners/partner-3.png" },
  { name: "Future Systems", logo: "/images/partners/partner-4.png" },
  { name: "Secure Solutions", logo: "/images/partners/partner-5.png" },
  { name: "Data Dynamics", logo: "/images/partners/partner-6.png" },
]

export function PartnersSection() {
  return (
    <section className="border-y border-border bg-background py-12">
      <div className="container">
        <div className="text-center">
          <h3 className="mb-8 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Trusted by Industry Leaders
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative h-12 w-32 grayscale transition-all duration-300 hover:grayscale-0 dark:brightness-200 dark:hover:brightness-100"
            >
              <Image
                src={partner.logo || "/placeholder.svg?height=48&width=128"}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
