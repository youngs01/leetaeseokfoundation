import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HansenVillagePage() {
  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="한센인 마을 지원"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">한센인 마을 지원</h1>
              <p className="mb-8 text-lg md:text-xl">소외된 한센인 마을 주민들을 위한 의료 및 생활 지원</p>
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
                    한센인 마을 지원 사업은 한센병으로 인해 사회적으로 소외된 마을 주민들에게 의료 서비스와 생활 지원을
                    제공하는 사업입니다. 이태석 신부가 생전에 관심을 가졌던 소외된 이웃들을 돕는 사업으로, 한센인들의
                    건강한 삶과 사회 통합을 목표로 합니다.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">한센병과 한센인 마을</h3>
                  <p className="mb-6">
                    한센병(나병)은 과거에는 불치병으로 여겨져 환자들이 사회에서 격리되어 살아야 했습니다. 현재는 치료가
                    가능한 질병이 되었지만, 오랜 사회적 편견과 차별로 인해 많은 한센인들이 여전히 별도의 마을에서
                    공동체를 이루어 살고 있습니다. 이들은 의료, 경제, 사회적 지원이 필요한 상황에 놓여 있습니다.
                  </p>

                  <div className="my-8">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="한센인 마을 전경"
                      width={800}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground text-center mt-2">한센인 마을 전경</p>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">지원 내용</h3>
                  <div className="grid gap-6 md:grid-cols-2 mb-8">
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-bold mb-2">의료 지원</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>정기적인 의료 봉사 활동</li>
                        <li>의약품 및 의료 용품 지원</li>
                        <li>재활 치료 및 물리 치료 지원</li>
                        <li>건강 검진 및 상담 서비스</li>
                      </ul>
                    </div>
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-bold mb-2">생활 지원</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>주거 환경 개선 사업</li>
                        <li>생필품 및 식료품 지원</li>
                        <li>난방비 및 전기료 지원</li>
                        <li>문화 활동 및 여가 프로그램 지원</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">지원 대상 지역</h3>
                  <p className="mb-6">
                    현재 이태석재단은 국내 6개 한센인 마을과 해외 2개 한센인 마을을 지원하고 있습니다.
                  </p>
                  <div className="grid gap-6 md:grid-cols-2 mb-8">
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-bold mb-2">국내</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>경기도 소재 한센인 마을 2곳</li>
                        <li>전라남도 소재 한센인 마을 2곳</li>
                        <li>경상북도 소재 한센인 마을 1곳</li>
                        <li>충청남도 소재 한센인 마을 1곳</li>
                      </ul>
                    </div>
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-bold mb-2">해외</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>중국 윈난성 소재 한센인 마을</li>
                        <li>인도 콜카타 소재 한센인 마을</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">활동 성과</h3>
                  <p className="mb-6">2012년부터 시작된 한센인 마을 지원 사업은 다음�� 같은 성과를 이루었습니다:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>총 8개 한센인 마을, 약 500명의 주민들에게 지속적인 지원 제공</li>
                    <li>연간 4회 이상의 정기적인 의료 봉사 활동 진행</li>
                    <li>20채 이상의 노후 주택 개보수 지원</li>
                    <li>한센인 마을 주민들의 건강 상태 및 생활 환경 개선</li>
                    <li>한센인에 대한 사회적 인식 개선을 위한 캠페인 진행</li>
                  </ul>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div>
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="의료 봉사 활동"
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-muted-foreground text-center mt-2">의료 봉사 활동</p>
                    </div>
                    <div>
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="주거 환경 개선 사업"
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-muted-foreground text-center mt-2">주거 환경 개선 사업</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">참여 방법</h3>
                  <p className="mb-6">
                    한센인 마을 지원 사업에 참여하고 싶으신 분들은 다음과 같은 방법으로 동참하실 수 있습니다:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>정기 후원: 매월 일정 금액을 후원하여 지속적인 지원이 가능하도록 도와주세요.</li>
                    <li>일시 후원: 일시적으로 후원금을 기부하여 한센인 마을 지원 사업에 동참해 주세요.</li>
                    <li>봉사 활동: 의료, 주거 환경 개선, 문화 활동 등 다양한 봉사 활동에 참여해 주세요.</li>
                    <li>물품 기부: 의약품, 의료 용품, 생필품 등을 기부해 주세요.</li>
                  </ul>

                  <div className="mt-12 bg-accent p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">문의 및 연락처</h3>
                    <p>한센인 마을 지원 사업 담당자: 02-595-9093</p>
                    <p>이메일: hansen@leetaeseok.org</p>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6 text-primary/80">활동 갤러리</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="한센인 마을 지원 활동 사진 1"
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="한센인 마을 지원 활동 사진 2"
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="한센인 마을 지원 활동 사진 3"
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
                          alt="의약품 지원"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-1">의약����� 지원</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          의료 서비스가 부족한 지역에 의약품 및 의료 장비 지원
                        </p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link href="/programs/medical-support">자세히 보기</Link>
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
