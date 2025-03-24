import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Banner } from './components/Banner'
import { Navbar } from './components/Navbar'
import { GoalsSection } from './components/GoalsSection'
import { AboutSection } from './components/AboutSection'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

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
