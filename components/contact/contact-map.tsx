"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactMap() {
  const [loaded, setLoaded] = useState(false)

  return (
    <Card>
      <CardContent className="p-0">
        <div className="aspect-video h-[300px] w-full overflow-hidden rounded-lg">
          {!loaded && (
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <p className="text-muted-foreground">Loading map...</p>
            </div>
          )}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.7411321579!2d-84.56068880273437!3d33.76804959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1652970789032!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setLoaded(true)}
            className={loaded ? "block" : "hidden"}
          ></iframe>
        </div>
      </CardContent>
    </Card>
  )
}
