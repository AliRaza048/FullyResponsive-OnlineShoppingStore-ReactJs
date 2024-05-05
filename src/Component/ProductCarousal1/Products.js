import React from 'react';
import './Products.css'
import { name } from 'tar/lib/types';
import { Link } from 'react-router-dom';

export default function Products(props) {
  const { id, name, imageurl, price, addToCart, quantity } = props;

  const isInStock = quantity > 0;
  const handleAddToCartClick = () => {
    if (!isInStock) {
      alert("This product is OUT OF STOCK. So you cannot ADD TO CART and BUY this product. Thanks.");
    } else {
      addToCart({ id, imageurl, name, price });
    }
  };

  return (
    <>
      <div className="card">
        <Link to={`/product_detail/${id}`} className='productDetailLink'>
          <img className="product--image" src={imageurl} alt="product image" />
          <h2 className="name">{name}</h2>
        </Link>
        <p className="price">Rs.{price}</p>
        {/* <p>{props.description}</p> */}

        {/* niche commented button ko use karne ky liye os sy niche wale button ko comment kar dena
        aur upar isInStock aur handleAddToCartClick arrow function ko bi comment kar dena. */}
        {/* <p><button className='button type1' onClick={()=>addToCart({id, imageurl, name, price})} disabled={!isInStock}>Add to Cart</button></p> */}
        <p><button className='button type1' onClick={handleAddToCartClick}>Add to Cart</button></p>
      
      </div>
    </>
  );
}
