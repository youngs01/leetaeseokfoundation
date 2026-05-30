"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { getContentByType, sortByDateDesc } from "@/lib/content-manager"
import ContentCard from "./content-card"
import Pagination from "@/components/pagination"
import type { ContentItem } from "@/lib/data/content-types"

interface CategoryPageProps {
  category: string
  title: string
  description: string
  heroImage?: string
}

export default function CategoryPage({ category, title, description, heroImage }: CategoryPageProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest")
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const itemsPerPage = 9

  // Load content on mount
  useEffect(() => {
    setIsLoading(true)
    try {
      // Get content for this category
      const content = getContentByType(category)

      // Filter by search term if provided
      let filtered = content
      if (searchTerm) {
        filtered = content.filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.summary.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      }

      // Sort content
      if (sortOrder === "latest") {
        filtered = sortByDateDesc(filtered)
      } else {
        filtered = sortByDateDesc(filtered).reverse()
      }

      setFilteredContent(filtered)
    } catch (error) {
      console.error(`Error loading ${category} content:`, error)
    } finally {
      setIsLoading(false)
    }
  }, [category, searchTerm, sortOrder])

  // Calculate pagination
  const totalPages = Math.ceil(filteredContent.length / itemsPerPage)
  const currentItems = filteredContent.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0 bg-gray-800">
            {heroImage && (
              <Image
                src={heroImage || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover brightness-50"
                priority
              />
            )}
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
              <p className="mb-8 text-lg md:text-xl">{description}</p>
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
            ) : currentItems.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {currentItems.map((item) => (
                  <ContentCard key={item.id} item={item} contentType={category} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">검색 결과가 없습니다.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
