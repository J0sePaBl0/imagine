// src/layouts/Layout.jsx
import { Outlet } from 'react-router-dom';  // Add this import
import { Navbar } from './Navbar';

export function Layout() {  // Remove `children` prop
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Outlet />  {/* This renders the matched child route */}
    </div>
  );
}