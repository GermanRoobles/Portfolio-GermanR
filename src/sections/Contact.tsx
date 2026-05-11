import { profile } from '../data/profile'
import { Reveal } from '../components/Reveal'

export function Contact() {
  const { contact } = profile
  const email = contact.email?.trim()

  return (
    <section className="section section--surface" id="contacto" aria-labelledby="contact-title">
      <div className="section__inner section__inner--narrow">
        <Reveal>
          <p className="section__eyebrow">Siguiente paso</p>
          <h2 id="contact-title" className="section__title">
            {contact.title}
          </h2>
          <p className="section__lead">{contact.lead}</p>
        </Reveal>

        <Reveal delay={0.06} y={20}>
          <div className="contact-actions glass-card glass-card--inline">
            {email ? (
              <a className="btn btn--primary btn--lg btn--shine" href={`mailto:${email}`}>
                Escribir por correo
              </a>
            ) : null}
            <a
              className={`btn btn--ghost btn--lg${email ? '' : ' btn--shine'}`}
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Perfil profesional
            </a>
          </div>

          {import.meta.env.DEV && !email ? (
            <p className="contact-hint">
              En producción, define <code className="inline-code">contact.email</code> en{' '}
              <code className="inline-code">profile.ts</code> para mostrar el botón de correo.
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}
