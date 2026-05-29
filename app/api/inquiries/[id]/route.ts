import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { markInquiryAsRead } from "@/lib/inquiry-store"
import { isDbAvailable } from '@/lib/db'

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const auth = (await cookies()).get("admin_auth")?.value
    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()
    const isRead = body?.isRead ?? true
    if (!isDbAvailable) {
      // DB not available — simulate success response
      return NextResponse.json({ id: params.id, isRead })
    }

    const inquiry = await markInquiryAsRead(params.id, isRead)
    return NextResponse.json(inquiry)
  } catch (err) {
    console.error('Failed to update inquiry:', err)
    return NextResponse.json({ error: "failed to update inquiry" }, { status: 500 })
  }
}
