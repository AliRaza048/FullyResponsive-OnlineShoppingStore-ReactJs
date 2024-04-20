import React, { useState, useEffect } from 'react';
import Products from '../ProductCarousal1/Products';
import './Searchproduct.css'
import { useCart } from '../AddToCart/CartContext';

const Searchproduct = ({ productData }) => {
  const { addToCart} = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [isListVisible, setIsListVisible] = useState(false);

  
  const filterProducts = (products, query) => {
    return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
  };
  const filteredProducts = filterProducts(productData, searchQuery);



  const handleDocumentClick = (e) => {
    // Check if the clicked element is outside the search container
    if (!e.target.closest('.search-products-container')) {
      setIsListVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('click', handleDocumentClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []); 

  return (
    // <div className={`search-products-container ${filteredProducts.length > 0 ?  'show-list' : ''}`}>
    <div className={`search-products-container ${isListVisible  ? 'show-list' : ''}`}>
      <input
        type='text'
        className='searchbar'
        placeholder='Search item'
        value={searchQuery}
        onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsListVisible(true); // Show the list when typing in the search bar
          }}
      />
      {isListVisible && searchQuery && (
        <div className="item-list">
          {filteredProducts.map((item) => (
            <li key={item.id} className="search-products-item">
            <Products
              key={item.id}
              id={item.id}
              name={item.name}
              imageurl={item.imageurl}
              price={item.price}
              addToCart={addToCart}
            />
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchproduct;
