/** URL pública del sitio (sin barra final). Prioriza `VITE_PUBLIC_SITE_URL` en build; en cliente cae a `window.location.origin`. */
export function getPublicSiteUrl(): string {
  const raw = import.meta.env.VITE_PUBLIC_SITE_URL
  if (typeof raw === 'string' && raw.trim()) {
    return raw.replace(/\/$/, '')
  }
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`
  }
  return ''
}
