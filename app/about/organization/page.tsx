import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OrganizationPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="조직도"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">조직도</h1>
            <p className="mb-8 text-lg md:text-xl">이태석재단의 조직 구성과 업무 분장을 소개합니다</p>
          </div>
        </div>
      </section>

      {/* Organization Chart Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">조직 구성</h2>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex flex-col items-center">
                {/* Board of Directors */}
                <div className="bg-primary text-primary-foreground p-4 rounded-lg w-64 text-center mb-8">
                  <h3 className="font-bold text-lg">이사회</h3>
                </div>

                {/* Connecting Line */}
                <div className="w-1 h-8 bg-gray-300"></div>

                {/* Secretary General */}
                <div className="bg-secondary text-secondary-foreground p-4 rounded-lg w-64 text-center mb-8">
                  <h3 className="font-bold text-lg">사무국장</h3>
                </div>

                {/* Connecting Line */}
                <div className="w-1 h-8 bg-gray-300"></div>

                {/* Departments */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
                  <div className="bg-accent text-accent-foreground p-3 rounded-lg text-center">
                    <h3 className="font-bold text-sm">교육사업국</h3>
                    <p className="text-xs mt-1 opacity-80">정경미</p>
                  </div>
                  <div className="bg-accent text-accent-foreground p-3 rounded-lg text-center">
                    <h3 className="font-bold text-sm">희망나눔국</h3>
                    <p className="text-xs mt-1 opacity-80">권혁수</p>
                  </div>
                  <div className="bg-accent text-accent-foreground p-3 rounded-lg text-center">
                    <h3 className="font-bold text-sm">홍보국</h3>
                    <p className="text-xs mt-1 opacity-80">김종갑</p>
                  </div>
                  <div className="bg-accent text-accent-foreground p-3 rounded-lg text-center">
                    <h3 className="font-bold text-sm">미디어국</h3>
                    <p className="text-xs mt-1 opacity-80">김성미</p>
                  </div>
                  <div className="bg-accent text-accent-foreground p-3 rounded-lg text-center">
                    <h3 className="font-bold text-sm">현장지원국</h3>
                    <p className="text-xs mt-1 opacity-80">조정관</p>
                  </div>
                  <div className="bg-accent text-accent-foreground p-3 rounded-lg text-center">
                    <h3 className="font-bold text-sm">대외협력국</h3>
                    <p className="text-xs mt-1 opacity-80">이강윤</p>
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 w-full mt-3 max-w-md mx-auto">
                  <div className="bg-accent text-accent-foreground p-3 rounded-lg text-center">
                    <h3 className="font-bold text-sm">콘텐츠제작국</h3>
                    <p className="text-xs mt-1 opacity-80">홍길동</p>
                  </div>
                  <div className="bg-accent text-accent-foreground p-3 rounded-lg text-center">
                    <h3 className="font-bold text-sm">해외사업국</h3>
                    <p className="text-xs mt-1 opacity-80">구교철</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advisory Board */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">고문</h3>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted p-4 rounded-lg text-center">
                  <p className="font-bold mb-1">이태선</p>
                  <p className="text-sm text-muted-foreground">이태석 신부님 유가족 대표</p>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <p className="font-bold mb-1">Lars Olof Thorell</p>
                  <p className="text-sm text-muted-foreground">스웨덴 5선의원</p>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <p className="font-bold mb-1">Steven Schwager</p>
                  <p className="text-sm text-muted-foreground">코넬대학교 명예교수</p>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <p className="font-bold mb-1">Mogens Godballe</p>
                  <p className="text-sm text-muted-foreground">덴마크 Nordfyns 자유학교장</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles and Responsibilities Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">업무 분장</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">이사회</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 재단의 주요 정책 및 사업 방향 결정</li>
                <li>• 예산 및 결산 승인</li>
                <li>• 정관 변경 및 주요 규정 제정</li>
                <li>• 재단의 장기 발전 계획 수립</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">사무국장 (이소영)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 재단의 전반적인 운영 총괄</li>
                <li>• 이사회 결정사항 집행</li>
                <li>• 각 국 업무 조정 및 관리</li>
                <li>• 연간 사업 계획 및 예산 수립</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">교육사업국 (정경미)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 이태석 리더십 학교 운영</li>
                <li>• 이태석 장학 사업 운영</li>
                <li>• 참배움터 교육 프로그램</li>
                <li>• 교육 사업 기획 및 평가</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">희망나눔국 (권혁수)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 국내 나눔 사업 기획 및 운영</li>
                <li>• 후원자 관리 및 소통</li>
                <li>• 한센인 마을 지원 사업</li>
                <li>• 의약품 지원 사업</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">홍보국 (김종갑)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 재단 홍보 전략 수립 및 실행</li>
                <li>• 홈페이지 및 SNS 운영</li>
                <li>• 홍보 콘텐츠 제작</li>
                <li>• 언론 대응 및 보도자료 작성</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">미디어국 (김성미)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 영상 콘텐츠 제작 및 관리</li>
                <li>• 다큐멘터리 및 영화 제작 지원</li>
                <li>• 사진 및 영상 아카이브 관리</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">현장지원국 (조정관)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 현장 사업 지원 및 관리</li>
                <li>• 현지 파트너 협력</li>
                <li>• 사업 현장 모니터링</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">대외협력국 (이강윤)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 대외 협력 및 네트워크 구축</li>
                <li>• 국내외 파트너십 관리</li>
                <li>• 협력 기관 및 단체와의 협업</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">콘텐츠제작국 (홍길동)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 콘텐츠 기획 및 제작 총괄</li>
                <li>• 출판물 및 인쇄물 제작</li>
                <li>• 디지털 콘텐츠 관리</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">해외사업국 (구교철)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 해외 사업 기획 및 운영</li>
                <li>• 우크라이나 지원 사업</li>
                <li>• 해외 지부 관리 및 협력</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">문의하기</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            이태석재단의 조직 및 업무에 대해 더 알고 싶으시거나 문의사항이 있으시면 언제든지 연락주세요.
          </p>
          <Button asChild size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Link href="/about/contact">문의하기</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
