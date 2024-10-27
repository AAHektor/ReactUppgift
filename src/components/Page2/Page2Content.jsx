import React from 'react'
import AppFeatureIcon1 from '../../assets/images/app-feature-icons/credit-card.svg'
import AppFeatureIcon2 from '../../assets/images/app-feature-icons/shield.svg'
import AppFeatureIcon3 from '../../assets/images/app-feature-icons/bars-graphic.svg'
import AppFeatureIcon4 from '../../assets/images/app-feature-icons/communication.svg'
import AppFeatureIcon5 from '../../assets/images/app-feature-icons/wallet.svg'
import AppFeatureIcon6 from '../../assets/images/app-feature-icons/happy.svg'

const Page2Content = () => {
  return (
    <div className="content">
                        
      <div className="icon-container">
          <div className="icon">
              <img src={AppFeatureIcon1} alt="" />
          </div>
          <div className="text">
              <h3>Easy Payments</h3> <br /> 
              <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
          </div>
      </div> 
      <div className="icon-container">
          <div className="icon">
              <img src={AppFeatureIcon2} alt="" />
          </div>
          <div className="text">
              <h3>Data Security</h3> 
              <br /> 
              <p>Augue pulvinar justo, fermentum
                  fames aliquam accumsan vestibulum
                  non.</p>
          </div>
      </div>
      <div className="icon-container">
          <div className="icon">
              <img src={AppFeatureIcon3} alt="" />
          </div>
          <div>
              <h3>Cost Statistics</h3> 
              <br /> 
              <p>Mattis urna ultricies non amet, purus
                  in auctor non. Odio vulputate ac nibh.</p>
          </div>
      </div>
      <div className="icon-container">
          <div className="icon">
              <img src={AppFeatureIcon4} alt="" />
          </div>
          <div>
              <h3>Support 24/7</h3> 
              <br /> 
              <p>A elementum, imperdiet enim, pretium
                  etiam facilisi in aenean quam mauris.</p>
          </div>
      </div> 

      <div className="icon-container">
          <div className="icon">
              <img src={AppFeatureIcon5} alt="" />
          </div>
          <div>
              <h3>Regular Cashback</h3> 
              <br /> 
              <p>Sit facilisis dolor arcu, fermentum
                  vestibulum arcu elementum imperdiet
                  eleifend.</p>
          </div>
      </div> 

      <div className="icon-container">
          <div className="icon">
              <img src={AppFeatureIcon6} alt="" /> 
          </div>
          <div>
              <h3>Top Standards</h3> 
              <br /> 
              <p>Faucibus cursus maecenas lorem
                  cursus nibh. Sociis sit risus id. Sit
                  facilisis dolor arcu.</p>
          </div>
    </div> 

</div>
  )
}

export default Page2Content