import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageTemplate } from "@/components/page-template"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "강연 소식 | 이태석 재단",
  description: "이태석 재단의 강연 소식을 확인하세요.",
}

export default function LectureNewsPage() {
  return (
    <PageTemplate>
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="강연 소식"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">강연 소식</h1>
            <p className="mb-8 text-lg md:text-xl">이태석 신부님의 삶과 철학을 알리는 다양한 강연 활동을 소개합니다</p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/lecture-inquiry">강연 문의하기</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <PageHeader
            title="최근 강연 소식"
            description="이태석 신부님의 삶과 철학을 알리는 다양한 강연 활동을 소개합니다"
          />

          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="2024년 이태석 신부 기념 강연회"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">2024년 이태석 신부 기념 강연회</h2>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="mr-4">2024년 5월 15일</span>
                  <span>서울대학교 문화관</span>
                </div>
                <p className="text-gray-700 mb-4">이태석 신부님의 헌신적인 삶을 기리는 강연회에 여러분을 초대합니다.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/lecture-news/1">자세히 보기</Link>
                </Button>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="수단 어린이들을 위한 모금 강연"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">수단 어린이들을 위한 모금 강연</h2>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="mr-4">2024년 6월 10일</span>
                  <span>온라인 (Zoom)</span>
                </div>
                <p className="text-gray-700 mb-4">수단 어린이들을 돕기 위한 모금 강연에 참여해주세요.</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/lecture-news/2">자세히 보기</Link>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">강연 문의하기</h2>
          <p className="max-w-2xl mx-auto mb-8">
            이태석 신부의 정신을 알리는 강연에 관심이 있으신가요? 강연 요청 및 문의사항이 있으시면 언제든지 연락주세요.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/lecture-inquiry">문의하기</Link>
          </Button>
        </div>
      </section>
    </PageTemplate>
  )
}
