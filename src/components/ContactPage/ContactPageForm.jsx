import React, { useState } from 'react'

const ContactPageForm = () => {

  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: ''})
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // tagit hjälp av ChatGPT
  const handleChange = (e) => {
    const { name, value } = e.target; 
    const fullNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    setFormData({...formData, [name]: value});
    if (value.trim() === '') {
        setErrors(prevErrors => ({
            ...prevErrors, 
            [name]: `The ${name === 'fullName' ? 'Full name' : name === 'email' ? 'Email address' : 'Specialist'} field is required.`
        }));
    } else if (name === 'fullName' && !fullNameRegex.test(value)) {
        setErrors(prevErrors => ({
            ...prevErrors,
            fullName: 'Full name can only contain letters, spaces, hyphens, and apostrophes.'
        }));
    } else if (name === 'email' && !emailRegex.test(value)) {
        setErrors(prevErrors => ({
            ...prevErrors,
            email: 'Invalid email format.'
        }));
    } else {
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    }
  };


  const handleOk = () => {
    setSubmitted(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}
    Object.keys(formData).forEach(field => {
      if (formData[field].trim() === '') {
        newErrors[field] = field === 'fullName' ? 'Full name is required.' : field === 'email' ? 'Email address is required.' : 'Specialist is required.';
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    console.log('Response:', res);

    if (res.ok) {
      setSubmitted(true);
      setFormData({ fullName: '', email: '', specialist: ''});
    }
  }

  if (submitted) {
    return (
      <div className="informationbox"> 
        <h3>Tack för att du väljer Silicon</h3>
        <p>Vi återkommer till dig så snart vi kan.</p>
        <button className='btn-green' onClick={handleOk}>OK</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-container">
        <h2>Get Online Consultation</h2>
        <div className="form">
            <label>Full name</label>
            <input type="text" name='fullName' placeholder='Name' value={formData.fullName} onChange={handleChange} required/>
            <span>{errors.fullName && errors.fullName}</span>
        </div>
        <div className="form">
            <label>Email address</label>
            <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
            <span>{errors.email && errors.email}</span>
        </div>
        <div className="form">
            <label>Specialist</label>
            <select id='options' name='specialist' value={formData.specialist} onChange={handleChange} required>
              <option value="" disabled>-- Select a specialist --</option>
              <option value="frontend-developer">Frontend-utvecklare</option>
              <option value="backend-developer">Backend-utvecklare</option>
              <option value="data-scientist">Data Scientist</option>
            </select>
            <span>{errors.specialist && errors.specialist}</span>
        </div>

        <button type='submit'><p>Make an appointment</p></button>
      </div>
    </form>
  )
}

export default ContactPageForm