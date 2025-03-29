export const getAssetPath = (path: string): string => {
  // Get the base URL from package.json's homepage or default to ''
  const baseUrl = process.env.PUBLIC_URL || '';
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}/${cleanPath}`;
};
