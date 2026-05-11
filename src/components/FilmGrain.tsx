/** Textura sutil tipo película — mezcla en overlay. */
export function FilmGrain() {
  return (
    <div className="film-grain" aria-hidden="true">
      <svg className="film-grain__svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <filter id="grain" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  )
}
