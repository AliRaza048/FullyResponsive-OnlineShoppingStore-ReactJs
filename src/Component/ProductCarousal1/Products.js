import React from 'react';
import './Products.css'
// import { name } from 'tar/lib/types';
import { Link } from 'react-router-dom';

export default function Products(props) {
  const { id, name, imageUrl, price, addToCart, quantity } = props;

  const isInStock = quantity > 0;
  const handleAddToCartClick = () => {
    if (!isInStock) {
      alert("This product is OUT OF STOCK. So you cannot ADD TO CART and BUY this product. Thanks.");
    } else {
      addToCart({ id, imageUrl, name, price });
    }
  };

  return (
    <>
      <div className="card">
        <Link to={`/product_detail/${id}`} className='productDetailLink'>
          <img className="product--image" src={imageUrl} alt="product image" />
          <h2 className="name">{name}</h2>
        </Link>
        <p className="price">Rs.{price}</p>
        <p><button className='button type1' onClick={handleAddToCartClick}>Add to Cart</button></p>
      
      </div>
    </>
  );
}
