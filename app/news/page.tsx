import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"

// 카테고리 정보
const categories = [
  { id: "foundation", title: "재단소식" },
  { id: "media", title: "언론보도" },
  { id: "notice", title: "공지사항" },
]

// 최근 뉴스 데이터
const recentNews = [
  {
    id: "1",
    title: "2023년 하반기 이태석 신부 기념재단 자원봉사자 모집",
    summary: "2023년 하반기 이태석 신부 기념재단 자원봉사자를 모집합니다.",
    date: "2023-06-20",
    thumbnail: "/images/news/volunteer.jpg",
    category: "notice",
  },
  {
    id: "1",
    title: "이태석 신부 다큐멘터리 KBS 방영 예정",
    summary: "이태석 신부의 삶을 다룬 다큐멘터리가 KBS에서 방영될 예정입니다.",
    date: "2023-05-20",
    thumbnail: "/images/news/documentary.jpg",
    category: "media",
  },
  {
    id: "2",
    title: "이태석 신부 기념재단 사무실 이전 안내",
    summary: "이태석 신부 기념재단 사무실이 이전됩니다.",
    date: "2023-04-20",
    thumbnail: "/images/news/office.jpg",
    category: "notice",
  },
  {
    id: "2",
    title: '부산일보 "이태석 신부의 나눔 정신" 특집 기사',
    summary: "부산일보에서 이태석 신부의 나눔 정신을 조명하는 특집 기사가 게재되었습니다.",
    date: "2023-04-05",
    thumbnail: "/images/news/newspaper.jpg",
    category: "media",
  },
  {
    id: "1",
    title: "2023년 이태석 신부 기념재단 장학생 선발 결과",
    summary: "2023년 이태석 신부 기념재단 장학생 선발 결과를 발표합니다.",
    date: "2023-03-15",
    thumbnail: "/images/news/scholarship.jpg",
    category: "foundation",
  },
  {
    id: "2",
    title: "이태석 신부 기념재단 10주년 기념행사 개최",
    summary: "이태석 신부 기념재단 설립 10주년을 맞아 기념행사를 개최합니다.",
    date: "2023-04-10",
    thumbnail: "/images/news/anniversary.jpg",
    category: "foundation",
  },
]

export const metadata: Metadata = {
  title: "활동소식 | 이태석 신부 기념재단",
  description: "이태석 신부 기념재단의 활동소식을 확인하세요.",
}

export default function NewsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">활동소식</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/news/${category.id}`}
            className="block p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center"
          >
            <h2 className="text-xl font-bold">{category.title}</h2>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">최근 소식</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentNews.map((item) => (
          <Link
            key={`${item.category}-${item.id}`}
            href={`/news/${item.category}/${item.id}`}
            className="block border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-48 w-full">
              {item.thumbnail ? (
                <Image src={item.thumbnail || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">이미지 없음</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{item.summary}</p>
              <p className="text-gray-500 text-xs">{formatDate(item.date)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
