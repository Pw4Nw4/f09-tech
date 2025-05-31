"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Import blog post metadata
import { metadata as smallBusinessesTargets } from "./blog-posts/small-businesses-prime-targets"
import { metadata as costEffectiveSteps } from "./blog-posts/cost-effective-steps"
import { metadata as remoteWorkRisks } from "./blog-posts/remote-work-risks"

// Combine all blog posts
const allBlogPosts = [
  smallBusinessesTargets,
  costEffectiveSteps,
  remoteWorkRisks,
  // Add more blog posts as they are created
]

export function BlogList() {
  const [visibleCount, setVisibleCount] = useState(6)

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, allBlogPosts.length))
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allBlogPosts.slice(0, visibleCount).map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={post.image || "/placeholder.svg?height=400&width=600&query=cybersecurity blog"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="mb-3 flex items-center justify-between">
                <Badge variant="secondary">
                  {post.category
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </Badge>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="mr-1 h-3 w-3" />
                  {post.date}
                </div>
              </div>
              <Link href={`/blog/${post.tags[0]}`} className="group">
                <h3
                  className="mb-2 text-xl font-bold group-hover:text-brand-500"
                  style={{ color: "inherit", transition: "color 0.2s" }}
                >
                  {post.title}
                </h3>
              </Link>
              <p className="mb-4 line-clamp-2 text-muted-foreground">{post.excerpt}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="mr-1 h-3 w-3" />
                {post.author}
              </div>
            </CardContent>
            <CardFooter className="border-t p-6 pt-4">
              <Link
                href={`/blog/${post.tags[0]}`}
                className="text-sm font-medium text-brand-500 hover:underline"
                style={{ color: "var(--brand-500)" }}
              >
                Read more <ArrowRight className="ml-1 inline-block h-3 w-3" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {visibleCount < allBlogPosts.length && (
        <div className="flex justify-center">
          <Button variant="outline" onClick={loadMore}>
            Load More Articles
          </Button>
        </div>
      )}
    </div>
  )
}
