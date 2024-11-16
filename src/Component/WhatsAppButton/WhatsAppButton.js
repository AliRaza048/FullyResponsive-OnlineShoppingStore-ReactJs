import React from 'react';
import './WhatsAppButton.css';
import whatsappicon2 from '../Images/whatsappicon2.png'

const WhatsAppButton = () => {
  const whatsappNumber = "+923091416573";
  const message = encodeURIComponent("Hello, I Need Help?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-button" style={{ textDecoration: 'none'}}>
      <img src={whatsappicon2} alt="WhatsApp" className='box'/>
      <p style={{color:'green', marginTop:'-10px', marginRight:'2px', fontFamily:'cursive'}}>WhatsApp</p>
    </a>
  );
};

export default WhatsAppButton;
