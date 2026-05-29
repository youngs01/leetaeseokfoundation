import { query } from './db'

export type Inquiry = {
  id: string
  type: 'lecture' | 'general'
  name: string
  organization?: string
  email?: string
  phone?: string
  preferredDate?: string | null
  attendees?: string
  location?: string
  contactMethod?: string
  message: string
  isRead: boolean
  createdAt: string
}

export async function getAllInquiries(): Promise<Inquiry[]> {
  try {
    const result = await query(
      'SELECT id, type, name, organization, email, phone, preferred_date as "preferredDate", attendees, location, contact_method as "contactMethod", message, is_read as "isRead", created_at as "createdAt" FROM inquiries ORDER BY created_at DESC'
    )
    return result.rows as Inquiry[]
  } catch (err) {
    console.error('Failed to fetch inquiries:', err)
    return []
  }
}

export async function addInquiry(input: Omit<Inquiry, "id" | "createdAt" | "isRead">) {
  try {
    const id = String(Date.now()) + Math.random().toString(36).slice(2, 8)
    const createdAt = new Date().toISOString()
    
    const result = await query(
      `INSERT INTO inquiries (id, type, name, organization, email, phone, preferred_date, attendees, location, contact_method, message, is_read, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
       RETURNING id, type, name, organization, email, phone, preferred_date as "preferredDate", attendees, location, contact_method as "contactMethod", message, is_read as "isRead", created_at as "createdAt"`,
      [
        id,
        input.type,
        input.name,
        input.organization || null,
        input.email || null,
        input.phone || null,
        input.preferredDate || null,
        input.attendees || null,
        input.location || null,
        input.contactMethod || null,
        input.message,
        false,
        createdAt
      ]
    )
    
    return result.rows[0] as Inquiry
  } catch (err) {
    console.error('Failed to add inquiry:', err)
    throw err
  }
}

export async function markInquiryAsRead(id: string, isRead: boolean = true) {
  try {
    const result = await query(
      `UPDATE inquiries SET is_read = $1 WHERE id = $2 RETURNING id, type, name, organization, email, phone, preferred_date as "preferredDate", attendees, location, contact_method as "contactMethod", message, is_read as "isRead", created_at as "createdAt"`,
      [isRead, id]
    )
    return result.rows[0] as Inquiry
  } catch (err) {
    console.error('Failed to update inquiry:', err)
    throw err
  }
}

