import React from 'react'
import DesktopOnlyPage2img1 from '../../assets/images/images-page-5/quotes.svg'
import DesktopOnlyPage2img2 from '../../assets/images/images-page-5/rating.svg'
import DesktopOnlyPage2img3 from '../../assets/images/images-page-5/avatar.svg'

import DesktopOnlyPage2img4 from '../../assets/images/images-page-5/quotes.svg'
import DesktopOnlyPage2img5 from '../../assets/images/images-page-5/rating2.svg'
import DesktopOnlyPage2img6 from '../../assets/images/images-page-5/albert.svg'

const DesktopOnlyPage2CardContainer = () => {
  return (
    <div className="card-container">
      <div className="card">
          <div className="card-icon">
              <img src={DesktopOnlyPage2img1} alt="" />
          </div>
          <div className="card-rating-icon">
              <img src={DesktopOnlyPage2img2} alt="" />
          </div>
          <div className="card-text">
              <p>Sit pretium aliquam tempor, orci dolor sed <br /> maecenas rutrum sagittis. Laoreet posuere <br />
                  rhoncus, egestas lacus, egestas justo <br /> aliquam vel. 
                  Nisi vitae lectus hac hendrerit. <br /> Montes justo turpis sit amet.</p>
          </div>
          <div className="avatar-text-container">
              <img src={DesktopOnlyPage2img3} alt="" />
              <div>
                  <h5>Fannie Summers</h5>
                  <p>Designer</p>
              </div>
          </div>
          

      </div>

      <div className="card">
          <div className="card-icon">
              <img src={DesktopOnlyPage2img4} alt="" />
          </div>
          <div className="card-rating-icon">
              <img src={DesktopOnlyPage2img5} alt="" />
          </div>
          <div className="card-text">
              <p>Sit pretium aliquam tempor, orci dolor sed <br /> maecenas rutrum sagittis. Laoreet posuere <br />
                  rhoncus, egestas lacus, egestas justo <br /> aliquam vel. 
                  Nisi vitae lectus hac hendrerit. <br /> Montes justo turpis sit amet.</p>
          </div>
          <div className={DesktopOnlyPage2img6}>
              <img src="images/images-page-5/albert.svg" alt="" />
              <div>
                  <h5>Albert Flores</h5>
                  <p>Designer</p>
              </div>
          </div>
        

      </div>

  </div>
  )
}

export default DesktopOnlyPage2CardContainer