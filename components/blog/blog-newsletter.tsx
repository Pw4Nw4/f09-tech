"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <Card className="mx-auto max-w-3xl bg-muted/50">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Subscribe to Our Newsletter</CardTitle>
        <CardDescription>Stay up-to-date with the latest insights and news in IT and cybersecurity</CardDescription>
      </CardHeader>
      <CardContent>
        {isSubscribed ? (
          <div className="text-center">
            <p className="text-lg font-medium text-brand-500" style={{ color: "var(--brand-500)" }}>
              Thank you for subscribing!
            </p>
            <p className="mt-2 text-muted-foreground">You'll receive our next newsletter in your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Your email address"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="bg-gradient-primary text-white" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
