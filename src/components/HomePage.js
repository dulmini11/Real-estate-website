import React, { useState } from 'react';
import './HomePage.css'; 
import HomePageWall2 from "../components/images/HomePageWall2.jpeg"; 
import Logo from "../components/images/logo.png";
import login from "../components/images/login.png"

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log("Search Term:", searchTerm); // Handle search functionality here
  };

  return (
    <div className="homepage-container">
      
      {/* Header */}
      <header className="header">
    <img src={Logo} alt="Logo" className="logo" />

    <nav className="navbar">
        <ul className="navbar-items">
            <li><a href="/">Home</a></li>
            <li><a href="/sale">Sale</a></li>
            <li><a href="/rent">Rent</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>

    <img src={login} alt="Login" className="login" />
</header>



      {/* Main Content Container */}
    <div className="HomePageContaner">
      <div className="image-content">
        <img src={HomePageWall2} alt="HomePage Wall" />
       <div className="text-overlay">
         <p>Find Where You Belong, Where Comfort Meets Convenience</p>
       </div>
       <div className="search-bar-overlay">
         <h2>Search properties for sale and to rent</h2>
       <div className="search-bar-container">
       <input
            type="text"
            className="search-input"
            placeholder="e.g. Bath, NW3, or Leeds station"
            value={searchTerm}
            onChange={handleSearch}
        />
         <button className="search-button for-sale">For sale</button>
         <button className="search-button to-rent">To rent</button>
        </div>
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
