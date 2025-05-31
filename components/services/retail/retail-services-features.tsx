"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Clock, CreditCard, HeartHandshake, ShieldCheck, Truck } from "lucide-react"

export function RetailServicesFeatures() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-purple-500" />,
      title: "PCI DSS Compliance",
      description:
        "Ensure your retail business meets all payment card industry data security standards to protect customer information.",
    },
    {
      icon: <Clock className="h-10 w-10 text-purple-500" />,
      title: "Minimal Downtime",
      description: "Our implementation processes are designed to minimize disruption to your business operations.",
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-purple-500" />,
      title: "Ongoing Support",
      description: "Receive continuous technical assistance and maintenance for all your retail technology systems.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-purple-500" />,
      title: "Payment Integration",
      description: "Seamless integration with all major payment processors and financial systems.",
    },
    {
      icon: <Truck className="h-10 w-10 text-purple-500" />,
      title: "Supply Chain Solutions",
      description: "Technology solutions that connect your retail operations with suppliers and logistics.",
    },
    {
      icon: <CheckCircle2 className="h-10 w-10 text-purple-500" />,
      title: "Scalable Systems",
      description:
        "Technology infrastructure that grows with your business, from single stores to multi-location chains.",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-purple-950/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm dark:bg-purple-800/30">
              <span className="text-purple-800 dark:text-purple-300">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Retail Technology Excellence
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our retail IT services are designed with your business needs in mind, providing reliable and efficient
              solutions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-purple-100 dark:bg-gray-900 dark:border-purple-800/20"
            >
              <div className="rounded-full p-3 bg-purple-50 mb-4 dark:bg-purple-900/20">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
