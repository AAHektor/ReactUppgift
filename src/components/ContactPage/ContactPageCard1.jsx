import React from 'react'
import ContactPageIcon1 from '../../assets/images-contact/bx-envelope.svg'
import ContactPageIcon2 from '../../assets/images-contact/Vectorbtn.svg'
import ContactPageIcon3 from '../../assets/images-contact/add-group.svg'
import ContactPageIcon4 from '../../assets/images-contact/Vectorbtn.svg'

const ContactPageCard1 = () => {
  return (

    <>
    <div class="contacting-card">
        <div class="icon-bg">
            <img src={ContactPageIcon1} alt=""/>
        </div>
        <div class="contact-gap">
            <h4>Email us</h4>
            <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
            <button class="btn-msg">Leave a message<img src={ContactPageIcon2} alt=""/></button>
        </div>
    </div>

    <div class="contacting-card">
    <div class="icon-bg">
        <img src={ContactPageIcon3} alt=""/>
    </div>
    <div class="contact-gap">
        <h4>Careers</h4>
        <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
        <button class="btn-msg">Send an application<img src={ContactPageIcon4} alt="" /></button>
    </div>
    </div>  
    </>
  )
}

export default ContactPageCard1