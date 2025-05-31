import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Shield, Lightbulb, Users, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Core Values - F09 Tech | Principles That Guide Us",
  description:
    "Discover the core values that drive F09 Tech: integrity, innovation, excellence, collaboration, and client-centricity. See how these principles shape our work and culture.",
}

export default function ValuesPage() {
  return (
    <main className="pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/values-bg.png" alt="Values background" fill className="object-cover" priority />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Our Core Values</h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">
              The principles that guide our decisions, actions, and culture
            </p>
            <div className="flex justify-center">
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors text-white font-medium"
              >
                Learn more about us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-slate-950 to-transparent"></div>
      </section>

      {/* Values Introduction */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">What We Stand For</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
              At F09 Tech, our values aren't just words on a wall—they're the principles that guide every decision we
              make, every solution we deliver, and every interaction we have with our clients and community.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                The fundamental beliefs that define our character and culture
              </p>
            </div>

            <div className="space-y-12">
              {/* Integrity */}
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-cyan-600 text-white p-8 flex flex-col justify-center items-center text-center">
                    <Shield className="h-16 w-16 mb-4" />
                    <h3 className="text-2xl font-bold">Integrity</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
                      We operate with unwavering honesty, transparency, and ethical standards in all our business
                      practices. Our clients trust us with their most sensitive data and critical infrastructure, and we
                      honor that trust by always doing what's right, even when no one is watching.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">In Practice:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                        <li>Transparent pricing with no hidden fees or unexpected charges</li>
                        <li>Clear communication about project timelines, challenges, and solutions</li>
                        <li>Strict adherence to data privacy regulations and best practices</li>
                        <li>Recommending only the solutions clients truly need, not what maximizes our profit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Innovation */}
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-indigo-600 text-white p-8 flex flex-col justify-center items-center text-center">
                    <Lightbulb className="h-16 w-16 mb-4" />
                    <h3 className="text-2xl font-bold">Innovation</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
                      We embrace creativity and forward-thinking to develop cutting-edge solutions that address both
                      current challenges and future needs. By staying ahead of technological trends and continuously
                      learning, we ensure our clients benefit from the most advanced and effective IT strategies.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">In Practice:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                        <li>Dedicated research and development team exploring emerging technologies</li>
                        <li>Regular innovation workshops to develop creative solutions to complex problems</li>
                        <li>Early adoption and testing of promising security tools and methodologies</li>
                        <li>Continuous professional development and certification for all team members</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Excellence */}
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-amber-600 text-white p-8 flex flex-col justify-center items-center text-center">
                    <Zap className="h-16 w-16 mb-4" />
                    <h3 className="text-2xl font-bold">Excellence</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
                      We are committed to delivering exceptional quality in everything we do. From the solutions we
                      design to the support we provide, we hold ourselves to the highest standards of performance,
                      reliability, and professionalism. We're not satisfied with "good enough"—we strive for excellence
                      in every aspect of our work.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">In Practice:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                        <li>Rigorous quality assurance processes for all deliverables</li>
                        <li>Regular performance reviews and continuous improvement initiatives</li>
                        <li>Industry-leading response times for support requests</li>
                        <li>Comprehensive documentation and knowledge transfer for all projects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collaboration */}
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-emerald-600 text-white p-8 flex flex-col justify-center items-center text-center">
                    <Users className="h-16 w-16 mb-4" />
                    <h3 className="text-2xl font-bold">Collaboration</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
                      We believe that the best solutions emerge from diverse perspectives working together toward a
                      common goal. We foster a collaborative environment both within our team and with our clients,
                      valuing open communication, mutual respect, and shared success. We're not just service
                      providers—we're partners in our clients' journey.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">In Practice:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                        <li>Cross-functional teams that bring diverse expertise to every project</li>
                        <li>Regular client workshops to ensure alignment and shared understanding</li>
                        <li>Collaborative tools and platforms that facilitate real-time communication</li>
                        <li>Recognition and celebration of team achievements and contributions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client-Centricity */}
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-rose-600 text-white p-8 flex flex-col justify-center items-center text-center">
                    <Heart className="h-16 w-16 mb-4" />
                    <h3 className="text-2xl font-bold">Client-Centricity</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
                      Our clients are at the heart of everything we do. We take the time to understand their unique
                      challenges, goals, and constraints, tailoring our solutions to deliver maximum value and impact.
                      We measure our success by our clients' success, and we're dedicated to building long-term
                      relationships based on trust, results, and exceptional service.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">In Practice:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                        <li>Comprehensive onboarding process to deeply understand client needs</li>
                        <li>Regular business reviews to ensure alignment with evolving priorities</li>
                        <li>Proactive monitoring and support to prevent issues before they impact clients</li>
                        <li>Dedicated account managers who serve as trusted advisors</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values in Action</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Real-world examples of how our values drive our work
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-semibold mb-4">Cybersecurity Emergency Response</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  When a client experienced a ransomware attack, our team worked around the clock to contain the threat,
                  restore systems, and strengthen defenses—demonstrating our commitment to excellence and
                  client-centricity in a critical moment.
                </p>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-500">
                  <span className="font-medium text-cyan-600 dark:text-cyan-400 mr-2">Values demonstrated:</span>
                  <span>Excellence, Client-Centricity, Collaboration</span>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-semibold mb-4">Custom Security Framework</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We developed a proprietary security framework tailored for healthcare providers, combining regulatory
                  compliance with advanced threat protection—showcasing our innovation and integrity in addressing
                  industry-specific challenges.
                </p>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-500">
                  <span className="font-medium text-cyan-600 dark:text-cyan-400 mr-2">Values demonstrated:</span>
                  <span>Innovation, Integrity, Excellence</span>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-semibold mb-4">Mentorship Program</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Our team volunteers time to mentor aspiring IT professionals from underserved communities, sharing
                  knowledge and creating pathways to careers in technology—reflecting our values of collaboration and
                  integrity.
                </p>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-500">
                  <span className="font-medium text-cyan-600 dark:text-cyan-400 mr-2">Values demonstrated:</span>
                  <span>Collaboration, Integrity, Excellence</span>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-semibold mb-4">Cloud Migration Strategy</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Rather than recommending a complete cloud migration, we developed a hybrid solution that better
                  aligned with a client's specific needs and budget constraints—demonstrating our client-centricity and
                  integrity.
                </p>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-500">
                  <span className="font-medium text-cyan-600 dark:text-cyan-400 mr-2">Values demonstrated:</span>
                  <span>Client-Centricity, Integrity, Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Living Our Values</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                How our values shape our team culture and work environment
              </p>
            </div>

            <div className="relative overflow-hidden rounded-xl mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90"></div>
              <Image
                src="/images/team-culture.png"
                alt="Team culture"
                width={1000}
                height={500}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-center p-8">
                <div className="text-white max-w-2xl">
                  <h3 className="text-2xl font-bold mb-4">A Culture of Excellence and Innovation</h3>
                  <p>
                    At F09 Tech, our values aren't just words—they're woven into the fabric of our organization. From
                    our hiring practices to our daily operations, we cultivate an environment where team members are
                    empowered to embody these principles in everything they do.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-semibold mb-3">Continuous Learning</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We invest in our team's growth through dedicated learning time, certification support, and
                  knowledge-sharing sessions.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-semibold mb-3">Open Communication</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We foster transparent dialogue across all levels, ensuring every voice is heard and valued.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-semibold mb-3">Recognition & Appreciation</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We celebrate achievements and acknowledge the contributions that embody our core values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Experience Our Values in Action</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Partner with F09 Tech and discover how our commitment to these core values translates into exceptional
              service and transformative solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors text-white font-medium"
              >
                Get in touch
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors text-white font-medium"
              >
                Learn more about us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
