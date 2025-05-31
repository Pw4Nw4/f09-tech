import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
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
              <Link
                href="https://twitter.com/f09tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com/f09tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/f09tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/f09tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#cybersecurity"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cloud"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services#consulting"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services#managed"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  Managed Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-cyan-500" />
                <span className="text-slate-600 dark:text-slate-400">Atlanta, Georgia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-cyan-500" />
                <a
                  href="tel:+11234567890"
                  className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-cyan-500" />
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
                />
                <Button className="rounded-l-none bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-center dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            &copy; {new Date().getFullYear()} F09 Tech LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
