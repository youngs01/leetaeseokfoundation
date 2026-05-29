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
import VideoList from "@/components/news/video-list-client"

export default function VideosPage() {
  // Fetch videos on the server and pass to the client component
  const videos = getContentByType<VideoItem>("video")
  const sortedVideos = sortByDateDesc(videos)

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
            <VideoList videos={sortedVideos} />
          </div>
        </section>
      </main>
    </div>
  )
}
