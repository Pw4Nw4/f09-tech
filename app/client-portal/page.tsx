import type { Metadata } from "next"
import ClientPortalClientPage from "./ClientPortalClientPage"

export const metadata: Metadata = {
  title: "Client Portal - F09 Tech | Secure Client Access",
  description:
    "Access your personalized client portal at F09 Tech to manage your projects, track support tickets, and communicate securely with our team.",
}

export default function ClientPortalPage() {
  return <ClientPortalClientPage />
}
