import React from 'react'
import ContactPageHierarchy from './ContactPageHierarchy'
import ContactPageHeadline from './ContactPageHeadline'
import ContactPageCard1 from './ContactPageCard1'
import ContactPageForm from './ContactPageForm'

const ContactPage = () => {
  return (
    <section id="contact">
      <div className='container'>
        <ContactPageHierarchy />
        <ContactPageHeadline />
        <ContactPageCard1 />
        <ContactPageForm />
      </div>
    </section>
  )
}

export default ContactPage