import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Catalogo } from '../pages/Catalogo'
import { SignUp } from '../pages/SignUp'
import { LogIn } from '../pages/LogIn'

const AppRoutes = () => {

    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/signin" element={<SignUp/>} />
        </Routes>
      )
    }
export default AppRoutes