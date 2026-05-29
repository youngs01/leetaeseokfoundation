import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {
  getGalleryImages,
  addGalleryImage,
  deleteGalleryImage,
} from '@/lib/admin-content-store';

// Verify admin authentication
async function verifyAdmin(request: NextRequest): Promise<boolean> {
  const cookieStore = await cookies();
  const auth = cookieStore.get('admin_auth')?.value;
  return !!auth;
}

type Params = {
  galleryId: string;
};

// GET: Fetch all images in a gallery
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  try {
    const { galleryId } = await params;

    const images = await getGalleryImages(galleryId);

    return NextResponse.json({
      galleryId,
      count: images.length,
      items: images,
    });
  } catch (error) {
    console.error('GET /api/admin/gallery/[galleryId]/images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery images' },
      { status: 500 }
    );
  }
}

// POST: Add image to gallery
export async function POST(
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

    const { galleryId } = await params;
    const body = await request.json();

    if (!body.imageUrl) {
      return NextResponse.json(
        { error: 'Missing required field: imageUrl' },
        { status: 400 }
      );
    }

    const image = await addGalleryImage(galleryId, body.imageUrl);

    if (!image) {
      return NextResponse.json(
        { error: 'Failed to add image to gallery' },
        { status: 500 }
      );
    }

    return NextResponse.json(image, { status: 201 });
  } catch (error) {
    console.error('POST /api/admin/gallery/[galleryId]/images:', error);
    return NextResponse.json(
      { error: 'Failed to add image to gallery' },
      { status: 500 }
    );
  }
}
