import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPinIcon, UserIcon } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { LectureNews } from "@/lib/data/lecture-news-data"

interface LectureCardProps {
  lecture: LectureNews
}

export function LectureCard({ lecture }: LectureCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={lecture.image || "/placeholder.svg?height=400&width=600"}
          alt={lecture.title}
          fill
          loading="lazy"
          className="object-cover"
        />
        {lecture.isHighlighted && <Badge className="absolute top-2 right-2 bg-primary">주요 강연</Badge>}
      </div>
      <CardContent className="pt-6 flex-grow">
        <div className="text-sm text-muted-foreground mb-2">{formatDate(lecture.date)}</div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{lecture.title}</h3>
        <p className="text-muted-foreground line-clamp-3 mb-4">{lecture.description}</p>
        <div className="space-y-1 text-sm">
          {lecture.speaker && (
            <div className="flex items-center gap-2">
              <UserIcon className="h-4 w-4 text-muted-foreground" />
              <span>{lecture.speaker}</span>
            </div>
          )}
          {lecture.location && (
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 text-muted-foreground" />
              <span>{lecture.location}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/lecture-news/${lecture.id}`}>자세히 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
