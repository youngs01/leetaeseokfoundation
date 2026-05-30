import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageTemplate } from "@/components/page-template"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "강연 상세 | 이태석 재단",
  description: "이태석 재단의 강연 소식 상세 페이지입니다.",
}

export default function LectureNewsIdPage() {
  // 실제 구현에서는 ID를 기반으로 데이터를 가져옵니다
  const lectureData = {
    id: "1",
    title: "2024년 이태석 신부 기념 강연회",
    date: "2024년 5월 15일 (수) 오후 2시",
    location: "서울대학교 문화관",
    audience: "대학생 및 일반인",
    duration: "약 2시간",
    content: `
      <p>이태석 신부님의 헌신적인 삶을 기리는 강연회에 여러분을 초대합니다.</p>
      <p>이번 강연에서는 이태석 신부님의 수단에서의 의료 활동과 교육 활동에 대해 자세히 알아보고, 그의 삶이 우리에게 주는 의미에 대해 함께 생각해보는 시간을 가질 예정입니다.</p>
      <p>많은 참여 부탁드립니다.</p>
    `,
  }

  return (
    <PageTemplate>
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/lecture-news" className="text-blue-600 hover:underline mb-4 inline-block">
              ← 강연 소식 목록으로 돌아가기
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{lectureData.title}</h1>
          </div>

          <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt={lectureData.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div key="date" className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
              <Calendar className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">일시</h3>
                <p>{lectureData.date}</p>
              </div>
            </div>

            <div key="location" className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">장소</h3>
                <p>{lectureData.location}</p>
              </div>
            </div>

            <div key="audience" className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
              <Users className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">대상</h3>
                <p>{lectureData.audience}</p>
              </div>
            </div>

            <div key="duration" className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
              <Clock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">소요 시간</h3>
                <p>{lectureData.duration}</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-12">
            {lectureData.content ? (
              <div dangerouslySetInnerHTML={{ __html: lectureData.content }} />
            ) : (
              <p>내용이 없습니다.</p>
            )}
          </div>

          <div className="flex justify-between items-center">
            <Link href="/lecture-news" className="text-blue-600 hover:underline">
              ← 강연 소식 목록으로 돌아가기
            </Link>
            <Button asChild>
              <Link href="/lecture-inquiry">강연 문의하기</Link>
            </Button>
          </div>
        </div>
      </article>
    </PageTemplate>
  )
}
