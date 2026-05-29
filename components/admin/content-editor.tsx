"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { ContentItem } from "@/lib/data/content-types"
import { getContentByType } from "@/lib/content-manager"

interface ContentEditorProps {
  contentType: string
  onSave: (content: ContentItem[]) => void
}

export default function ContentEditor({ contentType, onSave }: ContentEditorProps) {
  const [items, setItems] = useState<ContentItem[]>([])
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  // Load content on mount
  useEffect(() => {
    const content = getContentByType(contentType)
    setItems(content)
  }, [contentType])

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingItem) {
      // Update existing item
      const updatedItems = items.map((item) => (item.id === editingItem.id ? editingItem : item))
      setItems(updatedItems)
      onSave(updatedItems)
    } else {
      // Add new item
      const newItem = {
        ...editingItem,
        id: Date.now().toString(), // Generate a unique ID
        date: new Date().toISOString().split("T")[0].replace(/-/g, "."), // Today's date in YYYY.MM.DD format
      } as ContentItem

      const updatedItems = [...items, newItem]
      setItems(updatedItems)
      onSave(updatedItems)
    }

    // Reset form
    setEditingItem(null)
    setIsEditing(false)
  }

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditingItem((prev) => (prev ? { ...prev, [name]: value } : null))
  }

  // Handle delete
  const handleDelete = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
    onSave(updatedItems)
  }

  // Create a new item template based on content type
  const createNewItem = () => {
    const baseItem = {
      id: "",
      title: "",
      date: new Date().toISOString().split("T")[0].replace(/-/g, "."),
      summary: "",
      image: "",
      content: "",
    }

    const newItem: any = { ...baseItem }

    switch (contentType) {
      case "foundation":
        newItem.category = "foundation"
        break
      case "lecture":
        newItem.category = "lecture"
        newItem.location = ""
        newItem.speaker = ""
        break
      case "press":
        newItem.category = "press"
        newItem.source = ""
        newItem.url = ""
        break
      case "video":
        newItem.category = "video"
        newItem.youtubeId = ""
        break
      case "gallery":
        newItem.category = "gallery"
        newItem.imageCount = 0
        break
      case "books-movies":
        newItem.category = "book" // Default to book
        newItem.type = "book"
        newItem.author = ""
        break
      case "letter":
        newItem.category = "letter"
        newItem.author = ""
        newItem.letterType = ""
        break
    }

    setEditingItem(newItem as ContentItem)
    setIsEditing(true)
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {contentType === "foundation"
            ? "재단 소식"
            : contentType === "lecture"
              ? "강연 소식"
              : contentType === "press"
                ? "언론 보도"
                : contentType === "video"
                  ? "영상"
                  : contentType === "gallery"
                    ? "갤러리"
                    : contentType === "books-movies"
                      ? "책/영화 소개"
                      : contentType === "letter"
                        ? "후원 감사 편지"
                        : "콘텐츠"}{" "}
          관리
        </h2>
        <Button onClick={createNewItem}>새 항목 추가</Button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4 border p-6 rounded-lg">
          <div className="space-y-2">
            <Label htmlFor="title">제목</Label>
            <Input id="title" name="title" value={editingItem?.title || ""} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="summary">요약</Label>
            <Textarea id="summary" name="summary" value={editingItem?.summary || ""} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">이미지 URL</Label>
            <Input id="image" name="image" value={editingItem?.image || ""} onChange={handleChange} />
          </div>

          {/* Additional fields based on content type */}
          {contentType === "lecture" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="location">장소</Label>
                <Input
                  id="location"
                  name="location"
                  value={(editingItem as any)?.location || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="speaker">강연자</Label>
                <Input
                  id="speaker"
                  name="speaker"
                  value={(editingItem as any)?.speaker || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {contentType === "press" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="source">언론사</Label>
                <Input
                  id="source"
                  name="source"
                  value={(editingItem as any)?.source || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="url">기사 URL</Label>
                <Input id="url" name="url" value={(editingItem as any)?.url || ""} onChange={handleChange} required />
              </div>
            </>
          )}

          {contentType === "video" && (
            <div className="space-y-2">
              <Label htmlFor="youtubeId">YouTube ID</Label>
              <Input
                id="youtubeId"
                name="youtubeId"
                value={(editingItem as any)?.youtubeId || ""}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {contentType === "gallery" && (
            <div className="space-y-2">
              <Label htmlFor="imageCount">이미지 수</Label>
              <Input
                id="imageCount"
                name="imageCount"
                type="number"
                value={(editingItem as any)?.imageCount || 0}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {contentType === "books-movies" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="type">유형</Label>
                <select
                  id="type"
                  name="type"
                  value={(editingItem as any)?.type || "book"}
                  onChange={handleChange as any}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="book">도서</option>
                  <option value="movie">영화</option>
                </select>
              </div>
              {(editingItem as any)?.type === "book" ? (
                <div className="space-y-2">
                  <Label htmlFor="author">저자</Label>
                  <Input
                    id="author"
                    name="author"
                    value={(editingItem as any)?.author || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="director">감독</Label>
                  <Input
                    id="director"
                    name="director"
                    value={(editingItem as any)?.director || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
            </>
          )}

          {contentType === "letter" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="author">작성자</Label>
                <Input
                  id="author"
                  name="author"
                  value={(editingItem as any)?.author || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="letterType">편지 유형</Label>
                <Input
                  id="letterType"
                  name="letterType"
                  value={(editingItem as any)?.letterType || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="content">내용 (HTML)</Label>
            <Textarea
              id="content"
              name="content"
              value={editingItem?.content || ""}
              onChange={handleChange}
              rows={10}
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setEditingItem(null)
                setIsEditing(false)
              }}
            >
              취소
            </Button>
            <Button type="submit">저장</Button>
          </div>
        </form>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="p-3 text-left">제목</th>
                <th className="p-3 text-left">날짜</th>
                <th className="p-3 text-left">작업</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setEditingItem(item)
                          setIsEditing(true)
                        }}
                      >
                        수정
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)}>
                        삭제
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
