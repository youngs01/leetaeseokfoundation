import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"

export default function MedicalSupportPage() {
  return (
    <div className="flex flex-col">
      {/* <Navbar /> */}
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="의약품 지원"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">의약품 지원</h1>
              <p className="mb-8 text-lg md:text-xl">의료 서비스가 부족한 지역에 의약품 및 의료 장비 지원</p>
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
                    의약품 지원 사업은 의료 서비스가 부족한 국내외 지역에 의약품과 의료 장비를 지원하는 사업입니다.
                    이태석 신부가 의사로서 활동했던 정신을 이어받아 의료 사각지대에 있는 이웃들에게 건강한 삶을
                    선물하고자 합니다.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">사업 배경</h3>
                  <p className="mb-6">
                    전 세계적으로 많은 지역에서 여전히 기본적인 의료 서비스에 대한 접근이 제한되어 있습니다. 특히
                    개발도상국이나 분쟁 지역, 그리고 국내 의료 소외 지역의 주민들은 필수 의약품과 의료 서비스를 받지
                    못해 건강 위협에 노출되어 있습니다. 이태석재단은 이태석 신부가 의사로서 활동했던 정신을 이어받아
                    이러한 의료 사각지대에 있는 이웃들에게 의약품과 의료 장비를 지원하고 있습니다.
                  </p>

                  <div className="my-8">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="의약품 지원 활동"
                      width={800}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground text-center mt-2">의약품 전달식</p>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">지원 내용</h3>
                  <div className="grid gap-6 md:grid-cols-2 mb-8">
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-bold mb-2">의약품 지원</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>필수 의약품 지원</li>
                        <li>백신 및 예방 의약품 지원</li>
                        <li>응급 의약품 키트 지원</li>
                        <li>만성질환 치료제 지원</li>
                      </ul>
                    </div>
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-bold mb-2">의료 장비 지원</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>기본 진료 장비 지원</li>
                        <li>이동식 진료소 운영</li>
                        <li>의료 소모품 지원</li>
                        <li>재활 치료 장비 지원</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">지원 대상 지역</h3>
                  <p className="mb-6">현재 이태석재단은 다음과 같은 지역에서 의약품 지원 사업을 진행하고 있습니다:</p>
                  <div className="grid gap-6 md:grid-cols-2 mb-8">
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-bold mb-2">국내</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>의료 취약 지역 보건소</li>
                        <li>노숙자 쉼터 및 무료 진료소</li>
                        <li>한센인 마을 및 요양 시설</li>
                        <li>도서 산간 지역 의료 기관</li>
                      </ul>
                    </div>
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-bold mb-2">해외</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>수단 톤즈 지역 병원</li>
                        <li>우크라이나 전쟁 피해 지역</li>
                        <li>아시아 및 아프리카 의료 취약 지역</li>
                        <li>자연재해 피해 지역</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">협력 기관</h3>
                  <p className="mb-6">
                    이태석재단은 다음과 같은 기관들과 협력하여 의약품 지원 사업을 진행하고 있습니다:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>국내외 제약 회사</li>
                    <li>의료 기기 제조 업체</li>
                    <li>국제 의료 NGO 단체</li>
                    <li>현지 의료 기관 및 병원</li>
                    <li>한국 국제협력단(KOICA)</li>
                    <li>세계보건기구(WHO)</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">활동 성과</h3>
                  <p className="mb-6">의약품 지원 사업은 다음과 같은 성과를 이루었습니다:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>연간 약 20개 지역, 50,000명 이상에게 의약품 지원</li>
                    <li>필수 의약품 100톤 이상 지원</li>
                    <li>이동식 진료소를 통해 10,000명 이상의 환자 치료</li>
                    <li>의료 장비 및 소모품 50톤 이상 지원</li>
                    <li>현지 의료진 교육 및 역량 강화 프로그램 운영</li>
                  </ul>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div>
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="의약품 전달"
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-muted-foreground text-center mt-2">의약품 전달</p>
                    </div>
                    <div>
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="이동식 진료소 운영"
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-muted-foreground text-center mt-2">이동식 진료소 운영</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">참여 방법</h3>
                  <p className="mb-6">
                    의약품 지원 사업에 참여하고 싶으신 분들은 다음과 같은 방법으로 동참하실 수 있습니다:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>정기 후원: 매월 일정 금액을 후원하여 지속적인 지원이 가능하도록 도와주세요.</li>
                    <li>일시 후원: 일시적으로 후원금을 기부하여 의약품 지원 사업에 동참해 주세요.</li>
                    <li>의약품 기부: 유효기간이 남은 의약품이나 의료 용품을 기부해 주세요.</li>
                    <li>전문 봉사: 의료 전문가로서 현장 봉사나 자문에 참여해 주세요.</li>
                  </ul>

                  <div className="mt-12 bg-accent p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">문의 및 연락처</h3>
                    <p>의약품 지원 사업 담당자: 02-595-9093</p>
                    <p>이메일: medical@leetaeseok.org</p>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6 text-primary/80">활동 갤러리</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="의약품 지원 활동 사진 1"
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="의약품 지원 활동 사진 2"
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="의약품 지원 활동 사진 3"
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
      {/* <Footer /> */}
    </div>
  )
}
