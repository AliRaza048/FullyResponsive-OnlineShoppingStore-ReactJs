import React, {useEffect} from 'react'
import './TermsAndConditions.css'

export default function ContactInformation() {

   //Page Showing start from top
   useEffect(() => {
    window.scrollTo(0, 0);
}, []); 
//Page Showing start from top

    return (
      <>
      <div className='TAC'>
      <h1>Contact Information</h1>

      <h2>1. Business Address:</h2>
      <ul>
        <li>Labor Colony Joianwala More, District Sheikhupura, Province Punjab, Country Pakistan</li>
      </ul>

      <h2>2. Email Address:</h2>
      <ul>
        <li><a href="mailto:inpkonlineshop@gmail.com" target="_blank" rel="noopener noreferrer">inpkonlineshop@gmail.com</a></li>
      </ul>

      <h2>3. Phone and WhatsApp Number:</h2>
      <ul>
        <li>Phone Number: +92-326-5292748</li>
        <li>WhatsApp Number: <a href={"tel:+923265292748"}>+92-326-5292748</a> (Direct calls are welcomed, but contacting via WhatsApp is preferred.)</li>
      </ul>

      <h2>4. Social Media:</h2>
      <ul >
        <li>Facebook: <a href="https://www.facebook.com/inpkonlineshop" target="_blank" rel="noopener noreferrer">https://www.facebook.com/inpkonlineshop</a></li>
        <li>Instagram: <a href="https://www.instagram.com/inpkonlineshop?igsh=ZGNjOWZkYTE3MQ==" target="_blank" rel="noopener noreferrer">https://www.instagram.com/inpkonlineshop?igsh=ZGNjOWZkYTE3MQ==</a></li>
        <li>TikTok: <a href="https://www.tiktok.com/@inpkonlineshop?" target="_blank" rel="noopener noreferrer">https://www.tiktok.com/@inpkonlineshop?</a></li>
      </ul>

      <h2>5. Availability:</h2>
      <ul>
        <li>We are available 24/7 for your convenience. Feel free to reach out to us anytime.</li>
      </ul>

      <h2>6. Contact Form on Website:</h2>
      <ul>
        <li>
          Our website features a contact form for easy communication. Users can provide their full name, contact or WhatsApp number, email address, and leave a message. Clicking the "Send" button will redirect users to WhatsApp, allowing them to send messages or initiate contact easily.
        </li>
      </ul>

      <h2>7. Customer Support:</h2>
      <ul>
        <li>
          While we currently do not have a dedicated customer support team, Muhammad Ali Raza personally handles all inquiries. You can reach out via email, WhatsApp, or social media for any assistance or queries.
        </li>
      </ul>

      <p>Feel free to use any of the provided contact methods, and we look forward to assisting you.</p>
    </div>
      </>
    );
  }