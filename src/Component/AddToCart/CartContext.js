//----------------databases attched
// // CartContext.js

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { db } from '../firebase/firebase';
// import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
// import { useAuth } from '../firebase/AuthContext';

// const CartContext = createContext();

// export function useCart() {
//   return useContext(CartContext);
// }

// export function CartProvider({ children }) {
//   const { user } = useAuth();
//   const [cartItems, setCartItems] = useState([]);
//   const [cartItemCount, setCartItemCount] = useState(0);

//   // Load cart items from localStorage if user is not logged in
//   useEffect(() => {
//     if (!user) {
//       const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//       setCartItems(storedCart);
//     }
//   }, [user]);

//   // Sync cart items with Firebase when user logs in
//   useEffect(() => {
//     const fetchCartItems = async () => {
//       if (user) {
//         const userCartRef = collection(db, 'carts', user.uid, 'items');
//         const snapshot = await getDocs(userCartRef);
//         const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setCartItems(items);
//       }
//     };
//     if (user) {
//       fetchCartItems();
//     }
//   }, [user]);

//   // Update localStorage whenever cartItems changes, if user is not logged in
//   useEffect(() => {
//     if (!user) {
//       localStorage.setItem('cart', JSON.stringify(cartItems));
//     }
//   }, [cartItems, user]);

//   // Recalculate cart item count whenever cartItems changes
//   useEffect(() => {
//     const newCartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
//     setCartItemCount(newCartItemCount);
//   }, [cartItems]);


//   // const addToCart = async (newItem) => {
//   //   const quantity = newItem.quantity || 1;  // Default to 1 if no quantity specified
  
//   //   if (user) {
//   //     const itemRef = doc(db, 'carts', user.uid, 'items', newItem.id);
//   //     const cartItem = cartItems.find(item => item.id === newItem.id);
  
//   //     if (cartItem) {
//   //       const newQuantity = cartItem.quantity + quantity;
//   //       await updateDoc(itemRef, { quantity: newQuantity });
//   //       setCartItems(prevItems =>
//   //         prevItems.map(i => i.id === newItem.id ? { ...i, quantity: newQuantity } : i)
//   //       );
//   //     } else {
//   //       await setDoc(itemRef, { ...newItem, quantity });
//   //       setCartItems(prevItems => [...prevItems, { ...newItem, quantity }]);
//   //     }
//   //   } else {
//   //     const existingItemIndex = cartItems.findIndex(item => item.id === newItem.id);
  
//   //     if (existingItemIndex > -1) {
//   //       setCartItems(prevItems =>
//   //         prevItems.map((item, index) =>
//   //           index === existingItemIndex ? { ...item, quantity: item.quantity + quantity } : item
//   //         )
//   //       );
//   //     } else {
//   //       setCartItems(prevItems => [...prevItems, { ...newItem, quantity }]);
//   //     }
//   //     localStorage.setItem('cart', JSON.stringify(cartItems));
//   //   }
//   // };
  
//   const addToCart = async (newItem) => {
//     const quantity = newItem.quantity || 1;

//     if (user) {
//       const itemRef = doc(db, 'carts', user.uid, 'items', newItem.id);
//       const existingItem = cartItems.find(item => item.id === newItem.id);

//       try {
//         if (existingItem) {
//           const newQuantity = existingItem.quantity + quantity;
//           await updateDoc(itemRef, { quantity: newQuantity });
//           setCartItems(prevItems =>
//             prevItems.map(i => (i.id === newItem.id ? { ...i, quantity: newQuantity } : i))
//           );
//         } else {
//           await setDoc(itemRef, { ...newItem, quantity });
//           setCartItems(prevItems => [...prevItems, { ...newItem, quantity }]);
//         }
//       } catch (error) {
//         console.error("Error adding to cart:", error);
//       }
//     } else {
//       const existingItemIndex = cartItems.findIndex(item => item.id === newItem.id);

