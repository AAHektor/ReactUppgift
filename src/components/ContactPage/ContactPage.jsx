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
        <div className='contactPage1-layout'>
          <div>
             <ContactPageHeadline />
             <ContactPageCard1 />
          </div>
          <div>
             <ContactPageForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage