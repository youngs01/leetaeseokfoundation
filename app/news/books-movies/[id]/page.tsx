import { notFound } from "next/navigation"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getContentById, getRelatedContent } from "@/lib/content-manager"
import type { BookMovieItem } from "@/lib/data/content-types"

export default function BookMovieDetailPage({ params }: { params: any }) {
  const { id } = React.use(params as any)

  // Get the book/movie item
  const bookMovie = getContentById<BookMovieItem>("books-movies", id)

  // If book/movie doesn't exist, return 404
  if (!bookMovie) {
    notFound()
  }

  // Get related books/movies
  const relatedItems = getRelatedContent<BookMovieItem>("books-movies", id, 2)

  // Determine if it's a book or movie
  const isBook = bookMovie.type === "book"

  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={bookMovie.image || "/placeholder.svg?height=600&width=1920"}
              alt={bookMovie.title}
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground mb-4">
                {isBook ? "도서" : "영화"}
              </div>
              <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">{bookMovie.title}</h1>
              <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/90">
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    {isBook ? (
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    ) : (
                      <>
                        <path d="m7 2 10 5-10 5V2Z"></path>
                        <path d="M2 12h5"></path>
                        <path d="M2 7h5"></path>
                        <path d="M2 17h5"></path>
                        <path d="M17 17h5"></path>
                        <path d="M17 12h5"></path>
                        <path d="M17 7h5"></path>
                      </>
                    )}
                  </svg>
                  <span>
                    {isBook ? `저자: ${bookMovie.author || "정보 없음"}` : `감독: ${bookMovie.director || "정보 없음"}`}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  <span>
                    {isBook
                      ? `출판일: ${bookMovie.publishedDate || "정보 없음"}`
                      : `개봉일: ${bookMovie.releaseDate || "정보 없음"}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="prose max-w-none">
                  <div className="flex flex-col md:flex-row gap-8 mb-12">
                    {/* Book/Movie Cover */}
                    <div className="w-full md:w-1/3 flex-shrink-0">
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={bookMovie.image || "/placeholder.svg?height=600&width=400"}
                          alt={bookMovie.title}
                          width={400}
                          height={600}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Book/Movie Details */}
                    <div className="w-full md:w-2/3">
                      <h2 className="text-2xl font-bold mb-4">{bookMovie.title}</h2>
                      <div className="space-y-2 mb-4">
                        <p>
                          <span className="font-semibold">{isBook ? "저자" : "감독"}:</span>{" "}
                          {isBook ? bookMovie.author : bookMovie.director}
                        </p>
                        <p>
                          <span className="font-semibold">{isBook ? "출판일" : "개봉일"}:</span>{" "}
                          {isBook ? bookMovie.publishedDate : bookMovie.releaseDate}
                        </p>
                        {isBook && bookMovie.publisher && (
                          <p>
                            <span className="font-semibold">출판사:</span> {bookMovie.publisher}
                          </p>
                        )}
                        {!isBook && bookMovie.runtime && (
                          <p>
                            <span className="font-semibold">상영시간:</span> {bookMovie.runtime}
                          </p>
                        )}
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-500">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-5 w-5 fill-current" />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-muted-foreground">5.0/5.0</span>
                      </div>

                      <p className="text-muted-foreground">{bookMovie.summary}</p>
                    </div>
                  </div>

                  {/* Content - render HTML content */}
                  {bookMovie.content && <div dangerouslySetInnerHTML={{ __html: bookMovie.content }} />}

                  {/* Additional Information */}
                  <div className="mt-12 bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">{isBook ? "이 책에 대하여" : "이 영화에 대하여"}</h3>
                    <p className="text-muted-foreground mb-4">
                      {isBook
                        ? "이 책은 이태석 신부의 삶과 정신을 담고 있습니다. 이태석 신부의 삶을 통해 진정한 나눔과 사랑의 의미를 배울 수 있습니다."
                        : "이 영화는 이태석 신부의 삶을 감동적으로 그려낸 작품입니다. 이태석 신부의 헌신적인 봉사와 사랑의 메시지를 전합니다."}
                    </p>
                    <p className="text-muted-foreground">
                      {isBook
                        ? "이태석 신부의 어록과 일기, 그리고 그와 함께 활동했던 사람들의 증언을 통해 그의 삶의 철학과 가치관을 깊이 있게 이해할 수 있습니다."
                        : "수단 톤즈 지역에서의 활동과 현지 아이들과 함께했던 시간, 그리고 그의 마지막 여정까지 감동적으로 담아냈습니다."}
                    </p>
                  </div>

                  <div className="mt-12 flex justify-between">
                    <Button asChild variant="outline" className="flex items-center gap-2">
                      <Link href="/news/books-movies">
                        <ChevronLeft className="h-4 w-4" />
                        목록으로
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-muted p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold mb-6 text-primary/80">관련 {isBook ? "도서" : "영화"}</h3>
                  <div className="space-y-4">
                    {relatedItems.map((relatedItem) => (
                      <Card
                        key={relatedItem.id}
                        className="overflow-hidden transition-all duration-300 hover:shadow-md"
                      >
                        <div className="aspect-[2/3] relative">
                          <Image
                            src={relatedItem.image || "/placeholder.svg?height=300&width=200"}
                            alt={relatedItem.title}
                            fill
                            loading="lazy"
                            className="object-cover"
                          />
                          {/* Type badge */}
                          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
                            {relatedItem.type === "book" ? "도서" : "영화"}
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-1 line-clamp-2">{relatedItem.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {relatedItem.type === "book" ? relatedItem.author : relatedItem.director}
                          </p>
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <Link href={`/news/books-movies/${relatedItem.id}`}>자세히 보기</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button asChild className="w-full">
                      <Link href="/about/contact">문의하기</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
