//----------datasbes attched

// import React, {useEffect, useState } from 'react';
// import './Home.css';
// import ImageSlider from '../ImageSlider/ImageSlider';
// import { Link} from 'react-router-dom';
// import CarousalProducts from '../ProductCarousal1/CarousalProducts';
// import { useCart } from '../AddToCart/CartContext';
// import addtocarticon from '../Images/addtocarticon.png'
// import searchicon from '../Images/searchicon.png'
// import Searchproduct from '../SearchProduct/Searchproduct';
// // import { productlistData1, productlistData2, productlistData3 } from '../ProductCarousal1/data';
// // import { doubleproductlistData1, doubleproductlistData2 } from '../Only2ProductCarousal/data';
// import usericon from '../Images/usericon.png';
// import { useAuth } from '../firebase/AuthContext';




// import { collection, getDocs } from "firebase/firestore";
// import { db } from '../firebase/firebase';






// export default function Home() {




//   const [productData, setProductData] = useState([]);



//   const { cartItemCount } = useCart();
//   const { handleUserNavigation } = useAuth();




//   useEffect(() => {
//     const fetchProducts = async () => {
//       const products = [];
//       const collections = ['productlistData1', 'productlistData2', 'productlistData3', 'doubleproductlistData1', 'doubleproductlistData2'];
//       for (const collectionName of collections) {
//         const querySnapshot = await getDocs(collection(db, collectionName));
//         querySnapshot.forEach(doc => {
//           products.push({ id: doc.id, ...doc.data() });
//         });
//       }
//       setProductData(products);
//     };

//     fetchProducts();
//   }, []);




//   return (
//     <>
//       <div className='Part2'>
//           <div style={{display:'flex'}}>



//             {/* <Searchproduct productData={[...productlistData1, ...productlistData2, ...productlistData3, ...doubleproductlistData1, ...doubleproductlistData2]} /> */}
//             <Searchproduct productData={productData} />



//             {/* <input type='text' className='searchbar' placeholder='Search item'/> */}
//             {/* <input type='text' className='searchbar' placeholder='Search item' value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}/> */}
//             {/* <i class="ri-search-line"></i> */}
           
//             <img src={searchicon} alt="SearchIconError" style={{width:'2.5vmax', height:'2vmax', marginBottom:'3.5px'}}/>
//           </div>
//           <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
//             {/* <Link to="/cart" className='link2'><i class="ri-shopping-cart-2-line"></i>Cart{cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}</Link> */}

//             {/* cart link */}
//             <Link to="/cart" className='link2'>
//               {cartItemCount > 0 && <span className="cart-count" >{cartItemCount}</span>}
//                 <img src={addtocarticon} alt="AddtoCartIconError" style={{width:'3vmax', height:'2.5vmax'}}/>
//             </Link>
            
//             {/* login link */}
//             {/* <Link to='/login' className='loginlink'><img src={usericon} style={{width:'5vmax', height:'3.5vmax' }} className='userimage'/></Link> */}
//             <img src={usericon} alt="Login" onClick={handleUserNavigation} style={{width:'5vmax', height:'3.5vmax',cursor:'pointer' }} className='userimage'/>
//           </div>
//       </div>

//       <div className='Part3'>
//         <ImageSlider />
//       </div>


//       {/* <div className='Part4'>
//         <div>
          
//           <div className='part4_1'>
//             <div className='part4_1_1'></div>
//             <div className='part4_1_2'></div>
//             <div className='part4_1_3'></div>
//             <div className='part4_1_4'></div>
//             <div className='part4_1_5'></div>
//           </div>
//         </div>
//       </div>
//       <div className='Part'>
//         <h1>our Mission</h1>
//         <p>Our Mission is to empower the people of pakistan by offering a user-friendly 
//           and easily accessible online shoppping platform.</p>
//       </div> */}
      
      

//           {/* Draw Text 2 Sided line code*/}
        
//         <CarousalProducts/>

        

//       {/* <div className='maindiv'>

//         <div className='div1chlid1'>
//           <div className='div1child1_1'>
//             <input type='text' id='searchbar' placeholder='Search Product' />
//             <i class="ri-search-line"></i>
//           </div>

//           <Link to="/" className='link1'>ShoptIt</Link>

//           <div className='div1child1_2'>
//             <Link to="/cart" className='link2'><i class="ri-shopping-cart-2-line"></i>Cart</Link>
//           </div>
//         </div>

