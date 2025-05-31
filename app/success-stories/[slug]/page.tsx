import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowLeft, Quote } from "lucide-react"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `${params.slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")} | F09 Tech Success Story`,
    description: `Learn how we helped our client succeed with our ${params.slug.replace(/-/g, " ")} solution.`,
  }
}

export default function SuccessStoryDetailPage({ params }: { params: { slug: string } }) {
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
  else if (params.slug.includes("law")) industry = "Legal Services"
  else if (params.slug.includes("manufacturing")) industry = "Manufacturing"
  else if (params.slug.includes("smart-home")) industry = "Residential Technology"

  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="mb-8">
        <Link
          href="/success-stories"
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Success Stories
        </Link>
      </div>

      <div className="relative h-64 w-full mb-12 rounded-lg overflow-hidden bg-muted">
        <IconPlaceholder
          title={title}
          category={industry}
          variant="success-story"
          iconType={params.slug}
          className="h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
        <div className="absolute bottom-0 left-0 p-8">
          <Badge className="mb-4">{industry}</Badge>
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="prose max-w-none dark:prose-invert">
            <h2>Client Background</h2>
            <p>
              Our client is a leading organization in their industry, facing significant challenges related to
              technology infrastructure, security, and operational efficiency. They approached F09 Tech seeking a
              comprehensive solution that would address their specific needs and position them for future growth.
            </p>

            <h2>The Challenge</h2>
            <p>The client was struggling with several critical issues:</p>
            <ul>
              <li>Outdated technology infrastructure causing frequent downtime</li>
              <li>Security vulnerabilities putting sensitive data at risk</li>
              <li>Inefficient manual processes reducing productivity</li>
              <li>Limited visibility into key performance metrics</li>
            </ul>

            <h2>Our Solution</h2>
            <p>After a thorough assessment of the client's needs, we developed a customized solution that included:</p>
            <ul>
              <li>Comprehensive infrastructure modernization</li>
              <li>Implementation of advanced security protocols</li>
              <li>Process automation to eliminate manual tasks</li>
              <li>Custom reporting and analytics dashboards</li>
              <li>Staff training and knowledge transfer</li>
            </ul>

            <h2>Implementation Process</h2>
            <p>We followed a structured approach to ensure minimal disruption to the client's operations:</p>
            <ol>
              <li>Initial assessment and planning</li>
              <li>Phased implementation of new systems</li>
              <li>Rigorous testing and quality assurance</li>
              <li>Staff training and documentation</li>
              <li>Post-implementation support and optimization</li>
            </ol>

            <h2>Results and Impact</h2>
            <p>The implementation of our solution delivered significant benefits to the client:</p>
            <ul>
              <li>99.9% reduction in system downtime</li>
              <li>Zero security incidents since implementation</li>
              <li>30% increase in staff productivity</li>
              <li>Complete visibility into key performance indicators</li>
              <li>Substantial cost savings through efficiency improvements</li>
            </ul>

            <div className="bg-muted p-6 rounded-lg my-8">
              <div className="flex items-start">
                <Quote className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                <div>
                  <p className="italic text-lg mb-4">
                    "F09 Tech transformed our operations with their innovative solution. We've seen dramatic
                    improvements in efficiency, security, and overall performance. Their team was professional,
                    knowledgeable, and responsive throughout the entire process."
                  </p>
                  <p className="font-semibold">- Client CTO</p>
                </div>
              </div>
            </div>

            <h2>Lessons Learned</h2>
            <p>This project reinforced several key principles that guide our approach to client engagements:</p>
            <ul>
              <li>Thorough initial assessment is critical to project success</li>
              <li>Regular communication with stakeholders ensures alignment</li>
              <li>Phased implementation minimizes operational disruption</li>
              <li>Comprehensive training is essential for user adoption</li>
              <li>Ongoing support helps maintain and extend the value of the solution</li>
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
                  <p className="font-medium">4 months</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Services Provided:</span>
                  <ul className="mt-2 space-y-1">
                    <li>• Infrastructure Modernization</li>
                    <li>• Security Implementation</li>
                    <li>• Process Automation</li>
                    <li>• Custom Development</li>
                    <li>• Staff Training</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-4">Key Results</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>99.9% reduction in downtime</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Zero security incidents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>30% productivity increase</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Full KPI visibility</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Download Resources</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Case Study PDF
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Results Infographic
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to achieve similar results?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Contact us today to discuss how we can help your organization overcome its technology challenges and achieve
          its business goals.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </div>
    </div>
  )
}
