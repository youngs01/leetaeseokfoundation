/**
 * Check if a popup should be shown based on localStorage
 */
export function shouldShowPopup(cookieName: string): boolean {
  if (typeof window === "undefined") return false

  const popupClosed = localStorage.getItem(cookieName)
  if (!popupClosed) return true

  // Check if the stored date is in the past
  const expiryDate = new Date(popupClosed)
  const now = new Date()

  return now > expiryDate
}

/**
 * Close a popup for a specified number of days
 */
export function closePopupForDays(days: number, cookieName: string): void {
  if (typeof window === "undefined") return

  const now = new Date()
  const expiry = new Date(now.getFullYear(), now.getMonth(), now.getDate() + days, 0, 0, 0)
  localStorage.setItem(cookieName, expiry.toString())
}
