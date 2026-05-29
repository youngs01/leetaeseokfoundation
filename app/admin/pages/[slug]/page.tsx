'use client'

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { LogoutButton } from "@/components/admin/logout-button"
import PageEditor from "@/components/admin/page-editor"
import Link from "next/link"
import type { Page } from "@/lib/pages-store"

export default function EditPagePage() {
  const router = useRouter()
  const params = useParams()
  const slug = params?.slug as string
  
  const [page, setPage] = useState<Page | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPage() {
      try {
        const res = await fetch(`/api/admin/pages/${slug}`)
        if (res.status === 401) {
          router.push("/admin/login")
          return
        }
        if (res.ok) {
          const data = await res.json()
          setPage(data)
        }
      } catch (error) {
        console.error("Failed to fetch page:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchPage()
  }, [slug, router])

  if (loading) {
    return <div className="p-8 text-center">로딩 중...</div>
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">페이지 편집: {page?.title || slug}</h1>
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

      <PageEditor page={page || undefined} />
    </div>
  )
}
