"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import DriveImage from "@/components/drive-image"
import { loadPopupOverrides, POPUP_ITEMS, PopupDownloadFile, PopupOverride, savePopupOverrides } from "@/lib/popup-data"

export default function PopupConfigEditor() {
  const [overrides, setOverrides] = useState<Record<string, PopupOverride>>({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setOverrides(loadPopupOverrides())
    setLoaded(true)
  }, [])

  const handleChange = (id: string, field: keyof PopupOverride, value: string | string[]) => {
    setOverrides((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }))
  }

  const handleImageUpload = (id: string, field: keyof PopupOverride, file: File | null) => {
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result
      if (typeof result === "string") {
        handleChange(id, field, result)
      }
    }
    reader.readAsDataURL(file)
  }

  const handleDetailsChange = (id: string, value: string) => {
    const details = value
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)

    handleChange(id, "details", details)
  }

  const handleDownloadFileChange = (id: string, index: number, field: keyof PopupDownloadFile, value: string) => {
    setOverrides((prev) => {
      const existing = prev[id] ?? {}
      const currentFiles = existing.downloadFiles ?? POPUP_ITEMS.find((item) => item.id === id)?.downloadFiles ?? []
      const nextFiles = [...currentFiles]
      nextFiles[index] = {
        ...(nextFiles[index] ?? { id: "", name: "", label: "" }),
        [field]: value,
      }
      return {
        ...prev,
        [id]: {
          ...existing,
          downloadFiles: nextFiles,
        },
      }
    })
  }

  const addDownloadFileRow = (id: string) => {
    setOverrides((prev) => {
      const existing = prev[id] ?? {}
      const currentFiles = existing.downloadFiles ?? POPUP_ITEMS.find((item) => item.id === id)?.downloadFiles ?? []
      const nextFiles = [...currentFiles, { id: "", name: "", label: "" }]
      return {
        ...prev,
        [id]: {
          ...existing,
          downloadFiles: nextFiles,
        },
      }
    })
  }

  const removeDownloadFileRow = (id: string, index: number) => {
    setOverrides((prev) => {
      const existing = prev[id] ?? {}
      const currentFiles = existing.downloadFiles ?? POPUP_ITEMS.find((item) => item.id === id)?.downloadFiles ?? []
      const nextFiles = currentFiles.filter((_, idx) => idx !== index)
      return {
        ...prev,
        [id]: {
          ...existing,
          downloadFiles: nextFiles,
        },
      }
    })
  }

  const handleSave = () => {
    savePopupOverrides(overrides)
    alert("팝업 설정이 저장되었습니다.")
  }

  const handleReset = () => {
    setOverrides({})
    savePopupOverrides({})
  }

  if (!loaded) {
    return <div>로딩 중...</div>
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">팝업 설정</h2>
          <p className="text-slate-600">팝업 이미지와 상세 페이지 내용을 한곳에서 쉽게 관리하세요.</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" onClick={handleReset} type="button">
            초기화
          </Button>
          <Button onClick={handleSave} type="button">
            저장
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {POPUP_ITEMS.map((popup) => {
          const override = overrides[popup.id] || {}
          const popupSource = override.popupImageSrc ?? popup.popupImageSrc
          const detailSource = override.detailImageSrc ?? popup.detailImageSrc ?? popup.popupImageSrc

          return (
            <Card key={popup.id} className="overflow-hidden">
              <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle>팝업 #{popup.id} - {popup.title}</CardTitle>
                  <CardDescription>팝업 및 상세 페이지 이미지를 각각 설정하고, 상세 내용을 바로 편집하세요.</CardDescription>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600">
                  {override.popupImageSrc || override.detailImageSrc ? "오버라이드 중" : "기본값 사용"}
                </span>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-6">
                    <section className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <h4 className="mb-4 text-lg font-semibold">이미지 관리</h4>
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <Label htmlFor={`detail-title-${popup.id}`}>상세 페이지 제목</Label>
                          <Input
                            id={`detail-title-${popup.id}`}
                            value={override.detailTitle ?? popup.title}
                            onChange={(e) => handleChange(popup.id, "detailTitle", e.target.value)}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor={`popup-image-${popup.id}`}>팝업 이미지 Drive ID 또는 URL</Label>
                          <Input
                            id={`popup-image-${popup.id}`}
                            value={override.popupImageSrc ?? popup.popupImageSrc}
                            onChange={(e) => handleChange(popup.id, "popupImageSrc", e.target.value)}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor={`popup-image-upload-${popup.id}`}>팝업 이미지 업로드</Label>
                          <input
                            id={`popup-image-upload-${popup.id}`}
                            type="file"
                            accept="image/*"
                            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
                            onChange={(e) => handleImageUpload(popup.id, "popupImageSrc", e.target.files?.[0] ?? null)}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor={`detail-image-${popup.id}`}>상세 페이지 이미지 Drive ID 또는 URL</Label>
                          <Input
                            id={`detail-image-${popup.id}`}
                            value={override.detailImageSrc ?? popup.detailImageSrc ?? ""}
                            onChange={(e) => handleChange(popup.id, "detailImageSrc", e.target.value)}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor={`detail-image-upload-${popup.id}`}>상세 이미지 업로드</Label>
                          <input
                            id={`detail-image-upload-${popup.id}`}
                            type="file"
                            accept="image/*"
                            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
                            onChange={(e) => handleImageUpload(popup.id, "detailImageSrc", e.target.files?.[0] ?? null)}
                          />
                        </div>
                        <p className="text-xs text-slate-500">업로드한 이미지는 브라우저 로컬에서 preview용으로 사용됩니다.</p>
                      </div>
                    </section>

                    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                      <h4 className="mb-4 text-lg font-semibold">상세 페이지 내용</h4>
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor={`description-${popup.id}`}>설명</Label>
                          <Textarea
                            id={`description-${popup.id}`}
                            value={override.description ?? popup.description}
                            onChange={(e) => handleChange(popup.id, "description", e.target.value)}
                            rows={4}
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor={`details-${popup.id}`}>상세 항목</Label>
                          <Textarea
                            id={`details-${popup.id}`}
                            value={(override.details ?? popup.details).join("\n")}
                            onChange={(e) => handleDetailsChange(popup.id, e.target.value)}
                            rows={4}
                          />
                          <p className="text-xs text-slate-500">줄바꿈으로 여러 항목을 입력하세요.</p>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className="space-y-6">
                    <Card className="rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-base">미리보기</CardTitle>
                        <CardDescription>팝업과 상세 이미지가 어떻게 보이는지 확인하세요.</CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-4 lg:grid-cols-2">
                        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm max-w-[320px]">
                          <p className="mb-3 text-sm font-semibold text-slate-700">팝업 이미지</p>
                          <div className="overflow-hidden rounded-[28px] bg-slate-100 p-2">
                            <DriveImage srcOrId={popupSource} alt="팝업 이미지 미리보기" className="w-full object-contain" />
                          </div>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm max-w-[320px]">
                          <p className="mb-3 text-sm font-semibold text-slate-700">상세 페이지 이미지</p>
                          <div className="overflow-hidden rounded-[28px] bg-slate-100 p-2">
                            <DriveImage srcOrId={detailSource} alt="상세 페이지 이미지 미리보기" className="w-full object-contain" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-base">다운로드 파일</CardTitle>
                        <CardDescription>파일 ID와 버튼 텍스트를 입력하세요.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {(override.downloadFiles ?? popup.downloadFiles ?? []).map((file, index) => (
                          <div key={`${popup.id}-download-${index}`} className="grid gap-3 sm:grid-cols-[1fr_1fr_1fr_auto] items-end">
                            <div className="grid gap-2">
                              <Label htmlFor={`download-file-id-${popup.id}-${index}`}>파일 ID</Label>
                              <Input
                                id={`download-file-id-${popup.id}-${index}`}
                                value={file.id}
                                onChange={(e) => handleDownloadFileChange(popup.id, index, "id", e.target.value)}
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor={`download-file-name-${popup.id}-${index}`}>파일 이름</Label>
                              <Input
                                id={`download-file-name-${popup.id}-${index}`}
                                value={file.name}
                                onChange={(e) => handleDownloadFileChange(popup.id, index, "name", e.target.value)}
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor={`download-file-label-${popup.id}-${index}`}>버튼 텍스트</Label>
                              <Input
                                id={`download-file-label-${popup.id}-${index}`}
                                value={file.label}
                                onChange={(e) => handleDownloadFileChange(popup.id, index, "label", e.target.value)}
                              />
                            </div>
                            <Button variant="outline" size="sm" type="button" onClick={() => removeDownloadFileRow(popup.id, index)}>
                              삭제
                            </Button>
                          </div>
                        ))}
                        <Button variant="outline" type="button" onClick={() => addDownloadFileRow(popup.id)}>
                          다운로드 파일 추가
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

