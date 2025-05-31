import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Clock, Calendar, Users } from "lucide-react"

export function ProjectOverviewSummary() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">Project Summary</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="rounded-full bg-primary/10 p-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Completed Pages</h3>
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-sm text-muted-foreground">Fully responsive pages with optimized content</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="rounded-full bg-primary/10 p-2">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Development Time</h3>
                  <p className="text-2xl font-bold">4 Weeks</p>
                  <p className="text-sm text-muted-foreground">From initial design to final implementation</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="rounded-full bg-primary/10 p-2">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Project Phases</h3>
                  <p className="text-2xl font-bold">3 Phases</p>
                  <p className="text-sm text-muted-foreground">Design, development, and optimization</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="rounded-full bg-primary/10 p-2">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Target Audience</h3>
                  <p className="text-2xl font-bold">3 Segments</p>
                  <p className="text-sm text-muted-foreground">Individuals, retail businesses, and enterprises</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 space-y-4">
            <p>
              The F09 Tech website project was designed to create a comprehensive online presence for an IT services
              company specializing in network infrastructure, cybersecurity, cloud solutions, and managed services. The
              website targets three distinct customer segments: individuals, retail businesses, and enterprise clients.
            </p>
            <p>
              The project encompassed the development of multiple service-specific pages, a detailed portfolio section,
              case studies, blog, and specialized sections like the mentorship program. Each page was designed with a
              focus on user experience, clear information architecture, and conversion optimization.
            </p>
            <p>
              The website was built using Next.js with the App Router, featuring responsive design, accessibility
              compliance, and performance optimization. The modular component structure allows for easy maintenance and
              future expansion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
