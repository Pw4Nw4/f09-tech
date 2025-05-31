import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Compass, Lightbulb, Users, Shield, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Mission - F09 Tech | Driving Digital Transformation",
  description:
    "Discover F09 Tech's mission to empower businesses through innovative IT solutions, cybersecurity excellence, and transformative technology partnerships.",
}

export default function MissionPage() {
  return (
    <main className="pb-20">
      {/* Hero Section - Replaced background image with gradient */}
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-24 overflow-hidden">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-mission" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 0h40v40H0z" fill="none" />
                <path d="M0 0h1v1H0z" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-mission)" />
          </svg>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
          <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Our Mission & Vision</h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">
              Driving digital transformation through innovation, security, and excellence
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors text-white font-medium"
              >
                Partner with us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-slate-950 to-transparent"></div>
      </section>

      {/* Rest of the content remains the same */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Target className="h-10 w-10 text-cyan-600 mr-4" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 mb-12">
              <p className="text-xl leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
                To provide innovative and secure IT solutions that{" "}
                <span className="font-semibold text-cyan-700 dark:text-cyan-500">empower businesses</span> to thrive in
                the digital age, ensuring their technological infrastructure is robust, efficient, and resilient against
                emerging threats.
              </p>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                We achieve this by leveraging cutting-edge technology, fostering a culture of continuous improvement,
                and building strong, lasting partnerships with our clients. Our commitment extends beyond service
                delivery to becoming a trusted advisor and technology partner for businesses navigating the complexities
                of modern IT landscapes.
              </p>
            </div>

            <div className="flex items-center mb-8">
              <Compass className="h-10 w-10 text-cyan-600 mr-4" />
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <p className="text-xl leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
                To be the most trusted and{" "}
                <span className="font-semibold text-cyan-700 dark:text-cyan-500">innovative IT service provider</span>{" "}
                in the region, recognized for pioneering advancements in cybersecurity and delivering exceptional
                customer experiences.
              </p>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                F09 Tech will set the standard for excellence in the industry, helping businesses of all sizes achieve
                their technological potential while maintaining the highest levels of security and reliability. We
                envision a future where our clients view technology not as a challenge but as a strategic advantage that
                drives growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Strategic Goals</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Our long-term objectives that guide our growth and impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900 p-3 rounded-lg mr-4">
                    <Shield className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Security Leadership</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Establish F09 Tech as the premier cybersecurity authority in Atlanta, developing innovative security
                  frameworks that anticipate and neutralize emerging threats.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900 p-3 rounded-lg mr-4">
                    <Lightbulb className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Innovation Hub</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Create an innovation ecosystem that fosters the development of next-generation IT solutions,
                  leveraging AI, machine learning, and advanced analytics.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900 p-3 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Community Impact</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Expand our mentorship programs to reach underserved communities, bridging the digital divide and
                  cultivating the next generation of IT professionals.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900 p-3 rounded-lg mr-4">
                    <BarChart3 className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Business Transformation</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Help 500+ SMBs achieve digital transformation by 2026, enabling them to leverage technology as a
                  competitive advantage in their respective industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - Replaced background image with gradient */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                How we're making a difference in the digital landscape
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="relative overflow-hidden rounded-xl">
                {/* Gradient background instead of image */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700"></div>

                {/* Geometric pattern overlay */}
                <div className="absolute inset-0 z-0 opacity-10">
                  <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="dots-pattern-impact" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots-pattern-impact)" />
                  </svg>
                </div>

                <div className="relative h-64 flex items-center p-8">
                  <div className="text-white max-w-2xl">
                    <h3 className="text-2xl font-bold mb-4">Transforming Businesses Through Technology</h3>
                    <p className="mb-4">
                      We've helped over 200 businesses modernize their IT infrastructure, resulting in an average of 32%
                      increase in operational efficiency and a 45% reduction in security incidents.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <span className="block text-2xl font-bold">98%</span>
                        <span className="text-sm">Client Retention</span>
                      </div>
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <span className="block text-2xl font-bold">200+</span>
                        <span className="text-sm">Businesses Served</span>
                      </div>
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <span className="block text-2xl font-bold">45%</span>
                        <span className="text-sm">Security Improvement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors text-white font-medium"
              >
                Explore our case studies <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Replaced background image with gradient */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-cta" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 0h40v40H0z" fill="none" />
                <path d="M0 0h1v1H0z" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-cta)" />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Our Mission</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Partner with F09 Tech to transform your business through innovative technology solutions and world-class
              cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors text-white font-medium"
              >
                Contact us today
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors text-white font-medium"
              >
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
