import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"

// 언론보도 데이터
const newsItems = [
  {
    id: "1",
    title: "이태석 신부 다큐멘터리 KBS 방영 예정",
    summary: "이태석 신부의 삶을 다룬 다큐멘터리가 KBS에서 방영될 예정입니다.",
    content: `
      <p>이태석 신부의 삶을 다룬 다큐멘터리가 KBS에서 방영될 예정입니다.</p>
      <p>방영일: 2023년 6월 15일 저녁 9시</p>
      <p>채널: KBS 1TV</p>
      <p>많은 시청 바랍니다.</p>
    `,
    date: "2023-05-20",
    thumbnail: "/images/news/documentary.jpg",
  },
  {
    id: "2",
    title: '부산일보 "이태석 신부의 나눔 정신" 특집 기사',
    summary: "부산일보에서 이태석 신부의 나눔 정신을 조명하는 특집 기사가 게재되었습니다.",
    content: `
      <p>부산일보에서 이태석 신부의 나눔 정신을 조명하는 특집 기사가 게재되었습니다.</p>
      <p>기사 제목: "이태석 신부의 나눔 정신, 그 후 10년"</p>
      <p>게재일: 2023년 4월 5일</p>
      <p>많은 관심 부탁드립니다.</p>
    `,
    date: "2023-04-05",
    thumbnail: "/images/news/newspaper.jpg",
  },
]

export const metadata: Metadata = {
  title: "언론보도 | 이태석 신부 기념재단",
  description: "이태석 신부 기념재단의 언론보도를 확인하세요.",
}

export default function MediaNewsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">언론보도</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.length > 0 ? (
          newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/media/${item.id}`}
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
