import { profile } from '../data/profile'
import { Reveal } from '../components/Reveal'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <Reveal className="site-footer__reveal">
        <div className="site-footer__inner">
          <p className="site-footer__copy">© {year} {profile.name}</p>
          <p className="site-footer__stack" aria-hidden="true">
            React · Vite · motion · Lenis
          </p>
          <a
            className="btn btn--ghost btn--sm btn--shine"
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Perfil profesional
          </a>
        </div>
      </Reveal>
    </footer>
  )
}
