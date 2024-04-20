import React, {useState} from 'react'
import './Loginandregister.css'
import {BrowserRouter, Routes, Route, Link, NavLink, useLocation} from "react-router-dom";
import { CheckBox } from 'react-native-web'
// import loginformimage from '../Images/loginformimage.png'

export default function Login() {
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
        <div className='loginimageside'>
          {/* <p>Start For Free & Get Attractive Offers.</p> */}
        </div>
        <div className='formside'>
          
          <form>
            <h2>Get started.</h2>
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
            <NavLink to="/forgotpassword" className='navlink' style={{display:'flex', justifyContent:'end', marginRight:'19%', marginTop:'10px'}}>Forgot Password</NavLink>
            {/* <div style={{display:'flex'}}>
              <input 
                type="checkbox" 
                id="rememberme" 
              />
              <label>
                Remember me.
              </label>
            </div> */}
            
            <button type="submit">Login</button>
            <p>Don't have an account? <NavLink to="/register" className='navlink'>Register</NavLink></p>
          </form>
          
        </div>
      </div>
    </>
  )
}