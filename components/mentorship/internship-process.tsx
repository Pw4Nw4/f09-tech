"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, FileSearch, Users, Calendar, CheckCircle } from "lucide-react"

export function InternshipProcess() {
  const steps = [
    {
      icon: FileSearch,
      title: "Application",
      description:
        "Submit your application with your resume, background, and areas of interest in IT and cybersecurity.",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
    },
    {
      icon: Users,
      title: "Interview",
      description:
        "Meet with our team to discuss your goals, experience level, and how our program can help you succeed.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: ClipboardCheck,
      title: "Matching",
      description: "Get paired with a mentor based on your career goals and the specific areas you want to develop.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
    },
    {
      icon: Calendar,
      title: "Onboarding",
      description:
        "Begin your internship with orientation, goal setting, and creating your personalized development plan.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: CheckCircle,
      title: "Program Start",
      description:
        "Start your hands-on experience with real projects, regular mentorship sessions, and skill development.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
  ]

  return (
    <section id="learn-more" className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            The Internship Process
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Our structured approach ensures you get the most out of your internship experience, from application to
            completion.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line - visible on all screen sizes */}
          <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="relative space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col gap-4 pl-12 md:flex-row md:pl-0 md:even:flex-row-reverse"
              >
                {/* Timeline dot - positioned differently on mobile vs desktop */}
                <div
                  className={`absolute left-4 top-0 h-4 w-4 -translate-x-1/2 rounded-full border-2 ${step.borderColor} bg-white dark:bg-slate-900 md:left-1/2 md:top-1/2 md:-translate-y-1/2`}
                ></div>

                {/* Icon container - hidden on mobile, shown on desktop */}
                <div className="hidden md:block md:w-1/2">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${step.bgColor} p-3 shadow-lg md:h-20 md:w-20 ${
                      index % 2 === 0 ? "ml-auto mr-8" : "ml-8"
                    }`}
                  >
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                </div>

                {/* Content card - full width on mobile, half width on desktop */}
                <div className="w-full md:w-1/2">
                  {/* Mobile-only icon */}
                  <div className={`mb-3 flex md:hidden`}>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${step.bgColor} p-2`}>
                      <step.icon className={`h-5 w-5 ${step.color}`} />
                    </div>
                  </div>

                  <div
                    className={`rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-800 sm:p-6 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <h3 className={`text-lg font-bold ${step.color} sm:text-xl`}>{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 sm:text-base">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
