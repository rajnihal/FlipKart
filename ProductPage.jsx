// ProductPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate();

  const handleMoveToCart = () => {
    // Add logic for moving to the cart
    console.log('Move to Cart clicked');
    navigate('/cart');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Products</h2>
      <button
        style={{
          padding: '15px',
          backgroundColor: '#ff3f6c',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={handleMoveToCart}
      >
        Move to Cart
      </button>
    </div>
  );
};

export default ProductPage;
