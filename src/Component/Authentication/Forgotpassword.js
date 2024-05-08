import React, {useState} from 'react'
import './Forgotpassword.css'

export default function Forgotpassword() {
  
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
      <div className='ForgotPasswordPage'>
          <form>
            <h2>Get started.</h2>
            <label>Enter register email address </label>
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
            <button type="submit">Forgot Password</button>
          </form>
      </div>
    </>
  )
}