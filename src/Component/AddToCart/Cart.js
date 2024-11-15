//------Database Attched--------
// // Cart.js
// import React, { useEffect } from 'react';
// import './Cart.css';
// import { useCart } from './CartContext';
// import { useNavigate } from "react-router-dom";
// import { useAuth } from '../firebase/AuthContext';

// function Cart() {
//   const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
//   const { user, handleUserNavigation } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const calculatePerItemTotalPrice = (item) => {
//     return (item.price * item.quantity).toFixed(2);
//   };

//   const calculateFullTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
//   };

//   const handleCheckoutClick = () => {
//     if (user) {
//       if (cartItems.length === 0) {
//         alert("Please add products to the cart before proceeding to checkout.");
//       } else {
//         navigate('/checkout');  // Navigate to the checkout page
//       }
//     } else {
//       handleUserNavigation();  // Redirect to login if not logged in
//     }
//   };

//   return (
//     <>
//       <div className="cart-container">
//         <table className="cart-table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Product</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item, index) => (
//               <tr key={item.id}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <img src={item.imageurl[0]} alt={item.name} style={{width: '50px', height: '50px'}} /><br />
//                   {item.name}
//                 </td>
//                 <td>Rs.{Number(item.price).toFixed(2)}</td>
//                 <td>
//                   <button onClick={() => decrementQuantity(item.id)} className='decrementbutton'>-</button>
//                   {item.quantity}
//                   <button onClick={() => incrementQuantity(item.id)} className='incrementbutton'>+</button>
//                 </td>
//                 <td>Rs.{calculatePerItemTotalPrice(item)}</td>
//                 <td>
//                   <button onClick={() => removeFromCart(item.id)} className='removebutton'>Remove</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="fulltotalprice">
//         Total Price: Rs.{calculateFullTotalPrice()}
//         <button onClick={handleCheckoutClick} className='checkoutbutton'>
//           Check Out
//         </button>
//       </div>
//     </>
//   );
// }

// export default Cart;



//----------Original--------
import React,{ useState, useEffect } from 'react'
import './Cart.css'
import { useCart } from './CartContext';
import { useNavigate  } from "react-router-dom";
// import Login from '../Authentication/Login';
import { useAuth } from '../firebase/AuthContext';


function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const { user, handleUserNavigation } = useAuth();



  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  const CalculatePerItemTotalPrice = (item) => {
    // const price = Number(item.price);
    return (item.price * item.quantity).toFixed(2);
  };


  const calculateFullTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };
  // const calculateFullTotalPrice = () => {
  //   return cartItems.reduce((total, item) => {
  //     return total + item.price * item.quantity;
  //   }, 0).toFixed(2); // Sum up the total and format it
  // };





  // const handleCheckoutClick = () => {
  //   if (isLoggedIn) {
  //     navigate('/checkout');
  //   } 
  //   else if (cartItems.length === 0) {
  //     alert("Please add products to the cart before proceeding to checkout.");
  //   }
  //   else {
  //     navigate('/login');
  //   }
  // };
  // const handleCheckoutClick = () => {
  //   if (isLoggedIn) {
  //     if (cartItems.length === 0) {
  //       alert("Please add products to the cart before proceeding to checkout.");
  //     } else {
  //       navigate('/checkout');
  //     }
  //   } else {
  //     // Redirect to login page and pass the current path for redirect after login
  //     navigate('/login', { state: { from: '/cart' } });
  //   }
  // };
  const handleCheckoutClick = () => {
    if (user) {  // Use the user object to check authentication
      if (cartItems.length === 0) {
        alert("Please add products to the cart before proceeding to checkout.");
      } else {
        navigate('/checkout');  // Utilize the existing navigation handler
      }
    } else {
      handleUserNavigation();  // This will navigate to login if not logged in
    }
  };
  
  
  // const handleCheckoutClick = () => {
  //   // Check if user is logged in
  //   if (isLoggedIn) {
  //     // Check if the cart is empty
  //     if (cartItems.length === 0) {
  //       alert("Please add products to the cart before proceeding to checkout.");
  //     } else {
  //       // Redirect to billing page
  //       navigate('/checkout'); // Update this line
  //     }
  //   } else {
  //     // Redirect to login page
  //     navigate('/login'); // Update this line
  //   }
  // };
  


  return (
    <>
      <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Per Item Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><img src={item.imageUrl} alt="item-image"/><br/>{item.name}</td>
              {/* <td>${item.price}</td> */}
              <td>Rs.{Number(item.price).toFixed(2)}</td>
              <td>
                <button onClick={() => decrementQuantity(item)} className='decrementbutton'>-</button>
                {item.quantity}
                <button onClick={() => incrementQuantity(item)} className='incrementbutton'>+</button>
              </td>
              <td>{item.price} * {item.quantity} = {CalculatePerItemTotalPrice(item)}</td>
              <td>
                <button onClick={() => removeFromCart(item)} className='removebutton'>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="fulltotalprice">
        Total Price: Rs.{calculateFullTotalPrice()}
        <br/>
         {/* <NavLink to="/login"><button onClick={Login} className='checkoutbutton' ><i class="ri-shopping-cart-2-line"></i>CheckOut</button></NavLink> */}
         {/* <NavLink to="/login" className='checkoutbutton'><i class="ri-shopping-cart-2-line"></i>CheckOut</NavLink> */}
         <button onClick={handleCheckoutClick} className='checkoutbutton'>
          <i className="ri-shopping-cart-2-line"></i>CheckOut
        </button>
    </div>
    </>
  )
}
export default Cart;
