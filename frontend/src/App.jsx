import { Banner } from './components/Banner'
import { Navbar } from './components/Navbar'
import { GoalsSection } from './components/GoalsSection'
import { AboutSection } from './components/AboutSection'
import './App.css'

export function App() {

  return (
  <>
   <div class="flex flex-col justify-center items-center">
      <Navbar />
      <Banner />
      <GoalsSection />
      <AboutSection />
    </div>
  </>
  )
}

export default App
