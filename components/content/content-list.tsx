"use client"

import { useState, useEffect } from "react"
import type { ContentItem } from "@/lib/data/content-types"
import { getContentByType, sortByDateDesc } from "@/lib/content-manager"
import ContentCard from "./content-card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Pagination from "@/components/pagination"

interface ContentListProps {
  contentType: string
  title: string
  description?: string
  itemsPerPage?: number
}

export default function ContentList({ contentType, title, description, itemsPerPage = 9 }: ContentListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest")
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([])
  const [allContent, setAllContent] = useState<ContentItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load content on mount
  useEffect(() => {
    try {
      setIsLoading(true)
      setError(null)

      const content = getContentByType(contentType)

      if (!content || content.length === 0) {
        console.warn(`No content found for type: ${contentType}`)
      }

      setAllContent(content || [])

      // Make sure all content items have a valid date property
      const validContent = content.filter((item) => item.date && typeof item.date === "string")

      if (validContent.length < content.length) {
        console.warn(`Some content items for type ${contentType} have missing or invalid date properties`)
      }

      setFilteredContent(sortByDateDesc(validContent))
    } catch (err) {
      console.error("Error loading content:", err)
      setError("콘텐츠를 불러오는 중 오류가 발생했습니다.")
      setAllContent([])
      setFilteredContent([])
    } finally {
      setIsLoading(false)
    }
  }, [contentType])

  // Filter and sort content whenever search term or sort order changes
  useEffect(() => {
    try {
      let result = [...allContent]

      // Apply search filter
      if (searchTerm) {
        result = result.filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.summary.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      }

      // Make sure all items have a valid date property
      result = result.filter((item) => item.date && typeof item.date === "string")

      // Apply sorting
      if (sortOrder === "latest") {
        result = sortByDateDesc(result)
      } else {
        result = sortByDateDesc(result).reverse()
      }

      setFilteredContent(result)
      setCurrentPage(1) // Reset to first page when filters change
    } catch (err) {
      console.error("Error filtering content:", err)
      setError("콘텐츠 필터링 중 오류가 발생했습니다.")
    }
  }, [searchTerm, sortOrder, allContent])

  // Calculate pagination
  const totalPages = Math.ceil(filteredContent.length / itemsPerPage)
  const currentItems = filteredContent.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0 bg-gray-800">
            {/* Background image would be set via CSS or as a prop */}
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
              {description && <p className="mb-8 text-lg md:text-xl">{description}</p>}
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
                  placeholder="검색어를 입력하세요"
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

        {/* Content List Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">콘텐츠를 불러오는 중입니다...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-lg text-red-500">{error}</p>
              </div>
            ) : currentItems.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {currentItems.map((item) => (
                  <ContentCard key={item.id} item={item} contentType={contentType} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">검색 결과가 없습니다.</p>
              </div>
            )}

            {/* Pagination */}
            {!isLoading && !error && totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
