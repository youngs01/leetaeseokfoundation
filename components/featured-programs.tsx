import Image from "next/image"
import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const programs = [
  {
    title: "이태석 리더십 학교",
    description: "미래의 리더를 양성하는 교육 프로그램",
    image: "https://example.com/images/programs/leadership-school.jpg",
    link: "/programs/leadership-school",
  },
  {
    title: "한센인 마을 지원",
    description: "소외된 한센인 마을 주민들을 위한 의료 및 생활 지원",
    image: "https://example.com/images/programs/hansen-village-support.jpg",
    link: "/programs/hansen-village",
  },
  {
    title: "우크라이나 지원",
    description: "전쟁으로 고통받는 우크라이나 국민들을 위한 인도적 지원",
    image: "https://example.com/images/programs/ukraine-support.jpg",
    link: "/programs/ukraine-support",
  },
]

export default function FeaturedPrograms() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">주요 사업 안내</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground mb-8 leading-relaxed">
            이태석재단은 다양한 사업을 통해 국내외 소외된 이웃들에게 희망을 전하고 있습니다
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="aspect-video relative">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-center mb-2">{program.title}</CardTitle>
                <CardDescription className="text-center leading-relaxed">{program.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Button asChild variant="outline" className="transition-colors hover:bg-primary hover:text-white">
                  <Link href={program.link}>자세히 보기</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="transition-transform hover:scale-105">
            <Link href="/programs">모든 사업 보기</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
