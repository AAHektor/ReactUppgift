import React from 'react'
import BigImg from '../../assets/images/images-page-4/upper-big.svg'
import SmallImg from '../../assets/images/images-page-4/upper-small.svg'

const DesktopOnlyPage1UpperImg = () => {
  return (
    <div className="upper-images-container">
        <img className="big-image" src={BigImg} alt="" />
        <img className="small-image" src={SmallImg} alt="" />
    </div>
  )
}

export default DesktopOnlyPage1UpperImg