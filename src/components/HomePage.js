import React, { useState } from 'react';
import './HomePage.css';
import HomePageWall2 from "../components/images/HomePageWall2.jpeg";
import Logo from "../components/images/logo.png";
import login from "../components/images/login.png";
import heartIcon from "../components/images/heart.png"; // Add heart icon
import propertiesData from "../data/properties.json"; // Import properties data
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [favorites, setFavorites] = useState([]); // State to manage favorites

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favoriteId) => favoriteId !== id)
        : [...prevFavorites, id]
    );
  };

  const filteredProperties = propertiesData.properties.filter((property) => {
    if (selectedFilter === "All") return true;
    return property.status === selectedFilter;
  });

  

  const handleDragStart = (e, propertyId) => {
    // Store the dragged item ID in the drag event
    e.dataTransfer.setData('propertyId', propertyId);
    e.target.style.opacity = 0.5; // Optional: makes the dragged item look faded
  };

  const handleDragEnd = (e) => {
    // Reset the opacity when the drag ends
    e.target.style.opacity = 1;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const propertyId = e.dataTransfer.getData('propertyId');
    if (!favorites.includes(propertyId)) {
      setFavorites([...favorites, propertyId]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop by preventing the default behavior
  };

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((favoriteId) => favoriteId !== id);
    setFavorites(updatedFavorites);
  };
  
  // Handle remove all favorites
  const handleRemoveAllFavorites = () => {
    setFavorites([]); // Clear all favorites
  };

  return (
    <div className="homepage-container">
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
          <img src={login} alt="Login" className="login" />
        </Link>
      </header>

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

  {/* Main content with two columns */}
  <div className="main-content">
    {/* Left: Items Container */}
    <div className="HomePage-items-Contaner">
      {filteredProperties.map((property) => (
        <div
          className="item-box"
          key={property.id}
          draggable
          onDragStart={(e) => handleDragStart(e, property.id)}
          onDragEnd={handleDragEnd}
        >
          <img src={process.env.PUBLIC_URL + (Array.isArray(property.picture) ? property.picture[0] : property.picture)} className="property-image"alt={property.location}/>
          <div className="property-details">
            <h3>{property.type}</h3>
            <h3>{property.bedrooms} Bedrooms</h3>
            <p>{property.location}</p>
            <p>Price: ${property.price}</p>
            <p>Status: {property.status}</p>
            <Link to={`/property/${property.id}`} className="view-details">View Details</Link>

            <div className="favorite-container">
              <img
                src={heartIcon}
                alt="Favorite"
                className={`heart-icon ${favorites.includes(property.id) ? "active" : ""}`}
                onClick={() => toggleFavorite(property.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Right: Favorites Container */}
<div
  className="favorites-container"
  onDrop={handleDrop}
  onDragOver={handleDragOver}
>
  <h2>Your Favorites</h2>
  {/* Remove All Button */}
  <button
    className="remove-all-button"
    onClick={handleRemoveAllFavorites}
  >
    Remove All
  </button>
  {favorites.map((favoriteId) => {
    const property = propertiesData.properties.find((prop) => prop.id === favoriteId);
    return (
      <div className="item-box" key={favoriteId}>
        <button
          className="remove-item"
          onClick={() => handleRemoveFavorite(favoriteId)}
        >
          ✖
        </button>
        <img src={process.env.PUBLIC_URL + (Array.isArray(property.picture) ? property.picture[0] : property.picture)} className="property-image"alt={property.location}/>
        <div className="property-details">
          <h3>{property.type}</h3>
          <h3>{property.bedrooms} Bedrooms</h3>
          <p>{property.location}</p>
          <p>Price: ${property.price}</p>
          <p>Status: {property.status}</p>
          <Link to={`/property/${property.id}`} className="view-details"> View Details </Link>

        </div>
      </div>
    );
  })}
</div>

  </div>

  <footer className="footer">
    <p>&copy; 2024 My Website. All Rights Reserved.</p>
  </footer>
</div>
  );
};

export default HomePage;
