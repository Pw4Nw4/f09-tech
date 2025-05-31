"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFilter } from "@/contexts/filter-context"
import { format, parseISO } from "date-fns"

// Updated blog data with cybersecurity focus
const articles = [
  {
    id: 1,
    title: "Why Small Businesses Are Prime Targets for Cybercriminals",
    excerpt:
      "Explore common misconceptions like 'We're too small to hack' and see real-world examples of small business breaches.",
    image: "/cybersecurity-small-business-target.png",
    category: "cybersecurity",
    date: "2025-05-10",
    author: "rock-frederic",
    authorName: "Rock Frederic",
    tags: ["security", "small-business", "cyber-threats"],
    slug: "small-business-cyber-targets",
  },
  {
    id: 2,
    title: "5 Cost-Effective Steps to Fortify Your Network Today",
    excerpt:
      "A quick, actionable checklist of affordable tools and best practices you can implement this afternoon to secure your network.",
    image: "/affordable-network-security.png",
    category: "network-security",
    date: "2025-04-28",
    author: "sarah-johnson",
    authorName: "Sarah Johnson",
    tags: ["network-security", "cost-effective", "security-tools"],
    slug: "cost-effective-network-security",
  },
  {
    id: 3,
    title: "Remote Work Risks: Securing Your Home Offices Without Breaking the Bank",
    excerpt: "Tips for lockdown VPNs, secure Wi-Fi setups, and endpoint protection for distributed teams on a budget.",
    image: "/placeholder-mxnjn.png",
    category: "remote-work",
    date: "2025-04-15",
    author: "michael-chen",
    authorName: "Michael Chen",
    tags: ["remote-work", "vpn", "wifi-security", "endpoint-protection"],
    slug: "remote-work-security-risks",
  },
  {
    id: 4,
    title: "The True Cost of a Data Breach: What Every Small Business Owner Should Know",
    excerpt:
      "Break down of financial, reputational, and operational impacts—even a single breach can cost 5-figure sums.",
    image: "/placeholder.svg?height=400&width=600&query=data breach cost impact",
    category: "data-security",
    date: "2025-04-05",
    author: "jennifer-adams",
    authorName: "Jennifer Adams",
    tags: ["data-breach", "security-costs", "risk-management"],
    slug: "true-cost-of-data-breach",
  },
  {
    id: 5,
    title: "Phishing 101: How to Spot and Stop the Scam Emails Flooding Your Inbox",
    excerpt: "Simple training tips plus real phishing examples to keep employees on guard against email-based attacks.",
    image: "/placeholder.svg?height=400&width=600&query=phishing email security",
    category: "email-security",
    date: "2025-03-22",
    author: "david-wilson",
    authorName: "David Wilson",
    tags: ["phishing", "email-security", "security-training"],
    slug: "phishing-101-guide",
  },
  {
    id: 6,
    title: "DIY vs. Pro: When to Call in F09 Tech for Help",
    excerpt:
      "Compare what a business can safely do in-house versus when it's time for professional managed security services.",
    image: "/placeholder.svg?height=400&width=600&query=professional IT security services",
    category: "managed-services",
    date: "2025-03-10",
    author: "rock-frederic",
    authorName: "Rock Frederic",
    tags: ["managed-services", "diy-security", "professional-services"],
    slug: "diy-vs-pro-security",
  },
  {
    id: 7,
    title: "Top 7 Free and Low-Cost Cybersecurity Tools for SMBs",
    excerpt:
      "Review of open-source or budget tools that deliver big protection on a small budget for small and medium businesses.",
    image: "/placeholder.svg?height=400&width=600&query=free cybersecurity tools",
    category: "security-tools",
    date: "2025-03-01",
    author: "sarah-johnson",
    authorName: "Sarah Johnson",
    tags: ["security-tools", "open-source", "budget-security"],
    slug: "free-cybersecurity-tools",
  },
  {
    id: 8,
    title: "AI & Automation: Protecting Your Business Before Cyberthreats Even Happen",
    excerpt:
      "Introduction to AI-driven monitoring and automated patching, and how they reduce risk and labor overhead.",
    image: "/placeholder.svg?height=400&width=600&query=AI cybersecurity automation",
    category: "ai-security",
    date: "2025-02-18",
    author: "michael-chen",
    authorName: "Michael Chen",
    tags: ["ai", "automation", "proactive-security"],
    slug: "ai-automation-cybersecurity",
  },
  {
    id: 9,
    title: "Cloud Backup vs. On-Prem: Choosing the Right Disaster Recovery Plan",
    excerpt:
      "Pros and cons, case examples, and steps for testing your backups so you're never left stranded after an incident.",
    image: "/placeholder.svg?height=400&width=600&query=cloud backup disaster recovery",
    category: "disaster-recovery",
    date: "2025-02-05",
    author: "jennifer-adams",
    authorName: "Jennifer Adams",
    tags: ["cloud-backup", "disaster-recovery", "data-protection"],
    slug: "cloud-vs-onprem-backup",
  },
  {
    id: 10,
    title: "Inside a Hack: Anatomy of a Small-Biz Ransomware Attack",
    excerpt:
      "A narrative post that walks through common attack vectors—and how simple safeguards could have prevented them.",
    image: "/placeholder.svg?height=400&width=600&query=ransomware attack small business",
    category: "ransomware",
    date: "2025-01-20",
    author: "david-wilson",
    authorName: "David Wilson",
    tags: ["ransomware", "attack-analysis", "prevention"],
    slug: "inside-ransomware-attack",
  },
]

