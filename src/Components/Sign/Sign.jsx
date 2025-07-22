import React, { useState } from 'react';
import { FaGoogle, FaApple, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import '../../styles/Login.css';
import { Link } from 'react-router';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email, 'Password:', password, 'Remember Me:', rememberMe);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic
    console.log('Google login clicked');
  };

  const handleAppleLogin = () => {
    // Handle Apple login logic
    console.log('Apple login clicked');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome Back</h2>
        <p>Please enter your details to sign in</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-with-icon">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
           <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button" 
                className="toggle-password" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          
          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          </div> 
          
          <button type="submit" className="login-button">Sign In</button>
        </form>
        
        <div className="divider">
          <span>OR</span>
        </div>
        
        <div className="social-logins">
          <button type="button" className="social-button google" onClick={handleGoogleLogin}>
            <FaGoogle className="social-icon" />
            Sign in with Google
          </button>
          <button type="button" className="social-button apple" onClick={handleAppleLogin}>
            <FaApple className="social-icon" />
            Sign in with Apple
          </button>
        </div>
        
        <div className="signup-link">
          Don't you have an account? <Link to="/Login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;