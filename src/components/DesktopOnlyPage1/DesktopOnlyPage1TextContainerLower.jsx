import React from 'react'
import DesktopOnlyPage1Icon1 from '../../assets/images/images-page-4/credit-card.svg'
import DesktopOnlyPage1Icon2 from '../../assets/images/images-page-4/wallet.svg'
import DesktopOnlyPage1Icon3 from '../../assets/images/images-page-4/icon-r.svg'

const DesktopOnlyPage1TextContainerLower = () => {
  return (
    <div class="info-text-container-lower">
      <div class="p4-h2-container">
          <h2>Receive payment from <br /> international bank details</h2>
      </div>

      <div class="payments-container">
          <div class="icon-text-container">
              <div class="img-container">
                  <img src={DesktopOnlyPage1Icon1} alt="" />
              </div>
              <div>
                  <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
              </div>
          </div>
          <div class="icon-text-container">
              <div class="img-container">
                  <img src={DesktopOnlyPage1Icon2} alt="" />
              </div>
              <div>
                  <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
              </div>
          </div>
      </div>

      <button class="p4-button">Learn more <img src={DesktopOnlyPage1Icon3} alt="" /></button>
    </div>
  )
}

export default DesktopOnlyPage1TextContainerLower