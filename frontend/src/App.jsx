import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Landing from './components/Landing.jsx';
import Login from './components/Login';
import Signup from './components/Signup';
import Trends from './components/Trends';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/api/auth/login" element={<Login />} />
        <Route path="/api/auth/signup" element={<Signup />} />
        <Route 
          path="/api/trends" 
          element={
            <PrivateRoute>
              <Trends />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
