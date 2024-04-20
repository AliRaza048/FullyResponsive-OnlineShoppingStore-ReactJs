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
          imageurl={item.imageurl}
          price={item.price}
          description={item.description}
          addToCart={addToCart}
        />
        
      ));

      const doubleproductlist2 = doubleproductlistData2.map((item) => (
        <Only2Product
          key={item.id}
          id={item.id}
          name={item.name}
          imageurl={item.imageurl}
          price={item.price}
          description={item.description}
          addToCart={addToCart}
          
        />
      ));

  return (
    <>
      <div className='Part1'>

        {/* Draw Text 2 Sided line code*/}
        {/* <div className="text-container"> */}
          {/* <div className="horizontal-line"></div> */}
          <h3 style={{textAlign:'center'}}>🔥 OUR COLLECTIONS 🔥</h3>
          {/* <div className="horizontal-line"></div> */}
        {/* </div> */}
        {/* Draw Text 2 Sided line Ened */}
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
