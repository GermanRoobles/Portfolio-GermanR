import { Award } from 'lucide-react'
import { profile, extraStack } from '../data/profile'
import { Reveal } from '../components/Reveal'
import { SkillGroupIcon } from './skillGroupIcons'

export function Skills() {
  return (
    <section className="section" id="habilidades" aria-labelledby="skills-title">
      <div className="section__inner">
        <Reveal>
          <p className="section__eyebrow">Capacidades</p>
          <div className="skills-heading">
            <span className="skills-heading__icon" aria-hidden="true">
              <Award className="skills-heading__svg" strokeWidth={2} />
            </span>
            <h2 id="skills-title" className="section__title skills-heading__title">
              Habilidades y áreas de expertise
            </h2>
          </div>
          {extraStack.length > 0 ? (
            <p className="section__lead section__lead--wide">
              Panorama técnico y operativo alineado con e-commerce. Las etiquetas siguientes complementan el listado principal.
            </p>
          ) : (
            <p className="section__lead section__lead--wide">
              Panorama técnico y operativo alineado con el rol e-commerce 360º descrito en esta página.
            </p>
          )}
        </Reveal>

        {extraStack.length > 0 ? (
          <Reveal delay={0.05} y={16}>
            <div className="extra-stack glass-card glass-card--inline">
              <span className="extra-stack__label">Stack complementario</span>
              <ul className="extra-stack__tags">
                {extraStack.map((t) => (
                  <li key={t} className="chip chip--accent">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}

        <ul className="skill-grid">
          {profile.skillGroups.map((group, i) => (
            <li key={group.title}>
              <Reveal delay={i * 0.04} y={28}>
                <article className="skill-card glass-card glass-card--lift">
                  <div className="skill-card__head">
                    <span className="skill-card__icon" aria-hidden="true">
                      <SkillGroupIcon name={group.icon} />
                    </span>
                    <h3 className="skill-card__title">{group.title}</h3>
                  </div>
                  <ul className="skill-card__list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
