import React, { useEffect, useState } from 'react';
import { useParams, useLocation  } from 'react-router-dom';
import { productlistData1, productlistData2, productlistData3 } from '../ProductCarousal1/data';
import { doubleproductlistData1, doubleproductlistData2 } from '../Only2ProductCarousal/data';
import { Link } from 'react-router-dom';
import { useCart } from '../AddToCart/CartContext';
import addtocarticon from '../Images/addtocarticon.png'
import searchicon from '../Images/searchicon.png'
import '../HomePage/Home.css';
import './Productdetail.css'
import Searchproduct from '../SearchProduct/Searchproduct';
import whatsappicon1 from '../Images/whatsappicon1.png'
import usericon from '../Images/usericon.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Productdetail(item) {

//Page Showing start from top
const location = useLocation();
useEffect(() => {
  window.scrollTo(0, 0);
}, [location]); 
//Page Showing start from top


// const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, } = useCart();

  const { cartItemCount } = useCart(); 
  const { addToCart} = useCart();


  // Use the useParams hook to get the id parameter from the route
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [suggestedProducts, setSuggestedProducts] = useState([]);


  //apny apny data me sy 5 product ky baad 1 product uhtaye ga. asy hi loop chale ga aur 4 product uhta ky may also me show hon gi
  useEffect(() => {
    const allProducts = [
      ...productlistData1,
      ...productlistData2,
      ...productlistData3,
      ...doubleproductlistData1,
      ...doubleproductlistData2
    ];
  
    // Update product details
    const newProduct = allProducts.find(product => product.id === parseInt(id));
    if (newProduct !== product) {
      setProduct(newProduct);
    }
  
    // Get the dataset of the selected product
    let selectedDataset;
    if (productlistData1.some(product => product.id.toString() === id)) {
      selectedDataset = productlistData1;
    } else if (productlistData2.some(product => product.id.toString() === id)) {
      selectedDataset = productlistData2;
    } else if (productlistData3.some(product => product.id.toString() === id)) {
      selectedDataset = productlistData3;
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
  }, [id, productlistData1, productlistData2, productlistData3, doubleproductlistData1, doubleproductlistData2]);
   //apny apny data me sy 5 product ky baad 1 product uhtaye ga. asy hi loop chale ga aur 4 product uhta ky may also me show hon gi




  //apny apny data me sy pahli 4 product uhta ky may also me show hon gi
  // useEffect(() => {
  //   const allProducts = [
  //     ...productlistData1,
  //     ...productlistData2,
  //     ...productlistData3,
  //     ...doubleproductlistData1,
  //     ...doubleproductlistData2
  //   ];
  
  //   // Update product details
  //   const newProduct = allProducts.find(product => product.id === parseInt(id));
  //   if (newProduct !== product) {
  //     setProduct(newProduct);
  //   }
  
  //   // Get the dataset of the selected product
  //   let selectedDataset;
  //   if (productlistData1.some(product => product.id.toString() === id)) {
  //     selectedDataset = productlistData1;
  //   } else if (productlistData2.some(product => product.id.toString() === id)) {
  //     selectedDataset = productlistData2;
  //   } else if (productlistData3.some(product => product.id.toString() === id)) {
  //     selectedDataset = productlistData3;
  //   } else if (doubleproductlistData1.some(product => product.id.toString() === id)) {
  //     selectedDataset = doubleproductlistData1;
  //   } else if (doubleproductlistData2.some(product => product.id.toString() === id)) {
  //     selectedDataset = doubleproductlistData2;
  //   }
  
  //   // Update suggested products
  //   const newSuggestedProducts = selectedDataset
  //     .filter(product => product.id.toString() !== id)
  //     .slice(0, 4);
  
  //   // Assuming a simple comparison is insufficient, implement a deeper comparison or use a library like lodash for _.isEqual
  //   if (JSON.stringify(newSuggestedProducts) !== JSON.stringify(suggestedProducts)) {
  //     setSuggestedProducts(newSuggestedProducts);
  //   }
  // }, [id, productlistData1, productlistData2, productlistData3, doubleproductlistData1, doubleproductlistData2]);
  
  // useEffect(() => {
  //   const allProducts = [...productlistData1, ...productlistData2, ...productlistData3, ...doubleproductlistData1, ...doubleproductlistData2];

  //   // Update product details
  //   const newProduct = allProducts.find(product => product.id === parseInt(id));
  //   if (newProduct !== product) {
  //     setProduct(newProduct);
  //   }
 //apny apny data me sy pahli 4 product uhta ky may also me show hon gi





  //   // Update suggested products
  //   const newSuggestedProducts = allProducts.filter(product => product.id.toString() !== id)
  //                                            .sort(() => 0.5 - Math.random())
  //                                            .slice(0, 4);
  //   // Assuming a simple comparison is insufficient, implement a deeper comparison or use a library like lodash for _.isEqual
  //   if (JSON.stringify(newSuggestedProducts) !== JSON.stringify(suggestedProducts)) {
  //     setSuggestedProducts(newSuggestedProducts);
  //   }
  // }, [id]); // Removed allProducts from dependencies to avoid re-running this effect unnecessarily

  if (!product) {
    return <div>Product not found</div>;
  }

  const whatsappNumber = "+923265292748";
  const message = encodeURIComponent("Hello, how can i help you?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  
  //   const allProducts = [...productlistData1, ...productlistData2, ...productlistData3, ...doubleproductlistData1, ...doubleproductlistData2];
  //   const getProductDetails = () => {
  //   return allProducts.find(product => product.id === parseInt(id));
  // };
  // const product = getProductDetails();
//  const getSuggestedProducts = () => {
//   const filteredProducts = allProducts.filter(product => product.id.toString() !== id);
//   filteredProducts.sort(() => 0.5 - Math.random());
//   return filteredProducts.slice(0, 4); // Adjust the number for more or fewer suggestions
// };
// const suggestedProducts = getSuggestedProducts();

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
      <div className='Part2'>
        <div style={{display:'flex'}}>
        <Searchproduct productData={[...productlistData1, ...productlistData2, ...productlistData3, ...doubleproductlistData1, ...doubleproductlistData2]} />
          <img src={searchicon} alt="SearchIconError" style={{width:'2.5vmax', height:'2vmax', marginBottom:'3.5px'}}/>
        </div>
        <div  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          {/* <Link to="/cart" className='link2'><img src={addtocarticon} alt="AddtoCartIconError" style={{width:'2.5vmax', height:'2vmax'}}/>Cart{cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}</Link> */}
          <Link to="/cart" className='link2'>{cartItemCount > 0 && <span className="cart-count" >{cartItemCount}</span>}<img src={addtocarticon} alt="AddtoCartIconError" style={{width:'2.5vmax', height:'2vmax'}}/></Link>
          {/* <Link to='/login' className='loginlink'><img src={usericon} style={{width:'55px', height:'38px' }} className='userimage'/>Login</Link> */}
          <Link to='/login' className='loginlink'><img src={usericon} style={{width:'4vmax', height:'2.9vmax' }} className='userimage'/></Link>
        </div>
      </div>
      

      <div className='productDetail'>
        <div style={{display:'flex'}}>
          <img src={product.imageurl} alt={product.name} className='productimage'/>
          <div style={{marginLeft:'5%'}}>
            <h2 style={{wordWrap:'break-word'}}>{product.name}</h2>
            <p style={{fontSize:'large', fontStyle:'oblique'}}>Rs.{product.price}</p>


            {/* {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-quantity">
                  <button onClick={() => decrementQuantity(item)} className='decrementbutton'>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item)} className='incrementbutton'>+</button>
                </div>
              </div>
            ))} */}

            
            {/* <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}><button className='whatsappbutton'><img src={whatsappicon1} style={{width:'2rem',height:'2rem'}}/>Order on WhatsApp</button></a> */}
            {/* <button onClick={() => addToCart(product)} className='addtocartbutton' style={{borderRadius:'7px'}}>Add to Cart</button> */}
            {/* <Link to='/ordernow'><button onClick={() => addToCart(product)} className='checkoutbutton'>Checkout</button></Link> */}
            
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className='fancy'>
              <span className="top-key"></span>
              <span className='text'>
                <img src={whatsappicon1} style={{width:'2rem',height:'2rem'}}/>
                Order on WhatsApp
              </span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </a>
            <button onClick={() => addToCart(product)} className="fancy">
              <span className="top-key"></span>
              <span className='text' >
              <img src={addtocarticon} alt="AddtoCartIconError" style={{width:'2.5vmax', height:'2.2vmax'}}/>
                Add to Cart
              </span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
            <Link to='/ordernow' style={{textDecoration:'none'}}>
              <button onClick={() => addToCart(product)} className="fancy">
                <span className="top-key"></span>
                <span className='text'>Checkout</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </button>
            </Link>
          
          </div>
        </div>
        <h2 className='description'>Description:</h2>
        <p>{product.description}</p>
        <div className='productvideo'>
          {product.video}
        </div>
        {/* <p>{product.dex}</p> */}
      </div>
      
       {/* Draw Text 2 Sided line code*/}
        <div className="text-container">
          <div className="horizontal-line"></div>
          <h3>🔥 You May Also Like 🔥</h3>
          <div className="horizontal-line"></div>
        </div>
       {/* Draw Text 2 Sided line code*/}

       {/* "You May Also Like" section */}
        <Carousel responsive={responsive} containerClass="carousel-container">
          {suggestedProducts.map(product => (
            <div key={product.id} className="SuggestionsCard">
              <Link to={`/product_detail/${product.id}`} className='SuggestionsProductDetailLink'>
                <img className="SuggestionsProduct--image" src={product.imageurl} alt={product.name} />
                <h3 className="SuggestionsName">{product.name}</h3>
                <p className="SuggestionsPrice">Rs.{product.price}</p>
              </Link>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </Carousel>
     
    </>
  );
}



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { productData1, productData2, productData3 } from "../ProductCarousal1/data";

// export default function Productdetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const allProducts = [...productData1, ...productData2, ...productData3];
//     const foundProduct = allProducts.find((product) => product.id === parseInt(id));

//     if (foundProduct) {
//       setProduct(foundProduct);
//     } else {
//       // If product is not found, redirect or show an error message
//       console.error("Product not found");
//     }

//     setLoading(false);
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <img src={product.imageurl} alt={product.name} />
//       <p>Price: Rs.{product.price}</p>
//       <p>Description: {product.description}</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// }