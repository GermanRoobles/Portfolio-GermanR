import { useLayoutEffect } from 'react'
import { profile } from '../data/profile'
import { getPublicSiteUrl } from '../lib/siteUrl'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const sel = `meta[${attr}="${key}"]`
  let el = document.querySelector(sel) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

export function DocumentMeta() {
  useLayoutEffect(() => {
    const base = getPublicSiteUrl()
    const path = `${window.location.pathname}${window.location.search}`
    const canonical = `${base}${path === '' ? '/' : path}`

    document.title = `${profile.name} — Full stack y e-commerce 360º`

    upsertMeta('name', 'description', profile.seo.description)
    upsertLink('canonical', canonical)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', 'es_ES')
    upsertMeta('property', 'og:title', profile.seo.ogTitle)
    upsertMeta('property', 'og:description', profile.seo.description)
    upsertMeta('property', 'og:url', canonical)
    const ogImage = profile.seo.ogImageUrl?.trim()
    if (ogImage) {
      upsertMeta('property', 'og:image', ogImage)
    }

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', profile.seo.ogTitle)
    upsertMeta('name', 'twitter:description', profile.seo.description)
    if (ogImage) {
      upsertMeta('name', 'twitter:image', ogImage)
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      url: base || canonical,
      sameAs: [profile.linkedinUrl],
      jobTitle: profile.seo.jobTitle,
      description: profile.seo.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Rozas de Madrid',
        addressRegion: 'Comunidad de Madrid',
        addressCountry: 'ES',
      },
    }

    const typeId = 'jsonld-person'
    let script = document.getElementById(typeId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = typeId
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(jsonLd)
  }, [])

  return null
}
