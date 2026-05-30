import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { PopupProvider } from "@/components/popup-context"
import { ThemeProvider } from "next-themes"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Popups } from "@/components/popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "이태석재단 - 사랑과 나눔으로 세상을 변화시키는 재단",
  description: "이태석 신부님의 정신을 이어받아 소외된 이웃들에게 희망을 전하는 이태석재단입니다.",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <PopupProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <Popups />
            </div>
          </PopupProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
