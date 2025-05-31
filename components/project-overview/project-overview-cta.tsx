import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProjectOverviewCta() {
  return (
    <section className="bg-muted py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Ready to Explore the Full Website?</h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Navigate through all the pages to experience the complete F09 Tech website and discover the full range of
            services and information available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/">Visit Homepage</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/sitemap">View Sitemap</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
