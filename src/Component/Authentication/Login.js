import React, {useState} from 'react'
import './Loginandregister.css'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase/firebase";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const from = state?.from || '/';

  const handleInputEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    setIsEmailValid(emailPattern.test(value) || value === '');
  };

  const handleInputPasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordError(''); // Reset password error when user modifies the password
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setEmailError('');
    setPasswordError('');
  
    if (!email || !password) {
      if (!email) setEmailError('Please enter your email.');
      if (!password) setPasswordError('Please enter your password.');
      return;
    }
  
    if (!isEmailValid) {
      setEmailError('Email wrong formatting');
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert('Login Successfully.');
      handleSuccessfulLogin(); 
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        alert(`Invalid credentials. ${error.message}`);
      } else {
        // Generic error handling for other types of errors
        alert(`Invalid credentials. ${error.message}`);
      }
    }
  };

  const handleSuccessfulLogin = () => {
    // Check if the redirect state exists, and use it; otherwise, use a default path
    // const from = location.state?.from || '/defaultpath';
    navigate(from); // Redirect user after successful login
  };


  return (
    <>
      <div className='Background'>
        <div className='loginimageside'>
        </div>
        <div className='formside'>
          
          <form onSubmit={handleLogin}>
            <h2>Get started.</h2>
            <label> Email address </label>
            <div class="wrapper">
              <i class="ri-mail-line"></i>
              <input type='text'  
              name='email' 
              placeholder='example@gmail.com' 
              value={email} 
              onChange={handleInputEmailChange} 
              required/>
              {emailError && (
                <div style={{ color: 'red', fontSize: '15px' }}>
                  {emailError}
                </div>
              )}
            </div>
            
            <label> Password </label>
            <div class="wrapper">
            <i class="ri-lock-line"></i>
            <input 
              type='password' 
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
            <NavLink to="/forgotpassword" className='navlink' style={{display:'flex', justifyContent:'end', marginRight:'19%', marginTop:'10px'}}>Forgot Password</NavLink>

            <button type="submit">Login</button>
            <p>Don't have an account? <NavLink to="/register" className='navlink'>Register</NavLink></p>
          </form>
          
        </div>
      </div>
    </>
  )
}