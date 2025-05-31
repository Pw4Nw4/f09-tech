"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/layout/logo"
import { useMobileDetection } from "@/hooks/use-mobile-detection"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu,
  Server,
  Users,
  FileText,
  Phone,
  Home,
  ChevronDown,
  BookOpen,
  Briefcase,
  GraduationCap,
  X,
  LayoutGrid,
  User,
  Store,
  Building2,
  Award,
} from "lucide-react"

const services = [
  {
    title: "All Services",
    href: "/services",
    description: "Browse our complete range of IT services and solutions",
    icon: Server,
  },
  {
    title: "Individual Services",
    href: "/services/individuals",
    description: "IT solutions tailored for personal and home use",
    icon: User,
  },
  {
    title: "Retail Services",
    href: "/services/retail",
    description: "Specialized IT solutions for retail businesses",
    icon: Store,
  },
  {
    title: "Enterprise Services",
    href: "/services/enterprise",
    description: "Advanced IT solutions for large organizations",
    icon: Building2,
  },
]

const company = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn about our mission, vision, and team",
    icon: Users,
  },
  {
    title: "Mission & Values",
    href: "/mission",
    description: "Discover what drives us and our core principles",
    icon: Briefcase,
  },
  {
    title: "Mentorship",
    href: "/mentorship",
    description: "Our programs to empower the next generation of IT professionals",
    icon: GraduationCap,
  },
]

const resources = [
  {
    title: "Blog",
    href: "/blog",
    description: "Latest insights on technology and cybersecurity",
    icon: FileText,
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "Real-world examples of our successful implementations",
    icon: BookOpen,
  },
]

const portfolio = [
  {
    title: "Portfolio Showcase",
    href: "/portfolio",
    description: "Explore our technical projects and implementations",
    icon: LayoutGrid,
  },
  {
    title: "Success Stories",
    href: "/success-stories",
    description: "See how we've helped our clients succeed",
    icon: Award,
  },
]

export function MainNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { isMobile } = useMobileDetection()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "border-b border-border/40 bg-background/95 backdrop-blur-lg" : "bg-transparent",
      )}
    >
      <div className="container px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/"}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1">
                      {company.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="flex select-none flex-col gap-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2">
                                <item.icon className="h-4 w-4 text-brand-500" />
                                <span className="text-sm font-medium">{item.title}</span>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services"
                            className="flex select-none flex-col gap-1 rounded-md bg-accent/50 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <Server className="h-4 w-4 text-brand-500" />
                              <span className="text-sm font-medium">All Services</span>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Browse our complete range of IT services and solutions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>

                      <li className="col-span-2 mt-2 border-t pt-2">
                        <p className="px-2 text-xs font-medium text-muted-foreground">BY CUSTOMER TYPE</p>
                      </li>

                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/individuals"
                            className="flex select-none flex-col gap-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-brand-500" />
                              <span className="text-sm font-medium">Individual Services</span>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              IT solutions tailored for personal and home use
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>

                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/retail"
                            className="flex select-none flex-col gap-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <Store className="h-4 w-4 text-brand-500" />
                              <span className="text-sm font-medium">Retail Services</span>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Specialized IT solutions for retail businesses
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>

                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/enterprise"
                            className="flex select-none flex-col gap-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <Building2 className="h-4 w-4 text-brand-500" />
                              <span className="text-sm font-medium">Enterprise Services</span>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Advanced IT solutions for large organizations
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1">
                      {portfolio.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="flex select-none flex-col gap-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2">
                                <item.icon className="h-4 w-4 text-brand-500" />
                                <span className="text-sm font-medium">{item.title}</span>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1">
                      {resources.map((resource) => (
                        <li key={resource.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={resource.href}
                              className="flex select-none flex-col gap-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2">
                                <resource.icon className="h-4 w-4 text-brand-500" />
                                <span className="text-sm font-medium">{resource.title}</span>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {resource.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/contact"}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button asChild className="bg-gradient-primary text-white">
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2 h-9 w-9" aria-label="Open navigation menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-[400px] p-0">
                <div className="flex h-16 items-center justify-between border-b px-4">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <Logo />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close navigation menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="h-[calc(100vh-4rem)] overflow-y-auto pb-10">
                  <div className="flex flex-col space-y-1 p-4">
                    <Link
                      href="/"
                      className={cn(
                        "flex items-center rounded-md px-4 py-2 text-sm font-medium",
                        pathname === "/"
                          ? "bg-accent text-accent-foreground"
                          : "text-foreground hover:bg-accent hover:text-accent-foreground",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <Home className="mr-2 h-4 w-4" />
                      Home
                    </Link>

                    <MobileAccordion title="About Us" icon={<Users className="mr-2 h-4 w-4" />} items={company} />

                    <MobileAccordion title="Services" icon={<Server className="mr-2 h-4 w-4" />} items={services} />

                    <MobileAccordion
                      title="Portfolio"
                      icon={<LayoutGrid className="mr-2 h-4 w-4" />}
                      items={portfolio}
                    />

                    <MobileAccordion title="Resources" icon={<FileText className="mr-2 h-4 w-4" />} items={resources} />

                    <Link
                      href="/contact"
                      className={cn(
                        "flex items-center rounded-md px-4 py-2 text-sm font-medium",
                        pathname === "/contact"
                          ? "bg-accent text-accent-foreground"
                          : "text-foreground hover:bg-accent hover:text-accent-foreground",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Contact
                    </Link>

                    <Button className="mt-4 w-full bg-gradient-primary text-white">
                      <Link href="/get-started" className="w-full" onClick={() => setIsOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileAccordion({ title, icon, items }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="rounded-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
        aria-expanded={isOpen}
        aria-controls={`accordion-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <div className="flex items-center">
          {icon}
          {title}
        </div>
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen ? "rotate-180" : "")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`accordion-${title.toLowerCase().replace(/\s+/g, "-")}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="ml-6 mt-1 flex flex-col space-y-1">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center rounded-md px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  <item.icon className="mr-2 h-4 w-4 text-brand-500" />
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
