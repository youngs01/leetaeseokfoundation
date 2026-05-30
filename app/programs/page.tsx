import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTemplate } from "@/components/page-template"

const allPrograms = [
  {
    id: "leadership-school",
    title: "이태석 리더십 학교",
    description: "미래의 리더를 양성하는 교육 프로그램",
    longDescription:
      "이태석 신부의 리더십 철학을 바탕으로 미래 세대의 리더를 양성하는 교육 프로그램입니다. 국내외 청소년들에게 봉사와 나눔의 정신을 가르치고 실천할 수 있는 기회를 제공합니다.",
    image: "https://example.com/images/programs/leadership-school-detail.jpg",
    category: "education",
  },
  {
    id: "scholarship",
    title: "이태석 장학생",
    description: "어려운 환경의 학생들을 위한 장학 지원",
    longDescription:
      "경제적으로 어려운 환경에 있는 학생들에게 교육 기회를 제공하기 위한 장학 프로그램입니다. 국내외 학생들을 대상으로 학비와 생활비를 지원하여 미래의 꿈을 키울 수 있도록 돕습니다.",
    image: "https://example.com/images/programs/scholarship-detail.jpg",
    category: "education",
  },
  {
    id: "hansen-village",
    title: "한센인 마을 지원",
    description: "소외된 한센인 마을 주민들을 위한 의료 및 생활 지원",
    longDescription:
      "한센병으로 인해 사회적으로 소외된 마을 주민들에게 의료 서비스와 생활 지원을 제공합니다. 이태석 신부가 생전에 관심을 가졌던 소외된 이웃들을 돕는 사업입니다.",
    image: "https://example.com/images/programs/hansen-village-detail.jpg",
    category: "medical",
  },
  {
    id: "ukraine-support",
    title: "우크라이나 지원",
    description: "전쟁으로 고통받는 우크라이나 국민들을 위한 인도적 지원",
    longDescription:
      "전쟁으로 인해 고통받는 우크라이나 국민들에게 의약품, 식량, 생필품 등 인도적 지원을 제공합니다. 특히 어린이와 노약자들을 위한 특별 지원 프로그램을 운영하고 있습니다.",
    image: "https://example.com/images/programs/ukraine-support-detail.jpg",
    category: "humanitarian",
  },
  {
    id: "medical-support",
    title: "의약품 지원",
    description: "의료 서비스가 부족한 지역에 의약품 및 의료 장비 지원",
    longDescription:
      "의료 서비스가 부족한 국내외 지역에 의약품과 의료 장비를 지원합니다. 이태석 신부가 의사로서 활동했던 정신을 이어받아 의료 사각지대에 있는 이웃들에게 건강한 삶을 선물합니다.",
    image: "https://example.com/images/programs/medical-support-detail.jpg",
    category: "medical",
  },
  {
    id: "tonj-support",
    title: "수단 톤즈 지원",
    description: "이태석 신부가 활동했던 수단 톤즈 지역 지원 사업",
    longDescription:
      "이태석 신부가 생전에 활동했던 수단 톤즈 지역의 학교와 병원을 지속적으로 지원합니다. 현지 주민들의 교육과 의료 환경 개선을 위한 다양한 프로젝트를 진행하고 있습니다.",
    image: "https://example.com/images/programs/tonj-support-detail.jpg",
    category: "humanitarian",
  },
]

export default function ProgramsPage() {
  return (
    <PageTemplate>
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://example.com/images/programs/programs-hero.jpg"
            alt="이태석재단 사업 안내"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">사업 안내</h1>
            <p className="mb-8 text-lg md:text-xl">
              이태석재단은 이태석 신부님의 정신을 이어받아 다양한 사업을 통해 소외된 이웃들에게 희망을 전합니다
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="all">전체</TabsTrigger>
                <TabsTrigger value="education">교육</TabsTrigger>
                <TabsTrigger value="medical">의료</TabsTrigger>
                <TabsTrigger value="humanitarian">인도적 지원</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {allPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {allPrograms
                  .filter((program) => program.category === "education")
                  .map((program) => (
                    <ProgramCard key={program.id} program={program} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="medical" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {allPrograms
                  .filter((program) => program.category === "medical")
                  .map((program) => (
                    <ProgramCard key={program.id} program={program} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="humanitarian" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {allPrograms
                  .filter((program) => program.category === "humanitarian")
                  .map((program) => (
                    <ProgramCard key={program.id} program={program} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageTemplate>
  )
}

function ProgramCard({ program }: { program: (typeof allPrograms)[0] }) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-video relative">
        <Image
          src={program.image || "/placeholder.svg"}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-center">{program.title}</CardTitle>
        <CardDescription className="text-center">{program.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">{program.longDescription}</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild variant="outline" className="transition-colors hover:bg-primary hover:text-white">
          <Link href={`/programs/${program.id}`}>자세히 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
