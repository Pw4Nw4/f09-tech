"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { ShieldCheck, Clock, Users, Server, Globe, Scale } from "lucide-react"

export function EnterpriseServicesFeatures() {
  const { theme } = useTheme()

  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "Enterprise Security",
      description:
        "Multi-layered security solutions to protect your critical business data, applications, and infrastructure from emerging threats.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "99.9% Uptime SLA",
      description:
        "Guaranteed uptime with robust SLAs backed by redundant systems, proactive monitoring, and rapid incident response.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Dedicated Support Team",
      description:
        "Experienced IT professionals assigned specifically to your account, providing personalized service and deep knowledge of your systems.",
    },
    {
      icon: <Server className="h-10 w-10" />,
      title: "Scalable Infrastructure",
      description:
        "Technology solutions that grow with your business, from startup to enterprise, without disruptive migrations or downtime.",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Global Reach",
      description:
        "Support for multi-location enterprises with consistent service delivery and technology standards worldwide.",
    },
    {
      icon: <Scale className="h-10 w-10" />,
      title: "Regulatory Compliance",
      description:
        "Expert guidance and implementation of technologies to meet industry-specific compliance requirements and data regulations.",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-10 dark:opacity-5"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-400/20 dark:bg-amber-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Enterprise Advantages</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Experience the benefits of working with a technology partner that understands the unique challenges and
            opportunities facing modern enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
