import type { Metadata } from "next"
import { ProjectOverviewHeader } from "@/components/project-overview/project-overview-header"
import { ProjectOverviewGrid } from "@/components/project-overview/project-overview-grid"
import { ProjectOverviewSummary } from "@/components/project-overview/project-overview-summary"
import { ProjectOverviewCta } from "@/components/project-overview/project-overview-cta"

export const metadata: Metadata = {
  title: "F09 Tech Website Project Overview",
  description:
    "A comprehensive overview of the F09 Tech website development project, showcasing all completed pages and components.",
}

export default function ProjectOverviewPage() {
  return (
    <main className="pb-20">
      <ProjectOverviewHeader />
      <ProjectOverviewSummary />
      <ProjectOverviewGrid />
      <ProjectOverviewCta />
    </main>
  )
}
