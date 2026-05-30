import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function UkraineSupportPage() {
  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="우크라이나 지원"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">우크라이나 지원</h1>
              <p className="mb-8 text-lg md:text-xl">전쟁으로 고통받는 우크라이나 국민들을 위한 인도적 지원</p>
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
                    우크라이나 지원 사업은 전쟁으로 인해 고통받는 우크라이나 국민들에게 의약품, 식량, 생필품 등 인도적
                    지원을 제공하는 사업입니다. 특히 어린이와 노약자들을 위한 특별 지원 프로그램을 운영하고 있으며,
                    이태석 신부의 평화와 화합의 정신을 실천하고 있습니다.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">사업 배경</h3>
                  <p className="mb-6">
                    2022년 2월 시작된 우크라이나 전쟁으로 인해 수많은 민간인들이 삶의 터전을 잃고 난민이 되었습니다.
                    이태석재단은 전쟁의 피해자들, 특히 가장 취약한 계층인 어린이와 노약자들을 돕기 위해 2022년 3월부터
                    우크라이나 지원 사업을 시작했습니다.
                  </p>

                  <div className="my-8">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="우크라이나 지원 활동"
                      width={800}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground text-center mt-2">우크라이나 난민 지원 활동</p>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">지원 내용</h3>
                  <div className="grid gap-6 md:grid-cols-2 mb-8">
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-bold mb-2">의료 지원</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>응급 의약품 및 의료 용품 지원</li>
                        <li>이동식 진료소 운영</li>
                        <li>부상자 치료 및 재활 지원</li>
                        <li>심리 상담 및 정신 건강 지원</li>
                      </ul>
                    </div>
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-bold mb-2">생활 지원</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>식량 및 생필품 지원</li>
                        <li>임시 주거 시설 지원</li>
                        <li>난민 아동 교육 지원</li>
                        <li>겨울철 난방 및 방한 용품 지원</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">지원 대상 지역</h3>
                  <p className="mb-6">
                    현재 이태석재단은 다음과 같은 지역에서 우크라이나 지원 사업을 진행하고 있습니다:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>우크라이나 서부 지역 난민 수용소</li>
                    <li>폴란드, 루마니아, 몰도바 등 인접 국가의 우크라이나 난민 캠프</li>
                    <li>키이우, 리비우 등 주요 도시의 피해 지역</li>
                    <li>전쟁 피해가 심각한 동부 지역 접경 도시</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">협력 기관</h3>
                  <p className="mb-6">
                    이태석재단은 다음과 같은 기관들과 협력하여 우크라이나 지원 사업을 진행하고 있습니다:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>국제 적십자사</li>
                    <li>우크라이나 현지 NGO 단체</li>
                    <li>폴란드, 루마니아 등 인접 국가의 구호 단체</li>
                    <li>한국 국제협력단(KOICA)</li>
                    <li>우크라이나 교민회</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">활동 성과</h3>
                  <p className="mb-6">2022년 3월부터 시작된 우크라이나 지원 사업은 다음과 같은 성과를 이루었습니다:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>총 5개 지역, 약 10,000명의 난민들에게 지원 제공</li>
                    <li>의약품 및 의료 용품 100톤 이상 지원</li>
                    <li>식량 및 생필품 200톤 이상 지원</li>
                    <li>이동식 진료소를 통해 5,000명 이상의 환자 치료</li>
                    <li>난민 아동 1,000명 이상에게 교육 지원</li>
                    <li>겨울철 난방 및 방한 용품 3,000세트 이상 지원</li>
                  </ul>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div>
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="의료 지원 활동"
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-muted-foreground text-center mt-2">의료 지원 활동</p>
                    </div>
                    <div>
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="아동 교육 지원"
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-muted-foreground text-center mt-2">아동 교육 지원</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">참여 방법</h3>
                  <p className="mb-6">
                    우크라이나 지원 사업에 참여하고 싶으신 분들은 다음과 같은 방법으로 동참하실 수 있습니다:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>정기 후원: 매월 일정 금액을 후원하여 지속적인 지원이 가능하도록 도와주세요.</li>
                    <li>일시 후원: 일시적으로 후원금을 기부하여 우크라이나 지원 사업에 동참해 주세요.</li>
                    <li>물품 기부: 의약품, 의료 용품, 생필품, 방한 용품 등을 기부해 주세요.</li>
                    <li>전문 봉사: 의료, 교육, 심리 상담 등 전문 분야에서 봉사해 주세요.</li>
                  </ul>

                  <div className="mt-12 bg-accent p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">문의 및 연락처</h3>
                    <p>우크라이나 지원 사업 담당자: 02-595-9093</p>
                    <p>이메일: ukraine@leetaeseok.org</p>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6 text-primary/80">활동 갤러리</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="우크라이나 지원 활동 사진 1"
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="우크라이나 지원 활동 사진 2"
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="우크라이나 지원 활동 사진 3"
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
                        <h4 className="font-bold mb-1">의약품 지원</h4>
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
                          alt="한센인 마을 지원"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-1">한센인 마을 지원</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          소외된 한센인 마을 주민들을 위한 의료 및 생활 지원
                        </p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link href="/programs/hansen-village">자세히 보기</Link>
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
