import React, {useEffect} from 'react'
import './TermsAndConditions.css'


export const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []); 

  return (
    <>
     <div className='TAC'>
      <h1>About Us</h1>

      <h2>1. Founder's Journey:</h2>
      <p>
        Dev-Ali initiated this venture during his sixth semester in BS Software Engineering at COMSATS University Islamabad. Formerly engaged with Shopify, his passion for web development led him to learn ReactJS and establish his online shopping website in April 2023.
      </p>

      <h2>2. Mission:</h2>
      <p>
        Our mission is to provide high-quality products at affordable prices, ensuring customers can confidently shop from the comfort of their homes. Specializing in electronics and home improvement, we aim to offer a wide range of budget-friendly, premium-quality products.
      </p>

      <h2>3. Unique Offerings:</h2>
      <p>
        What sets us apart is our commitment to free shipping, easy WhatsApp purchasing, and a unique approach to payment. We prioritize customer satisfaction by collecting payments only upon product delivery through our Cash on Delivery (COD) method.
      </p>

      <h2>4. Our Story in a Nutshell:</h2>
      <p>
        Embarking on a journey from a Shopify freelancer to a ReactJS developer, Muhammad Ali Raza envisioned a platform where users can access a diverse range of high-quality, affordable products. His dedication to customer trust and commitment to innovation led to the establishment of our online shopping store.
      </p>

      <h2>5. Customer Interaction:</h2>
      <p>
        Building friendly and trustworthy relationships from the outset, our store quickly earned the trust and confidence of users. Users feel comfortable reaching out on WhatsApp to make purchases, reflecting the open and reliable environment we strive to create.
      </p>

      <h2>6. Reliable Delivery:</h2>
      <p>
        Ensuring timely and reliable product delivery is a top priority for us. We understand the importance of fulfilling orders promptly and efficiently to maintain customer satisfaction.
      </p>

      <h2>7. Goals:</h2>
      <p>
        Our ultimate goal is to attract a growing number of users to the website, creating an environment where they feel secure to make purchases without hesitation. We aim to expand our business by offering high-quality products through COD payments, ensuring both user satisfaction and business growth.
      </p>
    </div>
    </>
  )
}
