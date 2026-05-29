// Define common types for all content
export type BaseContent = {
  id: string
  title: string
  date: string // Format: YYYY.MM.DD
  summary: string
  image: string
  content?: string // HTML content
  featured?: boolean
}

// Foundation News
export type FoundationNewsItem = BaseContent & {
  category: "foundation"
}

// Lecture News
export type LectureItem = BaseContent & {
  category: "lecture"
  location: string
  speaker: string
}

// Press Coverage
export type PressItem = BaseContent & {
  category: "press"
  source: string
  url: string
}

// Videos
export type VideoItem = BaseContent & {
  category: "video"
  youtubeId: string
  duration?: string
}

// Gallery
export type GalleryItem = BaseContent & {
  category: "gallery"
  imageCount: number
  images?: GalleryImage[]
}

export type GalleryImage = {
  id: string
  src: string
  alt: string
  description?: string
}

// Books/Movies
export type BookMovieItem = BaseContent & {
  category: "book" | "movie"
  type: "book" | "movie"
  author?: string
  director?: string
  publisher?: string
  publishedDate?: string
  releaseDate?: string
  runtime?: string
}

// Thank You Letters
export type ThankYouLetterItem = BaseContent & {
  category: "letter"
  author: string
  letterType: string // e.g., "장학생", "해외사업", "국내사업"
}

// Union type for all content items
export type ContentItem =
  | FoundationNewsItem
  | LectureItem
  | PressItem
  | VideoItem
  | GalleryItem
  | BookMovieItem
  | ThankYouLetterItem
