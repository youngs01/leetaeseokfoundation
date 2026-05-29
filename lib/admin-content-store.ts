import fs from 'fs/promises';
import path from 'path';

// Type-safe content item structures
export interface ContentBase {
  id: string;
  type: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  featured?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface FoundationNews extends ContentBase {
  type: 'foundation';
}

export interface LectureNews extends ContentBase {
  type: 'lecture';
  location?: string;
  speaker?: string;
}

export interface PressNews extends ContentBase {
  type: 'press';
  source?: string;
  url?: string;
}

export interface Video extends ContentBase {
  type: 'video';
  youtube_id?: string;
  duration?: number;
}

export interface Gallery extends ContentBase {
  type: 'gallery';
  image_count?: number;
}

export interface GalleryImage {
  id: string;
  gallery_id: string;
  image_url: string;
  created_at?: string;
}

export interface Book extends ContentBase {
  type: 'book';
  author?: string;
  publisher?: string;
  published_date?: string;
}

export interface Movie extends ContentBase {
  type: 'movie';
  director?: string;
  publisher?: string;
  release_date?: string;
  runtime?: number;
}

export interface Letter extends ContentBase {
  type: 'letter';
  author?: string;
  letter_type?: string;
}

export type ContentItem = FoundationNews | LectureNews | PressNews | Video | Gallery | Book | Movie | Letter;

// File-based storage
const DATA_FILE = path.join(process.cwd(), 'data', 'content.json');

async function readData(): Promise<ContentItem[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeData(items: ContentItem[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(items, null, 2));
}

// Get all content of a specific type
export async function getContentByType(type: string, limit: number = 100, offset: number = 0): Promise<ContentItem[]> {
  try {
    const validTypes = ['foundation', 'lecture', 'press', 'video', 'gallery', 'book', 'movie', 'letter'];
    if (!validTypes.includes(type)) {
      console.error(`Invalid content type: ${type}`);
      return [];
    }

    const items = await readData();
    const filtered = items
      .filter(item => item.type === type)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return filtered.slice(offset, offset + limit);
  } catch (error) {
    console.error('Error fetching content:', error);
    return [];
  }
}

// Get single content item by ID
export async function getContentById(type: string, id: string): Promise<ContentItem | null> {
  try {
    const items = await readData();
    return items.find(item => item.id === id && item.type === type) || null;
  } catch (error) {
    console.error('Error fetching content:', error);
    return null;
  }
}

// Create new content
export async function createContent(type: string, item: Partial<ContentItem>): Promise<ContentItem | null> {
  try {
    const validTypes = ['foundation', 'lecture', 'press', 'video', 'gallery', 'book', 'movie', 'letter'];
    if (!validTypes.includes(type)) {
      throw new Error(`Invalid content type: ${type}`);
    }

    const now = new Date().toISOString();
    const id = item.id || `${type}_${Date.now()}`;

    const newItem: ContentItem = {
      id,
      type: type as any,
      title: item.title || '',
      summary: item.summary || '',
      content: item.content || '',
      image: item.image || '',
      date: item.date || new Date().toISOString().split('T')[0],
      featured: item.featured || false,
      created_at: now,
      updated_at: now,
      // Type-specific fields
      ...(type === 'lecture' && {
        location: (item as LectureNews).location || '',
        speaker: (item as LectureNews).speaker || '',
      }),
      ...(type === 'press' && {
        source: (item as PressNews).source || '',
        url: (item as PressNews).url || '',
      }),
      ...(type === 'video' && {
        youtube_id: (item as Video).youtube_id || '',
        duration: (item as Video).duration || 0,
      }),
      ...(type === 'gallery' && {
        image_count: (item as Gallery).image_count || 0,
      }),
      ...(type === 'book' && {
        author: (item as Book).author || '',
        publisher: (item as Book).publisher || '',
        published_date: (item as Book).published_date || '',
      }),
      ...(type === 'movie' && {
        director: (item as Movie).director || '',
        publisher: (item as Movie).publisher || '',
        release_date: (item as Movie).release_date || '',
        runtime: (item as Movie).runtime || 0,
      }),
      ...(type === 'letter' && {
        author: (item as Letter).author || '',
        letter_type: (item as Letter).letter_type || '',
      }),
    };

    const items = await readData();
    items.push(newItem);
    await writeData(items);

    return newItem;
  } catch (error) {
    console.error('Error creating content:', error);
    return null;
  }
}

// Update existing content
export async function updateContent(type: string, id: string, updates: Partial<ContentItem>): Promise<ContentItem | null> {
  try {
    const items = await readData();
    const index = items.findIndex(item => item.id === id && item.type === type);

    if (index === -1) return null;

    const now = new Date().toISOString();
    const updated: ContentItem = {
      ...items[index],
      ...updates,
      id, // Ensure ID doesn't change
      type: type as any, // Ensure type doesn't change
      updated_at: now,
    } as ContentItem;

    items[index] = updated;
    await writeData(items);

    return updated;
  } catch (error) {
    console.error('Error updating content:', error);
    return null;
  }
}

// Delete content
export async function deleteContent(type: string, id: string): Promise<boolean> {
  try {
    const items = await readData();
    const filtered = items.filter(item => !(item.id === id && item.type === type));

    if (filtered.length === items.length) return false;

    await writeData(filtered);
    return true;
  } catch (error) {
    console.error('Error deleting content:', error);
    return false;
  }
}

// Gallery image operations
export async function getGalleryImages(galleryId: string): Promise<GalleryImage[]> {
  try {
    const items = await readData();
    const gallery = items.find(item => item.id === galleryId && item.type === 'gallery') as Gallery | undefined;
    
    if (!gallery) return [];

    // Read from separate gallery images data or extract from item
    // For now, return empty array - gallery images are stored within gallery item
    return [];
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
}

export async function addGalleryImage(galleryId: string, imageUrl: string): Promise<GalleryImage | null> {
  try {
    const items = await readData();
    const gallery = items.find(item => item.id === galleryId && item.type === 'gallery') as Gallery | undefined;

    if (!gallery) return null;

    const id = `img_${Date.now()}`;
    const newImage: GalleryImage = {
      id,
      gallery_id: galleryId,
      image_url: imageUrl,
      created_at: new Date().toISOString(),
    };

    // Update gallery image count
    gallery.image_count = (gallery.image_count || 0) + 1;
    await writeData(items);

    return newImage;
  } catch (error) {
    console.error('Error adding gallery image:', error);
    return null;
  }
}

export async function deleteGalleryImage(imageId: string): Promise<boolean> {
  try {
    // For file-based storage, we'd need a separate images file
    // For now, just return true as placeholder
    return true;
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    return false;
  }
}
