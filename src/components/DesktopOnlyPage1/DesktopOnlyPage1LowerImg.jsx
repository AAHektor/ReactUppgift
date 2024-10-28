import React from 'react'
import Bigimg2 from '../../assets/images/images-page-4/lower-big.svg'
import Smallimg2 from '../../assets/images/images-page-4/lower-small1.svg'

const DesktopOnlyPage1LowerImg = () => {
  return (
    <div className="lower-images-container">
        <img className="big-image2" src={Bigimg2} alt="" />
        <img className="small-image2" src={Smallimg2} alt="" />
    </div>
  )
}

export default DesktopOnlyPage1LowerImg