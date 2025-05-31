import type { Metadata } from "next"
import MentorshipPortalClientPage from "./MentorshipPortalClientPage"

export const metadata: Metadata = {
  title: "Mentorship Portal - F09 Tech | Learn and Grow",
  description:
    "Access the F09 Tech Mentorship Portal to engage with mentors, access learning materials, and track your progress in our training programs.",
}

export default function MentorshipPortalPage() {
  return <MentorshipPortalClientPage />
}
