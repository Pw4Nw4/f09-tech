import { Badge } from "@/components/ui/badge"

export function ProjectOverviewHeader() {
  return (
    <section className="bg-gradient-to-b from-muted/50 to-muted py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4">Project Completed</Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            F09 Tech Website Project Overview
          </h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive showcase of all completed pages and components for the F09 Tech website, highlighting the
            design, functionality, and user experience of each section.
          </p>
        </div>
      </div>
    </section>
  )
}
