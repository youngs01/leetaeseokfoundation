"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Play } from "lucide-react"
import Pagination from "@/components/pagination"

type VideoItem = {
  id: string
  title: string
  image?: string
  date?: string
  duration?: string
  summary?: string
}

export default function VideoListClient({ videos }: { videos: VideoItem[] }) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const sorted = (videos || []).slice().sort((a, b) => (b.date || "") > (a.date || "") ? 1 : -1)
  const totalPages = Math.ceil(sorted.length / itemsPerPage)
  const currentVideos = sorted.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentVideos.map((video) => (
          <Card key={video.id} className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <Link href={`/news/videos/${video.id}`} className="block">
              <div className="aspect-video relative">
                <Image src={video.image || "/placeholder.svg?height=200&width=350"} alt={video.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </Link>
            <CardContent className="p-4">
              <Link href={`/news/videos/${video.id}`}>
                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">{video.title}</h3>
              </Link>
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{video.date}</span>
                {video.duration && (
                  <>
                    <span className="mx-1">•</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{video.duration}</span>
                  </>
                )}
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{video.summary}</p>
              <Button asChild variant="outline" className="w-full transition-colors hover:bg-primary hover:text-white">
                <Link href={`/news/videos/${video.id}`}>영상 보기</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
    </>
  )
}
