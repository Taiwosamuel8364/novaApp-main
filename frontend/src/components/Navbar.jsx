import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="/CareerNova2.svg"
          alt="CareerNova Logo"
          className="logo-image"
          onError={(e) => {
            console.error('Logo failed to load');
            e.target.src = '';
            e.target.alt = 'MERN App';
          }}
        />
        <div className="logoText">
          <span className="career">Career</span>
          <span className="nova">Nova</span>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <ul className="nav-links">
        <li><a className="nav-link" href="/">Home</a></li>
        <li><a className="nav-link" href="/welcome">Welcome</a></li>
        <li><a className="nav-link" href="#">About</a></li>
      </ul>
      
      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
        <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
        <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
      </button>
      
      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a className="nav-link" href="/" onClick={toggleMobileMenu}>Home</a></li>
          <li><a className="nav-link" href="/welcome" onClick={toggleMobileMenu}>Welcome</a></li>
          <li><a className="nav-link" href="#" onClick={toggleMobileMenu}>About</a></li>
        </ul>
        <button className="create-account-btn mobile-cta">Create Account</button>
      </div>
      
      <button className="create-account-btn desktop-cta">Create Account</button>
    </nav>
  );
};

export default Navbar;
