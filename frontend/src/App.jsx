import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Banner } from './components/Banner'
import { Navbar } from './components/Navbar'
import { GoalsSection } from './components/GoalsSection'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <div class="xl-64">
      <Navbar />
      <Banner />
      <GoalsSection />
    </div>
  </>
  )
}

export default App
