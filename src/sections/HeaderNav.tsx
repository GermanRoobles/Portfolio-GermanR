import { useEffect, useState } from 'react'
import type Lenis from 'lenis'
import { profile } from '../data/profile'
import { useLenisInstance } from '../hooks/useLenisInstance'

export function HeaderNav() {
  const [solid, setSolid] = useState(false)
  const lenis = useLenisInstance()

  useEffect(() => {
    const update = (scrollY: number) => setSolid(scrollY > 16)

    if (lenis) {
      const handler = (instance: Lenis) => update(instance.scroll)
      update(lenis.scroll)
      const unsub = lenis.on('scroll', handler)
      return () => unsub()
    }

    const onScroll = () =>
      update(window.scrollY || document.documentElement.scrollTop || 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lenis])

  return (
    <header className={`site-header${solid ? ' site-header--solid' : ''}`}>
      <div className="site-header__inner">
        <a className="site-logo" href="#inicio">
          <span className="site-logo__mark" aria-hidden="true">
            GR
          </span>
          <span className="site-logo__text">{profile.name}</span>
        </a>
        <nav className="site-nav" aria-label="Secciones principales">
          <ul>
            {profile.nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn--primary site-header__cta btn--shine" href="#contacto">
          Contacto
        </a>
      </div>
    </header>
  )
}
