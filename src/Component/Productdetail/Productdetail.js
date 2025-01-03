//----------with redux-persist------------
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useLocation, useNavigate  } from 'react-router-dom';
import { topCollection, electronicCollection, homeImprovement } from '../ProductCarousal1/data';
import { doubleproductlistData1, doubleproductlistData2 } from '../Only2ProductCarousal/data';
import { Link } from 'react-router-dom';
import { useCart } from '../AddToCart/CartContext';
import addtocarticon from '../Images/addtocarticon.png';
import searchicon from '../Images/searchicon.png';
import '../HomePage/Home.css';
import './Productdetail.css';
import Searchproduct from '../SearchProduct/Searchproduct';
import whatsappicon1 from '../Images/whatsappicon1.png';
import usericon from '../Images/usericon.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import WhatsAppOrderForm from '../WhatsAppOrderForm/WhatsAppOrderForm';
import { useAuth } from '../firebase/AuthContext';

import { DataContext } from "../ProductCarousal1/DataProvider";
import { useSelector } from "react-redux";


export default function Productdetail() {

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



  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { cartItemCount } = useCart(); 
  const { addToCart, addToCartProductdetail} = useCart();
  const [product, setProduct] = useState(null);
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const { handleUserNavigation } = useAuth();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); 


  //after successful login Redirect user current page mean as it is previous page
  const handleLoginNavigate = () => {
      navigate('/login', { state: { from: location.pathname } });
  };

 
  useEffect(() => {
    const allProducts = [
      ...topCollection,
      ...electronicCollection,
      ...homeImprovement,
      ...doubleproductlistData1,
      ...doubleproductlistData2
    ];
  

    // Update product details
    const newProduct = allProducts.find(product => product.id === parseInt(id));
    if (newProduct !== product) {
      setProduct(newProduct);
    }
    // Update product details


    // multiple product image
    const foundProduct = allProducts.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    if (foundProduct) {
      setSelectedImageUrl(foundProduct.imageUrl[0]); // Set the first image as default
    }
    // multiple product image

    
    // Get the dataset of the selected product
    let selectedDataset;
    if (topCollection.some(product => product.id.toString() === id)) {
      selectedDataset = topCollection;
    } else if (electronicCollection.some(product => product.id.toString() === id)) {
      selectedDataset = electronicCollection;
    } else if (homeImprovement.some(product => product.id.toString() === id)) {
      selectedDataset = homeImprovement;
    } else if (doubleproductlistData1.some(product => product.id.toString() === id)) {
      selectedDataset = doubleproductlistData1;
    } else if (doubleproductlistData2.some(product => product.id.toString() === id)) {
      selectedDataset = doubleproductlistData2;
    }
  
    // Update suggested products
    let newSuggestedProducts = [];
    const selectedProductIndex = selectedDataset.findIndex(product => product.id.toString() === id);
    
    if (selectedProductIndex !== -1) {
      for (let i = selectedProductIndex + 5; newSuggestedProducts.length < 4; i += 5) {
        const index = i % selectedDataset.length;
        newSuggestedProducts.push(selectedDataset[index]);
      }
    }
  
    // Limit to 4 products
    newSuggestedProducts = newSuggestedProducts.slice(0, 4);
  
    // Assuming a simple comparison is insufficient, implement a deeper comparison or use a library like lodash for _.isEqual
    if (JSON.stringify(newSuggestedProducts) !== JSON.stringify(suggestedProducts)) {
      setSuggestedProducts(newSuggestedProducts);
    }
  }, [id, topCollection, electronicCollection, homeImprovement, doubleproductlistData1, doubleproductlistData2]);
   //apny apny data me sy 5 product ky baad 1 product uhtaye ga. asy hi loop chale ga aur 4 product uhta ky may also me show hon gi
  

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };
  const handleAddToCart = () => {
    addToCartProductdetail({...product, quantity});
  };
  const handleCheckout = () => {
    addToCartProductdetail({...product, quantity});
    navigate('/cart');
  };


  if (!product) {
    return <div>Product not found</div>;
  }

  // isInstock If Product Quantity Greater than 0
  const isInStock = product.quantity > 0;
  //isInstock If Product Quantity Greater than 0


  //Order On Whatsapp
  const handleFormSubmit = (formData) => {
    const message = `----------I would like to order this:-----------\n` +
                    
                    `Item Name: ${product.name}\n` +
                    `Item ID: ${product.id}\n` +
                    // `Per Item Price: Rs.${product.price}\n` +
                    `Item Quantity: ${formData.productQuantity}\n` +
                    `\n` +
                    `----------Shipping Address----------\n` +
                    `Name: ${formData.name}\n` +
                    `Email: ${formData.email}\n` +
                    `Mobile Number: ${formData.mobileNumber}\n` +
                    `WhatsApp Number: ${formData.whatsappNumber}\n` +
                    `Address: ${formData.address}\n` +
                    `\n`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "+923091416573";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setShowForm(false); // Close form after submission
};
const handleWhatsAppOrderClick = () => {
    setShowForm(true);
};
const handleCloseModal = () => {
  setShowForm(false);
};
 
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2,
  }
};


  return (
    <>
      {/*------------Search Product and cart, cartItemCount, login Section---------------*/}
      <div className='Part2'>
        
        {/* -------------Search Product code-------------- */}
        <div style={{display:'flex'}}>
          <Searchproduct productData={[...topCollection, ...electronicCollection, ...homeImprovement, ...doubleproductlistData1, ...doubleproductlistData2]} />
          <img src={searchicon} alt="SearchIconError" style={{width:'2.5vmax', height:'2vmax', marginBottom:'3.5px'}}/>
        </div>
        {/* -------------Search Product code-------------- */}

        {/* -------cart, cartItemCount, login code-------- */}
        <div  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Link to="/cart" className='link2'>{cartItemCount > 0 && <span className="cart-count" >{cartItemCount}</span>}<img src={addtocarticon} alt="AddtoCartIconError" style={{width:'3vmax', height:'2.5vmax'}}/></Link>
          <img src={usericon} alt="Login" onClick={handleUserNavigation} style={{width:'5vmax', height:'3.5vmax'}} className='userimage'/>

        </div>
        {/* -------cart, cartItemCount, login code-------- */}

      </div>
      {/*------------Search Product and cart, cartItemCount, login Section---------------*/}
      



      {/* -----------------Product Detail Section------------------------- */}
      <div className='productDetail'>
        <div style={{display:'flex'}}>
          {/* <img src={product.imageUrl} alt={product.name} className='productimage'/> */}
          <div className='images-container'>
          <img src={selectedImageUrl} alt={product.name} className='productimage'/>
          {/* ----------------multiple product image--------------- */}
        <div className="image-selector" >
          {product.imageUrl.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Thumbnail ${index}`}
              className="thumbnail"
              onClick={() => setSelectedImageUrl(url)}
           />
          ))}
        </div>
        </div>
        {/* ----------------multiple product image--------------- */}
          <div style={{marginLeft:'5%'}}>
            <h2 style={{wordWrap:'break-word'}}>{product.name}</h2>
            <p style={{fontSize:'large', fontStyle:'oblique'}}>Rs.{product.price}</p>


            {/* ----------In Stock Green Light and Out of Stock Red Light Code ---------- */}

            <p >
              {isInStock ? (
                <>
                  <div  className='green-light-container'>
                    <div className="green-light" ></div>
                    <span className='green-light-content'>In Stock</span>
                  </div>
                </>
              ) : (
                <>
                  <div className='red-light-container'>
                    <div className="red-light"></div>
                    <span className='red-light-content'>Out of Stock</span>
                  </div>
                </>
              )}
            </p>
            {/* ----------In Stock Green Light and Out of Stock Red Light Code ---------- */}

           


            {/* -------------Increament Quantity and Decreament Quantity Code------------ */}
  
            <div className='fancy-btn-container'>
              <button onClick={incrementQuantity} className={`fancy-increment-btn ${!isInStock ? 'disabled' : ''}`} disabled={!isInStock}>
                +
              </button>
              {isInStock ? (
                <span className='quantity'>
                  {quantity}
                </span>
              ) : (
                <span style={{ opacity: 0.5 }} className='quantity'>0</span>
              )}
              <button onClick={decrementQuantity} className={`fancy-decrement-btn ${!isInStock ? 'disabled' : ''}`} disabled={!isInStock}>
                -
              </button>
            </div>

            {/* -------------Increament Quantity and Decreament Quantity Code------------ */}





            {/* ----------Add to Cart, Checkout and Order on Whatsapp Buttons ------------*/}

            <button onClick={handleAddToCart} className={`fancy ${!isInStock ? 'disabled' : ''}`} disabled={!isInStock}>
              <span className="top-key"></span>
              <span className='text' >
              <img src={addtocarticon} alt="AddtoCartIconError" style={{width:'2.5vmax', height:'2.2vmax'}}/>
                Add to Cart
              </span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>

            
            <Link to='/ordernow' style={{textDecoration: 'none'}} className={!isInStock ? 'disabled' : ''}>
              <button onClick={handleCheckout} className="fancy">
                <span className="top-key"></span>
                <span className='text'>Checkout</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </button>
            </Link>


            <button onClick={handleWhatsAppOrderClick} className={`fancy ${!isInStock ? 'disabled' : ''}`} disabled={!isInStock}>
              <span className="top-key"></span>
              <span className='text'>
                <img src={whatsappicon1} style={{width:'2rem',height:'2rem'}}/>
                Order on WhatsApp
              </span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
            {showForm && <WhatsAppOrderForm onSubmit={handleFormSubmit} onClose={handleCloseModal} />}
            
          </div>
        </div>
        {/* ----------Add to Cart, Checkout and Order on Whatsapp Buttons ------------*/}




        <h2 className='description'>Description:</h2>
        <p>{product.description}</p>
        <div className='productvideo'>
          {/* {product.videoLink} */}
          <iframe
          width="100%"
          height="100%"
          src={product.videoLink} // Firebase se fetched video link
          title={product.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        </div>
      </div>
      {/* -----------------Product Detail Section------------------------- */}
      


      {/* -----------Draw Text 2 Sided line code--------------- */}
        <div className="text-container">
          <div className="horizontal-line"></div>
          <h3>🔥 You May Also Like 🔥</h3>
          <div className="horizontal-line"></div>
        </div>
      {/* -----------Draw Text 2 Sided line code-------------- */}




      {/* ------------------"You May Also Like" section----------------- */}
        <Carousel responsive={responsive} containerClass="carousel-container">
          {suggestedProducts.map(product => (
            <div key={product.id} className="SuggestionsCard">
              <Link to={`/product_detail/${product.id}`} className='SuggestionsProductDetailLink'>
                <img className="SuggestionsProduct--image" src={product.imageUrl} alt={product.name} />
                <h3 className="SuggestionsName">{product.name}</h3>
                <p className="SuggestionsPrice">Rs.{product.price}</p>
              </Link>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </Carousel>
      {/* ------------------"You May Also Like" section----------------- */}
     
    </>
  );
}








//----------original---------------
// import React, { useEffect, useState } from 'react';
// import { useParams, useLocation, useNavigate  } from 'react-router-dom';
// import { topCollection, electronicCollection, homeImprovement } from '../ProductCarousal1/data';
// import { doubleproductlistData1, doubleproductlistData2 } from '../Only2ProductCarousal/data';
// import { Link } from 'react-router-dom';
// import { useCart } from '../AddToCart/CartContext';
// import addtocarticon from '../Images/addtocarticon.png';
// import searchicon from '../Images/searchicon.png';
// import '../HomePage/Home.css';
// import './Productdetail.css';
// import Searchproduct from '../SearchProduct/Searchproduct';
// import whatsappicon1 from '../Images/whatsappicon1.png';
// import usericon from '../Images/usericon.png'
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import WhatsAppOrderForm from '../WhatsAppOrderForm/WhatsAppOrderForm';
// import { useAuth } from '../firebase/AuthContext';


// export default function Productdetail() {

//   const navigate = useNavigate();
//   const [quantity, setQuantity] = useState(1);
//   const { cartItemCount } = useCart(); 
//   const { addToCart, addToCartProductdetail} = useCart();
//   const [product, setProduct] = useState(null);
//   const [suggestedProducts, setSuggestedProducts] = useState([]);
//   const [selectedImageUrl, setSelectedImageUrl] = useState('');
//   const [showForm, setShowForm] = useState(false);
//   const { id } = useParams();
//   const location = useLocation();
//   const { handleUserNavigation } = useAuth();


//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]); 


//   //after successful login Redirect user current page mean as it is previous page
//   const handleLoginNavigate = () => {
//       navigate('/login', { state: { from: location.pathname } });
//   };

 
//   useEffect(() => {
//     const allProducts = [
//       ...topCollection,
//       ...electronicCollection,
//       ...homeImprovement,
//       ...doubleproductlistData1,
//       ...doubleproductlistData2
//     ];
  

//     // Update product details
//     const newProduct = allProducts.find(product => product.id === parseInt(id));
//     if (newProduct !== product) {
//       setProduct(newProduct);
//     }
//     // Update product details


//     // multiple product image
//     const foundProduct = allProducts.find(p => p.id === parseInt(id));
//     setProduct(foundProduct);
//     if (foundProduct) {
//       setSelectedImageUrl(foundProduct.imageUrl[0]); // Set the first image as default
//     }
//     // multiple product image

    
//     // Get the dataset of the selected product
//     let selectedDataset;
//     if (topCollection.some(product => product.id.toString() === id)) {
//       selectedDataset = topCollection;
//     } else if (electronicCollection.some(product => product.id.toString() === id)) {
//       selectedDataset = electronicCollection;
//     } else if (homeImprovement.some(product => product.id.toString() === id)) {
//       selectedDataset = homeImprovement;
//     } else if (doubleproductlistData1.some(product => product.id.toString() === id)) {
//       selectedDataset = doubleproductlistData1;
//     } else if (doubleproductlistData2.some(product => product.id.toString() === id)) {
//       selectedDataset = doubleproductlistData2;
//     }
  
//     // Update suggested products
//     let newSuggestedProducts = [];
//     const selectedProductIndex = selectedDataset.findIndex(product => product.id.toString() === id);
    
//     if (selectedProductIndex !== -1) {
//       for (let i = selectedProductIndex + 5; newSuggestedProducts.length < 4; i += 5) {
//         const index = i % selectedDataset.length;
//         newSuggestedProducts.push(selectedDataset[index]);
//       }
//     }
  
//     // Limit to 4 products
//     newSuggestedProducts = newSuggestedProducts.slice(0, 4);
  
//     // Assuming a simple comparison is insufficient, implement a deeper comparison or use a library like lodash for _.isEqual
//     if (JSON.stringify(newSuggestedProducts) !== JSON.stringify(suggestedProducts)) {
//       setSuggestedProducts(newSuggestedProducts);
//     }
//   }, [id, topCollection, electronicCollection, homeImprovement, doubleproductlistData1, doubleproductlistData2]);
//    //apny apny data me sy 5 product ky baad 1 product uhtaye ga. asy hi loop chale ga aur 4 product uhta ky may also me show hon gi
  

//   const incrementQuantity = () => {
//     setQuantity(prev => prev + 1);
//   };
//   const decrementQuantity = () => {
//     setQuantity(prev => prev > 1 ? prev - 1 : 1);
//   };
//   const handleAddToCart = () => {
//     addToCartProductdetail({...product, quantity});
//   };
//   const handleCheckout = () => {
//     addToCartProductdetail({...product, quantity});
//     navigate('/cart');
//   };


//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   // isInstock If Product Quantity Greater than 0
//   const isInStock = product.quantity > 0;
//   //isInstock If Product Quantity Greater than 0


//   //Order On Whatsapp
//   const handleFormSubmit = (formData) => {
//     const message = `----------I would like to order this:-----------\n` +
                    
//                     `Item Name: ${product.name}\n` +
//                     `Item ID: ${product.id}\n` +
//                     // `Per Item Price: Rs.${product.price}\n` +
//                     `Item Quantity: ${formData.productQuantity}\n` +
//                     `\n` +
//                     `----------Shipping Address----------\n` +
//                     `Name: ${formData.name}\n` +
//                     `Email: ${formData.email}\n` +
//                     `Mobile Number: ${formData.mobileNumber}\n` +
//                     `WhatsApp Number: ${formData.whatsappNumber}\n` +
//                     `Address: ${formData.address}\n` +
//                     `\n`;
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappNumber = "+923091416573";
//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
//     window.open(whatsappUrl, "_blank");
//     setShowForm(false); // Close form after submission
// };
// const handleWhatsAppOrderClick = () => {
//     setShowForm(true);
// };
// const handleCloseModal = () => {
//   setShowForm(false);
// };
 
// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3,
//   },
//   desktop: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 3,
//     slidesToSlide: 3,
//   },
//   tablet: {
//     breakpoint: { max: 768, min: 464 },
//     items: 2,
//     slidesToSlide: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 2,
//     slidesToSlide: 2,
//   }
// };


//   return (
//     <>
//       {/*------------Search Product and cart, cartItemCount, login Section---------------*/}
//       <div className='Part2'>
        
//         {/* -------------Search Product code-------------- */}
//         <div style={{display:'flex'}}>
//           <Searchproduct productData={[...topCollection, ...electronicCollection, ...homeImprovement, ...doubleproductlistData1, ...doubleproductlistData2]} />
//           <img src={searchicon} alt="SearchIconError" style={{width:'2.5vmax', height:'2vmax', marginBottom:'3.5px'}}/>
//         </div>
//         {/* -------------Search Product code-------------- */}

//         {/* -------cart, cartItemCount, login code-------- */}
//         <div  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
//           <Link to="/cart" className='link2'>{cartItemCount > 0 && <span className="cart-count" >{cartItemCount}</span>}<img src={addtocarticon} alt="AddtoCartIconError" style={{width:'3vmax', height:'2.5vmax'}}/></Link>
//           <img src={usericon} alt="Login" onClick={handleUserNavigation} style={{width:'5vmax', height:'3.5vmax'}} className='userimage'/>

//         </div>
//         {/* -------cart, cartItemCount, login code-------- */}

//       </div>
//       {/*------------Search Product and cart, cartItemCount, login Section---------------*/}
      



//       {/* -----------------Product Detail Section------------------------- */}
//       <div className='productDetail'>
//         <div style={{display:'flex'}}>
//           {/* <img src={product.imageUrl} alt={product.name} className='productimage'/> */}
//           <div className='images-container'>
//           <img src={selectedImageUrl} alt={product.name} className='productimage'/>
//           {/* ----------------multiple product image--------------- */}
//         <div className="image-selector" >
//           {product.imageUrl.map((url, index) => (
//             <img
//               key={index}
//               src={url}
//               alt={`Thumbnail ${index}`}
//               className="thumbnail"
//               onClick={() => setSelectedImageUrl(url)}
//            />
//           ))}
//         </div>
//         </div>
//         {/* ----------------multiple product image--------------- */}
//           <div style={{marginLeft:'5%'}}>
//             <h2 style={{wordWrap:'break-word'}}>{product.name}</h2>
//             <p style={{fontSize:'large', fontStyle:'oblique'}}>Rs.{product.price}</p>


//             {/* ----------In Stock Green Light and Out of Stock Red Light Code ---------- */}

//             <p >
//               {isInStock ? (
//                 <>
//                   <div  className='green-light-container'>
//                     <div className="green-light" ></div>
//                     <span className='green-light-content'>In Stock</span>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className='red-light-container'>
//                     <div className="red-light"></div>
//                     <span className='red-light-content'>Out of Stock</span>
//                   </div>
//                 </>
//               )}
//             </p>
//             {/* ----------In Stock Green Light and Out of Stock Red Light Code ---------- */}

           


//             {/* -------------Increament Quantity and Decreament Quantity Code------------ */}
  
//             <div className='fancy-btn-container'>
//               <button onClick={incrementQuantity} className={`fancy-increment-btn ${!isInStock ? 'disabled' : ''}`} disabled={!isInStock}>
//                 +
//               </button>
//               {isInStock ? (
//                 <span className='quantity'>
//                   {quantity}
//                 </span>
//               ) : (
//                 <span style={{ opacity: 0.5 }} className='quantity'>0</span>
//               )}
//               <button onClick={decrementQuantity} className={`fancy-decrement-btn ${!isInStock ? 'disabled' : ''}`} disabled={!isInStock}>
//                 -
//               </button>
//             </div>

//             {/* -------------Increament Quantity and Decreament Quantity Code------------ */}





//             {/* ----------Add to Cart, Checkout and Order on Whatsapp Buttons ------------*/}

//             <button onClick={handleAddToCart} className={`fancy ${!isInStock ? 'disabled' : ''}`} disabled={!isInStock}>
//               <span className="top-key"></span>
//               <span className='text' >
//               <img src={addtocarticon} alt="AddtoCartIconError" style={{width:'2.5vmax', height:'2.2vmax'}}/>
//                 Add to Cart
//               </span>
//               <span className="bottom-key-1"></span>
//               <span className="bottom-key-2"></span>
//             </button>

            
//             <Link to='/ordernow' style={{textDecoration: 'none'}} className={!isInStock ? 'disabled' : ''}>
//               <button onClick={handleCheckout} className="fancy">
//                 <span className="top-key"></span>
//                 <span className='text'>Checkout</span>
//                 <span className="bottom-key-1"></span>
//                 <span className="bottom-key-2"></span>
//               </button>
//             </Link>


//             <button onClick={handleWhatsAppOrderClick} className={`fancy ${!isInStock ? 'disabled' : ''}`} disabled={!isInStock}>
//               <span className="top-key"></span>
//               <span className='text'>
//                 <img src={whatsappicon1} style={{width:'2rem',height:'2rem'}}/>
//                 Order on WhatsApp
//               </span>
//               <span className="bottom-key-1"></span>
//               <span className="bottom-key-2"></span>
//             </button>
//             {showForm && <WhatsAppOrderForm onSubmit={handleFormSubmit} onClose={handleCloseModal} />}
            
//           </div>
//         </div>
//         {/* ----------Add to Cart, Checkout and Order on Whatsapp Buttons ------------*/}




//         <h2 className='description'>Description:</h2>
//         <p>{product.description}</p>
//         <div className='productvideo'>
//           {/* {product.videoLink} */}
//           <iframe
//           width="100%"
//           height="100%"
//           src={product.videoLink} // Firebase se fetched video link
//           title={product.name}
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//         ></iframe>
//         </div>
//       </div>
//       {/* -----------------Product Detail Section------------------------- */}
      


//       {/* -----------Draw Text 2 Sided line code--------------- */}
//         <div className="text-container">
//           <div className="horizontal-line"></div>
//           <h3>🔥 You May Also Like 🔥</h3>
//           <div className="horizontal-line"></div>
//         </div>
//       {/* -----------Draw Text 2 Sided line code-------------- */}




//       {/* ------------------"You May Also Like" section----------------- */}
//         <Carousel responsive={responsive} containerClass="carousel-container">
//           {suggestedProducts.map(product => (
//             <div key={product.id} className="SuggestionsCard">
//               <Link to={`/product_detail/${product.id}`} className='SuggestionsProductDetailLink'>
//                 <img className="SuggestionsProduct--image" src={product.imageUrl} alt={product.name} />
//                 <h3 className="SuggestionsName">{product.name}</h3>
//                 <p className="SuggestionsPrice">Rs.{product.price}</p>
//               </Link>
//               <button onClick={() => addToCart(product)}>Add to Cart</button>
//             </div>
//           ))}
//         </Carousel>
//       {/* ------------------"You May Also Like" section----------------- */}
     
//     </>
//   );
// }