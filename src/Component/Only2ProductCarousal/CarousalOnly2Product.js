import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Only2Product from './Only2Product';
import {responsive, doubleproductlistData1, doubleproductlistData2} from '../Only2ProductCarousal/data'
import './CarousalOnly2Product.css'
import { useCart } from '../AddToCart/CartContext';

export default function CarousalOnly2Product() {
  
  const { addToCart} = useCart();

    const doubleproductlist1 = doubleproductlistData1.map((item) => (
        <Only2Product
          key={item.id}
          id={item.id}
          name={item.name}
          imageUrl={item.imageUrl}
          price={item.price}
          description={item.description}
          addToCart={addToCart}
          quantity={item.quantity}
        />
        
      ));

      const doubleproductlist2 = doubleproductlistData2.map((item) => (
        <Only2Product
          key={item.id}
          id={item.id}
          name={item.name}
          imageUrl={item.imageUrl}
          price={item.price}
          description={item.description}
          addToCart={addToCart}
          quantity={item.quantity}
          
        />
      ));

  return (
    <>
      <div className='Part1'>
          <h3 style={{textAlign:'center'}}>🔥 OUR COLLECTIONS 🔥</h3>
        <Carousel responsive={responsive} keyBoardControl={true}>
          {doubleproductlist1}
        </Carousel>

        <br/>
        <Carousel responsive={responsive} keyBoardControl={true}>
          {doubleproductlist2}
        </Carousel>

      </div>
      
      </>
  )
}
