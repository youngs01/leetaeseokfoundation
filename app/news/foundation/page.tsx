import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"

// 재단소식 데이터
const newsItems = [
  {
    id: "1",
    title: "2023년 이태석 신부 기념재단 장학생 선발 결과",
    summary: "2023년 이태석 신부 기념재단 장학생 선발 결과를 발표합니다.",
    content: `
      <p>2023년 이태석 신부 기념재단 장학생 선발 결과를 발표합니다.</p>
      <p>많은 지원자 중에서 엄격한 심사를 거쳐 총 20명의 장학생을 선발하였습니다.</p>
      <p>선발된 장학생들에게는 개별 연락을 드릴 예정입니다.</p>
      <p>앞으로도 이태석 신부의 정신을 이어받아 사회에 공헌하는 인재로 성장하길 바랍니다.</p>
    `,
    date: "2023-03-15",
    thumbnail: "/images/news/scholarship.jpg",
  },
  {
    id: "2",
    title: "이태석 신부 기념재단 10주년 기념행사 개최",
    summary: "이태석 신부 기념재단 설립 10주년을 맞아 기념행사를 개최합니다.",
    content: `
      <p>이태석 신부 기념재단 설립 10주년을 맞아 기념행사를 개최합니다.</p>
      <p>일시: 2023년 5월 20일 오후 2시</p>
      <p>장소: 부산 수영구 문화회관 대강당</p>
      <p>많은 참석 부탁드립니다.</p>
    `,
    date: "2023-04-10",
    thumbnail: "/images/news/anniversary.jpg",
  },
]

export const metadata: Metadata = {
  title: "재단소식 | 이태석 신부 기념재단",
  description: "이태석 신부 기념재단의 재단소식을 확인하세요.",
}

export default function FoundationNewsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">재단소식</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.length > 0 ? (
          newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/foundation/${item.id}`}
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
