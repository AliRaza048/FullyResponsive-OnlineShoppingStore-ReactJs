import React,{useEffect} from 'react'
import {productlistData3} from '../ProductCarousal1/data'
import Products from '../ProductCarousal1/Products';
import { useCart } from '../AddToCart/CartContext';
import addtocarticon from '../Images/addtocarticon.png'
import searchicon from '../Images/searchicon.png'
import { Link, useNavigate, useLocation  } from 'react-router-dom';
import '../HomePage/Home.css';
import './Viewallproducts.css'
import Searchproduct from '../SearchProduct/Searchproduct';
import { productlistData1, productlistData2 } from '../ProductCarousal1/data';
import { doubleproductlistData1, doubleproductlistData2 } from '../Only2ProductCarousal/data';
import usericon from '../Images/usericon.png'

export default function Homeimprovement() {

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


    const HomeimprovementallProducts = [...productlistData3];
    const { addToCart} = useCart();
    const { cartItemCount } = useCart();

    //after successful login Redirect user current page mean as it is previous page
    const handleLoginNavigate = () => {
    // console.log("Attempting to navigate to /login")
    navigate('/login', { state: { from: location.pathname } });
    };
    //after successful login Redirect user current page mean as it is previous page


  return (
    <>
       <div className='Part2'>
            <div style={{display:'flex'}}>
            <Searchproduct productData={[...productlistData1, ...productlistData2, ...productlistData3, ...doubleproductlistData1, ...doubleproductlistData2]} />
            {/* <Searchproduct productData={[...productlistData3]} /> */}
                <img src={searchicon} alt="SearchIconError" style={{width:'2.5vmax', height:'2vmax', marginBottom:'3.5px'}}/>
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                {/* <Link to="/cart" className='link2'><img src={addtocarticon} alt="AddtoCartIconError" style={{width:'2.5vmax', height:'2vmax'}}/>Cart{cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}</Link> */}
                <Link to="/cart" className='link2'>{cartItemCount > 0 && <span className="cart-count" >{cartItemCount}</span>}<img src={addtocarticon} alt="AddtoCartIconError" style={{width:'3vmax', height:'2.5vmax'}}/></Link>
                {/* <Link to='/login' className='loginlink'><img src={usericon} style={{width:'55px', height:'38px' }} className='userimage'/>Login</Link> */}
                {/* <Link to='/login' className='loginlink'><img src={usericon} style={{width:'4vmax', height:'2.9vmax' }} className='userimage'/></Link> */}
                <img src={usericon} alt="Login" onClick={handleLoginNavigate} style={{width:'5vmax', height:'3.5vmax' }} className='userimage'/>
            </div>
        </div>

        <div className="view-all-products">
            {HomeimprovementallProducts.map((item) => (
                <Products
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    imageurl={item.imageurl}
                    price={item.price}
                    description={item.description}
                    addToCart={addToCart}
                    quantity={item.quantity}
                />
            ))}
        </div>
    </>
  )
}