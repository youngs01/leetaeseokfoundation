'use client'

import { useRouter } from 'next/navigation'

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/admin/logout', {
        method: 'POST',
      })
      
      if (res.ok) {
        router.push('/admin/login')
      }
    } catch (error) {
      console.error('로그아웃 실패:', error)
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg font-medium transition-colors"
    >
      로그아웃
    </button>
  )
}
