import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LeadershipSchoolPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/d/1LKtV3KUz6wyT6RzsX4_DS33tS20v5xaI"
            alt="이태석 리더십 학교"
            fill
            className="object-cover brightness-50"
            priority
            unoptimized
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">이태석 리더십 학교</h1>
            <p className="mb-8 text-lg md:text-xl">미래의 리더를 양성하는 교육 프로그램</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-primary">프로그램 소개</h2>
              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  이태석 리더십 학교는 이태석 신부의 리더십 철학을 바탕으로 미래 세대의 리더를 양성하는 교육
                  프로그램입니다. 국내외 청소년들에게 봉사와 나눔의 정신을 가르치고 실천할 수 있는 기회를 제공합니다.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">프로그램 목표</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>이태석 신부의 봉사 정신과 리더십 철학 전파</li>
                  <li>청소년들의 글로벌 시민의식 함양</li>
                  <li>나눔과 봉사의 가치를 실천하는 미래 리더 양성</li>
                  <li>국제적 시야와 문화적 감수성 개발</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">주요 활동</h3>
                <div className="grid gap-6 md:grid-cols-2 mb-8">
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-bold mb-2">리더십 캠프</h4>
                    <p>연 2회 국내외에서 진행되는 집중 리더십 캠프</p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-bold mb-2">봉사활동 프로젝트</h4>
                    <p>지역사회와 연계한 실질적인 봉사활동 기획 및 실행</p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-bold mb-2">멘토링 프로그램</h4>
                    <p>다양한 분야의 전문가들과의 멘토링 세션</p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-bold mb-2">글로벌 교류</h4>
                    <p>국제 학생들과의 교류 및 문화 체험 활동</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">참가 대상</h3>
                <p className="mb-6">
                  중학교 2학년부터 고등학교 3학년까지의 청소년을 대상으로 합니다. 봉사와 나눔에 관심이 있고, 리더십
                  역량을 개발하고자 하는 학생들을 환영합니다.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">신청 방법</h3>
                <p className="mb-6">
                  매년 3월과 9월에 이태석재단 홈페이지를 통해 참가 신청을 받습니다. 서류 심사와 면접을 통해 최종
                  참가자를 선발합니다.
                </p>

                <div className="mt-12 bg-accent p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">문의 및 연락처</h3>
                  <p>이태석 리더십 학교 담당자: 02-595-9093</p>
                  <p>이메일: leadership@leetaeseok.org</p>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6 text-primary/80">프로그램 갤러리</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://lh3.googleusercontent.com/d/1DF8n6EmeqzWraBe9m1GfqmZVthD1rITt"
                      alt="리더십 캠프 활동 사진"
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                      unoptimized
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://lh3.googleusercontent.com/d/1DF8n6EmeqzWraBe9m1GfqmZVthD1rITt"
                      alt="봉사활동 프로젝트 사진"
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                      unoptimized
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="https://lh3.googleusercontent.com/d/1DF8n6EmeqzWraBe9m1GfqmZVthD1rITt"
                      alt="멘토링 프로그램 사진"
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-muted p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-6 text-primary/80">관련 프로그램</h3>
                <div className="space-y-4">
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                    <div className="aspect-video relative">
                      <Image
                        src="https://lh3.googleusercontent.com/d/1LKtV3KUz6wyT6RzsX4_DS33tS20v5xaI"
                        alt="이태석 장학생"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-bold mb-1">이태석 장학생</h4>
                      <p className="text-sm text-muted-foreground mb-4">어려운 환경의 학생들을 위한 장학 지원</p>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href="/programs/scholarship">자세히 보기</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                    <div className="aspect-video relative">
                      <Image
                        src="https://lh3.googleusercontent.com/d/1WQ25kchVTLfxD8XVA_8Dc7ncSFZguSRt"
                        alt="수단 톤즈 지원"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-bold mb-1">수단 톤즈 지원</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        이태석 신부가 활동했던 수단 톤즈 지역 지원 사업
                      </p>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href="/programs/tonj-support">자세히 보기</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8">
                  <Button asChild className="w-full">
                    <Link href="/about/contact">문의하기</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-between">
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link href="/programs">
                <ChevronLeft className="h-4 w-4" />
                모든 사업 보기
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
