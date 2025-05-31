import { ShieldCheck, TrendingUp, Clock, DollarSign } from "lucide-react"
import { CaseStudyLayout } from "../case-study-layout"

// Export the metadata for use in the case studies page
export const metadata = {
  title: "From Zero to SOC: Building Security Monitoring for an E-Commerce Startup",
  excerpt:
    "How we deployed a lightweight SIEM, set up alerts, and onboarded the founder's remote workforce—all on a bootstrap budget.",
  industry: "e-commerce",
  service: "security-monitoring",
  clientName: "Organic Wellness Co.",
  location: "United States (Remote)",
  clientSize: "Startup (15 employees)",
  projectDuration: 2,
  projectSize: 25,
  challenges: ["security", "cost-optimization", "remote-work"],
  technologies: ["siem", "alert-system", "remote-access"],
  results: ["24/7 security monitoring", "Threat detection", "Remote workforce security"],
  businessImpact: [
    "Established 24/7 security monitoring on a startup budget",
    "Detected and prevented 3 potential breaches in first month",
    "Secured remote workforce across 5 different states",
    "Achieved PCI DSS compliance for e-commerce operations",
    "Enabled secure scaling of business operations",
  ],
  image: "/images/case-studies/ecommerce-security.png",
  slug: "ecommerce-startup-security-monitoring",
}

