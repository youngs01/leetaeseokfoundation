"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { getContentByType, sortByDateDesc } from "@/lib/content-manager"
import type { LectureItem } from "@/lib/data/content-types"
import LectureCard from "@/components/content/lecture-card"
import Pagination from "@/components/pagination"

export default function LecturesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest")
  const [currentPage, setCurrentPage] = useState(1)
  const [lectures, setLectures] = useState<LectureItem[]>([])
  const [filteredLectures, setFilteredLectures] = useState<LectureItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const itemsPerPage = 6

  // Load lectures on mount
  useEffect(() => {
    try {
      setIsLoading(true)
      const lectureData = getContentByType<LectureItem>("lecture")
      setLectures(lectureData)

      // Initial filtering and sorting
      const sorted = sortOrder === "latest" ? sortByDateDesc(lectureData) : sortByDateDesc(lectureData).reverse()

      setFilteredLectures(sorted)
    } catch (error) {
      console.error("Error loading lectures:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Filter and sort lectures when search term or sort order changes
  useEffect(() => {
    if (lectures.length === 0) return

    let filtered = [...lectures]

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (lecture) =>
          lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lecture.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lecture.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lecture.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply sorting
    const sorted = sortOrder === "latest" ? sortByDateDesc(filtered) : sortByDateDesc(filtered).reverse()

    setFilteredLectures(sorted)
    setCurrentPage(1) // Reset to first page when filters change
  }, [searchTerm, sortOrder, lectures])

  // Calculate pagination
  const totalPages = Math.ceil(filteredLectures.length / itemsPerPage)
  const currentLectures = filteredLectures.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Get featured lectures
  const featuredLectures = lectures.filter((lecture) => lecture.featured).slice(0, 1)

  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920&text=강연+소식"
              alt="강연 소식"
              fill
              className="object-cover brightness-50"
              priority
              unoptimized
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">강연 소식</h1>
              <p className="mb-8 text-lg md:text-xl">이태석 신부의 정신을 나누는 다양한 강연 소식을 확인하세요</p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="강연 제목, 강연자, 장소 검색"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>정렬:</span>
                <select
                  className="bg-transparent border rounded px-2 py-1"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as "latest" | "oldest")}
                >
                  <option value="latest">최신순</option>
                  <option value="oldest">오래된순</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Lecture Section */}
        {featuredLectures.length > 0 && currentPage === 1 && !searchTerm && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6">주요 강연</h2>
              <div className="grid gap-6 md:grid-cols-1">
                {featuredLectures.map((lecture) => (
                  <LectureCard key={lecture.id} lecture={lecture} featured={true} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Lectures List Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">
              {searchTerm ? `검색 결과: ${filteredLectures.length}건` : "모든 강연"}
            </h2>

            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent"></div>
                <p className="mt-4 text-muted-foreground">강연 소식을 불러오는 중입니다...</p>
              </div>
            ) : currentLectures.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {currentLectures.map((lecture) => (
                  <LectureCard key={lecture.id} lecture={lecture} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted rounded-lg">
                <p className="text-lg text-muted-foreground">검색 결과가 없습니다.</p>
                {searchTerm && (
                  <Button variant="outline" className="mt-4" onClick={() => setSearchTerm("")}>
                    검색 초기화
                  </Button>
                )}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">강연 문의하기</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              이태석 신부의 정신을 알리는 강연에 관심이 있으신가요? 강연 요청 및 문의사항이 있으시면 언제든지
              연락주세요.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/lecture-inquiry">문의하기</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
