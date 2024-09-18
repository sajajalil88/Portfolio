
import styles from "./App.module.css"
import { Experience } from "./components/Experience/Experience"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { Skills } from "./components/Skills/Skills"


function App() {

  return (
   <div className={styles.App}>
   <Navbar />
   <Hero />
   <Skills />
   <Experience />
   <Projects />
   </div>
  )
}

export default App
