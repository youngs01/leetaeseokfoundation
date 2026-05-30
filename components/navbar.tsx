"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    title: "이태석 신부",
    href: "/father-lee",
    submenu: [],
  },
  {
    title: "재단소개",
    href: "/about",
    submenu: [
      { title: "우리재단", href: "/about/foundation" },
      { title: "함께하는 사람들", href: "/about/people" },
      { title: "조직도", href: "/about/organization" },
      { title: "재무현황", href: "/about/finance" },
      { title: "찾아오시는 길", href: "/about/location" },
      { title: "문의하기", href: "/about/contact" },
    ],
  },
  {
    title: "사업안내",
    href: "/programs",
    submenu: [
      { title: "이태석 리더십 학교", href: "/programs/leadership-school" },
      { title: "이태석 장학생", href: "/programs/scholarship" },
      { title: "한센인 마을 지원", href: "/programs/hansen-village" },
      { title: "우크라이나 지원", href: "/programs/ukraine-support" },
      { title: "의약품 지원", href: "/programs/medical-support" },
    ],
  },
  {
    title: "활동소식",
    href: "/news",
    submenu: [
      { title: "재단 소식", href: "/news/foundation" },
      { title: "강연 소식", href: "/news/lectures" },
      { title: "언론 보도", href: "/news/press" },
      { title: "영상", href: "/news/videos" },
      { title: "갤러리", href: "/news/gallery" },
      { title: "책 영화 소개", href: "/news/books-movies" },
      { title: "후원 감사 편지", href: "/news/thank-you-letters" },
    ],
  },
  {
    title: "영화'부활' 바티칸 상영",
    href: "/resurrection-movie",
    submenu: [
      { title: "영화 소개", href: "/resurrection-movie/introduction" },
      { title: "바티칸 영화 상영 성료", href: "/resurrection-movie/vatican-screening" },
    ],
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const router = useRouter()

  const handleMenuItemClick = (e: React.MouseEvent, item: (typeof menuItems)[0]) => {
    // Allow navigation only for "이태석 신부" or items without submenus
    if (item.title === "이태석 신부" || item.submenu.length === 0) {
      router.push(item.href)
    } else {
      // For items with submenus, only show dropdown on hover (desktop) or tap (mobile)
      e.preventDefault()
    }
  }

  const toggleSubmenu = (title: string) => {
    setActiveSubmenu(activeSubmenu === title ? null : title)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary transition-transform hover:scale-105">이태석재단</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <div key={item.title} className="relative group">
              <button
                onClick={(e) => handleMenuItemClick(e, item)}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  item.submenu.length > 0 ? "cursor-default" : "cursor-pointer",
                )}
              >
                {item.title}
                {item.submenu.length > 0 && (
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                )}
              </button>
              {item.submenu.length > 0 && (
                <div className="absolute left-0 top-full hidden w-48 rounded-md border bg-white p-2 shadow-md transition-all duration-200 group-hover:block opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="block rounded-sm px-3 py-2 text-sm transition-colors hover:bg-primary hover:text-white"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            asChild
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 transition-transform hover:scale-105"
          >
            <Link href="/donation">후원 참여</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden transition-colors hover:bg-primary hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 bg-white lg:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
        )}
      >
        <div className="container h-full overflow-y-auto">
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              className="transition-transform hover:rotate-90"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="space-y-2 p-4">
            {menuItems.map((item) => (
              <div key={item.title} className="py-1">
                {item.submenu.length > 0 && item.title !== "이태석 신부" ? (
                  <Collapsible
                    open={activeSubmenu === item.title}
                    onOpenChange={() => toggleSubmenu(item.title)}
                    className="transition-all duration-300"
                  >
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                      <span>{item.title}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          activeSubmenu === item.title ? "rotate-180" : "",
                        )}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-in-out">
                      <div className="ml-4 mt-1 space-y-1 transition-all duration-300 ease-in-out">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-primary/10"
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setActiveSubmenu(null)
                            }}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-white"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setActiveSubmenu(null)
                    }}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full transition-transform hover:scale-105">
                <Link
                  href="/donation"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setActiveSubmenu(null)
                  }}
                >
                  후원 참여
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
