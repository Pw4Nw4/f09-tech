import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | F09 Tech",
  description: "Read the terms and conditions governing the use of F09 Tech's website and services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4 pl-0 text-cyan-600 dark:text-cyan-400">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: May 18, 2025</p>
      </div>

      <div className="prose max-w-none dark:prose-invert">
        <p>
          These Terms of Service ("Terms") govern your access to and use of the F09 Tech website and services. Please
          read these Terms carefully before using our services.
        </p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms,
          you may not access or use our services.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We may modify these Terms at any time. If we make changes, we will provide notice of such changes, such as by
          sending an email notification, providing notice through our services, or updating the "Last Updated" date at
          the beginning of these Terms. Your continued use of our services following notification of changes will
          constitute your acceptance of such changes.
        </p>

        <h2>Use of Services</h2>
        <p>
          You may use our services only in compliance with these Terms and all applicable laws and regulations. Our
          services are not intended for use by persons under the age of 18. By using our services, you represent and
          warrant that you are at least 18 years of age.
        </p>

        <h2>User Accounts</h2>
        <p>
          When you create an account with us, you must provide accurate and complete information. You are solely
          responsible for the activity that occurs on your account, and you must keep your account password secure.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          Our services and all content and materials included on or within our services, such as text, graphics, logos,
          images, and software, are the property of F09 Tech or its licensors and are protected by copyright, trademark,
          and other intellectual property laws.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          In no event will F09 Tech, its affiliates, or their licensors, service providers, employees, agents, officers,
          or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with
          your use, or inability to use, our services, including any direct, indirect, special, incidental,
          consequential, or punitive damages.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless F09 Tech, its affiliates, licensors, and service providers,
          and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers,
          successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs,
          expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these
          Terms or your use of our services.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms and your use of our services will be governed by and construed in accordance with the laws of the
          State of Georgia, without giving effect to any choice or conflict of law provision or rule.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <a href="mailto:legal@f09tech.com">legal@f09tech.com</a>.
        </p>
      </div>
    </div>
  )
}
