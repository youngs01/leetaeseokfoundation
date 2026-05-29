'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { LogoutButton } from "@/components/admin/logout-button"
import PageEditor from "@/components/admin/page-editor"
import Link from "next/link"

export default function NewPagePage() {
  const router = useRouter()

  useEffect(() => {
    // Auth check via API
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/pages")
        if (res.status === 401) {
          router.push("/admin/login")
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      }
    }
    checkAuth()
  }, [router])

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">새 페이지 만들기</h1>
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

      <PageEditor />
    </div>
  )
}