export default function EcommerceSecurityMonitoring() {
  return (
    <CaseStudyLayout
      title="Advanced Security Monitoring for E-commerce Platform"
      industry="E-commerce"
      icon="shopping-cart"
      summary="A growing e-commerce platform experiencing security incidents implemented our advanced security monitoring solution, resulting in a 94% reduction in security incidents, 99.9% uptime during peak shopping seasons, and a 30% decrease in fraud-related losses."
      timeframe="4 months"
      companySize="Mid-size (150+ employees)"
      teamSize="5 security specialists"
      metrics={[
        {
          label: "Security Incident Reduction",
          value: "94%",
          icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        },
        {
          label: "Fraud Loss Reduction",
          value: "30%",
          icon: <DollarSign className="h-8 w-8 text-primary" />,
        },
        {
          label: "Implementation Time",
          value: "120 days",
          icon: <Clock className="h-8 w-8 text-primary" />,
        },
        {
          label: "Platform Uptime",
          value: "99.9%",
          icon: <TrendingUp className="h-8 w-8 text-primary" />,
        },
      ]}
      challenge={
        <>
          <p>
            A rapidly growing e-commerce platform selling specialty products nationwide was facing increasing security
            challenges as their business expanded. With over 50,000 monthly active users and processing thousands of
            transactions daily, they had become an attractive target for cybercriminals.
          </p>
          <p>The client was experiencing several critical issues:</p>
          <ul>
            <li>Frequent attempts at credential stuffing attacks targeting customer accounts</li>
            <li>Periodic DDoS attacks disrupting service during promotional events</li>
            <li>Increasing cases of payment fraud affecting both customers and the business</li>
            <li>Limited visibility into security events across their cloud infrastructure</li>
            <li>Compliance concerns related to PCI DSS requirements</li>
            <li>Stretched internal IT team without dedicated security personnel</li>
          </ul>
          <p>
            These security challenges were not only causing direct financial losses but also beginning to impact
            customer trust and brand reputation. The company needed a comprehensive security monitoring solution that
            could scale with their business while providing robust protection for their platform and customers.
          </p>
        </>
      }
      solution={
        <>
          <p>
            F09 Tech designed and implemented a comprehensive security monitoring solution tailored to the e-commerce
            environment:
          </p>

          <h3>1. Multi-layered Security Architecture</h3>
          <p>We developed a defense-in-depth security architecture specifically designed for e-commerce operations:</p>
          <ul>
            <li>Web Application Firewall (WAF) to protect against OWASP Top 10 vulnerabilities</li>
            <li>DDoS protection service with automatic mitigation capabilities</li>
            <li>API security gateway to monitor and protect API endpoints</li>
            <li>Advanced bot detection and management system</li>
            <li>Secure payment processing integration with enhanced fraud detection</li>
          </ul>

          <h3>2. 24/7 Security Operations Center (SOC)</h3>
          <p>We established continuous monitoring through our dedicated e-commerce security team:</p>
          <ul>
            <li>Real-time monitoring of security events across all platform components</li>
            <li>Behavioral analysis to detect anomalous user and system activities</li>
            <li>Automated alert triage and escalation procedures</li>
            <li>Regular security posture assessments and reporting</li>
            <li>Threat hunting to proactively identify potential compromises</li>
          </ul>

          <h3>3. Fraud Prevention System</h3>
          <p>We implemented a specialized fraud prevention system for e-commerce transactions:</p>
          <ul>
            <li>Machine learning-based transaction analysis to identify suspicious patterns</li>
            <li>Device fingerprinting to detect potential fraud across multiple accounts</li>
            <li>Geolocation analysis and velocity checks</li>
            <li>Custom rules engine tailored to the client's specific business model</li>
            <li>Integration with industry fraud intelligence feeds</li>
          </ul>

          <h3>4. Security Information and Event Management (SIEM)</h3>
          <p>We deployed a cloud-native SIEM solution to provide comprehensive visibility:</p>
          <ul>
            <li>Centralized log collection from all platform components and services</li>
            <li>Correlation rules designed specifically for e-commerce threat scenarios</li>
            <li>User and entity behavior analytics (UEBA) to detect account takeovers</li>
            <li>Compliance-focused reporting for PCI DSS requirements</li>
            <li>Long-term log retention for forensic and compliance purposes</li>
          </ul>

          <h3>5. Incident Response and Recovery</h3>
          <p>We established robust incident response capabilities:</p>
          <ul>
            <li>Documented incident response procedures for various security scenarios</li>
            <li>Regular tabletop exercises to practice response to common e-commerce attacks</li>
            <li>Integration with the client's business continuity plan</li>
            <li>Post-incident analysis and continuous improvement process</li>
          </ul>
        </>
      }
      results={
        <>
          <p>
            Our advanced security monitoring solution delivered significant improvements to the client's security
            posture and business operations:
          </p>

          <h3>Quantitative Results:</h3>
          <ul>
            <li>
              <strong>94% reduction in successful security incidents</strong> within the first six months
            </li>
            <li>
              <strong>99.9% platform uptime</strong> maintained during peak shopping seasons
            </li>
            <li>
              <strong>30% decrease in fraud-related losses</strong> through enhanced detection capabilities
            </li>
            <li>
              <strong>85% reduction in account takeover attempts</strong> reaching customer accounts
            </li>
            <li>
              <strong>100% success rate</strong> in mitigating DDoS attacks with zero customer impact
            </li>
            <li>
              <strong>60% faster detection and response</strong> to security events
            </li>
          </ul>

          <h3>Qualitative Improvements:</h3>
          <ul>
            <li>
              <strong>Enhanced customer trust</strong> through improved security measures and reduced fraud
            </li>
            <li>
              <strong>Streamlined PCI DSS compliance</strong> with comprehensive documentation and controls
            </li>
            <li>
              <strong>Improved security awareness</strong> across the development and operations teams
            </li>
            <li>
              <strong>Better visibility</strong> into security events and potential threats
            </li>
            <li>
              <strong>Increased confidence</strong> in platform stability during high-traffic promotional events
            </li>
            <li>
              <strong>Reduced burden</strong> on internal IT staff, allowing focus on core business initiatives
            </li>
          </ul>

          <p>
            The client has maintained their relationship with F09 Tech, expanding our services to include secure
            development practices and cloud security posture management as their platform continues to grow.
          </p>
        </>
      }
      testimonial={{
        quote:
          "F09 Tech's security monitoring solution has been transformative for our business. Not only have we dramatically reduced security incidents, but we've also gained the confidence to scale our platform knowing our customers' data is protected. Their team's expertise in e-commerce security is unmatched.",
        author: "Michael Chen",
        position: "CTO, E-commerce Platform",
      }}
      additionalSections={[
        {
          id: "lessons-learned",
          title: "Lessons Learned",
          content: (
            <>
              <p>This project provided valuable insights that have informed our approach to e-commerce security:</p>
              <ul>
                <li>
                  <strong>E-commerce security requires specialized knowledge.</strong> The unique challenges of
                  protecting online retail operations demand deep understanding of both security and e-commerce business
                  models.
                </li>
                <li>
                  <strong>Balancing security with user experience is critical.</strong> Security measures must be
                  effective while minimizing friction in the customer journey.
                </li>
                <li>
                  <strong>Fraud patterns evolve rapidly.</strong> Continuous refinement of detection rules and machine
                  learning models is essential to stay ahead of emerging fraud tactics.
                </li>
                <li>
                  <strong>Peak traffic events require special planning.</strong> Security monitoring must scale
                  seamlessly during promotional events and holiday seasons.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "technology-stack",
          title: "Technology Stack",
          content: (
            <>
              <p>The solution implemented for this client utilized the following technologies:</p>
              <ul>
                <li>
                  <strong>Web Application Firewall:</strong> Cloudflare Enterprise
                </li>
                <li>
                  <strong>DDoS Protection:</strong> Cloudflare + F09 Tech custom mitigation
                </li>
                <li>
                  <strong>API Security:</strong> Salt Security
                </li>
                <li>
                  <strong>Bot Management:</strong> DataDome
                </li>
                <li>
                  <strong>Fraud Prevention:</strong> Sift + Custom ML models
                </li>
                <li>
                  <strong>SIEM Solution:</strong> Elastic Security
                </li>
                <li>
                  <strong>Behavioral Analytics:</strong> F09 Tech proprietary UEBA platform
                </li>
              </ul>
            </>
          ),
        },
      ]}
      resources={[
        {
          title: "E-commerce Security Best Practices Guide",
          description: "Comprehensive guide for securing online retail operations",
          downloadUrl: "#download-guide",
        },
        {
          title: "Fraud Prevention Checklist",
          description: "Actionable checklist for implementing e-commerce fraud controls",
          downloadUrl: "#download-checklist",
        },
        {
          title: "Security Incident Response Playbook",
          description: "Step-by-step guide for responding to common e-commerce security incidents",
          downloadUrl: "#download-playbook",
        },
      ]}
      relatedCaseStudies={[
        {
          title: "Ransomware Protection for Multi-Location Retailer",
          slug: "retailer-ransomware-protection",
          industry: "Retail",
          icon: "shield-lock",
        },
        {
          title: "Cloud Migration for Accounting Firm",
          slug: "accounting-cloud-migration",
          industry: "Financial Services",
          icon: "cloud",
        },
        {
          title: "Healthcare Provider Security Assessment",
          slug: "healthcare-security-assessment",
          industry: "Healthcare",
          icon: "heart-pulse",
        },
      ]}
    />
  )
}
