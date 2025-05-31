import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | F09 Tech",
  description: "Learn about how F09 Tech collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4 pl-0 text-cyan-600 dark:text-cyan-400">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: May 18, 2025</p>
      </div>

      <div className="prose max-w-none dark:prose-invert">
        <p>
          At F09 Tech, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website or use our services.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect personal information that you voluntarily provide to us when you express an interest in
          obtaining information about us or our products and services, when you participate in activities on our
          website, or otherwise when you contact us.
        </p>

        <h2>How We Use Your Information</h2>
        <p>We may use the information we collect from you in the following ways:</p>
        <ul>
          <li>To provide, operate, and maintain our website and services</li>
          <li>To improve, personalize, and expand our website and services</li>
          <li>To understand and analyze how you use our website and services</li>
          <li>To develop new products, services, features, and functionality</li>
          <li>To communicate with you about our services, updates, and other information</li>
          <li>To process transactions and send related information</li>
          <li>To find and prevent fraud</li>
        </ul>

        <h2>Third-Party Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties
          unless we provide you with advance notice. This does not include website hosting partners and other parties
          who assist us in operating our website, conducting our business, or servicing you, so long as those parties
          agree to keep this information confidential.
        </p>

        <h2>Cookies and Tracking Technologies</h2>
        <p>
          We may use cookies, web beacons, tracking pixels, and other tracking technologies on our website to help
          customize the website and improve your experience. By using the website, you agree to our use of cookies.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement security measures designed to protect your information from unauthorized access, disclosure,
          alteration, and destruction. However, no data transmission over the Internet or wireless network can be
          guaranteed to be 100% secure.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the "Last Updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:privacy@f09tech.com">privacy@f09tech.com</a>.
        </p>
      </div>
    </div>
  )
}
