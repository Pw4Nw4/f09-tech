"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    content:
      "F09 Tech completely transformed my home office setup. Their network installation was flawless, and my new custom PC is lightning fast. I couldn't be happier with the service!",
    author: "Sarah Johnson",
    title: "Remote Professional",
    avatar: "/images/avatar-1.png",
    service: "Home Network & PC Building",
  },
  {
    id: 2,
    content:
      "The POS system F09 Tech installed has revolutionized our checkout process. Our staff loves how easy it is to use, and it integrates perfectly with our inventory management.",
    author: "Michael Chen",
    title: "Retail Store Owner",
    avatar: "/images/avatar-2.png",
    service: "POS Installation",
  },
  {
    id: 3,
    content:
      "After experiencing a ransomware attack, F09 Tech stepped in and not only recovered our data but implemented security measures that have kept us protected ever since.",
    author: "Jessica Williams",
    title: "Small Business Owner",
    avatar: "/images/avatar-3.png",
    service: "Cybersecurity",
  },
  {
    id: 4,
    content:
      "F09 Tech's network cabling installation was professional and efficient. They worked around our business hours to minimize disruption and delivered exactly what we needed.",
    author: "David Rodriguez",
    title: "Office Manager",
    avatar: "/images/avatar-4.png",
    service: "Network Installation",
  },
]

export function ServiceTestimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Hear from individuals and businesses we've helped with our IT solutions
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="grid h-full w-full grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:grid-cols-5">
                  <div className="relative hidden md:col-span-2 md:block">
                    {/* Gradient background instead of image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500"></div>

                    {/* Geometric pattern overlay */}
                    <div className="absolute inset-0 z-0 opacity-20">
                      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="dots-pattern-testimonial" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="white" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots-pattern-testimonial)" />
                      </svg>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center text-white">
                        <Quote className="mx-auto mb-4 h-12 w-12 opacity-50" />
                        <h3 className="mb-2 text-2xl font-bold">Client Testimonials</h3>
                        <p className="text-white/80">Real feedback from our valued clients</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-3 flex flex-col items-center justify-center p-8 text-center md:p-12">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-200 dark:border-slate-700">
                      <Image
                        src={testimonials[current].avatar || "/placeholder.svg?height=64&width=64"}
                        alt={testimonials[current].author}
                        width={56}
                        height={56}
                        className="rounded-full"
                      />
                    </div>
                    <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-3 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-300">
                      {testimonials[current].service}
                    </div>
                    <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">"{testimonials[current].content}"</p>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {testimonials[current].author}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{testimonials[current].title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1)
                  setCurrent(index)
                }}
                className={`h-2 w-2 rounded-full ${
                  current === index ? "bg-gradient-to-r from-cyan-500 to-blue-500" : "bg-slate-300 dark:bg-slate-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
