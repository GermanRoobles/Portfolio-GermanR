import { profile } from '../data/profile'
import { Reveal } from '../components/Reveal'

export function Experience() {
  const { currentRole } = profile
  return (
    <section
      className="section section--surface"
      id="experiencia"
      aria-labelledby="exp-title"
    >
      <div className="section__inner">
        <Reveal>
          <p className="section__eyebrow">Trayectoria</p>
          <h2 id="exp-title" className="section__title">
            Experiencia profesional
          </h2>
        </Reveal>

        <Reveal delay={0.06} y={28}>
          <article className="timeline-card glass-card glass-card--lift">
            <div className="timeline-card__meta">
              <time dateTime="2025-03">{currentRole.period}</time>
            </div>
            <div className="timeline-card__body">
              <h3 className="timeline-card__title">{currentRole.title}</h3>
              <p className="timeline-card__company">
                <a href={currentRole.companyUrl} target="_blank" rel="noopener noreferrer">
                  {currentRole.company}
                </a>
              </p>
              <ul className="timeline-card__context">
                {currentRole.context.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="timeline-card__text">{currentRole.summary}</p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.1} y={16}>
          <p className="section__note">
            Referencias y ampliación de trayectoria disponibles en proceso de selección.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
