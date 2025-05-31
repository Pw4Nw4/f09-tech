import type { Metadata } from "next"
import { MentorshipHero } from "@/components/mentorship/mentorship-hero"
import { InternshipProcess } from "@/components/mentorship/internship-process"
import { SelfAssessment } from "@/components/mentorship/self-assessment"
import { MentorshipResources } from "@/components/mentorship/mentorship-resources"
import { PracticalExperience } from "@/components/mentorship/practical-experience"
import { CareerRoadmap } from "@/components/mentorship/career-roadmap"
import { MentorshipTestimonials } from "@/components/mentorship/mentorship-testimonials"
import { MentorshipCTA } from "@/components/mentorship/mentorship-cta"

export const metadata: Metadata = {
  title: "Mentorship & Internship Program - F09 Tech | Launch Your IT Career",
  description:
    "Join F09 Tech's mentorship and internship program to gain hands-on experience, professional guidance, and a clear pathway to a successful career in IT and cybersecurity.",
}

export default function MentorshipPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <MentorshipHero />
      <InternshipProcess />
      <SelfAssessment />
      <MentorshipResources />
      <PracticalExperience />
      <CareerRoadmap />
      <MentorshipTestimonials />
      <MentorshipCTA />
    </main>
  )
}