//       setCartItems(prevItems => {
//         if (existingItemIndex > -1) {
//           return prevItems.map((item, index) => {
//             if (index === existingItemIndex) {
//               return { ...item, quantity: item.quantity + quantity };
//             }
//             return item;
//           });
//         } else {
//           return [...prevItems, { ...newItem, quantity }];
//         }
//       });
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     if (user) {
//       const itemRef = doc(db, 'carts', user.uid, 'items', itemId);
//       try {
//         await deleteDoc(itemRef);
//         setCartItems(prevItems => prevItems.filter(i => i.id !== itemId));
//       } catch (error) {
//         console.error("Error removing item from cart:", error);
//       }
//     } else {
//       setCartItems(prevItems => prevItems.filter(i => i.id !== itemId));
//     }
//   };

//   const incrementQuantity = async (itemId) => {
//     const item = cartItems.find(i => i.id === itemId);
//     if (item && user) {
//       const itemRef = doc(db, 'carts', user.uid, 'items', itemId);
//       try {
//         await updateDoc(itemRef, { quantity: item.quantity + 1 });
//         setCartItems(prevItems =>
//           prevItems.map(i => (i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i))
//         );
//       } catch (error) {
//         console.error("Error incrementing quantity:", error);
//       }
//     } else if (item) {
//       setCartItems(prevItems =>
//         prevItems.map(i => (i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i))
//       );
//     }
//   };

//   const decrementQuantity = async (itemId) => {
//     const item = cartItems.find(i => i.id === itemId);
//     if (item && user && item.quantity > 1) {
//       const itemRef = doc(db, 'carts', user.uid, 'items', itemId);
//       try {
//         await updateDoc(itemRef, { quantity: item.quantity - 1 });
//         setCartItems(prevItems =>
//           prevItems.map(i => (i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i))
//         );
//       } catch (error) {
//         console.error("Error decrementing quantity:", error);
//       }
//     } else if (item && item.quantity > 1) {
//       setCartItems(prevItems =>
//         prevItems.map(i => (i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i))
//       );
//     } else if (item && item.quantity === 1) {
//       removeFromCart(itemId);
//     }
//   };

//   return (
//     <CartContext.Provider value={{
//       cartItems,
//       addToCart,
//       removeFromCart,
//       cartItemCount,
//       incrementQuantity,
//       decrementQuantity,
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// }


// CartContext.js

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { db } from '../firebase/firebase';
// import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
// import { useAuth } from '../firebase/AuthContext';

// const CartContext = createContext();

// export function useCart() {
//   return useContext(CartContext);
// }

// export function CartProvider({ children }) {
//   const { user } = useAuth();
//   const [cartItems, setCartItems] = useState([]);
//   const [cartItemCount, setCartItemCount] = useState(0);

//   // Load cart items from localStorage if user is not logged in
//   useEffect(() => {
//     if (!user) {
//       const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//       setCartItems(storedCart);
//       setCartItemCount(storedCart.reduce((count, item) => count + item.quantity, 0));
//     }
//   }, [user]);

//   // Sync cart items with Firebase when user logs in
//   useEffect(() => {
//     const fetchCartItems = async () => {
//       if (user) {
//         const userCartRef = collection(db, 'carts', user.uid, 'items');
//         const snapshot = await getDocs(userCartRef);
//         const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setCartItems(items);
//         setCartItemCount(items.reduce((count, item) => count + item.quantity, 0));
//       }
//     };
//     if (user) {
//       fetchCartItems();
//     }
//   }, [user]);

//   // Save cart to localStorage whenever cartItems change and user is not logged in
//   useEffect(() => {
//     if (!user) {
//       localStorage.setItem('cart', JSON.stringify(cartItems));
//     }
//   }, [cartItems, user]);

//  // CartContext.js

// const addToCart = async (newItem) => {
//   const quantity = newItem.quantity || 1; // Default to 1 if no quantity is provided

//   if (user) {
//     const itemRef = doc(db, 'carts', user.uid, 'items', newItem.id);
//     const existingItem = cartItems.find(item => item.id === newItem.id);

//     try {
//       if (existingItem) {
//         // Update quantity if item exists
//         const newQuantity = existingItem.quantity + quantity;
//         await updateDoc(itemRef, { quantity: newQuantity });
//         setCartItems(prevItems =>
//           prevItems.map(i => (i.id === newItem.id ? { ...i, quantity: newQuantity } : i))
//         );
//       } else {
//         // Add new item if it doesn't exist
//         await setDoc(itemRef, { ...newItem, quantity });
//         setCartItems(prevItems => [...prevItems, { ...newItem, quantity }]);
//         setCartItemCount(prevCount => prevCount + 1);
//       }
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//     }
//   } else {
//     const existingItemIndex = cartItems.findIndex(item => item.id === newItem.id);

//     setCartItems(prevItems => {
//       if (existingItemIndex > -1) {
//         // Update quantity in local state if item exists
//         return prevItems.map((item, index) => {
//           if (index === existingItemIndex) {
//             return { ...item, quantity: item.quantity + quantity };
//           }
//           return item;
//         });
//       } else {
//         // Add new item to local state if it doesn't exist
//         setCartItemCount(prevCount => prevCount + 1);
//         return [...prevItems, { ...newItem, quantity }];
//       }
//     });
//   }
// };


//   const removeFromCart = async (itemId) => {
//     if (user) {
//       const itemRef = doc(db, 'carts', user.uid, 'items', itemId);
//       try {
//         await deleteDoc(itemRef);
//         const removedItem = cartItems.find(i => i.id === itemId);
//         setCartItems(prevItems => prevItems.filter(i => i.id !== itemId));
//         if (removedItem) setCartItemCount(prevCount => prevCount - removedItem.quantity);
//       } catch (error) {
//         console.error("Error removing item from cart:", error);
//       }
//     } else {
//       const removedItem = cartItems.find(i => i.id === itemId);
//       setCartItems(prevItems => prevItems.filter(i => i.id !== itemId));
//       if (removedItem) setCartItemCount(prevCount => prevCount - removedItem.quantity);
//     }
//   };

//   const incrementQuantity = async (itemId) => {
//     const item = cartItems.find(i => i.id === itemId);
//     if (item && user) {
//       const itemRef = doc(db, 'carts', user.uid, 'items', itemId);
//       try {
//         await updateDoc(itemRef, { quantity: item.quantity + 1 });
//         setCartItems(prevItems =>
//           prevItems.map(i => (i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i))
//         );
//         setCartItemCount(prevCount => prevCount + 1);
//       } catch (error) {
//         console.error("Error incrementing quantity:", error);
//       }
//     } else if (item) {
//       setCartItems(prevItems =>
//         prevItems.map(i => (i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i))
//       );
//       setCartItemCount(prevCount => prevCount + 1);
//     }
//   };

//   const decrementQuantity = async (itemId) => {
//     const item = cartItems.find(i => i.id === itemId);
//     if (item && user && item.quantity > 1) {
//       const itemRef = doc(db, 'carts', user.uid, 'items', itemId);
//       try {
//         await updateDoc(itemRef, { quantity: item.quantity - 1 });
//         setCartItems(prevItems =>
//           prevItems.map(i => (i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i))
//         );
//         setCartItemCount(prevCount => prevCount - 1);
//       } catch (error) {
//         console.error("Error decrementing quantity:", error);
//       }
//     } else if (item && item.quantity > 1) {
//       setCartItems(prevItems =>
//         prevItems.map(i => (i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i))
//       );
//       setCartItemCount(prevCount => prevCount - 1);
//     } else if (item && item.quantity === 1) {
//       removeFromCart(itemId);
//     }
//   };

//   return (
//     <CartContext.Provider value={{
//       cartItems,
//       addToCart,
//       removeFromCart,
//       cartItemCount,
//       incrementQuantity,
//       decrementQuantity,
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// }



// //---------------original----------------
// // // CartContext.js
import React, { createContext, useContext, useState, useEffect  } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);


   //after successful login Redirect user current page mean as it is previous page
  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

   //after successful login Redirect user current page mean as it is previous page
  // Save cart items to localStorage whenever cartItems change
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

  // function addToCart(newItem) {
  //   setCartItems(prevItems => {
  //     const itemIndex = prevItems.findIndex(item => item.id === newItem.id);
  //     if (itemIndex > -1) {
  //       // Product already exists in the cart, update the quantity
  //       return prevItems.map((item, index) => {
  //         if (index === itemIndex) {
  //           return {...item, quantity: item.quantity + 1};
  //         }
  //         return item;
  //       });
  //     } else {
  //       // Product does not exist, add new item to the cart
  //       setCartItemCount(prevCount => prevCount + 1);
  //       return [...prevItems, {...newItem, quantity: 1}];
  //     }
  //   });
  //   // setCartItemCount(prevCount => prevCount + 1);
  // }
  
  // function removeFromCart(item) {
  //   setCartItems(prevItems => {
  //     const remainingItems = prevItems.filter(i => i.id !== item.id);
  //     if (prevItems.length > remainingItems.length) {
  //       // Only decrement the cart item count if an item was actually removed
  //       setCartItemCount(prevCount => prevCount - 1);
  //     }
  //     return remainingItems;
  //   });
  // }

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
  

  // Agr same product ko 1 sy zyada time cart me bejna aur har time py cart count icon me 
  // number likha ay toh niche useeffect ko uncomment kar do.
  //  maslan 1 product ko 2 daffa 'add to cart' kiya hai toh cart icon me 2 likha ay ga.
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

