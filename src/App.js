import React, {useEffect} from 'react'
import './App.css';
import Home from './Component/HomePage/Home';
import Contact from './Component/Contact/Contact';
import Cart from './Component/AddToCart/Cart';
import {BrowserRouter, Routes, Route, Link, NavLink, useLocation} from "react-router-dom";
import { CartProvider } from '../src/Component/AddToCart/CartContext';
import logo from '../src/Component/Images/blacklogo.png';
import WhatsAppButton from '../src/Component/WhatsAppButton/WhatsAppButton';
import RefundPolicy from './Component/TermsAndConditions/RefundPolicy';
import PrivcyPolicy from './Component/TermsAndConditions/PrivacyPolicy';
import TermsOfService from './Component/TermsAndConditions/TermsOfService';
import ShippingPolicy from './Component/TermsAndConditions/ShippingPolicy';
import ContactInformation from './Component/TermsAndConditions/ContactInformation';
import facebookicon from '../src/Component/Images/facebookicon.png'
import instagramicon from '../src/Component/Images/instagramicon.png'
import tiktokicon from '../src/Component/Images/tiktokicon.png'
import ourmissionicon from '../src/Component/Images/ourmissionicon.png'
import contactusicon from '../src/Component/Images/contactusicon.png'
import Login from '../src/Component/Authentication/Login'
import Register from '../src/Component/Authentication/Register'
import Forgotpassword from './Component/Authentication/Forgotpassword'
import Topcollections from './Component/Viewallproducts/Topcollections';
import Electronicscollection from './Component/Viewallproducts/Electronicscollection';
import Homeimprovement from './Component/Viewallproducts/Homeimprovement';
import Checkout from './Component/Checkout/Checkout';
import Productdetail from '../src/Component/Productdetail/Productdetail';
import { AboutUs } from './Component/TermsAndConditions/AboutUs';
import coder from '../src/Component/Images/coder.png';
import { AuthProvider } from '../src/Component/firebase/AuthContext';
import Receipt from '../src/Component/Receipt/Receipt';


function Main() {

  //Page Showing start from top
  useEffect(() => {
    window.scrollTo(0, 0);
}, []); 
//Page Showing start from top

  const location = useLocation();
  // const renderHeaderAndFooter = location.pathname !== '/login';
  const renderHeaderAndFooter = !['/login', '/register', '/forgotpassword', '/checkout', '/termsofservice', '/privcypolicy', '/contactinformation', '/refundpolicy', '/shippingpolicy'].includes(location.pathname);
  
  
  return (
    <>
    {renderHeaderAndFooter && (
      <>
        <header>Welcome to our Official PK Online Store 🔥</header>
        
        <div className='maindiv'>

          <div className='div1chlid1'>
            <Link to="/" className='link1'>ínPKønlineśhop🛍</Link>
            {/* <Link to="/" className='link1'>inPKonlineshop</Link> */}
          </div>

          <div className='div1child2'>
            <NavLink to="/" className='link3'>Home</NavLink>
            <NavLink to="/electronics" className='link3'>Electronics</NavLink>
            <NavLink to="/home_improvement" className='link3'>Home Improvement</NavLink>
            
            <NavLink to="/about-us" className='link3'>About Us</NavLink>
            <NavLink to="/contact-us" className='link3'>Contact Us</NavLink>
            {/* <NavLink to="/checkout" className='link3'>Checkout</NavLink> */}
          </div>

        </div>
      </>
    )}

    <CartProvider>
    <AuthProvider>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/contact-us' Component={Contact} />
        <Route path='/cart' Component={Cart} />
        <Route path='/shopnow' Component={Cart} />
        <Route path='/ordernow' Component={Cart} />
        <Route path='/refundpolicy' Component={RefundPolicy} />
        <Route path='/privcypolicy' Component={PrivcyPolicy} />
        <Route path='/termsofservice' Component={TermsOfService} />
        <Route path='/shippingpolicy' Component={ShippingPolicy} />
        <Route path='/contactinformation' Component={ContactInformation} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgotpassword' element={<Forgotpassword />} />
        <Route path='/top_collections' Component={Topcollections} />
        <Route path='/electronics' Component={Electronicscollection} />
        <Route path='/home_improvement' Component={Homeimprovement} />
        <Route path='/checkout' Component={Checkout} />
        <Route path="/product_detail/:id" Component={Productdetail} />
        <Route path='/about-us' Component={AboutUs} />
        <Route path='/receipt' element={<Receipt />} />
      </Routes>
      </AuthProvider>
    </CartProvider>
        
    {renderHeaderAndFooter && (
      <>
      <footer>
        <div className='OLC'>
          <div className='ourmission'>
            <h3><img src={ourmissionicon} alt="OurMissionIconError" />Our Mission</h3>
            <p>inPKonlineshop is online shopping store that focuses on selling high quality products at low prices to customers.</p>
          </div>

          <div className='logo'>
          <Link to="/" className='link1' style={{marginRight:'5vmax'}}><img src={logo} alt='error' /></Link>
          </div>

          <div className='contactus'>
            <h3><img src={contactusicon} alt="ContactUsIconError" />Contact Us</h3>
            <p>Email Address:<br/><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}>inpkonlineshop@gmail.com</a></p>
            <p>Contact No:<br/>+92-326-5292748</p>
            {/* style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}} */}
          </div>
        </div>

          <div className='social-links'>
            {/* <a href="https://www.facebook.com/inpkonlineshop" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}><i class="ri-facebook-circle-fill" style={{ fontSize: '35px', width: '40px', height: '40px', color:'white'}}></i></a> */}
            <a href="https://www.facebook.com/inpkonlineshop" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}> <img src={facebookicon} alt="Facebook" /></a>
            <a href="https://www.instagram.com/inpkonlineshop?igsh=ZGNjOWZkYTE3MQ==" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}><img src={instagramicon} alt="Facebook" /></a>
            <a href="https://www.tiktok.com/@inpkonlineshop?" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}> <img src={tiktokicon} alt="Tiktok" style={{width:'50px', height:'53px',marginLeft:'-8px'}}/></a>
          </div>

          <p className='copyright'>© 2023, Copyright inPKonlineshop®. All rights reserved.</p>

          <div className='terms-and-conditions' >
            <Link to="/refundpolicy" className='terms-and-condition-link' >Refund policy</Link>
            <Link to="/privcypolicy" className='terms-and-condition-link'>Privacy policy</Link>
            <Link to="/termsofservice" className='terms-and-condition-link'>Terms of Service</Link>
            <Link to="/shippingpolicy" className='terms-and-condition-link'>Shipping Policy</Link>
            <Link to="/contactinformation" className='terms-and-condition-link'>Contact information</Link>
            <br/><br/>
          </div>
          <p style={{
              backgroundColor:'black',
              fontSize: '1.5vmax',
              marginBottom:"10px",
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
              }}>
            ❤️dac
            <img src={coder} alt="developer" 
              style={{width:'1.5vmax', height:'1.5vmax', marginLeft:'4px'}}/>
          </p>
          <br/>
      </footer>
      <WhatsAppButton />
      </>
    )}
    
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}
export default App;



