// utils/validate.js

/**
 * Validate file name để tránh path traversal và ký tự nguy hiểm
 * @param {string} fileName
 * @returns {boolean} true nếu hợp lệ, false nếu không
 */
export function isValidFileName(fileName) {
  if (!fileName) return false;

  // Loại bỏ các ký tự hoặc pattern nguy hiểm
  if (
    fileName.includes("..") ||
    fileName.includes("/") ||
    fileName.includes("\\")
  ) {
    return false;
  }

  return true;
}
