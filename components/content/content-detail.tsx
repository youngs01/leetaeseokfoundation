import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Calendar, MapPin, User, Newspaper, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { ContentItem, LectureItem, PressItem, ThankYouLetterItem } from "@/lib/data/content-types"
import { getRelatedContent, getPrevNextContent } from "@/lib/content-manager"

interface ContentDetailProps {
  item: ContentItem
  contentType: string
  relatedItems?: ContentItem[]
}

export default function ContentDetail({ item, contentType, relatedItems }: ContentDetailProps) {
  // Get previous an
  const { prev, next } = getPrevNextContent(contentType, item.id)

  // If no related items were provided, get them
  const related = relatedItems || getRelatedContent(contentType, item.id, 3)

  // Determine the list path based on content type
  const getListPath = () => {
    switch (contentType) {
      case "books-movies":
        return `/news/books-movies`
      default:
        return `/news/${contentType}`
    }
  }

  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={item.image || "/placeholder.svg?height=600&width=1920"}
              alt={item.title}
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              {/* Show category badge for certain content types */}
              {contentType === "press" && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground mb-4">
                  <Newspaper className="h-4 w-4 mr-1" /> {(item as PressItem).source}
                </div>
              )}

              {contentType === "letter" && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground mb-4">
                  <Tag className="h-4 w-4 mr-1" /> {(item as ThankYouLetterItem).letterType}
                </div>
              )}

              <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">{item.title}</h1>

              <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/90">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>

                {/* Show additional info based on content type */}
                {contentType === "lecture" && (
                  <>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{(item as LectureItem).location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>강연자: {(item as LectureItem).speaker}</span>
                    </div>
                  </>
                )}

                {contentType === "letter" && (
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{(item as ThankYouLetterItem).author}</span>
                  </div>
                )}
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
                  <p className="text-lg mb-6 font-medium">{item.summary}</p>

                  <div className="my-8">
                    <Image
                      src={item.image || "/placeholder.svg?height=400&width=800"}
                      alt={item.title}
                      width={800}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      {contentType === "lecture"
                        ? "강연 현장"
                        : contentType === "letter"
                          ? `${(item as ThankYouLetterItem).author}님의 편지`
                          : item.title}
                    </p>
                  </div>

                  {/* Content - render HTML content */}
                  {item.content && <div dangerouslySetInnerHTML={{ __html: item.content }} />}

                  <div className="mt-12 flex justify-between">
                    <Button asChild variant="outline" className="flex items-center gap-2">
                      <Link href={getListPath()}>
                        <ChevronLeft className="h-4 w-4" />
                        목록으로
                      </Link>
                    </Button>
                    <div className="flex gap-2">
                      {prev && (
                        <Button asChild variant="outline">
                          <Link href={`${getListPath()}/${prev.id}`} className="flex items-center gap-2">
                            <ChevronLeft className="h-4 w-4" />
                            이전 글
                          </Link>
                        </Button>
                      )}
                      {next && (
                        <Button asChild variant="outline">
                          <Link href={`${getListPath()}/${next.id}`} className="flex items-center gap-2">
                            다음 글
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-muted p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold mb-6 text-primary/80">
                    관련{" "}
                    {contentType === "foundation"
                      ? "소식"
                      : contentType === "lecture"
                        ? "강연"
                        : contentType === "press"
                          ? "보도"
                          : contentType === "video"
                            ? "영상"
                            : contentType === "gallery"
                              ? "갤러리"
                              : contentType === "books-movies"
                                ? "도서/영화"
                                : contentType === "letter"
                                  ? "감사 편지"
                                  : "콘텐츠"}
                  </h3>
                  <div className="space-y-4">
                    {related.map((relatedItem) => (
                      <Card
                        key={relatedItem.id}
                        className="overflow-hidden transition-all duration-300 hover:shadow-md"
                      >
                        <div className="aspect-video relative">
                          <Image
                            src={relatedItem.image || "/placeholder.svg?height=150&width=300"}
                            alt={relatedItem.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-1 line-clamp-2">{relatedItem.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{relatedItem.date}</p>
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <Link href={`${getListPath()}/${relatedItem.id}`}>자세히 보기</Link>
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
