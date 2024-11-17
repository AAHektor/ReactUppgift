import React from 'react'
import SiliconLogo from './SiliconLogo'
import DarkmodeToggle from './DarkmodeToggle'
import SignupButton from './SignupButton'
import HamburgerButton from './HamburgerButton'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import { useDarkMode } from '../DarkModeContext'

const Header = () => {

  const location = useLocation();
  const { isDarkMode } = useDarkMode();
  console.log('Dark Mode:', isDarkMode);
  
  const getHeaderBackgroundColor = () => {
    switch (location.pathname) {
      case '/':
        return isDarkMode ? 'var(--clr-dark-navbar)' : 'var(--clr-navbar)';
      case '/contact':
        return isDarkMode ? 'var(--clr-dark-contact-page1)' : 'var(--clr-contact-page1)';
      default:
        return isDarkMode ? '#333' : '#fff';
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