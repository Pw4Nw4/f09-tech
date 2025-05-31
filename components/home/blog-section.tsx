"use client"

import { useState, useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { useMobileDetection } from "@/hooks/use-mobile-detection"
import { usePerformance } from "@/hooks/use-performance"

// Import blog post metadata
import { metadata as smallBusinessesTargets } from "../blog/blog-posts/small-businesses-prime-targets"
import { metadata as costEffectiveSteps } from "../blog/blog-posts/cost-effective-steps"
import { metadata as remoteWorkRisks } from "../blog/blog-posts/remote-work-risks"

// Featured articles for the homepage
const articles = [
  {
    id: 1,
    title: smallBusinessesTargets.title,
    excerpt: smallBusinessesTargets.excerpt,
    image: smallBusinessesTargets.image,
    category: "Cybersecurity",
    date: smallBusinessesTargets.date,
    author: smallBusinessesTargets.author,
    slug: smallBusinessesTargets.tags[0],
  },
  {
    id: 2,
    title: costEffectiveSteps.title,
    excerpt: costEffectiveSteps.excerpt,
    image: costEffectiveSteps.image,
    category: "Network Security",
    date: costEffectiveSteps.date,
    author: costEffectiveSteps.author,
    slug: costEffectiveSteps.tags[0],
  },
  {
    id: 3,
    title: remoteWorkRisks.title,
    excerpt: remoteWorkRisks.excerpt,
    image: remoteWorkRisks.image,
    category: "Remote Work",
    date: remoteWorkRisks.date,
    author: remoteWorkRisks.author,
    slug: remoteWorkRisks.tags[0],
  },
]

export function BlogSection() {
  const prefersReducedMotion = useReducedMotion()
  const { isMobile, isTablet } = useMobileDetection()
  const { isHighPerformanceDevice } = usePerformance()
  const [isClient, setIsClient] = useState(false)
  const [visibleArticles, setVisibleArticles] = useState(isMobile ? 1 : articles.length)

  // Prevent hydration mismatch
  useEffect(() => {
    setIsClient(true)
    setVisibleArticles(isMobile ? 1 : articles.length)
  }, [isMobile])

  // Adjust animation settings based on device capabilities
  const shouldAnimate = isClient && !prefersReducedMotion && isHighPerformanceDevice
  const animationDuration = shouldAnimate ? 0.5 : 0

  if (!isClient) {
    return null // Prevent hydration mismatch
  }

  return (
    <section className="section bg-muted py-12 md:py-20">
      <div className="container">
        <div className="mx-auto mb-10 md:mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-background px-3 py-1 text-sm font-medium text-muted-foreground">
            Cybersecurity Insights
          </span>
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">Protect Your Business</h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Expert guidance on securing your business from cyber threats with practical, affordable solutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, visibleArticles).map((article, index) => (
            <motion.div
              key={article.id}
              initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: animationDuration, delay: shouldAnimate ? index * 0.1 : 0 }}
              viewport={{ once: true }}
              className="card-hover group overflow-hidden rounded-xl border border-border bg-card"
            >
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <OptimizedImage
                    src={article.image}
                    alt={article.title}
                    size="medium"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <Badge variant="outline" className="bg-muted">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg sm:text-xl font-bold line-clamp-2 transition-colors group-hover:text-brand-500">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-sm sm:text-base text-muted-foreground line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <User className="mr-1 h-3 w-3" />
                      {article.author}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-brand-500 transition-colors group-hover:text-brand-600">
                      Read more
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {isMobile && visibleArticles < articles.length && (
          <div className="mt-6 text-center">
            <Button variant="outline" onClick={() => setVisibleArticles((prev) => Math.min(prev + 1, articles.length))}>
              Load More
            </Button>
          </div>
        )}

        <div className="mt-8 sm:mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/blog">
              View All Security Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
