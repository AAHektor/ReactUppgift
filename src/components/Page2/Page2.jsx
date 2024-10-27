import React from 'react'
import Brands from './Page2Brands'
import Page2VisaPhoneImg from './Page2VisaPhoneImg'
import Page2AppFeatures from './Page2AppFeatures'
import Page2Content from './Page2Content'

const Page2 = () => {
  return (
    <section id="page-2">
      <div className='container'>
        <Brands />
        <Page2VisaPhoneImg />
        <Page2AppFeatures />
        <Page2Content />
      </div>
    </section>
  )
}

export default Page2