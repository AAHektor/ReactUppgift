import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const HamburgerButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  

  return (
    <div className="hamburger-menu-container">
      <button className="btn-hamburger-menu" onClick={toggleMenu}>
      <i className="fa-solid fa-bars"></i>
      </button>

      {isMenuOpen && (
        <>
        <div className="overlay" onClick={toggleMenu}></div>
        <div className='hamburger-dropdown'>
          <ul>
            <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
            <li><Link to="/#page-2" onClick={closeMenu}>FEATURES</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
            <li><Link to="/contact#contact-page-2" onClick={closeMenu}>ADDRESS</Link></li>
            <li><Link to="/#page-4" onClick={closeMenu}>FAQs</Link></li>
          </ul>
        </div>
        </>
      )}
    </div>
  )
}

export default HamburgerButton