"use client"

import { useEffect, useState } from "react"
import { getDriveDownloadUrl, getDriveImageUrl } from "@/lib/popup-data"

interface DriveImageProps {
  srcOrId: string
  alt: string
  className?: string
}

export default function DriveImage({ srcOrId, alt, className }: DriveImageProps) {
  const [currentSrc, setCurrentSrc] = useState(() => getDriveImageUrl(srcOrId))

  useEffect(() => {
    setCurrentSrc(getDriveImageUrl(srcOrId))
  }, [srcOrId])

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={(event) => {
        const target = event.currentTarget as HTMLImageElement
        const current = target.src

        if (current.includes("thumbnail?sz=w1200-h1800") || current.includes("export=view")) {
          target.src = getDriveDownloadUrl(srcOrId)
          return
        }

        if (current !== "/placeholder.svg") {
          target.src = "/placeholder.svg"
        }
      }}
    />
  )
}
