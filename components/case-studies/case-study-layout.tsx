"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import Link from "next/link"
import {
  ShoppingBag,
  ShoppingCart,
  Shield,
  HeartPulse,
  Landmark,
  Cloud,
  Download,
  Share2,
  ChevronRight,
  FileText,
  ExternalLink,
} from "lucide-react"
import { cn } from "@/lib/utils"

type MetricProps = {
  label: string
  value: string
  icon: ReactNode
}

type TestimonialProps = {
  quote: string
  author: string
  position: string
}

type ResourceProps = {
  title: string
  description: string
  downloadUrl: string
}

type RelatedCaseStudyProps = {
  title: string
  slug: string
  industry: string
  icon: string
}

type SectionProps = {
  id: string
  title: string
  content: ReactNode
}

interface CaseStudyLayoutProps {
  title: string
  industry: string
  icon: string
  summary: string
  timeframe: string
  companySize: string
  teamSize: string
  metrics: MetricProps[]
  challenge: ReactNode
  solution: ReactNode
  results: ReactNode
  testimonial: TestimonialProps
  additionalSections?: SectionProps[]
  resources?: ResourceProps[]
  relatedCaseStudies?: RelatedCaseStudyProps[]
}

export function CaseStudyLayout({
  title,
  industry,
  icon,
  summary,
  timeframe,
  companySize,
  teamSize,
  metrics,
  challenge,
  solution,
  results,
  testimonial,
  additionalSections = [],
  resources = [],
  relatedCaseStudies = [],
}: CaseStudyLayoutProps) {
  const [activeSection, setActiveSection] = useState("")
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  // Define all sections including the default ones and additional ones
  const defaultSections = [
    { id: "overview", title: "Overview" },
    { id: "challenge", title: "Challenge" },
    { id: "solution", title: "Solution" },
    { id: "results", title: "Results" },
  ]

  const allSections = [
    ...defaultSections,
    ...(additionalSections || []).map((section) => ({ id: section.id, title: section.title })),
    ...(resources && resources.length > 0 ? [{ id: "resources", title: "Resources" }] : []),
    ...(relatedCaseStudies && relatedCaseStudies.length > 0 ? [{ id: "related", title: "Related Case Studies" }] : []),
  ]

  // Setup intersection observer to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px" },
    )

    // Observe all section elements
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  // Function to get the appropriate icon based on the icon name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "shopping-bag":
        return <ShoppingBag className="h-5 w-5" />
      case "shopping-cart":
        return <ShoppingCart className="h-5 w-5" />
      case "shield-lock":
        return <Shield className="h-5 w-5" />
      case "heart-pulse":
        return <HeartPulse className="h-5 w-5" />
      case "landmark":
        return <Landmark className="h-5 w-5" />
      case "cloud":
        return <Cloud className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full">
      {/* Sidebar Navigation */}
      <aside className="lg:w-64 lg:sticky lg:top-24 lg:self-start hidden lg:block">
        <nav className="p-4 rounded-lg border bg-card">
          <h2 className="text-lg font-semibold mb-4">Contents</h2>
          <ul className="space-y-2">
            {allSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={cn(
                    "block py-2 px-3 rounded-md transition-colors hover:bg-muted",
                    activeSection === section.id ? "bg-muted font-medium" : "",
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t">
            <h3 className="text-sm font-medium mb-2">Share this case study</h3>
            <div className="flex space-x-2">
              <button
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Share2 className="h-4 w-4" />
              </button>
              <button
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Share via Email"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Overview Section */}
        <section id="overview" ref={(el) => (sectionRefs.current["overview"] = el)} className="mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            {getIcon(icon)}
            <span className="ml-2">{industry}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>

          <p className="text-lg text-muted-foreground mb-8">{summary}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="text-sm font-medium text-muted-foreground">Timeframe</h3>
              <p className="font-medium">{timeframe}</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="text-sm font-medium text-muted-foreground">Company Size</h3>
              <p className="font-medium">{companySize}</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="text-sm font-medium text-muted-foreground">Team Size</h3>
              <p className="font-medium">{teamSize}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="p-6 rounded-lg border bg-card flex flex-col items-center text-center">
                <div className="mb-2">{metric.icon}</div>
                <p className="text-2xl font-bold mb-1">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenge Section */}
        <section id="challenge" ref={(el) => (sectionRefs.current["challenge"] = el)} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-destructive/20 text-destructive flex items-center justify-center mr-3">
              1
            </span>
            The Challenge
          </h2>
          <div className="prose max-w-none">{challenge}</div>
        </section>

        {/* Solution Section */}
        <section id="solution" ref={(el) => (sectionRefs.current["solution"] = el)} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
              2
            </span>
            Our Solution
          </h2>
          <div className="prose max-w-none">{solution}</div>
        </section>

        {/* Results Section */}
        <section id="results" ref={(el) => (sectionRefs.current["results"] = el)} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-3">
              3
            </span>
            Results & Impact
          </h2>
          <div className="prose max-w-none">{results}</div>

          {/* Testimonial */}
          <div className="mt-8 p-6 rounded-lg bg-muted border-l-4 border-primary">
            <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
            <div className="flex items-center">
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        {additionalSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
            <div className="prose max-w-none">{section.content}</div>
          </section>
        ))}

        {/* Resources Section */}
        {resources && resources.length > 0 && (
          <section id="resources" ref={(el) => (sectionRefs.current["resources"] = el)} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources.map((resource, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card">
                  <h3 className="font-medium mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <a
                    href={resource.downloadUrl}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Case Studies */}
        {relatedCaseStudies && relatedCaseStudies.length > 0 && (
          <section id="related" ref={(el) => (sectionRefs.current["related"] = el)} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedCaseStudies.map((study, index) => (
                <Link
                  key={index}
                  href={`/case-studies/${study.slug}`}
                  className="p-4 rounded-lg border bg-card hover:bg-muted transition-colors group"
                >
                  <div className="flex items-center mb-2">
                    {getIcon(study.icon)}
                    <span className="text-sm font-medium ml-2">{study.industry}</span>
                  </div>
                  <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">{study.title}</h3>
                  <span className="inline-flex items-center text-sm text-primary">
                    Read case study
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="rounded-lg bg-primary/10 p-6 mb-8">
          <h2 className="text-xl font-bold mb-2">Ready for similar results?</h2>
          <p className="mb-4">
            Let's discuss how F09 Tech can help you implement effective, tailored solutions for your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Explore Services
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
