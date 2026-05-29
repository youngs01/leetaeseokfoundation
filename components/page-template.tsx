import type { ReactNode } from "react"

interface PageTemplateProps {
  children: ReactNode
  title?: string
  description?: string
}

export function PageTemplate({ children, title, description }: PageTemplateProps) {
  return (
    <div className="flex-1">
      {title && <h1 className="text-3xl font-bold mb-2">{title}</h1>}
      {description && <p className="text-gray-600 mb-6">{description}</p>}
      {children}
    </div>
  )
}
