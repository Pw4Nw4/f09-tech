import type { Metadata } from "next"
import Link from "next/link"
import { Hospital, Shield, Database, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Healthcare IT Solutions - F09 Tech",
  description:
    "Secure, compliant, and efficient IT solutions for healthcare providers, hospitals, and medical practices.",
}

export default function HealthcareSolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="/services/enterprise"
                className="flex items-center text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Back to Enterprise Services
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 mb-4">
                Enterprise Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Healthcare Technology Solutions</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Secure, compliant, and efficient IT solutions designed specifically for healthcare providers, hospitals,
                and medical practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#solutions">Explore Solutions</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 relative flex items-center justify-center">
                <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-8 w-full h-full flex items-center justify-center">
                  <Hospital className="h-12 w-12 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16" id="solutions">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Tailored Solutions for Healthcare</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We understand the unique challenges facing the healthcare industry and provide specialized technology
              solutions to address them.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Key Challenges in Healthcare</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">HIPAA Compliance</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Meeting strict regulatory requirements for patient data protection and privacy while maintaining
                    operational efficiency.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Legacy System Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Integrating modern solutions with existing legacy healthcare systems and ensuring seamless data
                    flow.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Data Security</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Protecting sensitive patient information from increasingly sophisticated cyber threats and data
                    breaches.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Operational Efficiency</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Streamlining clinical workflows and administrative processes while maintaining high quality of care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Our Healthcare Solutions</h3>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-3 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">HIPAA-Compliant Infrastructure</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Secure cloud and on-premises infrastructure designed specifically to meet HIPAA requirements, with
                    comprehensive audit trails, access controls, and encryption.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-3 flex items-center justify-center">
                    <Database className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Electronic Health Record (EHR) Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Seamless integration services for connecting EHR systems with other clinical and administrative
                    applications, ensuring consistent data across your organization.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-3 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Healthcare Cybersecurity</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Specialized security solutions for healthcare environments, including medical device security,
                    network segmentation, and advanced threat protection.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-3 flex items-center justify-center">
                    <Laptop className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Telehealth Infrastructure</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reliable, secure, and user-friendly telehealth platforms that enable remote patient consultations
                    while maintaining compliance and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Benefits for Healthcare Organizations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p className="text-gray-700 dark:text-gray-200">
                  Enhanced patient data security and privacy protection
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p className="text-gray-700 dark:text-gray-200">
                  Streamlined clinical workflows and improved operational efficiency
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p className="text-gray-700 dark:text-gray-200">
                  Reduced risk of compliance violations and associated penalties
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p className="text-gray-700 dark:text-gray-200">
                  Improved patient experience through modern digital solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-4">Ready to transform your healthcare technology?</h2>
                <p className="text-amber-50 mb-6">
                  Schedule a consultation with our healthcare technology specialists to discuss your specific needs and
                  challenges.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-white text-amber-600 hover:bg-gray-100">
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                  <Button variant="outline" asChild className="border-white text-white hover:bg-white/10">
                    <Link href="/services/enterprise">Explore Other Industries</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="bg-white/20 rounded-full p-6 w-32 h-32 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
