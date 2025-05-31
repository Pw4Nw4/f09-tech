"use client"

import { useState } from "react"

export function EnterpriseServicesSolutions() {
  const [activeIndustry, setActiveIndustry] = useState("healthcare")

  const industries = [
    {
      id: "healthcare",
      name: "Healthcare",
      iconSvg: (
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
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M8 9h8"></path>
          <path d="M8 13h6"></path>
          <path d="M18 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12Z"></path>
          <path d="M18 9h.01"></path>
          <path d="M18 13h.01"></path>
        </svg>
      ),
      title: "Healthcare Technology Solutions",
      description:
        "Our healthcare IT solutions ensure HIPAA compliance, secure patient data management, telehealth infrastructure, and electronic health record systems that improve patient care and operational efficiency.",
      features: [
        "HIPAA-compliant infrastructure and security",
        "Telehealth platform integration",
        "EHR/EMR system implementation and support",
        "Medical device network security",
        "Healthcare data analytics and reporting",
        "Patient portal and engagement solutions",
      ],
    },
    {
      id: "finance",
      name: "Financial Services",
      iconSvg: (
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
          className="h-6 w-6"
          aria-hidden="true"
        >
          <rect x="3" y="8" width="18" height="12" rx="2"></rect>
          <path d="M7 8V6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2"></path>
          <path d="M12 14v.01"></path>
        </svg>
      ),
      title: "Financial Technology Solutions",
      description:
        "Secure, compliant, and efficient IT systems for financial institutions including banks, credit unions, and investment firms, with a focus on data protection, regulatory compliance, and continuity of service.",
      features: [
        "PCI DSS and GLBA compliance solutions",
        "Secure transaction processing systems",
        "Financial fraud detection and prevention",
        "Banking system integration and support",
        "Disaster recovery for financial services",
        "FinTech application development and API integration",
      ],
    },
    {
      id: "education",
      name: "Education",
      iconSvg: (
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
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
      title: "Education Technology Solutions",
      description:
        "Comprehensive IT solutions for K-12 schools, higher education institutions, and online learning platforms that enhance the educational experience, improve administrative processes, and secure student data.",
      features: [
        "Learning management system implementation",
        "Student information system integration",
        "Campus-wide network infrastructure",
        "FERPA-compliant data management",
        "Educational device management and support",
        "Virtual classroom technology solutions",
      ],
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      iconSvg: (
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
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
          <path d="M17 18h1"></path>
          <path d="M12 18h1"></path>
          <path d="M7 18h1"></path>
        </svg>
      ),
      title: "Manufacturing Technology Solutions",
      description:
        "IT solutions designed for manufacturing environments, supporting operational technology integration, supply chain management, quality control systems, and factory floor automation.",
      features: [
        "Industrial IoT implementation and management",
        "Manufacturing execution systems (MES)",
        "Supply chain management integration",
        "Quality control and compliance systems",
        "Equipment monitoring and preventive maintenance",
        "OT/IT convergence security",
      ],
    },
    {
      id: "retail",
      name: "Retail",
      iconSvg: (
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
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
          <path d="M3 6h18"></path>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      ),
      title: "Retail Technology Solutions",
      description:
        "Omnichannel retail technology solutions that connect in-store and online experiences, optimize inventory management, enhance customer experiences, and secure payment processing systems.",
      features: [
        "Omnichannel retail platform integration",
        "POS and payment processing systems",
        "Inventory management and optimization",
        "Customer data management and analytics",
        "E-commerce platform implementation and support",
        "In-store technology and digital signage",
      ],
    },
    {
      id: "government",
      name: "Government",
      iconSvg: (
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
          className="h-6 w-6"
          aria-hidden="true"
        >
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
          <path d="M12 12h.01"></path>
          <path d="M17 12h.01"></path>
          <path d="M7 12h.01"></path>
        </svg>
      ),
      title: "Government Technology Solutions",
      description:
        "Secure, compliant IT solutions for government agencies at all levels, designed to meet strict security requirements, improve public service delivery, and modernize legacy systems.",
      features: [
        "FedRAMP and government compliance solutions",
        "Secure cloud transitions for government data",
        "Legacy system modernization",
        "Citizen service portal development",
        "Government network infrastructure security",
        "Public records management systems",
      ],
    },
  ]

  const activeData = industries.find((industry) => industry.id === activeIndustry) || industries[0]

  return (
    <section className="py-20" id="solutions">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Industry-Specific Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tailored enterprise technology solutions designed to address the unique challenges and requirements of
            different industries.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`p-4 rounded-xl flex flex-col items-center justify-center text-center transition-all ${
                activeIndustry === industry.id
                  ? "bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              } border border-gray-200 dark:border-gray-700`}
              aria-pressed={activeIndustry === industry.id}
              aria-label={`Show ${industry.name} solutions`}
            >
              <div
                className={`p-2 rounded-full ${
                  activeIndustry === industry.id
                    ? "bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                } mb-2`}
              >
                {industry.iconSvg}
              </div>
              <span className="text-sm font-medium">{industry.name}</span>
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 dark:bg-amber-600/10 rounded-full blur-3xl -z-0"></div>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 rounded-lg mb-4">
                {activeData.iconSvg}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{activeData.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{activeData.description}</p>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center bg-amber-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-amber-700 transition-colors"
                  aria-label={`Contact us about ${activeData.name} solutions`}
                >
                  Contact Us About {activeData.name} Solutions
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Key Features:</h4>
              <ul className="space-y-3">
                {activeData.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-500 mt-1 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
