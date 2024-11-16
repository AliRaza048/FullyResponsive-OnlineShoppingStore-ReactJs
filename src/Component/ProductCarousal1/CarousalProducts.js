import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Products from './Products';
import {responsive, topCollection, electronicCollection, homeImprovement} from './data'
import './CarousalProduct.css'
import { useCart } from '../AddToCart/CartContext';
import CarousalOnly2Product from '../Only2ProductCarousal/CarousalOnly2Product';
import { Link, NavLink} from 'react-router-dom';

export default function CarouselProducts() {
  
  const { addToCart} = useCart();

    const productlist1 = topCollection.map((item) => (
        <Products
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
      const productlist2 = electronicCollection.map((item) => (
        <Products
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
      const productlist3 = homeImprovement.map((item) => (
        <Products
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

        <div className="text-container">
          <div className="horizontal-line"></div>
          <h3>🔥 Top Collections 🔥</h3>
          <div className="horizontal-line"></div>
        </div>
        
        <p style={{textAlign:'center', marginTop:'-2vmax', marginBottom:'2vmax', fontSize:'1.5vmax', color:'gray'}}>Everything you Need is already here 😍😍😍<NavLink to="/top_collections" className='view_all_top_collections_link'>View All</NavLink></p>
        <Carousel responsive={responsive} keyBoardControl={true}>
          {productlist1}
        </Carousel>
        

        <CarousalOnly2Product />


        <div className="text-container" >
          <div className="horizontal-line"></div>
          <h3>🔥 Electronics Collection 🔥</h3>
          <div className="horizontal-line"></div>
        </div>
        <NavLink to="/electronics" className='view_all_electronics_collection_link'>View All</NavLink>
        <Carousel responsive={responsive} keyBoardControl={true}>
          {productlist2}
        </Carousel>


        <div className="text-container" >
          <div className="horizontal-line"></div>
          <h3>🔥 Home Improvement 🔥</h3>
          <div className="horizontal-line"></div>
        </div>
        <NavLink to="/home_improvement" className='view_all_home_improvement_link'>View All</NavLink>
        <Carousel responsive={responsive} keyBoardControl={true}>
          {productlist3}
        </Carousel>

      </div>
      
      </>
  )
}
