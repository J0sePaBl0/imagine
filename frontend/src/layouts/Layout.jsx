// src/layouts/Layout.jsx
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function Layout() {  
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Outlet />  
    </div>
  );
}