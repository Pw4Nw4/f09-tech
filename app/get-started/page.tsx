import type { Metadata } from "next"
import GetStartedForm from "@/components/get-started/get-started-form"

export const metadata: Metadata = {
  title: "Get Started with F09 Tech | Tailored IT Solutions",
  description:
    "Start your journey with F09 Tech. Tell us about your needs, and we'll connect you with the perfect IT solution for individuals, retail businesses, or enterprises.",
  keywords: [
    "F09 Tech",
    "IT Solutions",
    "Get Started",
    "Consultation",
    "Cybersecurity",
    "Network Solutions",
    "Technology Services",
  ],
  openGraph: {
    title: "Get Started with F09 Tech",
    description:
      "Take the first step towards transforming your technology infrastructure with F09 Tech's tailored IT solutions.",
    url: "https://f09tech.com/get-started",
    siteName: "F09 Tech",
    locale: "en_US",
    type: "website",
  },
}

export default function GetStartedPage() {
  return (
    <main className="flex-1">
      <GetStartedForm />
    </main>
  )
}
