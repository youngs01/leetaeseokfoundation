import { NextResponse } from "next/server"

export async function POST() {
  const res = NextResponse.json({ success: true })
  res.cookies.set({ name: "admin_auth", value: "", path: "/", maxAge: 0, httpOnly: true })
  return res
}

export async function GET(req: Request) {
  const url = new URL(req.url)
  const redirectTo = new URL("/admin/login", url.origin)
  const res = NextResponse.redirect(redirectTo)
  res.cookies.set({ name: "admin_auth", value: "", path: "/", maxAge: 0, httpOnly: true })
  return res
}
