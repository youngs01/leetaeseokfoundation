import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"

// 공지사항 데이터
const newsItems = [
  {
    id: "1",
    title: "2023년 하반기 이태석 신부 기념재단 자원봉사자 모집",
    summary: "2023년 하반기 이태석 신부 기념재단 자원봉사자를 모집합니다.",
    content: `
      <p>2023년 하반기 이태석 신부 기념재단 자원봉사자를 모집합니다.</p>
      <p>모집기간: 2023년 7월 1일 ~ 7월 15일</p>
      <p>활동기간: 2023년 8월 ~ 12월</p>
      <p>지원방법: 홈페이지 지원 양식 작성</p>
      <p>많은 지원 바랍니다.</p>
    `,
    date: "2023-06-20",
    thumbnail: "/images/news/volunteer.jpg",
  },
  {
    id: "2",
    title: "이태석 신부 기념재단 사무실 이전 안내",
    summary: "이태석 신부 기념재단 사무실이 이전됩니다.",
    content: `
      <p>이태석 신부 기념재단 사무실이 이전됩니다.</p>
      <p>이전일: 2023년 5월 1일</p>
      <p>새 주소: 부산광역시 수영구 광안해변로 123, 5층</p>
      <p>업무는 이전 당일에도 정상적으로 진행됩니다.</p>
    `,
    date: "2023-04-20",
    thumbnail: "/images/news/office.jpg",
  },
]

export const metadata: Metadata = {
  title: "공지사항 | 이태석 신부 기념재단",
  description: "이태석 신부 기념재단의 공지사항을 확인하세요.",
}

export default function NoticeNewsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">공지사항</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.length > 0 ? (
          newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/notice/${item.id}`}
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
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">등록된 게시물이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}
