import { HeaderNav } from './sections/HeaderNav'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Role360 } from './sections/Role360'
import { Skills } from './sections/Skills'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Certifications } from './sections/Certifications'
import { Languages } from './sections/Languages'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { AuroraBackdrop } from './components/AuroraBackdrop'
import { FilmGrain } from './components/FilmGrain'
import { DocumentMeta } from './components/DocumentMeta'
import { LenisProvider } from './context/LenisProvider'

function App() {
  return (
    <LenisProvider>
      <DocumentMeta />
      <div className="layout">
        <div className="layout__ambient" aria-hidden="true">
          <AuroraBackdrop />
          <FilmGrain />
        </div>
        <HeaderNav />
        <main className="layout__main">
          <Hero />
          <About />
          <Role360 />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <Languages />
          <Contact />
        </main>
        <Footer />
      </div>
    </LenisProvider>
  )
}

export default App
