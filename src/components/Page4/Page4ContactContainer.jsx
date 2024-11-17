import React from 'react'
import Page4Img1 from '../../assets/images/images-last/Group (2).svg'
import Page4Img2 from '../../assets/images/images-last/icon (1).svg'
import { Link } from 'react-router-dom'

const Page4ContactContainer = () => {
  return (
    <div className="contact-container">
        <div className="contact-card">
            <img src={Page4Img1} alt="" />
            <p>Still have questions?</p>
            <Link to="/contact">
            <button className="button-card btn-card-1">Contact us<img src="images/images-last/Vectorblue.svg" alt="" /></button>
            </Link>
        </div>
        <div className="contact-card">
            <img src={Page4Img2} alt="" />
            <p>Don't like phone calls?</p>
            <Link to="/contact">
            <button className="button-card btn-card-2">Contact us<img src="images/images-last/Vectorgreen.svg" alt="" /></button>
            </Link>
        </div>
    </div>
  )
}

export default Page4ContactContainer