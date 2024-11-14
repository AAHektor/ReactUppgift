import React from 'react'
import SiliconLogo from './SiliconLogo'
import DarkmodeToggle from './DarkmodeToggle'
import SignupButton from './SignupButton'
import HamburgerButton from './HamburgerButton'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

const Header = () => {

  const location = useLocation();
  
  const getHeaderBackgroundColor = () => {
    switch (location.pathname) {
      case '/':
        return 'var(--clr-navbar)'; 
      case '/contact':
        return 'var(--clr-contact-page1)'; 
      default:
        return '#ffff';
    }
  };

  return (
    <header id="header" style={{ backgroundColor: getHeaderBackgroundColor() }}>
      <div className='container'>
      <SiliconLogo/>

      <Navbar />

      <DarkmodeToggle />

      <SignupButton />

      <HamburgerButton />

      </div>

    </header>
  )
}

export default Header