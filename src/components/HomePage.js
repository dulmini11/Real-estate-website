import React, { useState } from 'react';
import './HomePage.css';
import HomePageWall2 from "../components/images/HomePageWall2.jpeg";
import Logo from "../components/images/logo.png";
import login from "../components/images/login.png";
import propertiesData from "../data/properties.json"; // Import properties data
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All"); // State to track selected filter

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log("Search Term:", searchTerm); // Handle search functionality here
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter); // Update the selected filter
  };

  // Filter properties based on the selected filter
  const filteredProperties = propertiesData.properties.filter((property) => {
    if (selectedFilter === "All") return true;
    return property.status === selectedFilter;
  });

  return (
    <div className="homepage-container">
      
      {/* Header */}
      <header className="header">
        <a href="/" className="logo-link">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
        <nav className="navbar">
          <ul className="navbar-items">
            <li><a href="#" onClick={() => handleFilterChange("All")}>Home</a></li>
            <li><a href="#" onClick={() => handleFilterChange("Sale")}>Sale</a></li>
            <li><a href="#" onClick={() => handleFilterChange("Rent")}>Rent</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
        <Link to="/LoginRegister">
        <img src={login} alt="Login" className="login" /></Link>
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

      {/* Properties Section */}
      <div className="HomePage-items-Contaner">
        {filteredProperties.map((property) => (
          <div className="item-box" key={property.id}>
            <img 
              src={process.env.PUBLIC_URL + property.picture} 
              className="property-image" 
              alt={property.location} 
            />
            <div className="property-details">
              <h3>{property.type}</h3>
              <h3>{property.bedrooms} Bedrooms</h3>
              <p>{property.location}</p>
              <p>Price: ${property.price}</p>
              <p>Status: {property.status}</p>
              <a href={property.url} className="view-details">View Details</a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
