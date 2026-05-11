import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { HeroSpotlight } from '../components/HeroSpotlight'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export function Hero() {
  const reduced = usePrefersReducedMotion()
  const variants = reduced ? undefined : container
  const itemVariants = reduced ? undefined : item

  return (
    <section className="hero hero--premium" id="inicio" aria-labelledby="hero-title">
      <HeroSpotlight />
      <div className="hero__mesh" aria-hidden="true" />
      <div className="hero__glow hero__glow--ring" aria-hidden="true" />

      <div className="hero__content">
        <motion.div
          className="hero__motion"
          variants={variants}
          initial={reduced ? false : 'hidden'}
          animate={reduced ? undefined : 'show'}
        >
          <motion.p className="hero__eyebrow" variants={itemVariants}>
            Web profesional
          </motion.p>
          <motion.h1 id="hero-title" className="hero__title" variants={itemVariants}>
            <span className="hero__title-line">{profile.name.split(' ')[0]}</span>{' '}
            <span className="hero__title-line hero__title-line--grad">
              {profile.name.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>
          <motion.p className="hero__headline" variants={itemVariants}>
            {profile.headline}
          </motion.p>
          <motion.p className="hero__location" variants={itemVariants}>
            <span className="hero__dot" aria-hidden="true" />
            {profile.location}
          </motion.p>
          <motion.p className="hero__tagline" variants={itemVariants}>
            {profile.tagline}
          </motion.p>

          <motion.ul
            className="hero__bento hero__bento--single"
            variants={itemVariants}
            aria-label="Resumen de enfoque profesional"
          >
            <li className="hero__stat hero__stat--solo glass-card">
              <span className="hero__stat-label hero__stat-label--top">Enfoque</span>
              <span className="hero__stat-quote">{profile.heroSummaryLine}</span>
            </li>
          </motion.ul>

          <motion.div className="hero__actions" variants={itemVariants}>
            <a className="btn btn--primary btn--lg btn--shine" href="#contacto">
              Contacto
            </a>
            <a className="btn btn--ghost btn--lg" href="#rol-360">
              Ver rol 360º
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
