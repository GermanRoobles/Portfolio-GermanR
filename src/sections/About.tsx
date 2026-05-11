import { profile } from '../data/profile'
import { Reveal } from '../components/Reveal'

export function About() {
  const { aboutNarrative: a } = profile

  return (
    <section className="section section--surface" id="sobre-mi" aria-labelledby="about-title">
      <div className="section__inner">
        <Reveal>
          <p className="section__eyebrow">Introducción</p>
          <h2 id="about-title" className="section__title">
            Sobre mí
          </h2>
        </Reveal>

        <Reveal delay={0.05} y={28}>
          <div className="prose prose--wide">
            {a.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} y={24}>
          <h3 className="about-subtitle">{a.responsibilitiesHeading}</h3>
          <ul className="about-areas">
            {a.responsibilityAreas.map((area) => (
              <li key={area.label} className="about-areas__item glass-card glass-card--lift">
                <span className="about-areas__label">{area.label}</span>
                <span className="about-areas__text">{area.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} y={20}>
          <p className="prose prose--wide about-closing">{a.closing}</p>
        </Reveal>
      </div>
    </section>
  )
}
