import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import Link from "next/link"
import { MessageCircle, Mail, FileText } from "lucide-react"
import { LogoutButton } from "@/components/admin/logout-button"
import AdminDashboardClient from "@/components/admin/dashboard-client"

export default async function AdminDashboardPage() {
  const auth = (await cookies()).get("admin_auth")?.value
  if (!auth) return redirect("/admin/login")

  // Render lightweight shell immediately; data fetched client-side for responsiveness
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* 헤더 */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">관리자 대시보드</h1>
            <p className="text-sm text-slate-600 mt-1">이태석재단 홈페이지 관리</p>
          </div>
          <LogoutButton />
        </div>
      </header>

      {/* 네비게이션 탭 */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            <div className="py-4 border-b-2 border-blue-600 font-semibold text-slate-900">
              <MessageCircle className="w-5 h-5 inline mr-2" />
              대시보드
            </div>
            <Link href="/admin/inquiries" className="py-4 text-slate-600 hover:text-slate-900 font-medium border-b-2 border-transparent hover:border-slate-300 transition-colors">
              <Mail className="w-5 h-5 inline mr-2" />
              문의 관리
            </Link>
            <Link href="/admin/content" className="py-4 text-slate-600 hover:text-slate-900 font-medium border-b-2 border-transparent hover:border-slate-300 transition-colors">
              <FileText className="w-5 h-5 inline mr-2" />
              콘텐츠 관리
            </Link>
          </div>
        </div>
      </nav>

      {/* Client-side dashboard shows stats; reduces server render time during login */}
      <AdminDashboardClient />
    </div>
  )
}
