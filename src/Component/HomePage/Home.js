//------------with redux-persist----------
import React, { useEffect, useState, useContext } from 'react';
import './Home.css';
import ImageSlider from '../ImageSlider/ImageSlider';
import { Link } from 'react-router-dom';
import CarousalProducts from '../ProductCarousal1/CarousalProducts';
import { useCart } from '../AddToCart/CartContext';
import addtocarticon from '../Images/addtocarticon.png';
import searchicon from '../Images/searchicon.png';
import Searchproduct from '../SearchProduct/Searchproduct';
import { topCollection, electronicCollection, homeImprovement } from '../ProductCarousal1/data';
import { doubleproductlistData1, doubleproductlistData2 } from '../Only2ProductCarousal/data';
import usericon from '../Images/usericon.png';
import { useAuth } from '../firebase/AuthContext';

import { DataContext } from "../ProductCarousal1/DataProvider";
import { useSelector } from "react-redux";


export default function Home() {


  const {loading, loadingMore, loadMoreHomeImprovement, loadMoreElectronicCollection } = useContext(DataContext);
 
  const {homeImprovement}= useSelector(
  (state) => state.homeImprovement
  );
  const {electronicCollection}= useSelector(
    (state) => state.electronicCollection
    );
    // const {homeImprovement}= useSelector(
    //   (state) => state.homeImprovement
    //   );


  // Effect to automatically load more products when reaching the bottom of the page (optional)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreHomeImprovement();
          loadMoreElectronicCollection();
        }
      },
      { threshold: 1.0 }
    );

    // const bottomHomeImprovement = document.getElementById("homeImprovement-bottom");
    // const bottomElectronicCollection = document.getElementById("electronicCollection-bottom");

    // if (bottomHomeImprovement) observer.observe(bottomHomeImprovement);
    // if (bottomElectronicCollection) observer.observe(bottomElectronicCollection);

    // return () => {
    //   if (bottomHomeImprovement) observer.unobserve(bottomHomeImprovement);
    //   if (bottomElectronicCollection) observer.unobserve(bottomElectronicCollection);
    // };
  }, [loading, loadingMore]);






  const { cartItemCount } = useCart();
  const { handleUserNavigation } = useAuth();
  
  return (
    <>
      <div className='Part2'>
        <div style={{ display: 'flex' }}>
          <Searchproduct productData={[...topCollection, ...electronicCollection, ...homeImprovement, ...doubleproductlistData1, ...doubleproductlistData2]} />
          <img src={searchicon} alt="SearchIconError" style={{ width: '2.5vmax', height: '2vmax', marginBottom: '3.5px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link to="/cart" className='link2'>
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            <img src={addtocarticon} alt="AddtoCartIconError" style={{ width: '3vmax', height: '2.5vmax' }} />
          </Link>
          <img src={usericon} alt="Login" onClick={handleUserNavigation} style={{ width: '5vmax', height: '3.5vmax', cursor: 'pointer' }} className='userimage' />
        </div>
      </div>

      <div className='Part3'>
        <ImageSlider />
      </div>


      <CarousalProducts />

    </>
  );
}












//-------------original-------------------
// import React, { useEffect, useState } from 'react';
// import './Home.css';
// import ImageSlider from '../ImageSlider/ImageSlider';
// import { Link } from 'react-router-dom';
// import CarousalProducts from '../ProductCarousal1/CarousalProducts';
// import { useCart } from '../AddToCart/CartContext';
// import addtocarticon from '../Images/addtocarticon.png';
// import searchicon from '../Images/searchicon.png';
// import Searchproduct from '../SearchProduct/Searchproduct';
// import { topCollection, electronicCollection, homeImprovement } from '../ProductCarousal1/data';
// import { doubleproductlistData1, doubleproductlistData2 } from '../Only2ProductCarousal/data';
// import usericon from '../Images/usericon.png';
// import { useAuth } from '../firebase/AuthContext';


// export default function Home() {
//   const { cartItemCount } = useCart();
//   const { handleUserNavigation } = useAuth();
  
//   return (
//     <>
//       <div className='Part2'>
//         <div style={{ display: 'flex' }}>
//           <Searchproduct productData={[...topCollection, ...electronicCollection, ...homeImprovement, ...doubleproductlistData1, ...doubleproductlistData2]} />
//           <img src={searchicon} alt="SearchIconError" style={{ width: '2.5vmax', height: '2vmax', marginBottom: '3.5px' }} />
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <Link to="/cart" className='link2'>
//             {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
//             <img src={addtocarticon} alt="AddtoCartIconError" style={{ width: '3vmax', height: '2.5vmax' }} />
//           </Link>
//           <img src={usericon} alt="Login" onClick={handleUserNavigation} style={{ width: '5vmax', height: '3.5vmax', cursor: 'pointer' }} className='userimage' />
//         </div>
//       </div>

//       <div className='Part3'>
//         <ImageSlider />
//       </div>


//       <CarousalProducts />

//     </>
//   );
// }
