import type { Metadata } from "next"
import MentorshipApplicationClient from "./MentorshipApplicationClient"

export const metadata: Metadata = {
  title: "Apply for Mentorship Program - F09 Tech | Start Your IT Career",
  description:
    "Apply to join F09 Tech's mentorship program. Fill out our application form to begin your journey toward a successful career in IT and cybersecurity.",
}

export default function MentorshipApplicationPage() {
  return <MentorshipApplicationClient />
}
