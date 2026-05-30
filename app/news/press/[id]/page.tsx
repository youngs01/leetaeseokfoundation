import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getContentById, getRelatedContent } from "@/lib/content-manager"
import type { PressItem } from "@/lib/data/content-types"

export default function PressDetailPage({ params }: { params: { id: string } }) {
  // Get the press item
  const press = getContentById<PressItem>("press", params.id)

  // If press item doesn't exist, return 404
  if (!press) {
    notFound()
  }

  // Get related press items
  const relatedPress = getRelatedContent<PressItem>("press", params.id, 2)

  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={press.image || "/placeholder.svg?height=600&width=1920"}
              alt={press.title}
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground mb-4">
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
                  className="h-4 w-4 mr-1"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                  <path d="M18 14h-8"></path>
                  <path d="M15 18h-5"></path>
                  <path d="M10 6h8v4h-8V6Z"></path>
                </svg>
                {press.source}
              </div>
              <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">{press.title}</h1>
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
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  <span>{press.date}</span>
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
                  <p className="text-lg mb-6 font-medium">{press.summary}</p>

                  <div className="my-8">
                    <Image
                      src={press.image || "/placeholder.svg?height=400&width=800"}
                      alt={press.title}
                      width={800}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground text-center mt-2">기사 관련 이미지</p>
                  </div>

                  {/* Content - render HTML content */}
                  {press.content && <div dangerouslySetInnerHTML={{ __html: press.content }} />}

                  {/* Original Article Link */}
                  <div className="mt-12 bg-accent p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">원문 기사 보기</h3>
                    <p className="text-muted-foreground mb-4">
                      아래 링크를 통해 {press.source}에 게재된 원문 기사를 확인하실 수 있습니다.
                    </p>
                    <Button asChild className="flex items-center gap-2">
                      <a href={press.url} target="_blank" rel="noopener noreferrer">
                        원문 기사 바로가기
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  </div>

                  <div className="mt-12 flex justify-between">
                    <Button asChild variant="outline" className="flex items-center gap-2">
                      <Link href="/news/press">
                        <ChevronLeft className="h-4 w-4" />
                        목록으로
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-muted p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold mb-6 text-primary/80">관련 보도</h3>
                  <div className="space-y-4">
                    {relatedPress.map((relatedItem) => (
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
                          <div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary mb-2">
                            {relatedItem.source}
                          </div>
                          <h4 className="font-bold mb-1 line-clamp-2">{relatedItem.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{relatedItem.date}</p>
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <Link href={`/news/press/${relatedItem.id}`}>자세히 보기</Link>
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
