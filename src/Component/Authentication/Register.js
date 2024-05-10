import React, {useState} from 'react'
import './Loginandregister.css'
import {BrowserRouter, Routes, Route, Link, NavLink, useLocation, useNavigate  } from "react-router-dom";
import { auth } from "../firebase/firebase";  // Adjust the path as necessary
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();
  

  const handleInputEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    setIsEmailValid(emailPattern.test(value) || value === '');
  };

  const handleInputPasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError('Your password is less than 8 characters. Please set a password greater than 8 characters.');
    } else {
      setPasswordError('');
    }
  };
  const handleRegister = async (event) => {
    event.preventDefault();
    if (isEmailValid && email && password.length  >= 8) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert('Registered Successfully.');
        navigate('/login');
        console.log('User registered:', userCredential);
        // Redirect user to dashboard or another page
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
      }
        console.error('Error registering user:', error.message);
        // Show an error message to the user
      }
    }
  };
  

  return (
    <>
      <div className='Background'>

        <div className='formside'>
          <form onSubmit={handleRegister}>

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
              onChange={handleInputPasswordChange}
              required
            />
            {passwordError && (
                <div style={{ color: 'red', fontSize: '15px' }}>
                  {passwordError}
                </div>
              )}
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