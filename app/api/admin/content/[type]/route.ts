import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {
  getContentByType,
  createContent,
  ContentItem,
} from '@/lib/admin-content-store';

// Verify admin authentication
async function verifyAdmin(request: NextRequest): Promise<boolean> {
  const cookieStore = await cookies();
  const auth = cookieStore.get('admin_auth')?.value;
  return !!auth;
}

// GET: Fetch all content of a type or single item
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  try {
    const { type } = await params;

    // Validate type
    const validTypes = ['foundation', 'lecture', 'press', 'video', 'gallery', 'book', 'movie', 'letter'];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: 'Invalid content type' },
        { status: 400 }
      );
    }

    // Get pagination params from query
    const searchParams = request.nextUrl.searchParams;
    const limit = Math.min(parseInt(searchParams.get('limit') || '100'), 500);
    const offset = parseInt(searchParams.get('offset') || '0');

    const content = await getContentByType(type, limit, offset);

    return NextResponse.json({
      type,
      count: content.length,
      limit,
      offset,
      items: content,
    });
  } catch (error) {
    console.error('GET /api/admin/content/[type]:', error);
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

// POST: Create new content
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  try {
    // Verify admin
    if (!(await verifyAdmin(request))) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { type } = await params;

    // Validate type
    const validTypes = ['foundation', 'lecture', 'press', 'video', 'gallery', 'book', 'movie', 'letter'];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: 'Invalid content type' },
        { status: 400 }
      );
    }

    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.summary || !body.content) {
      return NextResponse.json(
        { error: 'Missing required fields: title, summary, content' },
        { status: 400 }
      );
    }

    const newContent = await createContent(type, {
      ...body,
      type: type as any,
    });

    if (!newContent) {
      return NextResponse.json(
        { error: 'Failed to create content' },
        { status: 500 }
      );
    }

    return NextResponse.json(newContent, { status: 201 });
  } catch (error) {
    console.error('POST /api/admin/content/[type]:', error);
    return NextResponse.json(
      { error: 'Failed to create content' },
      { status: 500 }
    );
  }
}
