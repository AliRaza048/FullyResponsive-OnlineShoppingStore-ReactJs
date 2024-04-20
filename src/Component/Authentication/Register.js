import React, {useState} from 'react'
import './Loginandregister.css'
import {BrowserRouter, Routes, Route, Link, NavLink, useLocation} from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleInputEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    setIsEmailValid(emailPattern.test(value) || value === '');
  };
  return (
    <>
      <div className='Background'>

        <div className='formside'>
          <form>

            <h2>Get started.</h2>

            <label> Username </label>
            <div class="wrapper">
            <i class="ri-user-3-line"></i>
              <input
              type='text' 
              name='username' 
              placeholder='example' 
              required
              />
            </div>

            <label> Email address </label>
            <div class="wrapper">
              <i class="ri-mail-line"></i>
              <input type='text'  name='email' placeholder='example@gmail.com' value={email} onChange={handleInputEmailChange} required/>
          {!isEmailValid && email !== '' && (
            <div style={{ color: 'red', fontSize:'15px' }}>
              Email wrong formatting
            </div>
          )}
          {isEmailValid && email !== '' && (
          <div style={{ color: 'green', fontSize: '15px' }}>
            Excellent
          </div>
        )}
            </div>
            
            <label> Password </label>
            <div class="wrapper">
            <i class="ri-lock-line"></i>
            <input 
              type='text' 
              name='password' 
              placeholder='your password' 
              required
            />
            </div>

            <div style={{display:'flex'}}>
              <input 
                type="checkbox" 
                id="agreeTerms" 
                required
                style={{marginTop:'15px'}}
              />
              <label className='terms-pri'>
                I agree to the platform's <Link to="/termsofservice" className='navlink'>Terms of Service</Link> and <Link to="/privcypolicy" className='navlink'>Privcy policy</Link>.
              </label>
            </div>

            <button type="submit" style={{marginTop:'1.5rem'}}>Register</button>

            <p>Already have an account? <NavLink to="/login" className='navlink'>Login</NavLink></p>

          </form>
        </div>

        <div className='registerimageside'>
          {/* <p>Start For Free & Get Attractive Offers.</p> */}
        </div>

      </div>
    </>
  )
}