"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, BarChart3, ShieldCheck, Headset, Database, QrCode, Receipt, Tag } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceItem {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  benefits: string[]
}

const retailServices: ServiceItem[] = [
  {
    id: "pos",
    title: "POS System Installation",
    description: "Complete point-of-sale system setup, configuration, and staff training for retail environments.",
    icon: <CreditCard className="h-10 w-10 text-purple-500" />,
    benefits: [
      "Seamless integration with inventory systems",
      "Custom configuration for your specific retail needs",
      "Staff training and ongoing support",
      "Hardware and software troubleshooting",
    ],
  },
  {
    id: "inventory",
    title: "Inventory Management Systems",
    description: "Implementation of digital inventory tracking solutions to optimize stock management.",
    icon: <Database className="h-10 w-10 text-purple-500" />,
    benefits: [
      "Real-time inventory tracking",
      "Automated reordering systems",
      "Barcode and RFID integration",
      "Multi-location inventory synchronization",
    ],
  },
  {
    id: "network",
    title: "Retail Network Security",
    description: "Specialized security solutions to protect customer data and payment information.",
    icon: <ShieldCheck className="h-10 w-10 text-purple-500" />,
    benefits: [
      "PCI DSS compliance implementation",
      "Secure payment processing",
      "Data breach prevention",
      "Security policy development",
    ],
  },
  {
    id: "support",
    title: "Retail IT Support",
    description: "Ongoing technical support for all retail technology systems and infrastructure.",
    icon: <Headset className="h-10 w-10 text-purple-500" />,
    benefits: [
      "24/7 emergency support",
      "Preventative maintenance",
      "Quick response times",
      "Remote and on-site assistance",
    ],
  },
  {
    id: "digital-signage",
    title: "Digital Signage Solutions",
    description: "Implementation of dynamic digital displays for promotions and customer engagement.",
    icon: <BarChart3 className="h-10 w-10 text-purple-500" />,
    benefits: [
      "Content management systems",
      "Remote display control",
      "Scheduled content updates",
      "Interactive display options",
    ],
  },
  {
    id: "qr-solutions",
    title: "QR & Mobile Solutions",
    description: "Integration of QR codes and mobile technologies for modern retail experiences.",
    icon: <QrCode className="h-10 w-10 text-purple-500" />,
    benefits: [
      "Contactless payment options",
      "Product information access",
      "Loyalty program integration",
      "Customer engagement tools",
    ],
  },
  {
    id: "e-commerce",
    title: "E-commerce Integration",
    description: "Connecting physical retail operations with online sales channels for omnichannel retail.",
    icon: <Receipt className="h-10 w-10 text-purple-500" />,
    benefits: [
      "Inventory synchronization across channels",
      "Order management systems",
      "Customer data integration",
      "Unified reporting",
    ],
  },
  {
    id: "rfid",
    title: "RFID Inventory Tracking",
    description: "Advanced RFID solutions for precise inventory management and loss prevention.",
    icon: <Tag className="h-10 w-10 text-purple-500" />,
    benefits: [
      "Automated inventory counts",
      "Loss prevention systems",
      "Supply chain visibility",
      "Enhanced customer experiences",
    ],
  },
]

export function RetailServicesList() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredServices =
    activeTab === "all"
      ? retailServices
      : retailServices.filter((service) =>
          activeTab === "pos"
            ? ["pos", "inventory"].includes(service.id)
            : activeTab === "security"
              ? ["network", "rfid"].includes(service.id)
              : activeTab === "support"
                ? ["support", "e-commerce"].includes(service.id)
                : ["digital-signage", "qr-solutions"].includes(service.id),
        )

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm dark:bg-purple-800/30">
              <span className="text-purple-800 dark:text-purple-300">Retail Solutions</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Specialized IT Services for Retail
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Comprehensive technology solutions designed specifically for retail businesses of all sizes
            </p>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900 dark:data-[state=active]:bg-purple-800/30 dark:data-[state=active]:text-purple-300"
              >
                All Services
              </TabsTrigger>
              <TabsTrigger
                value="pos"
                className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900 dark:data-[state=active]:bg-purple-800/30 dark:data-[state=active]:text-purple-300"
              >
                POS & Inventory
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900 dark:data-[state=active]:bg-purple-800/30 dark:data-[state=active]:text-purple-300"
              >
                Security
              </TabsTrigger>
              <TabsTrigger
                value="digital"
                className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900 dark:data-[state=active]:bg-purple-800/30 dark:data-[state=active]:text-purple-300"
              >
                Digital Solutions
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-purple-100 dark:border-purple-800/20 hover:border-purple-200 dark:hover:border-purple-800/30 transition-all duration-200">
                    <CardHeader className={cn("flex flex-row items-center gap-4 pb-2")}>
                      <div className="rounded-full p-2 bg-purple-50 dark:bg-purple-900/20">{service.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-8">
                      <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-purple-700 dark:text-purple-400">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="text-sm flex items-start">
                              <span className="mr-2 text-purple-500 text-lg">•</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
