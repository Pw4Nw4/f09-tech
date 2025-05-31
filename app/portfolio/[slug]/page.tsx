import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowLeft } from "lucide-react"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `${params.slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")} | F09 Tech Portfolio`,
    description: `Learn about our ${params.slug.replace(/-/g, " ")} project and the results we achieved.`,
  }
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  // This would typically come from a database or CMS
  // For now, we'll just use the slug to create a placeholder
  const title = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Determine industry based on slug keywords
  let industry = "Technology"
  if (params.slug.includes("healthcare")) industry = "Healthcare"
  else if (params.slug.includes("retail")) industry = "Retail"
  else if (params.slug.includes("financial") || params.slug.includes("bank")) industry = "Financial Services"
  else if (params.slug.includes("education") || params.slug.includes("university")) industry = "Education"
  else if (params.slug.includes("government")) industry = "Government"

  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="mb-8">
        <Link
          href="/portfolio"
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <Badge className="mb-4">{industry}</Badge>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Detailed case study of our {params.slug.replace(/-/g, " ")} project, showcasing our approach,
            implementation, and results.
          </p>

          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden bg-muted">
            <IconPlaceholder
              title={title}
              category={industry}
              variant="portfolio"
              iconType={params.slug}
              className="h-full"
            />
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <h2>Project Overview</h2>
            <p>
              This project involved implementing a comprehensive solution for a client facing significant challenges in
              their industry. Our team worked closely with stakeholders to understand their needs and develop a tailored
              approach.
            </p>

            <h2>The Challenge</h2>
            <p>
              The client was struggling with outdated systems, inefficient processes, and increasing security concerns.
              They needed a modern solution that would address these issues while providing a foundation for future
              growth.
            </p>

            <h2>Our Approach</h2>
            <p>
              We began with a thorough assessment of the client's existing infrastructure and processes. Based on our
              findings, we developed a strategic plan that included:
            </p>
            <ul>
              <li>Modernizing core systems</li>
              <li>Implementing security best practices</li>
              <li>Streamlining workflows</li>
              <li>Training staff on new technologies</li>
            </ul>

            <h2>Implementation</h2>
            <p>
              Our team executed the plan in phases to minimize disruption to the client's operations. We used
              industry-leading technologies and methodologies to ensure a successful implementation.
            </p>

            <h2>Results</h2>
            <p>The project delivered significant improvements across multiple areas:</p>
            <ul>
              <li>Increased operational efficiency by 35%</li>
              <li>Reduced security incidents to zero</li>
              <li>Improved user satisfaction scores by 40%</li>
              <li>Decreased system downtime by 99%</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="bg-muted p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-4">Project Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-muted-foreground">Industry:</span>
                  <p className="font-medium">{industry}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Timeline:</span>
                  <p className="font-medium">3 months</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Technologies:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">AWS</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Key Outcomes</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>35% increase in efficiency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Zero security incidents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>40% improvement in user satisfaction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>99% reduction in downtime</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Interested in a similar solution?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Let's discuss how we can help your organization achieve similar results with a customized approach.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </div>
    </div>
  )
}
