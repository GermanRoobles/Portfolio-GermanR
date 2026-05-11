import { profile } from '../data/profile'
import { Reveal } from '../components/Reveal'

export function Role360() {
  const { role360 } = profile

  return (
    <section className="section" id="rol-360" aria-labelledby="role360-title">
      <div className="section__inner">
        <Reveal>
          <p className="section__eyebrow">Profundidad</p>
          <h2 id="role360-title" className="section__title">
            Rol 360º en e-commerce
          </h2>
          <p className="section__lead section__lead--wide role360-lead">{role360.lead}</p>
        </Reveal>

        <ol className="role360-pillars">
          {role360.pillars.map((pillar, i) => (
            <li key={pillar.title} className="role360-pillars__item">
              <Reveal delay={i * 0.07} y={28}>
                <article className="role360-card glass-card glass-card--lift">
                  <h3 className="role360-card__title">{pillar.title}</h3>
                  <ul className="role360-card__list">
                    {pillar.items.map((item, j) => (
                      <li key={`${pillar.title}-${j}`}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
