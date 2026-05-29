import { notFound } from "next/navigation"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getContentById, getRelatedContent } from "@/lib/content-manager"
import type { GalleryItem } from "@/lib/data/content-types"
import ImageGallery from "@/components/news/image-gallery"

export default function GalleryDetailPage({ params }: { params: any }) {
  const { id } = React.use(params as any)

  // Get the gallery item
  const gallery = getContentById<GalleryItem>("gallery", id)

  // If gallery doesn't exist, return 404
  if (!gallery) {
    notFound()
  }

  // Get related galleries
  const relatedGalleries = getRelatedContent<GalleryItem>("gallery", id, 2)

  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={gallery.image || "/placeholder.svg?height=600&width=1920"}
              alt={gallery.title}
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">{gallery.title}</h1>
              <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/90">
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  <span>{gallery.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"></path>
                    <path d="M20 14v-3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"></path>
                    <path d="M12 14v4"></path>
                    <path d="M12 14v4"></path>
                    <path d="M12 14H8"></path>
                    <path d="M12 14h4"></path>
                    <path d="M16 14v4"></path>
                    <path d="M8 14v4"></path>
                    <path d="M18 9V7"></path>
                    <path d="M18 14v-3"></path>
                    <path d="M18 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"></path>
                  </svg>
                  <span>사진 {gallery.imageCount}장</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="prose max-w-none">
                  <p className="text-lg mb-6 font-medium">{gallery.summary}</p>

                  {/* Content - render HTML content */}
                  {gallery.content && <div dangerouslySetInnerHTML={{ __html: gallery.content }} className="mb-8" />}

                  {/* Image Gallery */}
                  <h3 className="text-xl font-bold mb-6">갤러리</h3>
                  <ImageGallery images={gallery.images || []} />

                  <div className="mt-12 flex justify-between">
                    <Button asChild variant="outline" className="flex items-center gap-2">
                      <Link href="/news/gallery">
                        <ChevronLeft className="h-4 w-4" />
                        목록으로
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-muted p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold mb-6 text-primary/80">관련 갤러리</h3>
                  <div className="space-y-4">
                    {relatedGalleries.map((relatedGallery) => (
                      <Card
                        key={relatedGallery.id}
                        className="overflow-hidden transition-all duration-300 hover:shadow-md"
                      >
                        <div className="aspect-video relative">
                          <Image
                            src={relatedGallery.image || "/placeholder.svg?height=150&width=300"}
                            alt={relatedGallery.title}
                            fill
                            loading="lazy"
                            className="object-cover"
                          />
                          {/* Image count badge */}
                          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
                            {relatedGallery.imageCount}장
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-1 line-clamp-2">{relatedGallery.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{relatedGallery.date}</p>
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <Link href={`/news/gallery/${relatedGallery.id}`}>자세히 보기</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button asChild className="w-full">
                      <Link href="/about/contact">문의하기</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
