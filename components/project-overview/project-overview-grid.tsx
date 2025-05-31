import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

// Project data
const projects = [
  {
    title: "Home Page",
    description:
      "The main landing page featuring a hero section, services overview, testimonials, and call-to-action elements.",
    image: "/images/project-overview/home-page.png",
    features: [
      "Responsive hero section with animated elements",
      "Service category showcases with visual icons",
      "Testimonial carousel with client feedback",
      "Statistics section highlighting company achievements",
      "Featured blog posts section",
    ],
    path: "/",
    category: "Core Page",
  },
  {
    title: "About Page",
    description: "Company overview page showcasing the mission, values, team members, and company history.",
    image: "/images/project-overview/about-page.png",
    features: [
      "Company history timeline",
      "Team member profiles with expertise areas",
      "Mission and values statements",
      "Office location imagery",
      "Client testimonials specific to company culture",
    ],
    path: "/about",
    category: "Core Page",
  },
  {
    title: "Services Overview",
    description: "Comprehensive overview of all service categories offered by F09 Tech.",
    image: "/images/project-overview/services-page.png",
    features: [
      "Service category cards with visual representations",
      "Comparison tables for service tiers",
      "Process timeline for service implementation",
      "Integration with case studies for real-world examples",
      "Service-specific testimonials",
    ],
    path: "/services",
    category: "Service Page",
  },
  {
    title: "Enterprise Services",
    description: "Specialized page targeting enterprise clients with tailored IT solutions.",
    image: "/images/project-overview/enterprise-page.png",
    features: [
      "Enterprise-specific service offerings",
      "Case studies from enterprise clients",
      "ROI calculators and benefit visualizations",
      "Enterprise technology partnerships",
      "Compliance and security certifications",
    ],
    path: "/services/enterprise",
    category: "Service Page",
  },
  {
    title: "Retail Services",
    description: "Dedicated page for retail businesses showcasing specialized IT solutions for the retail sector.",
    image: "/images/project-overview/retail-page.png",
    features: [
      "Retail-specific technology solutions",
      "POS system integration information",
      "Customer experience enhancement technologies",
      "Retail security compliance information",
      "Case studies from retail implementations",
    ],
    path: "/services/retail",
    category: "Service Page",
  },
  {
    title: "Individual Services",
    description: "Services tailored for individual consumers and small home offices.",
    image: "/images/project-overview/individual-page.png",
    features: [
      "Personal tech support options",
      "Home network security solutions",
      "Device management services",
      "Backup and recovery for personal devices",
      "Pricing tiers for individual needs",
    ],
    path: "/services/individuals",
    category: "Service Page",
  },
  {
    title: "Portfolio",
    description: "Showcase of completed client projects across various industries and service categories.",
    image: "/images/project-overview/portfolio-page.png",
    features: [
      "Filterable project grid by industry and service type",
      "Detailed project case studies with outcomes",
      "Client testimonials for featured projects",
      "Technology stack information for each project",
      "Measurable results and business impact",
    ],
    path: "/portfolio",
    category: "Showcase Page",
  },
  {
    title: "Case Studies",
    description: "In-depth analysis of selected client projects with problem statements, solutions, and outcomes.",
    image: "/images/project-overview/case-studies-page.png",
    features: [
      "Detailed problem analysis for each case study",
      "Step-by-step solution implementation",
      "Before and after comparisons",
      "Measurable outcomes and client feedback",
      "Related case study recommendations",
    ],
    path: "/case-studies",
    category: "Showcase Page",
  },
  {
    title: "Blog",
    description: "Knowledge sharing platform with articles on technology trends, best practices, and company news.",
    image: "/images/project-overview/blog-page.png",
    features: [
      "Categorized blog posts by topic",
      "Featured and recent article sections",
      "Author profiles with expertise areas",
      "Social sharing integration",
      "Newsletter signup for blog updates",
    ],
    path: "/blog",
    category: "Content Page",
  },
  {
    title: "Mentorship Program",
    description: "Information about F09 Tech's internship and mentorship opportunities for aspiring IT professionals.",
    image: "/images/project-overview/mentorship-page.png",
    features: [
      "Program overview and eligibility requirements",
      "Application process timeline",
      "Mentor profiles and specializations",
      "Success stories from past participants",
      "FAQ section for common questions",
    ],
    path: "/mentorship",
    category: "Program Page",
  },
  {
    title: "Contact Page",
    description:
      "Multiple contact options including form submission, office locations, and direct contact information.",
    image: "/images/project-overview/contact-page.png",
    features: [
      "Interactive contact form with service selection",
      "Office location map with directions",
      "Direct contact information for departments",
      "Emergency support information",
      "FAQ section for common inquiries",
    ],
    path: "/contact",
    category: "Core Page",
  },
  {
    title: "Get Started Process",
    description: "Multi-step form guiding potential clients through the service selection and inquiry process.",
    image: "/images/project-overview/get-started-page.png",
    features: [
      "Step-by-step service selection wizard",
      "Dynamic form fields based on service type",
      "Instant quote generation for standard services",
      "Scheduling integration for consultations",
      "Progress saving for complex inquiries",
    ],
    path: "/get-started",
    category: "Conversion Page",
  },
  {
    title: "FAQ Page",
    description: "Comprehensive collection of frequently asked questions organized by topic.",
    image: "/images/project-overview/faq-page.png",
    features: [
      "Categorized questions by service type",
      "Expandable answer sections",
      "Search functionality for quick answers",
      "Related question suggestions",
      "Direct contact option for unanswered questions",
    ],
    path: "/faq",
    category: "Support Page",
  },
  {
    title: "Privacy Policy",
    description: "Detailed information about data collection, usage, and privacy practices.",
    image: "/images/project-overview/privacy-page.png",
    features: [
      "Comprehensive privacy policy statements",
      "Cookie usage information",
      "Data retention policies",
      "User rights and data access procedures",
      "Third-party data sharing disclosures",
    ],
    path: "/privacy-policy",
    category: "Legal Page",
  },
  {
    title: "Terms of Service",
    description: "Legal terms governing the use of F09 Tech services and website.",
    image: "/images/project-overview/terms-page.png",
    features: [
      "Service usage terms and conditions",
      "Intellectual property protections",
      "Limitation of liability clauses",
      "Service level agreement references",
      "Dispute resolution procedures",
    ],
    path: "/terms-of-service",
    category: "Legal Page",
  },
]

