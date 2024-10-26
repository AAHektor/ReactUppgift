import React from 'react'
import Headline from './Headline'
import MainPageContent from './MainPageContent'
import MainPagePhoneImg from './MainPagePhoneImg'

const MainPage = () => {
  return (
    <main>
      <section id="hero">
        <div className='container'>
          <Headline />
          <MainPageContent />
          <MainPagePhoneImg />
        </div>
      </section>
    </main>
  )
}

export default MainPage