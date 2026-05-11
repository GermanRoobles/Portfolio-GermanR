import { profile } from '../data/profile'
import { Reveal } from '../components/Reveal'

export function Certifications() {
  return (
    <section
      className="section section--surface"
      id="certificaciones"
      aria-labelledby="cert-title"
    >
      <div className="section__inner">
        <Reveal>
          <p className="section__eyebrow">Credenciales</p>
          <h2 id="cert-title" className="section__title">
            Certificaciones
          </h2>
        </Reveal>
        <ul className="cert-list">
          {profile.certifications.map((c, i) => (
            <li key={c.name}>
              <Reveal delay={i * 0.05} y={22}>
                <article className="cert-card glass-card glass-card--lift">
                  <h3 className="cert-card__name">{c.name}</h3>
                  <p className="cert-card__issuer">
                    {'issuerUrl' in c && c.issuerUrl ? (
                      <a href={c.issuerUrl} target="_blank" rel="noopener noreferrer">
                        {c.issuer}
                      </a>
                    ) : (
                      c.issuer
                    )}
                  </p>
                  {c.date ? <p className="cert-card__date">{c.date}</p> : null}
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
