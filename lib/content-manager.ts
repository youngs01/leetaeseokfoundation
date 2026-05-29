import type { ContentItem } from "./data/content-types"

// Import data files
import foundationNewsData from "./data/foundation-news-data"
import lectureNewsData from "./data/lecture-news-data"
import pressNewsData from "./data/press-news-data"
import videoData from "./data/video-data"
import galleryData from "./data/gallery-data"
import bookMovieData from "./data/book-movie-data"
import thankYouLettersData from "./data/thank-you-letters-data"

// Helper function to sort items by date (newest first)
export function sortByDateDesc<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    // Check if date properties exist
    if (!a.date || !b.date) {
      return 0 // Keep original order if either date is missing
    }

    try {
      // Convert date strings (YYYY.MM.DD) to Date objects for comparison
      const dateA = new Date(a.date.replace(/\./g, "-"))
      const dateB = new Date(b.date.replace(/\./g, "-"))

      // Check if dates are valid
      if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
        return 0 // Keep original order if either date is invalid
      }

      return dateB.getTime() - dateA.getTime()
    } catch (error) {
      console.error("Error sorting dates:", error)
      return 0 // Keep original order if there's an error
    }
  })
}

// Get all content of a specific type
export function getContentByType<T extends ContentItem>(type: string): T[] {
  switch (type) {
    case "foundation":
      return foundationNewsData as T[]
    case "lecture":
      return lectureNewsData as T[]
    case "press":
      return pressNewsData as T[]
    case "video":
      return videoData as T[]
    case "gallery":
      return galleryData as T[]
    case "book":
    case "movie":
      return bookMovieData.filter((item) => item.type === type) as T[]
    case "books-movies":
      return bookMovieData as T[]
    case "letter":
      return thankYouLettersData as T[]
    default:
      return [] as T[]
  }
}

// Get a specific content item by type and ID
export function getContentById<T extends ContentItem>(type: string, id: string): T | null {
  const items = getContentByType<T>(type)
  return items.find((item) => item.id === id) || null
}

// Get featured content items
export function getFeaturedContent<T extends ContentItem>(type: string, count = 3): T[] {
  const items = getContentByType<T>(type)

  // First try to get items marked as featured
  const featuredItems = items.filter((item) => item.featured)

  if (featuredItems.length >= count) {
    return sortByDateDesc(featuredItems).slice(0, count)
  }

  // If not enough featured items, return the most recent ones
  return sortByDateDesc(items).slice(0, count)
}

// Get related content items (same type, excluding the current item)
export function getRelatedContent<T extends ContentItem>(
  type: string,
  currentId: string,
  count = 3,
  filterFn?: (item: T) => boolean,
): T[] {
  let items = getContentByType<T>(type).filter((item) => item.id !== currentId)

  if (filterFn) {
    items = items.filter(filterFn)
  }

  return sortByDateDesc(items).slice(0, count)
}

// Get previous and next items
export function getPrevNextContent<T extends ContentItem>(
  type: string,
  currentId: string,
): { prev: T | null; next: T | null } {
  const items = sortByDateDesc(getContentByType<T>(type))
  const currentIndex = items.findIndex((item) => item.id === currentId)

  if (currentIndex === -1) {
    return { prev: null, next: null }
  }

  const prev = currentIndex < items.length - 1 ? items[currentIndex + 1] : null
  const next = currentIndex > 0 ? items[currentIndex - 1] : null

  return { prev, next }
}

// Search content across all types or within a specific type
export function searchContent(query: string, type?: string): ContentItem[] {
  const normalizedQuery = query.toLowerCase()

  let allContent: ContentItem[] = []

  try {
    if (type) {
      allContent = getContentByType(type)
    } else {
      // Combine all content types
      allContent = [
        ...foundationNewsData,
        ...lectureNewsData,
        ...pressNewsData,
        ...videoData,
        ...galleryData,
        ...bookMovieData,
        ...thankYouLettersData,
      ].filter((item) => item && item.date) // Filter out items without date
    }

    // Filter by query if provided
    if (query && query.trim() !== "") {
      return allContent.filter((item) => {
        return (
          (item.title && item.title.toLowerCase().includes(normalizedQuery)) ||
          (item.summary && item.summary.toLowerCase().includes(normalizedQuery)) ||
          (item.content && item.content.toLowerCase().includes(normalizedQuery))
        )
      })
    }

    return allContent
  } catch (error) {
    console.error("Error searching content:", error)
    return []
  }
}
