// LoginPage.jsx

import React, { useState } from "react";
// eslint-disable-next-line
import { Link, useNavigate, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css'; // Import the app.css file
import ProductPage from "./ProductPage";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login logic here
    // For demonstration purposes, we assume login is successful
    // In a real app, you would check credentials and handle the login logic accordingly

    // Display toast message
    alert('Login successful!'); 
    toast.success('Successful Login', {
      position: "top-right",
      autoClose: 2000, // Automatically close the toast after 2000 milliseconds (2 seconds)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Redirect to the main product page on successful login
    navigate('/products');
  };

  return (
    <div>
      <h3>Login</h3>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>

      <Routes>
        <Route path="/products" element={<ProductPage />} />
      </Routes>

      {/* Toast container for displaying notifications */}
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
