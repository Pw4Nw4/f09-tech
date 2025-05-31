import { BlogHeader } from "@/components/blog/blog-header"
import { BlogList } from "@/components/blog/blog-list"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "Cybersecurity Blog | F09 Tech",
  description:
    "Expert guidance on protecting your business from cyber threats, with practical tips and affordable solutions for organizations of all sizes",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHeader />

      <section className="py-12">
        <div className="container">
          <BlogList />
        </div>
      </section>

      <CTASection
        title="Need Expert Cybersecurity Help?"
        description="Our team of security specialists can help you protect your business from today's evolving threats."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </main>
  )
}
