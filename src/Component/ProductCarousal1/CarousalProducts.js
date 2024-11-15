//--------Databases attched----------
// import React, { useState, useEffect } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Products from './Products';
// // import {responsive, productlistData1, productlistData2, productlistData3} from './data'
// import './CarousalProduct.css'
// import { useCart } from '../AddToCart/CartContext';
// import CarousalOnly2Product from '../Only2ProductCarousal/CarousalOnly2Product';
// import { Link, NavLink} from 'react-router-dom';



// import { responsive } from './data';
// import { db } from '../firebase/firebase'; // Ensure this path is correct
// import { collection, getDocs } from 'firebase/firestore';








// export default function CarouselProducts() {
  
//   const { addToCart } = useCart();
//     const [productlist1, setProductList1] = useState([]);
//     const [productlist2, setProductList2] = useState([]);
//     const [productlist3, setProductList3] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const list1 = [];
//             const list2 = [];
//             const list3 = [];

//             const querySnapshot1 = await getDocs(collection(db, "productlistData1"));
//             querySnapshot1.forEach(doc => {
//                 list1.push({ id: doc.id, ...doc.data() });
//             });

//             const querySnapshot2 = await getDocs(collection(db, "productlistData2"));
//             querySnapshot2.forEach(doc => {
//                 list2.push({ id: doc.id, ...doc.data() });
//             });

//             const querySnapshot3 = await getDocs(collection(db, "productlistData3"));
//             querySnapshot3.forEach(doc => {
//                 list3.push({ id: doc.id, ...doc.data() });
//             });

//             setProductList1(list1);
//             setProductList2(list2);
//             setProductList3(list3);
//         };

//         fetchData();
//     }, []);

//     const renderProductList1 = productlist1.map(item => (
//       <Products
//           key={item.id}
//           {...item}
//           addToCart={addToCart}
//       />
//   ));
//   const renderProductList2 = productlist2.map(item => (
//       <Products
//           key={item.id}
//           {...item}
//           addToCart={addToCart}
//       />
//   ));
//   const renderProductList3 = productlist3.map(item => (
//       <Products
//           key={item.id}
//           {...item}
//           addToCart={addToCart}
//       />
//   ));


//   return (
//     <>
//       <div className='Part1'>

//         {/* Draw Text 2 Sided line code*/}
//         <div className="text-container">
//           <div className="horizontal-line"></div>
//           <h3>🔥 Top Collections 🔥</h3>
//           <div className="horizontal-line"></div>
//         </div>
        
//         {/* Draw Text 2 Sided line Ened */}
//         <p style={{textAlign:'center', marginTop:'-2vmax', marginBottom:'2vmax', fontSize:'1.5vmax', color:'gray'}}>Everything you Need is already here 😍😍😍<NavLink to="/top_collections" className='view_all_top_collections_link'>View All</NavLink></p>
//         <Carousel responsive={responsive} keyBoardControl={true}>
//         {renderProductList1}
//         </Carousel>
        

//         <CarousalOnly2Product />


//         <div className="text-container" >
//           <div className="horizontal-line"></div>
//           <h3>🔥 Electronics Collection 🔥</h3>
//           <div className="horizontal-line"></div>
//         </div>
//         <NavLink to="/electronics" className='view_all_electronics_collection_link'>View All</NavLink>
//         <Carousel responsive={responsive} keyBoardControl={true}>
//         {renderProductList2}
//         </Carousel>


//         <div className="text-container" >
//           <div className="horizontal-line"></div>
//           <h3>🔥 Home Improvement 🔥</h3>
//           <div className="horizontal-line"></div>
//         </div>
//         <NavLink to="/home_improvement" className='view_all_home_improvement_link'>View All</NavLink>
//         <Carousel responsive={responsive} keyBoardControl={true}>
//         {renderProductList3}
//         </Carousel>

//       </div>
      
//       </>
//   )
// }















//-------Original----------
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

        {/* Draw Text 2 Sided line code*/}
        <div className="text-container">
          <div className="horizontal-line"></div>
          <h3>🔥 Top Collections 🔥</h3>
          <div className="horizontal-line"></div>
        </div>
        
        {/* Draw Text 2 Sided line Ened */}
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
