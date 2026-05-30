import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Printer, Mail, Clock } from "lucide-react"

export default function LocationPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://example.com/images/about/location-hero.jpg"
            alt="찾아오시는 길"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">찾아오시는 길</h1>
            <p className="mb-8 text-lg md:text-xl">이태석재단을 방문하시는 방법을 안내해 드립니다</p>
          </div>
        </div>
      </section>

      {/* Map & Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold mb-6">오시는 길</h2>

              <div className="bg-muted rounded-lg overflow-hidden mb-8">
                <div className="aspect-video relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.0887974440466!2d126.91627867677587!3d37.52636597205468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f3a0d5f8f31%3A0x8d5e6b0c0c0c0c0c!2s15%20Gukhoe-daero%2062-gil%2C%20Yeongdeungpo-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1710000000000!5m2!1sen!2skr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">주소</h3>
                    <p className="text-muted-foreground">서울시 영동포구 국회대로 62길 15, 광복회관 8층</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">전화</h3>
                    <p className="text-muted-foreground">02-595-9093</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Printer className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">팩스</h3>
                    <p className="text-muted-foreground">02-6339-3390</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">이메일</h3>
                    <p className="text-muted-foreground">smiletonj@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">업무시간</h3>
                    <p className="text-muted-foreground">평일 09:00 - 18:00 (점심시간 12:00 - 13:00)</p>
                    <p className="text-muted-foreground">주말 및 공휴일 휴무</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">교통안내</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-primary"
                    >
                      <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                      <path d="M4 12h16"></path>
                      <path d="M12 4v16"></path>
                    </svg>
                    지하철
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-bold mb-1">5호선 여의도역</p>
                      <p className="text-muted-foreground">5번 출구에서 도보 10분</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-bold mb-1">9호선 국회의사당역</p>
                      <p className="text-muted-foreground">3번 출구에서 도보 5분</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-primary"
                    >
                      <path d="M8 6v6"></path>
                      <path d="M15 6v6"></path>
                      <path d="M2 12h19.6"></path>
                      <path d="M18 18h3a1 1 0 0 0 1-1v-5h-4"></path>
                      <path d="M2 8v7a1 1 0 0 0 1 1h11"></path>
                      <path d="M7 18h7"></path>
                      <path d="M9 18a3 3 0 0 1-6 0"></path>
                      <path d="M17 18a3 3 0 0 0 6 0"></path>
                    </svg>
                    버스
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-bold mb-1">간선버스</p>
                      <p className="text-muted-foreground">153, 162, 261, 362, 461, 753</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-bold mb-1">지선버스</p>
                      <p className="text-muted-foreground">5615, 5618, 5711, 6623, 6633</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-bold mb-1">광역버스</p>
                      <p className="text-muted-foreground">9409, M7613, M7625</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-primary"
                    >
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"></path>
                      <circle cx="7" cy="17" r="2"></circle>
                      <path d="M9 17h6"></path>
                      <circle cx="17" cy="17" r="2"></circle>
                    </svg>
                    자가용
                  </h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-muted-foreground">
                      내비게이션에 "서울시 영동포구 국회대로 62길 15, 광복회관"을 검색하세요.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      주차는 건물 내 지하주차장을 이용하실 수 있습니다. (최초 1시간 무료)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">문의하기</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            이태석재단에 대해 더 알고 싶으시거나 문의사항이 있으시면 언제든지 연락주세요.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
          >
            <Link href="/about/contact">문의하기</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
