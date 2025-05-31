"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const technologies = [
  {
    category: "Security",
    id: "security",
    description: "Enterprise-grade security solutions we implement to protect your business",
    items: [
      { name: "Palo Alto Networks", logo: "/images/tech/paloalto.png" },
      { name: "CrowdStrike", logo: "/images/tech/crowdstrike.png" },
      { name: "Okta", logo: "/images/tech/okta.png" },
      { name: "Cloudflare", logo: "/images/tech/cloudflare.png" },
    ],
  },
  {
    category: "Cloud",
    id: "cloud",
    description: "Leading cloud platforms we leverage for scalable, reliable infrastructure",
    items: [
      { name: "AWS", logo: "/images/tech/aws.png" },
      { name: "Microsoft Azure", logo: "/images/tech/azure.png" },
      { name: "Google Cloud", logo: "/images/tech/gcp.png" },
      { name: "Digital Ocean", logo: "/images/tech/digitalocean.png" },
    ],
  },
  {
    category: "Monitoring",
    id: "monitoring",
    description: "Advanced monitoring tools we use to ensure optimal system performance",
    items: [
      { name: "Datadog", logo: "/images/tech/datadog.png" },
      { name: "New Relic", logo: "/images/tech/newrelic.png" },
      { name: "Prometheus", logo: "/images/tech/prometheus.png" },
      { name: "Grafana", logo: "/images/tech/grafana.png" },
    ],
  },
]

export function TechShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900" ref={containerRef}>
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Cutting-Edge Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We partner with industry leaders to deliver best-in-class solutions
          </p>
        </div>

        <motion.div style={{ y }} className="mx-auto max-w-4xl">
          <Tabs defaultValue="security" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              {technologies.map((tech) => (
                <TabsTrigger
                  key={tech.id}
                  value={tech.id}
                  className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                >
                  {tech.category}
                </TabsTrigger>
              ))}
            </TabsList>
            {technologies.map((tech) => (
              <TabsContent key={tech.id} value={tech.id}>
                <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                  <p className="mb-8 text-center text-slate-600 dark:text-slate-400">{tech.description}</p>
                  <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {tech.items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex flex-col items-center justify-center"
                      >
                        <div className="relative mb-4 h-16 w-16">
                          <Image
                            src={item.logo || "/placeholder.svg?height=64&width=64"}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h3 className="text-center text-sm font-medium text-slate-900 dark:text-white">{item.name}</h3>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
