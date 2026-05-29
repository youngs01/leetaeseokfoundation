"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { MessageCircle, Mail, Phone, AlertCircle } from "lucide-react"

type Inquiry = {
  id: string
  type: 'lecture' | 'general'
  name: string
  email?: string
  phone?: string
  message: string
  isRead: boolean
  createdAt: string
}

export default function AdminDashboardClient() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    async function fetchData() {
      try {
        const res = await fetch('/api/inquiries')
        if (!res.ok) return
        const data = await res.json()
        if (mounted) setInquiries(data)
      } catch (e) {
        console.error('Failed to fetch inquiries (client):', e)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    fetchData()
    return () => { mounted = false }
  }, [])

  const lectureInquiries = inquiries.filter(i => i.type === 'lecture')
  const generalInquiries = inquiries.filter(i => i.type === 'general')
  const unreadInquiries = inquiries.filter(i => !i.isRead)
  const recentInquiries = inquiries.slice(0, 10)

  if (loading) {
    return (
      <div className="p-6 text-center text-slate-500">
        <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-30" />
        <p>데이터를 불러오는 중...</p>
      </div>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-slate-600 font-semibold">전체 문의</h3>
            <div className="bg-blue-100 p-3 rounded-lg">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="text-4xl font-bold text-slate-900">{inquiries.length}</div>
          <p className="text-sm text-slate-500 mt-2">총 {inquiries.length}건의 문의</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-slate-600 font-semibold">강의 문의</h3>
            <div className="bg-amber-100 p-3 rounded-lg">
              <Phone className="w-6 h-6 text-amber-600" />
            </div>
          </div>
          <div className="text-4xl font-bold text-slate-900">{lectureInquiries.length}</div>
          <p className="text-sm text-slate-500 mt-2">강연 신청 및 문의</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-slate-600 font-semibold">일반 문의</h3>
            <div className="bg-cyan-100 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-cyan-600" />
            </div>
          </div>
          <div className="text-4xl font-bold text-slate-900">{generalInquiries.length}</div>
          <p className="text-sm text-slate-500 mt-2">후원, 봉사, 협력 등</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-red-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-slate-600 font-semibold">미확인 문의</h3>
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <div className="text-4xl font-bold text-red-600">{unreadInquiries.length}</div>
          <p className="text-sm text-slate-500 mt-2">확인하지 않은 문의</p>
        </div>
      </div>

      {/* 최근 문의 목록 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div>
            <h2 className="text-xl font-bold text-slate-900">최근 문의</h2>
            <p className="text-sm text-slate-600 mt-1">최근 접수된 문의 목록</p>
          </div>
          <Link href="/admin/inquiries" className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-colors">
            모두 보기 →
          </Link>
        </div>

        {recentInquiries.length === 0 ? (
          <div className="p-6 text-center text-slate-500">
            <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>아직 문의가 없습니다.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">유형</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">접수일</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">이름</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">연락처</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">내용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {recentInquiries.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        item.type === 'lecture' 
                          ? 'bg-amber-100 text-amber-800' 
                          : 'bg-cyan-100 text-cyan-800'
                      }`}>
                        {item.type === 'lecture' ? '강의 문의' : '일반 문의'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {new Date(item.createdAt).toLocaleDateString('ko-KR', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <div className="flex flex-col space-y-0.5">
                        {item.email && <div className="text-xs">✉️ {item.email}</div>}
                        {item.phone && <div className="text-xs">📱 {item.phone}</div>}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 max-w-xs truncate">{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )
}
