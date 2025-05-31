"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export function RetailServicesCaseStudy() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm dark:bg-purple-800/30">
              <span className="text-purple-800 dark:text-purple-300">Success Story</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Retail Transformation</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              See how we helped a multi-location retailer modernize their technology infrastructure
            </p>
          </div>
        </div>

        <Card className="overflow-hidden border-purple-100 dark:border-purple-800/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative h-[300px] lg:h-full">
              <Image
                src="/modern-retail-store.png"
                alt="Modern retail store with technology"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6 lg:p-10 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Regional Clothing Retailer</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A clothing retailer with 12 locations needed to modernize their point-of-sale, inventory management,
                    and customer loyalty systems.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-700 dark:text-purple-400">The Challenge</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    The client was using outdated systems that couldn't integrate with each other, causing inventory
                    discrepancies, slow checkout times, and limited customer insights.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-700 dark:text-purple-400">Our Solution</h4>
                  <ul className="space-y-2">
                    {[
                      "Implemented a cloud-based POS system across all locations",
                      "Integrated real-time inventory management with automatic reordering",
                      "Deployed customer loyalty program with mobile app integration",
                      "Set up secure payment processing with PCI DSS compliance",
                      "Provided staff training and ongoing technical support",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-700 dark:text-purple-400">The Results</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-purple-50 p-4 rounded-lg text-center dark:bg-purple-900/20">
                      <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">32%</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Increase in Sales</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center dark:bg-purple-900/20">
                      <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">45%</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Faster Checkout</div>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    The new systems eliminated inventory discrepancies, improved customer satisfaction, and provided
                    valuable data insights for business decisions.
                  </p>
                </div>

                <Button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white">
                  Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}
