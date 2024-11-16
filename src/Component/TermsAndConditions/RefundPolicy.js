import React, {useEffect} from 'react'
import './TermsAndConditions.css'

function RefundPolicy (){

   useEffect(() => {
    window.scrollTo(0, 0);
}, []); 

    return (
      <>
        <div className='TAC'>
      <h1>Refund Policy</h1>

      <h2>1. Eligibility:</h2>
      <ul>
        <li>Refunds are applicable based on certain conditions. All products may not be eligible for a refund, and specific criteria must be met.</li>
      </ul>

      <h2>2. Refund Process:</h2>
      <ul>
        <li>
          To initiate a refund, users must contact us via WhatsApp, providing their name, email, address, contact number, and WhatsApp number used for the order. After verification, we will guide users on the return process, and the product must be sent to the provided address. Within 15 days, 80% of the payment will be refunded to the user's account. Users are required to share their banking details, and a 20% processing fee will be deducted.
        </li>
      </ul>

      <h2>3. Refund Timeframe:</h2>
      <ul>
        <li>The refund process may take a minimum of 15 days to complete.</li>
      </ul>

      <h2>4. Online Banking Verification:</h2>
      <ul>
        <li>
          Users must verify their online banking details via WhatsApp to confirm their purchase. After verification, users will provide their banking, EasyPaisa, or JazzCash account number, and 80% of the payment will be transferred within 15 days. Please note a 20% deduction for processing fees.
        </li>
      </ul>

      <h2>5. Refund Communication:</h2>
      <ul>
        <li>Users will be informed via WhatsApp about the refund process and will receive details of the funds transfer.</li>
      </ul>

      <h2>6. Partial Refunds:</h2>
      <ul>
        <li>Partial refunds may be applicable in certain situations.</li>
      </ul>

      <h2>7. Refund Notification:</h2>
      <ul>
        <li>Users will be notified about the refund process and will receive details of the fund transfer via WhatsApp.</li>
      </ul>

      <h2>8. Refund Policy Changes:</h2>
      <ul>
        <li>In the case of any changes to the refund policy, users will be promptly informed.</li>
      </ul>

      <h2>9. Customer Support:</h2>
      <ul>
        <li>Customer support for refunds is available through email and WhatsApp. Users can reach out for assistance or clarification.</li>
      </ul>

      <p>Please note that users are encouraged to review the refund policy periodically, and any updates will be communicated accordingly.</p>
    </div>
      </>
    );
  }

export default RefundPolicy