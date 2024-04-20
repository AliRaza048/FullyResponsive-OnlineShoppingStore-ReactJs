import React, {useState} from 'react'
import './Contact.css'

export default function Contact() {

  const [mobileNo, setMobileNo] = useState('');

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleInputNumberChange = (event) => {
    const value = event.target.value;
    const onlyNums = value.replace(/[^0-9]/g, '');
    setMobileNo(onlyNums);
  };

  const handleInputEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    setIsEmailValid(emailPattern.test(value) || value === '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fullName = event.target.fullname.value;
    const mobileNo = event.target.mobileno.value;
    const email = event.target.email.value;
    const message = event.target.Message.value;

    const yourWhatsAppNumber = '923091416573';
    const formattedMessage = `Full Name: ${fullName}\nEmail Address: ${email}\nmobile Number: ${mobileNo}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(formattedMessage)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
    <div className='contactpage'>
      <form onSubmit={handleSubmit}>
        <label> Enter Full Name
          <input type='text' name='fullname' placeholder='example' required/>
        </label>
      
        <label> Enter Mobile No. OR Whatsapp No.
          <input type='text' name='mobileno' placeholder='your mobile no or whatsapp no'  value={mobileNo} onChange={handleInputNumberChange} required/>
        </label>
        
        <label> Enter Email Address
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
        </label>

        <label> Write Message
          <textarea name='Message' placeholder='Message...' required className='textarea' />
          {/* <input type='text'  name='Message' placeholder='Message...' required style={{height:100}}/> */}
        </label>
      
        <button type="submit">Send</button>
      </form>
    </div>
    </>
  )
}
