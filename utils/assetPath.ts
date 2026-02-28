/**
 * Prepend the Vite base URL to asset paths
 * Handles both absolute and relative paths
 */
export function getAssetPath(path: string): string {
  if (!path) return path;

  // If it's an external URL, return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Get the base URL from Vite (defaults to '/' if not set)
  const baseUrl = import.meta.env.BASE_URL || '/';

  // If the path doesn't start with '/', prepend it
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // Combine base URL with the path, avoiding double slashes
  return baseUrl.endsWith('/')
    ? `${baseUrl}${normalizedPath.slice(1)}`
    : `${baseUrl}${normalizedPath}`;
}
