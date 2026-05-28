/**
 * Same-origin paths for certificate images.
 * Dev: proxied via src/setupProxy.js
 * Production (Netlify): proxied via public/_redirects
 */
const ASSET_BASE = '/certificate-assets';

export function certificateAsset(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${ASSET_BASE}${normalized}`;
}
