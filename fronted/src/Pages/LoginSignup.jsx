import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
         <h1>Sign Up</h1>
         <div className="loginsignup-fields">
          <input type="text" placeholder='Your Nmame'/>
          <input type="email" placeholder='Email Adress'/>
          <input type="password" placeholder='password' />
          </div>
          <button>Coutinue</button>
          <p className='loginsignup-login'>Already have an account?<span>Login here</span></p>
          <div className="loginsighup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>

          </div>
      </div>
      
    </div>
  )
}

export default LoginSignup;
