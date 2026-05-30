"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { getContentByType, sortByDateDesc } from "@/lib/content-manager"
import type { VideoItem } from "@/lib/data/content-types"
import Pagination from "@/components/pagination"

export default function VideosPage() {
  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0 bg-gray-800">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="영상"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">영상</h1>
              <p className="mb-8 text-lg md:text-xl">이태석재단의 다양한 활동을 영상으로 만나보세요</p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="검색어를 입력하세요" className="pl-10" />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>정렬:</span>
                <select className="bg-transparent border rounded px-2 py-1">
                  <option value="latest">최신순</option>
                  <option value="oldest">오래된순</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Video List Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <VideoList />
          </div>
        </section>
      </main>
    </div>
  )
}

// Client component for video list with pagination
function VideoList() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Get videos from content manager
  const videos = getContentByType<VideoItem>("video")
  const sortedVideos = sortByDateDesc(videos)

  // Calculate pagination
  const totalPages = Math.ceil(sortedVideos.length / itemsPerPage)
  const currentVideos = sortedVideos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentVideos.map((video) => (
          <Card
            key={video.id}
            className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <Link href={`/news/videos/${video.id}`} className="block">
              <div className="aspect-video relative">
                <Image
                  src={video.image || "/placeholder.svg?height=200&width=350"}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <Play className="h-8 w-8 text-white" fill="white" />
                  </div>
                </div>
              </div>
            </Link>
            <CardContent className="p-4">
              <Link href={`/news/videos/${video.id}`}>
                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
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

      {/* Pagination */}
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
    </>
  )
}
