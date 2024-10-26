import React from 'react'
import SignupIcon from '../assets/images/signinup-icon.svg'

const SignupButton = () => {
  return (
    
    <a id="auth-signin" href="#" class="btn-primary">
        <div>
            <img src={SignupIcon} />
            <span>Sign in / up</span>
        </div>
    </a>
    
  )
}

export default SignupButton