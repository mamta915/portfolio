
import styles from './App.module.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experince from './components/Experience/Experince'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'

function App() {
  

  return (
    <div className={styles.app}>
    <Navbar  />
    <Hero />
    <About />
    <Experince />
    <Projects />
    <Contact />
        </div>
  )
}

export default App