//---------------original----------------

















// // CartContext.js
// // import React, { createContext, useContext, useState, useEffect  } from 'react';

// // const CartContext = createContext();

// // export function useCart() {
// //   return useContext(CartContext);
// // }

// // export function CartProvider({ children }) {
// //   const [cartItems, setCartItems] = useState([]);
// //   const [cartItemCount, setCartItemCount] = useState(0);
// //   function addToCart(item) {
// //     setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
// //     setCartItemCount(cartItemCount + 1); // Increment item count
// //   }

// //   function removeFromCart(item) {
// //     setCartItems((prevItems) => prevItems.filter((i) => i !== item));
// //     setCartItemCount(cartItemCount - 1);
// //   }

// //   function incrementQuantity(item) {
// //     setCartItems((prevItems) => {
// //       return prevItems.map((prevItem) => {
// //         if (prevItem === item) {
// //           return { ...prevItem, quantity: prevItem.quantity + 1 };
// //         }
// //         return prevItem;
// //       });
// //     });
// //   }

// //   function decrementQuantity(item) {
// //     setCartItems((prevItems) => {
// //       return prevItems.map((prevItem) => {
// //         if (prevItem === item && prevItem.quantity > 1) {
// //           return { ...prevItem, quantity: prevItem.quantity - 1 };
// //         }
// //         return prevItem;
// //       });
// //     });
// //   }

// //   return (
// //     <CartContext.Provider value={{ cartItems, addToCart, addToCartProductdetail, removeFromCart, cartItemCount, incrementQuantity, decrementQuantity, }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // }