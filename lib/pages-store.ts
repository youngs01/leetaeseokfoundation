import fs from "fs/promises"
import path from "path"

const FILE = path.join(process.cwd(), "data", "pages.json")

export type PageContent = {
  id: string
  title: string
  slug: string
  content: string
  description?: string
  updatedAt: string
}

async function ensureFile() {
  try {
    await fs.access(FILE)
  } catch (e) {
    await fs.mkdir(path.dirname(FILE), { recursive: true })
    await fs.writeFile(FILE, JSON.stringify([], null, 2))
  }
}

export async function getAllPages(): Promise<PageContent[]> {
  await ensureFile()
  const raw = await fs.readFile(FILE, "utf8")
  try {
    return JSON.parse(raw) as PageContent[]
  } catch (e) {
    return []
  }
}

export async function getPageBySlug(slug: string): Promise<PageContent | null> {
  const pages = await getAllPages()
  return pages.find((p) => p.slug === slug) || null
}

export async function updateOrCreatePage(
  slug: string,
  title: string,
  content: string,
  description?: string
): Promise<PageContent> {
  await ensureFile()
  const pages = await getAllPages()
  const index = pages.findIndex((p) => p.slug === slug)
  const page: PageContent = {
    id: index >= 0 ? pages[index].id : String(Date.now()),
    slug,
    title,
    content,
    description,
    updatedAt: new Date().toISOString(),
  }

  if (index >= 0) {
    pages[index] = page
  } else {
    pages.push(page)
  }

  await fs.writeFile(FILE, JSON.stringify(pages, null, 2))
  return page
}
