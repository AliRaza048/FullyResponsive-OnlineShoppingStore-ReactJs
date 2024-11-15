import React, {useState} from 'react'
import './Checkout.css'
import {BrowserRouter, Routes, Route, Link, NavLink, useLocation} from "react-router-dom";

export default function Checkout() {
    const [contactNo, setContactNo] = useState('');
    const [whatsappNo, setWhatsappNo] = useState('');

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
  
    const handleInputMobileNumberChange = (event) => {
      const value = event.target.value;
      const onlyNums = value.replace(/[^0-9]/g, '');
      setContactNo(onlyNums);
    };
    const handleInputWhatsappNumberChange = (event) => {
        const value = event.target.value;
        const onlyNums = value.replace(/[^0-9]/g, '');
        setWhatsappNo(onlyNums);
      };
  
    const handleInputEmailChange = (event) => {
      const value = event.target.value;
      setEmail(value);
      const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      setIsEmailValid(emailPattern.test(value) || value === '');
    };
  return (
    <>
      <div className='background'>

        <div className='checkoutformside'>
          <form>

            <h2>🥰shopit🥰</h2>

            <label> Full name </label>
            <div class="wrapper">
            <i class="ri-user-3-line"></i>
              <input
              type='text' 
              name='fullName' 
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

            <label> Contact no. </label>
            <div class="wrapper">
            <i class="ri-smartphone-line"></i>
            <input type='text' name='contactNo' placeholder='your contact no'  value={contactNo} onChange={handleInputMobileNumberChange} required/>
            </div>

            <label> Whatsapp no. </label>
            <div class="wrapper">
            <i class="ri-whatsapp-line"></i>
            <input type='text' name='whatsappNo' placeholder='your whatsapp no'  value={whatsappNo} onChange={handleInputWhatsappNumberChange} required/>
            </div>

            <label> Shipping address </label>
            <div class="wrapper">
            <i class="ri-home-heart-line"></i>
            <input 
              type='text' 
              name='shippingAddress' 
              placeholder='shipping address' 
              required
            />
            </div>

            <div style={{display:'flex'}}>
              <input 
                type="checkbox" 
                id="freeShip"
                checked={true} 
                style={{marginTop:'15px'}}
              />
              <label style={{marginLeft:'10px'}}>
              <i class="ri-bus-2-line"></i> Free shipping 
              </label>
            </div>

            <div style={{display:'flex'}}>
              <input 
                type="checkbox" 
                id="cod" 
                checked={true}
                style={{marginTop:'15px'}}
              />
              <label style={{marginLeft:'10px'}}>
              <i class="ri-shake-hands-line"></i> Cash on delivery
              </label>
            </div>

            <button type="submit" style={{marginTop:'1.5rem'}}>CheckOut</button>

          </form>
        </div>

        <div className='imageside'>
          {/* <p>Start For Free & Get Attractive Offers.</p> */}
        </div>

      </div>
    </>
  )
}