import { profile } from '../data/profile'
import { Reveal } from '../components/Reveal'

export function Languages() {
  return (
    <section className="section" id="idiomas" aria-labelledby="lang-title">
      <div className="section__inner section__inner--narrow">
        <Reveal>
          <p className="section__eyebrow">Comunicación</p>
          <h2 id="lang-title" className="section__title">
            Idiomas
          </h2>
        </Reveal>
        <Reveal delay={0.06} y={20}>
          <ul className="lang-list glass-card">
            {profile.languages.map((lang) => (
              <li key={lang.name} className="lang-row">
                <span className="lang-row__name">{lang.name}</span>
                <span className="lang-row__level">{lang.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
