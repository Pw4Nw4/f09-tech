"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What areas do you service?",
    answer:
      "We currently provide on-site services in the greater metropolitan area and surrounding suburbs. For many of our services, we also offer remote support for clients located anywhere.",
  },
  {
    question: "How quickly can you respond to service requests?",
    answer:
      "For urgent issues, we typically respond within 2-4 hours during business hours. For standard service requests, our response time is usually within 24 hours. We also offer emergency after-hours support for critical situations.",
  },
  {
    question: "Do you offer maintenance plans or only one-time services?",
    answer:
      "We offer both one-time services and ongoing maintenance plans. Our maintenance plans include regular check-ups, updates, and priority support to keep your systems running smoothly and prevent issues before they occur.",
  },
  {
    question: "What types of payment do you accept?",
    answer:
      "We accept all major credit cards, electronic transfers, checks, and cash. For businesses, we can also arrange net-30 payment terms after establishing a relationship.",
  },
  {
    question: "Do you provide warranties on your services?",
    answer:
      "Yes, all our services come with a satisfaction guarantee. For hardware installations and repairs, we provide a 90-day warranty on parts and labor. Custom PC builds include manufacturer warranties on components plus our own service warranty.",
  },
  {
    question: "Can you work after hours to avoid disrupting our business operations?",
    answer:
      "We understand that technology downtime can impact your business, so we're flexible with scheduling and can perform many services after regular business hours or on weekends to minimize disruption.",
  },
]

export function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">{faq.question}</h3>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-slate-500 transition-transform duration-200 dark:text-slate-400",
                      openIndex === index ? "rotate-180" : "",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-200 p-6 dark:border-slate-800">
                        <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
