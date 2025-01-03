
//-----Database attched-----------
// import React, {useEffect, useState} from 'react'
// // import {productlistData2} from '../ProductCarousal1/data'
// import Products from '../ProductCarousal1/Products';
// import { useCart } from '../AddToCart/CartContext';
// import addtocarticon from '../Images/addtocarticon.png'
// import searchicon from '../Images/searchicon.png'
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import '../HomePage/Home.css';
// import './Viewallproducts.css'
// import Searchproduct from '../SearchProduct/Searchproduct';
// // import { productlistData1, productlistData3 } from '../ProductCarousal1/data';
// // import { doubleproductlistData1, doubleproductlistData2 } from '../Only2ProductCarousal/data';
// import usericon from '../Images/usericon.png';
// import { useAuth } from '../firebase/AuthContext';



// import { collection, getDocs } from "firebase/firestore";
// import { db } from '../firebase/firebase';



// export default function Electronicscollection() {

//     // const ElectronicscollectionallProducts = [...productlistData2];
//     const { addToCart} = useCart();
//     const { cartItemCount } = useCart();

//     const [productlist2, setProductList2] = useState([]);
//     useEffect(() => {
//         const fetchData = async () => {
//             const list2 = [];
//             const querySnapshot2 = await getDocs(collection(db, "productlistData2"));
//             querySnapshot2.forEach(doc => {
//                 list2.push({ id: doc.id, ...doc.data() });
//             });
//             setProductList2(list2);
//         };

//         fetchData();
//     }, []);

//     //after successful login Redirect user current page mean as it is previous page
//     const navigate = useNavigate();

//     //Page Showing start from top
//     //after successful login Redirect user current page mean as it is previous page
//     const location = useLocation();



//     //Page Showing start from top
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []); 
//     //Page Showing start from top


//      //after successful login Redirect user current page mean as it is previous page
//     const handleLoginNavigate = () => {
//     // console.log("Attempting to navigate to /login")
//     navigate('/login', { state: { from: location.pathname } });
//     };
//     const { handleUserNavigation } = useAuth();
//     //after successful login Redirect user current page mean as it is previous page
    
    
//     const [productData, setProductData] = useState([]);
//     useEffect(() => {
//         const fetchProducts = async () => {
//           const products = [];
//           const collections = ['productlistData1', 'productlistData2', 'productlistData3', 'doubleproductlistData1', 'doubleproductlistData2'];
//           for (const collectionName of collections) {
//             const querySnapshot = await getDocs(collection(db, collectionName));
//             querySnapshot.forEach(doc => {
//               products.push({ id: doc.id, ...doc.data() });
//             });
//           }
//           setProductData(products);
//         };
    
//         fetchProducts();
//       }, []);

      
//   return (
//     <>
//        <div className='Part2'>
//             <div style={{display:'flex'}}>


//             <Searchproduct productData={productData} />
//             {/* <Searchproduct productData={[...productlistData1, ...productlistData2, ...productlistData3, ...doubleproductlistData1, ...doubleproductlistData2]} /> */}
            
            
//             {/* <Searchproduct productData={[...productlistData2]} /> */}
//                 <img src={searchicon} alt="SearchIconError" style={{width:'2.5vmax', height:'2vmax', marginBottom:'3.5px'}}/>
//             </div>
//             <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
//                 {/* <Link to="/cart" className='link2'><img src={addtocarticon} alt="AddtoCartIconError" style={{width:'2.5vmax', height:'2vmax'}}/>Cart{cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}</Link> */}
//                 <Link to="/cart" className='link2'>{cartItemCount > 0 && <span className="cart-count" >{cartItemCount}</span>}<img src={addtocarticon} alt="AddtoCartIconError" style={{width:'3vmax', height:'2.5vmax'}}/></Link>
//                 {/* <Link to='/login' className='loginlink'><img src={usericon} style={{width:'55px', height:'38px' }} className='userimage'/>Login</Link> */}
//                 {/* <Link to='/login' className='loginlink'><img src={usericon} style={{width:'4vmax', height:'2.9vmax' }} className='userimage'/></Link> */}
//                 <img src={usericon} alt="Login" onClick={handleUserNavigation} style={{width:'5vmax', height:'3.5vmax' }} className='userimage'/>
//             </div>
//         </div>

