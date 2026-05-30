import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function MovieIntroductionPage() {
  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="영화 '부활' 소개"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">영화 '부활' 소개</h1>
              <p className="mb-8 text-lg md:text-xl">이태석 신부의 삶과 정신을 담은 영화 '부활'을 소개합니다</p>
            </div>
          </div>
        </section>

        {/* Movie Introduction Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">영화 '부활'</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    영화 '부활'은 이태석 신부의 삶과 정신을 담은 영화로, 의사이자 사제로서 아프리카 수단 톤즈 지역에서
                    헌신적인 봉사활동을 펼친 이태석 신부의 감동적인 이야기를 그리고 있습니다.
                  </p>
                  <p>
                    이 영화는 이태석 신부가 수단 톤즈 지역에서 병원과 학교를 세우고, 현지 아이들에게 음악을 가르치며
                    희망을 전한 과정을 담고 있습니다. 또한, 그가 대장암 진단을 받고 한국으로 돌아와 투병하다가
                    선종하기까지의 여정을 감동적으로 그려내고 있습니다.
                  </p>
                  <p>
                    '부활'이라는 제목은 이태석 신부의 삶과 정신이 그의 선종 이후에도 계속해서 살아있음을 의미합니다.
                    그의 사랑과 나눔의 정신은 이태석재단을 통해 계속 이어지고 있으며, 많은 사람들에게 감동과 희망을
                    전하고 있습니다.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <span className="font-bold w-24">감독</span>
                    <span>구수환</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold w-24">출연</span>
                    <span>이태석 신부, 이태석 신부 제자들</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold w-24">장르</span>
                    <span>다큐멘터리</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold w-24">상영시간</span>
                    <span>120분</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold w-24">개봉일</span>
                    <span>2023년 10월 5일</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold w-24">등급</span>
                    <span>전체 관람가</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    예고편 보기
                  </Button>
                </div>
              </div>

              <div className="transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="영화 '부활' 포스터"
                  width={600}
                  height={800}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Synopsis Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">줄거리</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-muted-foreground mb-4">
                  의사이자 가톨릭 사제인 이태석(이정재 분)은 2001년 수단 톤즈 지역으로 파견됩니다. 그곳에서 그는 내전과
                  빈곤으로 고통받는 현지 주민들을 위해 병원을 세우고 의료 서비스를 제공합니다.
                </p>
                <p className="text-muted-foreground mb-4">
                  또한, 현지 아이들을 위해 학교를 세우고 교육을 제공하며, 음악을 가르쳐 '톤즈의 아이들' 브라스밴드를
                  창단합니다. 이태석 신부의 헌신적인 봉사와 사랑은 톤즈 지역에 희망과 변화를 가져옵니다.
                </p>
                <p className="text-muted-foreground mb-4">
                  그러나 2009년, 이태석 신부는 대장암 진단을 받고 한국으로 돌아와 투병을 시작합니다. 병마와 싸우면서도
                  그는 톤즈 지역과 아이들을 걱정하며, 그들에게 도움을 계속 전하고자 합니다.
                </p>
                <p className="text-muted-foreground">
                  2010년 1월 14일, 이태석 신부는 48세의 나이로 선종합니다. 하지만 그의 사랑과 나눔의 정신은 이태석재단을
                  통해 계속 이어지고, 톤즈 지역과 전 세계 소외된 이웃들에게 희망을 전하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stills Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">스틸컷</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="영화 '부활' 스틸컷 1"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="영화 '부활' 스틸컷 2"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="영화 '부활' 스틸컷 3"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="영화 '부활' 스틸컷 4"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="영화 '부활' 스틸컷 5"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="영화 '부활' 스틸컷 6"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">관람평</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-bold text-primary">김**</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">감동적인 영화</p>
                      <div className="flex text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    이태석 신부님의 삶과 정신을 잘 담아낸 감동적인 영화입니다. 배우들의 연기도 훌륭하고, 특히 이정재
                    배우가 이태석 신부님을 연기한 모습이 정말 인상적이었습니다. 영화를 보고 나서 많은 생각을 하게
                    되었습니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-bold text-primary">박**</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">눈물없이 볼 수 없는 영화</p>
                      <div className="flex text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    이태석 신부님의 삶을 그린 영화를 보면서 정말 많이 울었습니다. 어려운 환경 속에서도 사랑과 나눔을
                    실천하는 모습이 너무 감동적이었습니다. 이 영화를 통해 이태석 신부님의 정신이 더 많은 사람들에게
                    전해졌으면 좋겠습니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-bold text-primary">이**</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">꼭 봐야 할 영화</p>
                      <div className="flex text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star-half"
                        >
                          <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    요즘 같은 시대에 꼭 필요한 영화라고 생각합니다. 이태석 신부님의 삶을 통해 진정한 사랑과 나눔이
                    무엇인지 생각해볼 수 있었습니다. 특히 아이들과 함께 보면 좋은 교육적 효과가 있을 것 같습니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vatican Screening CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">바티칸 영화 상영 성료</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              영화 '부활'이 바티칸에서 특별 상영회를 성황리에 마쳤습니다. 프란치스코 교황을 비롯한 바티칸 관계자들이
              참석하여 이태석 신부의 삶과 업적을 기렸습니다.
            </p>
            <Button asChild size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link href="/resurrection-movie/vatican-screening">바티칸 상영 소식 보기</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
