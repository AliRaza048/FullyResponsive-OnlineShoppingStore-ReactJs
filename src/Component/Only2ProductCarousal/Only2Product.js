import React from 'react';
import './Only2Product.css'
import { name } from 'tar/lib/types';
import {Link, NavLink} from "react-router-dom";

export default function Only2Product(props) {
  const { id, name, imageurl, price, addToCart } = props;
  return (
    <>
      <div className="doublecard">
        <NavLink to={`/product_detail/${id}`} className='productDetailLink'>
          <img className="doubleproduct-image" src={imageurl} alt="product image" />
          <h2 className="doublename">{name}</h2>
        </NavLink>
        <p className="doubleprice">Rs.{price}</p>
        {/* <p>{props.description}</p> */}
        <p>
        {/* <Link to="/shopnow"><button onClick={()=>addToCart({id, imageurl, name, price})}>Shop Now</button></Link> */}
        <Link to="/shopnow"><button className='button type1' onClick={()=>addToCart({id, imageurl, name, price})}>Shop Now</button></Link>
        </p>
      </div>
    </>
  );
}
