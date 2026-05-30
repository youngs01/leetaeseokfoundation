export type PopupDownloadFile = {
  id: string
  name: string
  label: string
}

export type PopupOverride = {
  title?: string
  detailTitle?: string
  popupImageSrc?: string
  detailImageSrc?: string
  description?: string
  details?: string[]
  downloadFiles?: PopupDownloadFile[]
}

export type PopupItem = {
  id: string
  title: string
  summary: string
  description: string
  popupImageSrc: string
  detailImageSrc?: string
  imageAlt: string
  pagePath: string
  downloadFiles?: PopupDownloadFile[]
  details: string[]
  relatedLinks: { label: string; href: string }[]
}

const POPUP_OVERRIDES_STORAGE_KEY = "popup-overrides"

export const POPUP_ITEMS: PopupItem[] = [
  {
    id: "1",
    title: "제2회 이태석 글로벌 리더십스쿨 참자자 모집",
    summary: "",
    description:
      "지원서 및 학부모 동의서",
    popupImageSrc: "1AsIR7JxIwf_VAVcrD9b0hOxQ8-_Mwl1h", // 팝업 이미지
    detailImageSrc: "1EtRwZW2ShkH3PEU5tydIhIoiQundr13h", // 상세 페이지 이미지
    imageAlt: "팝업 자료 이미지",
    pagePath: "/popup/1",
    downloadFiles: [
      {
        id: "YOUR_APPLICATION_DOWNLOAD_FILE_ID",
        name: "지원서",
        label: "지원서",
      },
      {
        id: "YOUR_PARENT_CONSENT_DOWNLOAD_FILE_ID",
        name: "학부모 동의서",
        label: "학부모 동의서",
      },
    ],
    details: [
      "아래 버튼을 눌러 지원서와 학부모 동의서를 각각 다운로드하실 수 있습니다.",
    ],
    relatedLinks: [
      { label: "재단 소개", href: "/about/foundation" },
      { label: "후원 안내", href: "/support" },
    ],
  },
]

export function getPopupById(id: string) {
  return POPUP_ITEMS.find((item) => item.id === id) || null
}

export function loadPopupOverrides(): Record<string, PopupOverride> {
  if (typeof window === "undefined") return {}

  try {
    const stored = localStorage.getItem(POPUP_OVERRIDES_STORAGE_KEY)
    return stored ? (JSON.parse(stored) as Record<string, PopupOverride>) : {}
  } catch {
    return {}
  }
}

export function savePopupOverrides(overrides: Record<string, PopupOverride>) {
  if (typeof window === "undefined") return

  localStorage.setItem(POPUP_OVERRIDES_STORAGE_KEY, JSON.stringify(overrides))
}

export function getDriveId(value: string) {
  const idMatch = value.match(/(?:\/d\/|id=)([a-zA-Z0-9_-]{20,})/)
  return idMatch ? idMatch[1] : null
}

export function getDriveImageUrl(srcOrId: string) {
  if (!srcOrId) return "/placeholder.svg"
  if (srcOrId.startsWith("data:") || srcOrId.startsWith("http://") || srcOrId.startsWith("https://")) {
    return srcOrId
  }
  const driveId = getDriveId(srcOrId) || srcOrId
  return `https://drive.google.com/thumbnail?sz=w1200-h1800&id=${driveId}`
}

export function getDriveDownloadUrl(srcOrId: string) {
  const driveId = getDriveId(srcOrId)
  const id = driveId || srcOrId
  return `https://drive.google.com/uc?export=download&id=${id}`
}
