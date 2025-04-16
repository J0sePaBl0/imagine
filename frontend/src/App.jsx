import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { Layout } from './layouts/Layout'
import './App.css'

export function App() {

  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
