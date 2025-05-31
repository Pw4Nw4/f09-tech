"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Twitter, Linkedin, Facebook, Link2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export function BlogShare({ title }: { title: string }) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "Link copied!",
      description: "The article link has been copied to your clipboard.",
    })
  }

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`,
      "_blank",
    )
  }

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
      "_blank",
    )
  }

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank")
  }

  return (
    <Card>
      <CardContent className="p-4">
        <CardTitle className="mb-3 text-sm">Share this article</CardTitle>
        <div className="flex justify-between">
          <Button variant="outline" size="icon" onClick={shareOnTwitter} title="Share on Twitter">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={shareOnLinkedIn} title="Share on LinkedIn">
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={shareOnFacebook} title="Share on Facebook">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleCopyLink} title="Copy link">
            <Link2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
