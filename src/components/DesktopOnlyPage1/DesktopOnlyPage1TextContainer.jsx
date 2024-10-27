import React from 'react'
import DesktopOnlyImg1 from '../../assets/images/images-page-4/bx-check-circle.svg'

const DesktopOnlyPage1TextContainer = () => {
  return (
    <div class="info-text-container">
                    <h2>Make your money <br /> transfer simple and clear</h2>
                    <ul>
                        <li><img src={DesktopOnlyImg1} alt="" /> <span>Banking transactions are free for you</span></li>
                        <li><img src={DesktopOnlyImg1} alt="" /><span>No monthly cash commission</span></li>
                        <li><img src={DesktopOnlyImg1} alt="" /><span>Manage payments and transactions online</span></li>
                    </ul>
                    <button class="p4-button">Learn more <img src="images/images-page-4/icon-r.svg" alt="" /></button>
                </div>
  )
}

export default DesktopOnlyPage1TextContainer