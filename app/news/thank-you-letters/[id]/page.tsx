import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getContentById, getRelatedContent } from "@/lib/content-manager"
import type { ThankYouLetterItem } from "@/lib/data/content-types"

export default function ThankYouLetterDetailPage({ params }: { params: { id: string } }) {
  // Get the letter item
  const letter = getContentById<ThankYouLetterItem>("letter", params.id)

  // If letter doesn't exist, return 404
  if (!letter) {
    notFound()
  }

  // Get related letters
  const relatedLetters = getRelatedContent<ThankYouLetterItem>("letter", params.id, 2)

  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={letter.image || "/placeholder.svg?height=600&width=1920"}
              alt={letter.title}
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
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
                {letter.letterType}
              </div>
              <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">{letter.title}</h1>
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
                  <span>{letter.date}</span>
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>작성자: {letter.author}</span>
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
                  <div className="bg-accent p-8 rounded-lg mb-8 relative">
                    {/* Decorative quotation mark */}
                    <div className="absolute top-4 left-4 text-6xl text-primary/20 font-serif">"</div>
                    <div className="relative z-10">
                      <p className="text-lg mb-6 font-medium italic">{letter.summary}</p>

                      {/* Content - render HTML content */}
                      {letter.content && <div dangerouslySetInnerHTML={{ __html: letter.content }} />}

                      <div className="text-right mt-6">
                        <p className="font-bold">{letter.author} 드림</p>
                      </div>
                    </div>
                    {/* Decorative quotation mark */}
                    <div className="absolute bottom-4 right-4 text-6xl text-primary/20 font-serif">"</div>
                  </div>

                  <div className="my-8">
                    <Image
                      src={letter.image || "/placeholder.svg?height=400&width=800"}
                      alt={letter.title}
                      width={800}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      {letter.letterType === "장학생"
                        ? "장학생 활동 모습"
                        : letter.letterType === "해외사업"
                          ? "해외 지원 활동 현장"
                          : "국내 지원 활동 현장"}
                    </p>
                  </div>

                  {/* About the Author Section */}
                  <div className="mt-12 bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">작성자 소개</h3>
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          alt={letter.author}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">{letter.author}</h4>
                        <p className="text-muted-foreground">
                          {letter.letterType === "장학생"
                            ? `${letter.author}님은 이태석재단의 장학생으로 선발되어 학업을 이어가고 있습니다. 이태석 신부의 정신을 이어받아 미래에 사회에 기여하는 인재로 성장하고자 합니다.`
                            : letter.letterType === "해외사업"
                              ? `${letter.author}님은 이태석재단의 해외 지원 사업의 수혜자로, 현지에서 지역 사회 발전을 위해 노력하고 있습니다.`
                              : `${letter.author}님은 이태석재단의 국내 지원 사업의 수혜자로, 재단의 도움으로 새로운 희망을 찾고 있습니다.`}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 flex justify-between">
                    <Button asChild variant="outline" className="flex items-center gap-2">
                      <Link href="/news/thank-you-letters">
                        <ChevronLeft className="h-4 w-4" />
                        목록으로
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-muted p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold mb-6 text-primary/80">다른 감사 편지</h3>
                  <div className="space-y-4">
                    {relatedLetters.map((relatedLetter) => (
                      <Card
                        key={relatedLetter.id}
                        className="overflow-hidden transition-all duration-300 hover:shadow-md"
                      >
                        <div className="aspect-video relative">
                          <Image
                            src={relatedLetter.image || "/placeholder.svg?height=150&width=300"}
                            alt={relatedLetter.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary mb-2">
                            {relatedLetter.letterType}
                          </div>
                          <h4 className="font-bold mb-1 line-clamp-2">{relatedLetter.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{relatedLetter.author}</p>
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <Link href={`/news/thank-you-letters/${relatedLetter.id}`}>자세히 보기</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button asChild className="w-full">
                      <Link href="/donation">후원 참여하기</Link>
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
