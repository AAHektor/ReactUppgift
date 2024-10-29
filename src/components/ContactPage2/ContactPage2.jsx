import React from 'react'
import ContactPage2Map from './ContactPage2Map'
import ContactPage2Medical from './ContactPage2Medical'

const ContactPage2 = () => {
  return (
    <section id="contact-page-2">
      <div className='container'>
      <ContactPage2Map />
      <ContactPage2Medical/>
      </div>
    </section>
  )
}

export default ContactPage2