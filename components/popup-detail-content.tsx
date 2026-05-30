"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { getDriveDownloadUrl, loadPopupOverrides, PopupItem, PopupOverride } from "@/lib/popup-data"

interface PopupDetailContentProps {
  popup: PopupItem
}

export default function PopupDetailContent({ popup }: PopupDetailContentProps) {
  const [override, setOverride] = useState<PopupOverride | null>(null)

  useEffect(() => {
    const overrides = loadPopupOverrides()
    setOverride(overrides[popup.id] ?? null)
  }, [popup.id])

  const description = override?.description ?? popup.description
  const details = override?.details ?? popup.details
  const downloadFiles = override?.downloadFiles ?? popup.downloadFiles ?? []

  return (
    <div className="space-y-8 text-slate-700">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="mt-4 leading-relaxed text-slate-700">{description}</p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">주요 내용</h2>
        <ul className="mt-5 space-y-3 text-slate-700">
          {details.map((detail) => (
            <li key={detail} className="list-disc list-inside">
              {detail}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">다운로드</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {downloadFiles.length > 0 ? (
            downloadFiles.map((file) => (
              <Button key={file.id} asChild>
                <a href={getDriveDownloadUrl(file.id)} target="_blank" rel="noreferrer" download={file.name}>
                  {file.label} 다운로드
                </a>
              </Button>
            ))
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500">
              다운로드 가능한 파일이 아직 등록되지 않았습니다.
            </div>
          )}
          <Button variant="outline" asChild>
            <Link href="/">홈으로 돌아가기</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
