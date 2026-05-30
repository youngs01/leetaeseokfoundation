/**
 * Converts a Google Drive file ID to a direct image URL
 * @param fileId The Google Drive file ID
 * @param size The size of the image (default: w2000)
 * @returns A URL that can be used in Next.js Image component
 */
export function getGoogleDriveImageUrl(fileId: string, size = "w2000"): string {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=${size}`
}

/**
 * Alternative method using the Google Drive export=view approach
 * Note: This may not work in all cases due to CORS restrictions
 * @param fileId The Google Drive file ID
 * @returns A URL that can be used in Next.js Image component
 */
export function getGoogleDriveDirectUrl(fileId: string): string {
  return `https://drive.google.com/uc?export=view&id=${fileId}`
}
