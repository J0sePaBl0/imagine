import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Banner } from './components/Banner'
import { Navbar } from './components/Navbar'

import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <div class="xl-64">
      <Navbar />
      <Banner />
    </div>
  </>
  )
}

export default App