export function ProjectOverviewGrid() {
  // Group projects by category
  const groupedProjects = projects.reduce(
    (acc, project) => {
      if (!acc[project.category]) {
        acc[project.category] = []
      }
      acc[project.category].push(project)
      return acc
    },
    {} as Record<string, typeof projects>,
  )

  // Get categories in desired order
  const categories = [
    "Core Page",
    "Service Page",
    "Showcase Page",
    "Content Page",
    "Program Page",
    "Conversion Page",
    "Support Page",
    "Legal Page",
  ]

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">Completed Website Pages</h2>

        <div className="space-y-16">
          {categories.map(
            (category) =>
              groupedProjects[category] && (
                <div key={category} className="space-y-6">
                  <h3 className="text-2xl font-semibold">{category}</h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {groupedProjects[category].map((project, index) => (
                      <Card key={index} className="overflow-hidden flex flex-col">
                        <div className="relative h-48 w-full">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="flex-grow p-6">
                          <div className="mb-2">
                            <Badge>{project.category}</Badge>
                          </div>
                          <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                          <p className="text-muted-foreground mb-4">{project.description}</p>
                          <h5 className="font-medium mb-2">Key Features:</h5>
                          <ul className="text-sm space-y-1 list-disc pl-5">
                            {project.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter className="border-t p-6 pt-4">
                          <Button asChild variant="outline" className="w-full">
                            <Link href={project.path} className="flex items-center justify-center">
                              View Page <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </section>
  )
}
