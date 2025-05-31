"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const articles = [
  {
    id: 1,
    title: "The Future of Zero Trust Security in 2025",
    excerpt:
      "Explore how Zero Trust architectures are evolving to meet the challenges of modern cybersecurity threats.",
    image: "/images/blog-1.png",
    category: "Cybersecurity",
    date: "May 10, 2025",
    author: "Rock Frederic",
    slug: "future-of-zero-trust-security",
  },
  {
    id: 2,
    title: "Cloud Migration Strategies for Mid-Size Businesses",
    excerpt: "Learn the best practices for migrating your infrastructure to the cloud while minimizing disruption.",
    image: "/images/blog-2.png",
    category: "Cloud",
    date: "April 28, 2025",
    author: "Sarah Johnson",
    slug: "cloud-migration-strategies",
  },
  {
    id: 3,
    title: "AI-Powered IT Operations: A Game Changer",
    excerpt: "Discover how artificial intelligence is transforming IT operations and infrastructure management.",
    image: "/images/blog-3.png",
    category: "Innovation",
    date: "April 15, 2025",
    author: "Michael Chen",
    slug: "ai-powered-it-operations",
  },
]

export function LatestInsights() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Latest Insights & Resources
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Stay informed with our expert perspectives on technology trends
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-800">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="mr-1 h-3 w-3" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-400">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <User className="mr-1 h-3 w-3" />
                      {article.author}
                    </div>
                    <span className="text-sm font-medium text-cyan-600 transition-colors group-hover:text-cyan-700 dark:text-cyan-400 dark:group-hover:text-cyan-300">
                      Read more
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/blog">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
