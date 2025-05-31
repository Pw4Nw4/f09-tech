import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// This would typically come from a CMS or API
const getRelatedPosts = (currentSlug: string, category: string) => {
  const allPosts = [
    {
      id: 1,
      title: "The Future of Zero Trust Security in 2025",
      excerpt:
        "Explore how Zero Trust architectures are evolving to meet the challenges of modern cybersecurity threats.",
      image: "/images/blog-1.png",
      category: "Cybersecurity",
      slug: "future-of-zero-trust-security",
    },
    {
      id: 2,
      title: "Implementing Zero Trust in Hybrid Environments",
      excerpt: "Best practices for deploying Zero Trust security across on-premises and cloud infrastructure.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Cybersecurity",
      slug: "implementing-zero-trust-hybrid-environments",
    },
    {
      id: 3,
      title: "Zero Trust for Small Businesses: A Practical Guide",
      excerpt: "How small and medium businesses can implement Zero Trust principles without enterprise budgets.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Cybersecurity",
      slug: "zero-trust-small-businesses",
    },
    {
      id: 4,
      title: "Cloud Migration Strategies for Mid-Size Businesses",
      excerpt: "Learn the best practices for migrating your infrastructure to the cloud while minimizing disruption.",
      image: "/images/blog-2.png",
      category: "Cloud Computing",
      slug: "cloud-migration-strategies",
    },
  ]

  // Filter out the current post and get posts in the same category
  return allPosts.filter((post) => post.slug !== currentSlug && post.category === category).slice(0, 3)
}

export function BlogRelated({ currentSlug, category }: { currentSlug: string; category: string }) {
  const relatedPosts = getRelatedPosts(currentSlug, category)

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {relatedPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <div className="relative h-40 w-full">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <Link href={`/blog/${post.slug}`} className="group">
              <h3
                className="mb-2 text-lg font-bold group-hover:text-brand-500"
                style={{ color: "inherit", transition: "color 0.2s" }}
              >
                {post.title}
              </h3>
            </Link>
            <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
