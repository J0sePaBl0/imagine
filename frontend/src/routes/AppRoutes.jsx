// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Catalogo } from '../pages/Catalogo';
import { SignUp } from '../pages/SignUp';
import { LogIn } from '../pages/LogIn';
import { Layout } from '../layouts/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Route>

    
      <Route path="/login" element={<LogIn />} />
      <Route path="/signin" element={<SignUp />} />
    </Routes>
  );
};
export default AppRoutes