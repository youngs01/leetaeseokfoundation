"use client"

import { useState } from "react"
import Image from "next/image"

type ImageItem = { id: string; src: string; alt: string; description?: string }

export default function ImageGallery({ images }: { images: ImageItem[] }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages =
    images && images.length > 0
      ? images
      : Array.from({ length: 12 }, (_, i) => ({
          id: `placeholder-${i}`,
          src: `/placeholder.svg?height=800&width=1200&text=Gallery+Image+${i + 1}`,
          alt: `Gallery Image ${i + 1}`,
          description: `Description for gallery image ${i + 1}`,
        }))

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(index)}
          >
            <div className="aspect-[4/3] relative">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
            {image.description && <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{image.description}</p>}
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl">
            <button className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full" onClick={() => setSelectedImage(null)}>
              닫기
            </button>

            <div className="aspect-auto max-h-[80vh] relative">
              <Image src={galleryImages[selectedImage].src || "/placeholder.svg"} alt={galleryImages[selectedImage].alt} width={1200} height={800} className="object-contain w-full h-full" />
            </div>

            {galleryImages[selectedImage].description && (
              <div className="bg-black/50 p-4 text-white mt-2 rounded">
                <p>{galleryImages[selectedImage].description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
