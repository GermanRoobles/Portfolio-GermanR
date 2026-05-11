/** Capas de luz animadas (solo CSS). */
export function AuroraBackdrop() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora__blob aurora__blob--a" />
      <div className="aurora__blob aurora__blob--b" />
      <div className="aurora__blob aurora__blob--c" />
      <div className="aurora__vignette" />
    </div>
  )
}
