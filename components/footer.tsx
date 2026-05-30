import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-center md:text-left">이태석재단</h3>
            <p className="mb-4 text-sm text-center md:text-left">
              사랑과 나눔으로 세상을 변화시키는 이태석재단은 이태석 신부님의 정신을 이어받아 소외된 이웃들에게 희망을
              전합니다.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full transition-transform hover:scale-110">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full transition-transform hover:scale-110">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full transition-transform hover:scale-110">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Button>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-bold">바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/father-lee" className="hover:underline transition-colors hover:text-white">
                  이태석 신부
                </Link>
              </li>
              <li>
                <Link href="/about/foundation" className="hover:underline transition-colors hover:text-white">
                  재단소개
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:underline transition-colors hover:text-white">
                  사업안내
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:underline transition-colors hover:text-white">
                  활동소식
                </Link>
              </li>
              <li>
                <Link href="/resurrection-movie" className="hover:underline transition-colors hover:text-white">
                  영화'부활' 바티칸 상영
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-bold">연락처</h3>
            <address className="not-italic text-sm">
              <p className="mb-2">서울시 영동포구 국회대로 62길 15, 광복회관 8층</p>
              <p className="mb-2">전화: 02-595-9093</p>
              <p className="mb-2">팩스: 02-6339-3390</p>
              <p className="mb-2">이메일: smiletonj@gmail.com</p>
            </address>
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-bold">후원 참여</h3>
            <p className="mb-4 text-sm">여러분의 소중한 후원금은 이태석재단의 다양한 사업에 사용됩니다.</p>
            <Button
              asChild
              className="w-full bg-white text-primary hover:bg-white/90 transition-transform hover:scale-105"
            >
              <Link href="/donation">후원하기</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} 이태석재단. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
