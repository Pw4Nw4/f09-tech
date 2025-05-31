import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNavigation } from "@/components/layout/main-navigation"
import { MainFooter } from "@/components/layout/main-footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { ScrollManager } from "@/components/layout/scroll-manager"
import { Analytics } from "@/components/analytics"
import { PerformanceOptimizer } from "@/components/performance-optimizer"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "F09 Tech - IT & Cybersecurity Solutions",
    template: "%s | F09 Tech",
  },
  description:
    "F09 Tech provides innovative IT and cybersecurity solutions for businesses of all sizes. Our expert team delivers tailored services to protect and optimize your technology infrastructure.",
  keywords: [
    "IT services",
    "cybersecurity",
    "cloud services",
    "managed IT",
    "IT consulting",
    "network security",
    "data protection",
    "tech support",
    "IT solutions",
    "digital transformation",
  ],
  authors: [{ name: "F09 Tech" }],
  creator: "F09 Tech",
  publisher: "F09 Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://f09tech.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://f09tech.com",
    title: "F09 Tech - IT & Cybersecurity Solutions",
    description: "Innovative IT and cybersecurity solutions for businesses of all sizes.",
    siteName: "F09 Tech",
    images: [
      {
        url: "https://f09tech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "F09 Tech - IT & Cybersecurity Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "F09 Tech - IT & Cybersecurity Solutions",
    description: "Innovative IT and cybersecurity solutions for businesses of all sizes.",
    creator: "@f09tech",
    images: ["https://f09tech.com/twitter-image.jpg"],
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <ScrollManager />
            <MainNavigation />
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-24">
                  <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              }
            >
              <main className="flex-1">{children}</main>
            </Suspense>
            <MainFooter />
            <BackToTop />
          </div>
          <Analytics />
          <PerformanceOptimizer />
        </ThemeProvider>
      </body>
    </html>
  )
}
