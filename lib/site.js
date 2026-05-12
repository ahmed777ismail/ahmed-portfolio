export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ahmed-ismail.dev';

export function withBasePath(path) {
  if (!path.startsWith('/')) {
    return path;
  }

  return `${basePath}${path}`;
}
