"use client"

import { motion } from "framer-motion"
import { BookOpen, Link2, Code, Users } from "lucide-react"

export function MentorshipResources() {
  const resources = [
    {
      title: "Online Courses",
      description: "Access a curated list of online courses to enhance your IT and cybersecurity skills.",
      icon: BookOpen,
      link: "https://www.example.com/online-courses",
    },
    {
      title: "Useful Links",
      description: "Explore a collection of helpful websites, tools, and resources for IT professionals.",
      icon: Link2,
      link: "https://www.example.com/useful-links",
    },
    {
      title: "Code Repositories",
      description: "Discover open-source projects and code repositories to learn from and contribute to.",
      icon: Code,
      link: "https://www.example.com/code-repositories",
    },
    {
      title: "Community Forums",
      description: "Engage with other IT professionals and mentors in our community forums.",
      icon: Users,
      link: "https://www.example.com/community-forums",
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
          className="mx-auto max-w-3xl text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            Mentorship Resources
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 sm:mt-4 sm:text-lg">
            Access a wealth of resources to support your learning and development in IT and cybersecurity.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-200 bg-white p-4 transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30 sm:h-12 sm:w-12 sm:mb-4">
                <resource.icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">{resource.title}</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 sm:mt-2 sm:text-sm">
                {resource.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
