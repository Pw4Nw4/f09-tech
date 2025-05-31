import { AboutHero } from "@/components/about/about-hero"
import { AboutIntro } from "@/components/about/about-intro"
import { CompanyHistory } from "@/components/about/company-history"
import { FounderProfiles } from "@/components/about/founder-profiles"
import { CTASection } from "@/components/home/cta-section"
import { PerformanceOptimizer } from "@/components/performance-optimizer"

export default function AboutPage() {
  return (
    <main>
      <PerformanceOptimizer />
      <AboutHero />
      <AboutIntro />
      <CompanyHistory />
      <FounderProfiles />
      <CTASection />
    </main>
  )
}
