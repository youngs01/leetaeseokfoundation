"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { usePopup } from "@/components/popup-context"

// 팝업 활성화 여부
const ENABLE_POPUP1 = true
const ENABLE_POPUP2 = false

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
    <Card className="w-full max-w-[380px] relative overflow-hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-2 right-2 z-10 bg-background/80 hover:bg-background"
      >
        <X className="h-4 w-4" />
      </Button>
      <CardContent className="p-0">
        <div className="relative w-full h-[360px]">
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
  const isAnyPopupShowing = (ENABLE_POPUP1 && showPopup1) || (ENABLE_POPUP2 && showPopup2)

  // Only show popups on the home page
  if (!isHomePage) return null

  return (
    <>
      {isAnyPopupShowing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onKeyDown={(e) => e.key === "Escape" && (showPopup1 ? closePopup1() : closePopup2())}
          tabIndex={-1}
        >
          <div className="container flex flex-col md:flex-row gap-4 justify-center items-center px-4 max-h-[90vh] overflow-y-auto">
            <PopupCard
              show={ENABLE_POPUP1 && showPopup1}
              onClose={closePopup1}
              onCloseForToday={closePopup1ForToday}
              imageSrc="/placeholder.svg?height=360&width=380"
              imageAlt="팝업 이미지 1"
            />
            <PopupCard
              show={ENABLE_POPUP2 && showPopup2}
              onClose={closePopup2}
              onCloseForToday={closePopup2ForToday}
              imageSrc="/placeholder.svg?height=360&width=380"
              imageAlt="팝업 이미지 2"
            />
          </div>
        </div>
      )}
    </>
  )
}
