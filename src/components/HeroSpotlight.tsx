import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function HeroSpotlight() {
  const reduced = usePrefersReducedMotion()
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduced) return
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    const el = hostRef.current
    if (!el) return

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top
      el.style.setProperty('--sx', `${x}px`)
      el.style.setProperty('--sy', `${y}px`)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduced])

  if (reduced) return null

  return <div ref={hostRef} className="hero-spotlight" aria-hidden="true" />
}
