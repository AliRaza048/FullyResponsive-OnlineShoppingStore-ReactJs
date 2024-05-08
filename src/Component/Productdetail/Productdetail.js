import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate  } from 'react-router-dom';
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


export default function Productdetail() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { cartItemCount } = useCart(); 
  const { addToCart, addToCartProductdetail} = useCart();
  const [product, setProduct] = useState(null);
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  // Use the useParams hook to get the id parameter from the route
  const { id } = useParams();

  //Page Showing start from top
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); 
  //Page Showing start from top



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
    // Update product details


    // multiple product image
    const foundProduct = allProducts.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    if (foundProduct) {
      setSelectedImageUrl(foundProduct.imageurl[0]); // Set the first image as default
    }
    // multiple product image

    
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
  

  // increment, decrement quantity
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
  // increment, decrement quantity

  // if (!product) return <div>Loading...</div>;



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

  // isInstock If Product Quantity Greater than 0
  const isInStock = product.quantity > 0;
  //isInstock If Product Quantity Greater than 0


  //Order On Whatsapp
  const whatsappNumber = "+923265292748";
  const message = encodeURIComponent("");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
  //Order On Whatsapp

  
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
      {/*------------Search Product and cart, cartItemCount, login Section---------------*/}
      <div className='Part2'>
        
        {/* -------------Search Product code-------------- */}
        <div style={{display:'flex'}}>
          <Searchproduct productData={[...productlistData1, ...productlistData2, ...productlistData3, ...doubleproductlistData1, ...doubleproductlistData2]} />
          <img src={searchicon} alt="SearchIconError" style={{width:'2.5vmax', height:'2vmax', marginBottom:'3.5px'}}/>
        </div>
        {/* -------------Search Product code-------------- */}

        {/* -------cart, cartItemCount, login code-------- */}
        <div  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          {/* <Link to="/cart" className='link2'><img src={addtocarticon} alt="AddtoCartIconError" style={{width:'2.5vmax', height:'2vmax'}}/>Cart{cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}</Link> */}
          <Link to="/cart" className='link2'>{cartItemCount > 0 && <span className="cart-count" >{cartItemCount}</span>}<img src={addtocarticon} alt="AddtoCartIconError" style={{width:'2.5vmax', height:'2vmax'}}/></Link>
          {/* <Link to='/login' className='loginlink'><img src={usericon} style={{width:'55px', height:'38px' }} className='userimage'/>Login</Link> */}
          <Link to='/login' className='loginlink'><img src={usericon} style={{width:'4vmax', height:'2.9vmax' }} className='userimage'/></Link>
        </div>
        {/* -------cart, cartItemCount, login code-------- */}

      </div>
      {/*------------Search Product and cart, cartItemCount, login Section---------------*/}
      



      {/* -----------------Product Detail Section------------------------- */}
      <div className='productDetail'>
        <div style={{display:'flex'}}>
          {/* <img src={product.imageurl} alt={product.name} className='productimage'/> */}
          <div className='images-container'>
          <img src={selectedImageUrl} alt={product.name} className='productimage'/>
          {/* ----------------multiple product image--------------- */}
        <div className="image-selector" >
          {product.imageurl.map((url, index) => (
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
             
             {/* <p style={{ color: isInStock ? 'green' : 'red' }}>
              <div className="green-light"></div>
              <div className="red-light"></div>
              {stockStatus}
            </p> */}

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
            
            {/* <button onClick={incrementQuantity} disabled={!isInStock}>+</button>
            {quantity}
            <button onClick={decrementQuantity} disabled={!isInStock}>-</button> */}

            
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
  
            {/* <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleCheckout}>Checkout</button> */}
            {/* -------------Increament Quantity and Decreament Quantity Code------------ */}





            {/* ----------Add to Cart, Checkout and Order on Whatsapp Buttons ------------*/}

             {/* <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}><button className='whatsappbutton'><img src={whatsappicon1} style={{width:'2rem',height:'2rem'}}/>Order on WhatsApp</button></a> */}
            {/* <button onClick={() => addToCart(product)} className='addtocartbutton' style={{borderRadius:'7px'}}>Add to Cart</button> */}
            {/* <Link to='/ordernow'><button onClick={() => addToCart(product)} className='checkoutbutton'>Checkout</button></Link> */}

            {/* <button onClick={() => addToCart(product)} className="fancy"> */}
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
              {/* <button onClick={() => addToCart(product)} className="fancy"> */}
              <button onClick={handleCheckout} className="fancy">
                <span className="top-key"></span>
                <span className='text'>Checkout</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </button>
            </Link>

            {/* <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className='fancy'> */}
            <a
                href={isInStock ? `whatsapp://send?text=${encodeURIComponent(`Ordering ${product.name} - Rs.${product.price}`)}` : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`fancy ${!isInStock ? 'disabled' : ''}`}
            >
              <span className="top-key"></span>
              <span className='text'>
                <img src={whatsappicon1} style={{width:'2rem',height:'2rem'}}/>
                Order on WhatsApp
              </span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </a>
            
          </div>
        </div>
        {/* ----------Add to Cart, Checkout and Order on Whatsapp Buttons ------------*/}




        <h2 className='description'>Description:</h2>
        <p>{product.description}</p>
        <div className='productvideo'>
          {product.video}
        </div>
        {/* <p>{product.dex}</p> */}
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
                <img className="SuggestionsProduct--image" src={product.imageurl} alt={product.name} />
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
