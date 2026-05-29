'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { LogoutButton } from "@/components/admin/logout-button"
import type { PageContent } from "@/lib/pages-store"

export default function AdminPagesPage() {
  const router = useRouter()
  const [pages, setPages] = useState<PageContent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPages() {
      try {
        const res = await fetch("/api/admin/pages")
        if (res.status === 401) {
          router.push("/admin/login")
          return
        }
        const data = await res.json()
        setPages(data)
      } catch (error) {
        console.error("Failed to fetch pages:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchPages()
  }, [router])

  if (loading) {
    return <div className="p-8 text-center">로딩 중...</div>
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">관리자 대시보드</h1>
        <LogoutButton />
      </div>

      {/* 네비게이션 */}
      <div className="mb-8 border-b">
        <div className="flex space-x-6">
          <Link href="/admin" className="pb-3 border-b border-gray-300 hover:border-gray-600">
            대시보드
          </Link>
          <div className="pb-3 border-b-2 border-blue-600 font-semibold">페이지 관리</div>
          <Link href="/admin/inquiries" className="pb-3 border-b border-gray-300 hover:border-gray-600">
            문의 관리
          </Link>
        </div>
      </div>

      {/* 페이지 관리 */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">페이지 목록</h2>
        <Link href="/admin/pages/new" className="px-4 py-2 bg-blue-600 text-white rounded">
          + 새 페이지
        </Link>
      </div>

      {pages.length === 0 ? (
        <p>관리할 페이지가 없습니다.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-3 py-2">제목</th>
                <th className="border px-3 py-2">URL 경로 (Slug)</th>
                <th className="border px-3 py-2">마지막 수정</th>
                <th className="border px-3 py-2">작업</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.id} className="align-top">
                  <td className="border px-3 py-2 font-medium">{page.title}</td>
                  <td className="border px-3 py-2 text-sm text-gray-600">/{page.slug}</td>
                  <td className="border px-3 py-2 text-sm">{new Date(page.updatedAt).toLocaleString()}</td>
                  <td className="border px-3 py-2 text-sm">
                    <Link
                      href={`/admin/pages/${page.slug}`}
                      className="text-blue-600 hover:underline mr-3"
                    >
                      편집
                    </Link>
                    <a href={`/${page.slug}`} target="_blank" className="text-green-600 hover:underline">
                      보기
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
