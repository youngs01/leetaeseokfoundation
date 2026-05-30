import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="이태석재단, 수단 톤즈 지역 의약품 지원 사업 시작"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <p className="mb-4 text-primary-foreground/80">2023.12.15</p>
              <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                이태석재단, 수단 톤즈 지역 의약품 지원 사업 시작
              </h1>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-muted py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                홈
              </Link>
              <span className="mx-2">/</span>
              <Link href="/news" className="hover:text-primary transition-colors">
                활동 소식
              </Link>
              <span className="mx-2">/</span>
              <Link href="/news?category=foundation" className="hover:text-primary transition-colors">
                재단 소식
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">이태석재단, 수단 톤즈 지역 의약품 지원 사업 시작</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="prose max-w-none">
                  <p className="text-lg mb-6 font-medium">
                    이태석재단이 수단 톤즈 지역에 의약품 지원 사업을 시작했습니다. 이번 사업은 이태석 신부가 생전에
                    활동했던 지역에 지속적인 의료 지원을 제공하기 위한 것입니다.
                  </p>

                  <div className="my-8">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="수단 톤즈 지역 의약품 지원 사업"
                      width={800}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground text-center mt-2">수단 톤즈 지역 의약품 전달식</p>
                  </div>

                  <p className="mb-6">
                    이태석재단은 12월 10일, 수단 톤즈 지역에 약 5천만원 상당의 의약품을 전달했습니다. 이번에 전달된
                    의약품은 말라리아 치료제, 항생제, 진통제 등 현지에서 가장 필요로 하는 의약품들로 구성되었습니다.
                  </p>

                  <p className="mb-6">
                    이태석 신부는 2001년부터 2009년까지 수단 톤즈 지역에서 의사이자 사제로 활동하며 현지 주민들에게 의료
                    서비스를 제공했습니다. 이태석재단은 그의 정신을 이어받아 톤즈 지역에 지속적인 지원을 이어가고
                    있습니다.
                  </p>

                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "이태석 신부님이 생전에 가장 관심을 가졌던 톤즈 지역의 의료 환경 개선을 위해 앞으로도 지속적인
                    지원을 이어갈 계획입니다. 현지 주민들이 건강한 삶을 살 수 있도록 다양한 의료 지원 사업을 펼쳐나갈
                    것입니다."
                    <footer className="text-right mt-2 not-italic">- 이태석재단 이사장</footer>
                  </blockquote>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">지속적인 지원 계획</h3>
                  <p className="mb-6">
                    이태석재단은 이번 의약품 지원을 시작으로, 앞으로도 수단 톤즈 지역에 정기적인 의약품 지원과 함께 의료
                    장비 지원, 의료진 파견 등 다양한 의료 지원 사업을 펼쳐나갈 계획입니다.
                  </p>

                  <p className="mb-6">
                    또한, 톤즈 병원의 운영을 지원하고, 현지 의료진 교육 프로그램도 진행할 예정입니다. 이를 통해 톤즈
                    지역 주민들이 지속적이고 안정적인 의료 서비스를 받을 수 있도록 할 계획입니다.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div>
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="톤즈 병원"
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-muted-foreground text-center mt-2">톤즈 병원 전경</p>
                    </div>
                    <div>
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="의약품 전달"
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-muted-foreground text-center mt-2">현지 의료진에게 의약품 전달</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4 text-primary/80">후원 참여 방법</h3>
                  <p className="mb-6">
                    이태석재단의 수단 톤즈 지역 의약품 지원 사업에 동참하고 싶은 분들은 이태석재단
                    홈페이지(www.leetaeseok.org)를 통해 후원에 참여하실 수 있습니다. 여러분의 소중한 후원금은 ��즈 지역
                    주민들의 건강한 삶을 위해 사용됩니다.
                  </p>

                  <div className="bg-accent p-6 rounded-lg mt-8">
                    <h4 className="font-bold mb-2">문의 및 연락처</h4>
                    <p>이태석재단 사업팀: 02-595-9093</p>
                    <p>이메일: smiletonj@gmail.com</p>
                  </div>
                </div>

                <div className="mt-12 flex justify-between">
                  <Button asChild variant="outline" className="flex items-center gap-2">
                    <Link href="/news">
                      <ChevronLeft className="h-4 w-4" />
                      목록으로
                    </Link>
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline">이전 글</Button>
                    <Button variant="outline">다음 글</Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-muted p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold mb-6 text-primary/80">관련 소식</h3>
                  <div className="space-y-4">
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                      <div className="aspect-video relative">
                        <Image
                          src="/placeholder.svg?height=150&width=300"
                          alt="영화 '부활', 바티칸 특별 상영회 성황리에 마쳐"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-1 line-clamp-2">영화 '부활', 바티칸 특별 상영회 성황리에 마쳐</h4>
                        <p className="text-sm text-muted-foreground mb-2">2023.11.20</p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link href="/news/foundation/2">자세히 보기</Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                      <div className="aspect-video relative">
                        <Image
                          src="/placeholder.svg?height=150&width=300"
                          alt="2024년 이태석 장학생 선발 결과 발표"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-1 line-clamp-2">2024년 이태석 장학생 선발 결과 발표</h4>
                        <p className="text-sm text-muted-foreground mb-2">2023.10.05</p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link href="/news/foundation/3">자세히 보기</Link>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
