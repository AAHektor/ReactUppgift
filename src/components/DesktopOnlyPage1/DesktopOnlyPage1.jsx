import React from 'react'
import DesktopOnlyPage1TextContainer from './DesktopOnlyPage1TextContainer'
import DesktopOnlyPage1UpperImg from './DesktopOnlyPage1UpperImg'
import DesktopOnlyPage1LowerImg from './DesktopOnlyPage1LowerImg'
import DesktopOnlyPage1TextContainerLower from './DesktopOnlyPage1TextContainerLower'

const DesktopOnlyPage1 = () => {
  return (
    <section id="desktop-only-1">
      <div className='container'>
      <DesktopOnlyPage1TextContainer />
      <DesktopOnlyPage1UpperImg />
      <DesktopOnlyPage1LowerImg />
      <DesktopOnlyPage1TextContainerLower />
      </div>
    </section>
  )
}

export default DesktopOnlyPage1