"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageTemplate } from "@/components/page-template"
import { historyData } from "@/data/history-data"
import { HistoryItem } from "@/components/history-item"

// 히어로 이미지 배열
const heroImages = [
  {
    src: "/placeholder.svg?height=600&width=1920&text=이태석재단+이미지+1",
    alt: "이태석재단 소개 이미지 1",
  },
  {
    src: "/placeholder.svg?height=600&width=1920&text=이태석재단+이미지+2",
    alt: "이태석재단 소개 이미지 2",
  },
  {
    src: "/placeholder.svg?height=600&width=1920&text=이태석재단+이미지+3",
    alt: "이태석재단 소개 이���지 3",
  },
]

export default function FoundationPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // 이미지 자동 전환 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        // 명시적으로 다음 인덱스 계산 및 로깅
        const nextIndex = (prevIndex + 1) % heroImages.length
        console.log(`이미지 전환: ${prevIndex} -> ${nextIndex}`)
        return nextIndex
      })
    }, 5000) // 5초마다 이미지 전환

    return () => clearInterval(interval)
  }, [])

  return (
    <PageTemplate>
      <section className="relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover brightness-50"
                priority={index === 0}
                unoptimized
              />
            </div>
          ))}
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">우리재단</h1>
            <p className="mb-8 text-lg md:text-xl">
              이태석 신부님의 정신을 이어받아 소외된 이웃들에게 희망을 전하는 이태석재단입니다
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">비전과 미션</h2>
              <div className="space-y-6">
                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">비전</h3>
                  <p className="text-lg">"사랑과 나눔으로 세상을 변화시키는 재단"</p>
                </div>
                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">미션</h3>
                  <p>
                    이태석 신부의 정신을 이어받아 국내외 소외된 이웃들에게 희망을 전하고, 나눔과 봉사의 가치를 실천하며
                    더 나은 세상을 만들어 갑니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="https://example.com/images/about/vision-mission.jpg"
                alt="이태석재단 비전과 미션"
                width={500}
                height={600}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">핵심 가치</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="mb-4 text-primary text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">사랑</h3>
                <p className="text-muted-foreground text-center">
                  이태석 신부의 무조건적인 사랑을 실천합니다. 모든 사람은 존엄하며 사랑받을 가치가 있습니다.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="mb-4 text-primary text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto"
                  >
                    <path d="M12 22v-5"></path>
                    <path d="M9 8V2"></path>
                    <path d="M15 8V2"></path>
                    <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">나눔</h3>
                <p className="text-muted-foreground text-center">
                  가진 것을 나누고 함께 성장하는 가치를 실천합니다. 나눔은 더 큰 행복을 가져옵니다.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="mb-4 text-primary text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m2 12 20 0"></path>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">연대</h3>
                <p className="text-muted-foreground text-center">
                  국경과 인종, 종교를 초월한 연대를 통해 더 나은 세상을 만들어갑니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">History</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">재단 연혁</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
          </div>
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20 z-10" />

            {/* Timeline items */}
            <div className="space-y-12 md:space-y-16">
              {historyData.map((item, index) => (
                <HistoryItem
                  key={`${item.year}-${item.month || index}`}
                  year={item.year}
                  month={item.month}
                  title={item.title}
                  description={item.description}
                  images={item.images}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>

            {/* Timeline end dot */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 bottom-0 w-3 h-3 rounded-full bg-primary/30" />
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="https://example.com/images/about/chairman-portrait.jpg"
                alt="이태석재단 이사장"
                width={500}
                height={600}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">이사장 인사말</h2>
              <blockquote className="text-lg space-y-4">
                <p>이태석재단을 찾아주신 여러분께 진심으로 감사드립니다.</p>
                <p>
                  이태석 신부는 의사이자 사제로서 아프리카 수단 톤즈 지역에서 소외된 이웃들을 위해 헌신적인 삶을
                  살았습니다. 그의 사랑과 나눔의 정신은 많은 사람들에게 감동과 희망을 주었습니다.
                </p>
                <p>
                  이태석재단은 이태석 신부의 정신을 이어받아 국내외 소외된 이웃들에게 희망을 전하고, 나눔과 봉사의
                  가치를 실천하며 더 나은 세상을 만들어가고자 합니다.
                </p>
                <p>
                  여러분의 관심과 참여가 이태석 신부의 정신을 이어가는 소중한 힘이 됩니다. 함께 사랑과 나눔의 가치를
                  실천해 나가길 희망합니다.
                </p>
                <footer className="text-right mt-4">
                  <p className="font-bold">이태석재단 이사장</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">함께 해주세요</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            여러분의 소중한 후원과 참여가 이태석 신부의 정신을 이어가는 힘이 됩니다. 이태석재단과 함께 사랑과 나눔의
            가치를 실천해 주세요.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              <Link href="/about/contact">문의하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}
