"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, RefreshCw } from "lucide-react"

// 히어로 이미지 데이터
const heroImagesData = [
  {
    src: "https://drive.google.com/thumbnail?id=1eNfgzaZXRocUZ4mr1SPJgWzTOLPb5nAn&sz=w2000",
    alt: "이태석 신부님",
    defaultPosition: { x: 50, y: 50 },
  },
  {
    src: "https://drive.google.com/thumbnail?id=1VzMoU0nBP0HIH_ZtFVUi3HNlQXuG_eoo&sz=w2000",
    alt: "이태석재단 활동 사진",
    defaultPosition: { x: 50, y: 30 },
  },
  {
    src: "https://drive.google.com/thumbnail?id=17sjc5EpDgYVEmgZ42YrB9_SM29fXdqUe&sz=w2000",
    alt: "이태석재단 지원 활동",
    defaultPosition: { x: 50, y: 60 },
  },
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [imagePositions, setImagePositions] = useState(heroImagesData.map((img) => ({ ...img.defaultPosition })))
  const [showControls, setShowControls] = useState(false)

  // 자동 슬라이드 기능
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImagesData.length)
    }, 5000) // 5초마다 이미지 변경

    return () => clearInterval(interval)
  }, [])

  // 이미지 변경 시 트랜지션 효과
  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [currentIndex])

  // 이미지 위치 조정 함수
  const moveImage = (direction: "up" | "down" | "left" | "right") => {
    setImagePositions((prev) => {
      const newPositions = [...prev]
      const step = 10 // 한 번에 이동할 퍼센트

      switch (direction) {
        case "up":
          newPositions[currentIndex] = {
            ...newPositions[currentIndex],
            y: Math.max(0, newPositions[currentIndex].y - step),
          }
          break
        case "down":
          newPositions[currentIndex] = {
            ...newPositions[currentIndex],
            y: Math.min(100, newPositions[currentIndex].y + step),
          }
          break
        case "left":
          newPositions[currentIndex] = {
            ...newPositions[currentIndex],
            x: Math.max(0, newPositions[currentIndex].x - step),
          }
          break
        case "right":
          newPositions[currentIndex] = {
            ...newPositions[currentIndex],
            x: Math.min(100, newPositions[currentIndex].x + step),
          }
          break
      }

      return newPositions
    })
  }

  // 현재 이미지 위치 초기화
  const resetCurrentImagePosition = () => {
    setImagePositions((prev) => {
      const newPositions = [...prev]
      newPositions[currentIndex] = { ...heroImagesData[currentIndex].defaultPosition }
      return newPositions
    })
  }

  // 모든 이미지 위치 초기화
  const resetAllImagePositions = () => {
    setImagePositions(heroImagesData.map((img) => ({ ...img.defaultPosition })))
  }

  // 개발 모드에서 Ctrl+Shift+P를 누르면 컨트롤 패널 표시/숨김
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        e.preventDefault()
        setShowControls((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* 이미지 슬라이더 */}
      <div className="absolute inset-0 z-0">
        {heroImagesData.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover brightness-50"
              style={{ objectPosition: `${imagePositions[index].x}% ${imagePositions[index].y}%` }}
              sizes="(max-width: 768px) 100vw, 100vw"
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* 개발 모드 컨트롤 패널 (Ctrl+Shift+P로 토글) */}
      {showControls && (
        <div className="fixed top-4 right-4 z-50 bg-black/80 p-4 rounded-lg text-white">
          <div className="text-sm mb-2">이미지 {currentIndex + 1} 선택됨</div>
          <div className="flex gap-2 mb-2">
            {heroImagesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === currentIndex ? "bg-primary" : "bg-white/20"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="text-xs mb-2">
            위치: X {imagePositions[currentIndex].x}%, Y {imagePositions[currentIndex].y}%
          </div>
          <div className="flex flex-col items-center gap-1 mb-2">
            <button onClick={() => moveImage("up")} className="p-1 bg-white/20 rounded hover:bg-white/40">
              <ChevronUp size={20} className="text-white" />
            </button>
            <div className="flex gap-1">
              <button onClick={() => moveImage("left")} className="p-1 bg-white/20 rounded hover:bg-white/40">
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button onClick={resetCurrentImagePosition} className="p-1 bg-white/20 rounded hover:bg-white/40">
                <RefreshCw size={20} className="text-white" />
              </button>
              <button onClick={() => moveImage("right")} className="p-1 bg-white/20 rounded hover:bg-white/40">
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
            <button onClick={() => moveImage("down")} className="p-1 bg-white/20 rounded hover:bg-white/40">
              <ChevronDown size={20} className="text-white" />
            </button>
          </div>
          <button onClick={resetAllImagePositions} className="w-full px-2 py-1 bg-gray-700 text-white text-xs rounded">
            모든 이미지 위치 초기화
          </button>
          <div className="text-xs mt-2 text-gray-400">Ctrl+Shift+P를 눌러 이 패널을 숨길 수 있습니다</div>
        </div>
      )}

      {/* 히어로 콘텐츠 */}
      <div className="container relative z-10 mx-auto px-4 py-16 sm:py-20 md:py-28 lg:py-40 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold leading-tight tracking-wide md:text-5xl lg:text-6xl">
            <span className="block mb-1 sm:mb-2">사랑과 나눔으로</span>
            <span className="block mb-1 sm:mb-2">세상을 변화시키는</span>
            <span className="block">이태석재단</span>
          </h1>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl leading-relaxed">
            이태석 신부님의 정신을 이어받아 소외된 이웃들에게 희망을 전합니다
          </p>
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
              <Link href="/donation">후원 참여하기</Link>
            </Button>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
              <Link href="/about/foundation">재단 소개 보기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
