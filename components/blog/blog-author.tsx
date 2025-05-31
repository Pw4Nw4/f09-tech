import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface Author {
  name: string
  role: string
  image: string
  bio: string
}

export function BlogAuthor({ author }: { author: Author }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 h-20 w-20 overflow-hidden rounded-full">
            <Image
              src={author.image || "/placeholder.svg"}
              alt={author.name}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold">{author.name}</h3>
          <p className="mb-3 text-sm text-muted-foreground">{author.role}</p>
          <p className="text-sm">{author.bio}</p>
        </div>
      </CardContent>
    </Card>
  )
}
