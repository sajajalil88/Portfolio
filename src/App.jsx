
import styles from "./App.module.css"
import { Experience } from "./components/Experience/Experience"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"


function App() {

  return (
   <div className={styles.App}>
   <Navbar />
   <Hero />
   <Experience />
   </div>
  )
}

export default App
