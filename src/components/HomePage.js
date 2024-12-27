import React from 'react';
import './HomePage.css'; 
import HomePageWall2 from "../components/images/HomePageWall2.jpeg"; 
import Logo from "../components/images/logo.png";

export const HomePage = () => {
  return (
    <div className="homepage-container">
      
      {/* Header */}
      <header className="header">
        <img src={Logo} alt="Logo" className="logo" /> {/* Add the logo here */}
        <h1>Welcome to My Homepage</h1>
      </header>

      {/* Main Content Container */}
      <div className="HomePageContaner">
        <div className="image-content">
          <img src={HomePageWall2} alt="HomePage Wall" />
          <div className="text-overlay">
            <p>"Find Where You Belong, Where Comfort Meets Convenience."</p>
          </div>
        </div>
      </div>

      {/* Additional content section */}
      <div className="HomePage-items-Contaner"> 
        <div className="item-box">Item 1</div>
        <div className="item-box">Item 2</div>
        <div className="item-box">Item 3</div>
        <div className="item-box">Item 4</div>
        <div className="item-box">Item 5</div>
        <div className="item-box">Item 6</div>
        <div className="item-box">Item 7</div>
        <div className="item-box">Item 8</div>
        <div className="item-box">Item 9</div>
      </div> 
      
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 My Website. All Rights Reserved.</p>
      </footer>

    </div>
  );
};

export default HomePage;
