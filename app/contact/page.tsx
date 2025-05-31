import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMap } from "@/components/contact/contact-map"
import { ContactFAQ } from "@/components/contact/contact-faq"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Contact Us - Get In Touch | F09 Tech",
  description: "Reach out to F09 Tech for innovative IT solutions and cybersecurity services in Atlanta, Georgia.",
}

export default function ContactPage() {
  return (
    <main className="pb-12 sm:pb-16 md:pb-20 pt-6 sm:pt-8 md:pt-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Get in Touch</h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Have questions about our services or want to discuss your IT needs? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <ContactForm />
            <div className="space-y-8">
              <ContactInfo />
              <div className="hidden sm:block">
                <Separator className="my-8" />
                <ContactMap />
              </div>
            </div>
          </div>
          <div className="block sm:hidden mt-8">
            <Separator className="mb-8" />
            <ContactMap />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 sm:mb-8 md:mb-10 text-center text-2xl sm:text-3xl md:text-4xl">
              Frequently Asked Questions
            </h2>
            <ContactFAQ />
          </div>
        </div>
      </section>
    </main>
  )
}
