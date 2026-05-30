import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { LectureItem } from "@/lib/data/content-types"

interface LectureCardProps {
  lecture: LectureItem
  featured?: boolean
}

export default function LectureCard({ lecture, featured = false }: LectureCardProps) {
  return (
    <Card
      className={`overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className={`aspect-video md:aspect-auto ${featured ? "md:h-full" : ""} relative`}>
          <Image
            src={lecture.image || "/placeholder.svg?height=400&width=600"}
            alt={lecture.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          {lecture.featured && (
            <Badge className="absolute top-2 left-2 bg-primary/80 hover:bg-primary/70 text-white">주요 강연</Badge>
          )}
        </div>
        <CardContent className={`p-5 flex flex-col ${featured ? "md:h-full" : ""}`}>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Calendar className="h-3 w-3" />
            <span>{lecture.date}</span>
          </div>
          <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {lecture.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">{lecture.summary}</p>

          <div className="flex flex-col gap-2 mt-auto">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{lecture.location}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <User className="h-3 w-3" />
              <span>강연자: {lecture.speaker}</span>
            </div>

            <Button asChild variant="outline" className="w-full transition-colors hover:bg-primary hover:text-white">
              <Link href={`/news/lectures/${lecture.id}`}>자세히 보기</Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
