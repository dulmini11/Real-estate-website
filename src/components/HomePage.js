import React from 'react';
import './HomePage.css'; // Main styling for the page
import HomePageWall2 from "../components/images/HomePageWall2.jpeg"; // Image path

export const HomePage = () => {
  return (
    <div className="homepage-container">
      
      {/* Header */}
      <header className="header">
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
        <p>this is one</p>
        <p>this is two</p>
      </div> 
      
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 My Website. All Rights Reserved.</p>
      </footer>

    </div>
  );
};

export default HomePage;
