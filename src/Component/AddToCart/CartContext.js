// CartContext.js
import React, { createContext, useContext, useState, useEffect  } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

//   function addToCartProductdetail(item) {
//     setCartItems(prevItems => {
//         const itemIndex = prevItems.findIndex(i => i.id === item.id);
//         if (itemIndex > -1) {
//             return prevItems.map((i, index) => {
//                 if (index === itemIndex) {
//                     return { ...i, quantity: i.quantity + item.quantity };
//                 }
//                 return i;
//             });
//         } else {
//             setCartItemCount(prevCount => {
//                 // console.log("Incrementing cart item count:", prevCount + 1);  // Log for debugging
//                 return prevCount + 1;
//             });
//             return [...prevItems, {...item, quantity: 1}];
//         }
//     });
// }

  function addToCartProductdetail(item) {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(i => i.id === item.id);
      if (itemIndex > -1) {
        // Update quantity if the item is already in the cart
        return prevItems.map((i, index) => {
          if (index === itemIndex) {
            return { ...i, quantity: i.quantity + item.quantity };
          }
          return i;
        });
      } else {
        // Add new item
        setCartItemCount(prevCount => prevCount + 1); // Only increment when a new item is added
        // setCartItemCount(cartItemCount + 1);
        return [...prevItems, item];
      }
    });
  }

  function addToCart(newItem) {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(item => item.id === newItem.id);
      if (itemIndex > -1) {
        // Product already exists in the cart, update the quantity
        return prevItems.map((item, index) => {
          if (index === itemIndex) {
            return {...item, quantity: item.quantity + 1};
          }
          return item;
        });
      } else {
        // Product does not exist, add new item to the cart
        setCartItemCount(prevCount => prevCount + 1);
        return [...prevItems, {...newItem, quantity: 1}];
      }
    });
    // setCartItemCount(prevCount => prevCount + 1);
  }
  
  function removeFromCart(item) {
    setCartItems(prevItems => {
      const remainingItems = prevItems.filter(i => i.id !== item.id);
      if (prevItems.length > remainingItems.length) {
        // Only decrement the cart item count if an item was actually removed
        setCartItemCount(prevCount => prevCount - 1);
      }
      return remainingItems;
    });
  }

  function incrementQuantity(item) {
    setCartItems(prevItems => prevItems.map(i => {
      if (i.id === item.id) {
        return { ...i, quantity: i.quantity + 1 };
      }
      return i;
    }));
  }
  
  function decrementQuantity(item) {
    setCartItems(prevItems => prevItems.map(i => {
      if (i.id === item.id && i.quantity > 1) {
        return { ...i, quantity: i.quantity - 1 };
      } else {
        return i; // If quantity is 1, do not decrement here because it should not turn negative or zero
      }
    }));
  }
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, addToCartProductdetail, removeFromCart, cartItemCount, incrementQuantity, decrementQuantity, }}>
      {children}
    </CartContext.Provider>
  );
}






// CartContext.js
// import React, { createContext, useContext, useState, useEffect  } from 'react';

// const CartContext = createContext();

// export function useCart() {
//   return useContext(CartContext);
// }

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartItemCount, setCartItemCount] = useState(0);
//   function addToCart(item) {
//     setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
//     setCartItemCount(cartItemCount + 1); // Increment item count
//   }

//   function removeFromCart(item) {
//     setCartItems((prevItems) => prevItems.filter((i) => i !== item));
//     setCartItemCount(cartItemCount - 1);
//   }

//   function incrementQuantity(item) {
//     setCartItems((prevItems) => {
//       return prevItems.map((prevItem) => {
//         if (prevItem === item) {
//           return { ...prevItem, quantity: prevItem.quantity + 1 };
//         }
//         return prevItem;
//       });
//     });
//   }

//   function decrementQuantity(item) {
//     setCartItems((prevItems) => {
//       return prevItems.map((prevItem) => {
//         if (prevItem === item && prevItem.quantity > 1) {
//           return { ...prevItem, quantity: prevItem.quantity - 1 };
//         }
//         return prevItem;
//       });
//     });
//   }

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, addToCartProductdetail, removeFromCart, cartItemCount, incrementQuantity, decrementQuantity, }}>
//       {children}
//     </CartContext.Provider>
//   );
// }