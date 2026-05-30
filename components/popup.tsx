"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { usePopup } from "@/components/popup-context"

const POPUP_COUNT = 1 // 1 또는 2로 설정하세요

const POPUP_CONFIG = [
  {
    imageSrc: "https://drive.google.com/uc?export=view&id=1EtRwZW2ShkH3PEU5tydIhIoiQundr13h",
    imageAlt: "팝업 이미지 1",
  },
  {
    imageSrc: "https://drive.google.com/uc?export=view&id=YOUR_IMAGE_ID_2",
    imageAlt: "팝업 이미지 2",
  },
]

// 재사용 가능한 PopupCard 컴포넌트
function PopupCard({
  show,
  onClose,
  onCloseForToday,
  imageSrc,
  imageAlt,
}: {
  show: boolean
  onClose: () => void
  onCloseForToday: () => void
  imageSrc: string
  imageAlt: string
}) {
  if (!show) return null

  return (
    <Card className="w-full max-w-[450px] relative overflow-hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-2 right-2 z-10 bg-background/80 hover:bg-background"
      >
        <X className="h-4 w-4" />
      </Button>
      <CardContent className="p-0">
        <div className="relative w-full h-[650px]">
          <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-2 bg-background/80 absolute bottom-0 w-full">
        <Button variant="outline" size="sm" onClick={onCloseForToday}>
          오늘 하루 닫기
        </Button>
        <Button size="sm" onClick={onClose}>
          닫기
        </Button>
      </CardFooter>
    </Card>
  )
}

// Popups 컴포넌트
export function Popups() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const { showPopup1, showPopup2, closePopup1, closePopup2, closePopup1ForToday, closePopup2ForToday } = usePopup()
  const popupStates = [showPopup1, showPopup2]
  const closeHandlers = [closePopup1, closePopup2]
  const closeTodayHandlers = [closePopup1ForToday, closePopup2ForToday]
  const activePopupConfig = POPUP_CONFIG.slice(0, POPUP_COUNT)
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
            {activePopupConfig.map((popup, index) => (
              <PopupCard
                key={index}
                show={popupStates[index]}
                onClose={closeHandlers[index]}
                onCloseForToday={closeTodayHandlers[index]}
                imageSrc={popup.imageSrc}
                imageAlt={popup.imageAlt}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
