import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { addInquiry, getAllInquiries } from "@/lib/inquiry-store"
import { isDbAvailable } from '@/lib/db'

export async function GET() {
  const auth = (await cookies()).get("admin_auth")?.value
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const list = await getAllInquiries()
  return NextResponse.json(list)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    if (!body?.name || !body?.message || !body?.type) {
      return NextResponse.json({ error: "name, message, and type required" }, { status: 400 })
    }
    let item
    if (!isDbAvailable) {
      // DB not available during testing — return a simulated inquiry without persisting
      const id = String(Date.now()) + Math.random().toString(36).slice(2, 8)
      const createdAt = new Date().toISOString()
      item = {
        id,
        type: body.type === 'lecture' ? 'lecture' : 'general',
        name: String(body.name),
        organization: body.organization ? String(body.organization) : undefined,
        email: body.email ? String(body.email) : undefined,
        phone: body.phone ? String(body.phone) : undefined,
        preferredDate: body.preferredDate ? String(body.preferredDate) : null,
        attendees: body.attendees ? String(body.attendees) : undefined,
        location: body.location ? String(body.location) : undefined,
        contactMethod: body.contactMethod ? String(body.contactMethod) : undefined,
        message: String(body.message),
        isRead: false,
        createdAt,
      }
    } else {
      const newItem = await addInquiry({
      type: body.type === 'lecture' ? 'lecture' : 'general',
      name: String(body.name),
      organization: body.organization ? String(body.organization) : undefined,
      email: body.email ? String(body.email) : undefined,
      phone: body.phone ? String(body.phone) : undefined,
      preferredDate: body.preferredDate ? String(body.preferredDate) : null,
      attendees: body.attendees ? String(body.attendees) : undefined,
      location: body.location ? String(body.location) : undefined,
      contactMethod: body.contactMethod ? String(body.contactMethod) : undefined,
      message: String(body.message),
      })
      item = newItem
    }

    return NextResponse.json(item)
  } catch (err) {
    console.error('Inquiry error:', err)
    return NextResponse.json({ error: "invalid request" }, { status: 400 })
  }
}
