import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Github,
  Youtube,
  ArrowRight,
  ExternalLink,
} from "lucide-react"

export function MainFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container">
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-block">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-2xl font-bold text-transparent">
                F09 Tech
              </span>
            </Link>
            <p className="mb-4 text-slate-600 dark:text-slate-400">
              Innovative IT and cybersecurity solutions empowering businesses with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com/f09tech" icon={<Twitter />} label="Twitter" />
              <SocialLink href="https://facebook.com/f09tech" icon={<Facebook />} label="Facebook" />
              <SocialLink href="https://linkedin.com/company/f09tech" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="https://instagram.com/f09tech" icon={<Instagram />} label="Instagram" />
              <SocialLink href="https://github.com/f09tech" icon={<Github />} label="GitHub" />
              <SocialLink href="https://youtube.com/f09tech" icon={<Youtube />} label="YouTube" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/services" label="Services" />
              <FooterLink href="/portfolio" label="Portfolio" />
              <FooterLink href="/blog" label="Blog" />
              <FooterLink href="/contact" label="Contact" />
              <FooterLink href="/get-started" label="Get Started" />
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Legal & Help</h3>
            <ul className="space-y-2">
              <FooterLink href="/privacy-policy" label="Privacy Policy" />
              <FooterLink href="/terms-of-service" label="Terms of Service" />
              <FooterLink href="/faq" label="FAQ" />
              <FooterLink href="/sitemap" label="Sitemap" />
              <FooterLink href="/accessibility" label="Accessibility" />
              <FooterLink href="/cookie-policy" label="Cookie Policy" />
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-cyan-500 shrink-0" />
                <span className="text-slate-600 dark:text-slate-400">Atlanta, Georgia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-cyan-500 shrink-0" />
                <a
                  href="tel:+11234567890"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-cyan-500 shrink-0" />
                <a
                  href="mailto:info@f09tech.com"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  info@f09tech.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="mb-2 text-sm font-medium text-slate-900 dark:text-white">Subscribe to our newsletter</h4>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-r-none border-slate-300 dark:border-slate-700"
                  aria-label="Email for newsletter"
                />
                <Button className="rounded-l-none bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              &copy; {currentYear} F09 Tech LLC. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-4 md:mt-0">
              <a
                href="/sitemap"
                className="text-sm text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                Sitemap
              </a>
              <a
                href="/privacy-policy"
                className="text-sm text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                Privacy
              </a>
              <a
                href="/terms-of-service"
                className="text-sm text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-500 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, label, external = false }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
        {external && <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />}
      </Link>
    </li>
  )
}
