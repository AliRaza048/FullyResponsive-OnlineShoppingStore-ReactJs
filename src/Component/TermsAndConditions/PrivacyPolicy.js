import React, {useEffect} from 'react'
import './TermsAndConditions.css'

function PrivacyPolicy (){

   //Page Showing start from top
   useEffect(() => {
    window.scrollTo(0, 0);
}, []); 
//Page Showing start from top

    return (
      <>
         <div className='TAC'>
      <h1>Privacy Policy</h1>

      <p>
        <strong>Effective Date:</strong> 26/01/2024
      </p>

      <h2>1. Introduction:</h2>
      <p>
        Welcome to the INPK Online Shop! This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website. By accessing or using our services, you agree to the terms of this policy.
      </p>

      <h2>2. Information Collection:</h2>
      <ul>
        <li>
          <strong>Business Name:</strong> INPK Online Shop
        </li>
        <li>
          <strong>Business Address:</strong> Labour Colony Joianwala More, District Sheikhupura, Province Punjab, Country Pakistan
        </li>
      </ul>

      <h2>3. Contact Information:</h2>
      <ul>
        <li>
          Users can contact us via email: <a href="mailto:inpkonlineshop@gmail.com">inpkonlineshop@gmail.com</a>
        </li>
        <li>
          Users can contact us via WhatsApp: <a href="tel:+923265292748">+92-326-5292748</a>
        </li>
      </ul>

      <h2>4. User Registration:</h2>
      <ul>
        <li>
          When a user registers on our website, their username, email address, and registration timestamp are stored in the admin panel.
        </li>
        <li>
          User passwords are encrypted for security purposes.
        </li>
      </ul>

      <h2>5. Order Processing:</h2>
      <ul>
        <li>
          User details, including name, email, contact number, and WhatsApp number, are stored in the admin panel when a product is purchased.
        </li>
        <li>
          We offer a cash-on-delivery payment method to ensure user satisfaction.
        </li>
        <li>
          User details help in understanding product interests for better marketing.
        </li>
      </ul>

      <h2>6. Security Measures:</h2>
      <ul>
        <li>
          User passwords are encrypted to prevent unauthorized access.
        </li>
        <li>
          I will be used secure runtime database, ensuring user information is secure and hidden.
        </li>
      </ul>

      <h2>7. Use of Cookies:</h2>
      <p>
        Currently, we do not use cookies. Future features may include cookie usage.
      </p>

      <h2>8. Third-Party Disclosure:</h2>
      <p>
        We do not share user information with third parties. WhatsApp number is used for direct communication.
      </p>

      <h2>9. Communication:</h2>
      <ul>
        <li>
          Users can contact us through WhatsApp, Facebook, Instagram, and our website.
        </li>
        <li>
          WhatsApp number is used for product-related communication only.
        </li>
      </ul>

      <h2>10. Sale Messages:</h2>
      <ul>
        <li>
          Users may receive sale messages in the website header.
        </li>
        <li>
          Information about new products will be shared on our Facebook page, Instagram, and WhatsApp group.
        </li>
      </ul>

      <h2>11. Privacy Policy Changes:</h2>
      <p>
        Users will be notified of privacy policy changes in the website header and on social media.
      </p>
    </div>
      </>
    );
  }

export default PrivacyPolicy