// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css'; // Import the app.css file
import AuthenticationPage from './AuthenticationPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ProductPage from './ProductPage';
import CartPage from './CartPage';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to Flipkart</h1>
      </div>
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