// import './App.css';
// import Home from './Component/HomePage/Home';
// import Contact from './Component/Contact/Contact';
// import Cart from './Component/AddToCart/Cart';
// import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
// import { CartProvider } from './Component/AddToCart/CartContext';
// import logo from '../src/Component/Images/blacklogo.png';
// import WhatsAppButton from '../src/Component/WhatsAppButton/WhatsAppButton';
// import RefundPolicy from './Component/TermsAndConditions/RefundPolicy';
// import PrivcyPolicy from './Component/TermsAndConditions/PrivacyPolicy';
// import TermsOfService from './Component/TermsAndConditions/TermsOfService';
// import ShippingPolicy from './Component/TermsAndConditions/ShippingPolicy';
// import ContactInformation from './Component/TermsAndConditions/ContactInformation';
// import facebookicon from '../src/Component/Images/facebookicon.png'
// import instagramicon from '../src/Component/Images/instagramicon.png'
// import ourmissionicon from '../src/Component/Images/ourmissionicon.png'
// import contactusicon from '../src/Component/Images/contactusicon.png'

// function App() {

//   return (
//     <>
    
//       <header>Welcome to our Official PK Online Store 🔥</header>
      
//       <BrowserRouter>
//         <div className='maindiv'>

//           <div className='div1chlid1'>
//             <Link to="/" className='link1'>inPKonlineshop</Link>
//           </div>

//           <div className='div1child2'>
//             <NavLink to="/" className='link3'>Home</NavLink>
//             <NavLink to="/contact" className='link3'>Contact</NavLink>
//           </div>

//         </div>

//         <CartProvider>
//         <Routes>
//           <Route path='/' Component={Home} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/cart' Component={Cart} />
//           <Route path='/shopnow' Component={Cart} />
//           <Route path='/refundpolicy' Component={RefundPolicy} />
//           <Route path='/privcypolicy' Component={PrivcyPolicy} />
//           <Route path='/termsofservice' Component={TermsOfService} />
//           <Route path='/shippingpolicy' Component={ShippingPolicy} />
//           <Route path='/contactinformation' Component={ContactInformation} />
//         </Routes>
//         </CartProvider>
      
//       <footer>
//         <div className='OLC'>
//           <div className='ourmission'>
//             <h3><img src={ourmissionicon} alt="OurMissionIconError" />Our Mission</h3>
//             <p>inPKonlineshop is online shopping store that focuses on selling high quality products at low pricess to customers.</p>
//           </div>

//           <div className='logo'>
//             <img src={logo} alt='error' />
//           </div>

//           <div className='contactus'>
//             <h3><img src={contactusicon} alt="ContactUsIconError" />Contact Us</h3>
//             <p>Email Address:<br/><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}>inpkonlineshop@gmail.com</a></p>
//             <p>Contact No:<br/>+92-326-5292748</p>
//             {/* style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}} */}
//           </div>
//           </div>

//           <div className='social-links'>
//           {/* <a href="https://www.facebook.com/inpkonlineshop" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}><i class="ri-facebook-circle-fill" style={{ fontSize: '35px', width: '40px', height: '40px', color:'white'}}></i></a> */}
//           <a href="https://www.facebook.com/inpkonlineshop" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}> <img src={facebookicon} alt="Facebook" /></a>
//           <a href="https://www.instagram.com/inpkonlineshop?igsh=ZGNjOWZkYTE3MQ==" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}><img src={instagramicon} alt="Facebook" /></a>
//           </div>

//           <p className='copyright'>© 2023, Copyright inPKonlineshop®. All rights reserved.</p>

//           <div className='terms-and-conditions' >
//           <Link to="/refundpolicy" className='terms-and-condition-link' >Refund policy</Link>
//           <Link to="/privcypolicy" className='terms-and-condition-link'>Privcy policy</Link>
//           <Link to="/termsofservice" className='terms-and-condition-link'>Terms of service</Link>
//           <Link to="/shippingpolicy" className='terms-and-condition-link'>Shipping Policy</Link>
//           <Link to="/contactinformation" className='terms-and-condition-link'>Contact information</Link>
//           <br/><br/>
//           </div>

//       </footer>
        
//         </BrowserRouter>
//         <WhatsAppButton />
      
//     </>
//   );
// }
// export default App;
