import React, { useContext, useState } from 'react';
import { ValidationContext } from '../ValidationContext';
import Page4Img1 from '../../assets/images/images-last/notification.svg';

const Page4NewsletterContainer = () => {
  const { validateEmail } = useContext(ValidationContext);

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [formVisible, setFormVisible] = useState(true);
  
  
  // Hjälp av ChatGPT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    

    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }
  
    console.log('Sending email to API:', email);
    try {
      const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      console.log('Response status:', response.status);
  
      if (response.ok) {
        const textResponse = await response.text();
        let responseData = {};
        
        if (textResponse) {
          try {
            responseData = JSON.parse(textResponse);
          } catch (jsonError) {
            console.error("Error parsing JSON:", jsonError);
          }
        }
  
        console.log('API Response:', responseData);
  

        setMessage('Thank you for subscribing!');
        setFormVisible(false);
        setEmail('');
      } else {
        const errorData = await response.json();
        console.log('Error response data:', errorData);
        setError(errorData.message || 'Something went wrong. Please try again.');
      }
  
    } catch (error) {
      console.error('Error caught:', error);
      setError('There was an error. Please try again later.');
    }
  };
  
  
  

  return (
    <div className="newsletter-container">
      <div className="bell-text-container">
        <img src={Page4Img1} alt="" />
        <h4 className="newsletter-text1">Subscribe to our <br /> newsletter</h4>
        <h4 className="newsletter-text2">Subscribe to our newsletter to stay <br /> informed about latest updates</h4>
      </div>

      {formVisible && (
        <form className="input-group" onSubmit={handleSubmit}>
          <svg className="icon-envelope" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.667 3.33337H3.33366C2.41449 3.33337 1.66699 4.08087 1.66699 5.00004V15C1.66699 15.9192 2.41449 16.6667 3.33366 16.6667H16.667C17.5862 16.6667 18.3337 15.9192 18.3337 15V5.00004C18.3337 4.08087 17.5862 3.33337 16.667 3.33337ZM16.667 5.00004V5.42587L10.0003 10.6117L3.33366 5.42671V5.00004H16.667ZM3.33366 15V7.53671L9.48866 12.3242C9.63866 12.4417 9.81949 12.5 10.0003 12.5C10.1812 12.5 10.362 12.4417 10.512 12.3242L16.667 7.53671L16.6687 15H3.33366Z" fill="currentColor" />
          </svg>

          <input
            id="input-newsletter"
            className="form-input"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="btn-subscribe" type="submit">Subscribe</button>
        </form>
      )}

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Page4NewsletterContainer;
