import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | F09 Tech",
  description: "Find answers to common questions about F09 Tech's services and solutions.",
}

export default function FAQPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4 pl-0 text-cyan-600 dark:text-cyan-400">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">
          Find answers to the most common questions about our services and solutions.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What services does F09 Tech offer?</AccordionTrigger>
          <AccordionContent>
            F09 Tech offers a comprehensive range of IT and cybersecurity services, including cybersecurity solutions,
            cloud services, IT consulting, and managed services. We provide tailored solutions for individuals, retail
            businesses, and enterprise organizations.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How do I get started with F09 Tech?</AccordionTrigger>
          <AccordionContent>
            Getting started is easy! Simply click on the "Get Started" button on our website, and you'll be guided
            through a simple process to help us understand your needs. Alternatively, you can contact us directly via
            phone or email to schedule a consultation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What industries do you serve?</AccordionTrigger>
          <AccordionContent>
            We serve a wide range of industries, including healthcare, finance, retail, manufacturing, education, and
            government. Our solutions are customized to meet the specific needs and compliance requirements of each
            industry.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Do you offer support for remote work setups?</AccordionTrigger>
          <AccordionContent>
            Yes, we provide comprehensive support for remote work environments. This includes secure VPN solutions,
            cloud-based collaboration tools, endpoint security, and remote IT support to ensure your team can work
            efficiently and securely from anywhere.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>What cybersecurity services do you provide?</AccordionTrigger>
          <AccordionContent>
            Our cybersecurity services include vulnerability assessments, penetration testing, security audits, incident
            response, security awareness training, and managed security services. We also offer specialized solutions
            like ransomware protection and data loss prevention.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>How do your managed services work?</AccordionTrigger>
          <AccordionContent>
            Our managed services provide proactive monitoring, maintenance, and support for your IT infrastructure. We
            offer different service levels to meet your needs, from basic monitoring to comprehensive 24/7 support. Our
            team handles updates, security patches, backups, and troubleshooting to keep your systems running smoothly.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>Do you offer cloud migration services?</AccordionTrigger>
          <AccordionContent>
            Yes, we specialize in cloud migration services. We help businesses transition from on-premises
            infrastructure to cloud platforms like AWS, Azure, and Google Cloud. Our approach includes assessment,
            planning, migration, and post-migration support to ensure a smooth transition with minimal disruption.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>What makes F09 Tech different from other IT service providers?</AccordionTrigger>
          <AccordionContent>
            F09 Tech stands out through our personalized approach, technical expertise, and commitment to client
            success. We focus on understanding your business goals and challenges to deliver solutions that drive real
            value. Our team stays at the forefront of technology trends and security practices to provide innovative,
            effective solutions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-12 rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
        <h2 className="mb-4 text-xl font-semibold">Still have questions?</h2>
        <p className="mb-6">
          Our team is ready to help. Contact us for personalized assistance with your IT and cybersecurity needs.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
