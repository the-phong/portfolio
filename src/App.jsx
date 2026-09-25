import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import FutureDirection from './components/FutureDirection/FutureDirection.jsx'
import Hero from './components/Hero/Hero.jsx'
import Journey from './components/Journey/Journey.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import PersonalSide from './components/PersonalSide/PersonalSide.jsx'
import Projects from './components/Projects/Projects.jsx'
import Skills from './components/Skills/Skills.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <PersonalSide />
        <Journey />
        <Projects />
        <FutureDirection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
