import { notFound } from "next/navigation"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Calendar, MapPin, User, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getContentById, getRelatedContent, getPrevNextContent } from "@/lib/content-manager"
import type { LectureItem } from "@/lib/data/content-types"

export default function LectureDetailPage({ params }: { params: any }) {
  // Unwrap params safely (may be a Promise in newer Next.js)
  const { id } = React.use(params as any)

  // Get the lecture item
  const lecture = getContentById<LectureItem>("lecture", id)

  // If lecture doesn't exist, return 404
  if (!lecture) {
    notFound()
  }

  // Get related lectures
  const relatedLectures = getRelatedContent<LectureItem>("lecture", id, 2)

  // Get previous and next lectures
  const { prev, next } = getPrevNextContent<LectureItem>("lecture", id)

  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={lecture.image || "/placeholder.svg?height=600&width=1920"}
              alt={lecture.title}
              fill
              className="object-cover brightness-50"
              priority
              unoptimized
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/80 hover:bg-primary/70 text-white">강연 소식</Badge>
              <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">{lecture.title}</h1>
              <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/90">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{lecture.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{lecture.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>강연자: {lecture.speaker}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-muted py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                홈
              </Link>
              <span className="mx-2">/</span>
              <Link href="/news" className="hover:text-primary transition-colors">
                활동 소식
              </Link>
              <span className="mx-2">/</span>
              <Link href="/news/lectures" className="hover:text-primary transition-colors">
                강연 소식
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{lecture.title}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="prose max-w-none">
                  <p className="text-lg mb-6 font-medium leading-relaxed">{lecture.summary}</p>

                  <div className="my-8 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={lecture.image || "/placeholder.svg?height=400&width=800"}
                      alt={lecture.title}
                      width={800}
                      height={400}
                      className="w-full h-auto"
                      unoptimized
                    />
                    <div className="bg-primary/5 p-3 text-center">
                      <p className="text-sm text-muted-foreground">{lecture.title} 강연 현장</p>
                    </div>
                  </div>

                  {/* Content - render HTML content */}
                  {lecture.content && (
                    <div dangerouslySetInnerHTML={{ __html: lecture.content }} className="leading-relaxed space-y-6" />
                  )}

                  {/* Speaker Bio Section */}
                  <div className="mt-12 bg-accent p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-primary/80">강연자 소개</h3>
                    <div className="flex items-start gap-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                        <Image
                          src="/placeholder.svg?height=96&width=96&text=강연자"
                          alt={lecture.speaker}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">{lecture.speaker}</h4>
                        <p className="text-muted-foreground">
                          {lecture.speaker}님은 이태석 신부의 정신을 이어받아 다양한 활동을 펼치고 있는 전문가입니다.
                          이번 강연에서는 이태석 신부의 삶과 철학에 대한 깊이 있는 이야기를 나누었습니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation buttons */}
                  <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
                    <Button asChild variant="outline" className="flex items-center gap-2">
                      <Link href="/news/lectures">
                        <ChevronLeft className="h-4 w-4" />
                        목록으로
                      </Link>
                    </Button>
                    <div className="flex gap-2">
                      {prev && (
                        <Button asChild variant="outline" className="flex items-center gap-2">
                          <Link href={`/news/lectures/${prev.id}`}>
                            <ArrowLeft className="h-4 w-4" />
                            이전 강연
                          </Link>
                        </Button>
                      )}
                      {next && (
                        <Button asChild variant="outline" className="flex items-center gap-2">
                          <Link href={`/news/lectures/${next.id}`}>
                            다음 강연
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-muted p-6 rounded-lg sticky top-24 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 text-primary/80">관련 강연</h3>
                  <div className="space-y-4">
                    {relatedLectures.map((relatedLecture) => (
                      <Card
                        key={relatedLecture.id}
                        className="overflow-hidden transition-all duration-300 hover:shadow-md group"
                      >
                        <div className="aspect-video relative">
                          <Image
                            src={relatedLecture.image || "/placeholder.svg?height=150&width=300"}
                            alt={relatedLecture.title}
                            fill
                            loading="lazy"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            unoptimized
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                            {relatedLecture.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                            <Calendar className="h-3 w-3" />
                            <span>{relatedLecture.date}</span>
                          </div>
                          <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-primary/10">
                            <Link href={`/news/lectures/${relatedLecture.id}`}>자세히 보기</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8 space-y-4">
                    <h4 className="font-medium text-muted-foreground">더 많은 강연 소식이 궁금하신가요?</h4>
                    <Button asChild className="w-full">
                      <Link href="/news/lectures">모든 강연 보기</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/about/contact">문의하기</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Events Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">다른 강연 소식</h2>
            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {relatedLectures
                .concat(relatedLectures)
                .slice(0, 3)
                .map((lecture, index) => (
                  <Card
                    key={`${lecture.id}-${index}`}
                    className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="aspect-video relative">
                      <Image
                        src={lecture.image || "/placeholder.svg?height=200&width=400"}
                        alt={lecture.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Calendar className="h-3 w-3" />
                        <span>{lecture.date}</span>
                      </div>
                      <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {lecture.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{lecture.summary}</p>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href={`/news/lectures/${lecture.id}`}>자세히 보기</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild>
                <Link href="/news/lectures">모든 강연 소식 보기</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
