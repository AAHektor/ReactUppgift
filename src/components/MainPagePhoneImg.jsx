import React from 'react'
import MainPagePhoneImages from '../assets/images/phone-back.svg'
import MainPagePhoneImages2 from '../assets/images/phone-front.svg'

const MainPagePhoneImg = () => {
  return (
    <div className="images">
                    <img className="img-back" src={MainPagePhoneImages} />
                    <img className="img-front" src={MainPagePhoneImages2} />
                </div>
  )
}

export default MainPagePhoneImg