import Link from "next/link"
import Image from "next/image"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getContentByType, sortByDateDesc } from "@/lib/content-manager"
import type { FoundationNewsItem } from "@/lib/data/content-types"

export default function NewsSection() {
  // Get the 3 most recent news items
  const foundationNews = getContentByType<FoundationNewsItem>("foundation")
  const recentNews = sortByDateDesc(foundationNews).slice(0, 3)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">재단 소식</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground mb-8 leading-relaxed">
            이태석재단의 최신 소식과 활동을 확인하세요
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentNews.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="aspect-video relative">
                <Image
                  src={item.image || "/placeholder.svg?height=400&width=600"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2 text-center leading-relaxed mb-2">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground text-center mb-4">{item.date}</p>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Button asChild variant="outline" className="transition-colors hover:bg-primary hover:text-white">
                  <Link href={`/news/foundation/${item.id}`}>자세히 보기</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="transition-transform hover:scale-105">
            <Link href="/news/foundation">모든 소식 보기</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
