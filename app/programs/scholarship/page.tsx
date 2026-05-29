import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ScholarshipPage() {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="이태석 장학생"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">이태석 장학생</h1>
              <p className="mb-8 text-lg md:text-xl">어려운 환경의 학생들을 위한 장학 지원</p>
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
                    이태석 장학생 프로그램은 경제적으로 어려운 환경에 있는 학생들에게 교육 기회를 제공하기 위한 장학
                    프로그램입니다. 국내외 학생들을 대상으로 학비와 생활비를 지원하여 미래의 꿈을 키울 수 있도록
                    돕습니다.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">장학금 지원 대상</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>경제적으로 어려운 환경에 있는 중·고등학생 및 대학생</li>
                    <li>학업 성적이 우수하고 발전 가능성이 있는 학생</li>
                    <li>이태석 신부의 정신을 이어받아 봉사와 나눔을 실천하고자 하는 학생</li>
                    <li>수단 톤즈 지역 및 개발도상국 학생들</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">장학금 지원 내용</h3>
                  <div className="grid gap-6 md:grid-cols-2 mb-8">
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-bold mb-2">국내 장학생</h4>
                      <p>중·고등학생: 학기당 100만원</p>
                      <p>대학생: 학기당 200만원</p>
                    </div>
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-bold mb-2">해외 장학생</h4>
                      <p>초·중·고등학생: 연간 $500</p>
                      <p>대학생: 연간 $1,000</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">선발 과정</h3>
                  <ol className="list-decimal pl-6 space-y-2 mb-6">
                    <li>서류 접수: 지원서, 자기소개서, 추천서, 성적증명서, 가정환경증명서 등</li>
                    <li>서류 심사: 경제적 상황, 학업 성적, 봉사활동 경험 등을 종합적으로 평가</li>
                    <li>면접: 서류 심사 통과자를 대상으로 면접 진행</li>
                    <li>최종 선발: 이태석재단 장학위원회에서 최종 선발</li>
                  </ol>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">지원 일정</h3>
                  <p className="mb-6">
                    매년 1월과 7월에 이태석재단 홈페이지를 통해 장학생 선발 공고가 게시됩니다. 지원 기간은 약 2주간이며,
                    서류 심사와 면접을 거쳐 최종 선발된 장학생은 해당 학기 시작 전에 발표됩니다.
                  </p>

                  <div className="mt-12 bg-accent p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">문의 및 연락처</h3>
                    <p>이태석 장학생 담당자: 02-595-9093</p>
                    <p>이메일: scholarship@leetaeseok.org</p>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6 text-primary/80">장학생 활동</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="장학생 활동 사진 1"
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="장학생 활동 사진 2"
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="장학생 활동 사진 3"
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
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
                          src="/placeholder.svg?height=150&width=300"
                          alt="이태석 리더십 학교"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-1">이태석 리더십 학교</h4>
                        <p className="text-sm text-muted-foreground mb-4">미래의 리더를 양성하는 교육 프로그램</p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link href="/programs/leadership-school">자세히 보기</Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                      <div className="aspect-video relative">
                        <Image
                          src="/placeholder.svg?height=150&width=300"
                          alt="수단 톤즈 지원"
                          fill
                          className="object-cover"
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
    </div>
  )
}
