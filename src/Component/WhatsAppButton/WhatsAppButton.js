import React from 'react';
import './WhatsAppButton.css';
// import whatsappicon1 from '../Images/whatsappicon1.png'
import whatsappicon2 from '../Images/whatsappicon2.png'

const WhatsAppButton = () => {
  const whatsappNumber = "+923265292748";
  // const whatsappNumber = "923091416573";
  const message = encodeURIComponent("Hello, how can i help you?");

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-button" style={{ textDecoration: 'none'}}>
      {/* <i class="ri-whatsapp-fill" style={{ fontSize: '50px', width: '50px', height: '50px', color:'#19b753',marginLeft:'15px'}}></i> */}
      <img src={whatsappicon2} alt="WhatsApp" className='box'/>
      <p style={{color:'green', marginTop:'-10px', marginRight:'2px', fontFamily:'cursive'}}>WhatsApp</p>
    </a>
  );
};

export default WhatsAppButton;
