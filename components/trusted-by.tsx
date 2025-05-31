"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  { name: "Acme Corp", logo: "/images/client-1.png" },
  { name: "Global Tech", logo: "/images/client-2.png" },
  { name: "Innovate Inc", logo: "/images/client-3.png" },
  { name: "Future Systems", logo: "/images/client-4.png" },
  { name: "Secure Solutions", logo: "/images/client-5.png" },
  { name: "Data Dynamics", logo: "/images/client-6.png" },
]

export function TrustedBy() {
  return (
    <section className="border-b border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="container">
        <div className="text-center">
          <h3 className="mb-8 text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Trusted by Industry Leaders
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative h-12 w-32 grayscale transition-all duration-300 hover:grayscale-0 dark:brightness-200 dark:hover:brightness-100"
            >
              <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
