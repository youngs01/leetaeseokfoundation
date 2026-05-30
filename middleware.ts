import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Protect any /admin routes
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next()
  }

  const auth = req.headers.get("authorization") || ""
  if (auth.startsWith("Basic ")) {
    try {
      const b64 = auth.split(" ")[1]
      const decoded = Buffer.from(b64, "base64").toString()
      const [user, pass] = decoded.split(":")
      if (user === process.env.ADMIN_USER && pass === process.env.ADMIN_PASSWORD) {
        return NextResponse.next()
      }
    } catch (e) {
      // fallthrough
    }
  }

  const res = new NextResponse("Authentication required", { status: 401 })
  res.headers.set("WWW-Authenticate", `Basic realm="Admin Area"`)
  return res
}

export const config = {
  matcher: ["/admin/:path*"],
}
