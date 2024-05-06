import React from 'react';
import './WhatsAppButton.css';
// import whatsappicon1 from '../Images/whatsappicon1.png'
import whatsappicon2 from '../Images/whatsappicon2.png'

const WhatsAppButton = () => {
  const whatsappNumber = "+923265292748";
  const message = encodeURIComponent("Hello, how can i help you?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

   // Base64 encoding of the WhatsApp number
  //  const encodedWhatsAppNumber = btoa("+923265292748");
  //  const message = encodeURIComponent("");
  //  const whatsappUrl = `https://wa.me/${atob(encodedWhatsAppNumber)}?text=${message}`;
   

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-button" style={{ textDecoration: 'none'}}>
      {/* <i class="ri-whatsapp-fill" style={{ fontSize: '50px', width: '50px', height: '50px', color:'#19b753',marginLeft:'15px'}}></i> */}
      <img src={whatsappicon2} alt="WhatsApp" className='box'/>
      <p style={{color:'green', marginTop:'-10px', marginRight:'2px', fontFamily:'cursive'}}>WhatsApp</p>
    </a>
  );
};

export default WhatsAppButton;





// const WhatsAppButton = () => {
//   const message = encodeURIComponent("Hello, how can i help you?");

//   // Function to handle the redirection with user confirmation
//   const handleWhatsAppRedirect = () => {
//       if (window.confirm("You will be redirected to WhatsApp to chat with our support team. Press OK to continue.")) {
//           window.open(`https://wa.me/+9231232345?text=${message}`, '_blank');
//       }
//   };

//   return (
//       <button onClick={handleWhatsAppRedirect} className="whatsapp-button" style={{ textDecoration: 'none' }}>
//           <img src={whatsappicon2} alt="WhatsApp" className='box'/>
//           <p style={{color:'green', marginTop:'-10px', marginRight:'2px', fontFamily:'cursive'}}>WhatsApp</p>
//       </button>
//   );
// };

// export default WhatsAppButton;
