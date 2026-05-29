"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

type Props = { page?: { slug: string; title: string; content: string; description?: string } }

export default function PageEditor({ page }: Props) {
  const [slug, setSlug] = useState(page?.slug || "")
  const [title, setTitle] = useState(page?.title || "")
  const [content, setContent] = useState(page?.content || "")
  const [description, setDescription] = useState(page?.description || "")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!slug || !title || !content) {
      toast({ title: "필수 항목을 입력해주세요.", variant: "destructive" })
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/pages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, title, content, description }),
      })
      if (!res.ok) throw new Error("Failed")
      toast({ title: "저장 완료", description: "페이지가 저장되었습니다." })
      router.push("/admin/pages")
    } catch (err) {
      toast({ title: "저장 실패", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <Input
        placeholder="페이지 URL 경로 (예: about-us, contact)"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        disabled={!!page}
        required
      />
      <Input
        placeholder="페이지 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Input
        placeholder="페이지 설명 (선택사항)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Textarea
        placeholder="페이지 콘텐츠"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[400px]"
        required
      />
      <div className="flex space-x-2">
        <Button type="submit" disabled={loading}>
          {loading ? "저장 중..." : "저장"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          취소
        </Button>
      </div>
    </form>
  )
}
