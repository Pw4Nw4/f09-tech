"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function MentorshipTestimonials() {
  const testimonials = [
    {
      quote:
        "The mentorship program at F09 Tech was the turning point in my career. The hands-on experience and guidance from industry professionals helped me secure a position as a cybersecurity analyst within months of completing the program.",
      author: "Sarah Johnson",
      role: "Cybersecurity Analyst",
      company: "SecureTech Solutions",
      avatar: "/images/avatar-1.png",
    },
    {
      quote:
        "As someone transitioning from a non-technical background, I was worried about breaking into IT. The structured learning path and supportive mentors at F09 Tech made the journey manageable and even enjoyable.",
      author: "Michael Chen",
      role: "Network Administrator",
      company: "Global Systems Inc.",
      avatar: "/images/avatar-2.png",
    },
    {
      quote:
        "The practical experience I gained through F09 Tech's internship program was invaluable. Working on real client projects under expert guidance gave me the confidence and skills I needed to excel in my role.",
      author: "Aisha Patel",
      role: "IT Support Specialist",
      company: "Innovate Technologies",
      avatar: "/images/avatar-3.png",
    },
  ]

  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            Success Stories
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 sm:mt-4 sm:text-lg">
            Hear from former interns who launched successful careers through our mentorship program.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-4 sm:p-6">
                    <Quote className="h-6 w-6 text-cyan-500 opacity-50 sm:h-8 sm:w-8" />
                    <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:mt-4 sm:text-base">
                      "{testimonial.quote}"
                    </p>

                    <div className="mt-4 flex items-center sm:mt-6">
                      <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                        <AvatarFallback>
                          {testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <p className="text-xs font-medium text-slate-900 dark:text-white sm:text-sm">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
