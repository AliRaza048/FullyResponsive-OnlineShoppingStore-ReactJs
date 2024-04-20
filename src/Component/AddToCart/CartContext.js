// CartContext.js
import React, { createContext, useContext, useState, useEffect  } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  
  function addToCart(item) {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    setCartItemCount(cartItemCount + 1); // Increment item count
  }

  function removeFromCart(item) {
    setCartItems((prevItems) => prevItems.filter((i) => i !== item));
    setCartItemCount(cartItemCount - 1); // Decrement item count
  }

  function incrementQuantity(item) {
    setCartItems((prevItems) => {
      return prevItems.map((prevItem) => {
        if (prevItem === item) {
          return { ...prevItem, quantity: prevItem.quantity + 1 };
        }
        return prevItem;
      });
    });
  }

  function decrementQuantity(item) {
    setCartItems((prevItems) => {
      return prevItems.map((prevItem) => {
        if (prevItem === item && prevItem.quantity > 1) {
          return { ...prevItem, quantity: prevItem.quantity - 1 };
        }
        return prevItem;
      });
    });
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartItemCount, incrementQuantity, decrementQuantity, }}>
      {children}
    </CartContext.Provider>
  );
}
