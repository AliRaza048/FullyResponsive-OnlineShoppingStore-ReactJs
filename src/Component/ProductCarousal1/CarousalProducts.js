//----------without redux-persist-----------
// import React, { useContext, useEffect } from "react";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Products from './Products';
// import {responsive, topCollection, electronicCollection, homeImprovement} from './data'
// import './CarousalProduct.css'
// import { useCart } from '../AddToCart/CartContext';
// import CarousalOnly2Product from '../Only2ProductCarousal/CarousalOnly2Product';
// import { Link, NavLink} from 'react-router-dom';

// import { DataContext } from "./DataProvider";

// function CarouselProducts() {

//   const {homeImprovementData, electronicCollectionData, loading, loadingMore, loadMoreHomeImprovement, loadMoreElectronicCollection } = useContext(DataContext);
 
//   // Effect to automatically load more products when reaching the bottom of the page (optional)
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           loadMoreHomeImprovement();
//           loadMoreElectronicCollection();
//         }
//       },
//       { threshold: 1.0 }
//     );

//     const bottomHomeImprovement = document.getElementById("homeImprovement-bottom");
//     const bottomElectronicCollection = document.getElementById("electronicCollection-bottom");

//     if (bottomHomeImprovement) observer.observe(bottomHomeImprovement);
//     if (bottomElectronicCollection) observer.observe(bottomElectronicCollection);

//     return () => {
//       if (bottomHomeImprovement) observer.unobserve(bottomHomeImprovement);
//       if (bottomElectronicCollection) observer.unobserve(bottomElectronicCollection);
//     };
//   }, [loading, loadingMore]);



//   const { addToCart} = useCart();

//     const productlist1 = topCollection.map((item) => (
//         <Products
//           key={item.id}
//           id={item.id}
//           name={item.name}
//           imageUrl={item.imageUrl}
//           price={item.price}
//           description={item.description}
//           addToCart={addToCart}
//           quantity={item.quantity}
//         />
//       ));

//       // const productlist2 = electronicCollection.map((item) => (
//       const productlist2 = electronicCollectionData.map((item) => (
//         <Products
//           key={item.id}
//           id={item.id}
//           name={item.name}
//           imageUrl={item.imageUrl}
//           price={item.price}
//           description={item.description}
//           addToCart={addToCart}
//           quantity={item.quantity}
//         />
//       ));

//       // const productlist3 = homeImprovement.map((item) => (
//       const productlist3 = homeImprovementData.map((item) => (
//         <Products
//           key={item.id}
//           id={item.id}
//           name={item.name}
//           imageUrl={item.imageUrl}
//           price={item.price}
//           description={item.description}
//           addToCart={addToCart}
//           quantity={item.quantity}
//         />
//       ));


//   return (
//     <>
//       <div className='Part1'>

//         <div className="text-container">
//           <div className="horizontal-line"></div>
//           <h3>🔥 Top Collections 🔥</h3>
//           <div className="horizontal-line"></div>
//         </div>
        
//         <p style={{textAlign:'center', marginTop:'-2vmax', marginBottom:'2vmax', fontSize:'1.5vmax', color:'gray'}}>Everything you Need is already here 😍😍😍<NavLink to="/top_collections" className='view_all_top_collections_link'>View All</NavLink></p>
//         <Carousel responsive={responsive} keyBoardControl={true}>
//           {productlist1}
//         </Carousel>
        

//         <CarousalOnly2Product />


//         <div className="text-container" >
//           <div className="horizontal-line"></div>
//           <h3>🔥 Electronics Collection 🔥</h3>
//           <div className="horizontal-line"></div>
//         </div>
//         <NavLink to="/electronics" className='view_all_electronics_collection_link'>View All</NavLink>
        


//         {loading ? (
//         <p>Loading...</p>
//       ) : (

//         <Carousel responsive={responsive} keyBoardControl={true}>
//           {productlist2}
//         </Carousel>

//         )}
//         <div id="homeImprovement-bottom" style={{ height: "1px" }}></div>
//         {/* {loadingMore && <p>Loading more products...</p>} */}
//         {loadingMore}



//         <div className="text-container" >
//           <div className="horizontal-line"></div>
//           <h3>🔥 Home Improvement 🔥</h3>
//           <div className="horizontal-line"></div>
//         </div>
//         <NavLink to="/home_improvement" className='view_all_home_improvement_link'>View All</NavLink>
        


//         {loading ? (
//         <p>Loading...</p>
//       ) : (

//         <Carousel responsive={responsive} keyBoardControl={true}>
//           {productlist3}
//         </Carousel>

//          )}
//          <div id="electronicCollection-bottom" style={{ height: "1px" }}></div>
//          {/* {loadingMore && <p>Loading more products...</p>} */}
//          {loadingMore}



//       </div>
      
//       </>
//   )
// }
// export default CarouselProducts;






