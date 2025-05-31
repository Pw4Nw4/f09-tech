import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "@/components/layout/logo"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container">
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo className="mb-4" />
              <p className="mb-4 text-muted-foreground">
                Innovative IT and cybersecurity solutions empowering businesses with cutting-edge technology and expert
                guidance.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://twitter.com/f09tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-brand-500"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://facebook.com/f09tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-brand-500"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/company/f09tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-brand-500"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com/f09tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-brand-500"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services#cybersecurity"
                    className="text-muted-foreground transition-colors hover:text-brand-500"
                  >
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link href="/services#cloud" className="text-muted-foreground transition-colors hover:text-brand-500">
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#consulting"
                    className="text-muted-foreground transition-colors hover:text-brand-500"
                  >
                    IT Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#managed"
                    className="text-muted-foreground transition-colors hover:text-brand-500"
                  >
                    Managed Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground transition-colors hover:text-brand-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/mission" className="text-muted-foreground transition-colors hover:text-brand-500">
                    Mission & Values
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground transition-colors hover:text-brand-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground transition-colors hover:text-brand-500">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-muted-foreground transition-colors hover:text-brand-500">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 text-brand-500" />
                  <span className="text-muted-foreground">Atlanta, Georgia</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-brand-500" />
                  <a href="tel:+11234567890" className="text-muted-foreground transition-colors hover:text-brand-500">
                    (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-brand-500" />
                  <a
                    href="mailto:info@f09tech.com"
                    className="text-muted-foreground transition-colors hover:text-brand-500"
                  >
                    info@f09tech.com
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="mb-2 text-sm font-medium">Subscribe to our newsletter</h4>
                <div className="flex">
                  <Input type="email" placeholder="Your email" className="rounded-r-none border-r-0" />
                  <Button className="rounded-l-none bg-gradient-primary text-white">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} F09 Tech LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
