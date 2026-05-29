import React from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Clock, Calendar, Share2, ThumbsUp, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getContentById, getRelatedContent } from "@/lib/content-manager"
import type { VideoItem } from "@/lib/data/content-types"

export default function VideoDetailPage({ params }: { params: any }) {
  const { id } = React.use(params as any)

  // Get the video item on the server
  const video = getContentById<VideoItem>("video", id)

  if (!video) {
    notFound()
  }

  const relatedVideos = getRelatedContent<VideoItem>("video", id, 3)

  return (
    <div className="flex flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={video.image || "/placeholder.svg?height=600&width=1920"}
              alt={video.title}
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-24 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">{video.title}</h1>
              <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/90">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{video.date}</span>
                </div>
                {video.duration && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>재생시간: {video.duration}</span>
                  </div>
                )}
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
                  <p className="text-lg mb-6 font-medium">{video.summary}</p>

                  {/* YouTube Video Embed */}
                  <div className="my-8">
                    <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      ></iframe>
                    </div>
                  </div>

                  {/* Video Actions */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      <span>좋아요</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Share2 className="h-4 w-4" />
                      <span>공유하기</span>
                    </Button>
                  </div>

                  {/* Content - render HTML content */}
                  {video.content && <div dangerouslySetInnerHTML={{ __html: video.content }} />}

                  {/* Video Description Section */}
                  <div className="mt-12 bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">영상 소개</h3>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        이 영상은 이태석 신부의 삶과 활동을 담고 있습니다. 이태석 신부는 의사이자 사제로서 수단 톤즈
                        지역에서 헌신적인 봉사활동을 펼쳤습니다.
                      </p>
                      <p className="text-muted-foreground">
                        특히 현지 아이들에게 음악을 가르치고 '톤즈의 아이들' 브라스밴드를 창단하여 음악을 통해 희망을
                        전했습니다.
                      </p>
                      <p className="text-muted-foreground">
                        이태석재단은 이태석 신부의 정신을 이어받아 다양한 사업을 통해 국내외 소외된 이웃들에게 희망을
                        전하고 있습니다.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 flex justify-between">
                    <Button asChild variant="outline" className="flex items-center gap-2">
                      <Link href="/news/videos">
                        <ChevronLeft className="h-4 w-4" />
                        목록으로
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-muted p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold mb-6 text-primary/80">관련 영상</h3>
                  <div className="space-y-4">
                    {relatedVideos.map((relatedVideo) => (
                      <Card
                        key={relatedVideo.id}
                        className="overflow-hidden transition-all duration-300 hover:shadow-md"
                      >
                        <Link href={`/news/videos/${relatedVideo.id}`} className="block">
                          <div className="aspect-video relative">
                            <Image
                              src={relatedVideo.image || "/placeholder.svg?height=150&width=300"}
                              alt={relatedVideo.title}
                              fill
                              loading="lazy"
                              className="object-cover"
                            />
                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center">
                                <Play className="h-6 w-6 text-white" fill="white" />
                              </div>
                            </div>
                          </div>
                        </Link>
                        <CardContent className="p-4">
                          <Link href={`/news/videos/${relatedVideo.id}`}>
                            <h4 className="font-bold mb-1 line-clamp-2 hover:text-primary transition-colors">
                              {relatedVideo.title}
                            </h4>
                          </Link>
                          <div className="flex items-center text-sm text-muted-foreground mb-2">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{relatedVideo.date}</span>
                            {relatedVideo.duration && (
                              <>
                                <span className="mx-1">•</span>
                                <Clock className="h-3 w-3 mr-1" />
                                <span>{relatedVideo.duration}</span>
                              </>
                            )}
                          </div>
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <Link href={`/news/videos/${relatedVideo.id}`}>영상 보기</Link>
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
