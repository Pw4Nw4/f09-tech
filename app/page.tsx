import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { FoundersSection } from "@/components/home/founders-section"
import { StatsSection } from "@/components/home/stats-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { PerformanceOptimizer } from "@/components/performance-optimizer"

export default function HomePage() {
  return (
    <main>
      <PerformanceOptimizer />
      <HeroSection />
      <ServicesSection />
      <FoundersSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
