
import styles from "./App.module.css"
import { Award } from "./components/Awards/Award"
import { Contact } from "./components/Contact/Contact"
import { Education } from "./components/Education/Education"
import { Experience } from "./components/Experience/Experience"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { Skills } from "./components/Skills/Skills"


function App() {

  return (
   <div className={styles.App}>
   <Navbar/>
   <Hero/>
   <Experience />
   <Skills/>
   <Projects/>
   <Education/>
   <Contact/>
   </div>
  )
}

export default App
