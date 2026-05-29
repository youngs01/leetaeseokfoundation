import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getContentById, getPrevNextContent, getRelatedContent } from "@/lib/content-manager"
import type { ContentItem } from "@/lib/data/content-types"

type Props = {
  params: any
}

export default function NewsDetailPage({ params }: Props) {
  // Next.js may provide `params` as a Promise; React.use unwraps it safely
  const { category, id } = React.use(params as any)

  const item = getContentById<ContentItem>(category, id)

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-semibold mb-4">컨텐츠를 찾을 수 없습니다</h2>
        <p className="text-muted-foreground mb-6">요청하신 콘텐츠가 존재하지 않거나 삭제되었습니다.</p>
        <Link href="/news">
          <Button variant="ghost">뉴스 목록으로 돌아가기</Button>
        </Link>
      </div>
    )
  }

  const { prev, next } = getPrevNextContent<ContentItem>(category, id)
  const related = getRelatedContent<ContentItem>(category, id, 3)

  const buildLink = (it: ContentItem) => {
    // prefer explicit `link` if present (some data sources include it)
    // otherwise build a predictable route `/news/{category}/{id}`
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const maybe = (it as any).link
    return typeof maybe === "string" && maybe ? maybe : `/news/${it.category}/${it.id}`
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <main className="lg:col-span-2">
          <article>
            <div className="w-full h-[360px] relative rounded overflow-hidden mb-6">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>

            <h1 className="text-3xl font-bold mb-3">{item.title}</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-6 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{item.date}</span>
              </div>
              <div className="px-2 py-1 bg-muted rounded text-xs">{category}</div>
            </div>

            {item.summary && <p className="text-lg text-muted-foreground mb-6">{item.summary}</p>}

            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: item.content || "" }} />
          </article>

          <div className="flex justify-between items-center mt-10">
            {prev ? (
              <Link href={buildLink(prev)} className="flex items-center gap-2">
                <ChevronLeft /> <span className="text-sm">이전글: {prev.title}</span>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link href={buildLink(next)} className="flex items-center gap-2">
                <span className="text-sm">다음글: {next.title}</span> <ChevronRight />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </main>

        <aside>
          <Card className="mb-6">
            <CardContent>
              <h4 className="font-semibold mb-2">관련 콘텐츠</h4>
              <div className="flex flex-col gap-3">
                {related.map((r) => (
                  <Link key={r.id} href={buildLink(r)} className="flex items-center gap-3">
                    <div className="w-16 h-12 relative rounded overflow-hidden">
                      <Image src={r.image || "/placeholder.svg"} alt={r.title} fill loading="lazy" className="object-cover" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium line-clamp-2">{r.title}</div>
                      <div className="text-muted-foreground text-xs">{r.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h4 className="font-semibold mb-2">더보기</h4>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/news/foundation" className="text-primary">재단 소식</Link>
                <Link href="/news/lectures" className="text-primary">강연 소식</Link>
                <Link href="/news/press" className="text-primary">언론보도</Link>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}
