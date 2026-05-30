"use client"

import { useEffect, useState } from "react"
import DriveImage from "@/components/drive-image"
import { loadPopupOverrides, PopupItem, PopupOverride } from "@/lib/popup-data"

interface PopupDetailImageProps {
  popup: PopupItem
}

export default function PopupDetailImage({ popup }: PopupDetailImageProps) {
  const [override, setOverride] = useState<PopupOverride | null>(null)

  useEffect(() => {
    const overrides = loadPopupOverrides()
    setOverride(overrides[popup.id] ?? null)
  }, [popup.id])

  const imageId = override?.detailImageSrc ?? popup.detailImageSrc ?? popup.popupImageSrc

  return <DriveImage srcOrId={imageId} alt={popup.imageAlt} className="w-full object-contain bg-slate-100" />
}
