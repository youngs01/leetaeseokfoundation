"use client"

import { Button } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // 페이지 번호 배열 생성 함수
  const getPageNumbers = () => {
    const pageNumbers = []

    // 전체 페이지가 7개 이하면 모든 페이지 표시
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
      return pageNumbers
    }

    // 항상 첫 페이지 표시
    pageNumbers.push(1)

    // 현재 페이지가 4보다 크면 '...' 표시
    if (currentPage > 4) {
      pageNumbers.push("...")
    }

    // 현재 페이지 주변 페이지 계산
    let startPage = Math.max(2, currentPage - 1)
    let endPage = Math.min(totalPages - 1, currentPage + 1)

    // 현재 페이지가 앞쪽에 있는 경우
    if (currentPage < 4) {
      endPage = 5
    }

    // 현재 페이지가 뒤쪽에 있는 경우
    if (currentPage > totalPages - 3) {
      startPage = totalPages - 4
    }

    // 페이지 번호 추가
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    // 현재 페이지가 totalPages-3보다 작으면 '...' 표시
    if (currentPage < totalPages - 3) {
      pageNumbers.push("...")
    }

    // 항상 마지막 페이지 표시
    if (totalPages > 1) {
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  return (
    <div className="mt-12 flex justify-center">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Button>

        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`} className="px-2">
              ...
            </span>
          ) : (
            <Button
              key={`page-${page}`}
              variant="outline"
              className={currentPage === page ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
              onClick={() => onPageChange(page as number)}
            >
              {page}
            </Button>
          ),
        )}

        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
      </div>
    </div>
  )
}
