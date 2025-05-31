"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu,
  Users,
  FileText,
  Phone,
  Home,
  ShoppingBag,
  Building2,
  Layers,
  GraduationCap,
  PlayCircle,
} from "lucide-react"

// Update the services array to include the new service categories with their respective links
const services = [
  {
    title: "For Individuals",
    href: "/services/individuals",
    description: "Personal technology solutions for home and personal use",
    icon: Users,
  },
  {
    title: "For Retail",
    href: "/services/retail",
    description: "Specialized technology solutions for retail businesses",
    icon: ShoppingBag,
  },
  {
    title: "For Enterprise",
    href: "/services/enterprise",
    description: "Enterprise-grade IT and cybersecurity solutions",
    icon: Building2,
  },
  {
    title: "All Services",
    href: "/services",
    description: "View our complete range of IT and cybersecurity services",
    icon: Layers,
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
    icon: Users,
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function to handle service link clicks
  const handleServiceLinkClick = (e, href) => {
    // If we're already on the services page, prevent default navigation
    // and scroll to the section instead
    if (pathname === "/services" && href.includes("#")) {
      e.preventDefault()
      const id = href.split("#")[1]
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80"
          : "bg-transparent",
      )}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-2xl font-bold text-transparent">
              F09 Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
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
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/about"}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/services" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      active={pathname.startsWith("/services")}
                    >
                      Services
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Service Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="flex select-none flex-col gap-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-slate-800"
                              onClick={(e) => handleServiceLinkClick(e, service.href)}
                            >
                              <div className="flex items-center gap-2">
                                <service.icon className="h-4 w-4 text-cyan-500" />
                                <span className="text-sm font-medium">{service.title}</span>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                                {service.description}
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
                    <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                      {resources.map((resource) => (
                        <li key={resource.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={resource.href}
                              className="flex select-none flex-col gap-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-slate-800"
                            >
                              <div className="flex items-center gap-2">
                                <resource.icon className="h-4 w-4 text-cyan-500" />
                                <span className="text-sm font-medium">{resource.title}</span>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
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
                  <Link href="/mentorship" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/mentorship"}>
                      Mentorship
                    </NavigationMenuLink>
                  </Link>
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
              <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <Link href="/get-started" className="flex items-center gap-2">
                  <PlayCircle className="h-4 w-4" />
                  Get Started
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
                      F09 Tech
                    </span>
                  </SheetTitle>
                  <SheetDescription>Innovative IT & Cybersecurity Solutions</SheetDescription>
                </SheetHeader>
                <div className="mt-8 flex flex-col space-y-4">
                  <Link
                    href="/"
                    className={cn(
                      "flex items-center rounded-md px-4 py-2 text-sm font-medium",
                      pathname === "/"
                        ? "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                    )}
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={cn(
                      "flex items-center rounded-md px-4 py-2 text-sm font-medium",
                      pathname === "/about"
                        ? "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                    )}
                  >
                    <Users className="mr-2 h-4 w-4" />
                    About
                  </Link>

                  <Link
                    href="/services"
                    className={cn(
                      "flex items-center rounded-md px-4 py-2 text-sm font-medium",
                      pathname === "/services"
                        ? "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                    )}
                  >
                    <Layers className="mr-2 h-4 w-4" />
                    Services
                  </Link>

                  <div className="px-4 py-2">
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Service Categories
                    </h4>
                    <div className="flex flex-col space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                          onClick={(e) => handleServiceLinkClick(e, service.href)}
                        >
                          <service.icon className="mr-2 h-4 w-4 text-cyan-500" />
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="px-4 py-2">
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Resources
                    </h4>
                    <div className="flex flex-col space-y-2">
                      {resources.map((resource) => (
                        <Link
                          key={resource.title}
                          href={resource.href}
                          className="flex items-center rounded-md px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          <resource.icon className="mr-2 h-4 w-4 text-cyan-500" />
                          {resource.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/mentorship"
                    className={cn(
                      "flex items-center rounded-md px-4 py-2 text-sm font-medium",
                      pathname === "/mentorship"
                        ? "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                    )}
                  >
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Mentorship
                  </Link>

                  <Link
                    href="/contact"
                    className={cn(
                      "flex items-center rounded-md px-4 py-2 text-sm font-medium",
                      pathname === "/contact"
                        ? "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                    )}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Contact
                  </Link>

                  <Button className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                    <Link href="/get-started" className="flex items-center gap-2 w-full justify-center">
                      <PlayCircle className="h-4 w-4" />
                      Get Started
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
