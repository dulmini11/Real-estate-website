import React, { useState } from 'react';
import './LoginRegister.css';
import googleIcon from './images/google_icon.png';
import fbIcon from './images/fb_icon.png';
import instagramIcon from './images/instagram_icon.png';
import Logo from './images/logo.png'; // Import logo image

const LoginRegister = () => {
  const [isActive, setIsActive] = useState(false); // To toggle between login and register forms
  
  // State for login form
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // State for register form
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const toggleToRegister = () => setIsActive(true); // Show register form
  const toggleToLogin = () => setIsActive(false); // Show login form

  // Login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginUsername || !loginPassword) {
      alert("All fields are required");
      return;
    }
    alert(`Logged in with username: ${loginUsername}`);
  };

  // Register form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!registerUsername || !registerEmail || !registerPassword) {
      alert("All fields are required");
      return;
    }
    alert(`Registered with username: ${registerUsername}`);
  };

  // Handle filter change (if needed)
  const handleFilterChange = (filter) => {
    console.log(`Filtering by: ${filter}`);
    // Add filtering logic here
  };

  return (
    <div>
      
        <a href="/" className="logo-link">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
        
    
      <div className={`container ${isActive ? 'active' : ''}`}>
        {/* Login Form */}
        <div className="form-box login">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input 
                type="text" 
                placeholder="Username" 
                value={loginUsername} 
                onChange={(e) => setLoginUsername(e.target.value)} 
                required 
              />
            </div>
            <div className="input-box">
              <input 
                type="password" 
                placeholder="Password" 
                value={loginPassword} 
                onChange={(e) => setLoginPassword(e.target.value)} 
                required 
              />
            </div>
            <div className="forgot-link">
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <p>or login with social platforms</p>
            <div className="social-icons">
              <a href="#"><img src={googleIcon} alt="Google Icon" /></a>
              <a href="#"><img src={instagramIcon} alt="Instagram Icon" /></a>
              <a href="#"><img src={fbIcon} alt="Facebook Icon" /></a>
            </div>
          </form>
        </div>

        {/* Registration Form */}
        <div className="form-box register">
          <form onSubmit={handleRegisterSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
              <input 
                type="text" 
                placeholder="Username" 
                value={registerUsername} 
                onChange={(e) => setRegisterUsername(e.target.value)} 
                required 
              />
            </div>
            <div className="input-box">
              <input 
                type="email" 
                placeholder="Email" 
                value={registerEmail} 
                onChange={(e) => setRegisterEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="input-box">
              <input 
                type="password" 
                placeholder="Password" 
                value={registerPassword} 
                onChange={(e) => setRegisterPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn">Register</button>
            <p>or register with social platforms</p>
            <div className="social-icons">
              <a href="#"><img src={googleIcon} alt="Google Icon" /></a>
              <a href="#"><img src={instagramIcon} alt="Instagram Icon" /></a>
              <a href="#"><img src={fbIcon} alt="Facebook Icon" /></a>
            </div>
          </form>
        </div>

        {/* Toggle Panel */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Already have an account?</p>
            <button className="btn register-btn" onClick={toggleToRegister}>Register</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Don't have an account?</p>
            <button className="btn login-btn" onClick={toggleToLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
