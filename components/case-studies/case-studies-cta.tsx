import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export function CaseStudiesCta() {
  return (
    <div className="rounded-lg bg-muted p-8 text-center">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4">
        <Shield className="h-10 w-10 text-brand-500" style={{ color: "var(--brand-500)" }} />
        <h2 className="text-3xl font-bold">Ready to secure your business?</h2>
        <p className="max-w-[85%] text-muted-foreground">
          Our team of security experts is ready to help you protect your business from cyber threats with practical,
          affordable solutions tailored to your specific needs.
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button asChild className="bg-brand-500 text-white" style={{ backgroundColor: "var(--brand-500)" }}>
            <Link href="/contact">
              Get a Security Assessment <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">Explore Our Security Services</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
