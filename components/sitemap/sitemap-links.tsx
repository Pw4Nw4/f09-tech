import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface SitemapCategoryProps {
  title: string
  links: {
    title: string
    href: string
    description?: string
  }[]
}

function SitemapCategory({ title, links }: SitemapCategoryProps) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="group flex items-start">
              <ChevronRight className="mr-2 h-5 w-5 text-muted-foreground group-hover:text-brand-500" />
              <div>
                <span className="font-medium group-hover:text-brand-500 transition-colors">{link.title}</span>
                {link.description && <p className="text-sm text-muted-foreground">{link.description}</p>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SitemapLinks() {
  const mainPages = [
    { title: "Home", href: "/", description: "Our main landing page" },
    { title: "About Us", href: "/about", description: "Learn about our company and team" },
    { title: "Mission & Values", href: "/mission", description: "Our mission and core values" },
    { title: "Contact Us", href: "/contact", description: "Get in touch with our team" },
  ]

  const servicePages = [
    { title: "All Services", href: "/services", description: "Overview of all our services" },
    { title: "Services for Individuals", href: "/services/individuals", description: "IT solutions for personal use" },
    {
      title: "Services for Retail",
      href: "/services/retail",
      description: "Specialized solutions for retail businesses",
    },
    { title: "Services for Enterprises", href: "/services/enterprise", description: "Enterprise-grade IT solutions" },
  ]

  const resourcePages = [
    { title: "Blog", href: "/blog", description: "Latest insights and articles" },
    { title: "Case Studies", href: "/case-studies", description: "Detailed client success stories" },
    { title: "Portfolio", href: "/portfolio", description: "Our completed projects" },
    { title: "Mentorship", href: "/mentorship", description: "Our mentorship and internship programs" },
  ]

  const supportPages = [
    { title: "FAQ", href: "/faq", description: "Frequently asked questions" },
    { title: "Privacy Policy", href: "/privacy-policy", description: "Our privacy practices" },
    { title: "Terms of Service", href: "/terms-of-service", description: "Terms and conditions" },
    { title: "Sitemap", href: "/sitemap", description: "Overview of all pages" },
  ]

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <SitemapCategory title="Main Pages" links={mainPages} />
      <SitemapCategory title="Services" links={servicePages} />
      <SitemapCategory title="Resources" links={resourcePages} />
      <SitemapCategory title="Support" links={supportPages} />
    </div>
  )
}
