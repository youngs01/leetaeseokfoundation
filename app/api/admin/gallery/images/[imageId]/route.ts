import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { deleteGalleryImage } from '@/lib/admin-content-store';

// Verify admin authentication
async function verifyAdmin(request: NextRequest): Promise<boolean> {
  const cookieStore = await cookies();
  const auth = cookieStore.get('admin_auth')?.value;
  return !!auth;
}

type Params = {
  imageId: string;
};

// DELETE: Remove image from gallery
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

    const { imageId } = await params;

    const success = await deleteGalleryImage(imageId);

    if (!success) {
      return NextResponse.json(
        { error: 'Image not found or failed to delete' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, imageId });
  } catch (error) {
    console.error('DELETE /api/admin/gallery/images/[imageId]:', error);
    return NextResponse.json(
      { error: 'Failed to delete image' },
      { status: 500 }
    );
  }
}
