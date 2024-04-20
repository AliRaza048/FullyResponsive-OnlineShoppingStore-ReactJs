import React, {useEffect} from 'react'
import './TermsAndConditions.css'

function TermsOfService (){
  
   //Page Showing start from top
   useEffect(() => {
    window.scrollTo(0, 0);
}, []); 
//Page Showing start from top

    return (
      <>
         <div className='TAC'>
      <h1>Terms of Service</h1>

      <h2>1. Website Use:</h2>
      <ul>
        <li>
          There are no specific conditions for website use. To purchase products, users are required to register, agreeing to the Terms of Service and Privacy Policy by checking the checkbox.
        </li>
      </ul>

      <h2>2. Account Creation:</h2>
      <ul>
        <li>
          Users must register to create an account, providing a username, email, and agreeing to the terms and conditions. Passwords will be encrypted for security. User details will be kept secure and confidential.
        </li>
      </ul>

      <h2>3. User Responsibilities:</h2>
      <ul>
        <li>
          Users are expected to maintain a respectful and courteous interaction while using our website. The alteration of any inappropriate or offensive content to content promoting hate or bias is not permissible. Users not adhering to this condition may have their accounts banned.
        </li>
      </ul>

      <h2>4. Product Information:</h2>
      <ul>
        <li>
          To access product information, users can click on the product, where details such as product name, price, description, and stock availability will be displayed.
        </li>
      </ul>

      <h2>5. Order Placement:</h2>
      <ul>
        <li>
          Users need to register before placing an order. They should fill in their name, email, contact number, WhatsApp number, and the free shipping checkbox. Order confirmation details will be available in the user's account upon login, including tracking ID, tracking website link, and product information.
        </li>
      </ul>

      <h2>6. Payment Method:</h2>
      <ul>
        <li>
          Currently, only Cash on Delivery (COD) is available. In the future, if free shipping is discontinued, users will be informed.
        </li>
      </ul>

      <h2>7. Shipping Details:</h2>
      <ul>
        <li>
          Products will be shipped within 7 days, and users can track their orders by logging into the website and accessing the tracking website link.
        </li>
      </ul>

      <h2>8. Refund Policy:</h2>
      <ul>
        <li>
          For refunds, users need to contact us via WhatsApp, providing their name, email, address, contact number, and the WhatsApp number used for the order. After verification, guidance for the return process will be provided. The product must be sent to the specified address. Within 15 days, 80% of the payment will be refunded to the user's account. Users are required to share their banking details, and a 20% processing fee will be deducted. Exchange is not available. In the case of a damaged product, users can contact us via WhatsApp, providing details. If the damage is verified, an 80% refund will be processed within 15 days, with a 20% processing fee deduction.
        </li>
      </ul>

      <h2>9. User Password Security:</h2>
      <ul>
        <li>
          User passwords are encrypted for unauthorized access prevention. Our usage of a secure runtime database ensures the confidentiality of user information. User details are not shared with third parties. The WhatsApp number is used for direct communication. Users will be notified of any changes to the privacy policy in the website header and on social media.
        </li>
      </ul>

      <h2>10. Order Non-Receipt:</h2>
      <ul>
        <li>
          If a user places two orders and fails to receive both, their account may be removed. Additional measures and conditions will be addressed for other issues.
        </li>
      </ul>

      <h2>11. WhatsApp Communication:</h2>
      <ul>
        <li>
          Users can communicate with us through WhatsApp for issue resolution and support.
        </li>
      </ul>

      <h2>12. Follow Us:</h2>
      <ul>
        <li>
          Users who follow our official pages and accounts via email, WhatsApp, and social media will be informed about updates and announcements.
        </li>
      </ul>
    </div>
      </>
    );
  }

export default TermsOfService