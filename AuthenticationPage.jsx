// AuthenticationPage.jsx

import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './app.css'; // Import the app.css file
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';


const AuthenticationPage = () => {
  return (
    <div className="container">
      <div className="login-container">
        <h2>Welcome to Flipkart</h2>
        <nav>
          <ul>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="register">Register</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </div>
    </div>
  );
};


export default AuthenticationPage;
