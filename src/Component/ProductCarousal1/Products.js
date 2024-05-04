import React from 'react';
import './Products.css'
import { name } from 'tar/lib/types';
import { Link } from 'react-router-dom';

export default function Products(props) {
  const { id, name, imageurl, price, addToCart } = props;
  return (
    <>
      <div className="card">
        <Link to={`/product_detail/${id}`} className='productDetailLink'>
          <img className="product--image" src={imageurl} alt="product image" />
          <h2 className="name">{name}</h2>
        </Link>
        <p className="price">Rs.{price}</p>
        {/* <p>{props.description}</p> */}
        <p><button className='button type1' onClick={()=>addToCart({id, imageurl, name, price})}>Add to Cart</button></p>
      </div>
    </>
  );
}
