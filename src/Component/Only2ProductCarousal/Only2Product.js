import React from 'react';
import './Only2Product.css'
// import { name } from 'tar/lib/types';
import {Link, NavLink} from "react-router-dom";

export default function Only2Product(props) {
  const { id, name, imageUrl, price, addToCart, quantity } = props;

  const isInStock = quantity > 0;
  const handleAddToCartClick = () => {
    if (!isInStock) {
      alert("This Product is OUT OF STOCK. So you cannot BUY this product. Thanks.");
    } else {
      addToCart({ id, imageUrl, name, price });
    }
  };

  return (
    <>
      <div className="doublecard">
        <NavLink to={`/product_detail/${id}`} className='productDetailLink'>
          <img className="doubleproduct-image" src={imageUrl} alt="product image" />
          <h2 className="doublename">{name}</h2>
        </NavLink>
        <p className="doubleprice">Rs.{price}</p>
        {/* <p>{props.description}</p> */}
        <p>
        {/* <Link to="/shopnow"><button onClick={()=>addToCart({id, imageUrl, name, price})}>Shop Now</button></Link> */}

        {/* niche commented link button ko use karne ky liye os sy niche wale isInStock condition
        ko comment kar dena aur upar isInStock aur handleAddToCartClick arrow function ko bi comment kar dena. */}
        {/* <Link to="/shopnow"><button className='button type1' onClick={()=>addToCart({id, imageurl, name, price})}>Shop Now</button></Link> */}
        {isInStock ? (
          <Link to="/shopnow">
            <button className='button type1' onClick={handleAddToCartClick}>Shop Now</button>
          </Link>
        ) : (
          <button className='button type1' onClick={handleAddToCartClick}>Shop Now</button>
        )}
        </p>
      </div>
    </>
  );
}
