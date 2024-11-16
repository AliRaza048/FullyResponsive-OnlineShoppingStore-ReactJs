import React, { createContext, useContext, useState, useEffect  } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);


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
          // Item exists, just update the quantity
          return prevItems.map((item, index) => {
              if (index === itemIndex) {
                  return {...item, quantity: item.quantity + 1}; // Increment the quantity
              }
              return item;
          });
      } else {
          // New item, increment the cartItemCount
          setCartItemCount(prevCount => prevCount + 1);
          return [...prevItems, {...newItem, quantity: 1}]; // Add new item with quantity 1
      }
  });
}


function removeFromCart(item) {
    setCartItems(prevItems => {
        const itemToRemove = prevItems.find(i => i.id === item.id);
        if (itemToRemove) {
            // Decrement by the quantity of the removed item.
            setCartItemCount(prevCount => Math.max(0, prevCount - itemToRemove.quantity));
        }
        return prevItems.filter(i => i.id !== item.id);
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
        return i; 
      }
    }));
  }
 
  useEffect(() => {
    const totalCount = cartItems.reduce((count, item) => count + item.quantity, 0);
    setCartItemCount(totalCount);
  }, [cartItems]);

  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, addToCartProductdetail, removeFromCart, cartItemCount, incrementQuantity, decrementQuantity, }}>
      {children}
    </CartContext.Provider>
  );
}
