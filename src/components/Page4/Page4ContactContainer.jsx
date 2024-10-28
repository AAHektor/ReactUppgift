import React from 'react'
import Page4Img1 from '../../assets/images/images-last/Group (2).svg'
import Page4Img2 from '../../assets/images/images-last/icon (1).svg'

const Page4ContactContainer = () => {
  return (
    <div className="contact-container">
        <div className="contact-card">
            <img src={Page4Img1} alt="" />
            <p>Still have questions?</p>
            <button className="button-card btn-card-1">Contact us<img src="images/images-last/Vectorblue.svg" alt="" /></button>
        </div>
        <div className="contact-card">
            <img src={Page4Img2} alt="" />
            <p>Don't like phone calls?</p>
            <button className="button-card btn-card-2">Contact us<img src="images/images-last/Vectorgreen.svg" alt="" /></button>
        </div>
    </div>
  )
}

export default Page4ContactContainer