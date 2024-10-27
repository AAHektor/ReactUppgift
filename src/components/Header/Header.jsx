import React from 'react'
import SiliconLogo from './SiliconLogo'
import DarkmodeToggle from './DarkmodeToggle'
import SignupButton from './SignupButton'
import HamburgerButton from './HamburgerButton'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
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