import { CaseStudiesHeader } from "@/components/case-studies/case-studies-header"
import { CaseStudyList } from "@/components/case-studies/case-study-list"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "Case Studies | F09 Tech",
  description:
    "Explore how F09 Tech has helped businesses of all sizes overcome security challenges with practical, affordable solutions.",
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <CaseStudiesHeader />

      <section className="py-12">
        <div className="container">
          <CaseStudyList />
        </div>
      </section>

      <CTASection
        title="Ready to Secure Your Business?"
        description="Let's discuss how F09 Tech can help you implement effective, affordable security solutions tailored to your specific needs."
        buttonText="Get a Free Assessment"
        buttonLink="/contact"
      />
    </main>
  )
}
