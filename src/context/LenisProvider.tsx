import { useEffect, useState, type ReactNode } from 'react'
import Lenis from 'lenis'
import { LenisContext } from './lenisContext'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function LenisProvider({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion()
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    if (reduced) return

    document.documentElement.classList.add('lenis', 'lenis-smooth')

    const instance = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.85,
    })
    // Sincronizar instancia externa (Lenis) con React Context; no es derivable del render.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- bootstrap de Lenis
    setLenis(instance)

    let raf = 0
    const tick = (time: number) => {
      instance.raf(time)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      instance.destroy()
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
      setLenis(null)
    }
  }, [reduced])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}
