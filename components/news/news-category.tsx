import Link from "next/link"
import Image from "next/image"
import type { NewsItem } from "@/types/news"
import { formatDate } from "@/lib/utils"

interface NewsCategoryProps {
  category: string
  newsItems: NewsItem[]
}

export default function NewsCategory({ category, newsItems }: NewsCategoryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.length > 0 ? (
        newsItems.map((item) => (
          <Link
            key={item.id}
            href={`/news/${category}/${item.id}`}
            className="block border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-48 w-full">
              {item.thumbnail ? (
                <Image src={item.thumbnail || "/placeholder.svg"} alt={item.title} fill loading="lazy" className="object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">이미지 없음</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{item.summary}</p>
              <p className="text-gray-500 text-xs">{formatDate(item.date)}</p>
            </div>
          </Link>
        ))
      ) : (
        <div className="col-span-full text-center py-10">
          <p className="text-gray-500">등록된 게시물이 없습니다.</p>
        </div>
      )}
    </div>
  )
}
