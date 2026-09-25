import About from './components/About/About.jsx'
import Hero from './components/Hero/Hero.jsx'
import Journey from './components/Journey/Journey.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import PersonalSide from './components/PersonalSide/PersonalSide.jsx'
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
      </main>
    </>
  )
}

export default App
