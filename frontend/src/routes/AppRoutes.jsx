// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Catalogo } from '../pages/Catalogo';
import { Paint } from '../pages/Paint';
import { SignUp } from  '../pages/SignUp';
import { Login } from  '../pages/Login';
import { Layout } from '../layouts/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/paints/:id" element={<Paint />} />
      </Route>
      <Route path="/Signup" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};
export default AppRoutes