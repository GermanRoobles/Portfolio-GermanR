import { profile } from '../data/profile'
import { Reveal } from '../components/Reveal'

export function Education() {
  return (
    <section className="section" id="formacion" aria-labelledby="edu-title">
      <div className="section__inner">
        <Reveal>
          <p className="section__eyebrow">Base formativa</p>
          <h2 id="edu-title" className="section__title">
            Formación académica y bootcamps
          </h2>
        </Reveal>
        <ul className="edu-list">
          {profile.education.map((edu, i) => (
            <li key={edu.school + edu.title}>
              <Reveal delay={i * 0.05} y={24}>
                <article className="edu-card glass-card glass-card--lift">
                  <div className="edu-card__top">
                    <h3 className="edu-card__title">{edu.title}</h3>
                    <p className="edu-card__school">
                      {'schoolUrl' in edu && edu.schoolUrl ? (
                        <a href={edu.schoolUrl} target="_blank" rel="noopener noreferrer">
                          {edu.school}
                        </a>
                      ) : (
                        edu.school
                      )}
                    </p>
                    <p className="edu-card__period">{edu.period}</p>
                  </div>
                  {'highlights' in edu && edu.highlights && (
                    <ul className="edu-card__tags">
                      {edu.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
