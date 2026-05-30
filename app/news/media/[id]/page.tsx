import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
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

export default function MediaNewsDetailPage({ params }: Props) {
  const { id } = params

  const newsItem = newsItems.find((item) => item.id === id)

  if (!newsItem) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Link href="/news/media" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4 mr-1" />
          언론보도로 돌아가기
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
