// CartPage.jsx

import React, { useState } from 'react';
//eslint-disable-next-line no-unused-vars
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

const CartPage = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate(); // Import useNavigate
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    // Add more items as needed
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    // Add your actual checkout logic here
    // This is just a placeholder
    alert('Checkout successful!'); 
    setCartItems([]); // Clear the cart after checkout
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <div>
          <h3>Total: ${calculateTotal()}</h3>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