//         <div className="view-all-products">
//             {productlist2.map((item) => (
//             <Products
//             key={item.id}
//             {...item}
//             addToCart={addToCart}
//         />
//             ))}
//         </div>
//     </>
//   )
// }






//-----Original------
import React, {useEffect, useContext} from 'react'
import {electronicCollection} from '../ProductCarousal1/data'
import Products from '../ProductCarousal1/Products';
import { useCart } from '../AddToCart/CartContext';
import addtocarticon from '../Images/addtocarticon.png'
import searchicon from '../Images/searchicon.png'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../HomePage/Home.css';
import './Viewallproducts.css'
import Searchproduct from '../SearchProduct/Searchproduct';
import { topCollection, homeImprovement } from '../ProductCarousal1/data';
import { doubleproductlistData1, doubleproductlistData2 } from '../Only2ProductCarousal/data';
import usericon from '../Images/usericon.png';
import { useAuth } from '../firebase/AuthContext';


import { DataContext } from "../ProductCarousal1/DataProvider";


export default function Electronicscollection() {

    const {homeImprovementData, electronicCollectionData, loading, loadingMore, loadMoreHomeImprovement, loadMoreElectronicCollection } = useContext(DataContext);
     
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


    const ElectronicscollectionallProducts = [...electronicCollectionData];
    // const ElectronicscollectionallProducts = [...electronicCollection];
    const { addToCart} = useCart();
    const { cartItemCount } = useCart();

    //after successful login Redirect user current page mean as it is previous page
    const navigate = useNavigate();

    //Page Showing start from top
    //after successful login Redirect user current page mean as it is previous page
    const location = useLocation();



    //Page Showing start from top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 
    //Page Showing start from top


     //after successful login Redirect user current page mean as it is previous page
    const handleLoginNavigate = () => {
    // console.log("Attempting to navigate to /login")
    navigate('/login', { state: { from: location.pathname } });
    };
    const { handleUserNavigation } = useAuth();
    //after successful login Redirect user current page mean as it is previous page

  return (
    <>
       <div className='Part2'>
            <div style={{display:'flex'}}>
            <Searchproduct productData={[...topCollection, ...electronicCollectionData, ...homeImprovementData, ...doubleproductlistData1, ...doubleproductlistData2]} />
            {/* <Searchproduct productData={[...topCollection, ...electronicCollection, ...homeImprovement, ...doubleproductlistData1, ...doubleproductlistData2]} /> */}
            {/* <Searchproduct productData={[...productlistData2]} /> */}
                <img src={searchicon} alt="SearchIconError" style={{width:'2.5vmax', height:'2vmax', marginBottom:'3.5px'}}/>
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                {/* <Link to="/cart" className='link2'><img src={addtocarticon} alt="AddtoCartIconError" style={{width:'2.5vmax', height:'2vmax'}}/>Cart{cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}</Link> */}
                <Link to="/cart" className='link2'>{cartItemCount > 0 && <span className="cart-count" >{cartItemCount}</span>}<img src={addtocarticon} alt="AddtoCartIconError" style={{width:'3vmax', height:'2.5vmax'}}/></Link>
                {/* <Link to='/login' className='loginlink'><img src={usericon} style={{width:'55px', height:'38px' }} className='userimage'/>Login</Link> */}
                {/* <Link to='/login' className='loginlink'><img src={usericon} style={{width:'4vmax', height:'2.9vmax' }} className='userimage'/></Link> */}
                <img src={usericon} alt="Login" onClick={handleUserNavigation} style={{width:'5vmax', height:'3.5vmax' }} className='userimage'/>
            </div>
        </div>

        <div className="view-all-products">
        {loading ? (
        <p>Loading...</p>
      ) : (
            ElectronicscollectionallProducts.map((item) => (
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
            ))
        )}
        <div id="electronicCollection-bottom" style={{ height: "1px" }}></div>
  
        {loadingMore}
        </div>
    </>
  )
}