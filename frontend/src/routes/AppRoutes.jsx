import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Catalogo } from '../pages/Catalogo'
import { SignIn } from '../pages/SignIn'
import { LogIn } from '../pages/LogIn'

const AppRoutes = () => {

    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
      )
    }
export default AppRoutes