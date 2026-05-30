import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
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

type Props = {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params

  const newsItem = newsItems.find((item) => item.id === id)

  if (!newsItem) {
    return {
      title: "페이지를 찾을 수 없습니다 | 이태석 신부 기념재단",
    }
  }

  return {
    title: `${newsItem.title} | 이태석 신부 기념재단`,
    description: newsItem.summary,
  }
}

export default function NoticeNewsDetailPage({ params }: Props) {
  const { id } = params

  const newsItem = newsItems.find((item) => item.id === id)

  if (!newsItem) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Link href="/news/notice" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4 mr-1" />
          공지사항으로 돌아가기
        </Link>
      </div>

      <article className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{newsItem.title}</h1>
          <div className="text-gray-500 text-sm mb-6">{formatDate(newsItem.date)}</div>

          {newsItem.thumbnail && (
            <div className="relative h-64 md:h-96 w-full mb-6">
              <Image
                src={newsItem.thumbnail || "/placeholder.svg"}
                alt={newsItem.title}
                fill
                className="object-contain"
              />
            </div>
          )}

          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: newsItem.content }} />
        </div>
      </article>
    </div>
  )
}
