import { NextResponse } from "next/server"

// 환경 변수에서만 읽기 (코드에서는 기본값 없음)
const ADMIN_ID = process.env.ADMIN_ID
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const email = body?.email
    const password = body?.password

    if (!email || !password) {
      return NextResponse.json({ error: "email and password required" }, { status: 400 })
    }

    // 환경변수가 설정되지 않거나 일치하지 않으면 거절
    if (!ADMIN_ID || !ADMIN_PASSWORD || email !== ADMIN_ID || password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const res = NextResponse.json({ ok: true })
    res.cookies.set({ name: "admin_auth", value: "1", httpOnly: true, path: "/", maxAge: 60 * 60 * 24 * 7 })
    return res
  } catch (e) {
    return NextResponse.json({ error: "invalid request" }, { status: 400 })
  }
}
