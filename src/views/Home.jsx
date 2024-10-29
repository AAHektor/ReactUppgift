import React from 'react'

import DesktopOnlyPage1 from '../components/DesktopOnlyPage1/DesktopOnlyPage1'
import DesktopOnlyPage2 from '../components/DesktopOnlyPage2/DesktopOnlyPage2'
import Footer from '../components/Footer/Footer'
import MainPage from '../components/MainPage/MainPage'
import Page2 from '../components/Page2/Page2'
import Page3 from '../components/Page3/Page3'
import Page4 from '../components/Page4/Page4'

const Home = () => {
  return (
    <>
      <MainPage />
      <Page2 />
      <Page3 />
      <DesktopOnlyPage1 />
      <DesktopOnlyPage2 />
      <Page4 />
      <Footer />
    </>
  )
}

export default Home