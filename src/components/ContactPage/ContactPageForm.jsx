import React from 'react'

const ContactPageForm = () => {
  return (
      <div class="form-container">
        <h2>Get Online Consultation</h2>
        <div class="form">
            <label>Full name</label>
            <input type="text" />
        </div>
        <div class="form">
            <label>Email address</label>
            <input type="text" />
        </div>
        <div class="form">
            <label>Specialist</label>
            <input type="text" />
        </div>

        <button><p>Make an appointment</p></button>
      </div>
  )
}

export default ContactPageForm