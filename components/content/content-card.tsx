import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type {
  ContentItem,
  LectureItem,
  PressItem,
  VideoItem,
  ThankYouLetterItem,
  GalleryItem,
} from "@/lib/data/content-types"
import { Calendar, MapPin, User, Newspaper, Film, Tag } from "lucide-react"

interface ContentCardProps {
  item: ContentItem
  contentType: string
}

export default function ContentCard({ item, contentType }: ContentCardProps) {
  // Determine the link path based on content type
  const getDetailPath = () => {
    switch (contentType) {
      case "books-movies":
        return `/news/books-movies/${item.id}`
      default:
        return `/news/${contentType}/${item.id}`
    }
  }

  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-video relative">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill          loading="lazy"          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Show category badge for certain content types */}
        {contentType === "books-movies" && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
            {(item as any).type === "book" ? "도서" : "영화"}
          </div>
        )}

        {contentType === "gallery" && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
            {(item as GalleryItem).imageCount}장
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-2">{item.title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-1">
            <div className="flex items-center gap-1 text-xs">
              <Calendar className="h-3 w-3" />
              <span>{item.date}</span>
            </div>

            {/* Show additional info based on content type */}
            {contentType === "lecture" && (
              <>
                <div className="flex items-center gap-1 text-xs">
                  <MapPin className="h-3 w-3" />
                  <span>{(item as LectureItem).location}</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <User className="h-3 w-3" />
                  <span>{(item as LectureItem).speaker}</span>
                </div>
              </>
            )}

            {contentType === "press" && (
              <div className="flex items-center gap-1 text-xs">
                <Newspaper className="h-3 w-3" />
                <span>{(item as PressItem).source}</span>
              </div>
            )}

            {contentType === "video" && (
              <div className="flex items-center gap-1 text-xs">
                <Film className="h-3 w-3" />
                <span>{(item as VideoItem).duration || "00:00"}</span>
              </div>
            )}

            {contentType === "letter" && (
              <>
                <div className="flex items-center gap-1 text-xs">
                  <User className="h-3 w-3" />
                  <span>{(item as ThankYouLetterItem).author}</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <Tag className="h-3 w-3" />
                  <span>{(item as ThankYouLetterItem).letterType}</span>
                </div>
              </>
            )}
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">{item.summary}</p>
      </CardContent>

      <CardFooter className="flex justify-center">
        <Button asChild variant="outline" className="transition-colors hover:bg-primary hover:text-white">
          <Link href={getDetailPath()}>자세히 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