export function BlogGrid() {
  const { filters, searchQuery, isFiltering } = useFilter()
  const [articlesData, setArticlesData] = useState(articles)
  const [visibleCount, setVisibleCount] = useState(6)

  // Use useMemo to compute filtered articles only when dependencies change
  const filteredArticles = useMemo(() => {
    let result = [...articles]

    // Filter by category
    if (filters.category && filters.category !== "all") {
      result = result.filter((article) => article.category === filters.category)
    }

    // Filter by tags
    if (filters.tags && filters.tags.length > 0) {
      result = result.filter((article) => article.tags.some((tag) => filters.tags.includes(tag)))
    }

    // Filter by authors
    if (filters.authors && filters.authors.length > 0) {
      result = result.filter((article) => filters.authors.includes(article.author))
    }

    // Filter by date range
    if (filters.dateRange && (filters.dateRange.from || filters.dateRange.to)) {
      const { from, to } = filters.dateRange
      if (from) {
        result = result.filter((article) => {
          const articleDate = parseISO(article.date)
          return articleDate >= from && (!to || articleDate <= to)
        })
      }
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.authorName.toLowerCase().includes(query) ||
          article.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    return result
  }, [filters, searchQuery])

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(6)
  }, [filters, searchQuery])

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredArticles.length))
  }

  return (
    <div className="space-y-8">
      {filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No articles found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your filters or search query to find what you're looking for.
          </p>
          {isFiltering && (
            <Button variant="outline" onClick={() => window.location.reload()}>
              Reset all filters
            </Button>
          )}
        </div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.slice(0, visibleCount).map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <Badge variant="secondary">
                      {article.category
                        .split("-")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {format(parseISO(article.date), "MMM d, yyyy")}
                    </div>
                  </div>
                  <Link href={`/blog/${article.slug}`} className="group">
                    <h3
                      className="mb-2 text-xl font-bold group-hover:text-brand-500"
                      style={{ color: "inherit", transition: "color 0.2s" }}
                    >
                      {article.title}
                    </h3>
                  </Link>
                  <p className="mb-4 line-clamp-2 text-muted-foreground">{article.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="mr-1 h-3 w-3" />
                    {article.authorName}
                  </div>
                </CardContent>
                <CardFooter className="border-t p-6 pt-4">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-sm font-medium text-brand-500 hover:underline"
                    style={{ color: "var(--brand-500)" }}
                  >
                    Read more <ArrowRight className="ml-1 inline-block h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {visibleCount < filteredArticles.length && (
            <div className="flex justify-center">
              <Button variant="outline" onClick={loadMore}>
                Load More Articles
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
