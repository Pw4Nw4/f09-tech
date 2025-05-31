import { notFound } from "next/navigation"
import { CTASection } from "@/components/cta-section"

// Import blog post components and metadata
import SmallBusinessesTargets, {
  metadata as smallBusinessesTargetsMetadata,
} from "@/components/blog/blog-posts/small-businesses-prime-targets"
import CostEffectiveSteps, {
  metadata as costEffectiveStepsMetadata,
} from "@/components/blog/blog-posts/cost-effective-steps"
import RemoteWorkRisks, { metadata as remoteWorkRisksMetadata } from "@/components/blog/blog-posts/remote-work-risks"

// Map of slug to component and metadata
const blogPosts = {
  "small-business": { component: SmallBusinessesTargets, metadata: smallBusinessesTargetsMetadata },
  "cost-effective": { component: CostEffectiveSteps, metadata: costEffectiveStepsMetadata },
  "remote-work": { component: RemoteWorkRisks, metadata: remoteWorkRisksMetadata },
  // Add more as they are created
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  // Find the blog post by slug
  const post = Object.entries(blogPosts).find(([key]) => params.slug === key || params.slug === key.split("-")[0])

  if (!post) {
    return {
      title: "Blog Post Not Found | F09 Tech",
      description: "The requested blog post could not be found.",
    }
  }

  const [, { metadata }] = post

  return {
    title: `${metadata.title} | F09 Tech Blog`,
    description: metadata.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the blog post by slug
  const post = Object.entries(blogPosts).find(([key]) => params.slug === key || params.slug === key.split("-")[0])

  if (!post) {
    notFound()
  }

  const [, { component: BlogPost, metadata }] = post

  return (
    <main className="min-h-screen">
      <section className="bg-muted py-8">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                {new Date(metadata.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{metadata.author}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">{metadata.title}</h1>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <BlogPost />
          </div>
        </div>
      </section>

      <CTASection
        title="Need Expert Cybersecurity Help?"
        description="Our team of security specialists can help you protect your business from today's evolving threats."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </main>
  )
}
