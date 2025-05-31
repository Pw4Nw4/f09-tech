import type { Metadata } from "next"
import { SitemapLinks } from "@/components/sitemap/sitemap-links"

export const metadata: Metadata = {
  title: "Sitemap - F09 Tech",
  description: "A complete overview of all pages on the F09 Tech website.",
}

export default function SitemapPage() {
  return (
    <main className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Sitemap</h1>
        <p className="mb-8 text-muted-foreground">
          Use this sitemap to find any page on our website. If you can't find what you're looking for, please{" "}
          <a href="/contact" className="text-brand-500 hover:underline">
            contact us
          </a>
          .
        </p>

        <SitemapLinks />
      </div>
    </main>
  )
}
