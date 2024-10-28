import React from 'react'
import Page3PhoneImg1 from '../../assets/images/images-page-3/iPhone 12 Pro-2.svg' 
import Page3PhoneImg2 from '../../assets/images/images-page-3/iPhone 12 Pro-1.svg' 
import Page3PhoneImg3 from '../../assets/images/images-page-3/iPhone 12 Pro.svg' 

import Page3PhoneImg4 from '../../assets/images/images-page-3/tablet-left.svg' 
import Page3PhoneImg5 from '../../assets/images/images-page-3/tablet-mid.svg' 
import Page3PhoneImg6 from '../../assets/images/images-page-3/tablet-right.svg' 

const Page3ImgPhones = () => {
  return (
    <div className="img-phones-container">
      <img id="left-phone" src={Page3PhoneImg1} alt="" />
      <img id="mid-phone" src={Page3PhoneImg2} alt="" />
      <img id="right-phone" src={Page3PhoneImg3} alt="" />

      <img id="tablet-left" src={Page3PhoneImg4} alt="" />
      <img id="tablet-mid" src={Page3PhoneImg5} alt="" />
      <img id="tablet-right" src={Page3PhoneImg6} alt="" />
    </div>
  )
}

export default Page3ImgPhones