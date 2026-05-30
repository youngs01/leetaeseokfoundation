"use client"

import { useEffect, useState } from "react"
import { loadPopupOverrides, PopupItem, PopupOverride } from "@/lib/popup-data"

interface PopupDetailTitleProps {
  popup: PopupItem
}

export default function PopupDetailTitle({ popup }: PopupDetailTitleProps) {
  const [override, setOverride] = useState<PopupOverride | null>(null)

  useEffect(() => {
    const overrides = loadPopupOverrides()
    setOverride(overrides[popup.id] ?? null)
  }, [popup.id])

  const title = override?.detailTitle ?? override?.title ?? popup.title

  return (
    <div className="mb-6 text-center">
      <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
    </div>
  )
}
