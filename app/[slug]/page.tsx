import React from "react"
import { getPageBySlug } from "@/lib/pages-store"
import { notFound } from "next/navigation"

interface Props {
  params: any
}

export default async function DynamicPagePage({ params }: Props) {
  const { slug } = React.use(params as any)
  const page = await getPageBySlug(slug)

  if (!page) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">{page.title}</h1>
        {page.description && <p className="text-lg text-gray-600 mb-8">{page.description}</p>}
        <div className="prose prose-lg max-w-none whitespace-pre-wrap">{page.content}</div>
      </div>
    </div>
  )
}
