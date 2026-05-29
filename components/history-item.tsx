import Image from "next/image"
import type { HistoryItemProps } from "@/types/history"

function GalleryImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className={`relative overflow-hidden group/img ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        className="object-cover transition-transform duration-700 group-hover/img:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-300" />
    </div>
  )
}

export function HistoryItem({ year, month, title, description, images, isLeft }: HistoryItemProps) {
  const img = images || []

  return (
    <div className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row-reverse" : ""}`}>
      {/* Spacer */}
      <div className="hidden md:block md:w-1/2" />

      {/* Timeline node */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center z-20">
        <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 ring-offset-2 ring-offset-background" />
      </div>

      {/* Card */}
      <div className="group w-full md:w-1/2 ml-10 md:mx-8 relative z-0">
        <div className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border/60 transition-all duration-500 hover:shadow-xl hover:ring-primary/30 hover:-translate-y-1">

          {/* Mosaic Photo Gallery */}
          {img.length > 0 && (
            <div className="relative">
              {/* Year/Month badge - floated above gallery */}
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/90 backdrop-blur-sm px-3.5 py-1.5 text-sm font-bold text-primary-foreground shadow-lg">
                  {year}
                  {month && <span className="font-normal opacity-80">{month}</span>}
                </span>
              </div>

              {/* 4 images: 1 large left + 3 stacked right */}
              {img.length >= 4 && (
                <div className="grid grid-cols-5 gap-1 h-[280px] md:h-[320px]">
                  {/* Large image - takes 3 cols */}
                  <GalleryImage
                    src={img[0].src}
                    alt={img[0].alt}
                    className="col-span-3 h-full"
                  />
                  {/* Right column - 3 images stacked */}
                  <div className="col-span-2 grid grid-rows-3 gap-1 h-full">
                    <GalleryImage
                      src={img[1].src}
                      alt={img[1].alt}
                      className="row-span-2 h-full"
                    />
                    <div className="grid grid-cols-2 gap-1 h-full">
                      <GalleryImage
                        src={img[2].src}
                        alt={img[2].alt}
                        className="h-full"
                      />
                      <GalleryImage
                        src={img[3].src}
                        alt={img[3].alt}
                        className="h-full"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 3 images: 1 large top + 2 bottom */}
              {img.length === 3 && (
                <div className="grid grid-rows-[2fr_1fr] gap-1 h-[280px] md:h-[320px]">
                  <GalleryImage
                    src={img[0].src}
                    alt={img[0].alt}
                    className="h-full"
                  />
                  <div className="grid grid-cols-2 gap-1 h-full">
                    <GalleryImage
                      src={img[1].src}
                      alt={img[1].alt}
                      className="h-full"
                    />
                    <GalleryImage
                      src={img[2].src}
                      alt={img[2].alt}
                      className="h-full"
                    />
                  </div>
                </div>
              )}

              {/* 2 images: side by side, different heights */}
              {img.length === 2 && (
                <div className="grid grid-cols-3 gap-1 h-[220px] md:h-[260px]">
                  <GalleryImage
                    src={img[0].src}
                    alt={img[0].alt}
                    className="col-span-2 h-full"
                  />
                  <GalleryImage
                    src={img[1].src}
                    alt={img[1].alt}
                    className="col-span-1 h-full"
                  />
                </div>
              )}

              {/* 1 image: full width */}
              {img.length === 1 && (
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <GalleryImage
                    src={img[0].src}
                    alt={img[0].alt}
                    className="h-full w-full"
                  />
                </div>
              )}
            </div>
          )}

          {/* Text content */}
          <div className="p-5 md:p-6">
            {img.length === 0 && (
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                  {year}
                  {month && <span className="font-normal">{month}</span>}
                </span>
              </div>
            )}
            <h3 className="font-bold text-lg leading-snug text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
