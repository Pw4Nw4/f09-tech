import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PortfolioCta() {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Transform Your Business?</h2>
      <p className="text-xl text-muted-foreground mb-8">
        Let's discuss how F09 Tech can help you achieve your technology goals with tailored solutions designed for your
        specific needs.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg" className="bg-gradient-primary text-white">
          <Link href="/contact">Contact Our Team</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/services">Explore Our Services</Link>
        </Button>
      </div>
    </div>
  )
}
