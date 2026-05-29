'use client'

import { useEffect, useState } from "react"
import { MessageCircle, Mail, Check, AlertCircle } from "lucide-react"
import type { Inquiry } from "@/lib/inquiry-store"

export default function InquiriesClient() {
  const [list, setList] = useState<Inquiry[]>([])
  const [filter, setFilter] = useState<'all' | 'lecture' | 'general' | 'unread'>('unread')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/inquiries')
        const data = await response.json()
        setList(data)
      } catch (error) {
        console.error('Failed to fetch inquiries:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const toggleReadStatus = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isRead: !currentStatus })
      })
      if (response.ok) {
        const updated = await response.json()
        setList(list.map(item => item.id === id ? updated : item))
      }
    } catch (error) {
      console.error('Failed to update inquiry status:', error)
    }
  }

  const filteredList = filter === 'all' 
    ? list 
    : filter === 'unread'
    ? list.filter(item => !item.isRead)
    : list.filter(item => item.type === filter)

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="text-slate-600">로딩 중...</div>
      </div>
    )
  }

  return (
    <>
      {/* 필터 탭 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6">
        <div className="p-6 border-b border-slate-200">
          <div className="flex space-x-3 flex-wrap gap-2">
            <button
              onClick={() => setFilter('unread')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'unread'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <AlertCircle className="w-4 h-4 inline mr-2" />
              미확인 ({list.filter(i => !i.isRead).length})
            </button>
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <MessageCircle className="w-4 h-4 inline mr-2" />
              전체 ({list.length})
            </button>
            <button
              onClick={() => setFilter('lecture')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'lecture'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              강의 문의 ({list.filter(i => i.type === 'lecture').length})
            </button>
            <button
              onClick={() => setFilter('general')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'general'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              일반 문의 ({list.filter(i => i.type === 'general').length})
            </button>
          </div>
        </div>

        {/* 문의 목록 */}
        {filteredList.length === 0 ? (
          <div className="p-12 text-center">
            <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <p className="text-slate-500 font-medium">문의가 없습니다.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">상태</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">유형</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">접수일</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">이름</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">연락처</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">내용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredList.map((item) => (
                  <tr key={item.id} className={`transition-colors ${item.isRead ? 'hover:bg-slate-50' : 'bg-blue-50 hover:bg-blue-100'}`}>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleReadStatus(item.id, item.isRead)}
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
                          item.isRead
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                        }`}
                        title={item.isRead ? '확인됨' : '미확인'}
                      >
                        {item.isRead ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        item.type === 'lecture'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-cyan-100 text-cyan-800'
                      }`}>
                        {item.type === 'lecture' ? '강의 문의' : '일반 문의'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 whitespace-nowrap">
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
                    <td className="px-6 py-4 text-sm text-slate-600 max-w-md">
                      <div className="line-clamp-2">{item.message}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}
