"use client"

import { X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { usePopup } from "@/components/popup-context"
import DriveImage from "@/components/drive-image"
import { loadPopupOverrides, POPUP_ITEMS, PopupOverride } from "@/lib/popup-data"

const POPUP_COUNT = 1 // 1 또는 2로 설정하세요

// 재사용 가능한 PopupCard 컴포넌트
function PopupCard({
  show,
  onClose,
  onCloseForToday,
  pagePath,
  popupImageSrc,
  popupTitle,
  imageAlt,
}: {
  show: boolean
  onClose: () => void
  onCloseForToday: () => void
  pagePath: string
  popupImageSrc: string
  popupTitle: string
  imageAlt: string
}) {
  if (!show) return null

  return (
    <Card className="relative w-full max-w-[360px] overflow-hidden rounded-[32px] shadow-2xl">
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-3 right-3 z-20 rounded-full bg-white/80 text-slate-700 shadow-sm hover:bg-white"
      >
        <X className="h-4 w-4" />
      </Button>
      <CardContent className="p-0">
        <Link href={pagePath} className="block">
          <div className="relative w-full">
            <DriveImage
              srcOrId={popupImageSrc}
              alt={imageAlt}
              className="w-full object-contain bg-slate-100"
            />
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent px-4 py-4 text-center">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                자세히 보기
              </span>
            </div>
          </div>
        </Link>
      </CardContent>
      <div className="flex items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-4">
        <Button variant="outline" size="sm" onClick={onCloseForToday}>
          오늘 하루 닫기
        </Button>
        <Button size="sm" onClick={onClose}>
          닫기
        </Button>
      </div>
    </Card>
  )
}

// Popups 컴포넌트
export function Popups() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const { showPopup1, showPopup2, closePopup1, closePopup2, closePopup1ForToday, closePopup2ForToday } = usePopup()
  const [overrides, setOverrides] = useState<Record<string, PopupOverride>>({})

  useEffect(() => {
    setOverrides(loadPopupOverrides())
  }, [])

  const popupStates = [showPopup1, showPopup2]
  const closeHandlers = [closePopup1, closePopup2]
  const closeTodayHandlers = [closePopup1ForToday, closePopup2ForToday]
  const activePopupConfig = POPUP_ITEMS.slice(0, POPUP_COUNT)
  const isAnyPopupShowing = activePopupConfig.some((_, index) => popupStates[index])

  // Only show popups on the home page
  if (!isHomePage) return null

  return (
    <>
      {isAnyPopupShowing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              const activeIndex = popupStates.findIndex(Boolean)
              if (activeIndex !== -1) closeHandlers[activeIndex]()
            }
          }}
          tabIndex={-1}
        >
          <div className="container flex flex-col md:flex-row gap-4 justify-center items-center px-4 max-h-[90vh] overflow-y-auto">
            {activePopupConfig.map((popup, index) => {
              const override = overrides[popup.id] ?? {}
              const popupWithOverride = { ...popup, ...override }

              return (
                <PopupCard
                  key={popup.id}
                  show={popupStates[index]}
                  onClose={closeHandlers[index]}
                  onCloseForToday={closeTodayHandlers[index]}
                  pagePath={popup.pagePath}
                  popupTitle={popupWithOverride.title}
                  popupImageSrc={popupWithOverride.popupImageSrc}
                  imageAlt={popup.imageAlt}
                />
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
