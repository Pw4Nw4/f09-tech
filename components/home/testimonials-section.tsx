"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "F09 Tech completely transformed our IT infrastructure. Their expertise in network installation and cybersecurity has given us peace of mind and improved our operational efficiency.",
    author: "Sarah Johnson",
    position: "Operations Manager, Retail Chain",
    rating: 5,
  },
  {
    quote:
      "The custom POS system installed by F09 Tech has streamlined our checkout process and inventory management. Their team was professional and knowledgeable throughout the entire process.",
    author: "Michael Chen",
    position: "Restaurant Owner",
    rating: 5,
  },
  {
    quote:
      "As a small business owner, I needed reliable IT support without breaking the bank. F09 Tech delivered exactly what I needed at a price I could afford. Highly recommended!",
    author: "David Rodriguez",
    position: "Small Business Owner",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Don't just take our word for it - hear from some of our satisfied clients
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md relative"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                <Quote className="h-4 w-4 text-white" />
              </div>
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
