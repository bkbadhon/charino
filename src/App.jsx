import React from 'react';
import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';

function App() {
  const location = useLocation();

  // Check if the current path is /admin
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {/* Only show Navbar and Footer if NOT admin route */}
      {!isAdminRoute && <Navbar />}
      <Outlet />
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
