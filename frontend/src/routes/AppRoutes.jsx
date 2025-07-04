// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Catalogo } from '../pages/Catalogo';
import { UserFormsLayout } from '../pages/UserFormsLayout';
import { Layout } from '../layouts/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Route>
      <Route path="/userForms" element={<UserFormsLayout />} />
    </Routes>
  );
};
export default AppRoutes