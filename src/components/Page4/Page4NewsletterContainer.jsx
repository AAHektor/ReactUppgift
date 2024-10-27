import React from 'react'
import Page4Img1 from '../../assets/images/images-last/notification.svg'

const Page4NewsletterContainer = () => {
  return (
    <div class="newsletter-container">
        <div class="bell-text-container">
            <img src={Page4Img1} alt="" />
            <h4 class="newsletter-text1">Subscribe to our <br /> newsletter</h4>
            <h4 class="newsletter-text2">Subscribe to our newsletter to stay <br /> informed about latest updates</h4>
        </div>
        <div class="input-group">                     
            <svg class="icon-envelope" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.667 3.33337H3.33366C2.41449 3.33337 1.66699 4.08087 1.66699 5.00004V15C1.66699 15.9192 2.41449 16.6667 3.33366 16.6667H16.667C17.5862 16.6667 18.3337 15.9192 18.3337 15V5.00004C18.3337 4.08087 17.5862 3.33337 16.667 3.33337ZM16.667 5.00004V5.42587L10.0003 10.6117L3.33366 5.42671V5.00004H16.667ZM3.33366 15V7.53671L9.48866 12.3242C9.63866 12.4417 9.81949 12.5 10.0003 12.5C10.1812 12.5 10.362 12.4417 10.512 12.3242L16.667 7.53671L16.6687 15H3.33366Z" fill="currentColor"/>
            </svg>
                
            <input id="input-mobile-tablet" class="form-input" type="email" placeholder="Your email"/>
            <input id="input-desktop" class="form-input" type="email" placeholder="Your Email" />
            <button class="btn-subscribe">Subscribe</button>
        </div>
    </div>
  )
}

export default Page4NewsletterContainer