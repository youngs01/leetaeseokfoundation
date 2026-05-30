export interface HistoryImage {
  src: string
  alt: string
  size?: "small" | "medium" | "large"
  caption?: string
}

export interface HistoryItemProps {
  year: string
  month?: string
  title: string
  description: string
  images: HistoryImage[]
  isLeft: boolean
}
