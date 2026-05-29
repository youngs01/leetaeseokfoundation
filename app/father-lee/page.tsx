"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageTemplate } from "@/components/page-template"
import { useEffect, useRef } from "react"

export default function FatherLeePage() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const biographyRef = useRef<HTMLDivElement>(null)
  const legacyRef = useRef<HTMLDivElement>(null)
  const awardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = [timelineRef.current, biographyRef.current, legacyRef.current, awardsRef.current]

    elements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <PageTemplate>
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://example.com/images/father-lee/hero-background.jpg"
            alt="이태석 신부님"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-40 text-white">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">이태석 신부</h1>
            <p className="mb-8 text-lg md:text-xl">"사랑은 사람을 춤추게 한다"</p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="biography" className="py-16 md:py-24 opacity-0 transition-opacity duration-1000" ref={biographyRef}>
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="https://example.com/images/father-lee/portrait.jpg"
                alt="이태석 신부님 초상"
                width={500}
                height={600}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">생애</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  이태석 신부(1962년 1월 2일 ~ 2010년 1월 14일)는 대한민국의 가톨릭 사제이자 의사로, 아프리카 수단 톤즈
                  지역에서 의료 및 교육 봉사활동을 펼쳤습니다.
                </p>
                <p>
                  부산 출신으로 부산대학교 의과대학을 졸업한 후, 1991년 가톨릭 사제가 되기 위해 신학교에 입학하였고,
                  2001년 사제서품을 받았습니다.
                </p>
                <p>
                  2001년부터 수단 톤즈 지역에서 의사이자 사제로서 활동하며 병원과 학교를 세우고 현지인들에게 의료
                  서비스와 교육을 제공했습니다.
                </p>
                <p>2010년 1월 14일, 대장암으로 인해 48세의 나이로 선종하였습니다.</p>
              </div>
            </div>
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <Image
                src="https://example.com/images/father-lee/activity-photo-1.jpg"
                alt="이태석 신부님 활동 사진 1"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <Image
                src="https://example.com/images/father-lee/activity-photo-2.jpg"
                alt="이태석 신부님 활동 사진 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-muted opacity-0 transition-opacity duration-1000" ref={timelineRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">약력</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line - visible only on desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary z-10 hidden md:block"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              <TimelineItem year="1962" title="출생" description="1월 2일 부산에서 출생" isLeft={true} />
              <TimelineItem year="1987" title="부산대학교 의과대학 졸업" description="의사 면허 취득" isLeft={false} />
              <TimelineItem year="1991" title="가톨릭 신학대학 입학" description="사제의 길로 입문" isLeft={true} />
              <TimelineItem year="2001" title="사제 서품" description="가톨릭 사제로 서품" isLeft={false} />
              <TimelineItem
                year="2001"
                title="수단 톤즈 파견"
                description="수단 톤즈 지역에서 의료 및 교육 봉사 시작"
                isLeft={true}
              />
              <TimelineItem
                year="2004"
                title="톤즈 병원 설립"
                description="현지 주민들을 위한 의료 시설 설립"
                isLeft={false}
              />
              <TimelineItem
                year="2005"
                title="톤즈 학교 설립"
                description="현지 아이들을 위한 교육 시설 설립"
                isLeft={true}
              />
              <TimelineItem
                year="2008"
                title="톤즈의 아이들 브라스밴드 창단"
                description="음악 교육을 통한 희망 전파"
                isLeft={false}
              />
              <TimelineItem
                year="2009"
                title="귀국 및 투병"
                description="대장암 진단으로 한국 귀국 및 투병 시작"
                isLeft={true}
              />
              <TimelineItem year="2010" title="선종" description="1월 14일, 48세의 나이로 선종" isLeft={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 md:py-24 opacity-0 transition-opacity duration-1000" ref={awardsRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">수상 내역</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              <AwardItem
                year="2009"
                title="국민훈장 무궁화장"
                description="대한민국 정부로부터 국민훈장 무궁화장 추서"
              />
              <AwardItem year="2010" title="제1회 참 의료인상" description="대한의사협회 추서" />
              <AwardItem year="2010" title="천주교 서울대교구 장한 평신도상" description="천주교 서울대교구 추서" />
              <AwardItem year="2011" title="제1회 이태석 봉사상" description="이태석 신부의 이름을 딴 봉사상 제정" />
              <AwardItem year="2016" title="부산광역시 명예시민" description="부산광역시 명예시민 추서" />
            </div>
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <Image
                src="https://example.com/images/father-lee/award-photo-1.jpg"
                alt="이태석 신부님 수상 사진 1"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <Image
                src="https://example.com/images/father-lee/award-photo-2.jpg"
                alt="이태석 신부님 수상 사진 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 md:py-24 bg-muted opacity-0 transition-opacity duration-1000" ref={legacyRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">이태석 신부의 유산</h2>
          <div className="grid gap-8 md:grid-cols-3">
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
                    <path d="M3 12h18"></path>
                    <path d="M3 6h18"></path>
                    <path d="M3 18h18"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">교육 사업</h3>
                <p className="text-muted-foreground text-center">
                  톤즈 지역에 학교를 설립하여 현지 아이들에게 교육 기회를 제공했습니다. 음악 교육을 통해 '톤즈의 아이들'
                  브라스밴드를 창단했습니다.
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
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">의료 활동</h3>
                <p className="text-muted-foreground text-center">
                  의사로서의 전문성을 살려 톤즈 지역에 병원을 설립하고 현지인들에게 의료 서비스를 제공했습니다.
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
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">평화와 화합</h3>
                <p className="text-muted-foreground text-center">
                  내전으로 분열된 수단에서 종교와 인종을 초월한 평화와 화합의 메시지를 전파했습니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentary Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">다큐멘터리 '울지마 톤즈'</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            이태석 신부의 삶과 업적을 담은 다큐멘터리 '울지마 톤즈'는 그의 헌신적인 봉사 정신과 사랑의 메시지를 전
            세계에 알렸습니다.
          </p>
          <div className="aspect-video max-w-3xl mx-auto bg-gray-200 rounded-lg flex items-center justify-center transition-transform duration-300 hover:shadow-xl cursor-pointer">
            <p className="text-muted-foreground">다큐멘터리 영상 미리보기</p>
          </div>
          <div className="mt-8">
            <Button size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              다큐멘터리 자세히 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-light italic mb-6">
              "사랑은 사람을 춤추게 한다. 사랑하는 사람은 춤을 추고, 춤을 추는 사람은 사랑한다."
            </p>
            <footer className="text-lg">- 이태석 신부 -</footer>
          </blockquote>
        </div>
      </section>
    </PageTemplate>
  )
}

// Timeline Item Component
function TimelineItem({
  year,
  title,
  description,
  isLeft,
}: {
  year: string
  title: string
  description: string
  isLeft: boolean
}) {
  return (
    <div className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row-reverse" : ""}`}>
      {/* 모바일에서는 항상 왼쪽에 점, 오른쪽에 내용 배치 */}
      <div className="hidden md:block md:w-1/2"></div>

      {/* 타임라인 점 - 모바일에서는 왼쪽, 데스크탑에서는 중앙 */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-20">
        <div className="w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
      </div>

      {/* 내용 카드 - 모바일에서는 전체 너비, 데스크탑에서는 절반 */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md ml-10 md:mx-8 relative z-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="text-primary font-bold text-xl mb-2">{year}</div>
        <div>
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}

// Award Item Component
function AwardItem({ year, title, description }: { year: string; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-start">
        <div className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-bold mr-4">{year}</div>
        <div>
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