//----------with redux-persist---------
import React, { useContext, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Products from './Products';
import {responsive, topCollection, electronicCollection, homeImprovement} from './data'
import './CarousalProduct.css'
import { useCart } from '../AddToCart/CartContext';
import CarousalOnly2Product from '../Only2ProductCarousal/CarousalOnly2Product';
import { Link, NavLink} from 'react-router-dom';


import { DataContext } from "./DataProvider";
import { useSelector } from "react-redux";


function CarouselProducts() {

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

    const bottomHomeImprovement = document.getElementById("homeImprovement-bottom");
    const bottomElectronicCollection = document.getElementById("electronicCollection-bottom");

    if (bottomHomeImprovement) observer.observe(bottomHomeImprovement);
    if (bottomElectronicCollection) observer.observe(bottomElectronicCollection);

    return () => {
      if (bottomHomeImprovement) observer.unobserve(bottomHomeImprovement);
      if (bottomElectronicCollection) observer.unobserve(bottomElectronicCollection);
    };
  }, [loading, loadingMore]);
console.log(electronicCollection)
console.log(homeImprovement)
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
        
        {loading ? (
        <p>Loading...</p>
      ) : (
        <Carousel responsive={responsive} keyBoardControl={true}>
          {productlist2}
        </Carousel>
        )}
        <div id="homeImprovement-bottom" style={{ height: "1px" }}></div>
  
        {loadingMore && <p>Loading more products...</p>}


        <div className="text-container" >
          <div className="horizontal-line"></div>
          <h3>🔥 Home Improvement 🔥</h3>
          <div className="horizontal-line"></div>
        </div>
        <NavLink to="/home_improvement" className='view_all_home_improvement_link'>View All</NavLink>
        
        {loading ? (
        <p>Loading...</p>
      ) : (
        <Carousel responsive={responsive} keyBoardControl={true}>
          {productlist3}
        </Carousel>
         )}
         <div id="electronicCollection-bottom" style={{ height: "1px" }}></div>
   
         {loadingMore && <p>Loading more products...</p>}

      </div>
      
      </>
  )
}
export default CarouselProducts;











//-------------original code------------
// import React, { useContext, useEffect } from "react";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Products from './Products';
// import {responsive, topCollection, electronicCollection, homeImprovement} from './data'
// import './CarousalProduct.css'
// import { useCart } from '../AddToCart/CartContext';
// import CarousalOnly2Product from '../Only2ProductCarousal/CarousalOnly2Product';
// import { Link, NavLink} from 'react-router-dom';


// function CarouselProducts() {

//   const { addToCart} = useCart();

//     const productlist1 = topCollection.map((item) => (
//         <Products
//           key={item.id}
//           id={item.id}
//           name={item.name}
//           imageUrl={item.imageUrl}
//           price={item.price}
//           description={item.description}
//           addToCart={addToCart}
//           quantity={item.quantity}
//         />
//       ));

//       const productlist2 = electronicCollection.map((item) => (
//         <Products
//           key={item.id}
//           id={item.id}
//           name={item.name}
//           imageUrl={item.imageUrl}
//           price={item.price}
//           description={item.description}
//           addToCart={addToCart}
//           quantity={item.quantity}
//         />
//       ));

//       const productlist3 = homeImprovement.map((item) => (
//         <Products
//           key={item.id}
//           id={item.id}
//           name={item.name}
//           imageUrl={item.imageUrl}
//           price={item.price}
//           description={item.description}
//           addToCart={addToCart}
//           quantity={item.quantity}
//         />
//       ));


//   return (
//     <>
//       <div className='Part1'>

//         <div className="text-container">
//           <div className="horizontal-line"></div>
//           <h3>🔥 Top Collections 🔥</h3>
//           <div className="horizontal-line"></div>
//         </div>
        
//         <p style={{textAlign:'center', marginTop:'-2vmax', marginBottom:'2vmax', fontSize:'1.5vmax', color:'gray'}}>Everything you Need is already here 😍😍😍<NavLink to="/top_collections" className='view_all_top_collections_link'>View All</NavLink></p>
//         <Carousel responsive={responsive} keyBoardControl={true}>
//           {productlist1}
//         </Carousel>
        

//         <CarousalOnly2Product />


//         <div className="text-container" >
//           <div className="horizontal-line"></div>
//           <h3>🔥 Electronics Collection 🔥</h3>
//           <div className="horizontal-line"></div>
//         </div>
//         <NavLink to="/electronics" className='view_all_electronics_collection_link'>View All</NavLink>
//         <Carousel responsive={responsive} keyBoardControl={true}>
//           {productlist2}
//         </Carousel>

//         <div className="text-container" >
//           <div className="horizontal-line"></div>
//           <h3>🔥 Home Improvement 🔥</h3>
//           <div className="horizontal-line"></div>
//         </div>
//         <NavLink to="/home_improvement" className='view_all_home_improvement_link'>View All</NavLink>
//         <Carousel responsive={responsive} keyBoardControl={true}>
//           {productlist3}
//         </Carousel>

//       </div>
      
//       </>
//   )
// }
// export default CarouselProducts;