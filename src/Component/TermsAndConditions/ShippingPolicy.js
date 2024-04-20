import React, {useEffect} from 'react'
import './TermsAndConditions.css'

function ShippingPolicy (){
  
   //Page Showing start from top
   useEffect(() => {
    window.scrollTo(0, 0);
}, []); 
//Page Showing start from top

    return (
      <>
        <div className='TAC'>
      <h1>Shipping Policy</h1>

      <h2>1. Shipping Methods:</h2>
      <ul>
        <li>We offer standard shipping services through reputable carriers such as TCs, Leopard, and TRX for reliable product delivery.</li>
      </ul>

      <h2>2. Delivery Hours:</h2>
      <ul>
        <li>Our shipping operations are active from 9 AM to 7 PM, ensuring timely delivery within these hours.</li>
      </ul>

      <h2>3. Shipping Locations:</h2>
      <ul>
        <li>Currently, we provide shipping exclusively within Pakistan, covering all major cities and regions.</li>
      </ul>

      <h2>4. Shipping Charges:</h2>
      <ul>
        <li>Shipping charges are calculated based on the weight of the product. We are pleased to offer free shipping on all products, aligning with our goal of providing cost-effective services.</li>
      </ul>

      <h2>5. Order Processing Time:</h2>
      <ul>
        <li>Orders are processed within one business day, ensuring swift handling and dispatch.</li>
      </ul>

      <h2>6. Order Tracking:</h2>
      <ul>
        <li>Our website provides an order tracking facility. Upon order placement, users can find their tracking number in their account, along with the tracking website link. Users can also copy the tracking information and paste it on the tracking website if they can't access the link on the website. For users who place orders via WhatsApp, the tracking ID, receipt, and tracking website link will be provided.</li>
      </ul>

      <h2>7. Confirmation and Delivery Messages:</h2>
      <ul>
        <li>Users will receive order confirmation and delivery messages when they log in to the website. If possible, we will also send these messages via WhatsApp.</li>
      </ul>

      <h2>8. Shipping Restrictions:</h2>
      <ul>
        <li>Products are shipped only within regions where Leopard and TCS services are available. No specific restrictions apply.</li>
      </ul>

      <h2>9. Returns and Exchange Policy:</h2>
      <ul>
        <li>We do not offer exchanges. In case of a damaged product, users can contact us via WhatsApp, providing details such as their full name, email, contact number, product name, and a video of the damaged product. We will inspect the issue, and if the damage is verified, the user will be instructed on the return process. The user will be refunded 80% of the product cost within 15 days of the product's return. The remaining 20% will be deducted as a processing fee.</li>
      </ul>

      <h2>10. Lost Product:</h2>
      <ul>
        <li>In the event of a lost product, users can contact us via WhatsApp, and we will promptly arrange for the shipment of a replacement product.</li>
      </ul>

      <p>Please note that the above policies are subject to change, and users are encouraged to review them periodically for any updates.</p>
    </div>
      </>
    );
  }

export default ShippingPolicy