//         <div className='div1child2'>
//           <NavLink to="/" className='link3'>Home</NavLink>
//           <NavLink to="/contact" className='link3'>Contact</NavLink>
//         </div>

//       </div> */}
//     </>
//   );
// }



//---original---
// import React, {useEffect, useState } from 'react';
// import './Home.css';
// import ImageSlider from '../ImageSlider/ImageSlider';
// import { Link} from 'react-router-dom';
// import CarousalProducts from '../ProductCarousal1/CarousalProducts';
// import { useCart } from '../AddToCart/CartContext';
// import addtocarticon from '../Images/addtocarticon.png'
// import searchicon from '../Images/searchicon.png'
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
//           <div style={{display:'flex'}}>
//             <Searchproduct productData={[...topCollection, ...electronicCollection, ...homeImprovement, ...doubleproductlistData1, ...doubleproductlistData2]} />

//             {/* <input type='text' className='searchbar' placeholder='Search item'/> */}
//             {/* <input type='text' className='searchbar' placeholder='Search item' value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}/> */}
//             {/* <i class="ri-search-line"></i> */}
           
//             <img src={searchicon} alt="SearchIconError" style={{width:'2.5vmax', height:'2vmax', marginBottom:'3.5px'}}/>
//           </div>
//           <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
//             {/* <Link to="/cart" className='link2'><i class="ri-shopping-cart-2-line"></i>Cart{cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}</Link> */}

//             {/* cart link */}
//             <Link to="/cart" className='link2'>
//               {cartItemCount > 0 && <span className="cart-count" >{cartItemCount}</span>}
//                 <img src={addtocarticon} alt="AddtoCartIconError" style={{width:'3vmax', height:'2.5vmax'}}/>
//             </Link>
            
//             {/* login link */}
//             {/* <Link to='/login' className='loginlink'><img src={usericon} style={{width:'5vmax', height:'3.5vmax' }} className='userimage'/></Link> */}
//             <img src={usericon} alt="Login" onClick={handleUserNavigation} style={{width:'5vmax', height:'3.5vmax',cursor:'pointer' }} className='userimage'/>
//           </div>
//       </div>

//       <div className='Part3'>
//         <ImageSlider />
//       </div>


//       {/* <div className='Part4'>
//         <div>
          
//           <div className='part4_1'>
//             <div className='part4_1_1'></div>
//             <div className='part4_1_2'></div>
//             <div className='part4_1_3'></div>
//             <div className='part4_1_4'></div>
//             <div className='part4_1_5'></div>
//           </div>
//         </div>
//       </div>
//       <div className='Part'>
//         <h1>our Mission</h1>
//         <p>Our Mission is to empower the people of pakistan by offering a user-friendly 
//           and easily accessible online shoppping platform.</p>
//       </div> */}
      
      

//           {/* Draw Text 2 Sided line code*/}
        
//         <CarousalProducts/>

        

//       {/* <div className='maindiv'>

//         <div className='div1chlid1'>
//           <div className='div1child1_1'>
//             <input type='text' id='searchbar' placeholder='Search Product' />
//             <i class="ri-search-line"></i>
//           </div>

//           <Link to="/" className='link1'>ShoptIt</Link>

//           <div className='div1child1_2'>
//             <Link to="/cart" className='link2'><i class="ri-shopping-cart-2-line"></i>Cart</Link>
//           </div>
//         </div>

//         <div className='div1child2'>
//           <NavLink to="/" className='link3'>Home</NavLink>
//           <NavLink to="/contact" className='link3'>Contact</NavLink>
//         </div>

//       </div> */}
//     </>
//   );
// }


import React, { useEffect, useState } from 'react';
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

export default function Home() {
  const { cartItemCount } = useCart();
  const { handleUserNavigation } = useAuth();



  // const [loading, setLoading] = useState(true); // Loading state
  // useEffect(() => {
  //   const checkDataLoaded = setInterval(() => {
  //     // Check if data has been loaded from Firebase
  //     if (topCollection.length > 0 && electronicCollection.length > 0 && homeImprovement.length > 0) {
  //       setLoading(false); // Stop loading when data is available
  //       clearInterval(checkDataLoaded); // Clear the interval
  //     }
  //   }, 100); // Check every 100ms
  //   return () => clearInterval(checkDataLoaded); // Cleanup interval on unmount
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>; // Show loading message while data is loading
  // }


  
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
