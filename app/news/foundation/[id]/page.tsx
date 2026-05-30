import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
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

export default function FoundationNewsDetailPage({ params }: Props) {
  const { id } = params

  const newsItem = newsItems.find((item) => item.id === id)

  if (!newsItem) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Link href="/news/foundation" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4 mr-1" />
          재단소식으로 돌아가기
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
