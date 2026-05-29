import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {
  getContentById,
  updateContent,
  deleteContent,
  ContentItem,
} from '@/lib/admin-content-store';

// Verify admin authentication
async function verifyAdmin(request: NextRequest): Promise<boolean> {
  const cookieStore = await cookies();
  const auth = cookieStore.get('admin_auth')?.value;
  return !!auth;
}

type Params = {
  type: string;
  id: string;
};

// GET: Fetch single content item
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { type, id } = await params;

    // Validate type
    const validTypes = ['foundation', 'lecture', 'press', 'video', 'gallery', 'book', 'movie', 'letter'];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: 'Invalid content type' },
        { status: 400 }
      );
    }

    const content = await getContentById(type, id);

    if (!content) {
      return NextResponse.json(
        { error: 'Content not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(content);
  } catch (error) {
    console.error('GET /api/admin/content/[type]/[id]:', error);
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

// PATCH: Update content
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    // Verify admin
    if (!(await verifyAdmin(request))) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { type, id } = await params;

    // Validate type
    const validTypes = ['foundation', 'lecture', 'press', 'video', 'gallery', 'book', 'movie', 'letter'];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: 'Invalid content type' },
        { status: 400 }
      );
    }

    // Check if content exists
    const existing = await getContentById(type, id);
    if (!existing) {
      return NextResponse.json(
        { error: 'Content not found' },
        { status: 404 }
      );
    }

    const body = await request.json();

    const updated = await updateContent(type, id, body);

    if (!updated) {
      return NextResponse.json(
        { error: 'Failed to update content' },
        { status: 500 }
      );
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error('PATCH /api/admin/content/[type]/[id]:', error);
    return NextResponse.json(
      { error: 'Failed to update content' },
      { status: 500 }
    );
  }
}

// DELETE: Delete content
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    // Verify admin
    if (!(await verifyAdmin(request))) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { type, id } = await params;

    // Validate type
    const validTypes = ['foundation', 'lecture', 'press', 'video', 'gallery', 'book', 'movie', 'letter'];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: 'Invalid content type' },
        { status: 400 }
      );
    }

    const success = await deleteContent(type, id);

    if (!success) {
      return NextResponse.json(
        { error: 'Content not found or failed to delete' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('DELETE /api/admin/content/[type]/[id]:', error);
    return NextResponse.json(
      { error: 'Failed to delete content' },
      { status: 500 }
    );
  }
}
