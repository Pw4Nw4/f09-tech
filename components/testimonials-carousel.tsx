"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    content:
      "F09 Tech transformed our IT infrastructure and significantly improved our security posture. Their team's expertise and proactive approach have been invaluable to our business.",
    author: "Sarah Johnson",
    title: "CTO, TechCorp Solutions",
    avatar: "/images/avatar-1.png",
  },
  {
    id: 2,
    content:
      "Working with F09 Tech has been a game-changer for our organization. Their cloud migration strategy saved us 40% on infrastructure costs while improving performance.",
    author: "Michael Chen",
    title: "IT Director, Global Innovations",
    avatar: "/images/avatar-2.png",
  },
  {
    id: 3,
    content:
      "The cybersecurity assessment conducted by F09 Tech identified critical vulnerabilities we weren't aware of. Their remediation plan was comprehensive and implemented flawlessly.",
    author: "Jessica Williams",
    title: "CISO, Financial Partners",
    avatar: "/images/avatar-3.png",
  },
]

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const prev = () => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Hear from businesses we've helped transform with our innovative solutions
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 transform"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
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

          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 transform"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
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

          <div className="relative h-[400px] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800">
            {/* Geometric pattern overlay */}
            <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dots-pattern-carousel" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots-pattern-carousel)" />
              </svg>
            </div>

            <Quote className="absolute left-8 top-8 h-12 w-12 text-slate-200 dark:text-slate-800" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex h-full flex-col items-center justify-center p-12 text-center"
              >
                <p className="mb-8 text-xl text-slate-700 dark:text-slate-300">"{testimonials[current].content}"</p>
                <div className="flex flex-col items-center">
                  <div className="mb-4 h-16 w-16 overflow-hidden rounded-full border-2 border-slate-200 dark:border-slate-700">
                    <Image
                      src={testimonials[current].avatar || "/placeholder.svg"}
                      alt={testimonials[current].author}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {testimonials[current].author}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{testimonials[current].title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
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
