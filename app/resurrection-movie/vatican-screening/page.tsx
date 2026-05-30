import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function VaticanScreeningPage() {
  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="바티칸 영화 상영 성료"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">바티칸 영화 상영 성료</h1>
              <p className="mb-8 text-lg md:text-xl">영화 '부활'의 바티칸 특별 상영회가 성황리에 마쳤습니다</p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">바티칸 특별 상영회</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    2024년 11월 22일, 이태석 신부의 삶을 다룬 영화 '부활'이 바티칸에서 특별 상영회를 가졌습니다.
                    프란치스코 교황을 비롯한 바티칸 관계자들과 한국 대표단이 참석한 가운데 성황리에 진행되었습니다.
                  </p>
                  <p>
                    이번 상영회는 이태석 신부의 삶과 정신을 전 세계에 알리는 뜻깊은 자리였으며, 프란치스코 교황은 이태석
                    신부의 헌신적인 봉사 정신에 깊은 감명을 받았다고 전했습니다.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-accent rounded-lg">
                  <h3 className="text-xl font-bold mb-4">상영회 개요</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <strong>일시:</strong> 2024년 11월 22일 오후 3시
                    </li>
                    <li>
                      <strong>장소:</strong> 바티칸 시국 영화관
                    </li>
                    <li>
                      <strong>참석자:</strong> 프란치스코 교황, 바티칸 관계자, 한국 대표단
                    </li>
                    <li>
                      <strong>상영 시간:</strong> 120분
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="바티칸 특별 상영회 현장"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-center text-muted-foreground">바티칸 특별 상영회 현장</p>
              </div>
            </div>

            {/* Quotes Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-primary">참석자 소감</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="p-6">
                  <CardContent className="space-y-4">
                    <p className="italic text-muted-foreground">
                      "이태석 신부의 삶은 진정한 사랑과 봉사가 무엇인지 보여줍니다. 이 영화를 통해 그의 정신이 전 세계에
                      전해지길 바랍니다."
                    </p>
                    <p className="font-bold text-right">- 프란치스코 교황</p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent className="space-y-4">
                    <p className="italic text-muted-foreground">
                      "이태석 신부의 삶을 담은 이 영화가 바티칸에서 상영된 것은 매우 의미 있는 일입니다. 그의 사랑과
                      헌신이 전 세계에 희망이 되길 바랍니다."
                    </p>
                    <p className="font-bold text-right">- 주교황청 한국대사</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-primary">현장 스케치</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="상영회 전경"
                    width={400}
                    height={300}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="교황 입장"
                    width={400}
                    height={300}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="한국 대표단"
                    width={400}
                    height={300}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Related Links - Modified to only show the film introduction button */}
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6 text-primary">관련 링크</h3>
              <Button asChild className="transition-transform hover:scale-105">
                <Link href="/resurrection-movie/introduction">영화 소개 보기</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
