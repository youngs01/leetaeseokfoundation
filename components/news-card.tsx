import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { NewsItem } from "@/lib/data/news-data"

interface NewsCardProps {
  news: NewsItem
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-video relative">
        <Image
          src={news.image || "/placeholder.svg"}
          alt={news.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{news.title}</CardTitle>
        <CardDescription>{news.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">{news.summary}</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild variant="outline" className="transition-colors hover:bg-primary hover:text-white">
          <Link href={news.link}>자세히 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
