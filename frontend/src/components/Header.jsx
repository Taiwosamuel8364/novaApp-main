import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';
import '../styles.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated && location.pathname === '/login') {
      navigate('/trends', { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  return (
    <header className="header">
      <Navbar />
      <h1>MERN Stack Application</h1>
    </header>
  );
};

export default Header;
