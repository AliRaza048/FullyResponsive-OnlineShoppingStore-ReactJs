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
