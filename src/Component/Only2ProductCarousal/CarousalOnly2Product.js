//--------Databse attched--------------
// import React, { useState, useEffect } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Only2Product from './Only2Product';
// // import {responsive, doubleproductlistData1, doubleproductlistData2} from '../Only2ProductCarousal/data'
// import './CarousalOnly2Product.css'
// import { useCart } from '../AddToCart/CartContext';


// import { responsive } from '../Only2ProductCarousal/data';
// import { db } from '../firebase/firebase'; // Ensure this path is correct
// import { collection, getDocs } from 'firebase/firestore';

// export default function CarousalOnly2Product() {

//   const { addToCart } = useCart();
//     const [doubleproductlist1, setDoubleProductList1] = useState([]);
//     const [doubleproductlist2, setDoubleProductList2] = useState([]);


//     useEffect(() => {
//       const fetchData = async () => {
//           const list1 = [];
//           const list2 = [];

//           const querySnapshot1 = await getDocs(collection(db, "doubleproductlistData1"));
//           querySnapshot1.forEach(doc => {
//               list1.push({ id: doc.id, ...doc.data() });
//           });

//           const querySnapshot2 = await getDocs(collection(db, "doubleproductlistData2"));
//           querySnapshot2.forEach(doc => {
//               list2.push({ id: doc.id, ...doc.data() });
//           });

//           setDoubleProductList1(list1);
//           setDoubleProductList2(list2);
//       };

//       fetchData();
//   }, []);
  

//     const renderList1 = doubleproductlist1.map(item => (
//       <Only2Product
//           key={item.id}
//           {...item}
//           addToCart={addToCart}
//       />
//   ));

//   const renderList2 = doubleproductlist2.map(item => (
//       <Only2Product
//           key={item.id}
//           {...item}
//           addToCart={addToCart}
//       />
//   ));

//   return (
//     <>
//       <div className='Part1'>

//         {/* Draw Text 2 Sided line code*/}
//         {/* <div className="text-container"> */}
//           {/* <div className="horizontal-line"></div> */}
//           <h3 style={{textAlign:'center'}}>🔥 OUR COLLECTIONS 🔥</h3>
//           {/* <div className="horizontal-line"></div> */}
//         {/* </div> */}
//         {/* Draw Text 2 Sided line Ened */}
//         <Carousel responsive={responsive} keyBoardControl={true}>
//         {renderList1}
//         </Carousel>

//         <br/>
//         <Carousel responsive={responsive} keyBoardControl={true}>
//         {renderList2}
//         </Carousel>

//       </div>
      
//       </>
//   )
// }










//-------Original------------
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
